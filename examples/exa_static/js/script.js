"use strict";

let qtyStars = 100;

function setup() {
  createCanvas(500,500);
  stroke(255);
}

function draw() {
  background(0);
  for (let i = 0; i < qtyStars; i ++) {
    let x = random(width);
    let y = random(height);
    point(x,y);
  }
  // while(keyIsPressed) {
  //   console.log(keyIsPressed);
  // }
  //   console.log(keyIsPressed);
}
