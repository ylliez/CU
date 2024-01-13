"use strict";

// Our array of fortunes, each of which is a string
// Note that we still use square brackets around the array,
// but now we list the elements the array should start with
// separated by commas.
// As here, we can put each element on a separate line for clarity.
let fortunes = [
  `It's not looking great.`,
  `You will trip over an apple today.`,
  `Beware of over-friendly cats.`,
  `Bank error in your favor, collect $200.`,
  `Start your Korean skincare regime.`,
  `You will feel better than 20 years ago.`,
  `David Lynch will call you on your birthday.`,
  `Happiness is just around the corner.`,
  `You will make it look easy today.`,
  `Your future is cloudy.`
];

// We need a variable to store the chosen fortune so we can
// display it in draw()
let chosenFortune = `I am looking into your soul...`;

// setup() gets basic styling ready
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
}

// draw() displays the current fortune
function draw() {
  background(0);
  text(chosenFortune, width / 2, height / 2);
}

// mousePressed() chooses a random fortune from the fortunes array
function mousePressed() {
  // By passing the fortunes array as an argument to random() we get back
  // a RANDOM ELEMENT in the array (one of the fortune strings) which we
  // can then store in the chosenFortune variable for displaying
  chosenFortune = random(fortunes);
}
