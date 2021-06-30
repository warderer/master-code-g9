/*
Para que yo me pueda vacunar, necesito cumplir alguno de los siguientes requisitos:
1) Mayores de 18 años que residen en un municipio fronterizo del Norte del país.
2) Embarazadas mayores de 18 años con más de 9 semanas de gestación.
3) Personas que cumplen 30 años o más este año.
*/

// Paso #1: Definir las variables que necesitamos
var edad = 28;
var fronterizo = false;
var embarazada = true;
var semanasGestacion = 11;

// Paso #2 Validar la primera condición
if (edad >= 18 && fronterizo == true) {
    console.log("Si te puedes vacunar, por ser mayor de 18 años y vivir en un municipio fronterizo del Norte del País");
} else if (edad >= 18 && embarazada == true && semanasGestacion >=9) {
    console.log("Si te puedes vacunar, por estar embarazada y con 9 o más semanas de gestación");
} else if (edad >= 30) {
    console.log("Si te puedes vacunar, por tener 30 años o más");
} else {
    console.log("Lo sentimos, aún no te puedes vacunar, espera próximos avisos - Game Over");
}