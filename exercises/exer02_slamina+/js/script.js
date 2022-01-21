/**
Slamina+
illiez

The program will speak the name of a common animal backwards and the user will have to say (with their voice) what they think it is in the form “I think it is x.”
If they get it right, their guess will be displayed in green, if they get it wrong, their guess will be displayed in red.
animal names from Darius Kazemi's corpora project (https://github.com/dariusk/corpora/blob/master/data/animals/common.json)
*/

"use strict";

let state = `title`;

const animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];
let currentAnimal = '';
let currentAnswer = '';
let answerFill = undefined;

let score = 0;
let guessedRight = false;

let timer = 0;
let seconds = 0;
let countdown = 0;

//
function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang) {
    let commands = {
      'Methinks *animal': guessAnimal
    }
    annyang.addCommands(commands);
    annyang.start();
  }
}

//
function draw() {
  background(0);
  // select input display color based on input-matching
  switch (state) {
    case `title`:
      title();
      break;
    case `sim`:
      sim();
      break;
    default:

  }
  //display score
  displayScore();
  displayTimer();
  if (countdown <= 0 || guessedRight) {
    noLoop();
  }
}

function title() {
  displayText(`Click to hear the name of the animal`);
}

function sim() {
  if (currentAnswer === currentAnimal) {
    score++;
    fill(0, 255, 0);
    guessedRight = true;
  }
  else {
    fill(255, 0, 0);
  }
  // display user input
  displayGuess(currentAnswer.toUpperCase());
  timer++;
}

function mousePressed() {
  if (state === `title`) {
    currentAnimal = random(animals);
    let reverseAnimal = reverseString(currentAnimal);
    responsiveVoice.speak(reverseAnimal,  "UK English Male", {onend: startSim});
  }

    // guessedRight = false;
}

// Reverses the provided string
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split('');
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join('');
  // Return the result
  return result;
}

function startSim() {
  state = `sim`;
}

function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
}

function displayText(toWrite) {
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(20);
  text(toWrite, width / 2, height / 2);
  pop();
}

function displayGuess(toWrite) {
  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  text(toWrite, width / 2, height / 3);
  pop();
}

function displayScore() {
  push();
  fill(255);
  textAlign(LEFT,TOP);
  textSize(32);
  text(score, width/10, height/10);
  pop();
}

function displayTimer() {
  seconds = floor(timer / 60);
  countdown = 20 - seconds;
  push();
  fill(255);
  textAlign(RIGHT,TOP);
  textSize(32);
  text(countdown, 9*width/10, height/10);
  pop();
}
