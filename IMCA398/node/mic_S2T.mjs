/* mic to S2T */
import dotenv from 'dotenv/config'
import replicate from 'replicate'
import fs from 'fs'
import mic from 'mic';

const modelS2T = await replicate.model("openai/whisper:e39e354773466b955265e969568deb7da217804d8e771ea8c9cd0cef6591f8bc")
let outputS2T;

var micInstance = mic({
    debug: false,
    fileType: 'mp3'
});
var micInputStream = micInstance.getAudioStream();
var outputFileStream = fs.WriteStream('mic_S2T_test.mp3');
micInputStream.pipe(outputFileStream);

micInputStream.on('startComplete', function () {
    console.log("Started recording");
    setTimeout(function () { micInstance.stop(); }, 12000);
});

micInputStream.on('stopComplete', function () {
    console.log("Stopped recording");
    startS2T();
});

micInstance.start();

async function startS2T() {
    let audio_file = "mic_S2T_test.mp3"
    let audio_base64 = fs.readFileSync(audio_file, { encoding: 'base64' });
    outputS2T = await modelS2T.predict({
        'audio': `data:audio/mp3;base64,${audio_base64}`,
        'temperature': 0,
    })
    console.log(outputS2T.transcription)
}