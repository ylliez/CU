let visible = true;

function setup() {
  createCanvas(600, 600);

  // Make the circle blink every 500 milliseconds
  setInterval(blink, 500);
}

function draw() {
  background(0);

  if (visible) {
    ellipse(width / 2, height / 2, 100);
  }
}

function blink() {
  // If the visible is true, make it false. If it's false, make it true.
  visible = !visible;
}
