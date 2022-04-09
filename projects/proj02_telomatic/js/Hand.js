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
    this.numberHands = this.predictions.multiHandedness.length
    if (this.numberHands > 0) {
      for (var i = 0; i < this.numberHands; i++) {
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
          trailBlazer.line(rIndexGhostX, rIndexGhostY, rIndexTipX, rIndexTipY);
          trailBlazer.pop();
        }

        else if (chirality === `Left`) {
          let lIndexTipX = indexTip.x * width;
          let lIndexTipY = indexTip.y * height;
          this.displayLeftIndexTip(lIndexTipX, lIndexTipY);
          if (lIndexTipY > sliderColYPos && lIndexTipY < sliderColYPos + sliderColHeight) {
            if (lIndexTipX > sliderColRXPos && lIndexTipX < sliderColRXPos + sliderColWidth) {
              sliderColR.val = map(lIndexTipY, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
            }
            if (lIndexTipX > sliderColGXPos && lIndexTipX < sliderColGXPos + sliderColWidth) {
              sliderColG.val = map(lIndexTipY, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
            }
            if (lIndexTipX > sliderColBXPos && lIndexTipX < sliderColBXPos + sliderColWidth) {
              sliderColB.val = map(lIndexTipY, sliderColYPos + sliderColHeight, sliderColYPos, 0, 255);
            }
          }
          if (lIndexTipY > sliderSizeYPos && lIndexTipY < sliderSizeYPos + sliderSizeHeight) {
            if (lIndexTipX > sliderSizeXPos && lIndexTipX < sliderSizeXPos + sliderSizeWidth) {
              sliderSize.val = map(lIndexTipX, sliderSizeXPos, sliderSizeXPos + sliderSizeWidth, 1, 30);
            }
          }
        }
      }
    //   checkUI();
    }
    // this.indexGhost.x = this.index.x;
    // this.indexGhost.y = this.index.y;
    // // let index = this.coordinates.annotations.indexFinger;
    // let indexTip = this.predictions.multiHandLandmarks[i][8];
    // this.indexTip.x = indexTip[0]/captureWidth*width;
    // this.indexTip.y = indexTip[1]/captureHeight*height;
  }

  displayLeftIndexTip(x, y) {
    push();
    // fill(this.color.r,this.color.g,this.color.b);
    fill(255, 255, 255);
    noStroke();
    ellipse(x, y, 15);
    // ellipse(this.index.x, this.index.y, this.size);
    pop();
  }

}
