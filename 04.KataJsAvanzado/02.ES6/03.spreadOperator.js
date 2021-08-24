// SPREAD OPERATOR CON ARREGLOS
// EL SPREAD OPERATOR SON LOS TRES PUNTOS ...

// Fusiono el contenido de arreglos
const misColores = ['Amarillo', 'Rojo', 'Azul'];
const misColoresDos = ['Negro', 'Blanco', ...misColores];

console.log(misColoresDos);
//Resultado: [ 'Negro', 'Blanco', 'Amarillo', 'Rojo', 'Azul' ]


// Otra forma de fusionar arreglos
const misColoresTres = ['Amarillo', 'Rojo', 'Azul', 'Verde'];
const misColoresCuatro = ['Negro', 'Blanco', 'Gris'];
const misColoresCinco = [...misColoresCuatro, ...misColoresTres];
console.log("Colores 5", misColoresCinco);
/*Resultado: Colores 5
[
    'Negro', 'Blanco',
    'Gris',  'Amarillo',
    'Rojo',  'Azul',
    'Verde'
]
*/


/* SPREAD OPERATOR CON OBJETOS */
const myPokemon = {
    id: 4,
    name: 'Charmander',
    type: 'Fuego'
};

const myComplemento = {
    attack: 'Mordisco',
    type: 'Hielo'
}

const myNewPokemon = {
    ...myPokemon,
    ...myComplemento
}
// Pasaron 2 cosas:
// 1) El attack no existia en myPokemon, pero si en myComplemento, por lo que se añadio.
// 2) Como type, ya existia, el valor de myNewPokemon 'plancha' el valor de myPokemon.

console.log(myNewPokemon);
//Resultado: { id: 4, name: 'Charmander', type: 'Hielo', attack: 'Mordisco' }