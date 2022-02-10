// defines simulation states (loading or running)
let state = `loading`;
let startButton;
// holds score for current game as well as high score
let gameScore, highScore;
// holds loadscreen typewriter effect
let loadType;
// holds webcam feed and handpose object
let video, handpose;
// holds current set of handpose predictions
let predictions = [];
// holds bubble objects
let bubbles = [];
// tool information
let pin = new Pin();
let scissors = new Scissors();
let blower = new Blower();
let tools = [pin, scissors, blower];
let toolIndex = 0;
let tool = tools[toolIndex];
let toolSwitched = false;

/* initialize scores, create canvas, webcam feed and handpose object, start bubble maker */
function setup() {
  // load scoring data
  gameScore = 0;
  highScore = localStorage.getItem(`bubble+-highscore`) ?? 0;
  // create canvas
  createCanvas(640, 480);
  // create startButton
  startButton
  // create loading typewriter effect
  loadType = new Typewriter(`LOADING...`, width / 2, height / 2, 48, 350, 200, 0.1);
  // create webcam feed, hide display
  video = createCapture(VIDEO);
  video.hide();
  // initialize handpose object
  handpose = ml5.handpose(video, { flipHorizontal: true }, () => { state = `title`; } );
  handpose.on(`predict`, (results) => { predictions = results; } );
  // initialize bubble maker
  setInterval( () => {
    let newBubble = new Bubble();
    bubbles.push(newBubble);
  }, 3000);
}

/* run loading sequence or simulation */
function draw() {
  background(125);
  switch (state) {
    case `loading`: load(); break;
    case `title`: title(); break;
    case `running`: sim(); break;
  }
}

// loading sequence until handpose object is initialized
function load() {
  loadType.update();
}

// title sequence until user consents
function title() {
  startButton = createButton('Click to Start');
  startButton.position(width / 2, height / 2);
  startButton.mousePressed( () => { startButton.hide(); state = `running`; } );
  writeTitle(`POP THE BUBBLES`);
  writeSubtitle(`
  Use the webcam and your hand to pop the bubbles.
  Change tools by closing your fist.
  Needle: Use your index fingertip as a needle to stab the bubble
  Scissors: Use your index and middle fingers as scissors to cut it
  Bellows: Use your middle finger to blow it up until it explodes`);
}

// simulation sequence once handpose object is initialized
function sim() {
  // debugging/uncomment - display webcam image
  // image(ml5.flipImage(video), 0, 0, width, height);

  // check for hand
  if (predictions.length > 0) {
    // pass hand position values to tool object
    tool.coordinates = predictions[0];
    // debugging/uncomment - display skeleton of handpose
    // tool.drawSkeleton();
    // update tool position, check for specific gestures and display
    tool.update();
    // if hand is a fist, change tool
    if(tool.isFist) { changeTool(); }
  }

  // cycle through bubbles to update and check for tool interactions
  for (let i = 0; i < bubbles.length; i++) {
    // update bubble position and display
    bubbles[i].update();
    // check for interation between bubble and tool
    if (tool.checkInteraction(bubbles[i])) { resolveInteraction(bubbles[i]); }
  }
  // display current game score and highscore
  displayScores();
}

function changeTool() {
    if (!toolSwitched) {
      toolIndex++;
      if (toolIndex === 3) { toolIndex = 0; }
      tool = tools[toolIndex];
      toolSwitched = true;
      setTimeout( () => { toolSwitched = false; }, 1000);
    }
}

function resolveInteraction(bubble) {
    // remove bubble from array
    bubbles.splice(bubbles.indexOf(bubble),1);
    // increment score
    gameScore++;
    // check and update highscore if current score higher
    checkScore();
}

function displayScores() {
  // display current game score
  push();
  fill(255);
  textAlign(RIGHT,TOP);
  textSize(32);
  text(gameScore, width - width/8, height/8);
  pop();
  // display highscore
  push();
  fill(255);
  textAlign(LEFT,TOP);
  textSize(32);
  text(highScore, width/8, height/8);
  pop();
}

function checkScore() {
  // check if current game score exceeds previous highscore
  if (gameScore > highScore) {
    // update highscore and save it to local storage
    highScore = gameScore;
    localStorage.setItem(`bubble+-highscore`, highScore);
  }
}

// write subtitle two thirdways down the page in smaller grey letters
function writeTitle(toWrite) {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  textStyle(BOLD);
  fill(200);
  stroke(0);
  strokeWeight(2);
  text(toWrite, width / 2, height / 3);
  pop();
}

// write text halfway down the page in small black letters
function writeSubtitle(toWrite) {
  push();
  textAlign(LEFT, CENTER);
  textSize(20);
  fill(0);
  text(toWrite, 0, 2 * height / 3);
  pop();
}
