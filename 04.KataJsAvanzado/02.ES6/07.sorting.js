/* SORT */
// Usa el método Quick Sort, considerado bastante eficiente en la actualidad.

const frutas = ['manzana','banana','guanabana'];
frutas.sort(); //modifica el arreglo original
console.log(frutas);
// Resultado --> [ 'banana', 'guanabana', 'manzana' ]

const misNumeros = [1,9,5,7,3];
misNumeros.sort();
console.log(misNumeros);
// Resultado --> [ 1, 3, 5, 7, 9 ]

// Sort ordena de acuerdo al código de carácter UNICODE, por eso observamos un ordenado "raro"
// https://en.wikipedia.org/wiki/List_of_Unicode_characters
const misNumeros2 = [1,9,5,301,7,10,3];
console.log(misNumeros2.sort());
// Resultado --> [ 1, 10, 3, 301, 5,  7, 9 ]

// Para solucionar el problema anterior, vamos a pasarle una función como parametro (a,b)

// Vamos a entender primero los pasos que realiza:
misNumeros2.sort((a,b)=> {
    console.log('a:', a);
    console.log('b:', b);
    console.log('-----')
});

// Ahora si para ordenarlos
misNumeros2.sort((a,b) => {
    return a-b;
});
console.log("Mis Numeros 2 correctamente ordenados: ", misNumeros2);

/* ¿Que sucedio? */

const misNumeros3 = [1,9,5,301,7,10,3];
misNumeros3.sort((a,b) => {
    console.log('a: ', a);
    console.log('b: ', b);
    console.log(a-b);
    console.log('-----');
    // No importa el valor en si, revisa mas que nada el signo
    // NEGATIVO: El primer elemento tiene que estar a la izquierda del segundo elemento
    // POSITIVO: El primer elemento tiene que estar a la derecha del segundo elento
    // 0: Los elementos que se comparan son los mismos
    return a-b;
});


/* CASO PRACTICO DE ORDENAMIENTO CON SORT */
const myArrayPersonas = [
    {
        name: 'Alfredo',
        age: 30
    },
    {
        name: 'Gilberto',
        age: 28
    },
    {
        name: 'Martha',
        age: 25
    },
    {
        name: 'Tamara',
        age: 24
    },
];

const personasPorEdad = myArrayPersonas.sort((a,b) => {
    return a.age - b.age;
});

console.log(personasPorEdad)
/* Resultado --> [
  { name: 'Tamara', age: 24 },
  { name: 'Martha', age: 25 },
  { name: 'Gilberto', age: 28 },
  { name: 'Alfredo', age: 30 }
]
*/