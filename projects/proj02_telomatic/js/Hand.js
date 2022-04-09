class Hand {

  constructor() {
    this.predictions = [];
    this.numberHands = undefined;
    this.chirality = undefined;
    this.indexTip = {
      x: undefined,
      y: undefined
    };
    this.indexGhost = {
      x: undefined,
      y: undefined
    };
  }

  update() {
    this.coordinate();
    // this.displayIndexTip();
  }

  coordinate() {
    this.numberHands = this.predictions.multiHandedness.length;
    if (this.numberHands > 0) {
      for (var i = 0; i < this.numberHands; i++) {
        console.log(this.predictions.multiHandLandmarks[i][8].z);
        let indexTip = this.predictions.multiHandLandmarks[i][8];
        let chirality = predictions.multiHandedness[i].label;
        if (chirality === `Right`) {
          let rIndexGhostX = rIndexTipX;
          let rIndexGhostY = rIndexTipY;
          rIndexTipX = indexTip.x * width;
          rIndexTipY = indexTip.y * height;

          trailBlazer.push();
          trailBlazer.stroke(sliderColR.val, sliderColG.val, sliderColB.val);
          trailBlazer.strokeWeight(sliderSize.val);
          // set maximum distance between previous and current index tip position to preclude jumping
          if (abs(rIndexGhostX - rIndexTipX) < 100 && abs(rIndexGhostY - rIndexTipY) < 100) {
            trailBlazer.line(rIndexGhostX, rIndexGhostY, rIndexTipX, rIndexTipY);
          }
          trailBlazer.pop();
        }

        else if (chirality === `Left`) {
          let lIndexTipX = indexTip.x * width;
          let lIndexTipY = indexTip.y * height;
          this.displayLeftIndexTip(lIndexTipX, lIndexTipY);
          this.checkGUI(lIndexTipX, lIndexTipY);
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
