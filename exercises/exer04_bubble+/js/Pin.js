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
    fill(0);
    strokeWeight(2);
    line(this.index.base.x, this.index.base.y, this.index.tip.x, this.index.tip.y);
    pop();

    push();
    fill(255, 0, 0);
    noStroke();
    circle(this.index.base.x, this.index.base.y, 15);
    pop();
  }

  // checkFeature(ellipseX, ellipseY, ellipseSize) {
  //   let d = dist(this.index.tip.x, this.index.tip.y, ellipseX, ellipseY);
  //   if (d < ellipseSize / 2) { return true; }
  // }

  checkFeature(bubble) {
    let d = dist(this.index.tip.x, this.index.tip.y, bubble.x, bubble.y);
    if (d < bubble.size / 2) { return true; }
  }

}

/* pre-extension failsafe */
// class Pin {
//
//   constructor() {
//     this.coordinates = [];
//     this.tip = {
//       x: undefined,
//       y: undefined,
//       col: 0
//     }
//     this.base = {
//       x: undefined,
//       y: undefined,
//       size: 15,
//       r: 255,
//       g: 0,
//       b: 0
//     }
//   }
//
//   update() {
//     this.coordinate();
//     this.display();
//   }
//
//   coordinate() {
//     this.base.x = this.coordinates.annotations.indexFinger[0][0];
//     this.base.y = this.coordinates.annotations.indexFinger[0][1];
//     this.tip.x = this.coordinates.annotations.indexFinger[3][0];
//     this.tip.y = this.coordinates.annotations.indexFinger[3][1];
//   }
//
//   display() {
//     push();
//     fill(this.tip.col);
//     strokeWeight(2);
//     line(this.base.x, this.base.y, this.tip.x, this.tip.y);
//     pop();
//
//     push();
//     fill(this.base.r, this.base.g, this.base.b);
//     noStroke();
//     circle(this.base.x, this.base.y, this.base.size, this.base.size);
//     pop();
//   }
//
// }
