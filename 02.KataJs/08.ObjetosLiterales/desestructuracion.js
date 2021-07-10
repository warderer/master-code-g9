//CREACIÓN DE NUESTRO OBJETO
//SI ES UNA DESESTRUCTURACION
const superheroe = {
    nombre: "Iron Man",
    edad: 29,
    peso: 100,
    empresa: "Marvel"
}

// DE ESTA MANERA IMPLEMENTAMOS LA DESESTRUCTURACION
const {nombre, edad, peso, empresa} = superheroe;
console.log(`${nombre} tiene  ${edad} años, pesa ${peso} kg pertenece ${empresa}`)



// ESTO NO ES UNA DESESTRUCTURACION
/* Forma no Desestructurada */
// const nombre = superheroe.nombre;
// const edad = superheroe.edad;
// const peso = superheroe.peso;
// const empresa = superheroe.empresa;

