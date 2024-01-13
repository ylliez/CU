/* recording test - mic */
import mic from 'mic';
import fs from 'fs';

var micInstance = mic({
    // rate: '16000',
    // channels: '1',
    // device: 'hw:1,0',
    // device: 'plughw:1,0', // NO
    // device: 'USB PnP Sound Device', // NO
    // device: 'coreaudio "USB PnP Sound Device"', // NO
    // device: 'plughw:1,1', // NO
    // device: 'plughw:1,2', // NO
    // device: 'plughw:2,0', // NO
    // device: 'plughw:0,1', // NO
    debug: true,
    // exitOnSilence: 6,
    fileType: 'wav'
});
var micInputStream = micInstance.getAudioStream();
var outputFileStream = fs.WriteStream('mic_test.wav');
micInputStream.pipe(outputFileStream);

// micInputStream.on('data', function (data) {
//     console.log("Recieved Input Stream: " + data.length);
// });

// micInputStream.on('error', function (err) {
//     cosole.log("Error in Input Stream: " + err);
// });

micInputStream.on('startComplete', function () {
    console.log("Started recording");
    setTimeout(function () { micInstance.stop(); }, 12000);
});

micInputStream.on('stopComplete', function () {
    console.log("Stopped recording");
});

// micInputStream.on('pauseComplete', function () {
//     console.log("Got SIGNAL pauseComplete");
//     setTimeout(function () {
//         micInstance.resume();
//     }, 5000);
// });

// micInputStream.on('resumeComplete', function () {
//     console.log("Got SIGNAL resumeComplete");
//     setTimeout(function () {
//         micInstance.stop();
//     }, 5000);
// });

// micInputStream.on('silence', function () {
//     console.log("Got SIGNAL silence");
// });

// micInputStream.on('processExitComplete', function () {
//     console.log("Got SIGNAL processExitComplete");
// });

micInstance.start();

// /* recording test - mic */
// import mic from 'mic';
// import fs from 'fs';

// var micInstance = mic({
//     rate: '16000',
//     channels: '1',
//     device: 'hw:1,0',
//     debug: true,
//     exitOnSilence: 6,
//     fileType: 'wav'
// });
// var micInputStream = micInstance.getAudioStream();

// var outputFileStream = fs.WriteStream('mic/output.wav');

// micInputStream.pipe(outputFileStream);

// micInputStream.on('data', function (data) {
//     console.log("Recieved Input Stream: " + data.length);
// });

// micInputStream.on('error', function (err) {
//     cosole.log("Error in Input Stream: " + err);
// });

// micInputStream.on('startComplete', function () {
//     console.log("Got SIGNAL startComplete");
//     setTimeout(function () {
//         micInstance.pause();
//     }, 5000);
// });

// micInputStream.on('stopComplete', function () {
//     console.log("Got SIGNAL stopComplete");
// });

// micInputStream.on('pauseComplete', function () {
//     console.log("Got SIGNAL pauseComplete");
//     setTimeout(function () {
//         micInstance.resume();
//     }, 5000);
// });

// micInputStream.on('resumeComplete', function () {
//     console.log("Got SIGNAL resumeComplete");
//     setTimeout(function () {
//         micInstance.stop();
//     }, 5000);
// });

// micInputStream.on('silence', function () {
//     console.log("Got SIGNAL silence");
// });

// micInputStream.on('processExitComplete', function () {
//     console.log("Got SIGNAL processExitComplete");
// });

// micInstance.start();

// /* recording test - microphone */
// import mic from 'microphone';
// mic.startCapture();
// mic.audioStream.on('data', function(data) {
//     process.stdout.write(data);
// });

