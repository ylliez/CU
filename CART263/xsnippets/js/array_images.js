"use strict";

// array to store our images
let images = [];
// variable storing the number of images to load
let numImages = 10;
// constant to set filename prefix
const filePath = ????
// variable to store the image we want to display
let displayImage;

// preload() loads 10 images
function preload() {
  // Use a for loop to count from 0 up to 9
  for (let i = 0; i < numImages; i++) {
    // Load the image into a variable using sequentially numbered filenames
    let loadedImage = loadImage(`assets/images/${filePath}${i}.png`);
    // Add the loaded image to the images array
    images.push(loadedImage);
  }
}

// setup() selects the image to display randomly
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Choose an image to display randomly from the array
  displayImage = random(images);
}

// draw() displays the randomly chosen image
function draw() {
  background(0);
  // Display the randomly selected image
  imageMode(CENTER);
  image(displayImage, width / 2, height / 2);
}
