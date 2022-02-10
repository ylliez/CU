// defines simulation states (loading or running)
let state = `loading`;
// holds webcam feed
let video;
// holds handpose object
let handpose;
// holds current set of handpose predictions
let predictions = [];
// holds tool objects;
let hand, tool, pin, scissors, blower;
// Information for bubbles
let createdBubble, checkedBubble;
let bubbles = [];
// holds score for current game as well as high score
let gameScore, highScore;
// holds loadscreen typewriter effect
let loadType;

let toolSwitched = false;
let toolIndex = 0;


/**
create canvas, create webcam feed, load highscore data, initialize handpose obecjts, create bubble
*/
function setup() {
  // create canvas
  createCanvas(640,480);
  // create loading typewriter effect
  loadType = new Typewriter(`LOADING...`, width / 2, height / 2, 48, 350, 200, 0.1);
  // create webcam feed, hide display
  video = createCapture(VIDEO);
  video.hide();
  // load scoring data
  gameScore = 0;
  highScore = localStorage.getItem(`bubble+-highscore`) ?? 0;
  // initialize handpose object
  handpose = ml5.handpose(video, { flipHorizontal: true }, () => { state = `running`; } );
  handpose.on(`predict`, (results) => { predictions = results; } );
  // create tools
  pin = new Pin();
  scissors = new Scissors();
  hand = new Hand();
  tool = pin;
  setInterval( () => {
    createdBubble = new Bubble();
    bubbles.push(createdBubble);
  }, 3000);
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
  loadType.update();
}

function sim() {
  // let flippedVideo = ml5.flipImage(video);
  // image(flippedVideo, 0, 0, width, height);

  if (predictions.length > 0) {
    tool.coordinates = predictions[0];
    // uncomment to display skeleton of handpose
    // tool.drawSkeleton();
    tool.update();
    updateTool();
  }

  // update bubbles and check for tool interactions
  for (let i = 0; i < bubbles.length; i++) {
    // update bubble position and display
    bubbles[i].update();
    if (tool.checkInteraction(bubbles[i])) { resolveBubble(bubbles[i]); }
  }


  displayScores();

  // drawKeypoints();
}

// function drawKeypoints() {
//   let tester =[];
//    tester = predictions[0];
//     for (let j = 0; j < tester.landmarks.length; j += 1) {
//       const keypoint = tester.landmarks[j];
//       fill(0, 255, 0);
//       noStroke();
//       ellipse(keypoint[0], keypoint[1], 10, 10);
//   }
// }

function resolveBubble(bubble) {
  bubbles.splice(bubbles.indexOf(bubble),1);
  gameScore++;
  checkScore();
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

function updateTool() {
  if(tool.isFist) {
    if (!toolSwitched) {
      console.log(`switch!!!`);
      toolIndex++;
      switch (toolIndex) {
        case 0: tool = pin; break;
        case 1: tool = scissors; break;
        case 2: tool = pin; toolIndex = 0; break;
      }
      toolSwitched = true;
    }
    setTimeout( () => { console.log(`reset`); toolSwitched = false; }, 2000);
  }
}
