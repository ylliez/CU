"use strict";

// program state (load, sim)
let state = `load`;
// holder for webcam input
let video;
// holder for Handpose model
let handpose;
// holder for Handpose model results
let predictions = [];
let tipX, tipY;


/**
Description of setup
*/
function setup() {
  createCanvas(640,480);

  // start & hide webcam
  video = createCapture(VIDEO);
  video.hide();

  // start Handpose model and signal when loaded
  handpose = ml5.handpose(video, { flipHorizontal: true }, () => { state = `sim`; } );
  // load Handpose model results into array
  handpose.on(`predict`, (results) => { predictions = results; } );
}


// DRAW: handle program state
function draw() {
  switch (state) {
    case `load`:
      load();
      break;
    case `sim`:
      sim();
      break;
    default:

  }
}

// Display loading screen
function load() {
  background(255);
  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`LOADING...`, height / 2, width / 2);
  pop();
}

// SIM: update hand predictions and draw index finger tip to screen
function sim() {
  // DEBUG - display mirrored video feed
  image(ml5.flipImage(video), 0, 0, width, height);

  if (predictions.length > 0) {
    let hand = predictions[0];
    displayIndexTip(hand);
  }
}

// draw ellipse at index finger tip coordinates
function displayIndexTip(hand) {
  tipX = hand.annotations.indexFinger[3][0];
  tipY = hand.annotations.indexFinger[3][1];

  push();
  fill(255);
  noStroke();
  ellipse(tipX, tipY, 10, 10);
  pop();
}
