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
const toDos = [];
function handleSubmit(e) {
    e.preventDefault();
    const newToDo = {
        text: input.value,
        completed: false
    };
    toDos.push(newToDo);
    const newToDoText = input.value;
    const newLi = document.createElement("li");
    newLi.append(newToDoText);
    const list = document.getElementById("todolist");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLi);
    input.value = "";
    console.log("SUBMITTED!");
}
;
form.addEventListener("submit", handleSubmit);
