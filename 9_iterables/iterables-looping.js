// Bucle for..of
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...of

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];
for (let color of colores) {
    console.log(color);
}

const iterator = colores[Symbol.iterator]();

const persona = {
    nombre: "Tomas",
    ciudad: "Comodoro Rivadavia",
    color: "Rojo"
};

// for (let prop of persona) {
//     console.log(prop);
// }

// error: persona is not iterable

for (let [key, value] of Object.entries(persona)) {
    console.log(key, value);
}

// Object.entries() puedo usarlo en este caso porque se trata de un objeto simple

const aprender = {
    // Tecnologias y herramientas
    vue: ["Vue3", "Nuxt", "Grindsome"],
    js: ["ESNEXT", "Patterns", "Testing"],
    css: ["Tailwind", "BEM", "SubGRID"]
};

// con la funcion Symbol.iterator() debemos convertir este objeto en un elemento iterable para poder usar for..of

console.log(Object.values(aprender))

aprender[Symbol.iterator] = function() {
    // Por cada matriz con herramientas, ir retornando cada una de ellas
    let indiceTecnologia = 0;
    let indiceHerramienta = 0;
    // console.log(Object.values(aprender));
    const tecnologias = Object.values(this);

    return {
        next() {
            const tecnologia = tecnologias[indiceTecnologia];
            

            // Comprobar que haya mas herramientas

            if (!(indiceHerramienta < tecnologia.length)) {                
                indiceTecnologia++;
                indiceHerramienta = 0;
            }

            // Comprobar que haya mas tecnologias

            if (!(indiceTecnologia < tecnologias.length)) {
                return {
                    value: undefined,
                    done: true
                };
            }

            return {                
                value: tecnologia[indiceHerramienta++],
                done: false,
            }
        }
    }
}

for (let herramienta of aprender) {
    console.log(herramienta);    
}


