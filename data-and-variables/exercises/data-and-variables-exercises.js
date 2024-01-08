// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let nameOfTheSpaceShuttle = "Determination"
console.log(nameOfTheSpaceShuttle)
let shuttleSpeedInMph = 17500
console.log(shuttleSpeedInMph)
let distanceToMarsKm = 225000000
console.log(distanceToMarsKm)
let distanceToTheMoonKm = 384400
console.log(distanceToTheMoonKm)
const milesPerKm = 0.621
console.log(milesPerKm)

console.log(typeof nameOfTheSpaceShuttle)
console.log(typeof shuttleSpeedInMPH)
console.log(typeof distanceToMarsKm)
console.log(typeof distanceToTheMoonKm)
console.log(typeof milesPerKm)

let milesToMars = distanceToMarsKm * milesPerKm
let hoursToMars = milesToMars / shuttleSpeedInMph
let daysToMars = hoursToMars / 24

console.log(nameOfTheSpaceShuttle, "will take", daysToMars, "days to reach Mars")

let milesToTheMoon = distanceToTheMoonKm * milesPerKm
let hoursToTheMoon = milesToTheMoon / shuttleSpeedInMph
let daysToTheMoon = hoursToTheMoon / 24

console.log(nameOfTheSpaceShuttle + " will take "+daysToTheMoon+"days to reach the Moon.")