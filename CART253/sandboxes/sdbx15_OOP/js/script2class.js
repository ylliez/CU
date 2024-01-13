// "use strict";
//
// let garden = {
//   flowers: [],
//   numFlowers: 20,
//   grassColor: { r: 120, g: 180, b: 120 }
// };
//
// // setup() creates the canvas and the flowers in the garden
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//
//   // Create our flowers by counting up to the number of the flowers
//   for (let i = 0; i < garden.numFlowers; i++) {
//     // NEW! Create a new flower
//     let flower = new Flower();
//     // Add the flower to the array of flowers
//     garden.flowers.push(flower);
//   }
// }
//
// // displays our flowers
// function draw() {
//   // Display the grass
//   background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
//
//   // Loop through all the flowers in the array and display them
//   for (let i = 0; i < garden.flowers.length; i++) {
//     let flower = garden.flowers[i];
//     flower.display(); // NEW! Call the display() method for this flower
//   }
// }

//same but sorted
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
    // NEW! Create a new flower
    let flower = new Flower();
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
    // NEW! Sort the array using the sortByY() function
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
