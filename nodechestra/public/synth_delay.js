console.log(`nodechestra delay page loaded`);

const socket = io("/delay");
socket.on("connect", () => {
    console.log(`client ID: ${socket.id}`);
});

let width = innerWidth, height = innerHeight;
const captureElement = document.getElementById('capture');
const canvasElement = document.getElementById('canvas');
const canvasCtx = canvasElement.getContext('2d');
canvasElement.width = width;
canvasElement.height = height;

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
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    // video feed
    // canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
    if (handsOn) {
        for (let i = 0; i < handsOn; i++) {
            let indexTip = results.multiHandLandmarks[i][8];
            if (results.multiHandedness[i].label === `Right`) {
                // console.log("right index tip: ", indexTip);
                canvasCtx.fillStyle = "#FF0000";
                canvasCtx.beginPath();
                canvasCtx.arc(indexTip.x * width, indexTip.y * height, 20, 0, 2 * Math.PI);
                canvasCtx.fill();
                // socket.emit("delay right", indexTip.x);
                // socket.emit("delay right", indexTip.x * 100);
                // socket.emit(`delay delAmt ${indexTip.x * 100}`);
                // socket.emit("delay", "delay", "delAmt", indexTip.x * 100);
                socket.emit("delay", `del delAmt ${(1 - indexTip.y) * 100}`);
                // socket.emit("delay", {"delay", "delAmt", indexTip.x * 100);
            }
            if (results.multiHandedness[i].label === `Left`) {
                // console.log("left index tip: ", indexTip);
                canvasCtx.fillStyle = "#00FF00";
                canvasCtx.beginPath();
                canvasCtx.arc(indexTip.x * width, indexTip.y * height, 20, 0, 2 * Math.PI);
                canvasCtx.fill();
                socket.emit("delay", `del delTime ${indexTip.x * 2000}`);

            }
        }
        canvasCtx.restore();
    }

}