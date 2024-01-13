// basic loop (dynamic or static if remove randomSeed)
let loopIterations = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
}

function draw() {
  background(0);
  // randomSeed() lets us make random() predictable: it will generate the same sequence of numbers each time draw() is called
  randomSeed(0);
  // Our for loop counts from 0 to loopIterations
  for (let i = 0; i < loopIterations; i++) {
    // Choose a random x and y position on the canvas
    let x = random(0, width);
    let y = random(0, height);
    // Draw a point there
    point(x, y);
  }
}
