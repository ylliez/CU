// A global variable to store our data in
let tarot;
// A global variable to store our fortune in
let fortune;

function preload() {
  // Load the JSON data from a file online!
  tarot = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Choose a random card
  let card = random(tarot.tarot_interpretations);
  // Choose a random fortune
  fortune = random(card.fortune_telling);
}

function draw() {
  background(0);

  // Display the fortune
  push();
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255, 255, 0);
  // Center the resulting text box
  rectMode(CENTER);
  // Use width and height properties to break up the text
  text(fortune, width / 2, height / 2);
  pop();
}
