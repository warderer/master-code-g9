const goodReadsCrud = require('./crudAuthors');

// const goodReadsCrud = {
//     listAuthors,
//     getAuthor,
//     createAuthor,
//     patchAuthor,
//     deleteAuthor
// }

// Listo mis Autores
goodReadsCrud.listAuthors();

// Ver un Author
goodReadsCrud.getAuthor(14330);

// Crear un Author
const jsonSend = {
    name: "Ramiro",
    last_name: "Villareal",
    nacionalidad: "MX",
    biography: "Elite Hacker JS",
    gender: "M",
    age: 30,
    is_alive: true
};
goodReadsCrud.createAuthor(jsonSend);