class Scissors {

  constructor() {
    this.coordinates = [];
    this.index = {
      tip: {
        x: undefined,
        y: undefined
      },
      base: {
        x: undefined,
        y: undefined
      }
    }
    this.middle = {
      tip: {
        x: undefined,
        y: undefined
      },
      base: {
        x: undefined,
        y: undefined
      }
    }
  }

  update() {
    this.coordinate();
    this.display();
  }

  coordinate() {
    this.index.base.x = this.coordinates.annotations.indexFinger[0][0];
    this.index.base.y = this.coordinates.annotations.indexFinger[0][1];
    this.index.tip.x = this.coordinates.annotations.indexFinger[3][0];
    this.index.tip.y = this.coordinates.annotations.indexFinger[3][1];
    this.middle.base.x = this.coordinates.annotations.middleFinger[0][0];
    this.middle.base.y = this.coordinates.annotations.middleFinger[0][1];
    this.middle.tip.x = this.coordinates.annotations.middleFinger[3][0];
    this.middle.tip.y = this.coordinates.annotations.middleFinger[3][1];
  }

  display() {
    push();
    fill(0);
    strokeWeight(2);
    line(this.index.base.x, this.index.base.y, this.index.tip.x, this.index.tip.y);
    line(this.index.base.x, this.index.base.y, this.middle.tip.x, this.middle.tip.y);
    pop();
    //
    // push();
    // fill(this.base.r, this.base.g, this.base.b);
    // noStroke();
    // circle(this.base.x, this.base.y, this.base.size, this.base.size);
    // pop();
  }

}
