"use strict";

let h = undefined;
let m = undefined;
let s = undefined;
let time = undefined;
let angleH = undefined;
let angleM = undefined;
let angleS = undefined;

//
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//
function draw() {

  background(0);

  var now = new Date();
  if (now.getHours() >= 12) { h = now.getHours() - 12; }
  else { h = now.getHours(); }
  m = now.getMinutes();
  s = now.getSeconds();

  time = h + ":" + m + ":" + s;
  print(time);

  angleH = map(h,0,12,0,2*PI)-PI/2;
  angleM = map(m,0,60,0,2*PI)-PI/2;
  angleS = map(s,0,60,0,2*PI)-PI/2;

  translate(width/2, height/2);
  rectMode(CENTER);

  push();
  rotate(angleS);
  translate(200, 0);
  rect(0, 0, 100, 5);
  pop();

  push();
  rotate(angleM);
  translate(100, 0);
  rect(0, 0, 50, 5);
  pop();

  push();
  rotate(angleH);
  translate(50, 0);
  rect(0, 0, 25, 5);
  pop();

}
