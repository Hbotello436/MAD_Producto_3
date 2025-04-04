// Definiendo un objeto de tipo mongoose
const mongoose = require('mongoose');

// Definiendo la estructura del documento Datos_Demograficos
const Datos_DemograficosSchema = mongoose.Schema(
    {
        Country: {
            type: String,
            required: true, // Campo obligatorio
        },
        "State": {
            type: String,
            required: true, // Campo obligatorio
        },
        "State FIPS Code": {
            type: Number,
        },
        "Country FIPS Code": {
            type: Number,
        },
        "FIPS": {
            type: Number,
        },
        "Total Population": {
            type: Number,
        },
        "Male Population": { 
            type: Number,
        },
        "Female Population": {
            type: Number,
        },
        "Total Race Responses": {
            type: Number,
        },
        "White Alone": {
            type: Number,
        },  
        "Black or African American Alone": {
            type: Number,
        },
        "Hispanic or Latino": {
            type: Number,
        },
    },
    {collection: 'Datos_Demograficos'} // Nombre de la colección en MongoDB
);

// Creando el modelo basado en el esquema
const DatosDemograficos = mongoose.model('Datos_Demograficos', Datos_DemograficosSchema);

module.exports = DatosDemograficos;