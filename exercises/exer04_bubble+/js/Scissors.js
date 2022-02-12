class Scissors extends Hand {

  constructor() {
    super();
  }

  update() {
    super.update();
    this.display();
  }

  display() {
    push();
    stroke(0);
    strokeWeight(2);
    line(this.middle.base.x, this.middle.base.y, this.index.tip.x, this.index.tip.y);
    line(this.index.base.x, this.index.base.y, this.middle.tip.x, this.middle.tip.y);

    // // // cone to midpoint between finger bases
    // line(this.midB.i2m.x, this.midB.i2m.y, this.index.tip.x, this.index.tip.y);
    // line(this.midB.i2m.x, this.midB.i2m.y, this.middle.tip.x, this.middle.tip.y);
    // let x = this.index.tip.x - this.index.base.x;
    // let y = this.index.tip.y - this.index.base.y;
    //
    // push();
    // translate(x, y);
    // rotate(180);
    // line(this.midB.i2m.x, this.midB.i2m.y, this.index.tip.x, this.index.tip.y);
    //
    //
    // // let offsetX = this.midB.i2m.x+this.index.tip.x;
    // // let offsetX = this.midB.i2m.x + (this.index.tip.x - this.midB.i2m.x);
    // // let offsetY = this.midB.i2m.y + (this.midB.i2m.y - this.index.tip.y);
    // // line(this.midB.i2m.x, this.midB.i2m.y, offsetX, offsetY);
    // // line(this.midB.i2m.x, this.midB.i2m.y, this.middle.tip.x, this.middle.tip.y);
    //
    //
    // // line(this.index.base.x, this.index.base.y, this.index.tip.x, this.index.tip.y);
    // // // line(this.index.base.x, this.index.base.y, this.middle.tip.x, this.middle.tip.y);
    // // line(this.middle.base.x, this.middle.base.y, this.middle.tip.x, this.middle.tip.y);
    // pop();

    push();
    noFill();
    stroke(0);
    strokeWeight(5);
    circle(this.index.base.x, this.index.base.y, 30);
    circle(this.middle.base.x, this.middle.base.y, 30);
    pop();

    // display bounding triangle for collision detection
    // push();
    // noFill();
    // stroke(120);
    // triangle(this.average.base.x, this.average.base.y, this.index.tip.x, this.index.tip.y, this.middle.tip.x, this.middle.tip.y);
    // pop();
  }

  checkInteraction(bubble) {
    let ellipseInScissors = collidePointTriangle(bubble.x, bubble.y, this.midB.i2m.x, this.midB.i2m.y, this.index.tip.x, this.index.tip.y, this.middle.tip.x, this.middle.tip.y);
    if (ellipseInScissors && this.isSnip) { return true; }
  }

  drawSkeleton() {
    super.drawSkeleton();
  }

}
