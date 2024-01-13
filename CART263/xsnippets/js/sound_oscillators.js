// // sin osc
// "use strict";
//
// let siren; // To store our oscillator
// let angle = 0; // The angle we'll use to oscillate the siren
// let angleIncrease = 0.1; // How much to increase the angle each frame
//
// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();
//
//   // Create a new oscillator
//   siren = new p5.Oscillator(0, `sine`);
//   // Set its amplitude down a bit or this could hurt
//   siren.amp(0.25);
// }
//
// function draw() {
//   background(0);
//
//   // Increase the angle
//   angle += angleIncrease;
//   // Calculate the result of the sine of the current angle
//   let sinAngle = sin(angle);
//   // Map the result (between -1 and 1) to a frequency range
//   let newFreq = map(sinAngle, -1, 1, 440, 880);
//
//   // Set the frequency of the oscillator based on the sin calculation
//   siren.freq(newFreq);
// }
//
// // mousePressed() starts our siren
// function mousePressed() {
//   siren.start();
// }

// // random osc
// "use strict";
//
// let oscillator; // To store our oscillator
//
// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();
//
//   // Create a new oscillator
//   oscillator = new p5.Oscillator(0, `sine`);
//   // Set its amplitude down a bit or this could hurt
//   oscillator.amp(0.25);
// }
//
// function draw() {
//   background(0);
//
//   // Generate a random number
//   let r = random(0, 1);
//   // Map the result (between 0 and 1) to a frequency range
//   let newFreq = map(r, 0, 1, 440, 880);
//
//   // Set the frequency of the oscillator based on the random value
//   oscillator.freq(newFreq);
// }
//
// // mousePressed() starts our siren
// function mousePressed() {
//   oscillator.start();
// }

// noise oscillate
"use strict";

let oscillator; // To store our oscillator
let t = 0; // The t (time) value to use with noise()
let tIncrease = 0.075; // How much to increase t each frame

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  // Create a new oscillator
  oscillator = new p5.Oscillator(0, `sine`);
  // Set its amplitude down a bit or this could hurt
  oscillator.amp(0.25);
}

function draw() {
  background(0);

  // Generate a Perlin noise value based on our t value
  let perlinValue = noise(t);
  // Map the result (between 0 and 1) to a frequency range
  let newFreq = map(perlinValue, 0, 1, 110, 880);
  // Set the frequency of the oscillator based on the Perlin value
  oscillator.freq(newFreq);
  // Increase t
  t += tIncrease;
}

// mousePressed() starts our siren
function mousePressed() {
  oscillator.start();
}
