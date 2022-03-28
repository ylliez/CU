"use strict";

/* general */
// program state (load, sim)
let state = `load`;
// // holder for dynamic canvas
// let dynamicCanvas;
const aspectRatio = 16/9;
// holder for webcam input feed
let capture;
// Mac dims: 640 * 480
// CCTV dims: 768 * 494 pixels (https://www.manualslib.com/manual/118015/Panasonic-Aw-E300.html?page=52#manual)
const captureWidth = 640;
const captureHeight = 480;
// holders for output graphics display
let trailBlazer;
// holder for touchGUI
let touchGUI;
// holders for TouchGUI sliders
let sliderSize, sliderColR, sliderColG, sliderColB;

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
let teloBLE;
// holder for BLE characteristic
let teloCharacteristic;
// holder for value to send to BLE
let teloIntensity;

// SETUP: initialize canvas, video and model
function setup() {
  createCanvas(windowWidth, windowWidth / aspectRatio);
  // createCanvas(1280, 960);
  // createCanvas(640, 480);
  // dynamicCanvas = new DynamicCanvas(640, 480);
  touchGUI = createGui();

  createSliders();

  // start webcam and hide the resulting HTML element
  capture = createCapture(VIDEO);
  capture.hide();

  // instantiate hand object to manipulate Handpose data
  hand = new Hand();

  // initialize model, switch to simulation state upon load
  handpose = ml5.handpose(capture, { flipHorizontal: true }, () => { state = `sim`; } );
  // start Handpose model, store prediction events in array if applicable
  handpose.on(`predict`, (results) => { predictions = results; } );

  // instantiate graphics element
  trailBlazer = createGraphics(width, height);

  // instantiate ble
  teloBLE = new p5ble();
}

function createSliders() {
    sliderSize = createSliderV("SliderV", 50, 0.05 * height, 32, 300, 1, 20);
    sliderSize.val = 6;
    sliderColR = createSliderV("SliderV", 50, 0.75 * height, 32, 300, 0, 255);
    sliderColR.val = 255;
    sliderColG = createSliderV("SliderV", 100, 0.75 * height, 32, 300, 0, 255);
    sliderColG.val = 0;
    sliderColB = createSliderV("SliderV", 150, 0.75 * height, 32, 300, 0, 255);
    sliderColB.val = 127;
}

// DRAW: handle program state
function draw() {
  // dynamicCanvas.update();
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
  image(ml5.flipImage(capture), 0, 0, width, height);
  filter(GRAY);

  drawGui();

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
  trailBlazer.stroke(sliderColR.val, sliderColG.val, sliderColB.val);
  trailBlazer.strokeWeight(sliderSize.val);
  trailBlazer.line(hand.indexGhost.x, hand.indexGhost.y, hand.index.x, hand.index.y);
  trailBlazer.pop();
  image(trailBlazer, 0, 0);
}

function writeToBLE() {
  if (teloBLE.isConnected() && teloCharacteristic) {
    let yPos = hand.index.y;
    // console.log(yPos);
    let yPosConstrained = constrain(yPos, 0, height);
    // console.log(yPosConstrained);
    let yPosPercent = yPosConstrained / height;
    // console.log(yPosPercent);
    let yPosByte = yPosPercent * 255;
    // console.log(yPosByte);
    // teloIntensity = 255 - floor(yPosByte);
    if (predictions.length > 0 && yPosByte < 200) { teloIntensity = 255 - floor(yPosByte); }
    else { teloIntensity = 0 }
    teloBLE.write(teloCharacteristic, teloIntensity);
    push();
    textSize(30);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    fill(255,0,255);
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


// connect to device by passing the service UUID
function connectToBLE() {
  teloBLE.connect(TELO_UUID, gotCharacteristics);
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
}
