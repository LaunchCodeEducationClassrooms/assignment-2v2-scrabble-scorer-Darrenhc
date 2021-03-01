// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(word) {
   userInput = input.question(`Let's play some scrabble!\n\nEnter a word to score:`);

return userInput
};

let simpleScore = function(word) {
  word = word.toUpperCase();
  let simple = 0;
  for(i = 0; i < word.length; i++) {
    simple++;
  }
  return simple;
}

let vowelBonusScore = function(word) {
  let vowelBonus = 0;
  for (i = 0; i < word.length; i++) {
    if (word.includes('a','e','i','o','u')) {
      vowelBonus += 3;
    } else if (!word.includes('a','e','i','o','u')) {
      vowelBonus += 1;
    } else {
      vowelBonus += 0;
    }
    }
    return vowelBonus;
  }

let scrabbleScore;



const scoringAlgorithms = [
{ name: "Simple Score",
  description: "Each Letter is worth 1 point",
  scoringFunction: simpleScore
}, 
{
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt",
  scoringFunction: vowelBonusScore
},
{
  name: "scrabble", 
  description: "The traditional scoring algorithm",
  scoringFunction: scrabbleScore
}
];

function scorerPrompt(word) {
  let num = input.question(`which scoring algorithm would you like to use?\n
0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}  
2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}
Enter 0, 1, or 2: `)

if (num === '0') {
  console.log(`score for ${word} ${scoringAlgorithms[0].scoringFunction(word)} `);
} else if (num === '1') {
  console.log(`score for ${word} ${scoringAlgorithms[1].scoringFunction(word)} `);
} else if (num === '2') {
  console.log(`score for ${word} ${scoringAlgorithms[2].scoringFunction(word)} `);
} else if (num !== '0' || '1' || '2') {
  console.log(scorerPrompt(word));
}
 
}

function transform(oldPointStructure) {
  let newPointStructure = {};
  
  for (let i = 0; i < oldPointStructure.length; i++) {
    newPointStructure[`${oldPointStructure['1'][i].toLowerCase()}`] = 1;
  }
  for (let i = 0; i < oldPointStructure.length; i++) {
    newPointStructure[`${oldPointStructure['2'][i].toLowerCase()}`] = 2;
  }
  for (let i = 0; i < oldPointStructure.length; i++) {
    newPointStructure[`${oldPointStructure['3'][i].toLowerCase()}`] = 3;
  }
  for (let i = 0; i < oldPointStructure.length; i++) {
    newPointStructure[`${oldPointStructure['4'][i].toLowerCase()}`] = 4;
  }
  for (let i = 0; i < oldPointStructure.length; i++) {
    newPointStructure[`${oldPointStructure['5'][i].toLowerCase()}`] = 5;
  }
  for (let i = 0; i < oldPointStructure.length; i++) {
    newPointStructure[`${oldpointStructure['8'][i].toLowerCase()}`] = 8;
  }
  for (let i  = 0; i < oldPointStructure.length; i++) {
    newPointStructure[`${oldPointStructure['10'][i].toLowerCase()}`] = 10;
  }
}


let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   console.log(scorerPrompt(word));

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

