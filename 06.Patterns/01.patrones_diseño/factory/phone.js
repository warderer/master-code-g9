// FACTORY NOS AYUDA A CREAR UN OBJETO DE MEJOR FORMA/MANERA
// CUANDO CREAMOS MUCHOS OBJETOS ESPECIFICAMENTE PARA UNA CLASE.
class Phone {
    constructor (
        //parametros para crear un modelo de celular
    serialNum,
    model = "Generic",
    procesador = "Generico",
    RAM = "4 GB",
    width = 67.3,
    height = 138,
    resolution = "750 x 1334"
    )
    {
        this.serialNum = serialNum;
        this.config = {
          model,
          procesador,
          RAM,
          width,
          height,
          resolution  
        };
    }
 
  dial(num){
      console.log(`Now dialing ${num}...`)
  }

  displayConfig(){
      console.log(this.config)
  }
}

module.exports = Phone;