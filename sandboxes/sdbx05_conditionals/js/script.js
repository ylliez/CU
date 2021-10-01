/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let circle = {
  x: undefined,
  y: undefined,
  size: 100
};

let dangerZone = {
  x: 250,
  y: 250,
  size: 150
};

function setup() {
  createCanvas(500, 500);
  circle.x = random(0,width);
  circle.y = random(0,height);
}

function draw() {
  background(0);

  noFill();
  stroke(255, 0, 0);
  ellipse(dangerZone.x,dangerZone.y,dangerZone.size);

  fill(255);
  noStroke();
  ellipse(circle.x,circle.y,circle.size);

  let d = dist(circle.x,circle.y,dangerZone.x,dangerZone.y);
 // Check if our white circle overlaps the danger zone...
 if (d < circle.size/2 + dangerZone.size/2) {
   // If it does, try a different random position!
   circle.x = random(0, width);
   circle.y = random(0, height);
 }
}
