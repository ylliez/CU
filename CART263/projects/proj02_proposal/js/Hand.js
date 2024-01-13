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
    this.size = 15;
    this.color = {
      r: 255,
      g: 0,
      b: 255
    }
  }

  update() {
    this.coordinate();
    this.displayIndexindex();
  }

  coordinate() {
    this.prev.x = this.index.x;
    this.prev.y = this.index.y;
    this.index = this.coordinates.annotations.indexFinger[3]
    this.index.x = this.index[0];
    this.index.y = this.index[1];
  }

  displayIndexindex() {
    push();
    fill(this.color.r,this.color.g,this.color.b);
    noStroke();
    ellipse(this.index.x, this.index.y, this.size);
    pop();
  }

}
