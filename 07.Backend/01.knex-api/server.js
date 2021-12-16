const express = require('express');
const homeRoutes = require('./routes/homeRoutes');

const app = express();

/* Configuración Básica de Express */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Aquí debo poner mis rutas*/
app.use('/api/v1', homeRoutes);
/* Aquí terminan mis rutas */

// Aquí inicio el servidor, para que escuche peticiones en el puerto 3000.
// Puedo poner el número de puerto que yo quiera.
app.listen(3000,() => {
    console.log('Server ON');
});