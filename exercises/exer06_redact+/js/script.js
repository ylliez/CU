"use strict";
// holders for grammar JSON & object
let json, grammar;
// holder for grammar generated text lines
let lines = []
const NUM_COMMANDS = 10;
const REVEAL_PROB = 0.1;
const ATTEMPT_FREQ = 1000;

function preload() {
  img = loadImage(`assets/images/Rembrandt_tablets.jpg`)
  json = loadJSON('assets/data/grammar.json');
}

function setup() {
  // set RiTa grammar rules
  grammar = RiTa.grammar(json);
  // generate 10 lines following the grammar
  for (let i = 0; i < NUM_COMMANDS; i++) {
    lines[i] = grammar.expand();
    document.getElementById(`cmd${i}`).innerHTML = lines[i];
  }
  // start timer for intervallic line revelation
  setInterval(revelation, ATTEMPT_FREQ);
  // set query for click action, hides & changes command
  $(`.apocrypha`).on(`click`, obfuscate);
}

function draw() {
  dynamicCanvas.update();
}

function revelation() {
  $(`.esoteric`).each(attemptReveal);
  // $(`.esoteric`).each(attemptReveal, checkEnd);
}

function attemptReveal() {
  if (Math.random() < REVEAL_PROB) {
    $(this).removeClass(`esoteric`);
    $(this).addClass(`revealed`);
    checkEnd();
  }
}

function obfuscate() {
  $(this).removeClass(`revealed`);
  $(this).addClass(`esoteric`);
  $(this)[0].innerHTML = grammar.expand();
}

function checkEnd() {
  if (!$(`.esoteric`).length) {
    gameOver();
    // requestAnimationFrame(gameOver);
  }
}

function gameOver() {
  // $(`#secret-document`).obfuscate();
  // $(`.apocrypha`).css(`cursor`, `none`);
  alert(`You lose!`);
}

/* https://pippinbarr.github.io/cart263/exercises/raving-redactionist-plus-plus.html
- Improve the visual presentation by working with the CSS and HTML
- Use a fading effect to fade the redaction effect in and out (this will likely require .animate())
- Add audio to the experience (background music? the sound of a boring office? a pen squealing sound when you redact something? a gasp when something is revealed?)
- Allow the user to redact by clicking and dragging the mouse cursor over a reveal passage rather than clicking
- Add an ending of some kind to the experience if the user allows all the secrets to be revealed (“YOU LOST THE COLD WAR!!”)
- Have a computer voice read out revealed secrets and have the user “lose” if the computer finishes reading before they’ve esoteric it
- Make the secrets float off the “page” instead of just being revealed, and if they make it off the edge they’re gone forever - clicking them makes them go back to where they started
- Generate a text for redaction in code instead of having it already in the HTML (you’ll have to generate the redaction spans as well)
- Use ml5.js’s text features of a library like RiTa to generate the text being esoteric
*/
