// //play sound
// let barkSFX;
//
// function preload() {
//   barkSFX = loadSound(`assets/sounds/bark.wav`);
// }
//
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
// }
//
// function mousePressed() {
//   barkSFX.play();
// }

//play sound on loop
let music;

function preload() {
  music = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
}

function mousePressed() {
  tryMusic();
}

function keyPressed() {
  tryMusic();
}

function tryMusic() {
  // Play music if this is the first interaction
  if (!music.isPlaying()) {
    music.loop();
  }
}
