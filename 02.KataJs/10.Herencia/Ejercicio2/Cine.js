//IMPORTAMOS NUESTRAS CLASES
const {Sala} = require('./Sala')
const {Pelicula} = require('./Pelicula')
const {Documental} = require('./Documental')
const {Partido} = require('./Partido')


// CLASE CINE

class Cine {
    constructor(sala){
    this.sala = sala;
    }

    //METODO 
    reproducir(){
        return this.sala.setMovie()
    }
}

// INSTACIAR OBJETO PELICULA
const titanic = new Pelicula ('TITANIC', '220MIN', 'B')
const Sala1 = new Sala ('1', '250personas', titanic)
const cinepolisGalerias = new Cine (Sala1)


//INSTANCIAR OBJETO DOCUMENTAL
const docum = new Documental ('Black Fish', '130MIN', 'A')
const Sala2 = new Sala ('2', '230personas', docum)
const cinepolisPabellon = new Cine (Sala2)


//INSTANCIAR OBJETO PARTIDO
const partidoFut = new Partido  ('Champions', '125MIN', 'A')
const Sala3 = new Sala ('3', '270personas', partidoFut)
const cinemex = new Cine (Sala3)


//IMPRIMIR NUESTROS OBJETOS DE CLASE 
console.log(cinepolisGalerias.reproducir())
console.log(cinepolisPabellon.reproducir())
console.log(cinemex.reproducir())