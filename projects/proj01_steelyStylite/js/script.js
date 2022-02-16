"use strict";

// program state (loading, running)
let state = `loading`;
// user webcam feed
let video;
// handpose object
let handpose;
// current set of predictions made by Handpose once it's running
let predictions = [];
let index;
// graphics elements for drawing overlay
let trailBlazer;

// images
let numImages = 83;
let introFrame = 0;
let closeUpFrame = 32;
const ImgFilepath = `BCBuñuel-`;
let images = [];

let bladeTop, bladeBottom;

// start button
let startButton;

function preload() {
  for (let i = 0; i < numImages; i++) {
    let loadedImage = loadImage(`assets/images/${ImgFilepath}${i}.png`);
    images.push(loadedImage);
  }
}

function setup() {
  createCanvas(windowWidth, windowWidth/2);
  // createCanvas(500, 238);
  // createCanvas(1000, 476);
  background(0);

  // Start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // start the Handpose model and switch to our running state when it loads
  handpose = ml5.handpose(video, { flipHorizontal: true }, () => { initialize() });

  // listen for prediction events from Handpose and store the results in our predictions array when they occur
  handpose.on(`predict`, (results) => { predictions = results; });

  index = new Index();
  trailBlazer = createGraphics(width, height);


  // startButton = createButton(`START`);
  console.log(document.getElementById("startButton").style.display);
  // startButton.position(width/2, height/2);
}

/**
Handles the two states of the program: loading, running
*/
function draw() {
  switch (state) {
    case `loading`: loading(); break;
    case `init`: break;
    case `running`: running(); break;
  }
}

/**
Displays a simple loading screen with the loading model's name
*/
function loading() {
  background(0);

  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill(255);
  text(`Loading...`, width / 2, height / 2);
  pop();
}

function initialize() {
  state = `init`;
  background(0);
  document.getElementById("startButton").style.display = "block";
}

function playIntro() {
  document.getElementById("startButton").style.display = "none";
  setInterval(() => { playFrame(); }, 3.33);
}

function playFrame() {
  if (introFrame < closeUpFrame) {
    image(images[introFrame], 0, 0, width, height);
    introFrame++;
  }
  else { state = `running`; }
}

function running() {
  // Display the webcam with reveresd image so it's a mirror
  // let flippedVideo = ml5.flipImage(video);
  // image(flippedVideo, 0, 0, width, height);

  // startButton.draw();

  // Check if there currently predictions to display
  if (predictions.length > 0) {
    index.coordinates = predictions[0];
    index.coordinate(width,height);
  }

  line(0,height/2,width,height/2);
  line(0,2*height/3,width,2*height/3);
  line(3*width/4,0,3*width/4,height)
  // if (index.tip.y/480*height < 2*height/3 && index.tip.y/480*height > height/2) {
  if (index.tip.y < 2*height/3 && index.tip.y > height/2 && index.tip.x > 3*width/4) {
    drawIndexTip();
    // image(images[introFrame], 0, 0, width, height);
  }
}

//
function drawIndexTip() {
  trailBlazer.push();
  trailBlazer.stroke(255,0,0);
  trailBlazer.strokeWeight(3);
  // trailBlazer.line(index.prev.x/640*width, index.prev.y/480*height, index.tip.x, index.tip.y/480*height);
  trailBlazer.line(index.prev.x, index.prev.y, index.tip.x, index.tip.y);
  trailBlazer.pop();
  image(trailBlazer, 0, 0);
}
