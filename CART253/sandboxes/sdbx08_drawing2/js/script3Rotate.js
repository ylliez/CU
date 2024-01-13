// // rotate without translating origin, moves around canvas origin
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   push();
//   rectMode(CENTER);
//   rotate(PI/4); // Rotate the following shape by PI/4 radians (45 degrees)
//   fill(255, 0, 0);
//   rect(250, 250, 100, 100);
//   pop();
// }

// // demo in mvmnt
// let angle = 0;
//
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//
//   push();
//   rectMode(CENTER);
//   rotate(angle); // Rotate the following shape by 45 degrees
//   fill(255, 0, 0);
//   rect(250, 250, 100, 100);
//   pop();
//
//   angle = angle + 0.025;
// }

// rotation with translated origin
let angle = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  push();
  rectMode(CENTER);
  translate(250,250); // Translate to the rectangle's drawing position
  rotate(angle); // Rotate the following shape by 45 degrees
  fill(255, 0, 0);
  rect(0, 0, 100, 100); // Draw the rectangle at 0,0 because we translated the origin
  pop();

  angle = angle + 0.05;
}
