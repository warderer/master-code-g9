// CLASE PADRE
class Largometraje {
    constructor (titulo, duracion) {
        this.titulo = titulo;
        this.duracion = duracion;
    }
    //METODOS (GET)
 
    getTitle() {
        return this.titulo
    }

    getDuration(){
        return this.duracion
    }

}


//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
module.exports = {Largometraje}

