const personaje = {
    nombre: 'Mario',
    apellido: 'Bros'
}

// Si quiero obtener el nombre por medio de una función
function nameNormal(objeto){
    console.log(objeto.nombre);
}

nameNormal(personaje); //Mario

// Si quiero obtener el nombre con destructuración
function nameDest({nombre}){
    console.log(nombre);
}
nameDest(personaje);