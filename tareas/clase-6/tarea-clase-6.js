/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function crearFamiliar(NumeroDeFamiliar){
    nuevoFamiliarLabel = document.createElement('label');
    nuevoFamiliarInput = document.createElement('input');
    nuevoFamiliarLabel.textContent = `Ingresa la edad del familiar Nº ${NumeroDeFamiliar + 1}`;
    nuevoFamiliarInput.type = 'number';
    nuevoFamiliarInput.placeholder = 'Ingresa el número';
    nuevoFamiliarInput.className = 'edad-familiar';
    nuevoFamiliarLabel.appendChild(nuevoFamiliarInput);
    document.querySelector('#edades-familiares').appendChild(nuevoFamiliarLabel);
}

function crearBotonCalcular(){
    nuevoBotonCalcular = document.createElement('button');
    nuevoBotonCalcular.type = 'button';
    nuevoBotonCalcular.textContent = 'Calcular';
    nuevoBotonCalcular.id = 'boton-calcular';
    document.querySelector('#edades-familiares').appendChild(nuevoBotonCalcular);
}

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


document.querySelector('#boton-continuar').onclick = function(){
    let numeroDeFamiliares = document.querySelector('#cantidad-familiares').value;

    for(let i = 0; i < numeroDeFamiliares; i++){
        crearFamiliar(i);
    }

    crearBotonCalcular();

    document.querySelector(`#boton-calcular`).onclick = function(){
        let nodeListEdadesFamiliares = document.querySelectorAll('.edad-familiar');
        let arrayEdadesFamiliares = [];
        
        for(let i = 0; i < numeroDeFamiliares; i++){
            arrayEdadesFamiliares[i] = Number(nodeListEdadesFamiliares[i].value);
        }
        
        let numeroMasGrande = obtenerNumeroMasGrande(arrayEdadesFamiliares);
        let numeroMasChico = obtenerNumeroMasChico(arrayEdadesFamiliares);
        let promedioDeNumeros = obtenerPromedioDeNumeros(arrayEdadesFamiliares);


        document.querySelector(`#resultados-edades`).textContent = `Numero más grande: ${numeroMasGrande}, Numero más chico: ${numeroMasChico}, El promedio de edad es: ${promedioDeNumeros}`;

        return false;
    }

    return false;
}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
