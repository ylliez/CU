/* script.js
main script
populates HTML page, creates canvas, implements libraries, displays output, affords server interactions
creates video feed, p5.js canvas, GUI elements (sliders & buttons) and graphics element
sets up hand position detection
*/

"use strict";

/* GENERAL */
// program state (load, sim)
let state = `title0`;
// video capture element, input feed and dimensions
const captureElement = document.getElementById('capture');
// 16:9 -> 1280 * 720
// let capture, captureWidth = 1280, captureHeight = 720;
// 4:3 -> 640 * 480
let capture, captureWidth = 640, captureHeight = 480;
// CCTV dims: 768 * 494 pixels (https://www.manualslib.com/manual/118015/Panasonic-Aw-E300.html?page=52#manual)
// let capture, captureWidth = 768, captureHeight = 494;
// dynamic -> window width & height
// let capture, captureWidth = window.Width, captureHeight = window.Height;
// display aspect ratio
const aspectRatio = captureWidth / captureHeight;
// dynamic canvas dimensions
let canvasWidth, canvasHeight;
// GUI and elements
let guiDiv, sliders;
// sliders
let sliderCol, sliderColWidth, sliderColHeight, sliderColYPos, sliderColHandle;
let sliderColR, sliderColG, sliderColB, sliderColRXPos, sliderColGXPos, sliderColBXPos;
let sliderSize, sliderSizeBox, sliderSizeRad, sliderSizeHeight, sliderSizeYPos, sliderSizeXPos, sliderSizeHandle;
// buttons
let buttonStart, buttonStartXPos, buttonStartYPos, buttonStartWidth, buttonStartHeight;
let buttonDraw, buttonDrawXPos, buttonDrawYPos, buttonDrawWidth, buttonDrawHeight;
let buttonQR, buttonQRXPos, buttonQRYPos, buttonQRWidth, buttonQRHeight;
let buttonClear, buttonClearXPos, buttonClearYPos, buttonClearWidth, buttonClearHeight;
let buttonGallery, buttonGalleryXPos, buttonGalleryYPos, buttonGalleryWidth, buttonGalleryHeight;

// photobooth
let photoboothDiv, qrDiv, cdDiv, flashDiv;
// QR trigger boolean
let qrTrig = false;
// GUI reset timer
let resetGUI;
// output graphics display element
let trailBlazer;
// MediaPipe handpose recognition model, results and ad hoc object to manipulate data
let hands, predictions = [], hand;

let titleFont;
function preload() {
  titleFont = loadFont('css/hensa.otf');
}

/* SETUP: initialize canvas, video and model */
function setup() {
  // setup canvas relative to window dimension ratio
  if (windowWidth < windowHeight * aspectRatio) {
    createCanvas(windowWidth, windowWidth / aspectRatio);
  } else {
    createCanvas(windowHeight * aspectRatio, windowHeight);
  }

  // instantiate hand object to manipulate Handpose data
  hand = new Hand();
  // get DOM element of video
  capture = select(`#capture`);
  // instantiate graphics element
  trailBlazer = createGraphics(width, height);
  // create and style GUI elements
  setupGuiElements();
}

// MediaPipe hand position model setup (from https://google.github.io/mediapipe/solutions/hands.html#javascript-solution-api)
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
  // create and launch camera for model detection
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

function setupGuiElements() {
  // obtain canvas element and style for GUI formatting
  canvas = $("#defaultCanvas0");
  canvasWidth = parseInt(canvas.css("width"));
  canvasHeight = parseInt(canvas.css("height"));
  // obtain and style GUI and photobooth divs
  guiDiv = $("#GUI");
  guiDiv.css("width", canvasWidth);
  photoboothDiv = $("#photobooth");
  photoboothDiv.css("width", canvasWidth);
  // create and style sliders, buttons and photobooth
  setupStart();
  setupSliders();
  setupIcons();
  setupPhotobooth();
  guiDiv.hide();
}

// create and style graphics trail color and size sliders
function setupStart() {
  buttonStart = $("#startButton");
  buttonStart.css("font-size", canvasWidth / 30);
  buttonStart.css("padding", canvasWidth / 100);
  buttonStart.css("border-radius", canvasWidth / 10);
  buttonStart.css("left", canvasWidth / 2 + ((windowWidth - canvasWidth) / 2));
  buttonStart.css("top", 2 * canvasHeight / 3);
  buttonDraw = $("#drawButton");
  buttonDraw.css("font-size", canvasWidth / 30);
  buttonDraw.css("padding", canvasWidth / 100);
  buttonDraw.css("border-radius", canvasWidth / 10);
  buttonDraw.css("left", canvasWidth / 2 + ((windowWidth - canvasWidth) / 2));
  buttonDraw.css("top", 2 * canvasHeight / 3);
  buttonDraw.hide();
}

