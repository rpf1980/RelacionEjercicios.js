
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

    let contMax = 0;
    let contMin = 0;
    let msg = "";

    for (i = 0; i < cadena.length; i++) {

        if (cadena[i].toUpperCase() == cadena[i]) {

            console.log(cadena[i]);
            contMax++;
        } else {

            if (cadena[i].toLowerCase() == cadena[i]) {

                contMin++;
            }
        }
    }

    if (contMax == cadena.length) {

        msg = "El texto está compuesto solo de mayúsculas";
    } else {

        if (contMin == cadena.length) {

            msg = "El texto está compuesto solo de minúsculas";
        } else {

            msg = "El texto contiene tanto mayúsculas como minúsculas";
        }
    }

    return msg;
}

function limpiar4() {

    solucion4.innerHTML = "";
    inputEjerc4.value = "";
}

// Ejercicio 5
const valorInput5 = document.getElementById('idEj5');
const solucion5 = document.getElementById('idSol5');

function arrayCadena(cadena) {

    let numeroPalabras = 0;
    let primeraPalabra = "";
    let ultimaPalabra = "";
    let textoInvertidos = "";
    let ordenadoA_Z = "";
    let ordenadoZ_A = "";   

    const array = cadena.split(" ");

}

function limpiar5() {

    solucion5.innerHTML = "";
    valorInput5.value = "";
}

