const ModelHome = require('../models/home');

const createHome = (req, res) => {
    //Aquí es donde ejecuto la lógica de crear mi home
    //res.send({ message: 'Home Creado (Fake)'});
    ModelHome.create(req.body)
    .then( (row) => {
        res.status(201).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
};

const findAllHomes = (req, res) => {
    ModelHome.findAll()
    .then( (row) => {
        res.status(200).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
}

module.exports = {
    createHome,
    findAllHomes
}