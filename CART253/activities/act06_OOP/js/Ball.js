class Ball {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = (width+height)/50;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.active = true;
    this.b;
  }

  gravity(force) {
    this.ay += force;
  }

  move() {
    // implement acceleration to velocity
    this.vx += this.ax;
    this.vy += this.ay;
    // constrain to maximum velocity
    this.vx = constrain(this.vx,-this.maxSpeed,this.maxSpeed);
    this.vy = constrain(this.vy,-this.maxSpeed,this.maxSpeed);
    // implement velocity to position
    this.x += this.vx;
    this.y += this.vy;
    // update top and bottom values
    this.t = this.y - this.size / 2;
    this.b = this.y + this.size / 2;
    // check if active
    if(this.t > height) {
      this.active = false;
    }
  }

  bounce(paddle) {
    if (this.x >= paddle.l && this.x <= paddle.r && this.b >= paddle.t && this.b <= height) {
      this.vy = -this.vy;
      this.ay = 0;
    }
  }

  display() {
    push();
    noStroke();
    fill(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
