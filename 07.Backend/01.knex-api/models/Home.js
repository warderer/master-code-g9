// El MODELO se encarga de traer los datos de la base de datos.
// NO SE ENCARGA de validar datos, ni resolver promesas, eso es trabajo
// del CONTROLADOR en MVC (Modelo Vista Controlador)

/* Conectarme a la base de datos */
// config.js exporta la conf. de la INSTANCIA ACTIVA de la base de datos
// con sus detalles de conexión
const knex = require('../config');

const create = (bodyHome) => {
    //Crear un nuevo registro en la tabla Homes
    //bodyHome es un objeto que contiene los valores a insertar

    //Aquí ejecutamos la lógica del INSERT pero con KNEX.
    return knex // Retorno una PROMESA, para que lógica de THEN y CATCH la haga a nivel de controlador
        .insert(bodyHome) // Qué datos voy a insertar? {title: titulo, address: x, guests: 5}
        .into('homes') // ¿De qué tabla? - FROM homes
        .returning(['house_id', 'title', 'description', 'guests', 'address', 'active', 'created_at'])
};

//Obtener todos los registros de la tabla HOMES
const findAll = () => {
    return knex
        .select('*')
        .from('homes')
};

const findOne = (houseId) => {
    return knex
        .select('*')
        .from('homes')
        .where({ house_id: houseId });
};

const update = (houseId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate)
        .from('homes')
        .where({ house_id: houseId })
        .returning('*')
}

module.exports = {
    create,
    findAll,
    findOne,
    update
};