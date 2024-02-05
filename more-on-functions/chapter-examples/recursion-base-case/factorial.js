// //The following concept check assumes that only positive integers are passed to the function.

// function factorial(integer){
//   if (typeof(integer) != "number" || integer<0 || (String(integer).includes("."))){
//     console.log("Error: Input is not a positive integeer.")
//   }
//   else if (integer === 1){
//     return integer;
//   } else {
//     return integer*(factorial(integer-1));
//   }
// }

// console.log(factorial(.25));

//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.


function countdown(n) {
  while (n>0) {
    console.log(n);
    n-=1;
  }
  console.log("Done!");
}

countdown(10)