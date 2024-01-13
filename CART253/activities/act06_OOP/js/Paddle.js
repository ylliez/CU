class Paddle {

  constructor() {
    this.w = width / 6;
    this.h = height / 50;
    this.x = width / 2;
    this.y = height - this.h / 2;
    this.l;
    this.r;
    this.t;
  }

  move() {
    this.x = mouseX;
    this.l = this.x - this.w / 2;
    this.r = this.x + this.w / 2;
    this.t = this.y - this.h / 2;
  }

  display() {
    push();
    noStroke();
    fill(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

}
