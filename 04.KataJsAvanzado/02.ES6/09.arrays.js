/* ARREGLOS - MAP Y FILTER */

const myArray = [1,2,3,4,5,6];

// Ejemplo: Necesito sacar el cuadrado de cada número de myArray
// Forma Tradicional con FOR
const arrayCuadrado = [];
for (let i = 0; i < myArray.length; i++) {
    const numero = myArray[i];
    arrayCuadrado.push(numero**2);
}

console.log("El cuadrado de mis numeros es: ", arrayCuadrado);
// Resultado --> El cuadrado de mis numeros es:  [ 1, 4, 9, 16, 25, 36 ]

/* MAP */
// Lo anterior se puede simplificar con el uso de MAP
// Puedo procesar un arreglo y me devuelve uno nuevo ya modificado

const arrayCuadrado2 = myArray.map((numero)=>{
    //Con Map SIEMPRE debo retornar un valor
    return numero**2;
});
console.log("El cuadrado de mis numeros con MAP es: ", arrayCuadrado2);


/* FILTER */
// Filter devuelve un nuevo array con los elementos
// que cumplan ciertas condiciones (LOS FILTRA - literal)

// Los números que sean múltiplos de 2
const multiplos = myArray.filter((numero)=>{
    const data = (numero % 2 === 0) ? numero : null;
    return data; //Siempre debo retornar un valor
});
console.log("Los números mult. de 2 con Filter son: ", multiplos);