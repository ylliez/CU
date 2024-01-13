class SportsCar extends Car {
  // Create a new Car object that moves to the right
  constructor(x, y) {
    super(x, y);
    this.vx = 15;
  }

  // Display the car as a rectangle
  display() {
    push();
    super.display();
    fill(255, 255, 0);
    rectMode(CENTER);
    noStroke();
    rect(this.x, this.y - this.height / 10, this.width, this.height / 10)
    rect(this.x, this.y + this.height / 10, this.width, this.height / 10)
    pop();
  }
}
