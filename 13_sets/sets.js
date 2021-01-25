// Sets: nuevo tipo de estructa que permite almacenar colecciones de valores unicos.

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Set

const myColors = ["purple", "cyan"];
const colors = new Set(myColors);

console.log(colors);

// Añadir al set

colors.add("red");
colors.add("green");
colors.add("white");
colors.add("yellow");

// No permite duplicados (permite valores unicos)
colors.add("yellow"); 
colors.add("yellow"); 

console.log(colors);

// Observo como mantiene el mismo orden en el que han sido definidos los elementos del set.

// Iterar sobre el set 
console.log(colors.values()); // setIterator

for (let color of colors) {
    console.log(color);
}

console.log(colors.__proto__); // metodos de set

// Eliminar elementos del set

console.log(colors.delete("black")); // output false xq no lo encuentra
console.log(colors.delete("yellow")); // output true y lo elimina

console.log(colors.size); // output 5 (elementos)

const text = "Welcome to the jungle!";
console.log(text.length); // output 22
console.log(new Set(text).size); // output 14 xq son los caracteres unicos de text
console.log(new Set(text).values());

// Como acceder a los elementos del set (teniendo en cuanta que no tienen indices).

// Set.has() puede comprobar si existe el elemento dentro del set
console.log(colors.has("purple")); // output: true
console.log(colors.has("pink")); // false

// Vaciar un set
colors.clear();
console.log(colors); // set vacio

// Ejercicio: crear un set de visitas de usuarios.

const users = ["Juan", "Alberto", "Raúl", "María", "Laura", "Elena", "Tomás"];
const userVisits = new Set();

// Regista las visitas de los users
function visit() {
    const userIndex = Math.floor(Math.random() * users.length);
    const user = users[userIndex];
    userVisits.has(user) && console.warn(`User ${user} already visited the page!`);
    userVisits.add(user);
    console.log(userVisits);

    if (userVisits.size === users.length) {
        console.info("All users have visited the page");
        clearInterval(interval);
        userVisits.clear();
    }
}

const interval = setInterval(visit, 300);
