"use strict";

// program state (loading, running)
let state = `pre`;
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
// user webcam feed & poseNet object
let video;
// poseNet object
let poseNet;
let ml5Initialized = false;
// current set of pose made by poseNet once it's running
let pose = [];
let index;// graphics elements for drawing overlay
let trailBlazer;

// images
let imgDesierto, imgSimon;

function preload() {
  imgDesierto = loadImage(`assets/images/sdd_desierto.png`);
  imgSimon = loadImage(`assets/images/sdd_simon.png`);
  instructionsObj = loadJSON("assets/data/instructions.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(1600, 900);

  // start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // start the poseNet model and signal when loads
  poseNet = ml5.poseNet(video, { flipHorizontal: true }, () => { ml5Initialized = true; });
  // DEBUG - short ml5
  // setTimeout( () => { ml5Initialized = true; }, 2000);

  // listen for pose events from poseNet and store the results in pose array
  poseNet.on(`pose`, (results) => { pose = results; });

  index = new Index();
  trailBlazer = createGraphics(width, height);

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
    case `load`: load(); break;
    case `sim`: sim(); break;
  }
  line(0,height/2,width,height/2);
  line(width/4,0,width/4,height);
  line(width/3,0,width/3,height);
}

function load() {
  // draw background image
  image(imgDesierto, 0, 0, width, height);

  // DEBUG - print conditions
  // console.log(`${!ml5Initialized} || ${!Min} = ${!ml5Initialized || !loadMin}`);
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

function instructionsClicked() {
  document.getElementById("instructionsText").innerHTML = instructions[instructionsPage];
  document.getElementById("instructionsButton").style.display = "none";
  document.getElementById("startButton").style.display = "none";
  document.getElementById("instructionsText").style.display = "block";
  document.getElementById("okButton").style.display = "block";
}

function okClicked () {
  instructionsPage++;
  document.getElementById("instructionsText").innerHTML = instructions[instructionsPage];
  if (instructionsPage >= instructions.length - 1) {
    document.getElementById("okButton").style.display = "none";
    document.getElementById("startButton").style.display = "block";
  }
}

function startClicked() {
  document.getElementById("instructionsButton").style.display = "none";
  document.getElementById("startButton").style.display = "none";
  document.getElementById("instructionsText").style.display = "none";
  document.getElementById("okButton").style.display = "none";
  state = `sim`;
}

function sim() {
  // Display the webcam with reveresd image so it's a mirror
  let flippedVideo = ml5.flipImage(video);
  image(flippedVideo, 0, 0, width, height);

  console.log(pose);

  // Check if there currently pose to display
  // if (pose.length > 0) {
  //   index.coordinates = pose[0];
  //   index.coordinate(width,height);
  // }
  // drawIndexTip();
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
