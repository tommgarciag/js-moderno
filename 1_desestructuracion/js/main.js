// Desestructurando matrices
const aprender = ["Vue", "JavaScript", "Laravel", "CSS"];

// Antes:
// var vue = aprender[0];
// var javascript = aprender[1];
// var laravel = aprender[2];
// var css = aprender[3];

// Despues:
var [vue, javascript, laravel, css] = aprender;

// Desestructurar strings
var direccion = "Calle San Almagro, 22, 3º puerta 5, 46006, Valencia";
var [calle, numero, piso, cp, ciudad] = direccion.split(',');

// Desestructurando objetos
 const gato = {
	nombre: "Guizmo",
	raza: "europea",
	color: "negro",
    edad: 2,
    hermano: {
        nombre: "Rouco",
        raza: "europea",
        color: "blanco y negro"
    },
};

// Antes:
// var nombre = gato.nombre;
// var color = gato.color;

var {nombre, raza, edad, color} = gato;
var {nombre:nombreHermano, raza:razaHermano, edad:edadHermano = "desconocida", color:colorHermano} = gato.hermano;

// Reemplazo de los parámetros por defecto

// Antes:
// function saludar(saludo, nombre = "Juan", momento) {
//     alert(`${saludo} ${nombre}, feliz ${momento}`);
// }

// saludar("Hola", undefined, "tarde");

function saludar({saludo, nombre = "Juan", momento = "día"}) {
    alert(`${saludo} ${nombre}, feliz ${momento}`);
}

saludar({saludo: "Hola"});

// Como parametro paso un objeto