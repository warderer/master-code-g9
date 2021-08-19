//* Código de INSERTION SORT

function insertionSort(vector){
    for(let i=0; i<vector.length; i++){
        var pos = i;
    //*Antes de empezar a desplazarnos, vamos a guardar la posición en la que vamos ordenando
    var valor = vector [i];
    while(pos >=0 && valor < vector [pos -1 ]){ //* 0 - 1
        //* En vez de hacer el intercambio solo desplazamos
      //* buscamos el sitio donde debería colocarse
        vector[pos] = vector[pos - 1];
        pos = pos - 1; 
    }
    //* Como ya sabemos en que posición debería ir lo situamos en la posición y repetimos ese paso.
    vector[pos] = valor;
    }
    return vector
}

//? CREAR NUESTRO ARREGLO
const myArray = [10, 4 ,40 ,32 ,67, 12, 43, 31, 65 , 1];
const resp = insertionSort(myArray)
console.log(resp)