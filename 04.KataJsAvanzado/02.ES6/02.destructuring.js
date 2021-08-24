/* DESTRUCTURACION
    Nos permite evitar repetir el nombre si se llaman igual.
*/

/* DESTRUCTURACION DE OBJETOS */
const fruta = {
    id: 1,
    name: 'Manzana',
    color: 'rojo',
    precio: 30
}

console.log(fruta);

/* Estos son equivalentes */
//const name = fruta.name;
//const { name } = fruta;
// console.log(name);

/* Que pasaria si quisiera sacar el valor de todos los elementos*/
//const name = fruta.name;
//const id = fruta.id;
//const color = fruta.color;
//const precio = fruta.precio;
const { name, id, color, precio } = fruta;
console.log(name,id,color,precio);


/* DESTRUCTURACION DE ARREGLOS  */
const verduras = ['Cebolla', 'Lechuga', 'Pepinos', 'Cilantro'];

// La forma de destructurar arreglos es con [ ] en vez de { }
// El ORDEN SE TIENE QUE RESPETAR para que funcione.

const [laCebolla, laLechuga, elPepino, elCilantro] = verduras;
// Esto equivale a haber hecho:
// const laCebolla = verduras[0];
// const laLechuga = verduras[1];
// const elPepino = verduras[2];
// const elCilantro = verduras[3];
console.log(laCebolla);
console.log(elPepino);

// Aunque solo hayamos usado 2, necesitamos declarlos todos, por que el orden si importa.
// un tip es usar _
// const [laCebolla, _, elPepino, elCilantro] = verduras;