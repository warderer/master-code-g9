function limpiar(){
    document.getElementById('miFormulario').reset();
}


function sumar(){
   let x = parseInt(document.getElementById('valor1').value); 
   let y = parseInt(document.getElementById('valor2').value); 
    document.getElementById('resultado').innerHTML = x+y;
}


function restar(){
    let x = parseInt(document.getElementById('valor1').value); 
    let y = parseInt(document.getElementById('valor2').value); 
     document.getElementById('resultado').innerHTML = x-y;
 }


function multiplicar(){
    let x = parseInt(document.getElementById('valor1').value); 
    let y = parseInt(document.getElementById('valor2').value); 
     document.getElementById('resultado').innerHTML = x*y;
 }

 
function dividir(){
    let x = parseInt(document.getElementById('valor1').value); 
    let y = parseInt(document.getElementById('valor2').value); 
     document.getElementById('resultado').innerHTML = x/y;
 }
 
 
 