console.log(`nodechestra reverb page loaded`);

const socket = io("/reverb");
socket.on("connect", () => {
    console.log(`client ID: ${socket.id}`);
});

const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');
const landmarkContainer = document.getElementsByClassName('landmark-grid-container')[0];
const grid = new LandmarkGrid(landmarkContainer);

function onResults(results) {
    if (!results.poseLandmarks) {
        grid.updateLandmarks([]);
        return;
    }

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    // canvasCtx.drawImage(results.segmentationMask, 0, 0,
    //     canvasElement.width, canvasElement.height);

    // Only overwrite existing pixels.
    canvasCtx.globalCompositeOperation = 'source-in';
    canvasCtx.fillStyle = '#00FF00';
    canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

    // Only overwrite missing pixels.
    canvasCtx.globalCompositeOperation = 'destination-atop';
    canvasCtx.drawImage(
        results.image, 0, 0, canvasElement.width, canvasElement.height);

    canvasCtx.globalCompositeOperation = 'source-over';
    drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS,
        { color: '#00FF00', lineWidth: 4 });
    drawLandmarks(canvasCtx, results.poseLandmarks,
        { color: '#FF0000', lineWidth: 2 });
    canvasCtx.restore();

    grid.updateLandmarks(results.poseWorldLandmarks);
}

const pose = new Pose({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.2/${file}`;
    }
});
pose.setOptions({
    modelComplexity: 1,
    smoothLandmarks: true,
    enableSegmentation: true,
    smoothSegmentation: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});
pose.onResults(onResults);

const camera = new Camera(videoElement, {
    onFrame: async () => {
        await pose.send({ image: videoElement });
    },
    width: 1280,
    height: 720
});
camera.start();

// let width = innerWidth, height = innerHeight;
// const captureElement = document.getElementById('capture');
// const canvasElement = document.getElementById('canvas');
// const canvasCtx = canvasElement.getContext('2d');
// canvasElement.width = width;
// canvasElement.height = height;

// const hands = new Hands({
//     locateFile: (file) => {
//         return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
//     }
// });
// hands.setOptions({
//     selfieMode: true,
//     maxNumHands: 2,
//     modelComplexity: 1,
//     minDetectionConfidence: 0.5,
//     minTrackingConfidence: 0.5
// });
// hands.onResults(onResults)

// const camera = new Camera(captureElement, {
//     onFrame: async () => {
//         await hands.send({ image: captureElement, });
//     },
//     width: canvasElement.Width,
//     height: canvasElement.Height
// });
// camera.start();

// function onResults(results) {
//     let handsOn = results.multiHandedness.length
//     let indexTip
//     canvasCtx.save();
//     canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
//     // video feed
//     // canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
//     if (handsOn) {
//         for (let i = 0; i < handsOn; i++) {
//             let indexTip = results.multiHandLandmarks[i][8];
//             if (results.multiHandedness[i].label === `Right`) {
//                 // console.log("right index tip: ", indexTip);
//                 canvasCtx.fillStyle = "#FF0000";
//                 canvasCtx.beginPath();
//                 canvasCtx.arc(indexTip.x * width, indexTip.y * height, 20, 0, 2 * Math.PI);
//                 canvasCtx.fill();
//                 socket.emit("reverb", `rev revAmt ${(1 - indexTip.y) * 100}`);
//             }
//             if (results.multiHandedness[i].label === `Left`) {
//                 // console.log("left index tip: ", indexTip);
//                 canvasCtx.fillStyle = "#00FF00";
//                 canvasCtx.beginPath();
//                 canvasCtx.arc(indexTip.x * width, indexTip.y * height, 20, 0, 2 * Math.PI);
//                 canvasCtx.fill();
//                 socket.emit("reverb", `rev revDec ${(1 - indexTip.y) * 100}`);

//             }
//         }
//         canvasCtx.restore();
//     }

// }