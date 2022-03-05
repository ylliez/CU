"use strict";

// program state (loading, running)
let state = `loading`; //
// holder for user's webcam
let video;
// holder for Handpose object, current set of predictions and extracted hand data
let handpose;
let predictions = [];
let hand;

// SETUP: initialize canvas, video and model
function setup() {
  createCanvas(640, 480);
  // Start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();
  // initialize model, switch to running state upon load
  handpose = ml5.handpose(video, { flipHorizontal: true }, () => { state = `running`; });
  // start model, store prediction events in array if applicable
  handpose.on(`predict`, (results) => { predictions = results; });
  // instantiate index finger object
  hand = new Hand();
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
    hand.coordinates = predictions[0];
    // display index finger tip
    displayIndexTip();
  }
}

// display the tip of the index finger
function displayIndexTip() {
  hand.update();
}
