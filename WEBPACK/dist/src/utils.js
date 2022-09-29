import _ from "lodash"; //this will cause an error in the browser!
export function add(x, y) {
    return _.add(x, y); // _ hows the add function
}
export function multiply(x, y) {
    return x * y;
}
export function divide(x, y) {
    return x / y;
}
