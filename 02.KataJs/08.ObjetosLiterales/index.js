// CONSTRUIR NUESTRO OBJETO
//acabamos de construir nuestro primer objeto
// acceder a mis valores por notación de punto
let mascota = {
    nombre: "Scott",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true
}
console.log(mascota.nombre)
console.log(mascota.edad)

//Notación de corchetes 
let mascota = {
    nombre: "Scott",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true
}
console.log(mascota['nombre'])
console.log(mascota['edad'])
console.log(mascota['color'])

//  Métodos en un objeto
 let mascota = {
    nombre: "Scott",
    nombrecompleto: "Scott travis",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true,
    //MÉTODOS LOS PODEMOS TRABAJAR CON FUNCIONES
    // UNA PEQUEÑA ACCIÓN QUE REALICE ESE OBJETO
    ladrar: function(){
       return (`${this.nombre} puede ladrar`)//this sirve como apuntador
    },
    correr: function(){
        return (`${this.nombre} puede correr muy rapido`)//this sirve como apuntador
     }

   
    // var ladrar = function(){
    //     return (`${this.nombre} puede ladrar`)
    // }
}
console.log(mascota.ladrar())
console.log(mascota.correr())

// INSERTAR UN VALOR A NUESTRO OBJETO 

let mascota = {
    nombre: "Scott",
    nombrecompleto: "Scott travis",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true,
    //MÉTODOS LOS PODEMOS TRABAJAR CON FUNCIONES
    // UNA PEQUEÑA ACCIÓN QUE REALICE ESE OBJETO
    ladrar: function(){
       return (`${this.nombre} puede ladrar`)//this sirve como apuntador
    },
    correr: function(){
        return (`${this.nombre} puede correr muy rapido`)//this sirve como apuntador
     }  
    // var ladrar = function(){
    //     return (`${this.nombre} puede ladrar`)
    // }
}

mascota.tamaño = "GRANDE";
console.log(mascota)

console.log(mascota.ladrar())
console.log(mascota.correr())



// ACTUALIZAR  UN VALOR DE NUESTRO OBJETO 
// BASTA UNICAMENTE CON SOBRE ESCRIBIR UNA PROPIEDAD YA EXISTENTE

let mascota = {
    nombre: "Scott",
    nombrecompleto: "Scott travis",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true,
    //MÉTODOS LOS PODEMOS TRABAJAR CON FUNCIONES
    // UNA PEQUEÑA ACCIÓN QUE REALICE ESE OBJETO
    ladrar: function(){
       return (`${this.nombre} puede ladrar`)//this sirve como apuntador
    },
    correr: function(){
        return (`${this.nombre} puede correr muy rapido`)//this sirve como apuntador
     }  
    // var ladrar = function(){
    //     return (`${this.nombre} puede ladrar`)
    // }
}
mascota.edad = 8;
console.log(mascota)


// ELIMINACION DE UN CLAVE O ATRIBUTO
let mascota = {
    nombre: "Scott",
    nombrecompleto: "Scott travis",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true,
    //MÉTODOS LOS PODEMOS TRABAJAR CON FUNCIONES
    // UNA PEQUEÑA ACCIÓN QUE REALICE ESE OBJETO
    ladrar: function(){
       return (`${this.nombre} puede ladrar`)//this sirve como apuntador
    },
    correr: function(){
        return (`${this.nombre} puede correr muy rapido`)//this sirve como apuntador
     }  
    // var ladrar = function(){
    //     return (`${this.nombre} puede ladrar`)
    // }
}
delete mascota.nombrecompleto;
console.log(mascota)