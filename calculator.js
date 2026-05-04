"use strict";
function calculate(a, b, operator) {
    if (operator === "+")
        return a + b;
    if (operator === "-")
        return a - b;
    if (operator === "*")
        return a * b;
    if (operator === "/")
        return a / b;
    throw new Error("Invalid operator");
}
console.log(calculate(5, 3, "+"));
