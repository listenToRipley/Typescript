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
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length - 1);
    return list[randIdx];
}
;
const getString = getRandomElement(["a", "b", "c"]);
console.log(getString);
const getNumber = getRandomElement([1, 42, 34, 34, 26, 234, 242, 523]);
console.log(getNumber);
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
;
const house = merge({ house: "Kendrick" }, { pets: ["Gruff", "Smidge"] });
console.log(house);
