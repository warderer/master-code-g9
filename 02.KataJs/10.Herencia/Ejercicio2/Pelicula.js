//HACEMOS IMPORT DE NUESTRA CLASE LARGOMETRAJE
const {Largometraje} = require('./Largometrajes')

//SUBCLASE 
class Pelicula extends Largometraje {
    constructor(titulo, duracion, genero){
        super(titulo,duracion)
        this.genero = genero;
    }

    //METODO (GET)
    getGender(){
        return this.genero
    }
}


//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
module.exports = {Pelicula}