console.log("------------------------ mutable array methods ---------------------");
//dit is bij wijze van voorbeeld, we gaan GEEN mutable array methods gebruiken in deze cursus!

let todoList = [];

const remember = function(task) {
    todoList.push(task); //do not use in this course!!!
}
const rememberUrgently = function(task) {
    todoList.unshift(task); //do not use in this course!!!
}
const getTask = function() {
    return todoList.shift(); //do not use in this course!!!
}

remember("boodschappen doen");
remember("bloemenperk wieden");
remember("wagen naar controle");
rememberUrgently("wasmachine starten");
remember("winkel bellen");
console.log(todoList);
console.log(todoList.indexOf("winkel bellen"));
console.log(todoList.lastIndexOf("winkel bellen"));
console.log(todoList.lastIndexOf("wasmachine starten"));
let task = getTask();
console.log(task + " : uitgevoerd");
task = getTask();
console.log(task + " : uitgevoerd");
console.log(todoList);

todoList = todoList.slice(1, 2);
console.log(todoList);
todoList = todoList.concat(["tv kijken", "eten maken"]);
console.log(todoList);
todoList = todoList.concat("rusten");
console.log(todoList);

