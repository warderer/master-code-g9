// Traigo a Request para poder comenzar a hacer peticiones
const request = require('request');

const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

// Ejemplo de Peticion que NO FUNCIONA, por temas de asincronismo
// Lista a Todos los Authors
const listAuthors = () => {
    return request.get(URI, (error, response, body) => {
        if (response.statusCode === 200) {
            const authors = JSON.parse(body);
        } else {
            console.log(response.statusCode, response.statusMessage);
            //Ejemplo: 404 Not Found
        }
    });
}
console.log(listAuthors());
