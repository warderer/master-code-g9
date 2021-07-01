/* Paso 1: Genero un  numero al azar */
// Math.random() genera un número decimal aleatorio: ej: 0.3433523
// Al multiplicarlo por un número entero, pues gana un entero.
// Math.floor() es una función que redondea hacia abajo, quitando así los decimales.
// Un equivalente es Math.ceil() que redondea hacia arriba.
var iaSelectionGenerator = Math.floor(Math.random() * 3);

/* Paso 2: Asignar un valor correspondiente a lo elegido por la IA */
var iaSelection;
if (iaSelectionGenerator == 0) {
    iaSelection = "piedra";
} else if (iaSelectionGenerator == 1) {
    iaSelection = "papel";
} else {
    iaSelection = "tijera";
}

console.log("Selección de la IA:",iaSelection);

/* Paso 3: Solicito la opción del usuario */
var userSelection = prompt("¿piedra, papel o tijera?").toLowerCase();
console.log("Selección del usuario:",userSelection);

/* Paso 4: Realizo la logica del juego con comparaciones */

/* En caso de Empate versión rebuscada */
// if (userSelection == "piedra" && iaSelection == "piedra") {
//     document.write("Empate: Ambos son piedra");
// } else if (userSelection == "papel" && iaSelection == "papel") {
//     document.write("Empate: Ambos son papel");
// } else if (userSelection == "tijera" && iaSelection == "tijera") {
//     document.write("Empate: Ambos son tijera")
// }

/* En caso de Empate, versión simplificada */
if (userSelection == iaSelection) {
    document.write("Empate, ambos son " + userSelection);
}

/* Caso: Usuario usa piedra */
else if (userSelection == "piedra" && iaSelection == "papel") {
    document.write("Perdiste, elegiste: " + userSelection + " y te usaron: " + iaSelection);
} else if (userSelection == "piedra" && iaSelection == "tijera") {
    document.write("Ganaste, elegiste: " + userSelection + " y te usaron: " + iaSelection);
}

/* Caso: Usuario usa papel */
else if (userSelection == "papel" && iaSelection == "piedra") {
    document.write("Ganaste, elegiste: " + userSelection + " y te usaron: " + iaSelection);
} else if (userSelection == "papel" && iaSelection == "tijera") {
    document.write("Perdiste, elegiste: " + userSelection + " y te usaron: " + iaSelection);
}

/* Caso: Usuario usa tijera */
else if (userSelection == "tijera" && iaSelection == "piedra") {
    document.write("Perdiste, elegiste: " + userSelection + " y te usaron: " + iaSelection);
} else if (userSelection == "tijera" && iaSelection == "papel") {
    document.write("Ganaste, elegiste: " + userSelection + " y te usaron: " + iaSelection);
}

/* Si no es el caso, poner algún mensaje */
else {
    document.write('Error: No reconozco tu selección, por favor intenta: piedra, papel, o tijera')
}