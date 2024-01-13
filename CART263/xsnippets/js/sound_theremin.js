// // basic oscillator
// "use strict";
//
// let oscillator; // To store our oscillator
//
// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();
//
//   // Create a new oscillator at 440Hz with a sine waveform
//   oscillator = new p5.Oscillator(440, `sine`);
// }
//
// function draw() {
//   background(0);
// }
//
// // mousePressed() starts our sine wave oscillator
// function mousePressed() {
//   oscillator.start();
// }
//
// // mouseReleased() stops our sine wave oscillator
// function mouseReleased() {
//   oscillator.stop();
// }

// // pitch test
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
//   oscillator.amp(0.1);
// }
//
// function draw() {
//   background(0);
//
//   // Calculate a frequency between 20-20000 based on the mouse's y position
//   // We go from height to 0 so that higher frequencies are higher visually
//   // on the canvas.
//   /// 20Hz-20kHz is the standard range of human hearing
//   let newFreq = map(mouseY, height, 0, 20, 20000);
//   // Set the frequency of the oscillator based on the mouse position
//   oscillator.freq(newFreq);
//
//   // Display the current frequency on the canvas so we can tell what it is
//   push();
//   textSize(32);
//   textAlign(LEFT, CENTER);
//   fill(255);
//   text(newFreq, 50, height / 2);
//   pop();
// }
//
// // mousePressed() starts our test
// function mousePressed() {
//   oscillator.start();
// }

// // pseudo-theremin
// "use strict";
//
// let oscillator; // To store our oscillator
//
// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();
//
//   // Create a new oscillator at 440Hz with a sine waveform
//   oscillator = new p5.Oscillator(440, `sine`);
// }
//
// function draw() {
//   background(0);
//
//   // Calculate a frequency between 0-440 based on the mouse's y position
//   // We go from height to 0 so that higher frequencies are higher visually
//   // on the canvas.
//   let newFreq = map(mouseY, height, 0, 0, 440);
//   // Set the frequency of the oscillator based on the mouse position
//   oscillator.freq(newFreq);
// }
//
// // mousePressed() starts our sine wave oscillator
// function mousePressed() {
//   oscillator.start();
// }

// less pseudo-theremin
"use strict";

let theramin; // To store our oscillator

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  // Create a new oscillator
  theramin = new p5.Oscillator(0, `sine`);
}

function draw() {
  background(0);

  // Calculate a frequency between 0-880 based on the mouse's y position
  // We go from height to 0 so that higher frequencies are higher visually
  // on the canvas.
  let newFreq = map(mouseY, height, 0, 0, 880);
  // Set the frequency of the theramin based on the mouse position
  theramin.freq(newFreq);

  // Calculate an amplitude based on the mouse's position on the x axis
  let newAmp = map(mouseX, 0, width, 0, 0.5);
  // Set the amplitude
  theramin.amp(newAmp);
}

// mousePressed() starts our theramin
function mousePressed() {
  theramin.start();
}
