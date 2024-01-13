import dotenv from 'dotenv/config'
import replicate from 'replicate'

const modelT2S = await replicate.model("afiaka87/tortoise-tts:e9658de4b325863c4fcdc12d94bb7c9b54cbfe351b7ca1b36860008172b91c71")
const modelS2T = await replicate.model("openai/whisper:e39e354773466b955265e969568deb7da217804d8e771ea8c9cd0cef6591f8bc")
let predictionT2S, outputT2S, predictionS2T, outputS2T;

const inputsT2S = {
    'text': "This is the text to speech to text text you need to whisper into the microphone",
    'voice_a': "random",
}

predictionT2S = await modelT2S.predict(inputsT2S)
outputT2S = predictionT2S.output
console.log(outputT2S)


const inputsS2T = {
    // 'audio': open("mic/output.wav", "rb"),
    // 'audio': open("mic/output.wav"),
    // 'audio': fs.ReadStream('mic/output.wav'), // --> NO: "Unknown error handling prediction."
    // 'audio': fs.ReadStream('mic/output.raw'), // --> NO: "Unknown error handling prediction."
    // 'audio': fs.ReadStream('mic/whisperTest.m4a'), // --> NO: "Unknown error handling prediction."
    // 'audio': fs.readFileSync('mic/output.wav'), // --> NO: "Unknown error handling prediction."
    // 'audio': open(outputT2S.output),
    'audio': outputT2S,
    'temperature': 0,
}

predictionS2T = await modelS2T.predict(inputsS2T)
// console.log(predictionT2S)
outputS2T = predictionT2S.output.transcription
console.log(outputS2T)