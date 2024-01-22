//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuelLevel = 0;
let numberAstronautsAboard = 0;
let altitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require("readline-sync");

startingFuelLevel = input.question("What is the starting fuel level? ")

while (startingFuelLevel<=0 || startingFuelLevel <=5000 || startingFuelLevel >= 30000 || isNaN(startingFuelLevel)){ //These criteria are to equal FALSE, because they are what would STOP the while loop.
  startingFuelLevel = Number(input.question("Error: What is the starting fuel level? "));
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

numberAstronautsAboard = Number(input.question("How many astronauts are aboard? ")); 

while (numberAstronautsAboard<1 || numberAstronautsAboard>7){
  numberAstronautsAboard = Number(input.question("Error: Maximum of 7. How many astronauts are aboard? "));
}  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

// while (startingFuelLevel>=100){
//   altitude =altitude+50;
//   startingFuelLevel = startingFuelLevel-100*numberAstronautsAboard;
//   console.log(`Fuel status: ${startingFuelLevel} units. \nAltitude ${altitude} kilometers. \n`); 
// }

while (startingFuelLevel - 100*numberAstronautsAboard >= 0)
{
  startingFuelLevel = startingFuelLevel-(100*numberAstronautsAboard);
  altitude += 50;
}

//Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

console.log(`The shuttle has gained an altitude of ${altitude} kilometers.`)

//If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

if (altitude>=2000){
  console.log("Orbit achieved!")
} 
  else {
    console.log("Failed to reach orbit.")
  }