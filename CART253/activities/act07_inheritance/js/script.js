"use strict";

let state = `title`;
let pedestrian;
let vehicles = [];
let numCars = 5;
let numMotorcycles = 10;
let numBuses = 2;
let numSportsCars = 1;

// Set up the canvas and our cars
function setup() {
  createCanvas(windowWidth, windowHeight);

  pedestrian = new Pedestrian(0,height);

  // Create the correct number of cars and put them in our array
  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    vehicles.push(car);
  }

  // Create the correct number of motorcycles and put them in our array
  for (let i = 0; i < numMotorcycles; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x, y);
    vehicles.push(motorcycle);
  }

  // Create the correct number of motorcycles and put them in our array
  for (let i = 0; i < numBuses; i++) {
    let x = random(0, width);
    let y = random(0, height-10);
    let bus = new Bus(x, y);
    vehicles.push(bus);
  }

  // Create the correct number of motorcycles and put them in our array
  for (let i = 0; i < numSportsCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let sportsCar = new SportsCar(x, y);
    vehicles.push(sportsCar);
  }

  // Create the correct number of motorcycles and put them in our array
  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    let r = random(0, 1);
    if (r < 0.5) {
      vehicle.vx = -vehicle.vx;
    }
  }
}

// Display and move the cars
function draw() {
  background(0);

  switch (state) {
    case `title`:
      title();
      break;
    case `sim`:
      sim();
      break;
    case `win`:
      win();
      break;
    case `lose`:
      lose();
      break;
    default:
      title();
  }
}

function title() {
  displayTextext(`CLICK ANYWHERE TO START`);
}

function sim() {
  pedestrian.handleInput();
  pedestrian.move();
  pedestrian.display();
  // Go through all the cars and move, wrap, and display them
  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();
    pedestrian.checkHit(vehicle);
  }
  if (!pedestrian.alive) { state = `lose`; }
  if (pedestrian.y<=0) { state = `win`; }
}

function win() {
  noLoop();
  displayTextext(`You crossed the road!`);
}

function lose() {
  noLoop();
  displayTextext(`You died!`);
}

function displayTextext(toPrint) {
  push();
  textAlign(CENTER, CENTER);
  textSize(64);
  textStyle(BOLD);
  fill(200, 100, 200);
  stroke(0);
  strokeWeight(2);
  text(toPrint, width / 2, height / 2);
  pop();
}

function mousePressed() {
  if (state === `title`) {
    state = `sim`;
  }
}
