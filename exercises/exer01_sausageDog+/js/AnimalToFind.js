class AnimalToFind extends Animal {

  constructor(x, y, image) {
    super(x, y, image);

    this.rotationSpeed = 0.25;
    this.found = false;
  }

  update() {
    super.update();
    if (this.found) {
      this.victorySpin();
    }
  }

  mousePressed() {
    if (this.overlap(mouseX,mouseY) && !this.found) {
      this.found = true;
    }
  }

  victorySpin() {
    this.angle += this.rotationSpeed;
  }

}
