//* VAMOS A VER LA CONFIGURACIÓN BÁSICA DE EXPRESS.JS
//* En backend a diferencia del frontend no podemos usar import algo from 'algo'
//* En nuestro backend usamos NODEJS, el cual no trae esa configuración por lo cual
//* usamos JS VANILLA no existe import, por lo que en backend usamos require.

const express = require ('express')
const colors = require ('colors')
const app = express() // app, es la parte principal de mi aplicación
const morgan = require ('morgan');

//? settings 
app.set('port', process.env.PORT || 3000) // establecemos el número de puerto, y gracias a esto podemos usar el puerto en cualquier parte de la app
app.set('json spaces', 2)                                         

//? MIDDLEWARE
app.use(morgan('dev'))
app.use(express.json()) //este metodo le permite a mi servidor recibir formatos JSON y poder enterlos
app.use(express.urlencoded({extended: false}))

//? routes
app.use(require ('./routes/routes.js'))
app.use('/api/movies' ,require ('../src/routes/movies.js'))

//? starting the server
app.listen(app.get('port'),() => {
    console.log(`SERVIDOR CORRIENDO EN: http://localhost:${app.get('port')}`.bgRed)
})
