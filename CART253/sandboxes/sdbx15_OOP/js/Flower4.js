class Flower {

  // The constructor() sets up a flower's properties
  constructor(config) {
    // Position and size information
    this.x = config.x;
    this.y = config.y;
    this.size = config.size;
    this.stemLength = config.stemLength;
    this.stemThickness = config.stemThickness;
    this.petalThickness = config.petalThickness;
    // Color information
    this.stemColor = config.stemColor;
    this.petalColor = config.petalColor;
    this.centreColor = config.centreColor;
  }

  // displays the flower on the canvas
  display() {
    push();
    // Set the stroke weight for the petals and the stem
    strokeWeight(this.stemThickness);
    // Draw a line for the stem
    stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
    line(this.x, this.y, this.x, this.y + this.stemLength);
    // Draw a circle with a heavy outline for the flower
    strokeWeight(this.petalThickness);
    fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
    stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
