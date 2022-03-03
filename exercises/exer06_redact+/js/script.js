"use strict";

const REVEAL_PROB = 0.1;
const ATTEMPT_FREQ = 500;

setInterval(revelation, ATTEMPT_FREQ);

$(`.top-secret`).on(`click`,redact);

function revelation() {
  $(`.redacted`).each(attemptReveal);
  // $(`.redacted`).each(attemptReveal, checkEnd);
}

function attemptReveal() {
  if (Math.random() < REVEAL_PROB) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
    checkEnd();
  }
}

function redact() {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}

function checkEnd() {
  if (!$(`.redacted`).length) {
    gameOver();
    // requestAnimationFrame(gameOver);
  }
}

function gameOver() {
  // $(`#secret-document`).hide();
  // $(`.top-secret`).css(`cursor`, `none`);
  alert(`You lose!`);
}

/* https://pippinbarr.github.io/cart263/exercises/raving-redactionist-plus-plus.html
- Improve the visual presentation by working with the CSS and HTML
- Find a different text to be redacted
- Add a counter to the page that tells the user how many currently revealed secrets there are (all jQuery selections have a .length property that tells you how many elements the selection found)
- Use a fading effect to fade the redaction effect in and out (this will likely require .animate())
- Add a second task in which the user can mouse over specific words or even letters to reveal a hidden message in the text, each element should highlight when the user finds them
- Add audio to the experience (background music? the sound of a boring office? a pen squealing sound when you redact something? a gasp when something is revealed?)
- Allow the user to redact by clicking and dragging the mouse cursor over a reveal passage rather than clicking
- Allow the user to redact using their voice
- Add an ending of some kind to the experience if the user allows all the secrets to be revealed (“YOU LOST THE COLD WAR!!”)
- Have a computer voice read out revealed secrets and have the user “lose” if the computer finishes reading before they’ve redacted it
- Make the secrets float off the “page” instead of just being revealed, and if they make it off the edge they’re gone forever - clicking them makes them go back to where they started
- Generate a text for redaction in code instead of having it already in the HTML (you’ll have to generate the redaction spans as well)
- Use ml5.js’s text features of a library like RiTa to generate the text being redacted
- Reposition the user as someone trying to get the secrets with an interesting revelation mechanics (maybe if they successfully print the document they win???)
… and many more?
*/
