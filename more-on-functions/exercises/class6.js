// What is a callback function?


//How do I know it is a callback function (use the definition)?





// // Define a callback function.
// function handleResult(result) {
//     console.log(result);
// }



// // Call the function with a callback.

// performOperationAsync(handleResult);
// console.log("When does this run??");

let nums = [1,4,6,8,12]

// let timesTwo = function (n){
//     return n*2;
// };

// let doubled = numes.map(timesTwo)

// let doubled = nums.map(function (n){
//     return n*2
// })

// let doubled = nums.map((n) => {
//     return n*2;
// });

// console.log(nums)
// console.log(doubled)

// let input = require('readline-sync')

// let questions = ["What day is it? ", "First Name: ", "Is purplee a color? "]

// let answers = questions.map((question,index,array) => {
//     return input.question(`${index+1} ${question}`)
// })

// console.log(answers)

let arr = [1,2,3,4]
evenArr = arr.filter((value) => {
    return value%2 === 0;
});

console.log(evenArr)