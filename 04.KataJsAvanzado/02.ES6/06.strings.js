/* Manejo de Strings */
const myString = "Hola Mundo";

/* --- charAt --- */
// chatAt -> Busca el carácter en una posición especifica.
console.log("CharAt Posición 2:", myString.charAt(2));
// Resultado --> CharAt Posición 2: l

// Si no le indico una posición, toma el primer elemento (0)
console.log("CharAt Posición x:", myString.charAt());
// Resultado --> CharAt Posición x: H


/* --- indexOf --- */
// Me da el indice del primer carácter encontrado, de izquierda a derecha
console.log("IndexOf - El indice la o:", myString.indexOf("o"));
// Resultado --> IndexOf - El indice la o: 1

/* --- lastIndexOf --- */
// Lo mismo que indexOf, pero de derecha a izquierda
console.log("lastIndexOf - El indice la o:", myString.lastIndexOf("o"));
// Resultado --> lastIndexOf - El indice la o: 9


/* -- Split & Join -- */
// Split --> Corta el String cuando encuentra el caracter especificado
// y genera un arreglo (array) de elementos.
console.log("Split de mi arreglo:", myString.split(" "));
// Resultado --> Split de mi arreglo: [ 'Hola', 'Mundo' ]

// Split también se puede usar para sacar cada caracter de un string en forma de array.
console.log("Split de String en Caracteres: ", "Desarrollador".split(""));
// Resultado --> [ 'D', 'e', 's', 'a', 'r', 'r', 'o', 'l', 'l', 'a', 'd', 'o', 'r']

// Join --> Une los elementos de un arreglo en un string a través de un carácter definido
const palabras = ["Hola","Soy","Un","String"];
console.log("El Join de mi Arreglo: ", palabras.join(" "));
// Resultado --> El Join de mi Arreglo:  Hola Soy Un String


/* --- Replace y ReplaceAll */
// Replace --> Busca un texto y reemplaza por la PRIMERA ocurrencia
// Sintaxis string.replace("cadenaABuscar","cadenaQueReemplaza")
console.log("Reemplazo Mundo por Todos: ", myString.replace("Mundo","a todos"));
// Resultado --> Reemplazo Mundo por Todos:  Hola a todos

// ReplaceAll --> Busca todas las ocurrencias en un texto y las reemplaza
// No corre por defecto en Node pero si en el navegador
// Sintaxis string.replaceAll("cadenaABuscar","cadenaQueReemplaza")
//const discurso = "Felicitamos al candidato Pepe, por haber ganado las elecciones. Pepe es la esperanza del pueblo";
//console.log("Reemplazo nombre del candidato: ", discurso.replaceAll("Pepe","Jesua"));


/* --- Includes --- */
// Includes --> Busca un texto dentro de otro, devuelve true si lo encuentra y false si no
const oracion = 'Estudiar tecnología es la mejor inversión que he hecho en mi vida';
const palabra = 'mejor';

//console.log("Esta oracion incluye la palabra mejor", oracion.includes(palabra));
console.log(`La palabra "${palabra}" ${ oracion.includes(palabra) ? 'esta' : 'no esta'} en la oración`);
// Resultado --> La palabra "mejor" esta en la oración
