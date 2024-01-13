"use strict";

let school = [];
let schoolSize = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < schoolSize; i++) {
    let fish = createFish(random(0, width), random(0, height));
    school.push(fish);
  }
}

function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return fish;
}

function draw() {
  background(0);

  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }
}

function moveFish(fish) {
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // Move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

function mousePressed() {
  if (keyIsPressed) {
    for (let i = 0; i < school.length; i++) {
      // Store the current fish in the fish variable
      let fish = school[i];
      // Calculate the distance between the mouse position and the fish
      let d = dist(mouseX, mouseY, fish.x, fish.y);
      // If the distance means the mouse was clicked inside the fish
      if (d < fish.size / 2) {
        // Remove the fish using the splice() function which takes two arguments
        // - The index to start remove elements from (i in our case)
        // - The number of elements to remove from that position (just one for us)
        school.splice(i, 1);
        // Now that we've found our fish to remove, we don't want to continue
        // going through the loop, so we end it prematurely with break
        // This forces the for-loop to stop immediately
        break;
      }
    }
  }
  else {
    let fish = createFish(mouseX,mouseY); // Create a fish at the mouse position
    school.push(fish); // Add the fish to our array
    // Now the school array has our new fish and it will be moved and drawn
    // with all the others in the for loop!
  }
}
