"use strict";
function greetUser(user) {
    return `Hello ${user.name}, you are ${user.age} years old`;
}
console.log(greetUser({ name: 'Alice', age: 20 }));
