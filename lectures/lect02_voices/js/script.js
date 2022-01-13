/**
learning about Web Speech API, a text-speech browser functionality
https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

learning about annyang!, a JS library for browser speech-recognition
homepage: https://www.talater.com/annyang/
API: https://github.com/TalAter/annyang/blob/master/docs/README.md
FAQ: https://github.com/TalAter/annyang/blob/master/docs/FAQ.md

functions:
addCommands()
start()
pause()
resume()
setLanguage()
removeCommands()
addCallback() - result & resultNoMatch
trigger() - simulate speech
*/

// // api documentation
// if (annyang) {
//   // Let's define our first command. First the text we expect, and then the function it should call
//   let commands = {
//     'show tps report': function() {
//       $('#tpsreport').animate({bottom: '-100px'});
//     }
//   };
//   // Add our commands to annyang
//   annyang.addCommands(commands);
//   // Start listening. You can call this here, or attach this call to an event, button, etc.
//   annyang.start();
// }
//
// else { alert(`Sorry, this page requires speech recognition. Please use Chrome on a desktop computer.`); }

// // experimentation
// function setup() {
//   createCanvas(500, 500);
//   // Check if annyang is available
//   if (annyang) {
//     // Create commands
//     let commands = {
//       // If they say hello, say hi back!
//       // 'hello': function() {
//       //   alert(`Hi there!`);
//       // }
//       //same, but with named functions
//       'hello': sayHello,
//       'bye': sayBye
//     }
//     // Add the commands and start annyang
//     annyang.addCommands(commands);
//     annyang.start();
//   }
// }
//
// function draw() {
//   background(0);
// }
//
// // named function that triggers an alert that says hello
// function sayHello() {
//   alert(`Hi there!`);
// }
//
// // named function that triggers an alert that says goodbye
// function sayBye() {
//   alert(`Goodbye!`);
// }

// // voice activated switch
// let on = false;
//
// function setup() {
//   createCanvas(500, 500);
//   // Check if annyang is available
//   if (annyang) {
//     // Create commands
//     let commands = {
//       'on': function() {
//         on = true;
//       },
//       'off': function() {
//         on = false;
//       }
//     }
//     // Add the commands and start annyang
//     annyang.addCommands(commands);
//     annyang.start();
//   }
// }
//
// function draw() {
//   // If on is true, make the background white, otherwise make it black
//   if (on) {
//     background(255);
//   }
//   else {
//     background(0);
//   }
// }

// // affect
// let face = `:-|`;
//
// function setup() {
//   createCanvas(500, 500);
//   // Check if annyang is available
//   if (annyang) {
//     // Create commands
//     let commands = {
//       'love': love,
//       'hate': hate
//     }
//     // Add the commands and start annyang
//     annyang.addCommands(commands);
//     annyang.start();
//   }
// }
//
// function draw() {
//   background(0);
//
//   // Draw the current face emoji in the center of the canvas
//   // rotated to display more like a regular face
//   push();
//   translate(width / 2, height / 2);
//   rotate(PI / 2);
//   textSize(400);
//   textAlign(CENTER, CENTER);
//   fill(255);
//   text(face, 0, 0);
//   pop();
// }
//
// function love() {
//   face = `:-)`;
// }
//
// function hate() {
//   face = `:-(`;
// }

// Default name
let userName = `stranger`

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang) {
    let commands = {
      // A command that listens for "my name is..." and the captures
      // whatever they say after that and sends it as an argument to setName()
      'My name is *name': setName
    }
    annyang.addCommands(commands);
    annyang.start();
  }
}

// Sets the current username to whatever argument is passed to it by annyang!
// Now how what the user said will be passed into the parameter called name
function setName(name) {
  userName = name;
}

function draw() {
  background(0);

  // Greet the user
  push();
  fill(255, 255, 0);
  textSize(32);
  rectMode(CENTER);
  text(`Hi there, ${userName}!`, 100, 100);
  pop();
}
