class Fist extends Hand {

  constructor() {
    super();
  }


  checkFist(){
    super.coordinate();
    console.log(`${floor(this.dist.T2B.t2i)}, ${floor(this.dist.spec.i32t1)}, ${floor(this.dist.p2T.p2m)}, ${floor(this.dist.p2T.p2r)}, ${floor(this.dist.p2T.p2p)}`);
    if (this.dist.T2B.t2i < 50 && this.dist.spec.i32t1 < 100 && this.dist.p2T.p2m < 100 && this.dist.p2T.p2r < 100 && this.dist.p2T.p2p < 100) {
      return true;
    }
  }

}

// class Fist {
//
//   constructor() {
//     this.coordinates = [];
//     this.tip = {
//       thumb: {
//         x: undefined,
//         y: undefined
//       },
//       index: {
//         x: undefined,
//         y: undefined
//       },
//       middle: {
//         x: undefined,
//         y: undefined
//       },
//       ring: {
//         x: undefined,
//         y: undefined
//       },
//       pinky: {
//         x: undefined,
//         y: undefined
//       }
//     };
//     this.base = {
//       palm: {
//         x: undefined,
//         y: undefined
//       },
//       thumb: {
//         x: undefined,
//         y: undefined
//       },
//       index: {
//         x: undefined,
//         y: undefined
//       }
//     };
//     this.dist = {
//       // b2t: undefined,
//       // b2i: undefined,
//       t2i: undefined,
//       i2t: undefined,
//       b2m: undefined,
//       b2r: undefined,
//       b2p: undefined
//     }
//   }
//
//   coordinate() {
//     this.base.palm.x = this.coordinates.annotations.palmBase[0][0];
//     this.base.palm.y = this.coordinates.annotations.palmBase[0][1];
//     this.base.thumb.x = this.coordinates.annotations.thumb[0][0];
//     this.base.thumb.y = this.coordinates.annotations.thumb[0][1];
//     this.base.index.x = this.coordinates.annotations.indexFinger[0][0];
//     this.base.index.y = this.coordinates.annotations.indexFinger[0][1];
//     this.tip.thumb.x = this.coordinates.annotations.thumb[3][0];
//     this.tip.thumb.y = this.coordinates.annotations.thumb[3][1];
//     this.tip.index.x = this.coordinates.annotations.indexFinger[3][0];
//     this.tip.index.y = this.coordinates.annotations.indexFinger[3][1];
//     this.tip.middle.x = this.coordinates.annotations.middleFinger[3][0];
//     this.tip.middle.y = this.coordinates.annotations.middleFinger[3][1];
//     this.tip.ring.x = this.coordinates.annotations.ringFinger[3][0];
//     this.tip.ring.y = this.coordinates.annotations.ringFinger[3][1];
//     this.tip.pinky.x = this.coordinates.annotations.pinky[3][0];
//     this.tip.pinky.y = this.coordinates.annotations.pinky[3][1];
//
//     // this.tip[0][0] = this.coordinates.annotations.thumb[3][0];
//     // this.tip[0][1] = this.coordinates.annotations.thumb[3][1];
//     // this.tip[1][0] = this.coordinates.annotations.indexFinger[3][0];
//     // this.tip[1][1] = this.coordinates.annotations.indexFinger[3][1];
//     // this.tip[2][0] = this.coordinates.annotations.middleFinger[3][0];
//     // this.tip[2][1] = this.coordinates.annotations.middleFinger[3][1];
//     // this.tip[3][0] = this.coordinates.annotations.ringFinger[3][0];
//     // this.tip[3][1] = this.coordinates.annotations.ringFinger[3][1];
//     // this.tip[4][0] = this.coordinates.annotations.pinky[3][0];
//     // this.tip[4][1] = this.coordinates.annotations.pinky[3][1];
//     // this.base.palm.x = this.coordinates.annotations.palmBase[0][0];
//     // this.base.palm.y = this.coordinates.annotations.palmBase[0][1];
//     this.dist.b2t = floor(dist(this.base.palm.x, this.base.palm.y, this.tip.thumb.x, this.tip.thumb.y));
//     this.dist.b2i = floor(dist(this.base.palm.x, this.base.palm.y, this.tip.index.x, this.tip.index.y));
//     this.dist.t2i = floor(dist(this.base.index.x, this.base.index.y, this.tip.thumb.x, this.tip.thumb.y));
//     this.dist.i2t = floor(dist(this.base.thumb.x, this.base.thumb.y, this.tip.index.x, this.tip.index.y));
//     this.dist.b2m = floor(dist(this.base.palm.x, this.base.palm.y, this.tip.middle.x, this.tip.middle.y));
//     this.dist.b2r = floor(dist(this.base.palm.x, this.base.palm.y, this.tip.ring.x, this.tip.ring.y));
//     this.dist.b2p = floor(dist(this.base.palm.x, this.base.palm.y, this.tip.pinky.x, this.tip.pinky.y));
//     // this.dist.b2t = floor(dist(this.base.palm.x, this.base.palm.y, this.tip[0][0], this.tip[0][1]));
//     // this.dist.b2i = floor(dist(this.base.palm.x, this.base.palm.y, this.tip[1][0], this.tip[1][1]));
//     // this.dist.b2m = floor(dist(this.base.palm.x, this.base.palm.y, this.tip[2][0], this.tip[2][1]));
//     // this.dist.b2r = floor(dist(this.base.palm.x, this.base.palm.y, this.tip[3][0], this.tip[3][1]));
//     // this.dist.b2p = floor(dist(this.base.palm.x, this.base.palm.y, this.tip[4][0], this.tip[4][1]));
//   }
//
//   checkFist(){
//     this.coordinate();
//     // console.log(`${this.dist.b2t}, ${this.dist.b2i}, ${this.dist.b2m}, ${this.dist.b2r}, ${this.dist.b2p}`);
//     console.log(`${this.dist.t2i}, ${this.dist.i2t}, ${this.dist.b2m}, ${this.dist.b2r}, ${this.dist.b2p}`);
//     if (this.dist.t2i < 50 && this.dist.i2t < 100 && this.dist.b2m < 100 && this.dist.b2r < 100 && this.dist.b2p < 100) {
//       return true;
//     }
//   }
//
// }
