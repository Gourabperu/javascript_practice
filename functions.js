// función de nombre example1 sin parametros y que no devuelve nada
function example1() {}

// función de nombre example2 sin parametros y que devuelve algo
function example2() {
    return "1234567890"; // la palabra return dentro de una funcin permite devolver algo a quien lo invoca
}

// función de nombre example3 con parametros y que no devuelve nada
function example3(arg1, arg2) {}

// función de nombre example4 con parametros y que devuelve algo
function example4(arg1, arg2) {
    return arg1 + arg2; // devuelve la suma de arg1 + arg2
}

// arrow functions => funciones de flecha

// función de nombre ejemplo1 sin parametros y que no devuelve nada
const ejemplo1 = () => {}

// función de nombre ejemplo2 sin parametros y que devuelve algo
const ejemplo2 = () => {
    return "0987654321"; // la palabra return dentro de una funcin permite devolver algo a quien lo invoca
}

// función de nombre ejemplo3 con parametros y que no devuelve nada
const ejemplo3 = (arg1, arg2) => {}

// función de nombre ejemplo4 con parametros y que devuelve algo
const ejemplo4 = (arg1, arg2) => {
    return arg1 + arg2; // devuelve la suma de arg1 + arg2
}

// esta sintaxis solo funciona en las funciones de tipo flecha que devuelven inmediatamente algún valor
const ejem4 = (arg1, arg2) => arg1 + arg2;

// función de nombre ejemplo5 con parametros, con lógica y que devuelve algo
const ejemplo5 = (arg1, arg2) => {
    return "trome";
    if (arg1 > 5) {
      arg1 = "hola mundo";
    }
    return arg1 + arg2; // devuelve la suma de arg1 + arg2
}

const ejem5 = (arg1, arg2) => "trome";

const ejem6 = (arg1, arg2) => { return 1 };
const ejem7 = (arg1, arg2) => {
  return 1;
};

const x = (a, b) => a + b;

 y= x(1, 2);

console.log(y);

// x(1, 2) -> y -> algo

function log(algo) {
  // algo
}