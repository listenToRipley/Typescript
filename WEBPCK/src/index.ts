import Dog from './Dog.js'; 
import { add, multiply, divide } from './utiles';
import ShelterDog from './ShelterDog';

console.log("From index file");
const gruff = new Dog("Gruff", "Pure Breed Good Boy", 5);
console.log(`Gruff, "${gruff.bark()}"`); 

console.log(add(4,5));
console.log(multiply(4,5));
console.log(divide(4,5));

const dreamDog = new ShelterDog("Melon", "Terrier", 3, "Rochester Animal Shelter");
console.log(`${dreamDog.name}, says "${dreamDog.bark()}"`)