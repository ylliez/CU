"use strict";

/* general */
// program state (load, sim)
let state = `load`;
// holder for dynamic canvas
let dynamicCanvas;
// holder for webcam input feed
let video;
// holders for output graphics display
let trailBlazer;
// holder for stroke weight of graphics display
let trailBlazerWeight = 3;

/* ml5 */
// holder for Handpose model
let handpose;
// holder for Handpose model results
let predictions = [];
// holder for hand object to manipulate Handpose data
let hand;

/* ble */
// UUID address of actuating microcontroller
const TELO_UUID = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
// holder for BLE object
let teloBLE
// holder for BLE characteristic
let teloCharacteristic
// holder for value to send to BLE
let teloIntensity;
// ble connect/disconnect buttons
let connectButton = document.getElementById('connectBtn');
let disconnectButton = document.getElementById('disconnectBtn');

// SETUP: initialize canvas, video and model
function setup() {
  dynamicCanvas = new DynamicCanvas(640, 480);


  // start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();


  //   $("#sliderSize").slider({
  //   orientation: "vertical"
  // });

  $( "#sliderSize" ).slider({
        orientation: "vertical",
        range: "min",
        min: 1,
        max: 20,
        value: 10,
        slide: function( event, ui ) {

          trailBlazerWeight = ui.value;
          console.log(trailBlazerWeight);
        }
    });

  // instantiate hand object to manipulate Handpose data
  hand = new Hand();

  // initialize model, switch to simulation state upon load
  handpose = ml5.handpose(video, { flipHorizontal: true }, () => { state = `sim`; } );
  // start Handpose model, store prediction events in array if applicable
  handpose.on(`predict`, (results) => { predictions = results; } );

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
  // print connection error, if applicable
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
  switch (state) {
    case `load`: load(); break;
    case `sim`: sim(); break;
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
  // display mirrored video feed
  image(ml5.flipImage(video), 0, 0, width, height);
  filter(GRAY);

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
  trailBlazer.strokeWeight(trailBlazerWeight);
  trailBlazer.line(hand.indexGhost.x, hand.indexGhost.y, hand.index.x, hand.index.y);
  trailBlazer.pop();
  image(trailBlazer, 0, 0);
}

function writeToBLE() {
  if (teloBLE.isConnected() && teloCharacteristic) {
    let yPos = hand.index.y;
    // console.log(yPos);
    let yPosConstrained = constrain(yPos, 0, 480);
    // console.log(yPosConstrained);
    let yPosPercent = yPosConstrained / height;
    // console.log(yPosPercent);
    let yPosByte = yPosPercent * 255;
    // console.log(yPosByte);
    teloIntensity = 255 - floor(yPosByte);
    // if (predictions.length > 0 && hand.index.y > 50) { teloIntensity = 255 - floor(yPosByte); }
    // else { teloIntensity = 0 }
    teloBLE.write(teloCharacteristic, teloIntensity);
    push();
    textSize(30);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    fill(255);
    text(yPosByte, width / 4 * 3, height / 4);
    text(floor(yPosPercent * 255), width / 4 * 3, height / 2);
    text(teloIntensity, width / 4 * 3, height / 4*3);
    pop();
  }
}

function keyPressed() {
  // 'c' key toggles connection
  if (keyCode === 67) {
    if (!teloBLE.isConnected()) { connectToBLE(); }
    else { disconnectFromBLE(); }
  }
  // 'f' key toggles fullscreen
  if (keyCode === 70) {
    if (!document.fullscreen) {
      document.body.requestFullscreen()
    }
    else {
      document.body.exitFullscreen();
    }
  }
}