// create and style graphics trail color and size sliders
function setupSliders() {
  // create jQuery sliders
  $("#sliderColR, #sliderColG, #sliderColB").slider({
    orientation: "horizontal",
    range: "min",
    min: 0,
    max: 255
  });
  $("#sliderSize").slider({
    orientation: "vertical",
    range: "min",
    min: 1,
    max: 30
  });
  // obtain slider elements
  sliderCol = $(".sliderCol");
  sliderColR = $("#sliderColR");
  sliderColG = $("#sliderColG");
  sliderColB = $("#sliderColB");
  sliderColHandle = $(".ui-slider-handle");
  sliderSize = $("#sliderSize");
  sliderSizeBox = $("#sliderSizeBox");
  sliderSizeHandle = document.getElementsByClassName('ui-slider-handle')[0];
  // force jQueryUI sliders into absolute position
  $(".ui-slider").css("position", "absolute");
  // style slider elements
  sliderCol.css("top", canvasHeight / 100 * 5);
  sliderCol.css("height", canvasHeight / 100 * 5);
  sliderColHandle.css("height", canvasHeight / 100 * 6);
  sliderColR.css("left", canvasWidth / 100 * 20);
  sliderColG.css("left", canvasWidth / 100 * 43);
  sliderColB.css("left", canvasWidth / 100 * 65);
  sliderSize.css("top", canvasHeight / 100 * 25);
  sliderSize.css("height", canvasHeight / 100 * 50);
  sliderSize.css("left", canvasWidth / 100 * 92.5);
  sliderSizeHandle.style.height = `${hand.size}px`;
  sliderSizeHandle.style.width = `${hand.size}px`;
  sliderSizeBox.css("border-top", `${canvasHeight / 100 * 50}px solid #ccc`);
  sliderSizeBox.css("border-left", `${canvasWidth / 100 * 2}px solid transparent`);
  sliderSizeBox.css("border-right", `${canvasWidth / 100 * 2}px solid transparent`);
  sliderSizeBox.css("left", `-${canvasWidth / 100 * 2}px`);
  // set slider initial values
  sliderColR.slider("value", hand.color.r);
  sliderColG.slider("value", hand.color.g);
  sliderColB.slider("value", hand.color.b);
  sliderSize.slider("value", hand.size);
  // obtain slider style
  sliderColHeight = parseInt(sliderColR.css("height"));
  sliderColYPos = parseInt(sliderColR.css("top"));
  sliderColWidth = parseInt(sliderColR.css("width"));
  sliderColRXPos = parseInt(sliderColR.css("left"));
  sliderColGXPos = parseInt(sliderColG.css("left"));
  sliderColBXPos = parseInt(sliderColB.css("left"));
  sliderSizeYPos = parseInt(sliderSize.css("top"));
  sliderSizeHeight = parseInt(sliderSize.css("height"));
  sliderSizeXPos = parseInt(sliderSize.css("left"));
  sliderSizeRad = parseInt(sliderSizeBox.css("border-left-width"));
}

// create and style graphics clearing and screenshotting buttons
function setupIcons() {
  // obtain clear & screenshot button elements
  buttonQR = $("#qrIcon");
  buttonClear = $("#xIcon");
  buttonGallery = $("#gallIcon");
  // style button elements
  buttonQR.css("top", canvasHeight / 100 * 5);
  buttonQR.css("left", canvasWidth / 100 * 5);
  buttonQR.css("font-size", canvasWidth / 100 * 6);
  buttonClear.css("top", canvasHeight / 100 * 5);
  buttonClear.css("left", canvasWidth / 100 * 88);
  buttonClear.css("font-size", canvasWidth / 100 * 6);
  buttonGallery.css("top", canvasHeight / 100 * 85);
  buttonGallery.css("left", canvasWidth / 100 * 88);
  buttonGallery.css("font-size", canvasWidth / 100 * 6);
  // store button parameters
  buttonQRXPos = parseInt(buttonQR.css("left"));
  buttonQRYPos = parseInt(buttonQR.css("top"));
  buttonQRHeight = parseInt(buttonQR.css("height"));
  buttonQRWidth = parseInt(buttonQR.css("width"));
  buttonClearYPos = parseInt(buttonClear.css("top"));
  buttonClearXPos = parseInt(buttonClear.css("left"));
  buttonClearHeight = parseInt(buttonClear.css("height"));
  buttonClearWidth = parseInt(buttonClear.css("width"));
  buttonGalleryXPos = parseInt(buttonGallery.css("left"));
  buttonGalleryYPos = parseInt(buttonGallery.css("top"));
  buttonGalleryHeight = parseInt(buttonGallery.css("height"));
  buttonGalleryWidth = parseInt(buttonGallery.css("width"));
}

// create and style photobooth (countdown, flash effect & QR code display)
function setupPhotobooth() {
  // obtain and style jQuery elements of photobooth
  cdDiv = $("#countdownDiv");
  cdDiv.css("left", canvasWidth / 100 * 45);
  cdDiv.css("top", canvasHeight / 100 * 35);
  cdDiv.css("font-size", canvasWidth / 5);
  flashDiv = $('#flashDiv');
  qrDiv = $("#qrCodeDiv");
  qrDiv.css("left", canvasWidth / 2 - canvasHeight / 4);
  qrDiv.css("top", canvasHeight / 2 - canvasHeight / 4);
}

