class Pedestrian {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.alive = true;
  }

  handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
      this.vx -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.vx += this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.vy -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.vy += this.speed;
    }
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  // NEW! display() draws a rectangle at the vehicle's position
  display() {
    push();
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  checkHit(vehicle) {
    if (
      this.x > vehicle.x - vehicle.width / 2 &&
      this.x < vehicle.x + vehicle.width / 2 &&
      this.y > vehicle.y - vehicle.height / 2 &&
      this.y < vehicle.y + vehicle.height / 2
    ) {
      this.alive = false;
    }
  }
}
