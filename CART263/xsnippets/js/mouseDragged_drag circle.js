// Our circle object
let circle = {
  x: 250,
  y: 250,
  size: 50,
  fill: 0,
  // We need to keep track of whether the circle is being dragged or not so we know whether to move it with the mouse position
  dragging: false
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(127);
  fill(circle.fill);
  ellipse(circle.x, circle.y, circle.size);
}

// mousePressed() is called at the moment the user presses down a mouse button
function mousePressed() {
  // Calculate the distance between the mouse position and the circle position
  let d = dist(mouseX, mouseY, circle.x, circle.y);
  // If the distance is less that the circle's radius, we know the mouse was
  // inside the circle when pressed
  if (d < circle.size / 2) {
    // So we can now drag the circle
    circle.dragging = true;
  }
}

// mouseReleased() is called at the moment the user releases a mouse button
function mouseReleased() {
  // If the mouse is released, we should stop dragging the circle
  circle.dragging = false;
}

// mouseDragged() is called every frame that the user is moving the mouse with a button held down
function mouseDragged() {
  // When the mouse is dragged (with the mouse button down), we check if the circle
  // is being dragged
  if (circle.dragging) {
    // If it is, we move it to the mouse position
    circle.x = mouseX;
    circle.y = mouseY;
  }
}
