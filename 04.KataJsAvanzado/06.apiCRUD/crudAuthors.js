/* GOOD READS API */
// DOCUMENTACIÓN: https://goodreads-devf-aaron.herokuapp.com/docs/
// URI DE LA API: https://goodreads-devf-aaron.herokuapp.com/api/v1/

// Traigo a Request para poder comenzar a hacer peticiones
const request = require('request');

const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

// Lista a Todos los Authors
const listAuthors = () => {
    request.get(URI, (error, response, body) => {
        if (response.statusCode === 200) {
            const authors = JSON.parse(body);
            console.log(authors);
        } else {
            console.log(response.statusCode, response.statusMessage);
            //Ejemplo: 404 Not Found
        }
    });
}
//listAuthors();

// Listar un Author por ID
const getAuthor = (id) => {
    request.get(URI+id+'/', (error, response, body) => {
        if (response.statusCode === 200) {
            const author = JSON.parse(body);
            console.log(author);
        } else {
            console.log(response.statusCode, response.statusMessage);
            //Ejemplo: 404 Not Found
        }
    });
}
//getAuthor(14330);


// CREAR UN AUTHOR
// Necesito crear un objeto con mi info a crear
// const jsonSend = {
//     name: "Ramiro",
//     last_name: "Villareal",
//     nacionalidad: "MX",
//     biography: "Elite Hacker JS",
//     gender: "M",
//     age: 30,
//     is_alive: true
// };

//function createAuthor (jsonData)
const createAuthor = (jsonData) => {
    const objConfig = {
        url: URI,
        form: jsonData
    }

    request.post(objConfig, (error, response, body) => {
        if (response.statusCode === 201) {
            const author = JSON.parse(body);
            console.log(author);
        } else {
            console.log(response.statusCode, response.statusMessage);
            //Ejemplo: 404 Not Found
        }
    });
}
//createAuthor(jsonSend);


// PATCH a un Author
const updatedData = {
    name: "Roger",
    age: 32
};

const patchAuthor = (id, jsonData) => {
    const objConfig = {
        url: URI+id+'/',
        form: jsonData
    }

    request.patch(objConfig, (error, response, body) => {
        if (response.statusCode === 200) {
            const author = JSON.parse(body);
            console.log(author);
        } else {
            console.log(response.statusCode, response.statusMessage);
            //Ejemplo: 404 Not Found
        }
    });
}
//patchAuthor(14463,updatedData);


// DELETE A UN AUTHOR
const deleteAuthor = (id) => {
    request.delete(URI+id+'/', (error, response, body) => {
        if (response.statusCode === 204) {
            console.log("El Author ha sido eliminado éxitosamente");
        } else {
            console.log(response.statusCode, response.statusMessage);
            //Ejemplo: 404 Not Found
        }
    });
}
//deleteAuthor(14463);

module.exports = {
    listAuthors,
    getAuthor,
    createAuthor,
    patchAuthor,
    deleteAuthor
}