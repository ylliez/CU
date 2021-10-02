"use strict";

let qtyStars = 100;

function setup() {
  createCanvas(500,500);
  stroke(255);
}

function draw() {
  background(0);
  randomSeed(0);
  for (let i = 0; i < qtyStars; i ++) {
    point(random(width), random(height));
  }
}
