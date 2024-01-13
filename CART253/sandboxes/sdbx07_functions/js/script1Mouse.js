// A circle object
let circle = {
  x: 250,
  y: 250,
  size: 50,
  fill: 0
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(127);
  // Draw the circle
  fill(circle.fill);
  ellipse(circle.x,circle.y,circle.size);
}

function mousePressed() {
  // When the mouse button is pressed, move the circle to the mouse position
  circle.x = mouseX;
  circle.y = mouseY;
}
