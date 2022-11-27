console.log(`nodechestra voice page loaded`);

const socket = io("/voice");
socket.on("connect", () => {
    console.log(`client ID: ${socket.id}`);
});

let width = innerWidth, height = innerHeight;
const captureElement = document.getElementById('capture');
const canvasElement = document.getElementById('canvas');
const canvasCtx = canvasElement.getContext('2d');
canvasElement.width = width;
canvasElement.height = height;

// https://www.seventhstring.com/resources/notefrequencies.html
let voiceFrequency = 440, freqArray = [65.41, 69.3, 73.42, 77.78, 82.41, 87.31, 92.5, 98., 103.8, 110., 116.5, 123.5, 130.8, 138.6, 146.8, 155.6, 164.8, 174.6, 185., 196., 207.7, 220., 233.1, 246.9, 261.6, 277.2, 293.7, 311.1, 329.6, 349.2, 370., 392., 415.3, 440., 466.2, 493.9, 523.3, 554.4, 587.3, 622.3, 659.3, 698.5, 740., 784., 830.6, 880., 932.3, 987.8, 1047, 1109, 1175, 1245, 1319, 1397, 1480, 1568, 1661, 1760, 1865, 1976];


const faceMesh = new FaceMesh({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    }
});
faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});
faceMesh.onResults(onResults);

const camera = new Camera(captureElement, {
    onFrame: async () => {
        await faceMesh.send({ image: captureElement });
    },
    width: width,
    height: height
});
camera.start();

function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    // canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
    if (results.multiFaceLandmarks) {
        // for (const landmarks of results.multiFaceLandmarks) {
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION, { color: '#C0C0C070', lineWidth: 1 });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, { color: '#FF3030' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW, { color: '#FF3030' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_IRIS, { color: '#FF3030' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, { color: '#30FF30' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW, { color: '#30FF30' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_IRIS, { color: '#30FF30' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_FACE_OVAL, { color: '#E0E0E0' });
        //     drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, { color: '#E0E0E0' });
        // }
        let lipTop = results.multiFaceLandmarks[0][13];
        let lipBot = results.multiFaceLandmarks[0][14];
        let lipAp = lipBot.y - lipTop.y
        // console.log(lipBot.y - lipTop.y);
        canvasCtx.fillStyle = "#FF0000";
        canvasCtx.beginPath();
        canvasCtx.arc(lipTop.x * width, lipTop.y * height, 20, 0, 2 * Math.PI);
        canvasCtx.arc(lipBot.x * width, lipBot.y * height, 20, 0, 2 * Math.PI);
        canvasCtx.fill();
        // console.log(lipAp);

        voiceFrequency = (1 - lipTop.y) * 1000
        voiceVelocity = lipAp * 1000

        // https://stackoverflow.com/questions/8584902/get-the-closest-number-out-of-an-array
        let minDiff = 1000, prox, proxEx;
        for (let i = 0; i < freqArray.length; i++) {
            let m = Math.abs(voiceFrequency - freqArray[i]);
            if (m < minDiff) {
                minDiff = m;
                prox = freqArray[i];
            }
        }
        console.log(voiceFrequency + "," + prox + "," + proxEx);

        if (prox != proxEx) {
            socket.emit("voice", `voice1 ${proxEx} 0`);
            proxEx = prox
            if (lipAp > 0.002) {
                console.log(prox != proxEx)
                socket.emit("voice", `voice1 ${prox} ${voiceVelocity}`);
                // socket.emit("voice", `voice1 voiceFreq ${prox}`);
                // socket.emit("voice", `voice1 voiceVel ${voiceVelocity}`);
            }
            else {
                socket.emit("voice", `voice1 ${prox} 0`);
            }
        }
        // socket.emit("voice", `osc1 osc `);
    }
    canvasCtx.restore();
}


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
//                 // socket.emit("delay right", indexTip.x);
//                 // socket.emit("delay right", indexTip.x * 100);
//                 // socket.emit(`delay delAmt ${indexTip.x * 100}`);
//                 // socket.emit("delay", "delay", "delAmt", indexTip.x * 100);
//                 socket.emit("delay", `del delAmt ${(1 - indexTip.y) * 100}`);
//                 // socket.emit("delay", {"delay", "delAmt", indexTip.x * 100);
//             }
//             if (results.multiHandedness[i].label === `Left`) {
//                 // console.log("left index tip: ", indexTip);
//                 canvasCtx.fillStyle = "#00FF00";
//                 canvasCtx.beginPath();
//                 canvasCtx.arc(indexTip.x * width, indexTip.y * height, 20, 0, 2 * Math.PI);
//                 canvasCtx.fill();
//                 socket.emit("delay", `del delTime ${indexTip.x * 2000}`);

//             }
//         }
//         canvasCtx.restore();
//     }

// }