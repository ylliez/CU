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

  // let stop = keyIsPressed;
  // while(stop) {
  //   click = keyIsPressed;
  //   console.log(click);
  // }
  // console.log(click);

  // while(mouseX>255 && mouseX<500) {
  // }

}
