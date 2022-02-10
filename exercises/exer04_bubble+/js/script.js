// defines simulation states (loading or running)
let state = `loading`;
// holds webcam feed
let video;
// holds handpose object
let handpose;
// holds current set of handpose predictions
let predictions = [];
// holds tool objects;
let tool, fist, pin, scissors, blower;
// Information for bubbles
let createdBubble, checkedBubble;
let bubbles = [];
// holds score for current game as well as high score
let gameScore = 0;
let highScore = 0;
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
  // load highscore data
  highScore = localStorage.getItem(`bubble+-highscore`) ?? 0;
  // initialize handpose object
  handpose = ml5.handpose(video, { flipHorizontal: true }, () => { state = `running`; } );
  handpose.on(`predict`, (results) => { predictions = results; console.log(predictions); } );
  // create tools
  pin = new Pin();
  scissors = new Scissors();
  fist = new Fist();
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

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();

    if (predictions.length > 0) {
      fist.coordinates = predictions[0];
      checkTool();
      tool.coordinates = predictions[0];
      tool.update();
      if (tool === pin && pin.checkPop(bubbles[i].x, bubbles[i].y, bubbles[i].size)) { resolveBubble(bubbles[i]); }
      else if (tool === scissors && scissors.checkSnip(bubbles[i].x, bubbles[i].y)) { resolveBubble(bubbles[i]); }
    }
  }


  displayScores();

  // drawKeypoints();
}

function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const hand = predictions[i];
    for (let j = 0; j < hand.landmarks.length; j += 1) {
      const keypoint = hand.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      ellipse(keypoint[0], keypoint[1], 10, 10);
    }
  }
}

function resolveBubble(bubble) {
  bubbles.splice(bubbles.indexOf(bubble),1);
  gameScore++;
  checkScore();
}

// function checkSnip(bubble) {
//   let hit = collidePointTriangle(bubble.x, bubble.y, scissors.average.base.x, scissors.average.base.y, scissors.index.tip.x, scissors.index.tip.y, scissors.middle.tip.x, scissors.middle.tip.y);
//   if (hit) {
//     let targeted = true;
//     setTimeout( () => { targeted = false; }, 1000);
//     if (targeted && (scissors.t2t <= (scissors.b2b * 1.2)) && hit) { resolveBubble(bubble); }
//   }
// }


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

function checkTool() {
  if(fist.checkFist()) {
    console.log(`FIST!!!`);
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

/* functional pre-multibubble!! */
// // defines simulation states (loading or running)
// let state = `loading`;
// // holds webcam feed
// let video;
// // holds handpose object
// let handpose;
// // holds current set of handpose predictions
// let predictions = [];
// // holds bubble and pin objects;
// let bubble, tool, fist, pin, scissors;
// // holds score for current game as well as high score
// let gameScore = 0;
// let highScore = 0;
// // holds loadscreen typewriter effect
// let loadType;
//
// let toolSwitched = false;
// let toolIndex = 0;
//
//
// /**
// create canvas, create webcam feed, load highscore data, initialize handpose obecjts, create bubble
// */
// function setup() {
//   // create canvas
//   createCanvas(640,480);
//   // create loading typewriter effect
//   loadType = new Typewriter(`LOADING...`, width / 2, height / 2, 48, 350, 200, 0.1);
//   // create webcam feed, hide display
//   video = createCapture(VIDEO);
//   video.hide();
//   // load highscore data
//   highScore = localStorage.getItem(`bubble+-highscore`) ?? 0;
//   // initialize handpose object
//   handpose = ml5.handpose(video, { flipHorizontal: true }, () => { state = `running`; } );
//   handpose.on(`predict`, (results) => { predictions = results; console.log(predictions); } );
//   // create bubble
//   bubble = new Bubble();
//   pin = new Pin();
//   scissors = new Scissors();
//   fist = new Fist();
//   tool = pin;
// }
//
//
// /**
// Description of draw()
// */
// function draw() {
//   background(125);
//   switch (state) {
//     case `loading`: load(); break;
//     case `running`: sim(); break;
//   }
// }
//
// function load() {
//   loadType.update();
// }
//
// function sim() {
//   // let flippedVideo = ml5.flipImage(video);
//   // image(flippedVideo, 0, 0, width, height);
//   if (predictions.length > 0) {
//     fist.coordinates = predictions[0];
//     checkTool();
//     tool.coordinates = predictions[0];
//     tool.update();
//     if (tool === scissors)
//       checkSnip();
//     else
//       checkPop();
//
//   }
//
//   bubble.update();
//
//   displayScores();
//
//   // drawKeypoints();
// }
//
// function drawKeypoints() {
//   for (let i = 0; i < predictions.length; i += 1) {
//     const hand = predictions[i];
//     for (let j = 0; j < hand.landmarks.length; j += 1) {
//       const keypoint = hand.landmarks[j];
//       fill(0, 255, 0);
//       noStroke();
//       ellipse(keypoint[0], keypoint[1], 10, 10);
//     }
//   }
// }
//
// function resolveBubble() {
//   bubble.x = random(width);
//   bubble.y = height;
// }
//
// function checkPop() {
//   let d = dist(pin.tip.x, pin.tip.y, bubble.x, bubble.y);
//   if (d < bubble.size / 2) {
//     resolveBubble();
//     gameScore++;
//     checkScore();
//   }
// }
//
// function checkSnip() {
//   var hit = collidePointTriangle(bubble.x, bubble.y, scissors.average.base.x, scissors.average.base.y, scissors.index.tip.x, scissors.index.tip.y, scissors.middle.tip.x, scissors.middle.tip.y);
//   if (hit) {
//     let targeted = true;
//     setTimeout( () => { targeted = false; }, 1000);
//     if (targeted && (scissors.t2t <= (scissors.b2b * 1.2)) && hit) {
//       resolveBubble();
//       gameScore++;
//       checkScore();
//     }
//   }
// }
//
//
// function displayScores() {
//   push();
//   fill(255);
//   textAlign(RIGHT,TOP);
//   textSize(32);
//   text(gameScore, width - width/8, height/8);
//   pop();
//   push();
//   fill(255);
//   textAlign(LEFT,TOP);
//   textSize(32);
//   text(highScore, width/8, height/8);
//   pop();
// }
//
// // check if current game score exceeds previous highscore, if so update highscore and save it to local storage
// function checkScore() {
//   if (gameScore > highScore) {
//     highScore = gameScore;
//     localStorage.setItem(`bubble+-highscore`, highScore);
//   }
// }
//
// function checkTool() {
//   if(fist.checkFist()) {
//     console.log(`FIST!!!`);
//     if (!toolSwitched) {
//       console.log(`switch!!!`);
//       toolIndex++;
//       switch (toolIndex) {
//         case 0: tool = pin; break;
//         case 1: tool = scissors; break;
//         case 2: tool = pin; toolIndex = 0; break;
//       }
//       toolSwitched = true;
//     }
//     setTimeout( () => { console.log(`reset`); toolSwitched = false; }, 2000);
//   }
// }
