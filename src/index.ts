// console.log('Hello World!'); 

function printDouble(msg:string) {
  console.log(`${msg}\n ${msg}`);
};

printDouble('Hello World! :D! ');

console.log("hello".replaceAll("h", "`")); //without the lib option, we will not be able to do this. See tsconfig or readme for details. 

// //Type Assertions v telling TS, "i know more than you."
// let mystery: unknown = "Solving the mystery"; 

// const numChars = (mystery as string).length; 
const form = document.querySelector("form")!; 
const input = document.getElementById("todo1")! as HTMLInputElement; // should be able to use value now in the add event listener
//alternative syntax
// const input = document.getElementById("todo1")!; 
// (<HTMLInputElement>input).value // this will not work with JSX


const btn = document.getElementById("btn")! as HTMLButtonElement;
// console.log("SHOW BUTTON >>", btn); 

// // ?. allows for this to be added, since the ? acts as a if statement/ truthy checker. 
// btn?.addEventListener("click", () => {
//   alert(input.value); 
//   input.value = " "

  // alert("CLICK!");
// }); 

form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  console.log("SUBMITTED!")
})