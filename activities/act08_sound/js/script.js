"use strict"

let orbs = [];
let numOrbs;
let notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F4`];

function preload () {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  userStartAudio();
}

function draw() {
  background(0);
  for (var i = 0; i < orbs.length; i++) {
    let orb = orbs[i];
    orb.move();
    orb.bounce();
    orb.display();
  }
}

function mousePressed() {
  createOrb(mouseX, mouseY);
}

function createOrb(x ,y) {
  let note = random(notes);
  let orb = new Orb(x, y, note);
  orbs.push(orb);
}
