// overlap between mouse & object w/ if
let a = {
  x: undefined,
  y: undefined,
  size: 100
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  a.x = width / 2;
  a.y = height / 2;
  stroke(255,0,0);
  noFill();
  ellipse(a.x, a.y, a.size);
}

function draw() {
  let d = dist(mouseX, mouseY, a.x, a.y);
  if (d < a.size/2) {) {
  background(255);
  }
}

// // overlap between two objects w/ while
// let a = {
//   x: undefined,
//   y: undefined,
//   size: 100
// };
//
// let b = {
//   x: undefined,
//   y: undefined,
//   size: 100
// }
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0);
//
//   b.x = width / 2;
//   b.y = height / 2;
//   stroke(255,0,0);
//   noFill();
//   ellipse(b.x, b.y, b.size);
//
//   a.x = random(width);
//   a.y = random(height);
//
//   let d = dist(a.x, a.y, b.x, b.y);
//   while (d < (a.size / 2 + b.size / 2) ) {
//     a.x = random(width);
//     a.y = random(height);
//   }
//   fill(0,255,255);
//   noStroke();
//   ellipse(a.x,a.y,a.size);
// }
//
// function draw() {
// }
