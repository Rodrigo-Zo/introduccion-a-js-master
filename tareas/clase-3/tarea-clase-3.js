// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function saludarUsuario(){

    if (nombreUsuario === MINOMBRE) {
        saludo = `Hola papu, yo tambien me llamo ${nombreUsuario}`;
    } 
    else if  (nombreUsuario === NOMBREABUELA) {
         saludo = `Hola ${nombreUsuario}, te llamas igual que mi abuela`;
    }
    else{
         saludo = `Hola ${nombreUsuario}`;
    }

   return saludo;
}

function compararEdades(edadUsuario, MIEDAD){
    if (edadUsuario < MIEDAD){
        return 'Sos mas chico que yo';
    }

    else if (edadUsuario > MIEDAD){
        return 'Sos mas grande que yo';
    }

    else {
        return 'Tenemos la misma edad';
    }
}

const MINOMBRE = 'Rodrigo';
const MIEDAD = 23;
const NOMBREABUELA = 'Olga';

let nombreUsuario = String(prompt('Ingresa tu nombre'));
console.log(saludarUsuario());
let edadUsuario = Number(prompt('Ingresa tu edad'));
console.log(`${compararEdades(edadUsuario, MIEDAD)}, yo tengo ${MIEDAD}, y vos tenes ${edadUsuario}.`);



let usuarioDocumento = String(prompt('Tenés documento? (si/no)')).toLowerCase();

if(usuarioDocumento === 'si') {
    let usuarioEdad = Number(prompt('Ingresa tu edad'));
    const EDADPERMITIDA = 18;
    let texto;

    if(usuarioEdad >= EDADPERMITIDA){
        texto = 'Podes entrar al bar';
    }

    else if(usuarioEdad <= EDADPERMITIDA){
        texto = 'No podes entrar al bar, sos menor.';
    }

    else{ 
        texto = 'No entendi tu respuesta, solo numeros';
    }

    console.log(texto);
}

else if (usuarioDocumento === 'no'){
    console.log('No podes ingresar al bar, busca tu DNI');
}

else{
    console.log('No entendi la respuesta, escribe "si" o "no" ');
}
