/**
Exercise 01 - I like to move it
illiez

A program w/ min 3 shapes that move, change size and color (experimentation).
Feel free to begin with the code you built in activity 3.
Use map() & constrain() as well as mouseX and mouseY

moving towards a pit, falling through raindrops
varying shading of pit dark center light border
spread out into rotating squares & other polygons
stop & start rotating (idem for raindrops)
then deep
*/

"use strict";

let abyss = {
  x: 0,
  y: 0,
  size: 0,
  dsize: 0.5,
  curve: 0,
  dcurve: 0.5,
  shade: 125
}

let flame = {
  x: 0,
  y: 0,
  size: 0,
  //ksize: 0,
  curve: 0,
  dcurve: 0.5,
  shade: 125
}

let rain = {}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);
  //translate(windowWidth/2,windowHeight/2);
}


/**
Description of draw()
*/
function draw() {
  background(125);
  // draw pit
  translate(windowWidth/2,windowHeight/2);
  rectMode(CENTER);
  fill(0);
  rect(0,0,abyss.size,abyss.size);
  //rect(0,0,abyss.size,abyss.size,abyss.curve);
  abyss.size += abyss.dsize;
  //abyss.curve += abyss.dcurve;
  flame.size = abyss.size + random(abyss.size) - 1;
  console.log(flame.size);
  noFill();
  stroke(255,0,0);
  strokeWeight(abyss.size/100);
  rect(0,0,flame.size,flame.size);
}
