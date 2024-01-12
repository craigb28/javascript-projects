const input = require('readline-sync');

let firstName = input.question("Enter your first name: ");

let lastName = input.question("Enter your last name: ");

console.log("Hello, " + firstName  + " " + lastName + "!");

console.log("First name: " + firstName)
console.log("Last name: " + lastName)
console.log("Last, First: " + lastName + ", " + firstName)


let num1 = Number(input.question("Enter a number: "));
let num2 = Number(input.question("Enter another number: "));

console.log(num1 + num2);