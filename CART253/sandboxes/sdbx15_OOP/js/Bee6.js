class Bee {
  // The constructor() sets up a flower's properties
  constructor(x, y) {
    // Position and size information
    this.x = x;
    this.y = y;
    this.size = 40;
    this.minSize = 10;
    this.maxSize = 40;
    this.speed = 1;
    this.vx = 0;
    this.vy = 0;
    this.jitteriness = 0.05;
    this.shrinkRate = 0.01;
    this.growthRate = 1;
    this.alive = true;
  }

  shrink() {
    this.size -= this.shrinkRate;
    if (this.size <= this.minSize) {
      this.alive = false;
    }
  }

  // tryToPollinate() attempts to pollinate the flower provided as a parameter
  // If pollination succeeds (the two overlap) then both grow
  tryToPollinate(flower) {
    // Calculate the distance between the bee and the flower
    let d = dist(this.x, this.y, flower.x, flower.y);
    // If they overlap...
    if (d < this.size / 2 + flower.size / 2) {
      // The bee should grow
      // Notice how we can call OTHER METHODS of the Bee by using "this"
      // So this.grow() calls the grow() method for THIS bee
      this.grow();
      // The flower should react to being pollinated so we call its method
      // that handles that!
      flower.pollinate();
    }
  }

  // grow() causes the bee to get bigger up to a maximum (called by tryToPollinate())
  grow() {
    // Grow by increasing the size by a set amount
    this.size += this.growthRate;
    // Constrain the growth to a maximum
    this.size = constrain(this.size, 0, this.maxSize);
  }

  move() {
    // First check if we should change direction
    let r = random(0, 1);
    if (r < this.jitteriness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    // Update position with velocity to actually move
    this.x += this.vx;
    this.y += this.vy;

    // Constrain to the canvas (guess it's a walled garden!)
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  // display() draws our bee onto the canvas
  display() {
    push();
    // Wings on either side
    fill(255, 255, 255);
    noStroke();
    ellipse(this.x - this.size / 2, this.y, this.size / 2);
    ellipse(this.x + this.size / 2, this.y, this.size / 2);
    pop();

    // Body
    push();
    fill(225, 225, 50);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();

    // Eyes
    push();
    fill(0, 0, 0);
    noStroke();
    ellipse(this.x - this.size / 10, this.y, this.size / 10);
    ellipse(this.x + this.size / 10, this.y, this.size / 10);
    pop();
  }

  // display() {
  //   push();
  //   noStroke();
  //   let colAlt = `black`;
  //   for (let i = 1; i < 4; i+=0.3) {
  //
  //     switch (colAlt) {
  //       case `black`:
  //       fill(255, 255, 125);
  //       colAlt = `yellow`;
  //       break;
  //       case `yellow`:
  //       fill(0);
  //       colAlt = `black`;
  //       break;
  //       default:
  //     }
  //     ellipse(this.x, this.y, this.size/i);
  //   }
  //   pop();
  // }
}
