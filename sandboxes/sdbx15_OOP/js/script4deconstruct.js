"use strict";

let garden = {
  flowers: [],
  numFlowers: 20,
  grassColor: { r: 120, g: 180, b: 120 }
};

// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create our flowers by counting up to the number of the flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    // Create variables for our arguments for clarity
    let config = {
      x: random(0, width),
      y: random(0, height),
      size: random(50, 80),
      stemLength: random(50, 80),
      stemThickness: random(8, 12),
      petalThickness: random(8, 12),
      stemColor: {
        r: random(0, 100),
        g: random(100, 255),
        b: random(0, 100)
      },
      petalColor: {
        r: random(100, 255),
        g: random(100, 255),
        b: random(100, 255)
      },
      centreColor: {
        r: random(0, 50),
        g: random(0, 50),
        b: random(0, 50)
      }
    };
    let flower = new Flower(config);
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
    garden.flowers.sort(sortByY);
  }
}

// displays our flowers
function draw() {
  // Display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  // Loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    flower.display(); // NEW! Call the display() method for this flower
  }
}

// sortByY() takes two flowers as parameters to compare
// It should return a negative number if flower1 should come
// BEFORE flower2 in the array, a positive number if flower1 should
// come AFTER flower2 in the array, and 0 if there they have the
// same priority
function sortByY(flower1, flower2) {
  // We achieve the above by subtracting flower2's y position
  // from flower1's! How elegant!
  return flower1.y - flower2.y;
}
