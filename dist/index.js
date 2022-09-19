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
    console.log("SUBMITTED!");
}
;
form.addEventListener("submit", handleSubmit);
