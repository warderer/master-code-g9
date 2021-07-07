// Paso #0: Compruebo que pueda leer mi arreglo de Pokémons
// console.log(pokemons);

var pokeHTML = "";

// Paso #1 Hago mi ciclo
for (var index = 0; index < pokemons.length; index++) {
    var elPokemon = pokemons[index];

// Paso #3: Determino el número de imagen para usar en la URL
// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png
    var numPokemon = index+1;
    if (numPokemon.toString().length == 1) {
        //CASO #1 Es de un Digito: Añadir dos ceros
        numPokemon = '00' + numPokemon;
    } else if (numPokemon.toString().length == 2) {
        //CASO #2 Es de dos Digitos: Añadir un cero
        numPokemon = '0' + numPokemon;
    }

    var img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numPokemon}.png`;

// Paso #2: Necesito dar formato a mis pokemons
    pokeHTML = pokeHTML + `
        <h1>${index+1}. ${elPokemon}</h1>
        <img src="${img}" />
    `
}

document.write(pokeHTML);