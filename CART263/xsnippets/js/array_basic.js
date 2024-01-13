"use strict";

let array = [];
let arraySize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < arraySize; i++) {
    let number = floor(random(0, width));
    array.push(number);
  }
}

function draw() {
  background(0);
  displayArray(array);
}

// displaynumber(number)
// Displays the provided number on the canvas
function displayArray(array) {
  for (let i = 0; i < array.length; i++) {
    push();
    fill(255);
    noStroke();
    text(array[i], ((width / array.length * i) + (0.5 * width / array.length)) , height / 2);
    pop();
  }
}
