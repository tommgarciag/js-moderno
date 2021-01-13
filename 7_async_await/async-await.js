// Async and Await es sintaxis sugar para trabajar con promesas (codigo asincrono), haciendo el código asíncrono fácil de escribir y leer más tarde.

// https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Async_await

// Async keyword:

 async function myFunction() {
    return "Hello World";
}

myFunction().then(data => console.log(data))

// Await keyword:

function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Mostly cloudy: 13C°"), 2000)
        // setTimeout(() => reject("Can't connect"), 2000)
    })
}

function getTraffic() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Traffic fluid"), 2000)
    })
}

async function travelPlan() {

    // Opcion 1:
    // getWeather()
    //     .then(data => {
    //         console.log(data);
    //         return getTraffic();
    //     })
    //     .then(data => console.log(data))

    // Opcion 2:
    // const weather = getWeather();
    // const traffic = getTraffic();
    // return [weather, traffic];

    try {
        const weather = getWeather();
        const traffic = getTraffic();
        const plan = await Promise.all([weather, traffic]);
        // throw "Error";
        return plan; 
    } catch (error) {
        throw error;
    }
    

}

travelPlan()
    .then(data => console.log(data))
    .catch(error => console.error(error));