//VAMOS A DECLARAR UNA FUNCTION

function green(){
    if(document.querySelector('#green').checked){
       background.style.background = "#2cbb40";
       title.style.color = "white";
    }
}

function purple(){
    if(document.querySelector('#purple').checked){
       background.style.background = "#56307C";
       title.style.color = "white";
    }
}

function blue(){
    if(document.querySelector('#blue').checked){
       background.style.background = "#6FB1FC";
       title.style.color = "black";
    }
}


function warning(){

     //crear un delay como estilo
    setTimeout(function(){
        background.style.background = "#ffc107";
        title.style.color = "black";
    },500)
    }


function secondary(){
    background.style.background = "#6c757d";
    title.style.color = "black";
}

function danger(){
    background.style.background = "#dc3545";
    title.style.color = "white";
}
