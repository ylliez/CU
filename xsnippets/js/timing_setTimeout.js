// "use strict";
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0);
// }
//
// function draw() {
//   setTimeout(timesUp,2000);
// }
//
// function timesUp() {
//   push();
//   fill(255);
//   textAlign(LEFT,TOP);
//   textSize(32);
//   text(`Time's Up!`, width/8, height/8);
//   pop();
// }

// same w/ alert
"use strict";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  setTimeout(timesUp,2000);
}

function timesUp() {
  alert(`Time's Up!`);
}
