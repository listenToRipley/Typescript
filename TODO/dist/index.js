"use strict";
function printDouble(msg) {
    console.log(`${msg}\n ${msg}`);
}
;
printDouble('Hello World! :D! ');
console.log("hello".replaceAll("h", "`"));
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const input = document.getElementById("todo1");
const btn = document.getElementById("btn");
const toDos = readToDos();
toDos.forEach(createToDoElement);
function readToDos() {
    const toDosJson = localStorage.getItem("todos");
    if (toDosJson === null)
        return [];
    return JSON.parse(toDosJson);
}
;
function savedToDos() {
    localStorage.setItem("todo", JSON.stringify(toDos));
}
;
function createToDoElement(todo) {
    const { text, completed } = todo;
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        console.log("CHECKBOX IS CHECKED == ", todo.completed);
        savedToDos();
    });
    newLi.append(text);
    newLi.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLi);
}
;
function handleSubmit(e) {
    e.preventDefault();
    const newToDo = {
        text: input.value,
        completed: false
    };
    toDos.push(newToDo);
    createToDoElement(newToDo);
    savedToDos();
    console.log("Local Storage == ", localStorage);
    input.value = "";
    console.log("SUBMITTED!");
}
;
form.addEventListener("submit", handleSubmit);
