// //HACEMOS IMPORT DE NUESTRA CLASE LARGOMETRAJE
// const {Largometraje} = require('./Largometrajes')

class Sala {
    constructor(numSala, cantGente, largometraje){
        this.numSala = numSala;
        this.cantGente = cantGente;
        this.largometraje = largometraje;
    }

     //METODO (SET)
      setMovie(){
          return "Se está reproduciento : " + this.largometraje.getTitle() + " Duracion " + this.largometraje.getDuration();
      }

    //METODO (GET)
      getPeople(){
        return this.cantGente
      }

      getSalaNumber(){
          return this.numSala
      }


}


//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
module.exports = {Sala}