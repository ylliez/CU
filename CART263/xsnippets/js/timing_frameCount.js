// "use strict";
//
// let timer = 0;
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }
//
// function draw() {
//   background(0);
//   displayTimer();
//   timer++;
// }
//
// function displayTimer() {
//   push();
//   fill(255);
//   textAlign(LEFT,TOP);
//   textSize(32);
//   text(timer, width/8, height/8);
//   pop();
// }

"use strict";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  displayTimer();
}

function displayTimer() {
  push();
  fill(255);
  textAlign(LEFT,TOP);
  textSize(32);
  text(frameCount, width/8, height/8);
  pop();
}
