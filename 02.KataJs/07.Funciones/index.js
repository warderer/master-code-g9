//HOISTING ( DECLARACION CORRECTA DE VARIABLES)

//DECLARO MI VARIABLE var nombre;
// var nombre = "JUAN"; //ASIGNANDO UN VALOR A ESA VARIABLE
// console.log(nombre)

          /* EJMEPLOS DE CLASE */ 
/*--------------------------------------------  
| Hacer una función que sume dos números      |
|  y me retorne la suma de esos dos números   |
---------------------------------------------- */
// CON PARAMETROS
 function Suma( num1 , num2) {
     // TODO ESTO ES MI BLOQUE DE CÓDIGO
    // ALCANCE (SCOPE) LOCAL
    var total = num1 + num2;
    // console.log("LA SUMA ES: " + total) 
   return "LA SUMA ES: " + total ;
}
  console.log(Suma(2,2))

// SIN PARAMETROS
// ALCANCE (SCOPE) GLOBAL
    var x = parseInt(prompt("INRESA EL PRIMER NÚMERO"))
    var y = parseInt(prompt("INRESA EL SEGUNDO NÚMERO"))

    function Sumar() {
        var total = x + y;
        console.log("LA SUMA ES: " + total)
    }
    Sumar()


/*--------------------------------------------  
| Hacer una función que pida a un usuario su   |
| edad y saber si es mayor o menor de edad, si |
| el usuario ingresa un valor no valido,       |  
| imprimir una advertencia.                    |
---------------------------------------------- */
// DECLARAR FUNCION 
// VARIABLE LOCAL 
// EL USUARIO DEBE INGRESAR SU EDAD 
// USAR CONDICIONALES
// LLAMAR A MI FUNCIÓN

// DECLARION DE FUNCIONES 
function MayorEdad() { // BLOQUE DE CÓDIGO
    var edad = prompt("¿HOLA CUANTOS AÑOS TIENES?")
    if (edad >= 18) {
        console.log("ERES MAYOR DE EDAD")
    }else if (edad < 18){
        console.log("ERES MENOR DE EDAD")
    }else {
        console.log("ESTO NO ES UNA EDAD VALIDA")
    }
}
MayorEdad()


// EXPRESION DE FUNCIONES
// var estudiante = funcion(){


// }
