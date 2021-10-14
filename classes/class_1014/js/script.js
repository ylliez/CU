/**
easiest is to scale image (crop) according to predefined canvas dims, or at least aspect ratio
*/

"use strict";
let bgImage = undefined;

let state = 'start'; //start, simulation

let startInstructionVisible = false;

function preload() {
  bgImage = loadImage('assets/images/clown.png');
}

function setup() {
  createCanvas(500,500);
  setTimeout(showInstruction,2000);
}

function showInstruction() {
  startInstructionVisible = true;
}

function draw() {
  if (state === 'start') {
    start();
  }
  else if (state === 'simulation') {
    simulation();
  }
}

function start() {
  background(0);

   if(startInstructionVisible) {
    push();
    textAlign(CENTER,CENTER);
    fill(255);
    text('CLICK TO BEGIN', width/2, height/2);
    pop();
  }
}

function simulation() {
  background(bgImage);
}

function mousePressed() {
  if (state === 'start' && startInstructionVisible) {
    state = 'simulation';
  }
}
