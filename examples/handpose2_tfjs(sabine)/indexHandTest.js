

  let video = document.getElementById('video');
    let handPoseDetector;
    let state ="loading";


// https://github.com/tensorflow/tfjs-models/blob/master/hand-pose-detection/README.md#how-to-run-it
const model = handPoseDetection.SupportedModels.MediaPipeHands;
const detectorConfig = {
  runtime: 'tfjs',
};

function setup()
{
 createCanvas(640,480);
 //the promise I (to make something synchronous seeemingly synchronous)
 handPoseDetection.createDetector(model, detectorConfig).then((detector) => {
 video = createCapture(VIDEO);
 video.hide();
 state ="go";
 //assign ...
 handPoseDetector=detector;
});// end promise
}//setup


function draw(){
    if(state ==='go'){
       if (video.loadedmetadata) {
        showVideo();
        //the promise II  (to make something synchronous seeemingly synchronous)
        //get the predictions...
        handPoseDetector.estimateHands(video.elt, {flipHorizontal: true}) .then((result)=>{
        
          //our predictions....
            for(let i=0; i< result.length; i++){
           // console.log(result[0]);
           let keyPoints = result[0].keypoints;
           for(let k=0; k<keyPoints.length; k++){
             if(keyPoints[k].name ==='index_finger_tip'){
              console.log(keyPoints[k].x, keyPoints[k].y);
            
             }
           }
         }
 
     }) //result
    }//end if
    // display mirrored video feed ... 

   

} //if in go state
 
}//draw

function showVideo(){
  push();
  translate(width,0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  pop();


}

