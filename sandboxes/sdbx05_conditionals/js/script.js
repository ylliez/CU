/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let displayCircle = false;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  // if (mouseIsPressed) { background(255); }
  // else { background(0); }

  // if (keyIsPressed) { background(255);}
  // else { background(0); }

  if (mouseIsPressed) {
    background(255);
    displayCircle = true;
  }
  else {
    background(0);
  }

  if (displayCircle) {
    ellipse(width/2,height/2,100,100); 
  }
}
