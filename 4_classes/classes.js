//// CLASS

// JavaScript sigue siendo 100% prototipado (los metodos y propiedad se heredan a través de prototipos)

// Classes es syntax sugar

/*
function Task() {
    ...
}

const tarea1 = new Task();
*/

//// Class declaration

class Task {
    // Funcion constructora
    constructor(title) {
        if (!title) throw new Error("Tu tarea necesita un título!")
        // lanzo un error cuando no haya titulo 
        this.title = title;
        this.completed = false; // estado de la tarea
    }
}

// Creo una instancia de la clase Task

tarea1 = new Task("Aprender JavaScript Moderno");
console.log(tarea1);
console.log(tarea1 instanceof Task); // forma de comprobar si una instancia es "hija" de cierta clase


//// Class expression

const TasksList = class {
    constructor() {
        this.tasks = [
            {
                title: "Aprender Firebase",
                completed: false
            },
            {
                title: "Aprender CSS",
                completed: true
            },
            {
                title: "Aprender HTML",
                completed: false
            }            
        ]
    }

    // Getters: Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.

    // Getter que retorne las tarea que estan sin completar
    get uncompleted() {
        return [...this.tasks].filter(task => !task.completed);
    }
    // Getter que retorne las tarea completadas
    get completed() {
        return [...this.tasks].filter(task => task.completed);
    }

    // Setters: La sintaxis  set  asocia la propiedad de un objeto a una función que será llamada cuando haya un intento de asignar valor a esa propiedad.

    set addTask(task) {
        this.tasks.push(task);
    }

    // Métodos

    search(search) {
        return this.tasks.find(task => task.title.includes(search));
    }

    removeTask(index) {
        return this.tasks.splice(index,1);
    }

    // Static: metodos que no se heredan, solo pueden invocarse desde la clase. No es necesario instanciar la clase para utilizarlos

    static normalizeTask(title) {
        title = title.trim(); // elimino los espacios al ppio y al final
        return title.charAt(0).toUpperCase() + title.substring(1);
    }




}

const tareas = new TasksList();
console.log(tareas.uncompleted); // sin parentesis porque estoy invocando un propiedad del objeto

const tarea2 = new Task("Aprender Vuex"); // instancio una nueva tarea
tareas.addTask = {...tarea2}; // y la agrego a traves del setter a tareas (instancia de TasksList) con la sintaxis spread
console.log(tareas);
console.log(tareas.search("Vuex"));

console.log(tareas.removeTask(1)); // elima "Aprender CSS"


// uso noramlizeTask sin intanciar

console.log(TasksList.normalizeTask("   nueva tarea  ")); 

// uso noramlizeTask desde la intancia tareas

console.log(tareas.constructor.normalizeTask("  otra tarea   ")); 

// Subclassing with extends

// si quiero una clase con ligeras diferencias

// Ejemplo Reminder

class Reminder extends Task {
    // esto quiere decir que hereda todos los metodos de Task
    constructor(title, date) {
        // con la funcion super() envio el valor de title al constructor de Task
        super(title);
        this.date = date; // la fecha la guardo en el contrcutor de Reminder
    }

    get duration() {
        return `La tarea ${this.title} finaliza el ${this.date}.`;
    }
}

const producir = new Reminder("Produccir lección", "15 de diciembre de 2020");

console.log(producir.duration);


