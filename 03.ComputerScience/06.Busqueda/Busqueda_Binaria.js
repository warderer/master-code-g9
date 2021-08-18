//* CÓDIGO DE BUSQUEDA BINARIA

//* ESTO ES UN ARREGLO ORDENADO


const myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
                            //  =10
function binarySearch (array, elemento){
    var min = 0;
    var max = array.length; //preguntamos cuál es el tamño de mi arreglo
    var aux; //está nos va a calcular la mitad 

        // Mínimo no pueder más o igual que el máximo
        while( min <= max ){
            aux = Math.floor ((max + min) / 2 ); //redondeamos los elementos porque no podemos tener posiciones con decimales
            if(array[aux] === elemento){
                //Si encontramos al elemento
                return aux; //RETORNAMOS EL INDICE DEL ELEMENTO ENCONTRADO
            }else if ( array[aux] < elemento){
                //El elemento a buscar está en la segunda mitad del arreglo
                min = aux + 1 
            }else {
                //EL ELEMENTO A BUSCAR ESTÁ EN LA PRIMERA MITAD DEL ARREGLO
                max = aux - 1;

            }
        }
        return -1 
}

console.log(binarySearch(myArray, 10));