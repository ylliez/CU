// class Hand {
//
//   constructor() {
//     this.coordinates = [];
//     this.numberHands;
//     this.indexTip = {
//       x: undefined,
//       y: undefined
//     };
//     this.indexGhost = {
//       x: undefined,
//       y: undefined
//     };
//   }
//
//   update() {
//     this.coordinate();
//     // this.displayIndexTip();
//   }
//
//   coordinate() {
//     this.numberHands = this.coordinates.multiHandedness.length;
//     for (var i = 0; i < this.numberHands; i++) {
//       let chirality = this.coordinates.multiHandedness[i].label;
//       console.log(chirality);
//     }
//     this.indexGhost.x = this.indexTip.x;
//     this.indexGhost.y = this.indexTip.y;
//     let landmarks = this.coordinates.multiHandLandmarks;
//     let indexTip = landmarks[0][8];
//
//     this.indexTip.x = indexTip.x * width;
//     this.indexTip.y = indexTip.y * height;
//     // console.log(this.indexTip.x);
//
//     // this.indexTip.x = indexTip[0]/captureWidth*width;
//     // this.indexTip.y = indexTip[1]/captureHeight*height;
//   }
//
//   displayIndexTip() {
//     push();
//     fill(this.color.r,this.color.g,this.color.b);
//     noStroke();
//     ellipse(this.indexTip.x, this.indexTip.y, this.size);
//     pop();
//   }
//
// }
