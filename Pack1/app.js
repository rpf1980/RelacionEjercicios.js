
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

function compruebaMaysMinsAmbas(texto) {

    let cadena = texto.replace(/ /g, '');
    let contMax = 0;
    let contMin = 0;
    let msg = "";

    for (i = 0; i < cadena.length; i++) {

        if (cadena[i].toUpperCase() == cadena[i]) {

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

    const array = cadena.split(" ");

    let resultado = "Número de palabras = " + array.length + '<br/>';
    resultado = resultado + "Primera palabra = " + array[0] + '<br/>';
    resultado = resultado + "Última palabra = " + array[array.length - 1] + '<br/>';
    array.reverse();
    resultado = resultado + "Palabras en orden inverso = " + array + '<br/>';
    array.sort();
    resultado = resultado + "Ordenadas de la A a la Z = " + array + '<br/>';
    array.reverse();
    resultado = resultado + "Ordenadas de la Z a la A = " + array;

    return resultado;


}

function limpiar5() {

    solucion5.innerHTML = "";
    valorInput5.value = "";
}

// Ejercicio 6
const p = document.getElementById('idSol6');
function muestraMeses() {

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let result = "";

    for (i = 0; i < meses.length; i++) {

        result = result + meses[i] + "<br/>";
    }

    return result;
}

function limpiar6() {

    p.innerHTML = "";
}

// Ejercicio 7
// Dado un número, devuelve una cadena que dice si es par o impar.
const idInput7 = document.getElementById('idEj7');
const idSol7 = document.getElementById('idSol7');

let response = "";

function parImpar(number) {

    let n = parseInt(number);

    console.log(n);

    if (n % 2 == 0) {

        response = "El número " + n + " es par";

    } else {

        response = "El número " + n + " es impar";
    }

    return response;
}

function limpiar7() {

    idInput7.value = "";
    idSol7.innerHTML = "";
}

// Ejercicio 8
// Dado un DNI comprueba si es correcto. Para ello se utiliza la siguiente fórmula:
// DNI / 23 = índice de la letra correspondiente en "TRWAGMYFPDXBNJZSQVHLCKE".

const txtSol8 = document.getElementById('idSol8');
const idInput8 = document.getElementById('idEj8');
const idInputLetra = document.getElementById('idLetraDni');

const letrasDni = "TRWAGMYFPDXBNJZSQVHLCKE";
let suma = 0;
let resultado = "";

function checkDNI(numero, letra) {

    for (i = 0; i < 8; i++) {

        suma = suma + numero[i];
    }

    if (letra.toUpperCase() === letrasDni[suma % 23]) {

        resultado = "DNI válido";

    } else {

        resultado = "DNI incorrecto";

    }

    return resultado;
}

function limpiar8() {

    txtSol8.innerHTML = "";
    idInput8.value = "";
    idInputLetra.value = "";
}

// Ejercicio 9
// Comprueba si la cadena dada es un palíndromo.

const sol9 = document.getElementById('idSol9');
const input9 = document.getElementById('idInput9');

// Funciones aparte
function quitaEspacios(cadena) {

    let cadena2 = cadena.replace(/ /g, '');

    return cadena2;
}

function quitaAcentos(cadena) {

    let copia = "";
    const con = "áàäéèëíìïóòöúùuñÁÀÄÉÈËÍÌÏÓÒÖÚÙÜÑçÇ";
    const sin = "aaaeeeiiiooouuunAAAEEEIIIOOOUUUNcC";

    for(i = 0; cadena.length; i++) {

        for(j = 0; con.length; j++) {

            if(cadena.charAt(i) === con.charAt(j)) {

                copia = cadena.replace(cadena.charAt(i), sin.charAt(j));
            }
        }
    }

    return copia;
}

function invierteString(str) {

    let invertido = "";

    for(let char of str) {

        invertido = char + invertido;
    }

    return invertido;
}

function esPalindromo(cadena) {

    debugger;

    let response = "";

    let copia = quitaEspacios(cadena);
    let cadenaLimpia = quitaAcentos(copia);
    let invertida = invierteString(cadenaLimpia);

    if(cadenaLimpia.toLowerCase() === invertida.toLowerCase()){

        response = "La cadena es un PALÍNDROMO";

    }else{

        response = "La cadena NO es un Palíndromo";
    }

    return response;
}

function limpiar9() {

    sol9.innerHTML = "";
    input9.value = "";
}