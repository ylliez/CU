"use strict";

let balloons = [];
let numBalloons = 5;

function setup() {
  createCanvas(500,500);
  reset();
}

function draw() {
  background(0);
  displayBalloons();
}

function displayBalloons() {
  for (let i = 0; i < balloons.length; i++) { //rather than numBalloons
    // rename current array iteration
    let balloon = balloons[i];
    colourBalloon(balloon)
    displayBalloon(balloon)
  }
}

function displayBalloon(balloon) {
  if(!balloon.popped) { // equiv to if(popped = false), so reversed if popped, don't run code, here display
    push();
    noStroke();
    fill(balloon.fill);
    ellipse(balloon.x,balloon.y,balloon.size);
    pop();
  }
}

function colourBalloon(balloon) {
  if (mouseInsideBalloon(balloon)) { balloon.fill = balloon.highlightedFill; }
  else { balloon.fill = balloon.normalFill; }
}

// instead of checking if within radius twice (hover and press), have a checking function to call
function mouseInsideBalloon(balloon) {
  let d = dist(mouseX, mouseY, balloon.x, balloon.y);
  if (d < balloon.size / 2) { return true; }
  else { return false; }
}

function mousePressed() {
  for (let i = 0; i < balloons.length; i++) {
    let balloon = balloons[i];
    if (mouseInsideBalloon(balloon) && mousePressed) { balloon.popped = true; }
  }
}

function keyPressed() { reset(); }

function reset() {
  balloons = [];
  for (let i = 0; i < numBalloons; i++) {
    let balloon = createBalloon(255,0,0);
    balloons.push(balloon); //push equivalent to add
  }
  for (let i = 0; i < numBalloons; i++) {
    let balloon = createBalloon(255,242,50);
    balloons.push(balloon); //push equivalent to add
  }
}

function createBalloon(r,g,b) {
  let balloon = {
    x: random(0,width),
    y: random(0,height),
    size: 75,
    fill: color(r-100, g, b),
    highlightedFill: color(r,g,b),
    normalFill: color(r-100, g, b),
    popped: false
  };
  return balloon;
}
