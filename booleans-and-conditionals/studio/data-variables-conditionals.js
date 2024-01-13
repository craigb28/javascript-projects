// Initialize Variables below

let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg+fuelMassKg+shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius = -250
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = 100
let weatherStatus = "clear"
let preparedForLiftoff = true


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) { 
    console.log("Number of astronauts does not exceed 7.")
   } else {
        console.log("WARNING: Number of astronauts exceeds 7.")
        preparedForLiftoff=false
   }

// add logic below to verify all astronauts are ready
if (astronautStatus === "ready"){
    console.log ("Astronauts are ready.")
    } else {
        console.log("WARNING: Astronauts are NOT ready.")
        preparedForLiftoff=false
    }  

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit){
    console.log("Total mass of",totalMassKg,"does not exceed maximum of 850,000 pounds.")
    } else {
        console.log("WARNING: Total mass of",totalMassKg,"exceeds 850,000 pounds!")
        preparedForLiftoff=false
    }

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (minimumFuelTemp <= fuelTempCelsius && fuelTempCelsius <= maximumFuelTemp){
    console.log("Fuel temperature is within appropriate range.")
    } else {
        console.log("WARNING: Fuel temperature of",fuelTempCelsius,"is outside appropriate range!")
        preparedForLiftoff=false
    }

// add logic below to verify the fuel level is at 100%
if (fuelLevel === 100){
    console.log("Fuel level is at 100%.")
    } else {
        console.log("WARNING: Fuel level is",fuelLevel,"%")
        preparedForLiftoff=false
    }
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Weather status is clear.")
    } else {
        console.log("WARNING: Weather status is",weatherStatus,".")
        preparedForLiftoff=false
    }

// Verify shuttle launch can proceed based on above conditions

if (preparedForLiftoff)
                {
                    console.log("1. Date:",date)
                    console.log("2. Time:",time)
                    console.log("3. Astronauts:",astronautCount)
                    console.log("4. Crew Mass:",crewMassKg,"kg")
                    console.log("5. Fuel Mass:",fuelMassKg,"kg")
                    console.log("6. Shuttle Mass:",shuttleMassKg+"kg")
                    console.log("7. Total Mass:",totalMassKg+"kg")
                    console.log("8. Fuel Temperature:",fuelTempCelsius,"C")
                    console.log("9. Weather Status:",weatherStatus)
                    console.log("Have a safe trip astronauts!")
    } else {
    console.log("Shut down launch operations.")}