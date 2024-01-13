// // MVMNT w/ axial velocities
// let backgroundShade = 0;
// let circle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 1, // x velocity
//   vy: 0 // y velocity
// }
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(backgroundShade);
//
//   circle.x = circle.x + circle.vx; // Using the renamed speed
//   circle.y = circle.y + circle.vy; // Using the new y velocity!
//
//   ellipse(circle.x,circle.y,circle.size);
// }

// // mouse-dpdt mvmnt
// let backgroundShade = 0;
// let circle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   speed: 5
// }
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(backgroundShade);
//
//   if (mouseX > circle.x) { circle.vx = circle.speed; }
//   else if (mouseX < circle.x) { circle.vx = -circle.speed; }
//
//   if (mouseY > circle.y) { circle.vy = circle.speed; }
//   else if (mouseY < circle.y) { circle.vy = -circle.speed; }
//
//   circle.x = circle.x + circle.vx; // Using the renamed speed
//   circle.y = circle.y + circle.vy; // Using the new y velocity!
//
//   ellipse(circle.x,circle.y,circle.size);
// }

// mouse-dpdt mvmnt w/ acceleration
let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  maxSpeed: 2,
  acceleration: 0.05
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(backgroundShade);

  if (mouseX > circle.x) { circle.ax = circle.acceleration; }
  else if (mouseX < circle.x) { circle.ax = -circle.acceleration; }

  if (mouseY > circle.y) { circle.ay = circle.acceleration; }
  else if (mouseY < circle.y) { circle.ay = -circle.acceleration; }

  // Update the circle's current velocity based on its acceleration!
  // Note that we also want to CONSTRAIN the velocity to not exceed the maximum speed
  circle.vx = circle.vx + circle.ax;
  circle.vx = constrain(circle.vx, -circle.maxSpeed, circle.maxSpeed);

  circle.vy = circle.vy + circle.ay;
  circle.vy = constrain(circle.vy, -circle.maxSpeed, circle.maxSpeed);

  // Then we actually APPLY these changes to `vx` and `vy` to the circle's position
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;

  ellipse(circle.x,circle.y,circle.size);
}
