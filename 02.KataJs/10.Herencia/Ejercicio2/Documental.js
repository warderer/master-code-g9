//HACEMOS IMPORT DE NUESTRA CLASE LARGOMETRAJE
import {Largometraje} from './Largometrajes.js';

//SUBCLASE DOCUMENTAL
class Documental extends Largometraje{
    constructor(titulo, duracion, autor){
   //Indica que atributos de mi clase padre va a heredar
        super(titulo, duracion);
        this.autor = autor;
    }

    //METODOS (GET)
    getAuthor(){
        return this.autor;
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
//Usando la forma definida por ES6
export { Documental };