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

/* ble */
const TELO_UUID = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
let teloBLE, teloCharacteristic, teloIntensity;
let connectButton = document.getElementById('connectBtn');
let disconnectButton = document.getElementById('disconnectBtn');

// SETUP: initialize canvas, video and model
function setup() {
  dynamicCanvas = new DynamicCanvas(640, 480);
  // connectButton.style.left = "10px"
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
  // instantiate ble
  teloBLE = new p5ble();
}

// connect to device by passing the service UUID
function connectToBLE() {
  teloBLE.connect(TELO_UUID, gotCharacteristics);
  connectButton.style.display = "none";
  disconnectButton.style.display = "block";
}

function gotCharacteristics(error, characteristics) {
  if (error) console.log('error: ', error);
  console.log('characteristics: ', characteristics);
  // Set the first characteristic as myCharacteristic
  teloCharacteristic = characteristics[0];
}

function disconnectFromBLE() {
  teloBLE.write(teloCharacteristic, 0);
  teloBLE.disconnect();
  disconnectButton.style.display = "none";
  connectButton.style.display = "block";
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
  writeToBLE();
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

function writeToBLE() {
  if (teloBLE.isConnected() && teloCharacteristic) {
    // teloIntensity = 255 - floor(hand.index.y / height * 255);
    if (predictions.length > 0 && hand.index.y > 50) { teloIntensity = 255 - floor(hand.index.y / height * 255); }
    else { teloIntensity = 0 }
    teloBLE.write(teloCharacteristic, teloIntensity);
    push();
    textSize(30);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    fill(255);
    text(hand.index.y, width / 4 * 3, height / 4);
    text(floor(hand.index.y / height * 255), width / 4 * 3, height / 2);
    text(teloIntensity, width / 4 * 3, height / 4*3);
    pop();
  }
}

function keyPressed() {
  // 'f' key toggled fullscreen
  if (keyCode === 70) {    }
  // 'c' key toggled connection
  if (keyCode === 67) {
    if (!teloBLE.isConnected()) { connectToBLE(); }
    else { disconnectFromBLE(); }
  }
}
