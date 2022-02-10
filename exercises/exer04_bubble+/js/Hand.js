class Hand {

  constructor() {
    this.coordinates = [];
    // COORDINATES OF HAND LANDMARKS
    // coordinates of palm base
    this.palm = { base: { x: undefined, y: undefined } };
    // coordinates of thumb base & tip
    this.thumb = { base: { x: undefined, y: undefined }, tip: { x: undefined, y: undefined }, knuckle: { x: undefined, y: undefined } };
    // coordinates of index finger base & tip
    this.index = { base: { x: undefined, y: undefined }, tip: { x: undefined, y: undefined } };
    // coordinates of middle finger base & tip
    this.middle = { base: { x: undefined, y: undefined }, tip: { x: undefined, y: undefined } };
    // coordinates of ring finger base & tip
    this.ring = { base: { x: undefined, y: undefined }, tip: { x: undefined, y: undefined } };
    // coordinates of pinky finger base & tip
    this.pinky = { base: { x: undefined, y: undefined }, tip: { x: undefined, y: undefined } };

    // coordinates of midpoint b/w fingerbases
    this.midB = { i2m: { x: undefined, y: undefined } };

    this.dist = {
      T2T: { t2i: undefined, t2m: undefined, t2r: undefined, t2p: undefined, i2m: undefined, i2r: undefined, i2p: undefined, m2r: undefined, m2p: undefined, r2p: undefined },
      B2B: { t2i: undefined, i2m: undefined, i2r: undefined, i2p: undefined },
      T2B: { i2i: undefined, m2m: undefined, r2r: undefined, p2p: undefined, t2i : undefined, i2t: undefined },
      p2T: { p2t: undefined, p2i: undefined, p2m: undefined, p2r: undefined, p2p: undefined },
      spec: { i32t1: undefined }
    };

    this.isFist = false;
    this.isPinch = false;
    this.isSnip = false;
  }

  update() {
    this.coordinate();
    this.checkFist();
    this.checkSnip();
  }

  coordinate() {
    // COORDINATES OF HAND LANDMARKS
    // coordinates of palm base
    this.palm.base.x = this.coordinates.annotations.palmBase[0][0];
    this.palm.base.y = this.coordinates.annotations.palmBase[0][1];
    // coordinates of thumb base & tip
    this.thumb.base.x = this.coordinates.annotations.thumb[0][0];
    this.thumb.base.y = this.coordinates.annotations.thumb[0][1];
    this.thumb.tip.x = this.coordinates.annotations.thumb[3][0];
    this.thumb.tip.y = this.coordinates.annotations.thumb[3][1];
    // coordinates of index finger base & tip
    this.index.base.x = this.coordinates.annotations.indexFinger[0][0];
    this.index.base.y = this.coordinates.annotations.indexFinger[0][1];
    this.index.tip.x = this.coordinates.annotations.indexFinger[3][0];
    this.index.tip.y = this.coordinates.annotations.indexFinger[3][1];
    // coordinates of middle finger base & tip
    this.middle.base.x = this.coordinates.annotations.middleFinger[0][0];
    this.middle.base.y = this.coordinates.annotations.middleFinger[0][1];
    this.middle.tip.x = this.coordinates.annotations.middleFinger[3][0];
    this.middle.tip.y = this.coordinates.annotations.middleFinger[3][1];
    // coordinates of ring finger base & tip
    this.ring.base.x = this.coordinates.annotations.ringFinger[0][0];
    this.ring.base.y = this.coordinates.annotations.ringFinger[0][1];
    this.ring.tip.x = this.coordinates.annotations.ringFinger[3][0];
    this.ring.tip.y = this.coordinates.annotations.ringFinger[3][1];
    // coordinates of pinky finger base & tip
    this.pinky.base.x = this.coordinates.annotations.pinky[0][0];
    this.pinky.base.y = this.coordinates.annotations.pinky[0][1];
    this.pinky.tip.x = this.coordinates.annotations.pinky[3][0];
    this.pinky.tip.y = this.coordinates.annotations.pinky[3][1];
    // other
    this.thumb.knuckle.x = this.coordinates.annotations.thumb[1][0];
    this.thumb.knuckle.y = this.coordinates.annotations.thumb[1][1];

    // DISTANCES BETWEEN HAND LANDMARKS
    // distances between fingertips
    this.dist.T2T.t2i = dist(this.thumb.tip.x, this.thumb.tip.y, this.index.tip.x, this.index.tip.y);
    this.dist.T2T.t2m = dist(this.thumb.tip.x, this.thumb.tip.y, this.middle.tip.x, this.middle.tip.y);
    this.dist.T2T.i2m = dist(this.index.tip.x, this.index.tip.y, this.middle.tip.x, this.middle.tip.y);
    // distances between fingerbases
    this.dist.B2B.i2m = dist(this.index.base.x, this.index.base.y, this.middle.base.x, this.middle.base.y);
    // distances between palm base & fingertips
    this.dist.p2T.p2m = dist(this.palm.base.x, this.palm.base.y, this.middle.tip.x, this.middle.tip.y);
    this.dist.p2T.p2r = dist(this.palm.base.x, this.palm.base.y, this.ring.tip.x, this.ring.tip.y);
    this.dist.p2T.p2p = dist(this.palm.base.x, this.palm.base.y, this.pinky.tip.x, this.pinky.tip.y);
    // distances between fingerbases & fingertips
    this.dist.T2B.t2i = dist(this.thumb.tip.x, this.thumb.tip.y, this.index.base.x, this.index.base.y);
    // distances between other handmarks
    this.dist.spec.i32t1 = dist(this.index.tip.x, this.index.tip.y, this.thumb.knuckle.x, this.thumb.knuckle.y);

    // OTHER??
    this.midB.i2m.x = (this.index.base.x + this.middle.base.x) / 2;
    this.midB.i2m.y = (this.index.base.y + this.middle.base.y) / 2;
  }

  checkFist() {
    // console.log(`${floor(this.dist.T2B.t2i)}, ${floor(this.dist.spec.i32t1)}, ${floor(this.dist.p2T.p2m)}, ${floor(this.dist.p2T.p2r)}, ${floor(this.dist.p2T.p2p)}`);
    if (this.dist.T2B.t2i < 50 && this.dist.spec.i32t1 < 100 && this.dist.p2T.p2m < 100 && this.dist.p2T.p2r < 100 && this.dist.p2T.p2p < 100) { this.isFist = true; }
    else { this.isFist = false; }
  }

  checkSnip() {
    // console.log(`${floor(this.dist.B2B.i2m)}, ${floor(this.dist.T2T.i2m)}`);
    if (this.dist.T2T.i2m <= (this.dist.B2B.i2m * 1.2)) { this.isSnip = true; }
    else { this.isSnip = false; }
  }

}
