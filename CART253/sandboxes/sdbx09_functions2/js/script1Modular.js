// let circle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 1,
//   vy: 0
// }
//
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//
//   circle.x += circle.vx;
//   circle.x += circle.vy;
//
//   if (circle.x > width) {
//     circle.x = 0;
//     circle.vx += 2;
//     circle.size += 5;
//   }
//
//   fill(255,0,0);
//   ellipse(circle.x, circle.y, circle.size);
// }
//
// function mousePressed() {
//   circle.x = 0;
//   circle.vx += 1;
//   circle.size += 5;
// }

// same but w/ separate FUNCTIONS
let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 1,
  vy: 0
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  move();
  wrap();
  display();
}

function move() {
  circle.x += circle.vx;
  circle.y += circle.vy;
}

function wrap() {
  if (circle.x > width) {
    reset();
  }
}

function reset() {
  circle.x = 0;
  circle.vx += 1;
  circle.size += 5;
}

function display() {
  fill(255,0,0);
  ellipse(circle.x, circle.y, circle.size);
}

function mousePressed() {
  reset();
}
