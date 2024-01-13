"use strict";

$(`.top-secret`).on(`click`,redact);

function redact() {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}

setInterval(revelation, 500);

function revelation() {
  $(`.redacted`).each(attemptReveal);
}

function attemptReveal() {
  if (Math.random() < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}
