class Pin extends Hand {

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
    line(this.index.base.x, this.index.base.y, this.index.tip.x, this.index.tip.y);
    pop();

    push();
    fill(255, 0, 0);
    noStroke();
    circle(this.index.base.x, this.index.base.y, 15);
    pop();
  }

  checkInteraction(bubble) {
    let d = dist(this.index.tip.x, this.index.tip.y, bubble.x, bubble.y);
    if (d < bubble.size / 2) { return true; }
  }

  drawSkeleton() {
    super.drawSkeleton();
  }

}
