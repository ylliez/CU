"use strict";
// holders for grammar JSON & object
let json, grammar;
const NUM_COMMANDS = 10;
const REVEAL_PROB = 0.01;
const ATTEMPT_FREQ = 50;
// holders for sound effects and info
let sfx = [];
const NUM_SOUNDS = 8;

function preload() {
  json = loadJSON('assets/data/grammar.json');
  for (let i = 0; i < NUM_SOUNDS; i++) {
    sfx[i] = loadSound(`assets/sounds/sfx_holy_${i}.wav`);
  }
}

function setup() {
  // set RiTa grammar rules
  grammar = RiTa.grammar(json);
  // generate 10 lines following the grammar
  for (let i = 0; i < NUM_COMMANDS; i++) {
    document.getElementById(`cmd${i}`).innerHTML = grammar.expand();
  }
  // start timer for intervallic line revelation
  setInterval(revelation, ATTEMPT_FREQ);
  // set query for click action, hides & changes command
  $(`.apocrypha`).on(`click`, obfuscate);
}

function draw() {
}

function revelation() {
  // $(`.esoteric`).each(attemptReveal);
  $(`.esoteric`).each(attemptReveal, checkEnd);
}

function attemptReveal() {
  if (Math.random() < REVEAL_PROB) {
    random(sfx).play();
    $(this).removeClass(`esoteric`);
    $(this).addClass(`revealed`);
    $(this).animate( { "opacity": 1 }, 1000, checkEnd);
  }
}

function obfuscate() {
  $(this).animate( { "opacity": 0 }, 1000, function() {
    $(this)[0].innerHTML = grammar.expand();
  });
  $(this).removeClass(`revealed`);
  $(this).addClass(`esoteric`);
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
- Use a fading effect to fade the redaction effect in and out (this will likely require .animate())
- Allow the user to redact by clicking and dragging the mouse cursor over a reveal passage rather than clicking
- Add an ending of some kind to the experience if the user allows all the secrets to be revealed (“YOU LOST THE COLD WAR!!”)
- Have a computer voice read out revealed secrets and have the user “lose” if the computer finishes reading before they’ve esoteric it
*/
