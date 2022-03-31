"use strict";

/* general */
// program state (load, sim)
let state = `load`;
// video capture input feed and dimensions
let capture, captureWidth = 640, captureHeight = 480;
let videoElement = document.getElementById('webcam');
let webcam;
// Mac dims: 640 * 480
// CCTV dims: 768 * 494 pixels (https://www.manualslib.com/manual/118015/Panasonic-Aw-E300.html?page=52#manual)
// display aspect ratio
const aspectRatio = 4/3;
// output graphics display element
let trailBlazer;
// p5.touchgui GUI and sliders
let touchGUI, sliderSize, sliderColR, sliderColG, sliderColB;
let sliderColWidth, sliderColHeight, sliderColYPos, sliderColRXPos, sliderColGXPos, sliderColBXPos;
let sliderSizeWidth, sliderSizeHeight, sliderSizeYPos, sliderSizeXPos;
// ml5 Handpose model, results and ad hoc object to manipulate data
let handpose, predictions = [], hand;
// BLE UUID address of actuating microcontroller
const TELO_UUID = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
// BLE object, characteristic and value to be sent
let teloBLE, teloCharacteristic, teloIntensity;

let rIndexTipX, rIndexTipY;

const hands = new Hands({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  }
});

hands.setOptions({
  selfieMode: true,
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});

hands.onResults((results) => {
  state = `sim`;
  predictions = results;
});

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({
      image: videoElement,
    });
  },
  width: 1280,
  height: 720
});

camera.start();

// SETUP: initialize canvas, video and model
function setup() {
  createCanvas(1280, 720);
  // createCanvas(windowWidth, windowWidth / aspectRatio);
  // createCanvas(1280, 960);
  // createCanvas(640, 480);
  // instantiate p5.touchgui GUI and sliders
  touchGUI = createGui();
  createSliders();

  webcam = select(`#webcam`);
  // instantiate hand object to manipulate Handpose data
  // hand = new Hand();

  // instantiate graphics element
  trailBlazer = createGraphics(width, height);
  // instantiate ble
  teloBLE = new p5ble();
}


// create p5.touchgui sliders
function createSliders() {
  sliderColWidth = 30;
  sliderColHeight = height / 4;
  sliderColYPos = height * 0.1;
  sliderColRXPos = sliderColWidth;
  sliderColGXPos = sliderColRXPos + 2 * sliderColWidth;
  sliderColBXPos = sliderColGXPos + 2 * sliderColWidth;
  sliderSizeWidth = sliderColBXPos + sliderColWidth - sliderColRXPos;
  sliderSizeHeight = sliderColWidth;
  sliderSizeYPos = sliderColYPos + sliderColHeight + sliderSizeHeight;
  sliderSizeXPos = sliderColRXPos;
  sliderSize = createSlider("sliderSize", sliderSizeXPos, sliderSizeYPos, sliderSizeWidth, sliderSizeHeight, 1, 30);
  sliderSize.val = 6;
  sliderSize.setStyle({
    strokeHandle: color("#000"),
    fillHandle: color("#000"),
    fillHandleHover: color("#000"),
    fillHandleActive: color("#000"),
    fillTrack: color("#000"),
    fillTrackHover: color("#000"),
    fillTrackActive: color("#000"),
    rounding: 100,
    trackWidth: 1,
    strokeWeight:1
  });
  sliderColR = createSliderV("sliderColR", sliderColRXPos, sliderColYPos, sliderColWidth, sliderColHeight, 0, 255);
  sliderColR.val = 255;
  sliderColR.setStyle({
    strokeHandle: color("#F00"),
    fillHandle: color("#F00"),
    fillHandleHover: color("#F00"),
    fillHandleActive: color("#F00"),
    fillTrack: color("#F00"),
    fillTrackHover: color("#F00"),
    fillTrackActive: color("#F00"),
    rounding: 100,
    trackWidth: 1,
    strokeWeight:1
  });
  sliderColG = createSliderV("sliderColG", sliderColGXPos, sliderColYPos, sliderColWidth, sliderColHeight, 0, 255);
  sliderColG.val = 0;
  sliderColG.setStyle({
    strokeHandle: color("#0F0"),
    fillHandle: color("#0F0"),
    fillHandleHover: color("#0F0"),
    fillHandleActive: color("#0F0"),
    fillTrack: color("#0F0"),
    fillTrackHover: color("#0F0"),
    fillTrackActive: color("#0F0"),
    rounding: 100,
    trackWidth: 1,
    strokeWeight:1
  });
  sliderColB = createSliderV("sliderColB", sliderColBXPos, sliderColYPos, sliderColWidth, sliderColHeight, 0, 255);
  sliderColB.val = 127;
  sliderColB.setStyle({
    strokeHandle: color("#00F"),
    fillHandle: color("#00F"),
    fillHandleHover: color("#00F"),
    fillHandleActive: color("#00F"),
    fillTrack: color("#00F"),
    fillTrackHover: color("#00F"),
    fillTrackActive: color("#00F"),
    rounding: 100,
    trackWidth: 1,
    strokeWeight:1
  });
}

