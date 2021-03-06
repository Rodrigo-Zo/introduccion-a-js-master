/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
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

function crearIntegrante(numeroIntegrante){
    let $integrante = document.createElement('div');
    $integrante.className = `integrante-familia`;

    let $integranteLabel = document.createElement('label');
    $integranteLabel.textContent = `Completa la edad del integrante Nº ${numeroIntegrante + 1} `;

    let $integranteInput = document.createElement('input');
    $integranteInput.type = 'number';
    $integranteInput.className = "form-control";


    $integranteLabel.appendChild($integranteInput);
    $integrante.appendChild($integranteLabel);
    document.querySelector('#integrantes').appendChild($integrante);
}

function ocultarElemento(nombreElementoParaOcultar){
    nombreElementoParaOcultar.style.display = 'none';
}

function desocultarElemento(nombreElementoParaDesocultar){
    nombreElementoParaDesocultar.style.display = '';
}

function eliminarIntegrante(){
    let integrantes = document.querySelectorAll('.integrante-familia');
    for(let i = 0; i < cantidadDeFamiliares; i++){
        integrantes[i].remove();
    }
}

let cantidadDeFamiliares;
ocultarElemento(document.querySelector('#boton-calcular'));
ocultarElemento(document.querySelector('#resultados-edades'));

document.querySelector('#boton-continuar').onclick = function(){
    cantidadDeFamiliares = document.querySelector('#cantidad-familiares').value;
    
    if(cantidadDeFamiliares <= 0 ){
        alert('La cantidad de integrantes debe ser mayor a cero');
    }

    else{
        for(let i = 0; i < cantidadDeFamiliares; i++){
            crearIntegrante(i);
        }
    
        desocultarElemento(document.querySelector('#boton-calcular'));
        ocultarElemento(document.querySelector('#boton-continuar'));
    }
}

document.querySelector('#boton-calcular').onclick = function(){
    let edadesFamiliaresArray = [];

    for(let i = 0; i < cantidadDeFamiliares; i++){
        edadesFamiliaresArray[i] = Number(document.querySelectorAll("#integrantes .form-control")[i].value);
    }

    desocultarElemento(document.querySelector('#resultados-edades'));
    ocultarElemento(document.querySelector('#boton-calcular'));
    desocultarElemento(document.querySelector('#trabajos-y-salarios'));
    
    document.querySelector('#mayor-edad').textContent = obtenerNumeroMasGrande(edadesFamiliaresArray);
    document.querySelector('#menor-edad').textContent = obtenerNumeroMasChico(edadesFamiliaresArray);
    document.querySelector('#promedio-edad').textContent = obtenerPromedioDeNumeros(edadesFamiliaresArray);
}

document.querySelector('#boton-resetear').onclick = function (){
    desocultarElemento(document.querySelector('#boton-continuar'));
    ocultarElemento(document.querySelector('#boton-calcular'));
    ocultarElemento(document.querySelector('#resultados-edades'));
    eliminarIntegrante();
    ocultarElemento(document.querySelector('#trabajos-y-salarios'));
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar 
el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
ocultarElemento(document.querySelector('#trabajos-y-salarios'));

function crearSalarioIntegrante(){
    let $salarioIntegrante = document.createElement('div');
    $salarioIntegrante.className = 'salario-integrante-div';

    let $salarioLabel = document.createElement('label');
    $salarioLabel.textContent = `Completa el salario anual del integrante: `;

    let $salarioInput = document.createElement('input');
    $salarioInput.type = 'number';
    $salarioInput.className = "form-control";
    $salarioInput.placeholder = 'Ingresa el número';
    
    $salarioLabel.appendChild($salarioInput);
    $salarioIntegrante.appendChild($salarioLabel);
    document.querySelector('#trabajo-integrante').appendChild($salarioIntegrante);
}

function eliminarSalarioIntegrante(){
    document.querySelector('.salario-integrante-div').remove();
}

document.querySelector('#boton-agregar').onclick = function(){
    crearSalarioIntegrante();
}

document.querySelector('#boton-quitar').onclick = function(){
    eliminarSalarioIntegrante();
}

document.querySelector('#boton-calcular-salario').onclick = function(){
    let salariosNodeList = document.querySelectorAll('#trabajo-integrante .form-control');
    let familiaresSalariosArray = [];

    for(let i = 0; i < salariosNodeList.length; i++){
        
        if(String(salariosNodeList[i].value).length === 0){
        }
        else{
            familiaresSalariosArray.push(Number(salariosNodeList[i].value)) ;
        }
    }

    document.querySelector('#mayor-salario-anual').textContent = obtenerNumeroMasGrande(familiaresSalariosArray);
    document.querySelector('#menor-salario-anual').textContent = obtenerNumeroMasChico(familiaresSalariosArray);
    document.querySelector('#promedio-salario-anual').textContent = obtenerPromedioDeNumeros(familiaresSalariosArray);
    document.querySelector('#promedio-salario-mensual').textContent = obtenerPromedioDeNumeros(familiaresSalariosArray) / 12;
}
