/* ARROW FUNCTIONS */

// CODIGO EN JS VANILLA
function suma (a,b) {
    return a + b;
}
console.log('Suma', suma(10,30));

// USO DE FUNCIONES ANONIMAS
const sumaDos = function (a,b) {
    return a + b;
}
console.log('SumaDos', sumaDos(10,30));

// ES6: ARROW FUNCTIONS
// No necesito escribir la palabra function (sugar syntax)
const sumaTres = (a,b) => {
    return a + b;
}
console.log('SumaTres', sumaTres(10,30));

// Se puede simplificar más el uso de Arrow Functions si solo tiene
// un parametro, por lo que no ocupamos {} y el return es implicito
const sumaCuatro = (a,b) => a+b;
console.log('SumaCuatro', sumaCuatro(10,30));

// Un ejemplo de uso común de Arrow Function

const miArray = ["Perros","Gatos","Patos","Ratones"];

miArray.forEach((elemento)=>console.log(elemento));