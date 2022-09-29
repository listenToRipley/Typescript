import { add, sample as randomSample, pi } from "./utils.js";
// as  is a way to provide an alias.
import User, { userHelper } from "./User.js";
const sample = 12234233;
console.log(randomSample([12, 3, 34]));
console.log(add(1, 2));
console.log(pi);
console.log(User);
console.log(userHelper); //standard exports 
