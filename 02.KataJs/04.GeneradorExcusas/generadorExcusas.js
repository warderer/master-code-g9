// Paso #1: Tener los arreglos con las excusas

const columnaA = [
    "En cuanto arreglemos el goteo de recursos",
    "En cuanto completemos las pruebas",
    "En cuanto hayamos optimizado el código",
    "Apenas nos arreglen el bug",
    "Cuando se solvente el problema de instalación",
    "Cuando averiguemos por qué se cae el proceso",
    "Cuando hayamos mejorado el rendimiento",
    "En cuanto completemos la restauración",
    "Apenas instalemos el último parche",
    "En cuanto terminemos la implementación"
];

const columnaB = [
    "del interfaz XML",
    "del sistema de colas",
    "del buffer de entrada",
    "del gestor de peticiones",
    "de las clases de abstracción",
    "del recolector de basura",
    "de la nueva versión",
    "del caché",
    "de la versión customizada",
    "del conversor de protocolo"
];

const columnaC = [
    "del directorio LDAP",
    "de la máquina virtual Java",
    "del proxy inverso",
    "del gestor de clúster",
    "del broker de objetos distribuidos",
    "de la capa de presentación",
    "del despachador de certificados",
    "de la base de datos",
    "del servidor seguro",
    "del acelerador de transacciones"
];

// Paso #2: Elegir un valor de cada columna
var posicionA = Math.floor(Math.random() * columnaA.length);
var posicionB = Math.floor(Math.random() * columnaB.length);
var posicionC = Math.floor(Math.random() * columnaC.length);
console.log(posicionA);

// Paso #3: Armo mi excusa, concatenando el valor de los arreglos de forma aleatoria
var excusa = columnaA[posicionA] + " " + columnaB[posicionB] + " " + columnaC[posicionC];

// Paso #4: Mostrar la excusa
document.write(excusa);