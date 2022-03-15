class Hand {

  constructor() {
    this.coordinates = [];
    this.index = {
      x: undefined,
      y: undefined
    };
    this.indexGhost = {
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
    this.coordinate();
    // this.displayIndexTip();
  }

  coordinate() {
    this.indexGhost.x = this.index.x;
    this.indexGhost.y = this.index.y;
    let index = this.coordinates.annotations.indexFinger;
    let indexTip = index[3];
    this.index.x = indexTip[0];
    this.index.y = indexTip[1];
  }

  displayIndexTip() {
    push();
    fill(this.color.r,this.color.g,this.color.b);
    noStroke();
    ellipse(this.index.x, this.index.y, this.size);
    pop();
  }

}
