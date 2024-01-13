"use strict";

let array = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let selection = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
}

function draw() {
  background(0);
  if (!selection) {
    text("Click to pick a random number between 0 and 9", width / 2, height / 2);
  }
  else {
    text(selection, width / 2, height / 2);
  }
}

function mousePressed() {
  selection = random(array);
}
