"use strict";
function printDouble(msg) {
    console.log(`${msg}\n ${msg}`);
}
;
printDouble('Hello World! :D! ');
console.log("hello".replaceAll("h", "`"));
const input = document.getElementById("todo1");
const btn = document.getElementById("btn");
console.log("SHOW BUTTON >>", btn);
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    alert(input.value);
    input.value = " ";
});
