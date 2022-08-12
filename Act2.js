let cronometro1 = document.getElementById('cronometro1');

let segundos = 0;
let minutos = 0;
let horas = 0;

let cambio = false;

setInterval(function(){
    if(cambio===true){
        if(segundos<59){
            segundos++;
        }
        else if(segundos===59 && minutos<59){
            segundos = 0;
            minutos++;
        }
        else if(minutos===59){
            minutos=0;
            horas++;
        }
        cronometro1.innerText = horas+":"+minutos+":"+segundos;
        
    }
}
,1000)

document.getElementById('btn1').onclick = function(){
        cambio = true;
    
}

document.getElementById('btn2').onclick = function(){
        cambio = false;
}

document.getElementById('btn3').onclick = function(){
        segundos = 0;
        minutos = 0;
        horas = 0;

        cambio= false;
        cronometro1.innerText = horas+":"+minutos+":"+segundos;
        
}

