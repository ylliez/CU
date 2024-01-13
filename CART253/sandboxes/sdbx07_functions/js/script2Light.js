let lightIsOn = false;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  // Draw a red ellipse you can only see when the light is on!
  fill(255,0,0);
  ellipse(250,250,100,100);

  // If the light is off, draw a black rectangle on top of everything
  // to hide it (make it "dark")
  // Notice how we check if the light is NOT on by using ! in front of the variable
  if (!lightIsOn) {
    fill(0);
    rect(0,0,width,height);
  }
}

function mousePressed() {
  // When the mouse button is pressed, flip the variable
  lightIsOn = !lightIsOn;
  // Notice how we can flip the true/false value by using the NOT operator !
  // If lightIsOn is true, then ! will make it false
  // If lightIsOn is false, then ! will make it true
}
