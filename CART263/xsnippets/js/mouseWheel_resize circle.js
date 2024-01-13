// Our circle object
let circle = {
  x: undefined,
  y: undefined,
  size: 50,
  // Because it changes size, let's set a minimum and maximum size
  minSize: 50,
  maxSize: undefined,
  fill: 0,
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  circle.x = width / 2;
  circle.y = height / 2;
  circle.maxSize = (width + height) / 2;
}

function draw() {
  background(127);
  fill(circle.fill);
  ellipse(circle.x, circle.y, circle.size);
}

// mouseWheel() is called every frame that the user is scrolling with the scroll wheel on a mouse or using their touchpad
function mouseWheel(event) {
  // When the mouse wheel (or touchpad) is scrolled
  // event.delta contains the distance (in pixels) it scrolled
  // So we can add this to the size of the circle
  circle.size += event.delta;
  // And constrain the size to stay within the minimum and maximum
  circle.size = constrain(circle.size, circle.minSize, circle.maxSize);
}
