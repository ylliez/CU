class Bus extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.width = 100;
    this.height = 20;
    this.vx = 3;
  }

  display() {
    push();
    fill(0, 0, 255);
    super.display();
    pop();
  }
}
