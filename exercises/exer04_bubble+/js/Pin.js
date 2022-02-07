class Pin {

  constructor() {
    this.coordinates = [];
    this.tip = {
      x: undefined,
      y: undefined,
      col: 0
    }
    this.base = {
      x: undefined,
      y: undefined,
      size: 15,
      r: 255,
      g: 0,
      b: 0
    }
  }

  update() {
    this.display();
  }

  display() {
    push();
    fill(this.tip.col);
    line(this.base.x, this.base.y, this.tip.x, this.tip.y);
    pop();

    push();
    fill(this.base.r, this.base.g, this.base.b);
    noStroke();
    circle(this.base.x, this.base.y, this.base.size, this.base.size);
    pop();
  }

  coordinate() {
    this.base.x = this.coordinates.annotations.indexFinger[0][0];
    this.base.y = this.coordinates.annotations.indexFinger[0][1];
    this.tip.x = this.coordinates.annotations.indexFinger[3][0];
    this.tip.y = this.coordinates.annotations.indexFinger[3][1];
  }

}
