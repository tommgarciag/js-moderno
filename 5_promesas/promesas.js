// PROMESAS: es la certeza de que habra un resultado en una operacion, de la cual no sabes el resultado todavia. El objeto Promise es usado para computos asincronos. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca. En una promosa solo puede haber dos resultado: resolve o reject.

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise

//// Creacion de promesa ////

const buyFood = new Promise((resolve, reject) => {    
    // resolve("Aqui tienes tu comida");
    reject(Error("Error procesando el pago"));
});


// [[promiseState]] = "pending"   --> Cuando una promesa ni se hay resuelto (resolve) ni se ha rechazado (reject)

buyFood
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.info("Proceso finalizado."))

// .finally se ejecuta independientemente de que si se rechaza o se resuelva la promesa

//// Manejo de varias promesas ////

const payFood = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve({done: true, customerID: 31212121212})
        //reject(Error("Problema con el pago."))
        Promise.race([paypal, amex]).then(payProvider => {
            resolve({done: true, payProvider, customerID: 31212121212})
        }) 
    }, 300);
})

// Proveedores de pago (Promise.race)

const paypal =  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Paypal");
    }, 200)
})


const amex =  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Amex");
    }, 1000)
})

const getTransport = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({bikerID : 452434, distance: 3000})
        //reject(Error("Problema con el repartidor."))
    }, 1000);    
})

function deliverFood() {
    // then flow:
    // payFood
    //     .then(paymentInfo => {
    //         console.log(paymentInfo);
    //         return getTransport; // Retorna otra promesa, podemos encadenar .then
    //     })
    //     .then(riderInfo => {
    //         let {bikerID, distance} = riderInfo;
    //         console.log(`El biker ${bikerID} se encuentra a ${distance} metros.`)
    //     })
    //     .catch(error => console.error(error))
    //     .finally(() => console.info("Proceso de compra finalizado."))

    // Promise all:
    Promise.all([payFood, getTransport])
        .then(order => console.log(order))
        .catch(error => console.error(error))
}

deliverFood()