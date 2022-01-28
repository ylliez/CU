/**
Slamina+
illiez

The program will speak the name of a common animal backwards and the user will have to say (with their voice) what they think it is in the form “I think it is x.”
If they get it right, their guess will be displayed in green, if they get it wrong, their guess will be displayed in red.
animal names from Darius Kazemi's corpora project (https://github.com/dariusk/corpora/blob/master/data/animals/common.json)
*/

// add interruption with annyang.addCallBack('soundstart', )
// broaden hits with resultMatch phrases

"use strict";

// gatekeeping for introduction, game and simulation, respectively
let isStarted = false;
let introPurveyed = false;
let state;

// various aspects of gamemaster: dialog array for introduction and instructions, annyang commands for different states, responses to delays and rejection
let attitude;
let line = 0;
const dialog = [
  `Oh, Hello there!`,
  `How polite! Are you eager to play a game?`,
  `Well then little one, let me tell you how to play. please acknowledge that you've understood each step. ok?`,
  `I am going to say the name of an animal, but backwards, and you have to say which animal you think it is.`,
  `The timer is on the top right, you have 10 seconds to guess`,
  `Your score is on the top left, every time you get it right, you get a point`,
  `If you are ready to start, say 'Go!'`
];
const commands = [
  { 'hello': intro2, 'hi': intro2, 'bonjour': intro2, 'skip':startGame },
  { 'yes': intro3, 'ok': intro3, 'no': abort },
  { 'yes': ack, 'ok': ack, 'no': noAck , 'go': startGame},
];
const apologies = { 'sorry': apologized }
const animalCommands = { '*animal': guessAnimal }
const overdue = [
  `What? You can't say 'hello' back? Were you raised during a period of systematic attentional undermining through enticingly compulsive technological sandboxing followed by a global pandemic enforcing intersubjective alienation at a societal scale? Get a hold of yourself and come back when you're ready to apologize.`,
  `Beep beep asshole, I don't have all day`
];

// various aspects of simulation: animal array, holders for selected animal and user guess, booleans for successful guess or lack or time
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
let guessedRight = false;
let outOfTime = false;
let outcome = '';

// UI: score and stopwatch
let score = 0;
let timer = 0;
let seconds = 0;
let countdown = 0;

// set up for UI, text-to-speech and voice recognition
function setup() {
  createCanvas(windowWidth, windowHeight);
  responsiveVoice.enableWindowClickHook();
  if (annyang) {
    annyang.start();
    annyang.debug();
  }
  else { alert('Submit to Google hegemony, use Chrome'); }
}

// runthrough
function draw() {
  background(0);
  // run introduction
  if (!introPurveyed) {
    intro();
  }
  // if introduction over, run game
  else {
    switch (state) {
      case `title`:
        title();
        break;
      case `sim`:
        sim();
        break;
      default:
    }
    //display score and timer
    displayScore();
    displayTimer();
    // reset if user has guessed correctly or run out of time
    if ( outOfTime || guessedRight) {
      responsiveVoice.speak(outcome, "UK English Male");
      reset();
    }
  }
}

// introduction loop running through intro sub-functions depending on user clicks or vocal input
function intro() {
  if (!isStarted) { displayText(`CLICK TO START`); }
  if (line >= 2) { displayText(`To skip instructions, say "Go"`); }
  if (line >= 4) { displayTimer(); }
  if (line >= 5) { displayScore(); }
}

// intro subfunction 1: greets user (if not greeted back, demands apology)
function intro1() {
  purgeCommands(commands[line]);
  responsiveVoice.speak(dialog[line], "UK English Male", {onend: startAttitude(waitForApology) } );
}

// intro subfunction 2: asks consent (if no, aborts game)
function intro2() {
  clearTimeout(attitude);
  line++;
  purgeCommands(commands[line]);
  responsiveVoice.speak(dialog[line], "UK English Male", {onend: startAttitude(repeatAttitude) } );
}

// aborts game
function abort() {
  clearTimeout(attitude);
  responsiveVoice.speak(`Oh, there's been a terrible misunderstanding then. My apologies. Goodbye.`,  "UK English Male");
  annyang.abort();
}

