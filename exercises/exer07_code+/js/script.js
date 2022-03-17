/*Gematrie, Kabbalah, Torah code */

"use strict";

const ANIMATION_DURATION = 500;
const SECRET_ANSWER = `Theremin`;
let textJSON, text, textChars = [];
let els, elsChars = [];
let charFound = false;
let numCharsFound = 0;
let spaceChars = [];
let spaceFound = false;

$.getJSON("./assets/data/texts/genesis.json", function(data) { getText(data) } );

function getText(json) {
  textJSON = json;
  loadText();
}

function loadText() {
 // text = ("dont&nbsp;do&nbsp;drugs");
 text = (textJSON[Math.floor(Math.random()*textJSON.length)]);
 console.log(text);
 $(`#text`).html(`<div data-splitting>${text}</div>`);
 Splitting();
 textChars = $(`.char`);
 spaceChars = $(`.whitespace`);
 // console.log($(`.char`).text());
 getELS();
}

function getELS() {
  $.getJSON( "./assets/data/texts/ELS.json", function(data) { loadELS(data) } );
}

function loadELS(json) {
  // els = (json[0]);
  els = (json[Math.floor(Math.random()*json.length)]);
  elsChars = Array.from(els)
  console.log(els);
  // console.log(elsChars);
  for (let i = 0; i < elsChars.length; i++) {
  console.log(elsChars[i]);
    spaceChars.each(function() {
      if(elsChars[i] === $(this).text() && !spaceFound) {
        // console.log($(this).text());
        // console.log($(this));
        if(!$(this).hasClass("secret")){
          $(this).addClass("secret");
          spaceFound = true;
          numCharsFound++;
        }
      }
    });
    textChars.each(function() {
      if(elsChars[i] === $(this).text() && !charFound) {
        // console.log($(this).text());
        // console.log($(this));
        if(!$(this).hasClass("secret")){
          $(this).addClass("secret");
          charFound = true;
          numCharsFound++;
        }
      }
    });
    charFound = false;
    spaceFound = false;
  }
  verifyMatch();
}

function verifyMatch() {
  if (numCharsFound === elsChars.length) {
    console.log("ELS loaded");
    styleSecret();
  }
  else {
    console.log("Failed to load ELS.");
    textChars.removeClass("secret");
    numCharsFound = 0;
    // getELS();
    loadText();
  }
}

function styleSecret() {
  $(`.secret`).each(function() {
    $(this).on(`mouseenter`, function(event) {
      $(this).addClass(`found`, ANIMATION_DURATION);
    });
  });

  $(`.secret`).draggable({
    helper: `original`,
    revert: true,
  });
}

$(`#instructions-dialog`).dialog({
  modal: true,
  resizable: false,
  height: "auto",
  width: 600,
  buttons: { "Play!": function() { $(this).dialog(`close`); } }
});

$( function() {
    $( document ).tooltip();
  } );


$(`#answer`).droppable({
  drop: function(event, ui) {
    let freshFromText = ui.draggable[0].className.includes("secret");
    if (freshFromText) {
      let character = ui.draggable;
      console.log(character);
      $(this).append(`<span class="message">${character.html()}</span>`);
      character.draggable(`disable`);
      character.removeClass(`found`, ANIMATION_DURATION);
      character.off(`mouseenter`);
      checkSolution();
    }
  }
});

function checkSolution() {
  console.log("answer:" + $(`.message`).text() + " / solution: " + els);
  if($(`.message`).text() === els) { $(`#solved-dialog`).dialog(`open`); }
}

$(`#answer`).sortable({
  axis: `x`,
  cursor: "move",
  update: checkSolution
});

$(`#solved-dialog`).dialog({
  autoOpen: false,
  modal: true,
  buttons: { "I know": function() { $(this).dialog(`close`); }
}});

/* https://pippinbarr.github.io/cart263/exercises/code-taker-plus-plus.html
- Rework the HTML and CSS to make this a more engaging presentation of the idea
- Change to a different text and secret message to make it your own
- Add a modal instructions dialog when the page loads that explains to the user what they’re meant to be doing
- Change to a different style of secret message (use words? user emojis? have things out of order? have multiple possible - messages?)
- Add some more impressive effects to the different actions like finding secret letters, dragging them, dropping them, and - getting the secret answer
- Add a sound effect using the HTMLAudioElement that plays when the user solves the puzzle
- Allow the user to remove letters from the answer area in case they mess up
- Add the ability to view the secret letters in situ with a special button or keyboard command that fades out the rest of the poem
- Reverse the idea by having the user drag and drop words into a poem (or other text), a bit more like Mad Libs
- Translate the idea to use images instead of text to create a pictogram version of the challenge
- Use a library like Splitting.js to make all the characters (or words) in the text draggable but give the user hints as to the - correct answer they need to build up
- Change to a different style of interaction than dragging and dropping (make the words build up and move with the cursor on selection?)
… and many more?
*/
