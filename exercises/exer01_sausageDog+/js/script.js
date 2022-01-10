/**
Where's Sausage Dog? New Game+
illiez

zoological pictorial puzzle program
win by clicking on
*/

"use strict";

// declare global program variables (e.g. state, arrays, array sizes)
let state = 'title1';

let maxIndexes = [];
let imageIndexes = [];
let randomIndexes = [];
let genFilePath = [];
let displayFilePath = [];
let display = [];
let imagesFilePath = [];
let images = [];
let numImages = 10;
const MIN_NUM_IMAGES = 2;
const MAX_NUM_IMAGES = 11;
let animals = [];
let numAnimals = 100;
let angle = 0;

let randomIndex = undefined;
let indexOfRandom = undefined;
let randomImage = undefined;
let animalToFind = undefined;
let animalToFindImg = undefined;


// preloads images into animal array and animal to find
function preload() {
  selectDifficulty();
  loadArrayImages();
  spliceAndLoadRandom();
}

// select difficulty setting for game
function selectDifficulty() {
  // numImages = MIN_NUM_IMAGES;
}

// load random animal images into array (it hurts to know that there must be a one line solution to all this nonsense...)
function loadArrayImages() {
  // create array of possible image indexes
  for (var i = 0; i < MAX_NUM_IMAGES; i++) {
    maxIndexes[i] = i;
  }
  // define a local variable for maximum number of images that can be deceremented
  let localMaxNumImages = MAX_NUM_IMAGES;
  // select indexes for image selection in a random-no-replace paradigm
  for (var i = 0; i < numImages; i++) {
    let localRandomIndex = floor(random(0, localMaxNumImages));
    randomIndexes[i] = maxIndexes[localRandomIndex];
    maxIndexes.splice(localRandomIndex,1);
    localMaxNumImages--;
  }
  print(randomIndexes);
  // load two arrays (one for display, other for object creation) with images at selected random indexes
  for (var i = 0; i < numImages; i++) {
    display[i] = loadImage(`assets/images/animal-images/animal${randomIndexes[i]}.png`);
    images[i] = loadImage(`assets/images/animal-images/animal${randomIndexes[i]}.png`);
  }
}

// select random animal from object-creation array, load into isolated variable and splice from array
function spliceAndLoadRandom() {
  randomIndex = floor(random(0, numImages));
  animalToFindImg = images[randomIndex];
  images.splice(randomIndex, 1);
  print(randomIndex);
}

// creates the animal and animal to find objects
function setup() {
  createCanvas(windowWidth, windowHeight);
  createAnimals();
  createAnimalToFind();
}

// creates all the animals except the animal to find
function createAnimals() {
  for (var i = 0; i < numAnimals; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let image = random(images);
    animals[i] = new Animal(x, y, image);
  }
}

// creates the animal to find
function createAnimalToFind() {
  let x = random(0, width);
  let y = random(0, height);
  let image = animalToFindImg;
  animalToFind = new AnimalToFind(x, y, image);
}

// draws the background and calls updates on the animals and animal to find
function draw() {
  background(255);
  switch (state) {
    case `title1`:
    title1();
    break;
    case `title2`:
    title2();
    break;
    case `sim`:
    sim();
    break;
    case `found`:
    found();
    break;
    default:
  }
}

// first title page, with animal display
function title1() {
  writeTitle(`FIND THE LONELY ANIMAL`);
  writeSubtitle(`Click anywhere to start`);
  displayAnimals();
}

// second title page, with animal to find rotating
function title2() {
  writeTitle(`You are looking for:`);
  writeSubtitle(`Click anywhere to start`);
  displayAnimals();
  displayAnimalToFind();
}

// write title a thirdway down the page in large bold lavender letter
function writeTitle(toWrite) {
  push();
  textAlign(CENTER, CENTER);
  textSize(64);
  textStyle(BOLD);
  fill(200, 100, 200);
  stroke(0);
  strokeWeight(2);
  text(toWrite, width/2, height/3);
  pop();
}

// write subtitle two thirdways down the page in smaller black letters
function writeSubtitle(toWrite) {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  textStyle(BOLD);
  fill(0);
  stroke(0);
  strokeWeight(2);
  text(toWrite, width/2, 2 * height / 3);
  pop();
}

//
function displayAnimals() {
  imageMode(CENTER);
  for (var i = 0; i < display.length; i++) {
    // image(display[i], (width / display.length * i) + (display[i].width / 2*numImages), height / 2);
    image(display[i], (width / display.length * i) + (display[i].width / 2), height / 2);
  }
}

function displayAnimalToFind() {
  push();
  noStroke();
  fill(255);
  rectMode(CENTER);
  // rect((width / display.length * randomIndex) + (display[randomIndex].width / 2*numImages), height / 2, display[randomIndex].width, display[randomIndex].height);
  rect((width / display.length * randomIndex) + (display[randomIndex].width / 2), height / 2, display[randomIndex].width, display[randomIndex].height);
  pop();
  push();
  imageMode(CENTER);
  // translate((width / display.length * randomIndex) + (display[randomIndex].width / 2*numImages), height / 2)
  translate((width / display.length * randomIndex) + (display[randomIndex].width / 2), height / 2)
  rotate(angle);
  angle += 0.2;
  image(display[randomIndex], 0, 0);
  pop();
}

// creates the animal and animal to find objects
function sim() {
  updateAnimals();
  updateAnimalToFind();
}

// calls the update method of all animals
function updateAnimals() {
  for (var i = 0; i < animals.length; i++) {
    animals[i].update();
  }
}

// calls the update method of the animal to find
function updateAnimalToFind() {
  animalToFind.update();
}

function found() {
  updateAnimals();
  updateAnimalToFind();
  writeTitle(`AGAIN?`);
  writeSubtitle(`Press 'G' to play again at same level
  Press 'H' to play again at harder level`);
}

function mousePressed() {
  if (state === `title1`) {
    state = `title2`;
  }
  else if (state === `title2`) {
    state = `sim`;
  }
  else if (state === `sim`) {
    animalToFind.mousePressed();
    if (animalToFind.mousePressed()) {
      state = `found`;
    }
  }
}

function keyPressed() {
  if (state === `found`) {
    if (keyCode === 71) {
      softReset();
    }
    else if (keyCode === 72) {
      hardReset();
    }
  }
}

function softReset() {
  reset();
}

function hardReset() {
  numImages++;
  constrain(numImages, MIN_NUM_IMAGES, MAX_NUM_IMAGES-1);
  reset();
}

function reset() {
  loadArrayImages();
  spliceAndLoadRandom();
  createAnimals();
  createAnimalToFind();
  state = `title1`;
}
