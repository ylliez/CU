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
    this.size = 10;
    this.color = {
      r: 255,
      g: 0,
      b: 127
    }
  }

  update() {
    // get number of hands captured by handpose model
    this.numberHands = this.predictions.multiHandedness.length;
    // reset right hand presence verification values (for BLE only)
    this.atLeastOneRightHand = false;
    this.lowestZ = 999;
    this.closestRightIndex = undefined;
    if (this.numberHands > 0) {
      // iterate through hands arrays captured by handpose model
      for (var i = 0; i < this.numberHands; i++) {
        // set index tip value of array
        this.indexTip[i] = this.predictions.multiHandLandmarks[i][8];
        // if a right hand, use index finger tip to draw on screen
        if (this.predictions.multiHandedness[i].label === `Right`) {
          // validate presence of at least one right hand
          this.atLeastOneRightHand = true;
          // save previous index tip position and update current position (relative to window size)
          this.indexGhostX[i] = this.indexTipX[i];
          this.indexGhostY[i] = this.indexTipY[i];
          this.indexTipX[i] = this.indexTip[i].x * width;
          this.indexTipY[i] = this.indexTip[i].y * height;
          // draw line between previous and current index tip position if within threshold distance of each other
          trailBlazer.push();
          // set RGB values of line to draw based on slider position
          trailBlazer.stroke(hand.color.r, hand.color.g, hand.color.b);
          trailBlazer.strokeWeight(hand.size);
          // set maximum distance between previous and current index tip position to prevent jumping between multiple hands
          if (abs(this.indexGhostX[i] - this.indexTipX[i]) < 100 && abs(this.indexGhostY[i] - this.indexTipY[i]) < 100) {
            trailBlazer.line(this.indexGhostX[i], this.indexGhostY[i], this.indexTipX[i], this.indexTipY[i]);
          }
          trailBlazer.pop();
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
    if (y > sliderColYPos && y < sliderColYPos + sliderColHeight && !qrTrig) {
      // check overlap with red slider horizontal position
      if (x > sliderColRXPos && x < sliderColRXPos + sliderColWidth) {
        sliderColR.slider("value", map(x, sliderColRXPos, sliderColRXPos + sliderColWidth, 0, 255));
      }
      // check overlap with green slider horizontal position
      if (x > sliderColGXPos && x < sliderColGXPos + sliderColWidth) {
        sliderColG.slider("value", map(x, sliderColGXPos, sliderColGXPos + sliderColWidth, 0, 255));
      }
      // check overlap with blue slider horizontal position
      if (x > sliderColBXPos && x < sliderColBXPos + sliderColWidth) {
        sliderColB.slider("value", map(x, sliderColBXPos, sliderColBXPos + sliderColWidth, 0, 255));
      }
    }
    // check overlap with size slider vertical position
    if (y > sliderSizeYPos && y < sliderSizeYPos + sliderSizeHeight && !qrTrig) {
      // check overlap with size slider horizontal position
      if (x > sliderSizeXPos - sliderSizeRad && x < sliderSizeXPos + sliderSizeRad) {
        let sliderSizeDims = map(y, sliderSizeYPos, sliderSizeYPos + sliderSizeHeight, 30, 1);
        sliderSize.slider("value", sliderSizeDims);
        sliderSizeHandle.style.width = `${sliderSizeDims}px`;
        sliderSizeHandle.style.height = `${sliderSizeDims}px`;
        sliderSizeHandle.style.left = `-${sliderSizeDims/2}px`;
      }
    }
    // check overlap with buttons vertical position
    if (y > buttonClearYPos && y < buttonClearYPos + buttonClearHeight && !qrTrig) {
      // check overlap with clear button horizontal position
      if (x > buttonClearXPos && x < buttonClearXPos + buttonClearWidth) {
        trailBlazer.clear();
      }
      // check overlap with QR button horizontal position
      if (x > buttonQRXPos && x < buttonQRXPos + buttonQRWidth) {
        triggerQR();
      }
    }
  }

}
