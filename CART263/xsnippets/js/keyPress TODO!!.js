// function setup() {
//  createCanvas(windowWidth, windowHeight);
// }
//
// function draw() {
//   background(255);
// }
//
// function keyPressed() {
//   if (key === 'd') {
//     background(0);
//   }
//   writeText(key, width/2, height/3);
//   writeText(keyCode, width/2, height/2);
// }
//
// function writeText(toWrite, xPos, yPos) {
//   // Typography-specific functions
//   textAlign(CENTER, CENTER);
//   textSize(32);
//   // Color and line functions
//   fill(0);
//   stroke(0);
//   strokeWeight(2);
//   text(toWrite, xPos, yPos);
// }

//key detection
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//
//   textAlign(CENTER, CENTER);
//   textSize(64);
//   fill(255);
//   text(key, 250, 250);
// }

//same w/ key
let bg = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(bg);
}

function keyPressed() {
  writeText(keyCode);
  // We can check which key was just pressed using if-statements
  // that compare the `key` variable with specific strings...
  if (key === `a`) {
    bg = 0;
  }
  else if (key === `b`) {
    bg = 127;
  }
  else if (key === `c`) {
    bg = 255;
  }
}

  function writeText(toWrite) {
    // Typography-specific functions
    textAlign(CENTER, CENTER);
    textSize(32);
    // Color and line functions
    fill(0,235,98);
    stroke(0);
    strokeWeight(2);
    text(toWrite, width/2, height/2);
    console,log(toWrite);
  }


// //keyCode detection
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//
//   textAlign(CENTER, CENTER);
//   textSize(64);
//   fill(255);
//   text(keyCode, 250, 250);
// }

// //same w/ keyCode
// let bg = 0;
//
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(bg);
// }
//
// function keyPressed() {
//   // Again, we check keyCodes in an if-statement that compares the value in
//   // keyCode either with a number (the ASCII code) or with one of p5's
//   // special variables that stores the ASCII code for us (like UP_ARROW)
//   if (keyCode === UP_ARROW) {
//     bg = bg + 10;
//     bg = constrain(bg, 0, 255);
//   }
//   else if (keyCode === DOWN_ARROW) {
//     bg = bg - 10;
//     bg = constrain(bg, 0, 255);
//   }
// }

// keyReleased() only called when the user releases a key
// keyTyped()    only called when the user presses a key, ignoring special keys like SHIFT and CONTROL and BACKSPACE

// //keyIsDown
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//
//   // Check if the a key (code 65) is currently pressed
//   if (keyIsDown(65)) {
//     // If it is, display a square
//     rectMode(CENTER);
//     rect(width / 2, height / 2, 100, 100);
//   }
//   // Otherwise check if the b key (code 66) is currently pressed
//   else if (keyIsDown(66)) {
//     // If it is, display a circle
//     ellipse(width / 2, height / 2, 100, 100);
//   }
// }

// //keyIsDown other
// let circle = {
//   x: 250,
//   y: 250,
//   vx: 0,
//   vy: 0,
//   speed: 5,
//   size: 100
// }
//
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//
//   // First check for horizontal movement
//   // Is the left arrow pressed?
//   if (keyIsDown(LEFT_ARROW)) {
//     // If it is, set the x velocity to be negative
//     circle.vx = -circle.speed;
//   }
//   // Otherwise is the right arrow pressed?
//   else if (keyIsDown(RIGHT_ARROW)) {
//     // If it is, set the x velocity to be positive
//     circle.vx = circle.speed;
//   }
//   // If neither of those keys are pressed...
//   else {
//     // Then set the x velocity to 0 to stop moving horizontally
//     circle.vx = 0;
//   }
//
//   // Do the same thing with vertical movement and the UP and DOWN keys
//   if (keyIsDown(UP_ARROW)) {
//     circle.vy = -circle.speed;
//   }
//   else if (keyIsDown(DOWN_ARROW)) {
//     circle.vy = circle.speed;
//   }
//   else {
//     circle.vy = 0;
//   }
//
//   circle.x = circle.x + circle.vx;
//   circle.y = circle.y + circle.vy;
//
//   ellipse(circle.x, circle.y, circle.size);
// }
//
// //store typed
// let typing = ``; // Empty string to begin with
//
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(0);
//
//   // Display our cumulative typing variable on the canvas...
//   fill(255);
//   textSize(32);
//   textAlign(CENTER, CENTER);
//   text(typing, width / 2, height / 2);
// }
//
// function keyTyped() {
//   // Whenever a "typeable" key is pressed, add the most recent key to our typing string
//   // (Using + with two strings like this is called concatenation, adding them together)
//   typing = typing + key;
// }
