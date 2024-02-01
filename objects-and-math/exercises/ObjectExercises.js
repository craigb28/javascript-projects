let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {return Math.floor(Math.random()*11)}
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {return Math.floor(Math.random()*11)}
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

let crewArray = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade]

// console.log()

// Print out the relevant information about each animal.

function crewReports(animalObject){
   return `${animalObject.name} is a ${animalObject.species}.  They are ${animalObject.age} years old and ${animalObject.mass} kilograms.  Their ID is ${animalObject.astronautID}.`
};

for (let i=0; i<crewArray.length; i++){
   console.log(crewArray[i]);
};


// Start an animal race!

function fitnessTest(arr){
   let turnsToFinishRace = [];
   for (let i=0)
   return turnsToFinishRace;
}