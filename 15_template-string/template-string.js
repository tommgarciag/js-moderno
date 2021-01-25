const hi = "Hello World";
const from = "from Argentina";

// Template string literal

function day() {
    return "satuday";
}

const final = `${hi} ${from} on ${day()}`;
console.log(final);

// Strings multilinea

// const multilinea = "Hello \n World"
const multilinea = `Hello
World`;

console.log(multilinea);

// String.includes(): determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/includes

const email = "hola@correo.es";

// if (email.includes("@")) console.log("Valid email.");

// StartWith / EndWith

// if (email.endsWith(".es")) console.log("Valid email.");

const validEmail = (email) => email.includes("@") && email.endsWith(".es");

if (validEmail(email)) console.log("Valid email.");

// Tagged templates

const cat = {
    name: "Guizmo",
    color: "black",
    city: "Valencia",
    image: "https://www.guideposts.org/sites/guideposts.org/files/styles/bynder_webimage/public/story/blackcat_marquee_0.jpg"
};

function makeTemplate(strings, ...keys) {
    // console.log(strigs, keys);
    return function(data) {
        console.log(data);
        let slices = strings.slice();
        keys.forEach(function(key, index) {
            slices[index] += data[key];
        })
        // console.log(slices);
        return slices.join("");
    }
}

const catTemplate = makeTemplate`
    <div class="cat">
        <h1>${"name"}</h1>
        <h3>${"color"} from ${"city"}</h3>
        <img src=${"image"}>
    </div> 
`(cat);

// console.log(catTemplate);

const catElement = document.createElement("div");
catElement.innerHTML = catTemplate;
document.body.appendChild(catElement);