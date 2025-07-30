// variables
let numeroSecreto = 0;
let intentos = 0;
let intentos_maximos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 0;
//inicio del juego
condicionesIniciales();

// verificación en consola
console.log("Numero_secreto: " + numeroSecreto);
console.log("cantidad de intentos:" + intentos_maximos);

// funciones
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    //verificacion consola
    console.log("lista de numero sorteados:" + listaNumerosSorteados);
    // si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else if(listaNumerosSorteados.length == 3){
        listaNumerosSorteados.push(numeroGenerado);
        listaNumerosSorteados.shift();
        return numeroGenerado;
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }    
}

function condicionesIniciales(){
    numeroMaximo = 10;
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Elije una dificultad`);
    document.getElementById("facil").removeAttribute("disabled");
    document.getElementById("normal").removeAttribute("disabled");
    document.getElementById("dificil").removeAttribute("disabled");
    document.getElementById("intentar").setAttribute("disabled",true);
    intentos = 1;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    intentos_maximos--;
     //verificacion en consola
    console.log("Numero_del_usuario: " + numeroDeUsuario);
    console.log("cantidad de intentos:" + intentos); 
    console.log("intentos restantes:" + intentos_maximos);   

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("h1", "¡Felicidades!")
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("intentar").setAttribute("disabled",true);
    } else {
        if (intentos_maximos == 0) {
            asignarTextoElemento("h1","Perdiste :(");
            asignarTextoElemento("p",`Te quedaste sin intentos, el numero secreto era ${numeroSecreto}`);
            document.getElementById("intentar").setAttribute("disabled" , true);
            document.getElementById("reiniciar").removeAttribute("disabled");
        } else if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p", `El número secreto es mayor, te quedan ${intentos_maximos} ${(intentos_maximos == 1) ? "intento" : "intentos"}`);
        }else {
            asignarTextoElemento("p", `El número secreto es menor, te quedan ${intentos_maximos} ${(intentos_maximos == 1) ? "intento" : "intentos"}`);
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
    intentos_maximos = 3;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}
function juego_facil(){
    intentos_maximos = 5;
    numeroMaximo = 10;
    numeroSecreto = generarNumeroSecreto();
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}, tienes ${intentos_maximos} intentos`);
    document.getElementById("intentar").removeAttribute("disabled");
    document.getElementById("normal").setAttribute("disabled",true);
    document.getElementById("dificil").setAttribute("disabled",true);
    document.getElementById("facil").setAttribute("disabled",true);

    console.log("Numero_secreto: " + numeroSecreto);
}
function juego_normal(){
    intentos_maximos = 3;
    numeroMaximo = 10;
    numeroSecreto = generarNumeroSecreto();
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}, tienes ${intentos_maximos} intentos`);
    document.getElementById("intentar").removeAttribute("disabled");
    document.getElementById("normal").setAttribute("disabled",true);
    document.getElementById("dificil").setAttribute("disabled",true);
    document.getElementById("facil").setAttribute("disabled",true);

    console.log("Numero_secreto: " + numeroSecreto);
}
function juego_dificil(){
    intentos_maximos = 3;
    numeroMaximo = 15;
    numeroSecreto = generarNumeroSecreto();
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}, tienes ${intentos_maximos} intentos`); 
    document.getElementById("intentar").removeAttribute("disabled");
    document.getElementById("normal").setAttribute("disabled",true);
    document.getElementById("dificil").setAttribute("disabled",true);
    document.getElementById("facil").setAttribute("disabled",true);

    console.log("Numero_secreto: " + numeroSecreto);
}
