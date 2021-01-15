const nombre = "Tomas";
const color = "azul";
const ciudad = "Comodoro Rivadavia";
const lenguaje = "JavaScript";

const persona = {
    // Atributos:
    // nombre: nombre,
    // color: color,
    // ciudad: ciudad,
    // lenguaje: lenguaje
    nombre,
    color,
    ciudad,
    lenguaje,
    // Propiedades computadas:
    [ciudad + "CP"]:9000,
    // Metodos:
    // saludar: function() {
    //    return console.log(`Hola me llamo ${this.nombre}.`)
    // }
    saludar() {
        console.log(`Hola me llamo ${this.nombre}.`)
    }    
};

console.log(persona);
persona.saludar();


// Object.values() + desestructuracion
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/values

console.log(Object.values(persona));
const [nombre2, color2, ciudad2, lenguaje2] = Object.values(persona);


// Object.entries()
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries

console.log(Object.entries(persona));
Object.entries(persona).forEach(([key, value]) => {
    console.log(`${key} : ${value}`)
});
