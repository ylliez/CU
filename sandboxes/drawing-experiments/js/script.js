/*
Face Drawing Machine
illiez

Draws a simple face on the canvas
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/*
setup()
sets colour and draws a face made out of circles and a line
*/
function setup() {
  //create canvas
  createCanvas(500,500);

  //set background to millenial pink
  background(255,200,200);

  //draw face
  ellipseMode(CENTER);
  ellipse(250,250,200,200);

  //draw eyes
  fill(0);
  //left eye
  ellipse(200,225,20,20);
  //right eye
  ellipse(300,225,20,20);

  //draw mouth
  strokeWeight(10);
  line(200,275,300,275);
}


/*
draw()

*/
function draw() {

}
