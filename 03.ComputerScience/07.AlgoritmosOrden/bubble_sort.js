//* CÓDIGO DE BUBBLE SORT

function bubbleSort(vector){
    for(var i=0; i<vector.length; i++){//Recorremos todo el arreglo
        for(var j=0; j<vector.length; j++){ // Comparamos elemento por elemento moviendonos en la posición.

            //* Comprobar si el valor actual es mayor que el siguiente
            if(vector[j] > vector[j+1]){
            var currentNumber = vector[j];

            //* Ahora la posición actual va a obtener el valor de la siguiente posición.         
            vector[j] = vector[j+1];
           
            //* Y la siguiente posición obtiene el valor de la posición actual.
            vector[j+1] = currentNumber;
         }
        }
    }
    return vector;
}

const myArray = [10, 4 ,40 ,32 ,67, 12, 43, 31, 65 , 1];
console.log(bubbleSort(myArray));