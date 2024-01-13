// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//
//   push();
//   rectMode(CENTER);
//   translate(250,250); // Translate to the rectangle's drawing position
//   scale(2); // Double the size of our rectangle when displayed...
//   fill(255, 0, 0);
//   rect(0, 0, 100, 100); // Draw the rectangle at 0,0 because we translated the origin
//   pop();
// }

// // Everything together
// let rectangle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   speed: 2,
//   scale: 1,
//   angle: 0
// }
//
// function setup() {
//   createCanvas(500, 500);
//   rectangle.vx = rectangle.speed;
// }
//
// function draw() {
//   background(0);
//
//   // Move the rectangle according to its velocirty
//   rectangle.x = rectangle.x + rectangle.vx;
//   rectangle.y = rectangle.y + rectangle.vy;
//
//   // Increase the rectangle's scale and angle
//   rectangle.scale = rectangle.scale + 0.01;
//   rectangle.angle = rectangle.angle + 0.05;
//
//   // Display the rectangle
//   push();
//   rectMode(CENTER); // Centered
//   translate(rectangle.x, rectangle.y); // Translate to rectangle position
//   scale(rectangle.scale); // Apply scale
//   rotate(rectangle.angle); // Apply rotation
//   rect(0, 0, rectangle.size, rectangle.size); // Draw rectangle at 0,0 because of translate()
//   pop();
// }

// let angle1 = 0;
// let angle2 = 0;
//
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//
//   translate(250, 250);
//   rotate(angle1);
//   rectMode(CENTER);
//   rect(0, 0, 100, 100);
//
//   translate(200, 0);
//   rotate(angle2)
//   rect(0, 0, 50, 50);
//
//   angle1 = angle1 + 0.025;
//   angle2 = angle2 + 0.005;
// }


// Angles of rotation for our shape
let angleX = 0;
let angleY = 0;

function setup() {
  // Using WEBGL in createCanvas to specify 3D graphics
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(0);

  // Our shape
  push();
  // Translate to the center (not really needed, but just for completeness)
  translate(0, 0, 0);
  // Rotate AROUND the x axis
  rotateX(angleX);
  // Rotate AROUND the y axis
  rotateY(angleY);
  // Looks nicer
  noStroke();
  // Our central cube is white
  fill(255);
  box(100);
  // A red bar passing through the box
  fill(255, 0, 0);
  box(200, 25, 25);
  // A green bar passing through the box
  fill(0, 255, 0);
  box(25, 200, 25);
  // A blue bar passing through the box
  fill(0, 0, 255);
  box(25, 25, 200);
  // Note how the entire shape rotates because the rotateX() and rotateY() are applied to everything
  // afterwards until the pop() below here
  pop();

  // Increase the angles to rotate over time
  angleX = angleX + 0.01;
  angleY = angleY + 0.05;
}
