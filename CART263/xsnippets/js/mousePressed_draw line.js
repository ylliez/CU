function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // No background() so we can see it building up

  // Draw a line from the previous to the current mouse position if the mouse is pressed
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
