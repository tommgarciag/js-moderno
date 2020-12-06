//// SPREAD SYNTAX

//// Expande valores (string o matriz) allá donde se esperan argumentos (funcion) o elemento (matrices)

const numeros = [1,2,3,4,5];
console.log(...numeros); // output: 1 2 3 4 5 

const oracion = "Hola mundo";
console.log(...oracion); // output: H o l a  m u n d o

function sumar(a, b, c, d, e) {
    return a + b + c + d + e
}

// console.log(sumar.apply(null, numeros)); // sin spread
console.log(sumar(...numeros)); 

//// Clonar matrices y objetos

const copiaNumeros = [...numeros];
console.log(copiaNumeros);
numeros.push(6);
console.log(numeros, copiaNumeros);
// observo que agregar un elemento a la matriz original no afecta a su copia

const datos = {nombre: "Tomas", ciudad: "Comodoro Rivadavia"};
const copiaDatos = {...datos};
console.log(copiaDatos);

//// Fusionar matrices y objetos
const preferencias = {nombre: "Juan", cerveza: "Imperial", color: "Rubia"};
const persona = {...datos, ...preferencias};
console.log(persona);

// Puedo pasar que existe una colision de propiedad, si en preferencias existiera una propiedad "nombre". Observamos como se utiliza la ultima variacion de "nombre". Esto es util para tomar objetos de diferentes fuentes y crear un objeto con los ultimos valores de cada propiedad.

//// REST

//// Representa un numero indefinido de argumentos como matriz

function sumar2(...argumentos) {
    return argumentos.reduce((acumulador, nuevoValor) => acumulador + nuevoValor);
}

// Se puede usar spread varias veces y tambien combinarlo con otros valores
const numeros2 = [22,33,44]
console.log(sumar2(...numeros, ...[55,2], ...numeros2, 2,4,6));

// Ejemplo

const mapState = {
	loggedIn() {
		return true
	},
	member() {
		return false
	}
}

const computed = {
	...mapState,  // incorporo los metodos del objeto mapState en el objeto computed
	computedProp() {
		return null
	}
}

console.log(computed);