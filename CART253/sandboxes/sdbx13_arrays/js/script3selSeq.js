"use strict";

// Our array of lines from one of Hamlet's soliloquys (a sequence
// where he essentially talks to himself). We will want to display
// each line one after the other as the user clicks.
let soliloquy = [
  `To be, or not to be`,
  `That is the question.`,
  `Whether 'tis nobler in the mind`,
  `To suffer the slings and arrows`,
  `Of outrageous fortune`,
  `Or to take arms`,
  `Against a sea of sorrows`,
  `And by opposing end them.`
];

// We need a variable to store the current line we want to display
// It should start at ZERO because that's the first index in the array
let currentLine = 0;

// setup() gets basic styling ready
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
}

// draw() displays the current line
function draw() {
  background(0);
  // Get the element in the array at the CURRENT index (starts at 0 and goes up)
  let dialog = soliloquy[currentLine];
  // Display the string in that element on the canvas
  text(dialog, width / 2, height / 2);
}

// mousePressed() moves to the next line in the soliloquy unless we've reached the end
function mousePressed() {
  // Go to the next line in the soliloquy
  currentLine = currentLine + 1;
  // Check if we've reached the LENGTH of the array
  // If we have, we've gone past the end because we started counting at 0
  // The LENGTH of our array is 8, but the final element is at index 7
  if (currentLine === soliloquy.length) {
    // If we've gone past the end, go back one to the last real element
    currentLine = soliloquy.length - 1;
  }
}
