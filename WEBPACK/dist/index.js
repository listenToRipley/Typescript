import Dog from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, multiply, divide } from "./utils";
console.log("FROM INDEX FILE!!!!!!!!");
const gruff = new Dog("Gruff", "Pure Bred Good Boy", 5);
console.log(`${gruff.name}, says "${gruff.bark()}"`);
console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));
const dreamDog = new ShelterDog("Melon", "Terrier", 3, "Rochester Animal Shelter");
console.log(`${dreamDog.name}, says "${dreamDog.bark()}"`);
//# sourceMappingURL=index.js.map