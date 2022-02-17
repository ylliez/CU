"use strict";

// program state (loading, running)
let state = `pre`;

// images
let imgDesierto, imgDel, imgSimSimon;
let simonX, simonY;

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
let balance, rotation;

// load images and instructions from assets
function preload() {
  imgDesierto = loadImage(`assets/images/desierto.png`);
  imgDel = loadImage(`assets/images/del.png`);
  imgSimSimon = loadImage(`assets/images/simon.png`);
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
  image(imgDesierto, 0, 0, width, height);
  switch (state) {
    case `pre`: pre(); break;
    case `title`: title(); break;
    case `sim`: sim(); break;
    case `fall`: fall(); break;
  }
}

// wait for poseNet load
function pre() {
  // display loading text with typewriter effect
  if (!poseNetInit || !loadMin) { typeLoad(); }
  // display title text & instructions
  else { state = `title`; }
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

function title() {
  displayTitle(`STEELY`, width / 4);
  displayTitle(`STYLITE`, 3 * width / 4);
  // display foreground image
  image(imgDel, 0, 0, width, height);
  if (!buttonedUp) {
    document.getElementById("instructionsButton").style.display = "block";
    document.getElementById("startButton").style.display = "block";
    buttonedUp = true;
  }
}

function displayTitle(titleText, xPos) {
  push();
  translate(xPos, height / 6);
  textAlign(CENTER,CENTER);
  textFont(`Arial`);
  textSize(height/10);
  textStyle(BOLD);
  // display incrementally increasing substring
  text(titleText, 0, 0);
  pop();
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
  simonY = height / 6;
  state = `sim`;
}

function sim() {
  // DEBUG - display webcam
  // image(ml5.flipImage(video), 0, 0, width, height);

  // display background image
  image(imgDel, 0, 0, width, height);

  // check poseNet event
  assessPose();
}

function assessPose() {
  if (poses.length > 0) {
    pose.coordinates = poses[0];
    pose.update();
    balance = pose.checkBalanceShoulders();
    if (abs(balance) <= 30) { positionSymeon(); }
    else { state = `fall`; }
  }
}

function positionSymeon() {
  push();
  translate(width / 1.9, simonY);
  rotation = map(balance, -100, 100, -PI/2, PI/2);
  rotate(rotation);
  imageMode(CENTER);
  image(imgSimSimon, 0, 0, width/12, height/6);
  pop();
}

function fall() {
  if (simonY < height) {
    simonY += 3;
    if (balance > 0) { balance+=5; }
    else { balance-=5; }
    positionSymeon();
  }

}
