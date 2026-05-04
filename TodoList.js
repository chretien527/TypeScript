"use strict";
let todos = [];
function addTodo(task) {
    const newTodo = {
        id: Date.now(),
        task,
        completed: false
    };
    todos.push(newTodo);
}
addTodo("Learn TypeScript");
console.log(todos);
