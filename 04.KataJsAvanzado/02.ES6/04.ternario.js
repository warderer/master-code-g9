/* OPERADOR TERNARIO */
// Es una Condición IF/ELSE de una sola linea.
// SINTAXIS: (condición) ? CodigoSiEsCierto : CodigoSiEsFalso;
// Esto es Sugar Syntax

const edad = 21;
//Como lo haciamos normalmente:
if (edad >= 18) {
    console.log("Eres Mayor de Edad")
} else {
    console.log("Eres Menor de Edad")
}

//En una sola linea, hacemos la logica del IF/ELSE
const mayorDeEdad = (edad >= 18) ? "Es Mayor de Edad" : "Eres Menor de Edad";
console.log(mayorDeEdad);