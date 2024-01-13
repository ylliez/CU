/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

/* circles with sine-based gradient fill
// Angle for sin function
let angle = 0;

// Standard setup
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  // No stroke because it's pretty
  noStroke();
  // Calculate the current sine of our angle and map it to a
  // shape between 100 and 255
  let shade = map(sin(angle), -1, 1, 100, 255);
  // Set the fill to the shade
  fill(shade);
  // Draw a circle at the mouse position
  ellipse(mouseX, mouseY, 20);
  // Increase the angle so the sine function returns a different
  // value next time
  angle += 0.2;
}
*/

// line with sine-based movement
// Two angles for sine waves
let angle1 = 0;
let angle2 = 3.14;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  // Fill the background with transparency to create a fading effect
  background(0, 20);

  // Calculate the y for each end of the line using sin with the two angles
  let y1 = map(sin(angle1), -1, 1, 0, height);
  let y2 = map(sin(angle2), -1, 1, 0, height);

  // Draw our line with a random stroke colour for fanciness
  stroke(random(50,255));
  line(0, y1, width, y2);

  // Increase the angles so the sine result changes
  angle1 += 0.01;
  angle2 += 0.02;
}
