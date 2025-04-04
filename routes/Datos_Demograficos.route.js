const express = require('express');
const router = express.Router();
const {
    getDatos_Demografico,
    getDatos_DemograficosById,
    setDatos_Demograficos,
    updateDatos_Demograficos,
    deleteDatos_DemograficosById,
} = require('../controllers/Datos_Demograficos.controller');

// Endpoint para recuperar toda la colección de Datos_Demograficos
router.get('/all', getDatos_Demografico);
// Endpoint para recuperar un elemento de la colección Datos_Demograficos
router.get('/ById/:id', getDatos_DemograficosById);
// Endpoint para agregar un nuevo elemento a la coleeción Datos_Demografico
router.post('/add', setDatos_Demograficos);
// Endpoint para la actualización de un elemento de la colección Datos_Demografico
router.put('/modify/:id', updateDatos_Demograficos);
// Endpoint para la eliminación de un elemento de la colección Datos_Demograficos
router.delete('/less/:id', deleteDatos_DemograficosById);

module.exports = router;


