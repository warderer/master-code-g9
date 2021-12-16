const createHome = (req, res) => {
    //Aquí es donde ejecuto la lógica de crear mi home
    res.send({ message: 'Home Creado (Fake)'});
};

module.exports = {
    createHome,
}