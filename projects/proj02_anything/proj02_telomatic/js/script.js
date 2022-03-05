"use strict";

// program state (loading, running)
let state = `loading`; //
// holder for user's webcam
let video;
// holder for Handpose object (using the name of the model for clarity)
let handpose;
// The current set of predictions made by Handpose once it's running
let predictions = [];

// SETUP: initialize canvas, video and model
function setup() {
  createCanvas(640, 480);
  // Start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();
  // initialize model, switch to running state upon load
  handpose = ml5.handpose(video, { flipHorizontal: true }, () => { state = `running`; });
  // start model, store prediction events in array if applicable
  handpose.on(`predict`, function(results) { predictions = results; });
}

// SIM: handle program state
function draw() {
  if (state === `loading`) { loading(); }
  else if (state === `running`) { running(); }
}

// Display loading screen
function loading() {
  background(255);

  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Loading...`, width / 2, height / 2);
  pop();
}

// display webcam.
function running() {
  // Display the webcam with reveresd image so it's a mirror
  image(ml5.flipImage(video), 0, 0, width, height);

  // check if there are currently predictions to display
  if (predictions.length > 0) {
    let hand = predictions[0];
    // Highlight it on the canvas
    displayIndexTip(hand);
  }
}

// provided with a detected hand, displays the tip of the index finger
function displayIndexTip(hand) {
  // display a circle at the tip of the index finger
  let index = hand.annotations.indexFinger[3];
  let indexX = index[0];
  let indexY = index[1];
  push();
  fill(255, 255, 0);
  noStroke();
  ellipse(indexX, indexY, 50);
  pop();
}
