"use strict";

let array = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let currentNumber = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
}

function draw() {
  background(0);
  if (currentNumber === -1) {
    text("Click to cycle upwards from 0 to 9", width / 2, height / 2);
  }
  else {
    text(array[currentNumber], width / 2, height / 2);
  }
}

function mousePressed() {
  currentNumber++;
  if(currentNumber === array.length) {
    currentNumber = 0;
  }
}
