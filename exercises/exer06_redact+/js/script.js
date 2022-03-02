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
