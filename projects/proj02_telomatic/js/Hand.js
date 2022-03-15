class Hand {

  constructor() {
    this.coordinates = [];
    this.index = {
      x: undefined,
      y: undefined
    };
    this.prev = {
      x: undefined,
      y: undefined
    };
    this.size = 10;
  }

  update() {
    this.coordinate();
    this.displayIndexTip();
  }

  coordinate() {
    let index = this.coordinates.annotations.indexFinger;
    let indexTip = index[3];
    this.index.x = indexTip[0];
    this.index.y = indexTip[1];
  }

  displayIndexTip() {
    push();
    fill(0);
    noStroke();
    ellipse(this.index.x, this.index.y, this.size);
    pop();
  }

}
