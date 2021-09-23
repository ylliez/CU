/**
Generative Art Sandbox
illie

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


let rectangle = {
  x: 0,
  y: 0,
  size: 5,
  vx: 0,
  vy: 0,
  shade: 255,
  sizeAngle: 0
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
  rectangle.x += rectangle.vx;
  rectangle.y += rectangle.vy;
  rectangle.sizeAngle += 0.1;
  rectangle.size = map(sin(rectangle.sizeAngle),-1,1,10,200);
  rectangle.size += random(-2,2);
  rectangle.shade = map(sin(rectangle.sizeAngle),-1,1,10,200);

  rectMode(CENTER);
  noFill();

  /*let r = map(mouseX,0,width,0,255);
  let g = map(mouseY,0,height,0,255);
  stroke(r,g,255);*/
  stroke(rectangle.shade);
  rect(rectangle.x,rectangle.y,rectangle.size,rectangle.size);


}
