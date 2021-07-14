//HACEMOS IMPORT DE NUESTRA CLASE LARGOMETRAJE
const {Largometraje} = require('./Largometrajes')

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
module.exports = {Partido}