class Bubble {

  constructor(x = random(width), y = height) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.vx = 0;
    this.vy = -2;
  }

  update() {
    this.move();
    this.wrap();
    this.display();
  }

  display() {
    push();
    fill(50, 50, 255);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  wrap() {
    if (this.y < 0)
      this.y = height;
  }

  reset() {
    this.y = 0;
    this.vy += 1;
    this.size += 5;
  }

}
