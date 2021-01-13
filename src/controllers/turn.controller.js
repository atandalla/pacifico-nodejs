const fs = require('fs').promises;
const productsCtrl = {};


///// IMPORTAR MODELOS
const Turn = require("../models/Turn");
let cont = 0

productsCtrl.renderTurns = function(req, res) {
    res.render("turnos/turnos.ejs", { cont });
};
productsCtrl.renderTurnsRei = function(req, res) {
    cont = 0
    res.redirect("/turnos");
};

productsCtrl.renderPagination = (req, res, next) => {
    let perPage = 6
    let page = req.params.page || 1;

    Turn
        .find({}) // finding all documents
        .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
        .limit(perPage) // output just 9 items
        .exec((err, products) => {
            Turn.estimatedDocumentCount((err, count) => { // count to calculate the number of pages
                if (err) return next(err);
                res.render('turnos/reporte.ejs', {
                    products,
                    current: page,
                    pages: Math.ceil(count / perPage)
                });
            });
        });



};

productsCtrl.createNewTurn = async(req, res) => {

    cont = cont + 1;
    console.log('verificacion si entra a crear producto');

    const { numCaja } = req.body;

    //CREACION DE LA ESTRUCTURA PARA EL INGRESO EN LA BASE DE DATOS
    const newProduct = new Turn({ numCaja });

    // GUARDAR SCHEMA COMPLETO EN LA BASE DE DATOS        
    await newProduct.save();

    // REDIRECCIONAMIENTO A LA RUTA
    res.redirect("/turnos");
};


productsCtrl.deleteTurn = async(req, res) => {
    console.log('entra')
    await Turn.findByIdAndDelete(req.params.id);
    res.redirect("/reporteTurnos/1");
};

///////////// aparte




module.exports = productsCtrl;