// set up timer is user is taking too long to respond
function startAttitude(consequence) {
  attitude = setTimeout(() => { responsiveVoice.speak(overdue[line], "UK English Male", {onend: consequence}); }, 5000);
}

// repeat timer if necessary
function repeatAttitude() {
  attitude = setTimeout(() => { responsiveVoice.speak(overdue[line], "UK English Male", {onend: repeatAttitude}); }, 5000);
}

// established annyang commands to allow user to apologize
function waitForApology() {
  purgeCommands(apologies)
}

// annyang command-based function responding to user apology, 30% chance of being allowed to restart, otherwise asked to apologize again
function apologized() {
  if (random() < 0.3) { restart(); }
  else { setTimeout(() => { responsiveVoice.speak(`say it again`,  "UK English Male"); }, 500); }
}

// generously allow user to continue
function restart() {
  line = 1;
  intro2();
}

// intro subfunction 3: proceeds with instructions
function intro3() {
  clearTimeout(attitude);
  line++;
  purgeCommands(commands[line]);
  responsiveVoice.speak(dialog[line], "UK English Male");
  // attitude = setTimeout(() => { responsiveVoice.speak(dianeg[line],  "UK English Male"); }, 5000);
}

function intro4() {
  // clearTimeout(attitude); ??
  responsiveVoice.speak(dialog[line], "UK English Male");
}

// annyang command-based function if instruction is understood, moves to next instruction
function ack() {
  line++;
  intro4();
}

// annyang command-based function if instruction is not understood, repeats instruction
function noAck() {
  intro4();
}

// parameter set-up for game start
function startGame() {
  clearTimeout(attitude);
  responsiveVoice.cancel();
  state = `title`;
  introPurveyed = true;
  purgeCommands(animalCommands);
}

// gatekeeper page for simulation
function title() {
  displayText(`Click to hear the name of the animal`);
}

// Generates random animal from JSON array, reverse the letters and speak it
function generateAnimal() {
  currentAnimal = random(animals);
  let reverseAnimal = reverseString(currentAnimal);
  responsiveVoice.speak(reverseAnimal,  "UK English Male", {onend: startSim});
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

// Starts simulation
function startSim() {
  state = `sim`;
}

// checks if user guess matches selected animal and displays on screen, in red if wrong, in green if right
function sim() {
  if (currentAnswer === currentAnimal) {
    score++;
    fill(0, 255, 0);
    guessedRight = true;
    outcome = 'yay';
    // reset();
  }
  else {
    fill(255, 0, 0);
  }
  // display user input
  displayGuess(currentAnswer.toUpperCase());
  if (countdown <= 0) {
    score--;
    outOfTime = true;
    outcome = 'boo';
  }

  // if (guessedRight) {
  //   congratulateUser();
  // }

  timer++;
}

// simulation spat parser
function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
}

// Reset parameters for another simulation
function reset(){
  guessedRight = false;
  outOfTime = false;
  currentAnswer = ``;
  outcome = ``;
  timer = 0;
  countdown = 10;
  state = `title`;
}

// basic text display function
function displayText(toWrite) {
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(20);
  text(toWrite, width / 2, height / 2);
  pop();
}

// text display function but larger and in color (woohoo..)
function displayGuess(toWrite) {
  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  text(toWrite, width / 2, height / 3);
  pop();
}

// score display (top left)
function displayScore() {
  push();
  fill(255);
  textAlign(LEFT,TOP);
  textSize(32);
  text(score, width/10, height/10);
  pop();
}

// timer decrementation and display (top right)
function displayTimer() {
  seconds = floor(timer / 60);
  countdown = 10 - seconds;
  push();
  fill(255);
  textAlign(RIGHT,TOP);
  textSize(32);
  text(countdown, 9*width/10, height/10);
  pop();
}

// reinvented deprecated init() which purges old commands when adding new ones
function purgeCommands(newCommands) {
  annyang.removeCommands();
  annyang.addCommands(newCommands);
}


function mousePressed() {
  if (!isStarted) {
    isStarted = true;
    intro1();
  }
  if (state === `title`) {
    generateAnimal();
  }

}
