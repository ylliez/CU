// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   fill(255, 0, 0);
//   stroke(0, 255, 255);
//   strokeWeight(10);
//   rect(100, 100, 100, 100);
//
//   fill(0, 0, 255);
//   rect(300, 100, 100, 100);
// }

function setup() {
  createCanvas(500, 500);
}

function draw() {
  push();
  fill(255, 0, 0);
  stroke(0, 255, 255);
  strokeWeight(10);
  rect(100, 100, 100, 100);
  pop();

  push();
  fill(0, 0, 255);
  rect(300, 100, 100, 100);
  pop();
}
