// let circle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   speed: 2,
// }
//
// function setup() {
//   createCanvas(500, 500);
//   circle.vx = circle.speed;
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

// //same but w/ states
// let circle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   speed: 2,
// }
//
// let titleString = "Life: A Metaphor";
// let endingString = "Ah, mortality.";
//
// let state = `title`; // We start in the title state
//
// function setup() {
//   createCanvas(500, 500);
//   circle.vx = circle.speed;
//
//   // Text settings
//   textSize(32);
//   textAlign(CENTER, CENTER);
// }
//
// function draw() {
//   background(0);
//
//   if (state === `title`) {
//     // In the title state we display the title
//     fill(255);
//     text(titleString, width / 2, height / 2);
//   }
//   else if (state === `animation`) {
//     // In the animation state we animate the circle
//     circle.x = circle.x + circle.vx;
//     circle.y = circle.y + circle.vy;
//
//     ellipse(circle.x, circle.y, circle.size);
//
//     // NEW!
//     // And we change to the ending state if the circle reaches the right side
//     if (circle.x > width) {
//       state = `ending`;
//     }
//   }
//   else if (state === `ending`) {
//     // In the ending state we display the ending
//     fill(255, 0, 0);
//     text(endingString, width / 2, height / 2)
//   }
// }
//
// // NEW!
// function keyPressed() {
//   // If any key is pressed, we check if the current state is the title state
//   if (state === `title`) {
//     // If it is, we switch to the animation state
//     state = `animation`;
//   }
// }

// //same but modularized
// let circle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   speed: 2,
// }
//
// let titleString = "Life: A Metaphor";
// let endingString = "Ah, mortality.";
//
// let state = `title`;
//
// function setup() {
//   createCanvas(500, 500);
//   circle.vx = circle.speed;
//
//   // Text settings
//   textSize(32);
//   textAlign(CENTER, CENTER);
// }
//
// function draw() {
//   background(0);
//
//   if (state === `title`) {
//     title();
//   }
//   else if (state === `animation`) {
//     animation();
//   }
//   else if (state === `ending`) {
//     ending();
//   }
// }
//
// function title() {
//   fill(255);
//   text(titleString, width / 2, height / 2);
// }
//
// function animation() {
//   circle.x = circle.x + circle.vx;
//   circle.y = circle.y + circle.vy;
//
//   ellipse(circle.x, circle.y, circle.size);
//
//   if (circle.x > width) {
//     state = `ending`;
//   }
// }
//
// function ending() {
//   fill(255, 0, 0);
//   text(endingString, width / 2, height / 2)
// }
//
// function keyPressed() {
//   if (state === `title`) {
//     state = `animation`;
//   }
// }

// //same but w/ switch
// let circle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   speed: 2,
// }
//
// let titleString = "Life: A Metaphor";
// let endingString = "Ah, mortality.";
//
// let state = `title`;
//
// function setup() {
//   createCanvas(500, 500);
//   circle.vx = circle.speed;
//
//   // Text settings
//   textSize(32);
//   textAlign(CENTER, CENTER);
// }
//
// function draw() {
//   background(0);
//
//   switch (state) {
//     case `title`:
//       title();
//       break;
//
//     case `animation`:
//       animation();
//       break;
//
//     case `ending`:
//       ending();
//       break;
//   }
// }
//
// function title() {
//   fill(255);
//   text(titleString, width / 2, height / 2);
// }
//
// function animation() {
//   circle.x = circle.x + circle.vx;
//   circle.y = circle.y + circle.vy;
//
//   ellipse(circle.x, circle.y, circle.size);
//
//   if (circle.x > width) {
//     state = `ending`;
//   }
// }
//
// function ending() {
//   fill(255, 0, 0);
//   text(endingString, width / 2, height / 2)
// }
//
// function reset() {
//   circle.x = 0;
//   circle.y = 250;
//   state = `title`;
// }
//
// function keyPressed() {
//   if (state === `title`) {
//     state = `animation`;
//   }
//   if (state === `ending`) {
//     reset();
//   }
// }

//non-linear states
let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
  safeDistance: 150, // How many pixels away the mouse must be for the circle to feel safe
  state: `safe` // safe or fleeing
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  checkSafety();
  move();
  display();
}

// The checkSafety function sets the circle's state based on how close
// it is to the mouse
function checkSafety() {
  // Calculate the distance to the mouse
  let d = dist(circle.x, circle.y, mouseX, mouseY);
  if (d < circle.safeDistance) {
    // If it's too close, use the fleeing state
    circle.state = `fleeing`;
  }
  else {
    // If it's still outside a safe distance, use the safe state
    circle.state = `safe`;
  }
}

// The move function moves the circle based on its current state
function move() {
  if (circle.state === `safe`) {
    // If the circle is in the safe state, move by choosing a random
    // direction occasionally...
    let change = random();
    if (change < 0.05) {
      circle.vx = random(-circle.speed, circle.speed);
      circle.vy = random(-circle.speed, circle.speed);
    }
  }
  else if (circle.state === `fleeing`) {
    // If the circle is in the fleeing state, almost moving away
    // from the mouse in the x and y axes
    if (circle.x < mouseX) {
      circle.vx = -circle.speed;
    }
    else {
      circle.vx = circle.speed;
    }

    if (circle.y < mouseY) {
      circle.vy = -circle.speed;
    }
    else {
      circle.vy = circle.speed;
    }
  }

  // Update the circle's position to move it
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;
}

function display() {
  ellipse(circle.x, circle.y, circle.size);
}
