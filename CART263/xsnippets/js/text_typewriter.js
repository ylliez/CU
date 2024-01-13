/**
Simple typewriter effect
Pippin Barr

This is a very simple (and not especially flexible) way to display text as if it's being written on a typewriter.
*/

// string to type
let string = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Duis euismod est vel leo congue egestas vitae nec sem.
Phasellus tempus commodo lacinia.
Nam vulputate nisl ut massa efficitur scelerisque.
Fusce est mauris, vulputate id pretium eget, porta ac urna.
In lacus libero, sagittis vitae lorem ac, rhoncus suscipit mauris.
In in lorem augue.
Sed eget eros tincidunt, fermentum est ac, congue lectus.`;
// holder for current last typed character
let currentCharacter = 0;
// margins for a sheet of paper effect
let pageMarginLR, pageMarginT, textMargin;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pageMarginLR = width / 8;
  pageMarginT = width / 12;
  textMargin = pageMarginLR / 3;
}

function draw() {
  background(220);

  // determine curretly displayed string segment from substring of total string going to current last typed character
  let currentString = string.substring(0, currentCharacter);

  // simulate sheet of paper
  push();
  fill(255);
  noStroke();
  rect(pageMarginLR, pageMarginT, width - pageMarginLR * 2, height - pageMarginT);
  pop();

  // Draw the current string on the page, with some margins
  push();
  textSize(24);
  textFont(`Courier`);
  textAlign(LEFT, TOP);
  text(currentString, pageMarginLR + textMargin, pageMarginT + textMargin, width - pageMarginLR * 2, height - pageMarginT);
  pop();

  // increase last typed character to get progressively longer substring ergo typed text.
  currentCharacter += 0.1;
  // currentCharacter += random(0,0.5); // Try adding random amounts for a more "naturalistic" pace of typing
}
