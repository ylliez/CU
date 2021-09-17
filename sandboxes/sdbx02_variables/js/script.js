/**
Learning - Variables
illiez
*/

"use strict";

function preload() {
}


/**
Description of setup
*/
function setup() {
//  createCanvas(500,500);
//  createCanvas(640,640);
  createCanvas(windowWidth,windowHeight);
}


/**
Description of draw()
*/
function draw() {
  // bckgd
  background(255,0,0);
//  background(mouseX,mouseY,0);
  //draw a square in the centre of canvas
  rectMode(CENTER);
//  rect(250,250,100,100);
//  rect(mouseX,mouseY,100,100);
//  rect(250,250,mouseX,mouseY)
  rect(width/2,height/2,100,100);
}
