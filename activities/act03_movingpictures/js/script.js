/**
Moving Pictures
illiez

Two circles, the left one bigger and more transparent than the right,
come in from either side of the screen, growing as they do. They stop
in the center while still growing. The background goes from black to red.
*/

"use strict";

let bd = {
  r: 0,
  b: 0,
  g: 0
}

let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  fill: 63,
  alpha: 200,
  speed: 1,
  growth: 1
}

let circle2 = {
  x:500,
  y: 250,
  size: 90,
  fill: 127,
  alpha: 100,
  speed: -1,
  proportion: 0.9
}

function setup() {
  createCanvas(500,500);
  noStroke();
}

function draw() {
  // background
  bd.r = map(circle1.size,100,width,0,255);
  background(bd.r,bd.b,bd.g);
  // circle 1
  fill(circle1.fill,circle1.fill,circle1.fill,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);
  circle1.x += circle1.speed;
  circle1.x = constrain(circle1.x,0,width/2);
  circle1.size += circle1.growth;
  circle1.size = constrain(circle1.size,0,width);
  // circle 2
  fill(circle2.fill,circle2.fill,circle2.fill,circle2.alpha);
  ellipse(circle2.x,circle2.y,circle2.size);
  circle2.x += circle2.speed;
  circle2.x = constrain(circle2.x,width/2,width);
  circle2.size = circle1.size * circle2.proportion;
}
