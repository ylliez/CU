
let state = `loading`;
let video;
let handpose;
let predictions = [];
let bubble;
let baseX, baseY, tipX, tipY;
let gameScore = 0;
let highScore = 0;


/**
Description of setup
*/
function setup() {
  createCanvas(640,480);

  video = createCapture(VIDEO);
  video.hide();

  let data = JSON.parse(localStorage.getItem(`bubble+-highscore`));
  // Check if there's anything there
  if (data !== null) {
    // There is data! So replace our default game data with the save data
    highScore = data;
  }

  handpose = ml5.handpose(video, { flipHorizontal: true }, () => { state = `running`; } );

  handpose.on(`predict`, (results) => { predictions = results; } );

  bubble = new Bubble();
}


/**
Description of draw()
*/
function draw() {
  background(125);
  switch (state) {
    case `loading`:
      load();
      break;
    case `running`:
      sim();
      break;
    default:

  }
}

function load() {
  push();
  textAlign(CENTER, CENTER);
  textSize(64);
  fill(200, 100, 200);
  stroke(0);
  strokeWeight(2);
  text(`LOADING...`, height / 2, width / 2);
  pop();
}

function sim() {
  if (predictions.length > 0) {
    let hand = predictions[0];
    pinHand(hand);
    checkPop();
  }

  bubble.update();

  displayScores();
}

function resetBubble() {
  bubble.x = random(width);
  bubble.y = height;
}

function pinHand(hand) {
  baseX = hand.annotations.indexFinger[0][0];
  baseY = hand.annotations.indexFinger[0][1];
  tipX = hand.annotations.indexFinger[3][0];
  tipY = hand.annotations.indexFinger[3][1];

  push();
  line(baseX, baseY, tipX, tipY);
  pop();

  push();
  fill(255, 0, 0);
  circle(baseX, baseY, 10, 10);
  pop();
}

function checkPop() {
  let d = dist(tipX, tipY, bubble.x, bubble.y);
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


function checkScore() {
  if (gameScore > highScore) {
    // Set the new high score
    highScore = gameScore;
    // Save the game data to remember for next time, remembering to stringify the data first
    localStorage.setItem(`bubble+-highscore`, JSON.stringify(highScore));
  }
}
