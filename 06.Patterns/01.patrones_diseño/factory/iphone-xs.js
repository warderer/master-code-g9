const Phone = require ("./phone")

// se crea una subclase que al final nos retorna un objeto
// de la clase principal o superclase Phone
class iPhoneXS{
    constructor(serialNum){
        return new Phone (
        serialNum,
         "iPhone XS",
         "A12 ",
         "4 GB",
         70.9,
         143.6,
         "1125 x 2436",
        )
    }
}

module.exports = iPhoneXS;