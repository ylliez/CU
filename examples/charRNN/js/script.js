/*
LSTM Generator example with p5.js
Built from ml5.js charRNN examples: https://github.com/ml5js/ml5-data-and-training/tree/master/models/charRNN
*/

const FilePath = `https://raw.githubusercontent.com/ml5js/ml5-data-and-models/main/models/charRNN`;
let author = [`hemingway`, `woolf`, `bolano`, `darwin`, `shakespeare`];
let charRNN;
let text, textArray;
let line1, line2, line3;
let line = [];
let haiku;

function setup() {
  let randomAuthor = random(author);
  document.getElementById('author').innerHTML = randomAuthor;
  // Create the LSTM Generator passing it the model directory
  charRNN = ml5.charRNN(`${FilePath}/${randomAuthor}/`, generate);
}

function generate() {
  // necessary data: Seed text, temperature, length to outputs
  const genData = {
    seed: `the meaning of life is `,
    temperature: 0.51,
    length: 100,
    line: undefined
  };

  // generate text with the charRNN
  charRNN.generate(genData, gotData);

  // When it's done
  function gotData(err, result) {
    text = result.sample;
    insertAuthor();
    splitText();
  }
}

function insertAuthor() {
}

function splitText() {
  textArray = text.split(" ");
  console.log(text);
  console.log(textArray.length);
  // line[0] = [];
  let line1array = [];
  let line2array = [];
  let line3array = [];
  for (var i = 0; i < 5; i++) { line1array[i] = textArray[i]; }
  for (var i = 0; i < 7; i++) { line2array[i] = textArray[i+5]; }
  for (var i = 0; i < 5; i++) { line3array[i] = textArray[i+12]; }
  line1 = line1array.join(' ');
  line2 = line2array.join(' ');
  line3 = line3array.join(' ');
  haiku = `${line1}\n${line2}\n${line3}`;
  console.log(haiku);
  line = [line1, line2, line3];
  for (var i = 0; i < 3; i++) {
    document.getElementById(`line-${i+1}`).innerHTML = line[i];
  }
}
