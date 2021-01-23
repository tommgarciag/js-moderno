function sumar(num1, num2) {
    return num1 + num2;
}

console.log(sumar(4)); // output NaN xq num2 = undefined

// Parametros por defecto

function sumar2(num1 = 1, num2 = 3) {
    return num1 + num2;
}

console.log(sumar2()); // output 4 xq toma los valores por defecto de la funcion

// Los parametros pueden tener cualquier valor por defecto, incluso matrices o funciones (estos si invocaran en caso de la funciones en tiempo de ejecucion):

function randomNum() {
    return Math.floor(Math.random() * 2) + 1;
}

function sumar3(num1 = 1, num2 = randomNum()) {
    // console.log(num2);
    return num1 + num2;
}

console.log(sumar3());

// Omitir parametros: podemos usar undefined para especificar que quiero usar el parametro por defecto

console.log(sumar3(undefined, 6)); // output 7


