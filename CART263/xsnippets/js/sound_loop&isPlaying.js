let music;

function preload() {
  music = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
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
