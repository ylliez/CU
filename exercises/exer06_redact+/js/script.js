"use strict";

const REVEAL_PROB = 0.1;
const ATTEMPT_FREQ = 500;

setInterval(revelation, ATTEMPT_FREQ);

$(`.top-secret`).on(`click`,redact);

function revelation() {
  $(`.redacted`).each(attemptReveal);
}

function attemptReveal() {
  if (Math.random() < REVEAL_PROB) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}

function redact() {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}
