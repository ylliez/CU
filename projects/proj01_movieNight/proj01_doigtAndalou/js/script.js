"use strict";

// program state (loading, running)
let state = `init`;
let introFinished = false;
let buttonedUp = false;

// images
const ImgFilepath = `BCBuñuel-`;
let numImages = 83;
let images = [];
let introFrame = 0;
let closeUpFrame = 32;

// loading page
let loadString = `LOADING...`;
let loadMin = false;
let currentCharacter = 0;
let currentString;

// ml5 hand recognition
let video, handpose;
let handposeLoaded = false;
let predictions = [];
let index;

// simulation action frame
let frameT, frameB, frameL, frameR;
let delta, frameToFrame;

function preload() {
  for (let i = 0; i < numImages; i++) {
    let loadedImage = loadImage(`assets/images/${ImgFilepath}${i}.png`);
    images.push(loadedImage);
  }
}

function setup() {
  createCanvas(windowWidth, windowWidth/2); // GIF dims 500x238
  background(0);
  image(images[0], 0, 0, width, height);
  document.getElementById("playButton").style.display = "block";

  // instantiate index object and set action frame
  index = new Index();
  frameT = height / 2;
  frameB = 2 * height / 3;
  frameL = 3 * width / 4;
  frameR = width;
}

// main function
function draw() {
  switch (state) {
    case `init`: break;
    case `title`: title(); break;
    case `sim`: sim(); break;
  }
}

function playClicked() {
  // hide start button
  document.getElementById("playButton").style.display = "none";

  setInterval(() => { playIntro(); }, 55.55);

  // start & hide webcam
  video = createCapture(VIDEO);
  video.hide();

  // start  Handpose model and signal when loaded
  handpose = ml5.handpose(video, { flipHorizontal: true }, () => { handposeLoaded = true; });
  handpose.on(`predict`, (results) => { predictions = results; });
}

function playIntro() {
  // display loading animation
  playFrame();
  // display loading text
  if (!handposeLoaded || !introFinished) { typeLoad(); }

  else { titleLoad(); }

}

function playFrame() {
  if (introFrame < closeUpFrame) {
    image(images[introFrame], 0, 0, width, height);
    introFrame++;
  }
  else { introFinished = true; }
}

function typeLoad() {
  // set incrementally increasing substring to print
  currentString = loadString.substring(0, currentCharacter);
  push();
  // position to image element
  translate(width / 3, height / 2);
  textAlign(LEFT,BOTTOM);
  textFont(`Arial`);
  textSize(height/10);
  textStyle(BOLD);
  fill(255 - currentCharacter / loadString.length * 255);
  // display incrementally increasing substring
  text(currentString, height / 12, width / 58);
  pop();
  // increment or wrap substring boundary
  if (currentCharacter <= loadString.length + 1) { currentCharacter += 1; }
  else { currentCharacter = 0; loadMin = true; }
}

function titleLoad() {
  // display background image
  image(images[closeUpFrame - 1], 0, 0, width, height);
  if (!buttonedUp) {
    document.getElementById("startButton").style.display = "block";
    document.getElementById("instructionsButton").style.display = "block";
    buttonedUp = true;
  }
}

function startClicked() {
  document.getElementById("instructionsButton").style.display = "none";
  document.getElementById("startButton").style.display = "none";
  document.getElementById("instructionsText").style.display = "none";
  state = `sim`;
}

function sim() {
  // DEBUG - display webcam
  // image(ml5.flipImage(video, 0, 0, width, height);

  checkHand();
}

function checkHand() {
  if (predictions.length > 0) {
    index.coordinates = predictions[0];
    index.coordinate(width,height);
    checkFrame();
  }
}

function checkFrame() {
  if (index.tip.y < frameB && index.tip.y > frameT && index.tip.x > frameL && index.tip.x < frameR) {
    
    fill(255, 0, 0);
    if (index.tip.x < index.prev.x) {
      delta = index.prev.x - index.tip.x;
      // console.log(`L:${floor(frameL)}, R:${floor(frameR)}, D:${floor(delta)}`);
      if (delta > 1) {
        frameToFrame = frameR - delta;
        // console.log(`F2F:${floor(frameToFrame)}`);
        frameToFrame = floor(map(frameToFrame, width, 0, closeUpFrame, numImages));
        console.log(`F2F:${frameToFrame}`);
        image(images[frameToFrame], 0, 0, width, height);
        frameL -= delta;
        frameR -= delta;
      }
    }
  }
  else {
    resetFrame();
    image(images[closeUpFrame], 0, 0, width, height);
    fill(255);
  }
  displayIndexTip();
  push();
  stroke(2);
  fill(0);
  line(frameL, 0, frameL, height);
  line(frameR, 0, frameR, height);
  pop();
}

function resetFrame() {
  frameL = 3 * width / 4;
  frameR = width;
}

function displayIndexTip() {
  noStroke();
  ellipse(index.tip.x, index.tip.y, 15, 15);
}
