// Data from https://github.com/alexwohlbruck/cat-facts

let catFactData = undefined; // The loaded cat fact data
let catFactText = ``; // The current cat fact text

function preload() {
  catFactData = loadJSON(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // We get the catFact object as the first element of the array
  catFactText = catFactData.text;
  // Set the catFact text as the setup and punchline properties together
  // catFactText = `${catFact.setup}\n\n${catFact.punchline}`;
}

function draw() {
  background(0);

  // Display the current catFact
  push();
  fill(255, 255, 0);
  textSize(21);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  text(catFactText, width / 2, height / 2);
  pop();
}


// // callback methods allows us to use array functions, which is normally not possible given that JSON files are loaded as objects by default
// let catFactText = ``; // The current cat fact text
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }
//
// function draw() {
//   background(0);
//
//   // Display the current catFact
//   push();
//   fill(255, 255, 0);
//   textSize(21);
//   textAlign(CENTER, CENTER);
//   rectMode(CENTER);
//   text(catFactText, width / 2, height / 2);
//   pop();
// }
//
// function mousePressed() {
//   // JSON callback
//   loadJSON(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`, setFacts);
// }
//
// function setFacts(data) {
//   catFactText = data.text;
//   console.log(catFactText);
// }

// // OR by converting to array after preload
// let catFactData = []; // The loaded cat fact data
// let catFactObject = undefined; // The loaded cat fact data
// let catFactText = ``; // The current cat fact text
//
// function preload() {
//   catFactObject = loadJSON(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`);
// }
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//
//   // CONVERT THE DATA OBJECT BACK INTO AN ARRAY
//
//   // Get the full list of property names in the joke data object
//   let jokeKeys = Object.keys(catFactObject);
//   // Go through the keys and populate the actual data array with the associated values
//   for (let i = 0; i < jokeKeys.length; i++) {
//     let key = jokeKeys[i];
//     let element = catFactObject[key];
//     catFactData.push(element);
//   }
//
//   // We get the catFact object as the first element of the array
//   catFactText = catFactData[0];
// }
//
// function draw() {
//   background(0);
//
//   // Display the current catFact
//   push();
//   fill(255, 255, 0);
//   textSize(21);
//   textAlign(CENTER, CENTER);
//   rectMode(CENTER);
//   text(catFactText, width / 2, height / 2);
//   pop();
// }
