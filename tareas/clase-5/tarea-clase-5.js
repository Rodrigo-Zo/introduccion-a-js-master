/*
Cosas a tener en cuenta:
1. Los <input> no tienen .innerText, en vez de eso, usan .value. https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input

2. Los demás elementos usan .innerText para acceder y modificar al texto que aparece dentro. https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
También pueden usar .textContent, las diferencias no son importantes por ahora.

3. Para evitar que el formulario <form> se “mande” y por ende recargue la página,
al event handler “onclick”, agréguentle un return false; al final de la función.

Ejemplo:
const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function()
    // código que se ejecuta cuando le hagan click a este elemento...
    return false;
}
*/

//DONE TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//DONE TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//DONE cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
//DONE en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

function calcularSalarioMensual(salarioAnual){
  return salarioAnual / 12;
}

document.querySelector('#calcular-salario-mensual').onclick = function(){
  let salarioAnual = Number(document.querySelector('#salario-anual').value);
  let salarioMensual = calcularSalarioMensual(salarioAnual);

  document.querySelector('#salario-mensual').value = salarioMensual;
  return false;
}


/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

