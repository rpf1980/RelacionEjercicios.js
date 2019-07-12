
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

function cabeceras(cadena) {

    let str = "";

    for (i = 1; i <= 6; i++) {

        str = str + '<h' + i + '>' + cadena + '</h' + i + '>' + '</br>';
    }

    return str;
}

function limpiar2() {

    idSol2.innerHTML = "";
    inputEjerc2.value = "";
}

// Ejercicio 3
let inputEjerc3 = document.getElementById('idEj3');
let solucion3 = document.getElementById('idSol3');

function factorial(n) {

    let factorial = 1;

    for (i = n; i >= 1; i--) {

        factorial = factorial * i;
    }
    return n + "! = " + factorial;
}

function limpiar3() {

    solucion3.innerHTML = "";
    inputEjerc3.value = "";
}

// Ejercicio 4
const inputEjerc4 = document.getElementById('idEj4');
const solucion4 = document.getElementById('idSol4');

function compruebaMaysMinsAmbas(cadena) {

    let contUppercase = 0;
    let contLowercase = 0;
    let message = "";

    for (i = 0; i < cadena.length; i++) {

        if (cadean[i].toUpperCase() == cadena[i]) {

            contUppercase++;
        }
        else if (cadena[i].toLowerCase() == cadena[i]) {

            contLowercase++;
        }
    }

    if (cadena.length === contUppercase) {

        message = "La cadena está compuesta solo por mayúsculas";
    } else if (cadena.length === contLowercase) {

        message = "La cadena está compuesta solo por minúsculas";
    } else {

        message = "La cadena está compuesta tanto por mayúsculas como minúsculas";
    }

    return message;
}

function limpiar4() {

    solucion4.innerHTML = "";
    inputEjerc4.value = "";
}

