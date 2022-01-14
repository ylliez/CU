let isOn = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (isOn) {
    background(255);
  }
  else {
    background(0);
  }
}

function mousePressed() {
  // When the mouse button is pressed, flip the variable
  isOn = !isOn;
}
