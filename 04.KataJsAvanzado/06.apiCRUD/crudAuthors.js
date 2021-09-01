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