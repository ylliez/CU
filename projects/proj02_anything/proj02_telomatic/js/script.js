/* general */
"use strict";

// program state (loading, running)
let state = `loading`;
// holder for dynamic canvas
let dynamicCanvas;
// holders for input video feed and output graphics display
let video, trailBlazer;

/* ml5 */
// holders for handpose object, current set of predictions and extracted hand data
let handpose;
let predictions = [];
let hand;

// SETUP: initialize canvas, video and model
function setup() {
  dynamicCanvas = new DynamicCanvas(640, 480);
  // start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();
  // initialize model, switch to running state upon load
  handpose = ml5.handpose(video, { flipHorizontal: true }, () => { state = `running`; });
  // start model, store prediction events in array if applicable
  handpose.on(`predict`, (results) => { predictions = results; });
  // instantiate index finger object
  hand = new Hand();
  // instantiate graphics element
  trailBlazer = createGraphics(width, height);
}

// DRAW: handle program state
function draw() {
  dynamicCanvas.update();
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

// SIM: update hand predictions and draw index finger tip to screen
function running() {
  // DEBUG - display mirrored video feed
  image(ml5.flipImage(video), 0, 0, width, height);

  // check for predictions and store in hand object if applicable
  if (predictions.length > 0) {
    hand.coordinates = predictions[0];
    hand.coordinate();
  }
  drawIndexTip();
}

// draw path following index finger tip
function drawIndexTip() {
  trailBlazer.push();
  trailBlazer.stroke(255,0,0);
  trailBlazer.strokeWeight(3);
  // console.log(`${hand.prev.x}, ${hand.prev.y}, ${hand.index.x}, ${hand.index.y}`);
  trailBlazer.line(hand.prev.x, hand.prev.y, hand.index.x, hand.index.y);
  trailBlazer.pop();
  image(trailBlazer, 0, 0);
}
