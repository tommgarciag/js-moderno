// XMLHttpRequest es un  objeto de JavaScript. Proporciona una forma facil de obtener informacion de una URL sin tener que recargar la pagina completa. Ampliamente utilizada en la programacion AJAX.

// https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest

// FETCH API's 

// A tener en cuenta: fetch retorna promesas.

// Sintaxis:
// fetch(url, [options])

// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const url = "https://jsonplaceholder.typicode.com/posts/";

// GET request
fetch(url)
    // Examinando Response object 
    //.then(response => console.log(response));
    .then(response => {
        console.log(response.headers.get("Content-Type"));
        // Todos los headers:
        for (const [key, val] of response.headers) {
            console.log(key,val)
        }
        return response.json();
    })
    .then(response => console.log(response))
    .catch(error => console.error(error))

// Response (respuesta a una peticion): https://developer.mozilla.org/es/docs/Web/API/Response

// POST request

// Cuerpo a enviar
const payload = {
    id: 23123131,
    name: "Tomas",
    color: "red",
}

// Opciones del request
const options = {
    method: "POST",
    headers: {
        //Enviamos JSON al cuerpo
        "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(payload)
}

// Request
fetch(url, options)
    .then(response => console.log(response))
    .catch(error => console.error(error))