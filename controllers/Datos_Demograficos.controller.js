const Datos_Demograficos = require('../models/Datos_Demograficos.model');

// Función para recuperar la colección de Datos_Demografico
const getDatos_Demografico = async(req, res) => {
    try {
        const Datos_Demografico = await Datos_Demograficos.find({});
        res.status(200).json(Datos_Demografico);
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

// Función para recuperar un elemento de la colección con base en el _id
const getDatos_DemograficosById = async(req, res) => {
    try {
        // id proviene de una variable en la URL
        const { id } = req.params;
        const Datos_Demografico = await Datos_Demograficos.find({'_id': id});
        res.status(200).json(Datos_Demografico);
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

// Función que agrega un elemento a la colección
const setDatos_Demograficos = async(req, res) => {
    try {
        const SimpleDatos_Demograficos= await Datos_Demograficos.create( req.body );
        res.status(200).json(SimpleDatos_Demograficos);
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

// Función para actualizar un elemento de la colección usando su _id
const updateDatos_Demograficos = async(req, res) => {
    try {
        const { id } = req.params;
        const UpdatedDatos_Demograficos = await Datos_Demograficos.findByIdAndUpdate(id, req.body );
        if (!UpdatedDatos_Demograficos) {
            // Si no se encuentra el documento, se devuelve un error 400
            // y un mensaje indicando que no se encontró el documento
            return res.status(400).json({
                status: "error",
                message: "Document not found"
            });
        }
        const Datos_Demografico = await Datos_Demograficos.find({'_id': id});
        res.status(200).json(Datos_Demografico);
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

// Función para eliminar un elemento de la colección con base en el _id
const deleteDatos_DemograficosById = async(req, res) => {
    try {
        // id proviene de una variable en la URL
        const { id } = req.params;
        const Datos_Demografico = Datos_Demograficos.find({ '_id':id });
        if (!Datos_Demografico) {
            res.status(400).json({
                message: "Document not found"
            });
        }
        const deletedDatos_Demografico = await Datos_Demograficos.deleteOne({'_id': id});
        res.status(200).json({
            message: "Document deleted"
        });
    } catch (error) {
        res.status(500).json({
            status: "error: " + error.message
        });
    }
}

module.exports = {
    getDatos_Demografico,
    getDatos_DemograficosById,
    setDatos_Demograficos,
    updateDatos_Demograficos,
    deleteDatos_DemograficosById
}