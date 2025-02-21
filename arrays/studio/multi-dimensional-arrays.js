let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodCabinet = food.split(",").sort()
let equipmentCabinet = equipment.split(",").sort()
let petsCabinet = pets.split(",").sort()
let sleepAidsCabinet = sleepAids.split(",").sort()

console.log(foodCabinet)
console.log(equipmentCabinet)
console.log(petsCabinet)
console.log(sleepAidsCabinet)


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet]

console.log(cargoHold)
console.log(typeof (cargoHold))
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');

let cabinetSelection = Number(input.question("Which cabinet would you like to explore? "));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

let itemSelection = input.question("What are item are you looking for? ")

if (cabinetSelection >0 && cabinetSelection <=3) {
    console.log(`Cabinet ${cabinetSelection} contains: ${cargoHold[cabinetSelection-1]}.`)
} else {
    console.log(`Error: There isn't a cabinet with that number.`)
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

// let itemSelection = input.question("What are item are you looking for? ")

//  if (cabinetSelection >0 && cabinetSelection <=3 && (cargoHold[cabinetSelection][0,3].includes(itemSelection)))
//     {
//     console.log (`Cabinet ${cabinetSelection} does contain ${itemSelection}.`)
//     }
// else {
//     console.log (`Cabinet ${cabinetSelection} does NOT contain ${itemSelection}.`)
//  }}
//  else {
//     console.log(`Error: There isn't a cabinet with that number.`)
//  }