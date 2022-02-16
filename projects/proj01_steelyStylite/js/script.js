"use strict";

// program state (loading, running)
let state = `loading`;
// holds loadscreen typewriter effect
let loadString = `LOADING...`;
let currentCharacter = 0;
let currentString;
// user webcam feed & handpose object
let video;
// handpose object
let handpose;
let ml5Initialized = false;
// current set of predictions made by Handpose once it's running
let predictions = [];
let index;

// images
let imgDesierto, imgSimon;

// start button
let startButton;

function preload() {
  imgDesierto = loadImage(`assets/images/sdd_desierto.png`);
  imgSimon = loadImage(`assets/images/sdd_simon.png`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(500, 238);
  // createCanvas(1000, 476);
  background(0);

  // Start webcam and hide the resulting HTML element
  // video = createCapture(VIDEO);
  // video.hide();
  //
  // // start the Handpose model and switch to our running state when it loads
  // // handpose = ml5.handpose(video, { flipHorizontal: true }, () => { ml5Initialized = true; });
  // handpose = ml5.handpose(video, { flipHorizontal: true }, () => {  });
  //
  // // listen for prediction events from Handpose and store the results in our predictions array when they occur
  // handpose.on(`predict`, (results) => { predictions = results; });

}

/**
Handles the two states of the program: loading, running
*/
function draw() {
  switch (state) {
    case `loading`: loading(); break;
    case `running`: running(); break;
  }
}

/**
Displays a simple loading screen with the loading model's name
*/
function loading() {
  background(0);
  image(imgDesierto, 0, 0, width, height);

  if (!ml5Initialized) {
    // display loading text with typewriter effect
    typeLoad();
  }
  else {
    // display title text & instructions
    titleLoad();
  }
}

function typeLoad() {
  // set incrementally increasing substring to print
  currentString = loadString.substring(0, currentCharacter);
  push();
  // position to image element
  translate(width / 2, height);
  rotate(3*PI/2);
  textAlign(LEFT,BOTTOM);
  textFont(`Arial`);
  textSize(height/10);
  textStyle(BOLD);
  // display incrementally increasing substring
  // text(currentString, height / 12, -width / 80);
  text(currentString, height / 12, width / 50);
  // text(currentString, height / 12, 0);
  pop();
  // increment or wrap substring boundary
  if (currentCharacter <= loadString.length + 2) { currentCharacter += 0.1; }
  else { currentCharacter = -2; }
}

function titleLoad() {
  image(imgSimon, 0, 0, width, height);
  document.getElementById("startButton").style.display = "block";
}

function initialize() {
  state = `running`;
}

// function playIntro() {
//   document.getElementById("startButton").style.display = "none";
//   setInterval(() => { playFrame(); }, 3.33);
// }

// function playFrame() {
//   if (introFrame < closeUpFrame) {
//     image(images[introFrame], 0, 0, width, height);
//     introFrame++;
//   }
//   else { state = `running`; }
// }
//
// function running() {
//   // Display the webcam with reveresd image so it's a mirror
//   // let flippedVideo = ml5.flipImage(video);
//   // image(flippedVideo, 0, 0, width, height);
//
//   // startButton.draw();
//
//   // Check if there currently predictions to display
//   if (predictions.length > 0) {
//     index.coordinates = predictions[0];
//     index.coordinate(width,height);
//   }
//
//   line(0,height/2,width,height/2);
//   line(0,2*height/3,width,2*height/3);
//   line(3*width/4,0,3*width/4,height)
//   // if (index.tip.y/480*height < 2*height/3 && index.tip.y/480*height > height/2) {
//   if (index.tip.y < 2*height/3 && index.tip.y > height/2 && index.tip.x > 3*width/4) {
//     drawIndexTip();
//     // image(images[introFrame], 0, 0, width, height);
//   }
// }
//
// //
// function drawIndexTip() {
//   trailBlazer.push();
//   trailBlazer.stroke(255,0,0);
//   trailBlazer.strokeWeight(3);
//   // trailBlazer.line(index.prev.x/640*width, index.prev.y/480*height, index.tip.x, index.tip.y/480*height);
//   trailBlazer.line(index.prev.x, index.prev.y, index.tip.x, index.tip.y);
//   trailBlazer.pop();
//   image(trailBlazer, 0, 0);
// }
