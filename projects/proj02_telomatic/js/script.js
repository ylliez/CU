"use strict";

/* general */
// program state (load, sim)
let state = `load`;
// video capture element, input feed and dimensions
const captureElement = document.getElementById('capture');
// let capture, captureWidth = 1280, captureHeight = 720;
// Mac dims: 640 * 480
let capture, captureWidth = 640, captureHeight = 480;
// CCTV dims: 768 * 494 pixels (https://www.manualslib.com/manual/118015/Panasonic-Aw-E300.html?page=52#manual)
// let capture, captureWidth = 768, captureHeight = 494;
// display aspect ratio
const aspectRatio = captureWidth / captureHeight;
// output graphics display element
let trailBlazer;
// p5.touchgui GUI and sliders
let touchGUI, sliderSize, sliderColR, sliderColG, sliderColB;
let sliderColWidth, sliderColHeight, sliderColYPos, sliderColRXPos, sliderColGXPos, sliderColBXPos;
let sliderSizeWidth, sliderSizeHeight, sliderSizeYPos, sliderSizeXPos;
// MediaPipe handpose recognition model, results and ad hoc object to manipulate data
let hands, predictions = [], hand;
// BLE UUID address of actuating microcontroller
const TELO_UUID = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
// BLE object, characteristic and value to be sent
let teloBLE, teloCharacteristic, teloIntensity;

let rIndexTipX, rIndexTipY;

let qrDiv;



// SETUP: initialize canvas, video and model
function setup() {
  createCanvas(windowWidth, windowWidth / aspectRatio);
  // createCanvas(1280, 720);
  // createCanvas(1280, 960);
  // createCanvas(640, 480);
  // setup MediaPipe model
  handposeSetup();
  // instantiate p5.touchgui GUI and sliders
  touchGUI = createGui();
  createSliders();
  // get DOM element of video
  capture = select(`#capture`);
  // instantiate hand object to manipulate Handpose data
  hand = new Hand();
  // instantiate graphics element
  trailBlazer = createGraphics(width, height);
  // instantiate ble
  teloBLE = new p5ble();
  // style QR code div
  qrDiv = document.getElementById("qrCodeDiv");
  qrDiv.style.height = `${height/2}px`;
  qrDiv.style.width = qrDiv.style.height;
  qrDiv.style.left = `${width/2-height/4}px`;
  qrDiv.style.top = `${height/2-height/4}px`;
}

function handposeSetup() {
  hands = new Hands({
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
  const camera = new Camera(captureElement, {
    onFrame: async () => {
      await hands.send({
        image: captureElement,
      });
    },
    width: captureWidth,
    height: captureHeight
  });
  camera.start();
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
  image(capture, 0, 0, width, height);
  pop();
  filter(GRAY);
  // display touchgui elements
  drawGui();

  // check if at least one hand is present, also assess number of hands
  hand.predictions = predictions;
  hand.update();
  // display graphic element (not conditional on hand being present)
  image(trailBlazer, 0, 0);
  // send y index position to
  writeToBLE();

  //or drawGUI here to float over drawing
}

function writeToBLE() {
  if (teloBLE.isConnected() && teloCharacteristic) {
    let yPos = rIndexTipY;
    // console.log(yPos);
    let yPosConstrained = constrain(yPos, 0, height);
    // console.log(yPosConstrained);
    let yPosPercent = yPosConstrained / height;
    // console.log(yPosPercent);
    let yPosByte = yPosPercent * 255;
    // console.log(yPosByte);
    // teloIntensity = 255 - floor(yPosByte);
    if (predictions.multiHandedness.length > 0 && yPosByte < 200) { teloIntensity = 255 - floor(yPosByte); }
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
    if (!document.fullscreen) { document.body.requestFullscreen(); }
    else { document.body.exitFullscreen(); }
  }
  // 'p' key screenprints
  if (keyCode === 80) {
    // clear contents of QR code div; if a code has already been generated, removes it
    qrDiv.innerHTML = "";
    let canvas  = document.getElementById("defaultCanvas0");
    //
    let canvasURL = canvas.toDataURL("image/png", 1);
    let data = new FormData();
    data.append("canvasImage", canvasURL);
    $.ajax({
      type: "POST",
      enctype: 'multipart/form-data',
      url: "upload.php",
      data: data,
      processData: false, //prevents from converting into a query string
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function (response) {
        //reponse is a STRING (not a JavaScript object -> so we need to convert)
        let imageURL = `http://hybrid.concordia.ca/i_planch/CART263/proj02_telomatic/${response}`;
        console.log(imageURL);
        let qrcode = new QRCode("qrCodeDiv", {
          text: imageURL,
          width: height/2,
          height: height/2,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
        qrDiv.style.display = "block";
        setTimeout( () => { qrDiv.style.display = "none"; }, 5000);
      },
      error: function() { console.log("error occurred"); }
    });
  }
  // 'x' key clears graphics elements
  if (keyCode === 88) {
    trailBlazer.clear();
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
