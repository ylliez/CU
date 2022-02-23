"use strict";

let fiveSyllableLines = [];
let sevenSyllableLines = [];
let fiveSyllableLinesObj, sevenSyllableLinesObj, fiveSyllableLinesKey, sevenSyllableLinesKey;
let line1, line2, line3;
let line = [];
let lineP = [];

for (var i = 0; i < 3; i++) {
  lineP[i] = document.getElementById(`line-${i+1}`);
  lineP[i].addEventListener(`click`, () => { lineClicked(event); });
}

// let line1P = document.getElementById('line-1');
// let line2P = document.getElementById('line-2');
// let line3P = document.getElementById('line-3');
//
// line1P.
// line2P.addEventListener(`click`, () => { lineClicked(event); });
// line3P.addEventListener(`click`, () => { lineClicked(event); });



let text = "not bad";
let prediction;
// Create a new Sentiment method
let sentiment = ml5.sentiment('movieReviews', modelReady);

// When the model is loaded
function modelReady() {
  // model is ready
  console.log('Model Loaded!');
  prediction = sentiment.predict(text);
 console.log(prediction);
}

function preload() {
  fiveSyllableLinesObj = loadJSON("assets/data/fiveSyllableLines.json");
  sevenSyllableLinesObj = loadJSON("assets/data/sevenSyllableLines.json");
}

function setup() {
  fiveSyllableLinesKey = Object.keys(fiveSyllableLinesObj);
  for (let i = 0; i < fiveSyllableLinesKey.length; i++) { fiveSyllableLines[i] = fiveSyllableLinesObj[fiveSyllableLinesKey[i]]; }
  sevenSyllableLinesKey = Object.keys(sevenSyllableLinesObj);
  for (let i = 0; i < sevenSyllableLinesKey.length; i++) { sevenSyllableLines[i] = sevenSyllableLinesObj[sevenSyllableLinesKey[i]]; }

  for (var i = 0; i < 3; i++) {
    if (i === 1) { line[i] = random(sevenSyllableLines); }
    else { line[i] = random(fiveSyllableLines); }
    lineP[i].innerHTML = line[i];
  }
}

function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

function setNewLine(element) {
  if (element === lineP[1]) { element.innerHTML = random(sevenSyllableLines); }
  else { element.innerHTML = random(fiveSyllableLines); }
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
