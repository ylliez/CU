"use strict";

let score = 0;

let startCircle = {
  x: undefined,
  y: undefined,
  size: 100,
}

let target = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: undefined,
  vy: undefined,
  tx: 0,
  ty: 1000,
}

let state = 'title';

function setup() {
  createCanvas(640, 640);

  startCircle.x = width/2;
  startCircle.y = height/2;

  target.x = startCircle.x;
  target.y = startCircle.y;
  // target.vx = random(-1,1);
  // target.vy = random(-1,1);
}

function draw() {
  if (state === 'title') {
    title();
  }
  else if (state === 'game') {
    game();
  }
}

function title() {
  background(255,255,0);

  let d = dist(mouseX,mouseY,startCircle.x,startCircle.y);
  if (d < startCircle.size/2) {
    state = 'game';
  }

  push();
  noStroke();
  fill(0);
  ellipse(startCircle.x,startCircle.y,startCircle.size);
  pop();
}

function game() {
  background(0);

  score++;

  moveTarget();
  displayTarget()
  displayScore();
}

function moveTarget() {

    // target.x += target.vx;
    // target.y += target.vy;
  
  // target.x = map(random(),0,1,0,width);
  // target.y = map(random(),0,1,0,height);

  // target.x = map(noise(0),0,1,0,width);
  // target.y = map(noise(0),0,1,0,height);

  target.x = map(noise(target.tx),0,1,0,width);
  target.y = map(noise(target.ty),0,1,0,height);

  target.tx += 0.03;
  target.ty += 0.03;
}

function displayScore() {
  push();
  fill(255);
  textAlign(LEFT,TOP);
  textSize(32);
  text(score, width/8, height/8);
  pop();
}

function displayTarget() {
  push();
  fill(255,0,0);
  noStroke();
  ellipse(target.x,target.y,target.size);
  pop();
}
