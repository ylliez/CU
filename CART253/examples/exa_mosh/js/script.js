/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let mona;

// Load the mona lisa
function preload() {
  mona = loadImage(`assets/images/mona.jpeg`);
}

function setup() {
  // Create canvas with same dimensions as mona
  createCanvas(mona.width, mona.height);

  // Load the pixels array for the image
  mona.loadPixels();
  // Go through every pixel
  for (let i = 0; i < mona.pixels.length; i += 4) {
    // Do weird things to the pixels using perlin noise
    // Red pixel
    mona.pixels[i] = map(noise(map(mona.pixels[i], 0, 255, 0, 10)), 0, 1, 0, 255);
    // Green pixel
    mona.pixels[i + 1] = map(noise(map(mona.pixels[i + 1], 0, 255, 0, 10)), 0, 1, 0, 255);
    // Blue pixel
    mona.pixels[i + 2] = map(noise(map(mona.pixels[i + 2], 0, 255, 0, 10)), 0, 1, 0, 255);
  }
  // Update the pixels so the changes stick
  mona.updatePixels();

  // Center images
  imageMode(CENTER);
  // Display our datamoshed mona
  image(mona, width / 2, height / 2);
}
