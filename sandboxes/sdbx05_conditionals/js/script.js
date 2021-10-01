/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1,
  fill: 255
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(backgroundShade);
  backgroundShade += 0.5;
  if (backgroundShade == 255) {
    backgroundShade = 0;
  }

  circle.x += circle.speed;

  if (circle.x > width) {
    circle.speed = -circle.speed; // Change the speed from positive to negative!
  }
  if (circle.x < 0) {
    circle.speed = -circle.speed; // Change the speed from positive to negative!
  }

   fill(circle.fill);
  // if (mouseX < width/3) { fill(255,0,0); }
  // else if (mouseX > 2*width/3) { fill(0,0,255); }
  // else { fill(0,255,0); }

  // if (mouseX > width/3 && mouseX < 2*width/3) { fill(255,0,0); }
  // else { fill(0,0,0); }

  if (mouseX < width/3 || mouseX > 2*width/3) { fill(255,0,0); }
  else { fill(0,0,0); }

  ellipse(circle.x, circle.y, circle.size);
}
