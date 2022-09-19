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
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("SUBMITTED!");
});
