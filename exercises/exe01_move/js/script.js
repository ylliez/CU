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
  sizeX: 0,
  sizeY: 0,
  dsize: 1,
  //shade: 125
}

//array of flames (x,y,size,r,g,b)
let flame1;
let flame2;
let flame3;

let rain = {}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);
  flame1 = createFlame(255,0,0);
  flame2 = createFlame(255,127,0);
  flame3 = createFlame(255,255,0);


}

function createFlame(r, g, b) {
  let flame = { x: 0, y: 0, size: 0, r: r, g: g, b: b };
  return flame;
}

/*function createFrame(x, y) {
  let frame = { x: 0, y: 0, str: };
  return frame;
}*/

/**
Description of draw()
*/
function draw() {
  background(125);
  // draw pit
  translate(windowWidth/2,windowHeight/2);
  rectMode(CENTER);
  fill(0);
  rect(0,0,abyss.sizeX,abyss.sizeY);
  stroke(255);

  line(0,0,0,-abyss.sizeY/2);
  line(0,0,abyss.sizeY/8,-abyss.sizeY/2);
  line(0,0,abyss.sizeY/4,-abyss.sizeY/2);
  line(0,0,abyss.sizeY/4+abyss.sizeY/8,-abyss.sizeY/2)
  line(0,0,abyss.sizeX/2,-abyss.sizeY/2);
  line(0,0,abyss.sizeX/2,-abyss.sizeY/4);
  line(0,0,abyss.sizeX/2,-abyss.sizeY/4-abyss.sizeY/8);
  line(0,0,abyss.sizeX/2,-abyss.sizeY/8);
  line(0,0,abyss.sizeX/2,0);
  line(0,0,abyss.sizeX/2,abyss.sizeY/8);
  line(0,0,abyss.sizeX/2,abyss.sizeY/4+abyss.sizeY/8);
  line(0,0,abyss.sizeX/2,abyss.sizeY/4);
  line(0,0,abyss.sizeX/2,abyss.sizeY/2);
  line(0,0,abyss.sizeY/4+abyss.sizeY/8,abyss.sizeY/2);
  line(0,0,abyss.sizeY/4,abyss.sizeY/2);
  line(0,0,abyss.sizeY/8,abyss.sizeY/2);
  line(0,0,0,abyss.sizeY/2);

  line(0,0,-abyss.sizeY/8,-abyss.sizeY/2);
  line(0,0,-abyss.sizeY/4,-abyss.sizeY/2);
  line(0,0,-abyss.sizeY/4-abyss.sizeY/8,-abyss.sizeY/2)
  line(0,0,-abyss.sizeX/2,-abyss.sizeY/2);
  line(0,0,-abyss.sizeX/2,-abyss.sizeY/4);
  line(0,0,-abyss.sizeX/2,-abyss.sizeY/4-abyss.sizeY/8);
  line(0,0,-abyss.sizeX/2,-abyss.sizeY/8);
  line(0,0,-abyss.sizeX/2,0);
  line(0,0,-abyss.sizeX/2,abyss.sizeY/8);
  line(0,0,-abyss.sizeX/2,abyss.sizeY/4+abyss.sizeY/8);
  line(0,0,-abyss.sizeX/2,abyss.sizeY/4);
  line(0,0,-abyss.sizeX/2,abyss.sizeY/2);
  line(0,0,-abyss.sizeY/4-abyss.sizeY/8,abyss.sizeY/2);
  line(0,0,-abyss.sizeY/4,abyss.sizeY/2);
  line(0,0,-abyss.sizeY/8,abyss.sizeY/2);
  line(0,0,0,abyss.sizeY/2);











  abyss.sizeY += abyss.dsize;
  abyss.sizeY = constrain(abyss.sizeY,0,windowHeight);
  abyss.sizeX = constrain(abyss.sizeX += abyss.dsize,0,windowWidth);

  flame1.size = abyss.sizeX + random(abyss.sizeX);
  flame2.size = abyss.sizeX + random(abyss.sizeX);
  flame3.size = abyss.sizeX + random(abyss.sizeX);


  noFill();
  //strokeWeight(abyss.size/100);
  stroke(255,0,0);
  rect(0,0,flame1.size,flame1.size);
  stroke(255,127,0);
  rect(0,0,flame2.size,flame2.size);
  stroke(255,255,0);
  rect(0,0,flame3.size,flame3.size);
}
