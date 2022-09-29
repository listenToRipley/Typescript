import Dog from './Dog.js'; 
import { add, multiply, divide } from './utiles';

console.log("From index file");
const gruff = new Dog("Gruff", "Pure Breed Good Boy", 5);
console.log(`Gruff, "${gruff.bark()}"`); 

console.log(add(4,5));
console.log(multiply(4,5));
console.log(divide(4,5));