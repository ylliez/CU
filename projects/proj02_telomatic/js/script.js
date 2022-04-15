"use strict";

/* GENERAL */
// program state (load, sim)
let state = `load`;
// video capture element, input feed and dimensions
const captureElement = document.getElementById('capture');
// 16:9 -> 1280 * 720
// let capture, captureWidth = 1280, captureHeight = 720;
// 4:3 -> 640 * 480
let capture, captureWidth = 640, captureHeight = 480;
// CCTV dims: 768 * 494 pixels (https://www.manualslib.com/manual/118015/Panasonic-Aw-E300.html?page=52#manual)
// let capture, captureWidth = 768, captureHeight = 494;
// display aspect ratio
const aspectRatio = captureWidth / captureHeight;
// output graphics display element
let trailBlazer;
// p5.touchgui GUI and elements
let touchGUI, sliderSize, sliderColR, sliderColG, sliderColB, buttonClear, buttonQR;
let sliderColWidth, sliderColHeight, sliderColYPos, sliderColRXPos, sliderColGXPos, sliderColBXPos;
let sliderSizeWidth, sliderSizeHeight, sliderSizeYPos, sliderSizeXPos;
let buttonClearXPos, buttonClearYPos, buttonClearWidth, buttonClearHeight;
let buttonQRXPos, buttonQRYPos, buttonQRWidth, buttonQRHeight;
// MediaPipe handpose recognition model, results and ad hoc object to manipulate data
let hands, predictions = [], hand;
// BLE UUID address of actuating microcontroller
const TELO_UUID = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
// BLE object, characteristic and value to be sent
let teloBLE, teloCharacteristic, teloIntensity;
// HTML divs
let clearDiv, photoDiv, qrDiv, cdDiv, flashDiv;
// QR trigger boolean
let qrTrig = false;
// GUI reset timer
let resetGUI;


/* SETUP: initialize canvas, video and model */
function setup() {
  createCanvas(windowWidth, windowWidth / aspectRatio);
  // setup MediaPipe model
  handposeSetup();
  // instantiate p5.touchgui GUI and elements
  touchGUI = createGui();
  createGUIElements();
  // get DOM element of video
  capture = select(`#capture`);
  // instantiate hand object to manipulate Handpose data
  hand = new Hand();
  // instantiate graphics element
  trailBlazer = createGraphics(width, height);
  // instantiate ble
  teloBLE = new p5ble();
  // style countdown & QR code div
  getDivs();
}

function handposeSetup() {
  hands = new Hands({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }
  });
  // set options of handpose model (horizontally flipped image, maximum number of hands detected, detection confidence)
  hands.setOptions({
    selfieMode: true,
    maxNumHands: 6,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });
  // return and store handpose detection results
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

function getDivs() {
  // obtain jQuery element & style of clear & screenshot divs
  clearDiv = $("#clearDiv");
  photoDiv = $("#photoDiv");
  buttonClearYPos = parseInt(clearDiv.css("top"));
  buttonClearXPos = parseInt(clearDiv.css("left"));
  buttonClearHeight = parseInt(clearDiv.css("height"));
  buttonClearWidth = parseInt(clearDiv.css("width"));
  buttonQRXPos = parseInt(photoDiv.css("left"));
  buttonQRYPos = parseInt(photoDiv.css("top"));
  buttonQRHeight = parseInt(photoDiv.css("height"));
  buttonQRWidth = parseInt(photoDiv.css("width"));
  // obtain jQuery element of countdown & flash effect divs
  cdDiv = $("#countdownDiv");
  flashDiv = $('#flashDiv');
  // obtain DOM element of QR code div & style
  qrDiv = document.getElementById("qrCodeDiv");
  qrDiv.style.left = `${width/2-height/4}px`;
  qrDiv.style.top = `${height/2-height/4}px`;
}


/* DRAW: handle program state */
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
  textSize(50);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`LOADING...`, width / 2, height / 2);
  pop();
}

// display video feed, GUI and graphic element, store & update hand predictions
function sim() {
  // display mirrored video feed
  displayVideo();
  // display touchgui elements
  drawGui();
  // display graphic element (not conditional on hand being present)
  image(trailBlazer, 0, 0);
  // send handpose model results to hand object & update
  hand.predictions = predictions;
  hand.update();
  // OR drawGUI here to float over drawing
}

