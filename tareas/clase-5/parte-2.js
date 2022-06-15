//TAREA PARTE 2: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

document.querySelector('#ingresar').onclick = function(){
    const nombreUsuario = String(document.querySelector('#nombre-usuario').value);
    const segundoNombreUsuario = String(document.querySelector('#segundo-nombre-usuario').value);
    const apellidoUsuario = String(document.querySelector('#apellido-usuario').value);
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);

    document.querySelector('#datos-usuario').innerText = `Tus datos: ${nombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} ${edadUsuario}`;
    document.querySelector('h1').innerText = `Bienvenido ${nombreUsuario}`;
    return false;
}
