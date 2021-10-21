"use strict";

let balloons = [];
let numBalloons = 5;

function setup() {
  createCanvas(500,500);

  for (let i = 0; i < numBalloons; i++) {
    let balloon = {
      x: random(0,width),
      y: random(0,height),
      size: 75,
      fill: color(210, 0, 0),
      highlightedFill: color(255, 0, 0),
      normalFill: color(190, 0, 0),
      popped: false
    };
    balloons.push(balloon); //push equivalent to add
  }
}

function draw() {
  background(0);

  for (let i = 0; i < balloons.length; i++) { //rather than numBalloons
    // rename current array iteration
    let balloon = balloons[i];

    // check for mouseover
    if (mouseIsInsideBalloon(balloon)) { balloon.fill = balloon.highlightedFill; }
    else { balloon.fill = balloon.normalFill; }

    // display the balloon
    if(!balloon.popped) { // equiv to if(popped = false), so reversed if popped, don't run code, here display
      push();
      noStroke();
      fill(balloon.fill);
      ellipse(balloon.x,balloon.y,balloon.size);
      pop();
    }
  }
}

// instead of checking if within radius twice (hover and press), have a checking function to call
function mouseIsInsideBalloon(balloon) {
  let d = dist(mouseX, mouseY, balloon.x, balloon.y);
  if (d < balloon.size / 2) { return true; }
  else { return false; }
}

function mousePressed() {
  for (let i = 0; i < balloons.length; i++) {
    let balloon = balloons[i];
    if (mouseIsInsideBalloon(balloon) && mousePressed) { balloon.popped = true; }
  }
}
