//EJEMPLO 2)

class Colas{
    constructor(){
        this.collection = [];
    }

    //Métodos

    enqueue(element){
        this.collection.push(element)
        return this.collection
    }

    dequeue(){
        return this.collection.shift()
    }

    isEmpty(){
        return this.collection.length === 0; 
    }

    // peek(){

    // }

    front(){// trae el peek o primer elemento 
        return this.collection[0];
    }

    back(){// traer el peek o el último elemento
        return this.collection[this.collection.length  -1]
    }

    size(){
     return this.collection.length
    }

    print(){
        console.log(this.collection)
    }
}

// AGREGAR DATOS 

const miColaSuperHeroes = new Colas()
console.log(miColaSuperHeroes.isEmpty()); //true

//AGREGANDO DATOS A NUESTRA COLA

miColaSuperHeroes.enqueue({nombre: "BATMAN", sexo: "M"});
miColaSuperHeroes.enqueue({nombre: "SUPERMAN", sexo: "M"});
miColaSuperHeroes.enqueue({nombre: "WONDER WOMAN", sexo: "F"});

miColaSuperHeroes.print()
console.log(miColaSuperHeroes.size())

console.log(miColaSuperHeroes.isEmpty());//false

//SACANDO DATOS DE NUESTRA COLA 
console.log(miColaSuperHeroes.dequeue())
miColaSuperHeroes.print()

//AGREGANDO DATOS A NUESTRA COLA
miColaSuperHeroes.enqueue({nombre: "FLASH", sexo: "M"});
miColaSuperHeroes.enqueue({nombre: "LINTERNA VERDE", sexo: "M"});
miColaSuperHeroes.print()

//SACANDO DATOS DE NUESTRA COLA 
console.log(miColaSuperHeroes.dequeue())
miColaSuperHeroes.print()

//MÉTODOS AUXILIARES
console.log(miColaSuperHeroes.front())
console.log(miColaSuperHeroes.back())