

  let video = document.getElementById('video');
    let handPoseDetector;
    let state ="loading";
    let hands =null;
    let captureWidth = 640, captureHeight = 480;
    const aspectRatio = captureWidth / captureHeight;
    let indexTipX = [];
    let indexTipY = [];
    let indexGhostX = [];
    let indexGhostY = [];


// https://github.com/tensorflow/tfjs-models/blob/master/hand-pose-detection/README.md#how-to-run-it
const model = handPoseDetection.SupportedModels.MediaPipeHands;
const detectorConfig = {
  runtime: 'tfjs',
  maxHands: 1,
  // modelType:'fu'


};

function setup()
{
  createCanvas(window.innerWidth,window.innerWidth/aspectRatio);
  trailBlazer = createGraphics(width, height);
  video = createCapture(VIDEO, 640,480);
  video.hide();
 
  //the promise I (to make something synchronous seeemingly synchronous)
 handPoseDetection.createDetector(model, detectorConfig).then((detector) => {
//assign ...
 handPoseDetector=detector;
 state="go";
});// end promise
}//setup

//the promise II  (to make something synchronous seeemingly synchronous)

async function check(image, estimationConfig,handPoseDetector){
  let hands = await handPoseDetector.estimateHands(image, estimationConfig);
  
  if(hands.length!=0){
    //doing oNLY one hand :)
         // console.log(hands[0]);
          let indexTip = hands[0].keypoints;
            indexGhostX[0] = indexTipX[0];
            indexGhostY[0] = indexTipY[0];
            indexTipX[0] =((indexTip[8].x)/640)*width;
            indexTipY[0] = ((indexTip[8].y)/480)*height;
            drawLine();
          }
        }

function drawLine(){
  trailBlazer.push();
  trailBlazer.stroke(255,0,0);
   if (abs(indexGhostX[0] - indexTipX[0]) < 100 && abs(indexGhostY[0] - indexTipY[0]) < 100) {
    trailBlazer.line(indexGhostX[0], indexGhostY[0], indexTipX[0], indexTipY[0]);
   }
    trailBlazer.pop();
 // }
}
function draw(){
    if(state ==='go'){
      showVideo();
      image(trailBlazer, 0, 0);
     
       
      if (video.loadedmetadata) {
        //calling to check :0
        check(video.elt, {flipHorizontal: true}, handPoseDetector);
      }

     
    
} //if in go state
 
}//draw

function showVideo(){
  push();
  translate(width,0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  pop();


}

function displayLeftIndexTip(x, y) {
  push();
  fill(255, 0, 0);
  noStroke();
  ellipse(x, y, 15);
  pop();
}

