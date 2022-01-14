"use strict";

let score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  score++;
  displayScore();
}

function displayScore() {
  push();
  fill(255);
  textAlign(LEFT,TOP);
  textSize(32);
  text(score, width/8, height/8);
  pop();
}
