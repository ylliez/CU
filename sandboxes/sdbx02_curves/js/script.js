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
function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(255);
  noFill();
  for (let i = 2; i > 0; i -= 0.025) {
    bezier(0,0,width/3,height/i,2*width/3,height/i,width,0);
  }
}


/**
Description of draw()
*/
function draw() {

}
