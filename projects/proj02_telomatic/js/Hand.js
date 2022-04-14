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
    this.atLeastOneRightHand;
    this.lowestZ;
    this.bleVal = height;
    this.bleKillRetry = 0;
  }

  update() {
    this.numberHands = this.predictions.multiHandedness.length;
    this.atLeastOneRightHand = false;
    this.lowestZ = 999;
    this.closestRightIndex = undefined;
    if (this.numberHands > 0) {
      for (var i = 0; i < this.numberHands; i++) {
        this.indexTip[i] = this.predictions.multiHandLandmarks[i][8];
        if (this.predictions.multiHandedness[i].label === `Right`) {
          this.atLeastOneRightHand = true;
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
          // console.log(this.predictions.multiHandLandmarks[i][0].z);
          if (this.predictions.multiHandLandmarks[i][0].z < this.lowestZ) {
            this.lowestZ = this.predictions.multiHandLandmarks[i][0].z;
            this.bleVal = this.indexTipY[i];
          }
        }

        else if (this.predictions.multiHandedness[i].label === `Left`) {
          this.indexTipX[i] = this.indexTip[i].x * width;
          this.indexTipY[i] = this.indexTip[i].y * height;
          this.displayLeftIndexTip(this.indexTipX[i], this.indexTipY[i]);
          this.checkGUI(this.indexTipX[i], this.indexTipY[i]);
        }
      }
    }
    if (this.atLeastOneRightHand) {
      this.bleKillRetry = 0;
      writeToBLE(this.bleVal);
    } else if (this.bleVal != height || this.bleKillRetry < 2) {
      this.bleVal = height;
      writeToBLE(this.bleVal);
      this.bleKillRetry++;
    }
  }



  displayLeftIndexTip(x, y) {
    push();
    fill(255, 255, 255);
    noStroke();
    ellipse(x, y, 15);
    pop();
  }

  // check left index finger tip position overlap with GUI elements
  checkGUI(x, y) {
    // check overlap with color sliders vertical position
    if (y > sliderColYPos && y < sliderColYPos + sliderColHeight && buttonQR.enabled) {
      // check overlap with red slider horizontal position
      if (x > sliderColRXPos && x < sliderColRXPos + sliderColWidth) {
        sliderColR.val = map(y, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
      }
      // check overlap with green slider horizontal position
      if (x > sliderColGXPos && x < sliderColGXPos + sliderColWidth) {
        sliderColG.val = map(y, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
      }
      // check overlap with blue slider horizontal position
      if (x > sliderColBXPos && x < sliderColBXPos + sliderColWidth) {
        sliderColB.val = map(y, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
      }
    }
    // check overlap with size slider vertical position
    if (y > sliderSizeYPos && y < sliderSizeYPos + sliderSizeHeight && buttonQR.enabled) {
      // check overlap with size slider horizontal position
      if (x > sliderSizeXPos && x < sliderSizeXPos + sliderSizeWidth) {
        sliderSize.val = map(x, sliderSizeXPos, sliderSizeXPos + sliderSizeWidth, 1, 30);
      }
    }
    // check overlap with buttons vertical position
    if (y > buttonClearYPos && y < buttonClearYPos + buttonHeight && buttonQR.enabled) {
      // check overlap with clear button horizontal position
      if (x > buttonClearXPos && x < buttonClearXPos + buttonWidth) {
        trailBlazer.clear();
      }
      // check overlap with QR button horizontal position
      if (x > buttonQRXPos && x < buttonQRXPos + buttonWidth & buttonQR.enabled) {
        hideGUIElements();
      }
    }
  }

}