// DRAW: handle program state
function draw() {
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
  push();
  translate(width,0);
  scale(-1, 1);
  image(webcam, 0, 0);
  pop();
  filter(GRAY);

  drawGui();

  let numberHands = predictions.multiHandedness.length;

  if (numberHands > 0) {
    for (var i = 0; i < numberHands; i++) {
      let indexTip = predictions.multiHandLandmarks[i][8];
      let chirality = predictions.multiHandedness[i].label;
      // console.log(chirality);
      if (chirality === `Right`) {
        let rIndexGhostX = rIndexTipX;
        let rIndexGhostY = rIndexTipY;
        rIndexTipX = indexTip.x * width;
        rIndexTipY = indexTip.y * height;

        trailBlazer.push();
        trailBlazer.stroke(sliderColR.val, sliderColG.val, sliderColB.val);
        trailBlazer.strokeWeight(sliderSize.val);
        trailBlazer.line(rIndexGhostX, rIndexGhostY, rIndexTipX, rIndexTipY);
        trailBlazer.pop();
      }

      else if (chirality === `Left`) {
        let lIndexTipX = indexTip.x * width;
        let lIndexTipY = indexTip.y * height;
        ellipse(lIndexTipX, lIndexTipY, 15);
        if (lIndexTipY > sliderColYPos && lIndexTipY < sliderColYPos + sliderColHeight) {
          if (lIndexTipX > sliderColRXPos && lIndexTipX < sliderColRXPos + sliderColWidth) {
            sliderColR.val = map(lIndexTipY, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
          }
          if (lIndexTipX > sliderColGXPos && lIndexTipX < sliderColGXPos + sliderColWidth) {
            sliderColG.val = map(lIndexTipY, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
          }
          if (lIndexTipX > sliderColBXPos && lIndexTipX < sliderColBXPos + sliderColWidth) {
            sliderColB.val = map(lIndexTipY, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
          }
        }
        if (lIndexTipY > sliderSizeYPos && lIndexTipY < sliderSizeYPos + sliderSizeHeight) {
          if (lIndexTipX > sliderSizeXPos && lIndexTipX < sliderSizeXPos + sliderSizeWidth) {
            sliderSize.val = map(lIndexTipX, sliderSizeXPos, sliderSizeXPos + sliderSizeWidth, 1, 30);
          }
        }
      }
    }
    // hand.predictions = predictions;
    // hand.coordinate();
  //   checkUI();
  }

  // displayHands();
  drawIndexTip();
  writeToBLE();
}
//
// function checkUI() {
//   if (hand.index.y > sliderColYPos && hand.index.y < sliderColYPos + sliderColHeight) {
//     if (hand.index.x > sliderColRXPos && hand.index.x < sliderColRXPos + sliderColWidth) {
//       sliderColR.val = map(hand.index.y, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
//     }
//     if (hand.index.x > sliderColGXPos && hand.index.x < sliderColGXPos + sliderColWidth) {
//       sliderColG.val = map(hand.index.y, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
//     }
//     if (hand.index.x > sliderColBXPos && hand.index.x < sliderColBXPos + sliderColWidth) {
//       sliderColB.val = map(hand.index.y, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
//     }
//   }
//   if (hand.index.y > sliderSizeYPos && hand.index.y < sliderSizeYPos + sliderSizeHeight) {
//     if (hand.index.x > sliderSizeXPos && hand.index.x < sliderSizeXPos + sliderSizeWidth) {
//       sliderSize.val = map(hand.index.x, sliderSizeXPos, sliderSizeXPos + sliderSizeWidth, 1, 30);
//     }
//   }
// }

// draw path following index finger tip
function drawIndexTip() {
  // trailBlazer.push();
  // trailBlazer.stroke(sliderColR.val, sliderColG.val, sliderColB.val);
  // trailBlazer.strokeWeight(sliderSize.val);
  // trailBlazer.line(hand.indexGhost.x, hand.indexGhost.y, hand.index.x, hand.index.y);
  // trailBlazer.pop();
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
  // Set the first characteristic as writing characteristic
  teloCharacteristic = characteristics[0];
}

function disconnectFromBLE() {
  teloBLE.write(teloCharacteristic, 0);
  teloBLE.disconnect();
}
