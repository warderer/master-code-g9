// DECLARANDO MI VARIABLE
var screen = document.getElementById('screen-result');
// const numerosiete = document.getElementById('siete')
// const numeroocho = document.getElementById('ocho')


/* también conocidos como controladores de 
   eventos en línea */
function getData(num){
    let value = num.value;
    screen.value = screen.value + value; //CONCATENACIÓN  console.log(num)
}

 function clean(){
    screen.value = ' ';
 }


 function calcular(){
    try {
     screen.value = eval(screen.value);
    } catch (e) {
         screen.value = 'SYNTAX ERROR';
        }
 }
