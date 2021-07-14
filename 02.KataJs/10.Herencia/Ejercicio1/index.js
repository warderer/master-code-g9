// INTRODUCCIÓN A HERENCIA
// HERENCIA SIMPLE, DONDE UNA SUBCLASE PUEDE HEREDAR ATRIBUTOS 
// O METODOS DE UNA CLASE PADRE
//METODOS GET(GETTER)  SET(SETTER)

// EL NOMBRE LAS CLASES MAYUSCULAS 
// EL NOMBRE DE LOS ATRIBUTOS mínuscula y después con una Mayuscula

  // CLASE PADRE
class Telefono {
    constructor(marca){
        this.marca = marca;
    }
    //METODO 
    getAnuncio() {
        return " ha llegado el nuevo teléfono de: " + this.marca
    }
}


// AQUÍ VAMOS A EMPEZAR A TRABAJAR LA HERENCIA 
//SUBCLASE  //HERENCIA
class Modelo extends Telefono {
    constructor(marca , modelo ){
        super(marca)
        this.modelo = modelo;
    }

    //METODO
    getAnuncioCompleto(){
    return this.getAnuncio() + "\n EL MODELO QUE LLEGO ES: " + this.modelo
    }

}


//INSTACIAR OBJETOS 
const miTelefono = new Modelo ("XIAOMI", "REDMI NOTE 10 PRO")
console.log(miTelefono.getAnuncioCompleto())

