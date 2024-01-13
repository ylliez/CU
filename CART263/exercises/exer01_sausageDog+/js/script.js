/**
Where's Sausage Dog? New Game+
illiez

zoological pictorial puzzle program
win by clicking on the lonely animal
*/

"use strict";

// declare global program variables (e.g. state, arrays, array sizes)
let state = 'title0';

let images = [];
let localImages = [];
let randomImages = [];
let displayImages = [];
let numImages = 2;
const MIN_NUM_IMAGES = 2;
const MAX_NUM_IMAGES = 11;
let animals = [];
let numAnimals = 100;
let angle = 0;

let randomIndex = undefined;
let animalToFind = undefined;
let animalToFindImg = undefined;


// preloads images into animal array and animal to find
function preload() {
  loadImageArray();
}

// load random animal images into array (it hurts to know that there must be a one line solution to all this nonsense...)
function loadImageArray() {
  for (var i = 0; i < MAX_NUM_IMAGES; i++) {
    images[i] = loadImage(`assets/images/animal-images/animal${i}.png`);
  }
}

// creates the animal and animal to find objects
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// draws the background and calls updates on the animals and animal to find
function draw() {
  background(255);
  switch (state) {
    case `title0`:
    title0();
    break;
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

// first title page, keypress difficulty selector
function title0() {
  writeTitle(`FIND THE LONELY ANIMAL`);
  writeSubtitle(`Enter difficulty level (0-9)`);
  writeText(`Instructions:
    Find the animal that is one of a kind
    & click on it before the time runs out!`);
}

function createRandomArray(size) {
  // define a local variable for maximum number of images that can be deceremented
  let localMaxNumImages = MAX_NUM_IMAGES;
  // copy preloaded image array into local array that can be spliced
  arrayCopy(images, localImages);
  // select indexes for image selection in a random-no-replace paradigm
  for (var i = 0; i < size; i++) {
    let localRandomIndex = floor(random(0, localMaxNumImages));
    randomImages[i] = localImages[localRandomIndex];
    localImages.splice(localRandomIndex, 1);
    localMaxNumImages--;
  }
  // copy randomized image array into a separate display array for title page display
  arrayCopy(randomImages, displayImages);
}

// second title page, with animal images
function title1() {
  writeTitle(`The animals:`);
  writeSubtitle(`Press ENTER to see lost animal`);
  displayAnimals();
}

// select random image from randomized image array, load into isolated variable and splice from array
function spliceAndLoadRandom() {
  randomIndex = floor(random(0, randomImages.length));
  animalToFindImg = randomImages[randomIndex];
  randomImages.splice(randomIndex, 1);
}

// creates all the animal objects except the animal to find object
function createAnimals() {
  for (var i = 0; i < numAnimals; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let image = random(randomImages);
    animals[i] = new Animal(x, y, image);
  }
}

// creates the animal to find object
function createAnimalToFind() {
  let x = random(0, width);
  let y = random(0, height);
  let image = animalToFindImg;
  animalToFind = new AnimalToFind(x, y, image);
}

// third title page, with animal to find rotating
function title2() {
  writeTitle(`You will be looking for:`)
  writeSubtitle(`Press ENTER to start`);
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

// write subtitle two thirdways down the page in smaller grey letters
function writeSubtitle(toWrite) {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  textStyle(BOLD);
  fill(100);
  stroke(0);
  strokeWeight(2);
  text(toWrite, width/2, 2 * height / 3);
  pop();
}

// write text halfway down the page in small black letters
function writeText(toWrite) {
  push();
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(0);
  text(toWrite, width/2, height / 2);
  pop();
}

// display all animals in the current iteration of the game
function displayAnimals() {
  imageMode(CENTER);
  for (var i = 0; i < displayImages.length; i++) {
    image(displayImages[i], (width / displayImages.length * i) + (width / (5 * (displayImages.length - 1))) - (2 * displayImages.length) + (displayImages[i].width / 2), height / 2);
  }
}

// highlight animal to find in current iteration of the game by making it rotate
function displayAnimalToFind() {
  // draw white square over the animal to find in the generic animal display
  push();
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect((width / displayImages.length * randomIndex) + (width / (5 * (displayImages.length - 1)))  - (2 * displayImages.length) + (displayImages[randomIndex].width / 2), height / 2, displayImages[randomIndex].width, displayImages[randomIndex].height);
  pop();
  // draw the animal to find on top of the white square and make rotate
  push();
  imageMode(CENTER);
  translate((width / displayImages.length * randomIndex) + (width / (5 * (displayImages.length - 1)))  - (2 * displayImages.length) + (displayImages[randomIndex].width / 2), height / 2)
  rotate(angle);
  angle += 0.2;
  image(displayImages[randomIndex], 0, 0);
  print(randomIndex);
  pop();
}

// draw the the animal and animal to find objects
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

//  draw the the animal and animal to find objects, the latter rotates when clicked, propose replay
function found() {
  updateAnimals();
  updateAnimalToFind();
  writeTitle(`AGAIN?`);
  writeSubtitle(`Press 'G' to play again at same level
  Press 'H' to play again at harder level`);
}

function mousePressed() {
  if (state === `sim`) {
    animalToFind.mousePressed();
    if (animalToFind.found) {
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
  else if (state === `title2`) {
    if (keyCode === 13) {
      createAnimals();
      createAnimalToFind();
      state = `sim`;
    }
  }
  else if (state === `title1`) {
    if (keyCode === 13) {
      spliceAndLoadRandom();
      state = `title2`;
    }
  }
  else if (state === `title0`) {
    if (keyCode >= 48 && keyCode <= 57) {
      numImages = keyCode - 46;
      createRandomArray(numImages);
      state = `title1`;
    }
  }

}

function softReset() {
  reset();
}

function hardReset() {
  numImages++;
  numImages = constrain(numImages, MIN_NUM_IMAGES, MAX_NUM_IMAGES);
  reset();
}

function reset() {
  createRandomArray(numImages);
  state = `title1`;
}
