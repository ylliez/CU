"use strict";

const ANIMATION_DURATION = 500;
const SECRET_ANSWER = `Theremin`;

$(`.secret`).each(function() {
  $(this).on(`mouseenter`, function(event) {
    $(this).addClass(`found`, ANIMATION_DURATION);
  });
});

$(`.secret`).draggable({
  helper: `clone`,
});

$(`#answer`).droppable({
  drop: function(event, ui) {
    let character = ui.draggable;
    $(this).append(character.text());
    character.draggable(`option`,`disable`,true);
    character.removeClass(`found`, ANIMATION_DURATION);
    character.off(`mouseenter`);
    if($(this).text() === SECRET_ANSWER) { $(`#solved-dialog`).dialog(`open`); }
  }
});

$(`#solved-dialog`).dialog({
  autoOpen: false,
  modal: true,
  buttons: { "I know": function() { $(this).dialog(`close`); }
}});

/*
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
