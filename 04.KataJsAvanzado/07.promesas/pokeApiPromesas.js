// POKEAPI
// https://pokeapi.co
// ENDPOINTS
// https://pokeapi.co/api/v2/pokemon/pikachu

//#1 Traigo a Request
const request = require('request');

//#2 Declaro mi URI de mi API
const URI = 'https://pokeapi.co/api/v2/pokemon/';

// Funcion que pida un Pokemon y me devuelva sus tipos
function getPokemonTypeByName (name) {
    // Es buena practica revisar si la API es sensible a mayusculas/minusculas
    // La pokéapi no lo es, y podriamos usar un lowercase para el nombre.
    request.get(URI + name, function (error, response, body) {
    // Si petición es éxitosa, devuelveme la data
        if (response.statusCode === 200) {
            const bodyEnFormatoJs  = JSON.parse(body); //Parse convierte un objeto JSON en un objeto JavaScript
            //console.log(bodyEnFormatoJs);
            const typePokemon = bodyEnFormatoJs.types.map((objeto)=>objeto.type.name);
            console.log(`El tipo de ${name} es: ${typePokemon}`);
        } else {
            //Si el codigo de estado es cualquier otro, muestrame el mensaje de error
            //console.log("Ocurrio un error:",error);
            console.log(`Ocurrio un error: ${response.statusCode} ${response.statusMessage}`);
        }
    });
}

// DECLARACIÓN de mi PROMESA
function getPokemonByName(name){
    return new Promise((resolve, reject) => {
        request.get(URI + name, function (error, response, body) {
            // Si petición es éxitosa, devuelveme la data
            if (response.statusCode === 200) {
                const bodyEnFormatoJs  = JSON.parse(body); //Parse convierte un objeto JSON en un objeto JavaScript
                //Si la petición es exitosa, devuelvo el contenido del body en formato de objeto de JS
                resolve(bodyEnFormatoJs);
            } else {
                //Si el codigo de estado es cualquier otro, RECHAZA la promesa
                reject(`Ocurrio un error: ${response.statusCode} ${response.statusMessage}`);
            }
        });
    });
}

// EJECUCIÓN DE LA PROMESA, FORMA #1
// Resolviendo Promesas con .then y .catch
// Traer los tipos del pokemon
function getPokemonTypeByNameDos (pokemonName) {
    getPokemonByName(pokemonName)
        .then((pokemonData)=>{
            const typePokemon = pokemonData.types.map((objeto)=>objeto.type.name);
            console.log(`El tipo de ${pokemonData.name} es: ${typePokemon}`);
        })
        .catch((error)=>{
            console.log(error);
        });
}
getPokemonTypeByNameDos("pikachu");
getPokemonTypeByNameDos("charmander");
getPokemonTypeByNameDos("squirtle");

// EJECUCIÓN DE LA PROMESA, FORMA #2
// Resolviendo promesas con Async + Await
// Se implemento en ES7 y se puede usar en Node.js a partir de la v7.10.1
// Funciona solo dentro de una función, por que esta debe ser async
// Ejemplo: Encontrar las estadisticas del Pokemon con Async + Await
async function getPokemonStatsByName(pokemonName){
    //await sirve para ESPERAR a que se resuelva la promesa
    const pokemonData = await getPokemonByName(pokemonName);
    const stats = pokemonData.stats.map((objeto)=>[objeto.stat.name, objeto.base_stat]);
    console.log(`Las estadisticas de ${pokemonName}`, stats);
}
getPokemonStatsByName('pikachu');

// El problema del código anterior, es que no maneja errores.
// La forma en que se gestionan los errores con Async + await
// Es usando TRY y CATCH.
async function getPokemonStatsByNameDos(pokemonName){
    //await sirve para ESPERAR a que se resuelva la promesa
    try {
        const pokemonData = await getPokemonByName(pokemonName);
        const stats = pokemonData.stats.map((objeto)=>[objeto.stat.name, objeto.base_stat]);
        console.log(`Las estadisticas de ${pokemonName}`, stats);
    } catch(err){
        console.log(err);
    }
}
getPokemonStatsByNameDos('pikachu');
getPokemonStatsByNameDos('charmander');
getPokemonStatsByNameDos('squirtle');