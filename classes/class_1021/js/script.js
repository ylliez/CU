"use strict";

let balloon = undefined;

function setup() {
  createCanvas(500,500);
  balloon = {
    x: random(0,width),
    y: random(0,height),
    size: 75,
    fill: color(210, 0, 0),
    highlightedFill: color(255, 0, 0),
    normalFill: color(190, 0, 0),
    popped: false
  };
}

function draw() {
  background(0);

// check for mouseover
  if (mouseIsInsideBalloon()) { balloon.fill = balloon.highlightedFill; }
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

// instead of checking if within radius twice (hover and press), have a checking function to call
function mouseIsInsideBalloon() {
  let d = dist(mouseX, mouseY, balloon.x, balloon.y);
  if (d < balloon.size / 2) { return true; }
  else { return false; }
}

function mousePressed() {
  if (mouseIsInsideBalloon() && mousePressed) { balloon.popped = true; }
}

//
// function draw() {
//   if (state === 'start') {
//     start();
//   }
//   else if (state === 'simulation') {
//     simulation();
//   }
// }
//
// function start() {
//   background(0);
//
//    if(startInstructionVisible) {
//     push();
//     textAlign(CENTER,CENTER);
//     fill(255);
//     text('CLICK TO BEGIN', width/2, height/2);
//     pop();
//   }
// }
//
// function simulation() {
//   background(bgImage);
// }
//
//
