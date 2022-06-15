//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function convertirNodelistATiempo(nodelist){
    let tiempo = 0;
    
    for(let i = 0; i<nodelist.length; i++){
    tiempo += Number(nodelist[i].value);
    }

    return tiempo;
}


let $horasNodeList = document.querySelectorAll('#horas');
let $minutosNodeList = document.querySelectorAll('#minutos');
let $segundosNodeList = document.querySelectorAll('#segundos');

document.querySelector('#calcular-tiempo-total').onclick = function(){
    
    let horasTotales = convertirNodelistATiempo($horasNodeList);
    let minutosTotales = convertirNodelistATiempo($minutosNodeList);
    let segundosTotales = convertirNodelistATiempo($segundosNodeList);

    while(segundosTotales >= 60){
        segundosTotales -= 60;
        minutosTotales += 1;
    }

    while(minutosTotales >= 60){
        minutosTotales -= 60;
        horasTotales += 1;
    }
        
    document.querySelector('#tiempo-total').innerText = `${horasTotales} horas, ${minutosTotales} minutos, ${segundosTotales} segundos.`

    return false;
}
