//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element1 = ["hydrogen", "H", 1.008]
let element2 = ["helium", "He", 4.003]
let element26 = ["iron", "Fe", 55.85]

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = []

table.push(element1, element2, element26)
console.log(table)
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(table[0]) // printing a multidimensional array with just one index returns the ARRAY at that index.
console.log(table[0][2]) // printing a multidim. array with two indices returns the elements at that location.

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(table[0][2])
console.log(table[1][0])
console.log(table[2][1])

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let threeDimArr1 = ["hydrogen", "H", 1.008, ["water", "ammonia", "peroxide"]]
let threeDimArr2 = ["helium", "He", 4.003, ["balloon", "blimp"]]
let threeDimArr3 = ["iron", "Fe", 55.85, ["rust", "minerals", "steel"]]

let threeDimTable = [threeDimArr1, threeDimArr2, threeDimArr3]
console.log(threeDimTable)

console.log(threeDimTable[2]) // this prints the first level, the element array
console.log(threeDimTable[1][3]) // this prints the second level, in this case the array of examples
console.log(threeDimTable[2][3][2]) // this prints the third level, in this case one of the examples in the example array