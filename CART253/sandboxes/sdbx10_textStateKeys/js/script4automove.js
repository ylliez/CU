// let circle = {
//   x: 250,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   speed: 2
// }
//
// function setup() {
//   createCanvas(500, 500);
//
//   // Linear movement down and to the right
//   circle.vx = circle.speed;
//   circle.vy = circle.speed;
// }
//
// function draw() {
//   background(0);
//
//   circle.x = circle.x + circle.vx;
//   circle.y = circle.y + circle.vy;
//
//   ellipse(circle.x, circle.y, circle.size);
// }

// // same but w/ random
// let circle = {
//   x: 250,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   speed: 2
// }
//
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//
//   // Choose random velocities within the "speed limit"
//   circle.vx = random(-circle.speed, circle.speed);
//   circle.vy = random(-circle.speed, circle.speed);
//
//   circle.x = circle.x + circle.vx;
//   circle.y = circle.y + circle.vy;
//
//   ellipse(circle.x, circle.y, circle.size);
// }

// // same but reducing incidence of change
// let circle = {
//   x: 250,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   speed: 2
// }
//
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//
//   let change = random(); // Generate a random number between 0 and 1
//
//   // Change direction 1% of the time
//   if (change < 0.01) {
//     // Choose random velocities within the "speed limit"
//     circle.vx = random(-circle.speed, circle.speed);
//     circle.vy = random(-circle.speed, circle.speed);
//   }
//
//   circle.x = circle.x + circle.vx;
//   circle.y = circle.y + circle.vy;
//
//   ellipse(circle.x, circle.y, circle.size);
// }

// //
// let circle = {
//   x: 250,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   speed: 2
// }
//
// let state = `flee`;
//
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//
//   let dx = circle.x - mouseX; // Distance between the circle and the mouse horizontally
//   let dy = circle.y - mouseY; // Distance between the circle and the mouse vertically
//
//   switch (state) {
//     case `flee`:
//     if (dx < 0) { circle.vx = -circle.speed; } // If dx is negative, the mouse is to the right so move left (run away!)
//     else if (dx > 0) { circle.vx = circle.speed; } // If dx is positive, the mouse is to the left so move right (run away!)
//     if (dy < 0) { circle.vy = -circle.speed; }
//     else if (dy > 0) { circle.vy = circle.speed; }
//     break;
//
//     case `join`:
//     if (dx < 0) { circle.vx = circle.speed; } // If dx is negative, the mouse is to the right so move left (run away!)
//     else if (dx > 0) { circle.vx = -circle.speed; } // If dx is positive, the mouse is to the left so move right (run away!)
//     if (dy < 0) { circle.vy = circle.speed; }
//     else if (dy > 0) { circle.vy = -circle.speed; }
//     break;
//
//   }
//
//   circle.x = circle.x + circle.vx;
//   circle.y = circle.y + circle.vy;
//
//   ellipse(circle.x, circle.y, circle.size);
//
//   console.log(state);
// }
//
// function join(dx,dy) {
//   if (dx < 0) { circle.vx = circle.speed; } // If dx is negative, the mouse is to the right so move left (run away!)
//   else if (dx > 0) { circle.vx = -circle.speed; } // If dx is positive, the mouse is to the left so move right (run away!)
//   if (dy < 0) { circle.vy = circle.speed; }
//   else if (dy > 0) { circle.vy = -circle.speed; }
// }
//
// // function flee() {
// //   if (dx < 0) { circle.vx = -circle.speed; } // If dx is negative, the mouse is to the right so move left (run away!)
// //   else if (dx > 0) { circle.vx = circle.speed; } // If dx is positive, the mouse is to the left so move right (run away!)
// //   if (dy < 0) { circle.vy = -circle.speed; }
// //   else if (dy > 0) { circle.vy = circle.speed; }
// // }
//
// function keyPressed() {
//   if (state === `join`) {
//     state = `flee`;
//   }
//   else if (state === `flee`) {
//     state = `join`;
//   }
// }

// perlin noise
let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
  tx: 0, // A "time" value for the horizontal (for noise())
  ty: 10 // A "time" value for the vertical (for noise())
  // We start these two "time" values at different numbers because
  // we want the horizontal and vertical to have different resulting
  // noise() values (and behaviours)
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // To use noise we need to provide an argument to it
  // that changes over time, circle.tx for our horizontal movement
  // and circle.ty for our vertical movement. t is for "time" here.
  circle.tx = circle.tx + 0.025;
  circle.ty = circle.ty + 0.025;
  // Changing the number we add to our "time" values changes the
  // resulting "smoothness" of the movement.

  // Now we calculate the noise value based on those "time" values
  // Because they increase over time, noise() returns different values
  // each frame.
  let noiseX = noise(circle.tx);
  let noiseY = noise(circle.ty);

  // Then we set our velocity to the value noise() returned (between 0 and 1)
  // mapped to our circle's speed range
  circle.vx = map(noiseX, 0, 1, -circle.speed, circle.speed);
  circle.vy = map(noiseY, 0, 1, -circle.speed, circle.speed);

  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;

  ellipse(circle.x, circle.y, circle.size);
}
