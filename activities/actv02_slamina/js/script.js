/**
Slamina
illiez

The program will speak the name of a common animal backwards and the user will have to say (with their voice) what they think it is in the form “I think it is x.” If they get it right, their guess will be displayed in green, if they get it wrong, their guess will be displayed in red.

animal names from Darius Kazemi's corpora project (https://github.com/dariusk/corpora/blob/master/data/animals/common.json)
  */

  "use strict";

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

  //
  function setup() {
    createCanvas(windowWidth, windowHeight);

    if (annyang) {
      let commands = {
        'I think it is *animal': guessAnimal
      }
      annyang.addCommands(commands);
      annyang.start();
    }
  }

  //
  function draw() {
    background(0);
    // select input display color based on input-matching
    if (currentAnswer === currentAnimal) { fill(0, 255, 0); }
    else { fill(255, 0, 0); }
    // display user input
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentAnswer.toUpperCase(), width / 2, height / 2);
  }

  function mousePressed() {
    currentAnimal = random(animals);
    let reverseAnimal = reverseString(currentAnimal);
    responsiveVoice.speak(reverseAnimal);
    // annyang.debug(true);
    // annyang.trigger(`weasel`);
    // guessAnimal(`weasel`);
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

  function guessAnimal(animal) {
    currentAnswer = animal.toLowerCase();
  }
