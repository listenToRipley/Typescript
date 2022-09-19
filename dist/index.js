"use strict";
function printDouble(msg) {
    console.log(`${msg}\n ${msg}`);
}
;
printDouble('Hello World! :D! ');
console.log("hello".replaceAll("h", "`"));
const form = document.querySelector("form");
const input = document.getElementById("todo1");
const btn = document.getElementById("btn");
function handleSubmit(e) {
    e.preventDefault();
    const newToDoText = input.value;
    const newLI = document.createElement("LI");
    newLI.append(newToDoText);
    const list = document.getElementById("todolist");
    list === null || list === void 0 ? void 0 : list.append(newLI);
    console.log("SUBMITTED!");
}
;
form.addEventListener("submit", handleSubmit);
