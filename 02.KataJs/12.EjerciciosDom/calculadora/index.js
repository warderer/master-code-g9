var screen = document.getElementById('screen-result');

// num.value=7;
// screen.value = 7 + 2;
// screen.value = 9 + 2;
// screen.value = 11 - 4;

function getData(num){
    let value = num.value;
    screen.value = screen.value + value;
}

function clean(){
    screen.value = '';
}

function calculate(){
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'Syntax Error';  
    }
}
