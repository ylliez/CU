// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   // Red rectangle, no translation
//   fill(255, 0, 0);
//   rect(0, 0, 100, 100);
//
//   // Blue rectangle, translated
//   translate(200, 100); // Move the origin 200 pixels to the right, 100 pixels down
//   fill(0, 0, 255);
//   rect(0, 0, 100, 100);
// }

// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   // Red rectangle
//   translate(100,100); // Move the origin 100 pixels right and 100 pixels down
//   fill(255, 0, 0);
//   rect(0, 0, 100, 100);
//
//   // Blue rectangle
//   translate(100, 100); // Move the origin 100 MORE pixels to the right, 100 MORE pixels down
//   fill(0, 0, 255);
//   rect(0, 0, 100, 100);
// }

// USE PUSH-POP TO AVOID CROSS-CONTAM
function setup() {
  createCanvas(500, 500);
}

function draw() {
  // Red rectangle
  push(); // Save the defaults (for example the origin is at the top left)
  translate(100,100); // Move the origin 100 pixels right and 100 pixels down
  fill(255, 0, 0);
  rect(0, 0, 100, 100);
  pop(); // Restore the defaults (the origin goes back to the top left)

  // Blue rectangle
  push(); // Save the defaults (like the origin is at the top left)
  translate(100, 200); // Move the origin 100 pixels to the right, 200 pixels down
  fill(0, 0, 255);
  rect(0, 0, 100, 100);
  pop(); // Restore the defaults (the origin goes back to the top left)
}
