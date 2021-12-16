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

module.exports = {
    createHome,
}