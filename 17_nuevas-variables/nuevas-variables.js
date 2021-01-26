// var: Las variables creadas con var tiene un ámbito funcional, es decir, sólo son accesibles en el ámbito de la función donde se crean y en ámbitos interiores. Si no se crean dentro de una función entonces su ámbito es global. Las declaración de variables con var son alzadas al inicio de la función donde se definen (hoisting).

var name = "Andrés"; // global

function greetings() {
    // var name = "Tomás"; // local
    return function() {
        console.log(name)   // Closure
    }
}

greetings()();

var i = 1;
for (i; i <= 10; i++) {
    console.log(i) // i = 10
}

console.log(i) // Seguimos teniendo acceso. i = 11

// let: Al utilizarlo creamos una variable que tiene ámbito de bloque. Las variables creads con let no se alzan y se crean de forma automática. Como sí ocurría con var.

for (let i2 = 1; i2 <= 10; i2++) {
    console.log(i2)
}

// console.log(i2) // Ya no tenemos acceso (error);

if (true) {
    var transform = name.toUpperCase(); 
    // let transform = name.toUpperCase(); // error
}

console.log(transform);

// const: Crea constantes. Si intento cambiar el valor de la constante, me encontraré con un error. Si el valor de la constante es compuesto, como un Object, Array, Map , Set y demás, lo que no podrás cambiar es la referencia a ese valor, pero sí su contenido.

const IVA = .21;
// IVA = .16; // Error

const Person = {};
Person.name = name;
console.log(Person);

// Person = {}; // Error 

Person2 = Person;
Person2.city = "Valencia";
console.log(Person2);


