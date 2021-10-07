"use strict";

let score = 0;

let target = {
  x: undefined,
  y: undefined,
  size: 50,
  vx: undefined,
  vy: undefined,
}

function setup() {
  createCanvas(640, 640);

  target.x = random(0,width);
  target.y = random(0,height);
  target.vx = random(-1,1);
  target.vy = random(-1,1);
}

function draw() {
  background(0);

  score++;

  // Velocity-based movement
  target.x += target.vx;
  target.y += target.vy;

  // Mouse-based movement
  // target.x = mouseX;
  // target.y = mouseY;

  displayTarget();

  displayScore();
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
