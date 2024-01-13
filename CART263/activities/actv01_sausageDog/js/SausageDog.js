class SausageDog extends Animal {

  constructor(x, y, image) {
    super(x, y, image);

    this.rotationSpeed = 0.25;
    this.found = false;
  }

  update() {
    super.update();
    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

  // mousePressed() {
  //   if (mouseX > this.x-this.image.width/2 &&
  //       mouseX < this.x+this.image.width/2 &&
  //       mouseY > this.y-this.image.height/2 &&
  //       mouseY < this.y+this.image.height/2) {
  //     this.found = true;
  //   }
  // }

  //more generic
  mousePressed() {
    if (this.overlap(mouseX,mouseY)) {
      this.found = true;
    }
  }

}
