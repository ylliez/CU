/**
Generative Art Sandbox
illie

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


let rectangle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  shade: 255,
  sizeAngle: 0,
  angle: 0
}


/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
  background(0);
  //rectangle.vx = random(5);
  //rectangle.vy = random(5);
  //rectangle.growth = random(5);
  rectangle.vx = 5;
  rectangle.vy = 5;
}


/**
Description of draw()
*/
function draw() {
  //rectangle.x += rectangle.vx;
  //rectangle.y += rectangle.vy;
  rectangle.sizeAngle += 0.05;
  rectangle.size = map(sin(rectangle.sizeAngle),-1,1,10,500);
  rectangle.size += random(-2,2);
  rectangle.shade = map(sin(rectangle.sizeAngle),-1,1,10,200);
  rectangle.angle += 0.2;

  rectMode(CENTER);
  noFill();

  stroke(rectangle.shade);

  translate(rectangle.x, rectangle.y);
  rotate(rectangle.angle);
  rect(0,0,rectangle.size,rectangle.size);
}
