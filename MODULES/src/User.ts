import type { Person } from "./types.js"; // is a safer way to import and will be more safely removed from a compiler
export default class User implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} logs out!!`);
  }
}

export function userHelper() {
  console.log("USER HELPER!");
}