/* DRAW: handle program state */
function draw() {
  switch (state) {
    case `title0`: title0(); break;
    case `title1`: title1(); break;
    case `load`: load(); break;
    case `sim`: sim(); break;
  }
}

// display loading screen
function title0() {
  background(255);
  push();
  textAlign(CENTER, CENTER);
  textSize(canvasWidth / 4);
  textFont(titleFont);
  fill(200, 100, 200);
  stroke(0);
  strokeWeight(2);
  text(`DigiPaint`, canvasWidth / 2, canvasHeight/3);
  pop();
}

function title1() {
  background(255);
  push();
  textAlign(CENTER, CENTER);
  textFont(titleFont);
  textSize(canvasWidth / 20);
  stroke(0);
  strokeWeight(2);
  fill(200, 100, 200);
  text(`Paint with your right hand.
  Control settings with your left hand.`, canvasWidth / 2, canvasHeight / 2);
  pop();
  push();
  textAlign(CENTER, TOP);
  textSize(canvasWidth / 30);
  textFont(titleFont);
  fill(0);
  text(`take a picture!
  (makes QR code)`, canvasWidth / 8, canvasHeight / 6);
  text(`colour sliders`, canvasWidth / 2, canvasHeight / 7);
  text(`clear canvas`, canvasWidth / 1.1, canvasHeight / 6);
  push();
  translate(canvasWidth / 100 * 99, canvasHeight / 100 * 50);
  rotate(PI/2);
  text(`size slider`, 0 ,0);
  pop();
  text(`photo gallery`, canvasWidth / 100 * 90, canvasHeight / 100 * 79);
  pop();
}

function startClick() {
  buttonStart.hide();
  buttonDraw.show();
  state = 'title1';
  guiDiv.show();
}

function drawClick() {
  buttonDraw.hide();
  state = 'load';
  // setup MediaPipe model
  handposeSetup();
}

function load() {
  background(255);
  push();
  textSize(canvasWidth / 8);
  textFont(titleFont);
  textAlign(CENTER, CENTER);
  text(`LOADING...`, canvasWidth / 2, canvasHeight / 2);
  pop();
}

// display video feed, GUI and graphic element, store & update hand predictions
function sim() {
  // display mirrored video feed
  displayVideo();
  // display graphic element (not conditional on hand being present)
  image(trailBlazer, 0, 0);
  // update GUI slider values
  updateGuiValues();
  // send handpose model results to hand object & update
  hand.predictions = predictions;
  hand.update();
}

// display mirrored grayscale video feed
function displayVideo() {
  push();
  // mirror video feed
  translate(width,0);
  scale(-1, 1);
  // display video feed
  image(capture, 0, 0, width, height);
  pop();
  // apply grayscale image filter
  filter(GRAY);
}

// update trail styling based on slider values
function updateGuiValues() {
  hand.color.r = sliderColR.slider("value");
  hand.color.g = sliderColG.slider("value");
  hand.color.b = sliderColB.slider("value");
  hand.size = sliderSize.slider("value");

}

// keyboard controls for BLE connection and functionality debugging
function keyPressed() {
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
  guiDiv.css("display", "none");
  // trigger countdown and screenshot
  photoboothEffect();
}

// create photobooth effect with countdown and flash
function photoboothEffect() {
  // set countdown duration to three seconds
  let seconds = 3;
  // create interval to iterate through GUI countdown
  let photoboothCountdown = setInterval( () => {
    // when countdown over, clear the interval & take screenshot
    if (seconds <= 0){
      // clear countdown interval
      clearInterval(photoboothCountdown);
      // take screenshot and upload to server
      uploadToServer();
      // flash effect
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

// flash effect using opacity fading
function flashEffect() {
  flashDiv.fadeTo(100, 0.7);
  flashDiv.fadeOut(100);
}

// take screenshot, send to server and generate QR code with echoed URL
function uploadToServer() {
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
      let imageURL = `http://hybrid.concordia.ca/i_planch/CART263/proj02_telomatic/${response}`;
      // generate QR code from image URL
      generateQRCode(imageURL);
    },
    // helper function
    error: function() { console.log("error occurred"); }
  });
}

function generateQRCode(url) {
  // clear contents of QR code div; if a code has already been generated, removes it
  qrDiv.html("");
  // DEBUGGING: output headed image URL to console
  console.log(url);
  // make styled QR code with headed image URL
  let qrcode = new QRCode("qrCodeDiv", {
    text: url,
    width: height/2,
    height: height/2,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
  // display div QR code is appended to
    qrDiv.css("display", "block");
  // create 10s timeout for QR display and GUI hiding
  resetGUI = setTimeout( () => { resetGUIElements(); }, 10000);
}

// hide QR code div and re-display GUI elements
function resetGUIElements() {
  qrDiv.css("display", "none");
  guiDiv.css("display", "block");
  qrTrig = false;
}
