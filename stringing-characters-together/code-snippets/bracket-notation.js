let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);

let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length-8]);

pet = 'cat'
console.log(pet + 's');  // this simply printed pet and included an s in this instance.
pet += 's'; // this added an "s" to the string that was stored as variable pet.
console.log(pet)

let catDog = "Rover   "

console.log(catDog.indexOf("v"))
console.log(catDog.trim())
console.log(catDog.replace("ov", "yd"))
console.log(catDog.slice(2, 4))
console.log(catDog.slice(4).toUpperCase())

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

