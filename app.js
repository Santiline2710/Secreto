// variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//inicio del juego
condicionesIniciales();

// verificación en consola
console.log("Numero_secreto: " + numeroSecreto);
console.log("Intento: " + intentos);

// funciones
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    //verificacion consola
    console.log("lista de numero sorteados:" + listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","ya se sortearon todos los numeros posibles");
    }else{
         // si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }            
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

     //verificacion en consola
    console.log("Numero_del_usuario: " + numeroDeUsuario);
    console.log(numeroSecreto === numeroDeUsuario);    

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("h1", "¡Felicidades!")
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();    
    }    
}

function reiniciarJuego(){
    //limpiamos la caja
    limpiarCaja();
    /*devolver el primer mensaje, generar un nuevo numero aleatorio
    y inicialisar el numero de intentos */
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector(`#reiniciar`).setAttribute("disabled" , true);
    //verificacion en consola
    console.log("Numero_secreto: " + numeroSecreto);
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}
