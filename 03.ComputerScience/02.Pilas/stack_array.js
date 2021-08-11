//EJEMPLO 1) STACK ARRAY

class Pilas {
        //crear nuestro constructor
        constructor() {
            this.stack=[]; //vamos a llenar o poblar un arreglo vacio
        }

       //vamos a tener nuestros métodos

       push(element){ //Apila cosas nuevas o datos nuevos a mi pila, que los va a ubicar al final de ésta.
        this.stack.push(element)
        return this.stack;
       }
       
       pop(){ //Regresa el último valor ingresado a la pila, saca el elemento de la pila
        return this.stack.pop()
       }

       peek(){ //Retorna el último valor ingresado a la pila, no lo saca de ésta 
        return  this.stack[this.stack.length - 1]
       }

       size(){ //Retorna el número de elementos que contiene la pila 
        return this.stack.length;
       }

       print(){ //muestra el contido de la pila 
        console.log(this.stack)
       }

}

//INGRESAR DATOS 

// APILANDO E IMPRIMENDO DATOS EN NUESTRA PILA
const stack = new Pilas();
console.log(stack.size()); //0
console.log(stack.push('ROJO'));
console.log(stack.push('AMARILLO'));
console.log(stack.size());
stack.print()


// DESAPILAR DATOS EN NUESTRA PILA
console.log(stack.pop())
console.log(stack.size())
stack.print()

//AGREGANDO O APILANDO DATOS A NUESTRA PILA 
console.log(stack.push('CAFÉ'));
console.log(stack.push('GRIS'));


// VAMOS A MOSTRAR UN DATO PERO NO LO VAMOS A SACAR
// DE NUESTRA PILA 
console.log(stack.peek())
stack.print()


console.log(stack.pop())
stack.print()
console.log(stack.peek())
stack.print()