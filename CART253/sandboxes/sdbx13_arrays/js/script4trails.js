// "use strict";
//
// let circle = {
//   x: 0,
//   y: 0,
//   size: 100,
//   trail: [] // Note that we are creating an EMPTY TRAIL ARRAY as a PROPERTY of the circle
// }
//
// // setup() the canvas ready
// function setup() {
//   createCanvas(600, 600);
// }
//
// // draw() draws a circle with a trails
// function draw() {
//   background(0);
//
//   // Use a for loop to go through each element in the circle's trail array in order
//   for (let i = 0; i < circle.trail.length; i++) {
//     // Get the element at the index indicated by i (0, then 1, then 2, etc.)
//     let element = circle.trail[i];
//     // Draw an ellipse the same size as the circle at that position
//     ellipse(element.x, element.y, circle.size);
//   }
//
//   // Move the circle to the mouse position
//   circle.x = mouseX;
//   circle.y = mouseY;
//
//   // Draw the circle
//   ellipse(circle.x, circle.y, circle.size);
//
//   // Create a new position object that stores where the circle is now
//   // which we can add to the trail to trace the path of the circle
//   let newTrailPosition = {
//     x: circle.x,
//     y: circle.y
//   };
//   // Add the position to the circle's trail array
//   circle.trail.push(newTrailPosition);
// }

//same but limited
"use strict";

let circle = {
  x: 0,
  y: 0,
  size: 100,
  trail: [],
  maxTrail: 10 // NEW! Maximum number of positions in the trail array
}

// setup() the canvas ready
function setup() {
  createCanvas(600, 600);
}

// draw() draws a circle with a trails
function draw() {
  background(0);

  // Use a for loop to go through each element in the circle's trail array in order
  for (let i = 0; i < circle.trail.length; i++) {
    // Get the element at the index indicated by i (0, then 1, then 2, etc.)
    let element = circle.trail[i];
    // Draw an ellipse the same size as the circle at that position
    ellipse(element.x, element.y, circle.size);
  }

  // Move the circle to the mouse position
  circle.x = mouseX;
  circle.y = mouseY;

  // Draw the circle
  noStroke();
  ellipse(circle.x, circle.y, circle.size);

  // Create a new position object that stores where the circle is now
  // which we can add to the trail to trace the path of the circle
  let newTrailPosition = {
    x: circle.x,
    y: circle.y
  };
  // Add the position to the circle's trail array
  circle.trail.push(newTrailPosition);

  // NEW! Check if the trail's length has exceeded the maximum
  if (circle.trail.length > circle.maxTrail) {
    // If it has, remove the oldest element (the one at the START of the array)
    circle.trail.shift();
  }
}
