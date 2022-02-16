"use strict";

// program state (loading, running)
let state = `loading`;
// loading
let loadString = `LOADING...`;
let loadMin = false;
let currentCharacter = 0;
let currentString;
// instructions
let instructionsObj;
let instructionsKey = [];
let instructions = [];
let instructionsPage = 0;
let buttonedUp = false;
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
  instructionsObj = loadJSON("assets/data/instructions.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(500, 238);
  // createCanvas(1000, 476);

  // Start webcam and hide the resulting HTML element
  // video = createCapture(VIDEO);
  // video.hide();

  // start the Handpose model and switch to our running state when it loads
  // handpose = ml5.handpose(video, { flipHorizontal: true }, () => { ml5Initialized = true; });
  setTimeout( () => { ml5Initialized = true; }, 2000);

  // listen for prediction events from Handpose and store the results in our predictions array when they occur
  // handpose.on(`predict`, (results) => { predictions = results; });

  instructionsKey = Object.keys(instructionsObj);
  for (let i = 0; i < instructionsKey.length; i++) {
    instructions[i] = instructionsObj[instructionsKey[i]];
  }

}

/**
Handles the two states of the program: loading, running
*/
function draw() {
  switch (state) {
    case `loading`: loading(); break;
    case `running`: running(); break;
  }
  line(0,height/2,width,height/2);
  line(width/4,0,width/4,height);
  line(width/3,0,width/3,height);
}

/* Load screen */
function loading() {
  // background(0);
  // draw background image
  image(imgDesierto, 0, 0, width, height);

  // debugging - load process
  // console.log(`${!ml5Initialized} || ${!loadMin} = ${!ml5Initialized || !loadMin}`);
  if (!ml5Initialized || !loadMin) {
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
  text(currentString, height / 12, width / 58);
  pop();
  // increment or wrap substring boundary
  if (currentCharacter <= loadString.length + 2) { currentCharacter += 0.1; }
  else { currentCharacter = -2; loadMin = true; }
}

function titleLoad() {
  image(imgSimon, 0, 0, width, height);
  if (!buttonedUp) {
    document.getElementById("instructionsButton").style.display = "block";
    document.getElementById("startButton").style.display = "block";
    buttonedUp = true;
  }
}

function startClicked() {
  document.getElementById("instructionsButton").style.display = "none";
  document.getElementById("startButton").style.display = "none";
  document.getElementById("instructionsText").style.display = "none";
  document.getElementById("okButton").style.display = "none";
}

function instructionsClicked() {
  document.getElementById("instructionsText").innerHTML = instructions[instructionsPage];
  document.getElementById("instructionsButton").style.display = "none";
  document.getElementById("startButton").style.display = "none";
  document.getElementById("instructionsText").style.display = "block";
  document.getElementById("okButton").style.display = "block";
}

function okClicked () {
  if (instructionsPage < instructions.length - 2) {
    instructionsPage++;
    document.getElementById("instructionsText").innerHTML = instructions[instructionsPage];
  }
  else {
    document.getElementById("okButton").style.display = "none";
    document.getElementById("startButton").style.display = "block";
  }
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
