//strings can use either "...", '...' or `...` , need to use escape backslash (\) to use same character inside
//therefore best to use template strings `...` which are then called using ${...}

// //text
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(127);
//   rect(250,250,10,10);
//   text(`Hello, World!`,250,250);
// }

// //same but with typo specs
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(127);
//
//   // Typography-specific functions
//   textAlign(CENTER, CENTER);
//   textSize(64);
//   textStyle(BOLD);
//
//   // Color and line functions
//   fill(200, 100, 200);
//   stroke(0);
//   strokeWeight(2);
//
//   // This text is purple with a 2 pixel black outline, size 64 pixels, bold, and centered at 250,250
//   text(`Hello, World!`, 250, 250);
// }

//same but w/ animations
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(127);

  textAlign(CENTER, CENTER);
  // Make the font size respond to the mouse
  let size = map(mouseX, 0, width, 12, 128);
  textSize(size);
  textStyle(BOLD);

  // Make the fill respond to the mouse
  let red = map(mouseX, 0, width, 100, 200);
  let green = map(mouseY, 0, height, 100, 200);
  let blue = map(mouseX + mouseY, 0, width + height, 100, 200);
  fill(red, green, blue);

  // Make the stroke color respond to the mouse
  let strokeShade = map(mouseX, 0, width, 0, 255);
  stroke(strokeShade);

  // Make the stroke weight respond to the mouse
  let weight = map(mouseY, 0, height, 0, 40);
  strokeWeight(weight);

  text(`Hello, World!`, 250, 250);
}
