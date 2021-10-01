/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let caterpillar = {
  x: 150,
  y: 200,
  totalSegments: 100,
  segmentSize: 6,
  segmentSpacing: 5
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  noStroke();
  fill(100, 200, 100); // A nice green

  // let x = caterpillar.x;
  // let segmentsDrawn = 0;
  // while (segmentsDrawn < caterpillar.totalSegments) {
  //   ellipse(x, caterpillar.y, caterpillar.segmentSize);
  //   x += caterpillar.segmentSpacing;
  //   segmentsDrawn++;

let x = caterpillar.x;
  for (let i = 0; i < caterpillar.totalSegments; i++) {
    ellipse(x, caterpillar.y, caterpillar.segmentSize);
    x += caterpillar.segmentSpacing;
  }
}