function displayVideo() {
  push();
  // mirror display
  translate(width,0);
  scale(-1, 1);
  image(capture, 0, 0, width, height);
  pop();
  // apply grayscale image filter
  filter(GRAY);
}

function writeToBLE(yPos) {
  // check if BLE is connected and characteristic is communicating
  if (teloBLE.isConnected() && teloCharacteristic) {
    // constrain received value to range of window height to avoid rollover
    let yPosConstrained = constrain(yPos, 0, height);
    // divide constrained value by height to get percentage relative to total height
    let yPosPercent = yPosConstrained / height;
    // multiply by 255 to remap y position relative to window height to byte range for microcontroller
    let yPosByte = yPosPercent * 255;
    // if y position below threshold vertical position (and last hand present garde-fou check, set inverse value
    // otherwise set value as 0
    if (hand.numberHands > 0 && yPosByte < 200) { teloIntensity = 255 - floor(yPosByte); }
    else { teloIntensity = 0; }
    // console.log(teloIntensity);
    // write constrained relative percentage mapped inverted value (or 0) to BLE
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
  // DEBUGGING: 'p' key screenprints
  if (keyCode === 80) { triggerQR(); }
  // DEBUGGING: 'x' key clears graphics elements
  if (keyCode === 88) { trailBlazer.clear(); }
}

// hide GUI elements and trigger screenshot and QR code generation process
function triggerQR() {
  qrTrig = true;
  sliderSize.visible = false;
  sliderColR.visible = false;
  sliderColG.visible = false;
  sliderColB.visible = false;
  clearDiv.css("display", "none");
  photoDiv.css("display", "none");
  // trigger countdown and screenshot
  photoboothEffect();
}

function photoboothEffect() {
  // set countdown duration to three seconds
  let seconds = 3;
  // create interval to iterate through GUI countdown
  let photoboothCountdown = setInterval( () => {
    // when countdown over, clear the interval & take screenshot
    if (seconds <= 0){
      clearInterval(photoboothCountdown);
      generateQRcode();
      // flash effect using opacity fading
      flashEffect();
    }
    else {
      // write countdown to displayed div with fade in & out effect
      cdDiv.html(seconds);
      cdDiv.fadeTo(400, 1);
      cdDiv.fadeOut(400);
    }
    // count down
    seconds -= 1;
  }, 1000);
}

function flashEffect() {
  flashDiv.fadeTo(100, 0.7);
  flashDiv.fadeOut(100);
}

function generateQRcode() {
  // clear contents of QR code div; if a code has already been generated, removes it
  qrDiv.innerHTML = "";
  // get p5 canvas element, screenshot it, convert to URI and tag with key for PHP retrieval
  let canvas  = document.getElementById("defaultCanvas0");
  let canvasURL = canvas.toDataURL("image/png", 1);
  let data = new FormData();
  data.append("canvasImage", canvasURL);
  // send canvas screenshot URI to server using upload PHP script
  $.ajax({
    type: "POST",
    enctype: 'multipart/form-data',
    url: "upload.php",
    data: data,
    processData: false,
    contentType: false,
    cache: false,
    timeout: 600000,
    // upon upload, generate QR code with image URL
    success: function (response) {
      // append header to returned image URL
      let imageURL = `http://hybrid.concordia.ca/i_planch/telomatic/${response}`;
      // DEBUGGING: output headed image URL to console
      console.log(imageURL);
      // make styled QR code with headed image URL
      let qrcode = new QRCode("qrCodeDiv", {
        text: imageURL,
        width: height/2,
        height: height/2,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
      // display div QR code is appended to
      qrDiv.style.display = "block";
      // create 10s timeout for QR display and GUI hiding
      resetGUI = setTimeout( () => { resetGUIElements(); }, 10000);
    },
    // helper function
    error: function() { console.log("error occurred"); }
  });
}

// hide QR code div and re-display GUI elements
function resetGUIElements() {
  qrDiv.style.display = "none";
  sliderSize.visible = true;
  sliderColR.visible = true;
  sliderColG.visible = true;
  sliderColB.visible = true;
  clearDiv.css("display", "block");
  photoDiv.css("display", "block");
  qrTrig = false;
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

// disconnect from BLE, sending preemptive kill value
function disconnectFromBLE() {
  teloBLE.write(teloCharacteristic, 0);
  teloBLE.disconnect();
}

// create p5.touchgui sliders and buttons
function createGUIElements() {
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
