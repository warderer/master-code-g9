// Dependiendo de la variable de entorno del sistema
// voy a usar una configuración adecuada de base de datos

//Tomamos la configuración del entorno de Node, si no existe usamos development
const env = process.env.NODE_ENV || 'development';

const knexfile = require('./knexfile');
const knex = require ('knex');

module.exports = knex(knexfile[env]);