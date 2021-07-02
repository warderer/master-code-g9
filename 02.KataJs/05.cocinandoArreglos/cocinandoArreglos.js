// URL Receta https://www.recetasnestle.com.mx/recetas/chilaquiles-rojos-con-pollo

// Paso 1: Dejo espacio "en la mesa" de arreglos para ir colocando mis ingredientes
var ingredientes = [];

// Paso 2: Seleccionar los ingredientes y colocarlos "en la mesa" - var ingredientes

ingredientes.push([3,"Chiles guajillo sin semilla y remojados en agua caliente"]); //0
ingredientes.push("3,Chiles chipotle adobados de lata".split(",")); //1
ingredientes.push([5,"Jitomates"]); //2
ingredientes.push([2,"Tazas de Agua"]); //3
ingredientes.push([2,"Cubos de Concentrado de Tomate con Pollo CONSOMATE"]); //4
ingredientes.push([1,"Bolsa de Totopos (400g)"]); //5
ingredientes.push([1,"Pechuca de pollo cocida y deshebrada (500g)"]); //6
ingredientes.push([1,"Envase de MEdia Crema NESTLÉ refrigerada (190g)"]); //7
ingredientes.push(["1/4","Cebolla fileteada"]); //8
ingredientes.push([5,"Ramitas de Cilantro fresco desinfectadas y picadas finamente"]); //9
ingredientes.push([1, "Taza de Queso panela desmoronado"]); //10

// Muestro el contenido como tabla con console.table
//console.table(ingredientes);

ingredientes.splice(3,1,[3,"Tazas de Agua Pura del Monte Everest"]);
console.log(ingredientes);

// Paso 3: Comienzo a Cocinar -> Instrucciones

// Uso Template Literals para concatenar más fácil strings y variables
var calienta = `Licúa los ${ingredientes[0][0]} ${ingredientes[0][1]}, ${ingredientes[1][0]} ${ingredientes[1][1]} con los jitomates, las ${ingredientes[3][0]} ${ingredientes[3][1]} y el Concentrado de Tomate con Pollo CONSOMATE®. Cuela y calienta por 10 minutos, moviendo constantemente. Coloca los totopos en la salsa, mezcla y sirve en un plato.`;

var agrega = `Agrega la pechuga de pollo deshebrada, decora con Media Crema NESTLÉ®, cebolla, cilantro y queso desmoronado.`;

console.log(calienta);

/* Paso 4:  Servir caliente la comida al Documento HTML */

document.write(`
    <img src="https://d1uz88p17r663j.cloudfront.net/resized/089889c402055309e72c002ff08f82d1_CHILAQUILES_ROJOS_150_1200_600.jpg" alt="Chilaquiles">
    <br>
    <span>Hoy en cocinando Arreglos:</span>
    <h1>Cocinando unos Chilaquiles Rojos con Pollo</h1>
    <h2>Ingredientes</h2>
    <ul>
        <li>${ingredientes[0][0]} ${ingredientes[0][1]}</li>
        <li>${ingredientes[1][0]} ${ingredientes[1][1]}</li>
        <li>${ingredientes[2][0]} ${ingredientes[2][1]}</li>
        <li>${ingredientes[3][0]} ${ingredientes[3][1]}</li>
        <li>${ingredientes[4][0]} ${ingredientes[4][1]}</li>
        <li>${ingredientes[5][0]} ${ingredientes[5][1]}</li>
        <li>${ingredientes[6][0]} ${ingredientes[6][1]}</li>
        <li>${ingredientes[7][0]} ${ingredientes[7][1]}</li>
        <li>${ingredientes[8][0]} ${ingredientes[8][1]}</li>
        <li>${ingredientes[9][0]} ${ingredientes[9][1]}</li>
    </ul>
    <h2>Preparación</h2>
        <h4>Calienta</h4>
        <p>${calienta}</p>
        <br>
        <h4>Agrega</h4>
        <p>${agrega}</p>
        <br>
        <h4>Sirve</h4>
        <p>Ofrece</p>
        <br>
        <h4>Consejo culinario</h4>
        <p>Si deseas puedes asar los jitomates para tener un sabor diferente en la salsa.</p>
        <br>
        <h4>Consejo nutricional</h4>
        <p>El chile chipotle eleva la ingesta de vitamina A, B6 y C.</p>
        <br>
`);