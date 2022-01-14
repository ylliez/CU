let isOn = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Make the circle switchTrig every 500 milliseconds
  setInterval(switchTrig, 500);
}

function draw() {
  background(0);

  if (isOn) {
    background(255);
  }
  else {
    background(0);
  }
}

function switchTrig() {
  // If the isOn is true, make it false. If it's false, make it true.
  isOn = !isOn;
}
