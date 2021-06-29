/* 01. Salidas
    Muestro información al usuario.
*/

console.log("Este es un mensaje desde Main.js que solo sale en consola");

document.write("Voy a escribir al final del documento HTML");

alert("Este es un mensaje en una ventana");


/* 02. Entrada
    Solicito información al usuario.
*/

console.log("Hola,", prompt("Dime tu nombre"));

// prompt trae un tipo de dato String, si queremos convertir a número
// tenemos que usar parseInt(numero)
parseInt(prompt("Cual es tu edad?"));

// 03. Comentarios

/* Este es un comentario
que es
multilinea
*/

// Este es un comentario de una sola Linea


// 04. Variables

// Declaro una variable llamada nombre, con el valor de "Pedro";
var nombre = "Pedro";

// Si mi variable tiene un nombre más largo, uso la convención camelCase
var primerNombre = "Rosa";


// 05. Tipos de Datos

// Strings (textos)
"Esto es un String";
'Esto también es un string';

// Numeros, incluyendo decimales
var radio = 3;
var diametro = 20;
15.22;

// Boolean, datos lógicos, solo verdadero o falso
true;
false;
var fuisteAlTrabajo = true;