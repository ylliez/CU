"use strict";

// program state (loading, running)
let state = `pre`;

// images
let imgDesierto, imgSimon, imgSimSimon;

// loading page
let loadString = `LOADING...`;
let loadMin = false;
let currentCharacter = 0;
let currentString;

// instructions page
let instructionsObj;
let instructionsKey = [];
let instructions = [];
let instructionsPage = 0;
let buttonedUp = false;

// posture recognition
let video, poseNet;
let poseNetInit = false;
let poses = [];
let pose;
let balance;

// load images and instructions from assets
function preload() {
  imgDesierto = loadImage(`assets/images/sdd_desierto.png`);
  imgSimon = loadImage(`assets/images/sdd_simon.png`);
  imgSimSimon = loadImage(`assets/images/sdd_simSimon.png`);
  instructionsObj = loadJSON("assets/data/instructions.json");
}

// setup canvas, instructions and posture recognition
function setup() {
  createCanvas(windowWidth, windowHeight); // createCanvas(1600, 900);

  // load instructions array
  instructionsKey = Object.keys(instructionsObj);
  for (let i = 0; i < instructionsKey.length; i++) {
    instructions[i] = instructionsObj[instructionsKey[i]];
  }

  // start webcam and hide resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // start poseNet model and signal when loaded
  poseNet = ml5.poseNet(video, { flipHorizontal: true }, () => { poseNetInit = true; });
  // DEBUG - shortcircuit poseNet
  // setTimeout( () => { poseNetInit = true; }, 2000);

  // listen for pose events from poseNet and store the results in poses array
  poseNet.on(`pose`, (results) => { poses = results; });

  // instantiate Pose object for poseNet manipulations
  pose = new Pose();

}

// main function
function draw() {
  switch (state) {
    case `pre`: pre(); break;
    case `sim`: sim(); break;
  }
}

// loading state: draw background image and wait for poseNet load
function pre() {
  // draw background image
  image(imgDesierto, 0, 0, width, height);

  // DEBUG - print conditions
  // console.log(`${!poseNetInit} || ${!Min} = ${!poseNetInit || !loadMin}`);
  // display loading text with typewriter effect
  if (!poseNetInit || !loadMin) { typeLoad(); }
  // display title text & instructions
  else { titleLoad(); }
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
  // display fireground image
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
  // DEBUG - display webcam
  // image(ml5.flipImage(video), 0, 0, width, height);

  // display background image
  image(imgDesierto, 0, 0, width, height);
  image(imgSimon, 0, 0, width, height);

  // check poseNet event
  assessPose();
}

function assessPose() {
  if (poses.length > 0) {
    pose.coordinates = poses[0];
    pose.update();
    balance = pose.checkBalanceShoulders();
    if (abs(balance) <= 10) { balanceSymeon(); }
    else { console.log(`YOU FELL`); }
  }
}

function balanceSymeon() {
  let rotation = map(balance, 0, 100, 0, PI/2);
  push();
  translate(width / 1.9, height / 6);
  rotate(rotation);
  imageMode(CENTER);
  image(imgSimSimon, 0, 0, width/12, height/6);
  pop();
}
