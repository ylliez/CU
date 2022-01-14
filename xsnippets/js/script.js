/**
learning about Web Speech API, a text-speech browser functionality
https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

learning about ResponsiveVoice, a JS library for browser text-to-speech
homepage: https://responsivevoice.org/
API res: https://responsivevoice.org/api/
*/

// // testing parameters
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(0);
// }
//
// function mousePressed() {
//   // responsiveVoice.speak("hello world");
//   // responsiveVoice.speak("hello... world?");
//   // responsiveVoice.speak("Salut, monde. Comment ça va?");
//   // responsiveVoice.speak("23948903284023");
//   // responsiveVoice.speak("2 3 9 4 8 9 0 3 2 8 4 0 2 3");
//   // responsiveVoice.speak("sdjfhlsfhlasdmuhleuwifmla");
//   // responsiveVoice.speak("hello world", "UK English Male");
//   // responsiveVoice.speak("I say! Pip pip! Toodle-oo!", "UK English Male");
//   // responsiveVoice.speak("I say! Pip pip! Toodle-oo!", "US English Male");
//   // responsiveVoice.speak("I am crawling on the ceiling just above your head right now, watching you...", "UK English Male");
//   // responsiveVoice.speak("hello world", "Frida Kahlo as performed by Salma Hayek");
//   // responsiveVoice.speak("hello world", "French Female");
//   // responsiveVoice.speak("Bonjour! Comment ça va?", "French Female");
//   // responsiveVoice.speak("Hello world", "UK English Male");
//   // responsiveVoice.speak("Hello world", "UK English Male", { pitch: 0.5} );
//   // responsiveVoice.speak("Hello world", "UK English Male", { pitch: 2} );
//   // responsiveVoice.speak("Hello world", "UK English Male", { rate: 0.5} );
//   // responsiveVoice.speak("Hello world", "UK English Male", { rate: 2} );
//   // responsiveVoice.speak("Hello world", "UK English Male", { volume: 0.5} );
//   // responsiveVoice.speak("Hello world", "UK English Male", { volume: 0.1} );
//   // //Fast and squeaky?
//   // responsiveVoice.speak("Hello world", "UK English Male", {
//   //   pitch: 2,
//   //   rate: 2,
//   //   volume: 1
//   // });
//   // //Slow and scary?
//   // responsiveVoice.speak("Hello world", "UK English Male", {
//   //   pitch: 0.2,
//   //   rate: 0.5,
//   //   volume: 1
//   // });
// }

// // callbacks
// let phrase = `Hello, world!`;
// let saying = ``; // Track what is currently being said
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }
//
// function draw() {
//   // Display what is currently being said...
//   background(255);
//
//   push();
//   textSize(32);
//   textAlign(CENTER);
//   text(saying, width / 2, height / 2);
//   pop();
// }
//
// function mousePressed() {
//   responsiveVoice.speak(phrase, "UK English Male", {
//     onstart: showSpeaking,
//     onend: hideSpeaking
//   });
// }
//
// function showSpeaking() {
//   saying = phrase;
// }
//
// function hideSpeaking() {
//   saying = ``;
// }

let voiceList; // To remember the array of voices
let currentVoiceName = ``;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Get the array of voices
  voiceList = responsiveVoice.getVoices();
}

function draw() {
  background(255);

  push();
  textSize(32);
  textAlign(CENTER);
  text(currentVoiceName,width/2,height/2);
  pop();
}

function mousePressed() {
  // Choose a random voice object from the list
  let voice = random(voiceList);
  // We need the "name" property of our randomly chosen voice object
  let currentVoiceName = voice.name;

  // Say the text using the randomly chosen voice and with random rate and pitch.
  responsiveVoice.speak("Now I talk like this.", currentVoiceName);
}
