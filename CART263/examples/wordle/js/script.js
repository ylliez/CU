"use strict";

// 10638 guessable words + 2309 solution words = 12947 total words * 5 letter/word = 64735 total letters
//

let wordsObj = undefined;
let wordsKey = undefined;
let words = [];
let solutionsObj = undefined;
let solutionsKey = undefined;
let solutions = [];
const WORD_LENGTH = 5;
let SINGLE_LETTERS;
let TOTAL_LETTERS;
let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let letterPercentagesPerPosition = [[],[],[],[],[]];
let letterPercentageTotal = [];
let letterProbability = [];
let letterWidth;

function preload() {
  wordsObj = loadJSON("assets/data/words.json");
  // solutionsObj = loadJSON("assets/data/solutions.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  letterWidth = windowWidth / 26;

  wordsKey = Object.keys(wordsObj);
  for (let i = 0; i < wordsKey.length; i++) {
    words[i] = wordsObj[wordsKey[i]];
  }
  words = words.sort();
  SINGLE_LETTERS = words.length ;
  TOTAL_LETTERS = words.length * 5;

  // solutionsKey = Object.keys(solutionsObj);
  // for (let i = 0; i < solutionsKey.length; i++) {
  //   solutions[i] = solutionsObj[solutionsKey[i]];
  // }

  // getLetterProbs();
  // getLetterPercent('a');
  // getLetterPercent('s');
  dodo();
}

function getLetterProbs() {
  let totalProb;
  for (let i = 0; i < letters.length; i++) {
    letterProbability[i] = getLetterPercent(letters[i]);
    totalProb += letterProbability[i];
    push();
    fill(255 - (255 * letterProbability[i]) / 10);
    rect(i * letterWidth, 0, letterWidth, letterProbability[i] * 50);
    pop();
    push();
    textAlign(CENTER, CENTER);
    textSize(20);
    textStyle(BOLD);
    stroke(0);
    fill(0);
    text(letters[i], i * letterWidth + letterWidth / 2, letterProbability[i] * 50 + 10 );
    pop();
    // console.log(letterProb[i]);
  }
  // console.log(totalProb);
}

function getLetterPercent(letter) {

  let letterNumbersPerPosition = [];
  let letterPer;
  for (let i = 0; i < WORD_LENGTH; i++) {
    let letterNumberPerPosition = 0;
    for (let j = 0; j < words.length; j++) {
      if (words[j][i] === letter) {
        letterNumberPerPosition++;
      }
    }
    letterNumbersPerPosition[i] = letterNumberPerPosition;

    letterPercentagesPerPosition[i] = letterNumbersPerPosition[i] / SINGLE_LETTERS * 100;

    console.log(`${i}: ${letter}: ${letterPercentagesPerPosition[i]}`);


  }
  console.log(letterNumbersPerPosition.reduce((a, b) => a + b, 0));
  console.log(letterPercentagesPerPosition.reduce((a, b) => a + b, 0));
  // letterPer = (letterNum / letterTot) * 100;
  // return letterPer;
}

function dodo() {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      for (var k = 0; k < letters.length; k++) {
        let sol = `sant${letters[j]}`;
        // let sol = `sant${letters[j]}${letters[k]}`;
        // console.log(sol);
        // let non = [`t`,`r`,`c`,`o`,`l`,`i`,`n`,`d`,`u`,`m`,`p`,`y`];
        // let notest = true;
        //
        if (sol === words[i]) {
        // if (sol === words[i] && () => {
        //   for (let l = 0; l < non.length; l++) {
        //     if(non[l] === letters[i]) { return false };
        //     if(non[l] === letters[j]) { return false };
        //     if(non[l] === letters[k]) { return false };
        //   }
        // }) {
          console.log(sol);
        }
      }
      // if sol =
      // console.log(`${letters[i]}o${letters[j]}in`);
    }
  }
  // console.log(`${i}: ${letter}: ${letterPercentagesPerPosition[i]}`);
}


function draw() {}
