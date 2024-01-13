"use strict";

// Our garden
let garden = {
  grassColor: { r: 120, g: 180, b: 120 },
  flowers: [],
  numFlowers: 25,
  bees: [],
  numBees: 5
};

// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(600, 600);

  // creates flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    }
    // create flower
    let flower = new Flower(x, y, size, stemLength, petalColor);
    // add flower to array
    garden.flowers.push(flower);
  }

  // creates bees
  for (let i = 0; i < garden.numBees; i++) {
    let x = random(0, width);
    let y = random(0, height);
    // let size = random(30, 50);
    // let speed = random(1, 5);
    // let shrink = random(0, 0.1);
    // create bee
    let bee = new Bee(x, y);
    // add bee to array
    garden.bees.push(bee);
  }
}

// displays elements
function draw() {
  // Display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  // Loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    // NEW! Check if this flower is alive before updating it
    if (flower.alive) {
      // Update the flower by shrinking it and displaying it
      flower.shrink(); // NEW! Shrink living flowers every frame
      flower.display();
    }

    // Loop through all the bees in the array and display them
    for (let i = 0; i < garden.bees.length; i++) {
      let bee = garden.bees[i];
      if (bee.alive) {
        bee.shrink();
        bee.move();
        // NEW! Go through the entire flower array and try to pollinate the flowers!
      // Note that we use j in our for-loop here because we're already inside
      // a for-loop using i!
      for (let j = 0; j < garden.flowers.length; j++) {
        let flower = garden.flowers[j];
        bee.tryToPollinate(flower);
      }
        bee.display();
      }
  }
}
}
