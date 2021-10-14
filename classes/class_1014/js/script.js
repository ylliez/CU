/**
easiest is to scale image (crop) according to predefined canvas dims, or at least aspect ratio
*/

"use strict";

let bgImage = undefined;

let state = 'start'; //start, simulation

let startInstructionTimer = 90;
let startInstructionVisible = false;

function preload() {
  bgImage = loadImage('assets/images/clown.png');
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  if (state === 'start') {
    start();
  }
  else if (state === 'simulation') {
    simulation();
  }
  // background(bgImage);

}

function start() {
  background(0);

  startInstructionTimer--;
  if(startInstructionTimer <= 0) {
    startInstructionVisible = true;
  }

  // if(frameCount > 120) {
  // if(millis() > 2000) {
   if(startInstructionVisible) {
    push();
    textAlign(CENTER,CENTER);
    fill(255);
    text('CLICK TO BEGIN', width/2, height/2);
    pop();
  }
}

function simulation() {

}
