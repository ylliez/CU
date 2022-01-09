/**
Where's Sausage Dog?
illiez

program
*/

"use strict";

//

const NUM_IMAGES = 10;
const NUM_ANIMALS = 100;

let images = [];
let animals = [];

let sausageDog = undefined;
let sausageDogImg = undefined;

/**
Description of preload
*/
function preload() {
  for (var i = 0; i < NUM_IMAGES; i++) {
    images[i] = loadImage(`assets/images/animal-images/animal${i}.png`);
  }
  sausageDogImg = loadImage(`assets/images/animal-images/sausage-dog.png`);
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let image = random(images);
    animals[i] = new Animal(x, y, image);
  }
  sausageDog = new SausageDog(random(0, width), random(0, height), sausageDogImg);
}


/**
Description of draw()
*/
function draw() {
  background(255);
  for (var i = 0; i < animals.length; i++) {
    animals[i].update();
  }
  sausageDog.update();

}

function mousePressed() {
  sausageDog.mousePressed();
}
