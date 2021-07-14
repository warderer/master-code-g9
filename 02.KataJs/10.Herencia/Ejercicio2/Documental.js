//HACEMOS IMPORT DE NUESTRA CLASE LARGOMETRAJE
const {Largometraje} = require('./Largometrajes')

//SUBCLASE DOCUMENTAL
class Documental extends Largometraje{
    constructor(titulo, duracion, autor){
   //Indica que atributos de mi clase padre va a heredar
        super(titulo, duracion);
        this.autor = autor;
    }

    //METODOS (GET)
    getAuthor(){
        return this.autor
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
module.exports = {Documental}