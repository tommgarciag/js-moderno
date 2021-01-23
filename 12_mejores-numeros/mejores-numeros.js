// Nuevos métodos para trabajar con números

// Math.trunc(): devuelve la parte entera de un numero removiendo cualquier dígito decimal (dígitos situados después de la coma). 

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/trunc

let num = 123.345;
console.log(Math.trunc(num)); // output 123
// console.log(Math.ceil(num)); // output 124 (devuelve el entero mayor o igual mas proximo)
// console.log(Math.floor(num)); // output 123 (devuelve el entero menor o igual)
// console.log(Math.round(num)); // output 123 (retorna el valor de un número redondeado al entero más cercano)

// IMPORTANTE: El argumento pasado a este método será convertido a un tipo numérico entero.
num = "123.345";
num = Math.trunc(num);  
console.log(typeof(num)); // typeof number


// parseInt
const num2 = 1312312312312312312312.1;

console.log(parseInt(num2)); // output 1 xq al pasarlo a string num = 1.3123123123123124e+21
console.log(num2.toString()); 

// Recomendacion: usar Math.trunc() para valores numerico y parseInt() para valores string

// Number.isNaN: determina si el valor pasado es NaN. Versión más robusta de la función global isNaN().

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number/isNaN

let valor = undefined + 1;
// Método estatico nuevo
console.log(Number.isNaN(valor)); // output: true
// Método global: retorna true en valores que se pueden convertir en NaN pero que no tienen por qué ser NaN. Ojo con esto.
console.log(isNaN(valor)); // output: true

valor = "NaN";
console.log(Number.isNaN(valor)); // output: false
console.log(isNaN(valor)); // output: true

// Number.isInteger(): determina si el valor pasado es de tipo entero.

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number/isInteger

let entero = 10;
console.log(Number.isInteger(entero)); // output: true

entero = 10.0;
console.log(Number.isInteger(entero)); // output: true xq el valor puede ser representado como entero

entero = 10.231;
console.log(Number.isInteger(entero)); // output: false

// Number.isFinite(): determina si el valor pasado es un número finito.

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number/isFinite

let finito = 20;
console.log(Number.isFinite(finito)); // output: true
console.log(isFinite(finito)); // output: true

 finito = "20";
console.log(Number.isFinite(finito)); // output: false
console.log(isFinite(finito)); // output: true xq el metodo global lo convierte a numero