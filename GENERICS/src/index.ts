//const nums: number[] = [] < old way of doing this
//Generics  
const nums: Array<number> = []; 
const color: Array<string> = []; 

//look at the < THIS IS THE GENERIC >, the ! allows for validation 
const inputEl = document.querySelector<HTMLInputElement>("#username")!; 
console.log(inputEl);
console.dir(inputEl); 
inputEl.value = "Update the text field"; 