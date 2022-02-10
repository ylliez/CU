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
    // // cone to midpoint between finger bases
    // line(this.average.base.x, this.average.base.y, this.index.tip.x, this.index.tip.y);
    // line(this.average.base.x, this.average.base.y, this.middle.tip.x, this.middle.tip.y);
    // line(this.index.base.x, this.index.base.y, this.index.tip.x, this.index.tip.y);
    // // line(this.index.base.x, this.index.base.y, this.middle.tip.x, this.middle.tip.y);
    // line(this.middle.base.x, this.middle.base.y, this.middle.tip.x, this.middle.tip.y);
    pop();
    //
    push();
    noFill();
    stroke(0);
    circle(this.index.base.x, this.index.base.y, 40);
    circle(this.middle.base.x, this.middle.base.y, 40);
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
