// /**
// Title of Project
// Author Name
//
// understanding JSON:
// JSON (JavaScript Object Notation) is a format for describing structured data (file or accessed via API) that we can then load into our programs.
// plain text .json files containing either an object or an array. if object, properties are called names
//
// */
//
// "use strict";
//
// let tarot;
// let card;
// let fortune;
//
// function preload() {
//   tarot = loadJSON(`assets/data/tarot_interpretations.json`);
// }
//
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // Choose a random card
// card = random(tarot.tarot_interpretations);
//  // Choose a random fortune
//  fortune = random(card.fortune_telling);
// }
//
// function draw() {
//   background(0);
//
//   // // Get the description in a variable by following the correct path through the tarot object
//   // let description = tarot.description;
//   //
//   // // Display the meaning
//   // push();
//   // textSize(32);
//   // textAlign(CENTER);
//   // fill(255,255,0);
//   // text(description,width/2,height/2);
//   // pop();
//
//   // // Get the first shadow meaning into a variable by following the path through the tarot object
//   // let firstShadowMeaning = tarot.tarot_interpretations[0].meanings.shadow[0];
//   //
//   // // Display the meaning
//   // push();
//   // textSize(32);
//   // textAlign(CENTER);
//   // fill(255,255,0);
//   // text(firstShadowMeaning,width/2,height/2);
//   // pop();
//
//   // Display the fortune
//   push();
//   textSize(32);
//   textAlign(CENTER, CENTER);
//   fill(255, 255, 0);
//   // Center the resulting text box
//   rectMode(CENTER);
//   // Use width and height properties to break up the text
//   text(fortune, width / 2, height / 2);
//   pop();
// }

// JSON with callback (2nd argument, calls back w/ data set as first argument)
// A global variable to store our data in
let tarot;
// A global variable to store our fortune in
let fortune = `No fortune loaded.`;

function preload() {
  // NOTHING in preload because we will load the data dynamically on click
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Display the fortune
  push();
  textSize(32);
  textAlign(TOP, TOP);
  fill(255, 255, 0);
  // Center the resulting text box
  rectMode(CENTER);
  // Use width and height properties to break up the text
  text(fortune, width / 2, height / 2, width / 2, height / 2);
  pop();
}

function mousePressed() {
  // Call loadJSON as before, but provide a callback function to call when
  // the data has finished loading. The loaded data will be provided as an
  // argument when it is called.
  loadJSON("assets/data/tarot_interpretations.json", tarotLoaded);
}

// Note that our callback function has a PARAMETER that will have the loaded
// JSON data in it when the function is called
function tarotLoaded(data) {
  // Save the data loaded into our tarot variable for later if we need it
  tarot = data;
  // Choose a random card
  let card = random(tarot.tarot_interpretations);
  // Choose a random fortune
  fortune = random(card.fortune_telling);
}
