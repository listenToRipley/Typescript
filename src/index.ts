// console.log('Hello World!'); 

const btn = document.getElementById("btn");
console.log("SHOW BUTTON >>", btn); 

function printDouble(msg:string) {
  console.log(`${msg}\n ${msg}`);
};

printDouble('Hello World! :D! ');

"hello".replaceAll("h", "`")