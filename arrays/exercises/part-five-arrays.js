let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

let strArray = str.split(", ") // Elements of array are parts of string separated by comma and space.
console.log(strArray)

strArray = str.split(",") // Elements of array are parts of string separated by comma
console.log(strArray)

strArray = str.split(" ") // Elements of array are parts of string separated by spaces
console.log(strArray)

strArray = str.split("") // Elements of array are all characters, including commas and whitespace
console.log(strArray)

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join(",")) 

console.log(arr.join(", ")) 

console.log(arr.join(" ")) 

console.log(arr.join("")) 

//3) Do split or join change the original string/array?
console.log(arr)  // Join does not alter the array.  Output is a string.
console.log(str) // Split does not alter the original string.  Output is an arry.

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

cargoHold= cargoHold.split(",") // Must alter variable, since split does not alter an original string.
console.log(cargoHold)

cargoHold.sort() // Do not have to reassign variable, since .sort() alters the array.
console.log(cargoHold)

cargoHold = cargoHold.join(", ") // Must directly reassign variable, since .join() does not alter the original array.
console.log(cargoHold)