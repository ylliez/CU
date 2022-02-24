"use strict";

let fiveSyllableLines = [];
let sevenSyllableLines = [];
let fiveSyllableLinesObj, sevenSyllableLinesObj;
let lineP = [];
let sentiment, prediction;
let text = [];
let predictionMood = [];
let predictionColor;
let buttons = [];
let doOnce = true;

function preload() {
  fiveSyllableLinesObj = loadJSON("assets/data/fiveSyllableLines.json");
  sevenSyllableLinesObj = loadJSON("assets/data/sevenSyllableLines.json");
}

function setup() {
  // create Sentiment method
  sentiment = ml5.sentiment('movieReviews', modelLoaded);
  // get DOM elements of lines, add click function
  for (var i = 0; i < 3; i++) {
    lineP[i] = document.getElementById(`line-${i+1}`);
    lineP[i].addEventListener(`mouseenter`, () => { lineEntered(event); });
    lineP[i].addEventListener(`mouseleave`, () => { lineExited(event); });
    lineP[i].addEventListener(`click`, () => { lineClicked(event); });
  }
  // parse JSON file objects into arrays
  let fiveSyllableLinesKey = Object.keys(fiveSyllableLinesObj);
  for (let i = 0; i < fiveSyllableLinesKey.length; i++) { fiveSyllableLines[i] = fiveSyllableLinesObj[fiveSyllableLinesKey[i]]; }
  let sevenSyllableLinesKey = Object.keys(sevenSyllableLinesObj);
  for (let i = 0; i < sevenSyllableLinesKey.length; i++) { sevenSyllableLines[i] = sevenSyllableLinesObj[sevenSyllableLinesKey[i]]; }

}

function modelLoaded() {
  // load first set of haiku lines
  generateNewHaiku();
  buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = `block`;
  }
}

function buttNewClicked() {
  if (doOnce) {
    alert(`Esteemed Poet,
You may also change the haiku line by line
Click where your heart deems good...`);
    doOnce = false
  }
  generateNewHaiku();
}

function generateNewHaiku() {
  for (var i = 0; i < 3; i++) { setNewLine(lineP[i]); }
  getHaikuMood();
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
  colorBackground();
}

function colorBackground() {
  let predictionColor = `#${predictionMood[0]}${predictionMood[1]}${predictionMood[2]}`;
  // DEBUG - print color hex code
  // console.log(predictionColor);
  document.body.style[`background-color`] = predictionColor;
}

function lineEntered(event) { event.target.style.fontSize = `35px`; }

function lineExited(event) { event.target.style.fontSize = `30px`; }

function lineClicked(event) { fadeOut(event.target, 1); }

function fadeOut(element, opacity) {
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
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
