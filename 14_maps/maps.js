// Los Maps JavaScript son colecciones de datos organizados por claves (keys). Uno de los aspectos únicos de los Map es que permiten tener keys de cualquier tipo.

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map

const map = new Map();

console.log(map);
console.log(map.size);

map.set(1, "Number"); // map.set(key, value)
map.set("1", "String");
map.set(true, "Boolean");

console.log(map);
console.log(map.size);

// Acceder a los valores a traves de su key:  Map.get(key)
console.log(map.get(1));
console.log(map.get("1"));
console.log(map.get(true));

// Metodos de map
console.log(map.__proto__);

// A diferencia de los Set con Map podemos pedir individualmente un elemento.

// Map.keys(): devuelve un iterable para las keys
for (let key of map.keys()) {
    console.log(key);
}

// Map.values() : devulve un iterable para los values
for (let val of map.values()) {
    console.log(val);
}

// Map.entries(): devuelve un iterable del par key:values
for (let data of map.entries()) {
    console.log(data);
    // Desestructuro
    let [key, value] = data;
    console.log(key, value);
}

// Creacion de un Map a partir de un Object

const person = {
    name: "Tomás",
    city: "Comodoro Rivadavia",
    color: "blue"
}

const personMap = new Map(Object.entries(person));

console.log(personMap);
// ahora puedo acceder a los elementos con get()
console.log(personMap.get("name"));
console.log(personMap.get("city"));
console.log(personMap.get("color"));

// Cracion de un Object a partir de un Map con Object.fromEntries()
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/fromEntries

const personClon = Object.fromEntries(personMap);
console.log(personClon);

// Ejemplo: mapa de administradores

let juan = {name: "Juan"},
    nino = {name: "Nino"},
    guizmo = {name: "Guizmo"};

const admins = new Map();

// set() es encadenable

admins
    .set(juan, "superadmin")
    .set(nino, "admin")
    .set(guizmo, "editor")

console.log(admins);

// Importante: no estamos copiando el objeto a una nueva estructura sino estamos referenciando el objeto original por lo tanto si lo cambiamos o lo eliminamos automaticamente la lista de admins se actualiza.

// Compruebo si un usuario esta en la lista de administradores
function doAdmin(user) {
    if (admins.has(user)) {
        console.info(`User ${user.name} is doing ${admins.get(user)} stuff!`);
    } else {
        console.info("User not found on admin list.");
    }
}


juan = null; 

doAdmin(juan);
doAdmin(nino);