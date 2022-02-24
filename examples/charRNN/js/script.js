// "use strict";
//
// let model = `hemingway`;
//
// function preload() {
//
// }
//
//
// function setup() {
//   // Create the character level generator with a pre trained model
//   // const rnn = ml5.charRNN('models/bolaño/', modelLoaded);
//   const rnn = ml5.charRNN(`https://raw.githubusercontent.com/ml5js/ml5-data-and-models/main/models/charRNN/${model}/`, modelLoaded);
//
//   // When the model is loaded
//   function modelLoaded() {
//     console.log('Model Loaded!');
//   }
//
//   // Generate content
//   // rnn.generate({ seed: 'she went to the ', length: 50 }, (err, results) => {
//   //   console.log(results);
//   //   console.log(results.sample);
//   //   text(results.sample, 0, height/2);
//   // });
//   rnn.predict({ seed: 'she went to the ', length: 50 }, (err, results) => {
//     console.log(results);
//     console.log(results.sample);
//     text(results.sample, 0, height/2);
//   });
//
// }
//
//
// /**
// Description of draw()
// */
// function draw() {
//
// }

// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
LSTM Generator example with p5.js
This uses a pre-trained model on a corpus of Virginia Woolf
For more models see: https://github.com/ml5js/ml5-data-and-training/tree/master/models/charRNN
=== */

let charRNN;
let textInput;
let lengthSlider;
let tempSlider;
let button;
let runningInference = false;
const FilePath = `https://raw.githubusercontent.com/ml5js/ml5-data-and-models/main/models/charRNN`;
let line1, line2, line3;
let haiku;

function setup() {

  // Create the LSTM Generator passing it the model directory
  charRNN = ml5.charRNN(`${FilePath}/woolf/`, generate);

}


// Generate new text
function generate() {
  // prevent starting inference if we've already started another instance
  if(!runningInference) {
    runningInference = true;

    // Grab the original text
    const original = `The meaning of life \nis `;
    // Make it to lower case
    const txt = original.toLowerCase();

    // Check if there's something to send
    if (txt.length > 0) {
      // This is what the LSTM generator needs
      // Seed text, temperature, length to outputs
      // TODO: What are the defaults?
      const data7 = {
        seed: original,
        temperature: 0.51,
        length: 200
      };
      const data5 = {
        seed: original,
        temperature: 0.51,
        length: 200
      };

      // Generate text with the charRNN
      charRNN.generate(data7, gotData7);
      charRNN.generate(data5, gotData5);

      haiku = `
${txt}
${line2}
${line3}
`
console.log(haiku);
      // When it's done
      function gotData7(err, result) {
        line2 = result.sample;
        console.log(line2);
      }
      function gotData5(err, result) {
        line3 = result.sample;
        runningInference = false;
      }
    }
  }
}
