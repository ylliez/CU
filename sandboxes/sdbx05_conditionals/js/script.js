// We need to know how many stars we want to draw in the sky
let numStars = 100;

function setup() {
  createCanvas(500, 500);
  // White stroke because we're using point() on black
  stroke(255);
}

function draw() {
  // Black sky
  background(0);
  // randomSeed() lets us make random() predictable: it will generate the same sequence of numbers
  // each time draw() is called
  random(0);
  // Our for loop counts from 0 to numStars
  for (let i = 0; i < numStars; i++) {
    // Choose a random x and y position on the canvas
    let x = random(0, width);
    let y = random(0, height);
    // Draw a point (star) there
    point(x, y);
  }
}
