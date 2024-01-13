"use strict";

let vehicles = [];
let numCars = 5;
let numMotorcycles = 10;
let numBuses = 2;
let numSportsCars = 1;

// Set up the canvas and our cars
function setup() {
  createCanvas(600, 600);
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
    let y = random(0, height);
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

}

// Display and move the cars
function draw() {
  background(0);

  // Go through all the cars and move, wrap, and display them
  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();
  }

}
