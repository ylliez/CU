/* general */
"use strict";

// program state (loading, running)
let state = `loading`;
// holders for input video feed and output graphics display
let video, trailBlazer;

/* ml5 */// holders for handpose object, current set of predictions and extracted hand data
let handpose;
let predictions = [];
let hand;

// SETUP: initialize canvas, video and model
function setup() {
  // options for different displays (4:3 || relative) -> adapt createGraphics
  // createCanvas(640, 480);
  createCanvas(windowWidth, windowHeight);
  // createCanvas(1280, 960);
  // createCanvas(1920, 1440);
  // Start webcam and hide the resulting HTML element
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
  // adapt graphics to selected canvas AR
  // 640 x 480
  // trailBlazer.line(hand.prev.x, hand.prev.y, hand.index.x, hand.index.y);
  // width x height
  trailBlazer.line(hand.prev.x/640*width, hand.prev.y/480*height, hand.index.x/640*width, hand.index.y/480*height);
  // 1280 x 960
  // trailBlazer.line(hand.prev.x*2, hand.prev.y*2, hand.index.x*2, hand.index.y*2);
  // 1920 x 1440
  // trailBlazer.line(hand.prev.x*3, hand.prev.y*3, hand.index.x*3, hand.index.y*3);
  trailBlazer.pop();
  image(trailBlazer, 0, 0);
}
