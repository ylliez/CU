/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
let maxY = 0;
let delta = -1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  for (let i = 2; i > 0; i += -0.025) {
    bezier(0,0,width/3,maxY/i,2*width/3,maxY/i,width,0);
  }

  maxY += delta;
  if (maxY > height * 2 || maxY < 0) {
    delta = -delta;
  }
}
