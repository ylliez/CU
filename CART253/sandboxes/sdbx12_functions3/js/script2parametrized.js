"use strict";

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  size: 100
};

// First food object
let food1 = {
  x: 150,
  y: 300,
  size: 50,
  eaten: false // We want to track whether the user has eaten the food
};

// Second food object
let food2 = {
  x: 250,
  y: 300,
  size: 50,
  eaten: false
};

// Third food object
let food3 = {
  x: 350,
  y: 300,
  size: 50,
  eaten: false
};

// Fourth food object
let food4 = {
  x: 450,
  y: 300,
  size: 50,
  eaten: false
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Move the user (with the mouse)
  moveUser();

  // Check whether the user has eaten either food
  checkFood(food1);
  checkFood(food2);
  checkFood(food3);
  checkFood(food4);

  // Display the user and foods
  displayUser();
  displayFood(food1);
  displayFood(food2);
  displayFood(food3);
  displayFood(food4);
}

// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

// Checks if the user overlaps the food object and eats it if so
function checkFood(food) {
  if (!food.eaten) {
    let d = dist(user.x, user.y, food.x, food.y);
    if (d < user.size / 2 + food.size / 2) {
      food.eaten = true;
    }
  }
}

// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}

// Draw the food as a circle
function displayFood(food) {
  // Check if the food is still available to be eaten
  if (!food.eaten) {
    // Display the food as its position and with its size
    push();
    fill(255, 100, 100);
    ellipse(food.x, food.y, food.size);
    pop();
  }
}
