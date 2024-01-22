const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStr = str.slice(3)+str.slice(0,3)

console.log(newStr)

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${newStr} is Pig-Latin for ${str}`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numberResp = Number(input.question("Give me a number between 1 and 9. "))

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (numberResp >= 1 && numberResp <= (str.length-1)) {
    console.log(`Great! ${numberResp} is between 1 and 9! Your new word is ${str.slice(numberResp)+str.slice(0,numberResp)}`)
} else {
    console.log(`ERROR: ${numberResp} is not between 1 and 9! ${newStr} is your new word.`)
}