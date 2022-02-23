"use strict";

let fiveSyllableLines = [];
let sevenSyllableLines = [];
let fiveSyllableLinesObj, sevenSyllableLinesObj, fiveSyllableLinesKey, sevenSyllableLinesKey;
let lineP = [];
let sentiment, prediction;
let text = [];
let predictionMood = [];
let predictionColor;

function preload() {
  fiveSyllableLinesObj = loadJSON("assets/data/fiveSyllableLines.json");
  sevenSyllableLinesObj = loadJSON("assets/data/sevenSyllableLines.json");
}

function setup() {
  // create Sentiment method
  sentiment = ml5.sentiment('movieReviews', getHaikuMood);
  // get DOM elements of lines, add click function
  for (var i = 0; i < 3; i++) {
    lineP[i] = document.getElementById(`line-${i+1}`);
    lineP[i].addEventListener(`click`, () => { lineClicked(event); });
  }
  // parse JSON file objects into arrays
  fiveSyllableLinesKey = Object.keys(fiveSyllableLinesObj);
  for (let i = 0; i < fiveSyllableLinesKey.length; i++) { fiveSyllableLines[i] = fiveSyllableLinesObj[fiveSyllableLinesKey[i]]; }
  sevenSyllableLinesKey = Object.keys(sevenSyllableLinesObj);
  for (let i = 0; i < sevenSyllableLinesKey.length; i++) { sevenSyllableLines[i] = sevenSyllableLinesObj[sevenSyllableLinesKey[i]]; }
  // load first set of haiku lines
  for (var i = 0; i < 3; i++) { setNewLine(lineP[i]); }
}

function setNewLine(element) {
  if (element === lineP[1]) { element.innerHTML = random(sevenSyllableLines); }
  else { element.innerHTML = random(fiveSyllableLines); }
}

function getHaikuMood() {
  for (var i = 0; i < 3; i++) {
    text[i] = lineP[i].innerHTML;
    prediction = sentiment.predict(text[i]);
    predictionMood[i] = (floor(map(prediction.score, 0, 1, 0, 16)).toString(16));
  }
  predictionColor = `#${predictionMood[0]}${predictionMood[1]}${predictionMood[2]}`;
  console.log(predictionColor);

  // text = `${lineP[0].innerHTML} ${lineP[1].innerHTML} ${lineP[2].innerHTML}`
  // console.log(text);
  // prediction = sentiment.predict(text);
  // console.log(prediction);
  // let predictionMood = (floor(map(prediction.score, 0, 1, 0, 16)).toString(16));
  // console.log(predictionMood);
  // let predictionColor = `#f${predictionMood}f`;
  // console.log(predictionColor);
  document.body.style[`background-color`] = predictionColor;
}

function lineClicked(event) {
  fadeOut(event.target, 1);
}

function fadeOut(element, opacity) {
  opacity -= 0.01;
  element.style.opacity = opacity;
  if (opacity > 0) {
    requestAnimationFrame(() => { fadeOut(element, opacity); } );
  }
  else {
    setNewLine(element);
    getHaikuMood();
    fadeIn(element, 0);
  }
}

function fadeIn(element, opacity) {
  opacity += 0.01;
  element.style.opacity = opacity;
  if (opacity < 1) {
    requestAnimationFrame(() => { fadeIn(element, opacity); } );
  }
  else {  }
}

function draw() {

}
