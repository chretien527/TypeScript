type Todo = {
    id: number;
    task: string;
    completed: boolean;
};

let todos: Todo[] = [];

function addTodo(task: string): void{
    const newTodo = {
        id: Date.now(),
        task,
        completed: false
    };
    todos.push(newTodo);
}

addTodo("Learn TypeScript");
console.log(todos);