"use strict";

let sphere = {
  x: 250,
  y: 250,
  size: 300
}

function setup() {
  createCanvas(500,500);
  noStroke();
}

function draw() {
  background(0);
  for (let size = sphere.size; size > 0; size--) {
    let currentFill = map(size,0,sphere.size,255,0);
    fill(currentFill);
    ellipse(sphere.x, sphere.y, size);
  }
}
