// EJEMEPLO 1)

class Colas{
    constructor(){
        //vamos a trabajar un arreglo
        this.queue = [];
    }

    //Métodos

    enqueue(element){ //ENCOLAR: AGREGAR UN ELEMENTO A LA COLA, 
        this.queue.push(element)
        return this.queue
    }

    dequeue(){//DESENCOLAR: RETORNA EL PRIMER ELEMENTO DE LA COLA 
        return this.queue.shift()//shift() remueve el primer valor de un arreglo
    }

    peek(){//RETORNA EL PRIMER ELEMENTO DE LA COLA, SIN QUITARLO DE LA MISMA
        return  this.queue[0];
    }

    size(){
        return this.queue.length
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    print(){
        console.log(this.queue)
    }


}

//AGREGAR DATA 
//AGREGANDO DATOS A NUESTRA COLA
const queue = new Colas();
console.log(queue.isEmpty());//TRUE
console.log(queue.enqueue('THE ROCK'))
console.log(queue.enqueue('OCTAGON'))
console.log(queue.enqueue('CIBERNETICO'))
console.log(queue.enqueue('MISTICO'))
console.log(queue.size())

//SACANDO DATOS DE NUESTRA COLA 
console.log(queue.dequeue());

queue.print()
console.log(queue.isEmpty())//FALSE

console.log(queue.peek())
queue.print()

//SACANDO DATOS DE NUESTRA COLA 
console.log(queue.dequeue());
queue.print()
