const Phone = require ("./phone")

// se crea una subclase que al final nos retorna un objeto
// de la clase principal o superclase Phone
class iPhoneXR{
    constructor(serialNum){
        return new Phone (
        //INSTANCIANDO ESTA CLASE DIRECTAMENTE
        serialNum,
         "iPhone XR",
         "A13",
         "6 GB",
         75.5,
         150.9,
         "1130 x 2040"
        )
    }
}

module.exports = iPhoneXR;