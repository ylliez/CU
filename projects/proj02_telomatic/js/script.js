let state = `loading`;
let video;
let handpose;
let predictions = [];
let baseX, baseY, tipX, tipY;


/**
Description of setup
*/
function setup() {
  createCanvas(640,480);

  video = createCapture(VIDEO);
  video.hide();

  handpose = ml5.handpose(video, { flipHorizontal: true }, () => { state = `running`; } );

  handpose.on(`predict`, (results) => { predictions = results; } );
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
  }
}

function pinHand(hand) {
  baseX = hand.annotations.indexFinger[0][0];
  baseY = hand.annotations.indexFinger[0][1];
  tipX = hand.annotations.indexFinger[3][0];
  tipY = hand.annotations.indexFinger[3][1];

  push();
  fill(255, 0, 0);
  circle(tipX, tipY, 10, 10);
  pop();
}

}
