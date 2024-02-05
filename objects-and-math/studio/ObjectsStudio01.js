// Code your selectRandomEntry function here:

function selectRandomEntry(arr){
  let randomEntry = arr[Math.floor(Math.random()*arr.length)];
  return randomEntry;
};

// Code your buildCrewArray function here:

let idNumbers = [291, 414, 503, 599, 796, 890];
let selectedNumbers=[];




// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];


function buildCrewArray(ids, candidates){
  newCrew = []
  for (i=o; i< ids.length; i++){
    for (j=0; j<candidates.length; j++){
      if (candidates[j].astronautID === id[i]){
        newCrew.push(candidates[j]);
      }
    }
    return newCrew
  }
  while (selectedNumbers.length<3){
    let selectedIndividual = (selectRandomEntry(arrayOfNums));
      if (selectedNumbers.includes(selectedIndividual) === false){
      selectedNumbers.push(selectedIndividual);
      }
  };
  // have an array of 3 random #s.  Match 3 #s with respective animals in candidate array.
  for (let i=0; i<arrayOfNums.length; i++){
    if(selectedNumbers.includes(animals[i].astronautID)){

  }

  // return selectedNumbers;
};
console.log(buildCrewArray());

// Code your template literal and console.log statements:
