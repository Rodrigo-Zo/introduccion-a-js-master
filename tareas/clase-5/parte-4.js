//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function obtenerNumeroMasGrande(array){
    let numeroMasGrande = -Infinity;
    for(let i = 0; i < array.length; i++){
        if(numeroMasGrande < array[i]){
            numeroMasGrande = array[i];
        }
    }
    return numeroMasGrande;
}

function obtenerNumeroMasChico(array){
    let numeroMasChico = +Infinity;
    for(let i = 0; i < array.length; i++){
         if(numeroMasChico > array[i]){
            numeroMasChico = array[i];
        }
    }
    return numeroMasChico;
}

function obtenerPromedioDeNumeros(array){
    let numerosSumados = 0;
    for(let i = 0; i < array.length; i++){
        numerosSumados += array[i];
    }
    return numerosSumados / array.length ;
}

function obtenerNumeroMasRepetido(array){
    let numeroRepetido ;
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i]===array[j]){
            numeroRepetido = array[i];
            }
        }
    }
    return numeroRepetido;
}

let $nodeListNumerico = (document.querySelectorAll('li'));
let arrayNumerico = [];
/*
for(let i = 0; i < $nodeListNumerico.length; i++){
    arrayNumerico[i] = Number($nodeListNumerico[i].innerText);
}
*/
$nodeListNumerico.forEach(function(nodeListNumero){
    arrayNumerico.push(Number(nodeListNumero.innerText));
});

document.querySelector('#numero-promedio').innerText = obtenerPromedioDeNumeros(arrayNumerico);
document.querySelector('#numero-mas-pequenio').innerText = obtenerNumeroMasChico(arrayNumerico);
document.querySelector('#numero-mas-grande').innerText = obtenerNumeroMasGrande(arrayNumerico);
document.querySelector('#numero-mas-frecuente').innerText = obtenerNumeroMasRepetido(arrayNumerico);
