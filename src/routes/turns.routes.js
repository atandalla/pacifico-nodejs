const express = require("express");
const router = express.Router();

// Controller
const {

    createNewTurn,
    renderTurns,
    renderPagination,
    deleteTurn,
    renderTurnsRei

} = require("../controllers/turn.controller");

//////////////////// NUEVO TURNO //////////////////// 
router.get("/turnos", renderTurns);
router.get("/turnosR", renderTurnsRei);

///REPORTES TURNOS
router.get("/reporteTurnos/:page", renderPagination);

// POST PARA LA CREACION DEL NUEVO TURNO
router.post("/reporte/nuevoTurno", createNewTurn);

//ELIMINAR TURNO
router.delete("/reporte/deleteTurno/:id", deleteTurn);

module.exports = router;