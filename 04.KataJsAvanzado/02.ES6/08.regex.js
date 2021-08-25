/* REGULAR EXPRESSION  - REGEX / REGEXP */
/* Sirven para buscar patrones de texto */

// Formas de Escribir un RegExp
const miPrimerRegex = new RegExp('abc'); //Forma 1 de declaracion
const miSegundoRegex = /abc/; //Forma 2 de declaracion

// Aplicar RegExp previamente declarados con .test(StringAEvaluar)
const miString = 'abcdefgh';
const miString2 = 'acbdefgh';

console.log(miPrimerRegex.test(miString)); //true
console.log(miSegundoRegex.test(miString)); //true
console.log(miPrimerRegex.test(miString2)); //false
console.log(miSegundoRegex.test(miString2)); //FALSE

// Podemos combinar RegExp con Replace
console.log(miString.replace(miSegundoRegex, 'ABC')); // ABCdefgh

// Reemplazar el primer elemento de forma usual con replace
const texto = 'Hola mundo desde mi mundo';
console.log(texto.replace('mundo','TIERRA'));
// Resultado --> Hola TIERRA desde mi mundo

// Ahora voy a reemplazar usando REGEXP
const texto2 = 'Hola mundo desde mi mundo';
const miOtroRegex = /mundo/;
console.log(texto2.replace(miOtroRegex,'TIERRA'));
// Resultado --> Hola TIERRA desde mi mundo

// Si quiero reemplazar TODAS las coincidencias, necesito añadir la flag g de Búsqueda Global
const miOtroRegex2 = /mundo/g;
const texto3 = 'Hola mundo desde mi mundo';
console.log(texto3.replace(miOtroRegex2,'TIERRA'));
// Resultado --> Hola TIERRA desde mi TIERRA

// Probando CASO PRÁCTICO, validar un correo.
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
console.log('Correo Caso 1 ', emailRegex.test('cesar@cesarguerra.mx')); //true
console.log('Correo Caso 2 ', emailRegex.test('cesarcesarguerra.mx')); //false
console.log('Correo Caso 3 ', emailRegex.test('cesar@cesarguerramx')); //FALSE
console.log('Correo Caso 4 ', emailRegex.test('cesar@c.mx')); //true