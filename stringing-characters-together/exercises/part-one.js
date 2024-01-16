let num = 1001;
let numTwo= 123.45

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num).length)

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
console.log(String(numTwo).replace(".", "").length)

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if (String(numTwo).indexOf(".") >= 0) {
    console.log(String(numTwo).replace(".", "").length)
}   else {
        console.log(String(num).length)
}

console.log("Launch\nCode")

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

const school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
 ];
school[0].push("dance")
console.log(school[0])

school[1].unshift("Holmes")
console.log(school[1])