console.log(`nodechestra waveform page loaded`);

const socket = io("/waveform");
socket.on("connect", () => {
    console.log(`client ID: ${socket.id}`);
});

let width = innerWidth, height = innerHeight;
const captureElement = document.getElementById('capture');
const canvasElement = document.getElementById('canvas');
const canvasCtx = canvasElement.getContext('2d');
canvasElement.Width = width;
canvasElement.Height = height;

const hands = new Hands({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }
});
hands.setOptions({
    selfieMode: true,
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});
hands.onResults(onResults)

const camera = new Camera(captureElement, {
    onFrame: async () => {
        await hands.send({ image: captureElement, });
    },
    width: canvasElement.Width,
    height: canvasElement.Height
});
camera.start();

function onResults(results) {
    let handsOn = results.multiHandedness.length
    let indexTip
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    // video feed
    // canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
    // if (results.multiHandLandmarks) {
    //     //     // console.log(results.multiHandLandmarks)
    //     //     // console.log(results.multiHandedness)
    //     //     // console.log(results.multiHandedness[0])
    //     //     // if (results.multiHandedness.length) {
    //     //     // if (results.multiHandedness[0].label === `Left`) {
    //     //     // console.log(results.multiHandedness[0].label)

    //     //     //     console.log(results.multiHandLandmarks)
    //     //     //     console.log(results.multiHandLandmarks[0][8])
    //     for (const landmarks of results.multiHandLandmarks) {
    //         console.log(landmarks)
    //         drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
    //             { color: '#00FF00', lineWidth: 5 });
    //         drawLandmarks(canvasCtx, landmarks, { color: '#FF0000', lineWidth: 2 });
    //     }
    // }

    if (handsOn) {

        for (let i = 0; i < handsOn; i++) {
            let indexTip = results.multiHandLandmarks[i][8];
            if (results.multiHandedness[i].label === `Right`) {
                console.log("right index tip: ", indexTip);
                canvasCtx.fillStyle = "#FF0000";
                // canvasCtx.fillRect(0, 0, indexTip.x * width, indexTip.y * height);
                canvasCtx.beginPath();
                canvasCtx.arc(indexTip.x * width, indexTip.y * height, 20, 0, 2 * Math.PI);
                canvasCtx.fill();
                // drawLandmarks(canvasCtx, indexTip, { color: '#FF0000', lineWidth: 2 });
            }
            if (results.multiHandedness[i].label === `Left`) {
                console.log("left index tip: ", indexTip);
                canvasCtx.fillStyle = "#00FF00";
                canvasCtx.beginPath();
                canvasCtx.arc(indexTip.x * width, indexTip.y * height, 20, 0, 2 * Math.PI);
                canvasCtx.fill();
            }
        }
        canvasCtx.restore();
    }

}