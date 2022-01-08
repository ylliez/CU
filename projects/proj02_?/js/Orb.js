class Orb {

  constructor(x, y, note) {
    // physics properties
    this.x = x;
    this.y = y;
    this.vd = 5;
    this.vx = random(-this.vd, this.vd);
    this.vy = random(-this.vd, this.vd);
    //shape properties
    this.size = 25;
    this.fill = {
      r: random(0, 255),
      g: random(0, 255),
      b: random(0, 255)
    }
    // oscillator properties
    this.oscillator = new p5.Oscillator(440, `sine`);
    this.fmin = 220;
    this.fmax = 440;
    this.oscillator.amp(0.1);
    this.oscillator.start();
    // synthesizer properties
    this.note = note;
    this.synth = new p5.PolySynth();
  }

  move() {
    // displacement
    this.x += this.vx;
    this.y += this.vy;
    // position-based pitch-shifting
    let d = dist(this.x,this.y,width/2,height/2);
    let dmax = dist(0,0,width/2,height/2);
    let newFreq = map(d,0,dmax,this.fmin,this.fmax);
    this.oscillator.freq(newFreq);
  }

  bounce() {
    if (this.x - this.size / 2 <= 0 || this.x + this.size / 2 >= width) {
      this.vx = -this.vx;
      this.playNote();
    }
    if (this.y - this.size / 2 <= 0 || this.y + this.size / 2 >= height) {
      this.vy = -this.vy;
      this.playNote();
    }
  }

  display() {
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x,this.y,this.size);
  }

  playNote() {
    this.synth.play(this.note,0.2,0,0.1);
  }

}

//We could do many other things:

// Add more physics so the balls bounce off each other and play notes
// Make balls deletable so the user can tweak their toy’s sound further
// Make balls draggable and throwable to give a little more finesse to the user’s input
// Calculate a ball’s frequency in a more sophisticated way rather than just the distance from the centre
// Change a ball’s fill based on its frequency
// Make a ball flash when it plays a note for visual feedback
// And so on!

//
// function draw() {
//   background(0);
//
//   // Calculate a frequency between 0-880 based on the mouse's y position
//   // We go from height to 0 so that higher frequencies are higher visually
//   // on the canvas.
//   let newFreq = map(mouseY, height, 0, 0, 880);
//   // Set the frequency of the theramin based on the mouse position
//   theramin.freq(newFreq);
//
//   // Calculate an amplitude based on the mouse's position on the x axis
//   let newAmp = map(mouseX, 0, width, 0, 0.5);
//   // Set the amplitude
//   theramin.amp(newAmp);
// }
//
// // mousePressed() starts our theramin
// function mousePressed() {
//   theramin.start();
// }
