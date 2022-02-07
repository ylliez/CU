// defines simulation states (loading or running)
let state = `loading`;
// holds webcam feed
let video;
// holds handpose object
let handpose;
// holds current set of handpose predictions
let predictions = [];
// holds bubble and pin objects;
let bubble, pin;
// holds score for current game as well as high score
let gameScore = 0;
let highScore = 0;
// holds loadscreen typewriter effect variables
let loadString = `LOADING...`;
let currentCharacter = 0;
let currentString;


/**
create canvas, create webcam feed, load highscore data, initialize handpose obecjts, create bubble
*/
function setup() {
  // create canvas
  createCanvas(640,480);
  // create webcam feed, hide display
  video = createCapture(VIDEO);
  video.hide();
  // load highscore data
  highScore = localStorage.getItem(`bubble+-highscore`) ?? 0;
  // initialize handpose object
  handpose = ml5.handpose(video, { flipHorizontal: true }, () => { state = `running`; } );
  handpose.on(`predict`, (results) => { predictions = results; } );
  // create bubble
  bubble = new Bubble();
  pin = new Pin();
}


/**
Description of draw()
*/
function draw() {
  background(125);
  switch (state) {
    case `loading`: load(); break;
    case `running`: sim(); break;
  }
}

function load() {
  typeLoad();
}

function sim() {
  if (predictions.length > 0) {
    pin.coordinates = predictions[0];
    pin.coordinate();
    pin.update();
    checkPop();
  }

  bubble.update();

  displayScores();
}

function resetBubble() {
  bubble.x = random(width);
  bubble.y = height;
}

function checkPop() {
  let d = dist(pin.tip.x, pin.tip.y, bubble.x, bubble.y);
  if (d < bubble.size / 2) {
    resetBubble();
    gameScore++;
    checkScore();
  }
}

function displayScores() {
  push();
  fill(255);
  textAlign(RIGHT,TOP);
  textSize(32);
  text(gameScore, width - width/8, height/8);
  pop();
  push();
  fill(255);
  textAlign(LEFT,TOP);
  textSize(32);
  text(highScore, width/8, height/8);
  pop();
}

// check if current game score exceeds previous highscore, if so update highscore and save it to local storage
function checkScore() {
  if (gameScore > highScore) {
    highScore = gameScore;
    localStorage.setItem(`bubble+-highscore`, highScore);
  }
}

function typeLoad() {
  currentString = loadString.substring(0, currentCharacter);
  push();
  textAlign(LEFT, TOP);
  textSize(64);
  textFont(`Courier`);
  text(currentString, height / 2, width / 2);
  pop();
  // currentCharacter += 0.1;
  // currentCharacter = (currentCharacter >= loadString.length) ? (currentCharacter + 0.1) : 0;
  if (currentCharacter >= loadString.length)
    currentCharacter = 0;
  else
    currentCharacter += 0.1;
}
