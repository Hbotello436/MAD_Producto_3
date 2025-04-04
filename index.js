// Invocación de la librería express
const express = require('express');
// Invocación de la libreria mongoose para conexión a base de datos de mongodb
const mongoose = require('mongoose');
// Importar las rutas de la colección Review
const Datos_DemograficosRoute = require('./routes/Datos_Demograficos.route');

// Inicialización de la aplicación basada en express
const app = express();
// Incorporando el parser de JSON
app.use( express.json() );

// Tareas CRUD y sus métodos
// C - Create (Crear, agregar) ---> post
// R - Read (Leer o recuperar) ---> get
// U - Update (Actualizar) -------> put
// D - Delete (Borar o eliminar) -> delete

// Endpoint por defecto
app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor de APIs');
});

// Endpoints de la colección Reviews
app.use('/api/Datos_Demografico', Datos_DemograficosRoute);

// Definiendo la conexión a base de datos a través de mongoose
// La conexión a base de datos es de tipo promesa, y tienes que agregar el nombre de la base de datos
// El nombre de la base de datos es Demografic
// La cadena de conexión es la siguiente:
// mongodb+srv://<usuario>:<contraseña>@cluster0.pwyru.mongodb.net/<nombre_base_datos>?retryWrites=true&w=majority
// La cadena de conexión es la siguiente:

mongoose.connect('mongodb+srv://hbotello:Botello360@cluster0.pwyru.mongodb.net/Demografic?retryWrites=true&w=majority&appName=Cluster0')
.then( () => {
    console.log('Conectado a la base de datos de manera exitosa');
    app.listen(3000, () => {
        console.log('Servidor respondiendo en el puerto 3000');
    });
})
.catch( () => console.log('Ocurrió un problema al conectar la base de datos') )

