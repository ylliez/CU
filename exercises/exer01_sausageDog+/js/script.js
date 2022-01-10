/**
Where's Sausage Dog? New Game+
illiez

canine pictorial puzzle program
*/

"use strict";

// declare global program variables (e.g. arrays, array sizes)
let images = [];
let numImages = 11;
let animals = [];
let numAnimals = 100;

let randomIndex = undefined;
let animalToFind = undefined;
let animalToFindImg = undefined;


// preloads images into animal array and animal to find
function preload() {
  // load images into animal array
  for (var i = 0; i < numImages; i++) {
    images[i] = loadImage(`assets/images/animal-images/animal${i}.png`);
  }
  // remove one animal from array by splicing at random index and
  randomIndex = floor(random(0, numImages + 1));
  images.splice(randomIndex, 1);
  animalToFindImg = loadImage(`assets/images/animal-images/animal${randomIndex}.png`);
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
  updateAnimalToFind();
  updateAnimals();
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

function mousePressed() {
  animalToFind.mousePressed();
}
