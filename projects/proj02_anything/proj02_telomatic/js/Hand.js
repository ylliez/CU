class Hand {

  constructor() {
    this.coordinates = [];
    this.tip = {
      x: undefined,
      y: undefined
    };
    this.size = 15;
    this.color = {
      r: 255,
      g: 0,
      b: 255
    }
  }

  update() {
    this.getIndexTip();
    this.displayIndexTip();
  }

  getIndexTip() {
    this.tip = this.coordinates.annotations.indexFinger[3]
    this.tip.x = this.tip[0];
    this.tip.y = this.tip[1];
  }

  displayIndexTip() {
    push();
    fill(this.color.r,this.color.g,this.color.b);
    noStroke();
    ellipse(this.tip.x, this.tip.y, this.size);
    pop();
  }

}
