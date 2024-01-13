/**
Mona Lisa
illiez

Pseudo-Lisa generator
*/

"use strict";

/**
Description of preload
*/
function preload() {}

/**
Description of setup
*/
function setup() {
  //draw background
  createCanvas(400, 600);
  background(144,209,152);
  noStroke();
  //draw hair
  fill(50,10,10);
  ellipse(210,180,180,240);
  //draw face
  fill(219,195,114);
  ellipse(200,150,110,160);
  //draw smile
  noFill();
  stroke(127,0,0);
  strokeWeight(2);
  arc(180,50,300,300,(PI/2)-.25,(PI/2)-.05);
  //draw eyes
  fill(255);
  noStroke();
  ellipse(167,150.75,18,11);
  ellipse(207,150.75,18,11);
  fill(0);
  noStroke();
  ellipse(170,150,10,10);
  ellipse(210,150,10,10);
}

/**
Description of draw()
*/
function draw() {}
