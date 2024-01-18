let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

let concatenatedArray = []

console.log(concatenatedArray.concat(holdCabinet1,holdCabinet2))

console.log(holdCabinet1)  //Original arrays stay the same, even after concatenating.
console.log(holdCabinet2)


//2) Print a slice of two elements from each array. Does slice alter the original arrays?

console.log(holdCabinet1.slice(1,3))  // cuts off everyting before index[1], and everything in index[3 and beyond]

console.log(holdCabinet2.slice(3,5))

console.log(holdCabinet1)
console.log(holdCabinet2)
//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?

console.log(holdCabinet1.reverse()) // Reverse alters the orignal array
console.log(holdCabinet1)

console.log(holdCabinet2.sort()) // Sort alters the original array
console.log(holdCabinet2)