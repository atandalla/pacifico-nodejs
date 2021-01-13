//CREACION DE LA ESTRUCTURA DEL PRODUCTO
const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    numCaja: {
        type: String,
        required: true
    }

}, {
    timestamps: true //Time
});


module.exports = model("Turn", ProductSchema);