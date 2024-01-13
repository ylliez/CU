/**
Typewriter

Represents a "typewriter" that gradually types out the
provided string on the canvas.
*/

class Typewriter {

  /**
  Takes a string, position, dimensions, and rate and creates the required properties to drive a typewriter.
  */
  constructor(string, x, y, size, w, h, rate) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.w = w;
    this.h = h;
    this.string = string;
    this.currentCharacter = 0;
    this.rate = rate;
  }

  /**
  Determines current portion of string to display, displays it & increments  counter
  */
  update() {
    // Current portion of string to display
    let currentString = this.string.substring(0, this.currentCharacter);

    // display
    push();
    textAlign(CENTER,CENTER);
    textFont(`Courier`);
    textSize(this.size);
    text(currentString, this.x, this.y);
    // text(currentString, this.x, this.y, this.w, this.h);
    pop();

    // Increase current character to see next portion of string
   this.currentCharacter += this.rate;
 }
}

/*
Script code

// String to type
let string = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Duis euismod est vel leo congue egestas vitae nec sem.
Phasellus tempus commodo lacinia.
Nam vulputate nisl ut massa efficitur scelerisque.
Fusce est mauris, vulputate id pretium eget, porta ac urna.
In lacus libero, sagittis vitae lorem ac, rhoncus suscipit mauris.
In in lorem augue.
Sed eget eros tincidunt, fermentum est ac, congue lectus.`;

// Variable to store typewriter class
let bukowski = undefined;

function setup() {
  createCanvas(400, 400);

  // Create the typewriter (string, x, y, w, h, rate)
  bukowski = new Typewriter(string, 25, 25, 350, 200, 0.1);
}

function draw() {
  background(220);

  // Update the typewriter
  bukowski.update();
}

*/
