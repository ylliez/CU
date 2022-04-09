class Hand {

  constructor() {
    this.predictions = [];
    this.numberHands = undefined;
    this.hands = [];
    this.indexTip = [];
    this.indexTipX = [];
    this.indexTipY = [];
    this.indexGhostX = [];
    this.indexGhostY = [];
    this.rightHandsZ = [];
    this.bleVal = 0;
  }

  update() {
    this.numberHands = this.predictions.multiHandedness.length;
    if (this.numberHands > 0) {
      for (var i = 0; i < this.numberHands; i++) {
        this.indexTip[i] = this.predictions.multiHandLandmarks[i][8];
        if (this.predictions.multiHandedness[i].label === `Right`) {
          this.indexGhostX[i] = this.indexTipX[i];
          this.indexGhostY[i] = this.indexTipY[i];
          this.indexTipX[i] = this.indexTip[i].x * width;
          this.indexTipY[i] = this.indexTip[i].y * height;
          trailBlazer.push();
          trailBlazer.stroke(sliderColR.val, sliderColG.val, sliderColB.val);
          trailBlazer.strokeWeight(sliderSize.val);
          // set maximum distance between previous and current index tip position to preclude jumping
          if (abs(this.indexGhostX[i] - this.indexTipX[i]) < 100 && abs(this.indexGhostY[i] - this.indexTipY[i]) < 100) {
            trailBlazer.line(this.indexGhostX[i], this.indexGhostY[i], this.indexTipX[i], this.indexTipY[i]);
          }
          trailBlazer.pop();
          // // how to get single value for BLE in multihand context?
          // this.rightHandsZ[i] = this.predictions.multiHandLandmarks[i][0].z;
          // console.log(this.rightHandsZ);
        }

        else if (this.predictions.multiHandedness[i].label === `Left`) {
          this.indexTipX[i] = this.indexTip[i].x * width;
          this.indexTipY[i] = this.indexTip[i].y * height;
          this.displayLeftIndexTip(this.indexTipX[i], this.indexTipY[i]);
          this.checkGUI(this.indexTipX[i], this.indexTipY[i]);
        }
      }
    }
  }

  displayLeftIndexTip(x, y) {
    push();
    fill(255, 255, 255);
    noStroke();
    ellipse(x, y, 15);
    pop();
  }

  checkGUI(x, y) {
    if (y > sliderColYPos && y < sliderColYPos + sliderColHeight) {
      if (x > sliderColRXPos && x < sliderColRXPos + sliderColWidth) {
        sliderColR.val = map(y, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
      }
      if (x > sliderColGXPos && x < sliderColGXPos + sliderColWidth) {
        sliderColG.val = map(y, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
      }
      if (x > sliderColBXPos && x < sliderColBXPos + sliderColWidth) {
        sliderColB.val = map(y, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
      }
    }
    if (y > sliderSizeYPos && y < sliderSizeYPos + sliderSizeHeight) {
      if (x > sliderSizeXPos && x < sliderSizeXPos + sliderSizeWidth) {
        sliderSize.val = map(x, sliderSizeXPos, sliderSizeXPos + sliderSizeWidth, 1, 30);
      }
    }
  }

}
