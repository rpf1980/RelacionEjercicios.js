
// Ejercicio 1
const idSol1 = document.getElementById('idSol1');
const inputEjerc1 = document.getElementById('idEj1');

function tablaMultiplicar(n) {

    let tabla = "";

    for (i = 1; i <= 10; i++) {

        tabla = tabla + n + " x " + i + " = " + n * i + '<br/>';
    }
    return tabla;
}

function limpiar() {

    idSol1.innerHTML = "";
    inputEjerc1.value = "";
}

// Ejercicio 2
const idSol2 = document.getElementById('idSol2');
const inputEjerc2 = document.getElementById('idEj2');

function cabeceras(cadena){

    let str = "";

    for(i = 1; i <= 6; i++){

        str = str + '<h' + i + '>' + cadena + '</h' + i + '>' + '</br>'; 
    }

    return str;
}

function limpiar2(){

    idSol2.innerHTML = "";
    inputEjerc2.value = "";
}
