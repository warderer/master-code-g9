//HACEMOS IMPORT DE NUESTRA CLASE LARGOMETRAJE
import {Largometraje} from './Largometrajes.js';

class Partido extends Largometraje {
    constructor(titulo, duracion, equipo){
        super(titulo,duracion);
        this.equipo = equipo;
    }


    //METODO
    getTeam(){
        return this.equipo
    }

}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
export { Partido }