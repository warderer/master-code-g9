// https://swapi.dev/
// ENDPOINT
// https://swapi.dev/api/people/1/

// Paso #1 Necesito llamar a la biblioteca Request
const request = require("request");

// El método request.get tiene dos parametros: el endPoint(URL) y el Callback
request.get('https://swapi.dev/api/people/1/', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Trae la información esta en formato JSON
  const bodyEnFormatoJs = JSON.parse(body); //Parse convierte un objeto JSON en un objeto JavaScript
  console.log(bodyEnFormatoJs);
});