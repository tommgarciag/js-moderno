// Arrow functions: Las arrow functions son una nueva forma de expresar funciones, además de las declaradas y las expresiones funcionales (al igual que estas, no se alzan).

// Funcion declarada
function sayHi1(name) {
    console.log(`Hi ${name}`);
}

// Expresion funcional
const sayHi2 = function (name) {
    console.log(`Hi ${name}`);
}

sayHi1("Tomás");
sayHi2("Carlos");

// Arrow functions: A la izquierda del arrow operator encontramos la recepción de argumentos y a la derecha la expresión que se evaluará y producirá un resultado. Las funciones flecha (arrow functions) JavaScript pueden o no aceptar argumentos, en cuyo caso hay que escribir unos paréntesis vacíos, o aceptar N número de argumentos, como sus hermanas mayores. Si sólo hay un argumento, se pueden prescindir de los paréntesis.

const sayHi3 = name => console.log(`Hi ${name}`);

sayHi3("Julio");

// Las funciones flecha JavaScript tiene return implícito, es decir, no hace falta especificarlo.

// Return implícito

const double = num => num * 2;
console.log(double(3));

// Si queremos realizar más operaciones en arrow function debemos usar las llaves {} para delimitar el cuerpo y especificar el valor a retornar.

// Return explícito

const quadruple = (num) => {
    let value = double(num); // teaser let variables (let ambito de bloque)
    return value * 2;
}

const num = quadruple(2);
console.log(num);

// Arrow functions no tienen this sino que acceden al valor léxico exterior. Esto hace que sean excepcionalmente útiles como métodos en objetos.

const cat = {
    name: "Guizmo",
    tags: ["fucking", "amazing", "black", "cat"],
    showTags() {
        this.tags.forEach(tag => console.log(tag));
//      this.tags.forEach(function(tag) {
//         console.log(this === cat);
//      });
    }
};

cat.showTags();

// NOTA: si las arrow functions JavaScript no tiene this, eso quiere decir que no pueden usarse como constructuras en clases y objetos.