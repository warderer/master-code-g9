//* PASOS PARA DESARROLLAR EL CÓDIGO DE ÁRBOL BINARIO
//* TENDREMOS DOS CLASES:
    //*   class Node { constructor (data, left, right)}
    //*   class Tree { constructor () } aquí partiremos de la raíz 

//? NOTA CADA CLASE TENDRÁ SUS PROPIOS MÉTODOS DE SER NECESARIO.


class Node{ //CONSTRUIR LOS NODOS
    constructor(data, left, right){
        this.data=data;
        this.left=left;     //nodo hijo
        this.right=right;  //nodo hijo
    }
}


class Tree { //CONSTRUIR NUESTRO ÁRBOL
    constructor(){
    this.root=null;
    }
   // VAMOS A TENER COMO MÉTODOS PRINCIPALES:
   // agregar - > add : se encarga de agregar un dato
  // contiene -> contains : verificar si un nodo existe respecto a un dato.

  add(data){
    //primero debemos verificar si root está vacia: this.root=null;
    if(this.root === null){
        // crear nuevo nodo (data,null, null) : new Node(data, null, null);
        this.root = new Node(data, null, null);
        return;
    }
    // si no está vacia
    // crear un apuntador (current node) a mi raiz
       // currentNode = this.root;
    let currentNode = this.root;

     // agregar un ciclo mientras cada nodo sea un subarbol
    while(true){
         // si la data de mi nuevo nodo es menor que la data en mi nodo actual
        if(data < currentNode.data){
             // revisar si el nodo izquierdo está vacio
            if(currentNode.left !== null){
                  // mi nodo actual le asigno a la izquierda el nuevo nodo
                currentNode = currentNode.left;
            }else{
                currentNode.left = new Node(data, null , null);
                return currentNode.left
            }
        }else{
            // si el nodo derecho está vacio
            if(currentNode.right !== null){
                // agregar nuevo nodo
                currentNode = currentNode.right;
            }else{
                // cambiar nuestro nodo actual por el hijo derecho del nodo actual
                currentNode.right = new Node(data, null, null)
                return;
            }
   
        }
    }
}

contains(data) {
    // asignar a currente node el head
    let currentNode = this.root;
    // mientras currentNode exista
    while (currentNode !== null) {
      // si data es igual con currentnode.data
      if (data === currentNode.data) {
        // devolver verdadero
        return true;
        // si mi  no es igual
      } else {
        // si mi dato es menor currentnode.data
        if (data < currentNode.data) {
          // asignar mi apuntador a la izquierda
          // currentNode igual a currentNode.left
          currentNode = currentNode.left;
          // si mi dato no es menor
        } else {
          // asignar mi apuntador a la derecha
          // currentNode igual a currentNode.right
          currentNode = currentNode.right;
        }
      }
    }
    return false;
  }


}

//AGREGANDO DATA
const nodo = new Tree();
nodo.add(12);
nodo.add(53);
nodo.add(23);
nodo.add(13);
nodo.add(19);
nodo.add(56);
nodo.add(55);
nodo.add(57);
nodo.add(11);
nodo.add(10);
nodo.add(20)
console.log(nodo.contains(20));
console.log(nodo);