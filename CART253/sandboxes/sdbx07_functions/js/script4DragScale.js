// Our circle object
let circle = {
  x: 250,
  y: 250,
  size: 50,
  // Because it changes size, let's set a minimum and maximum size
  minSize: 50,
  maxSize: 400,
  fill: 0,
  // We need to keep track of whether the circle is being dragged or not
  // so we know whether to move it with the mouse position
  dragging: false
}

function setup() {
  createCanvas(500, 500);
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

// mouseDragged() is called every frame that the user is moving the mouse
// with a button held down
function mouseDragged() {
  // When the mouse is dragged (with the mouse button down), we check if the circle
  // is being dragged
  if (circle.dragging) {
    // If it is, we move it to the mouse position
    circle.x = mouseX;
    circle.y = mouseY;
  }
}

// mouseWheel() is called every frame that the user is scrolling with the scroll wheel on
// a mouse or using their touchpad
function mouseWheel(event) {
  // When the mouse wheel (or touchpad) is scrolled
  // event.delta contains the distance (in pixels) it scrolled
  // So we can add this to the size of the circle
  circle.size += event.delta;
  // And constrain the size to stay within the minimum and maximum
  circle.size = constrain(circle.size, circle.minSize, circle.maxSize);
}
