"use strict";
const nums = [];
const color = [];
const inputEl = document.querySelector("#username");
console.log(inputEl);
console.dir(inputEl);
inputEl.value = "Update the text field";
const btn = document.querySelector(".btn");
function numberIdentity(item) {
    return item;
}
;
function stringIdentity(item) {
    return item;
}
;
function booleanIdentity(item) {
    return item;
}
;
;
function identity(item) {
    return item;
}
;
identity('Returns a string');
identity(7);
identity(true);
identity({ name: 'moew', breed: 'house-cat' });
