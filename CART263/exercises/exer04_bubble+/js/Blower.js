class Blower extends Hand {

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
    line(this.ring.base.x, this.ring.base.y, this.middle.tip.x, this.middle.tip.y);
    line(this.index.base.x, this.index.base.y, this.middle.tip.x, this.middle.tip.y);
    pop();
  }

  checkInteraction(bubble) {
    let d = dist(this.middle.tip.x, this.middle.tip.y, bubble.x, bubble.y);
    if (d < bubble.size / 2) { bubble.size += 1; }
    if (bubble.size > 200) {
      return true;
    }
  }

  drawSkeleton() {
    super.drawSkeleton();
  }

}
