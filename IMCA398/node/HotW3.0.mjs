import dotenv from 'dotenv/config'
import replicate from 'replicate'
import fetch from 'node-fetch'
import fs from 'fs'
import pngToJpeg from 'png-to-jpeg'
import escpos from 'escpos';
import USB from 'escpos-usb';
import Printer from 'c410-printer';
import sound from "sound-play";

const modelT2I = await replicate.model("stability-ai/stable-diffusion:f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1")
const modelI2T = await replicate.model("methexis-inc/img2prompt:50adaf2d3ad20a6f911a8a9e3ccf777b263b8596fbd2c8fc26e8888f8a0edbb5");
const modelT2S = await replicate.model("afiaka87/tortoise-tts:e9658de4b325863c4fcdc12d94bb7c9b54cbfe351b7ca1b36860008172b91c71")
const modelS2T = await replicate.model("openai/whisper:e39e354773466b955265e969568deb7da217804d8e771ea8c9cd0cef6591f8bc")
let predictionT2I, outputT2I, predictionI2T, predictionT2S, outputT2S, predictionS2T, outputS2T;
let outputI2T = "winnows weaning their way through the wheat";
const timestamp = Date.now();
const device = new USB(10473, 649);
const thermalPrinter = new escpos.Printer(device);

async function getImage(url, fileName) {
    console.log(`FETCHING...`)
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const write = await writeImage(fileName, buffer);
}

function writeImage(fileName, buffer) {
    return new Promise((resolve, reject) => {
        console.log(`WRITING...`)
        fs.writeFile(fileName + `-1.png`, buffer, function (err, res) {
            resolve(convertImage(fileName));
            if (err) reject(err);
        });
    })
}

function convertImage(fileName) {
    return new Promise((resolve, reject) => {
        console.log(`CONVERTING...`)
        let convertBuffer = fs.readFileSync(fileName + `-1.png`)
        pngToJpeg({ quality: 90 })(convertBuffer)
            .then(output => fs.writeFile(fileName + `-2.jpg`, output, function (err, res) {
                resolve(printImageUSB(fileName));
                if (err) reject(err);
            }));
    })
}

function printImageUSB(fileName) {
    console.log(`PRINTING...`)
    var printer = new Printer('HP_Photosmart_5510_series');
    var fileBuffer = fs.readFileSync(fileName + `-2.jpg`);
    var options = { o: ' media=4x6.Photo.FullBleed' };
    var jobFromBuffer = printer.printBuffer(fileBuffer, options);
    printer.destroy()
}

async function getPrompt(fileName, text) {
    console.log(`WRITING...`)
    console.log(`PRINTING...`) // fix this
    fs.writeFile(fileName + `-3.txt`, text, function (err, res) {
        printPrompt(text);
    });
}

function printPrompt(text) {
    // console.log(`PRINTING...`)
    device.open(function (error) {
        thermalPrinter
            .size(1, 1)
            // .size(0.5, 0.5)
            .text(text)
            .feed()
            .feed()
            // .cut()
            .close();
    });
}

async function getAudio(url, fileName) {
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const write = await writeAudio(fileName, buffer);
}

function writeAudio(fileName, buffer) {
    return new Promise((resolve, reject) => {
        console.log(`WRITING...`)
        fs.writeFile(fileName + `-4.mp3`, buffer, function (err, res) {
            resolve(playAudio(fileName));
            if (err) reject(err);
        });
    })
}

function playAudio(fileName) {
    console.log(`PLAYING...`)
    sound.play(fileName + "-4.mp3");
}

async function getTranscription(text, fileName) {
    console.log(`WRITING...`)
    fs.writeFile(fileName + `-5.txt`, text, function (err, res) { });
}

for (let i = 1; i <= 1; i++) {
    // let filepath = `app/${timestamp}_${i}`
    let filepath = `HotW_test/${timestamp}_${i}`
    console.log("PREDICTING... (T2I)");
    predictionT2I = await modelT2I.predict({
        prompt: outputI2T,
        width: 768,
        height: 512
    });
    outputT2I = predictionT2I.output[0];
    console.log(outputT2I)
    // await getImage(outputT2I, `HotW_test/${timestamp}_${i}`)
    await getImage(outputT2I, filepath)
    console.log("PREDICTING... (I2T)");
    predictionI2T = await modelI2T.predict({ image: outputT2I });
    outputI2T = predictionI2T.output.trim();
    console.log(outputI2T);
    // await printText(outputI2T);
    await getPrompt(filepath, outputI2T);
    console.log("PREDICTING... (T2S)");
    predictionT2S = await modelT2S.predict({
        'text': outputI2T,
        'voice_a': "random",
    })
    outputT2S = predictionT2S.output
    console.log(outputT2S)
    await getAudio(outputT2S, filepath);
    console.log("PREDICTING... (S2T)");
    predictionS2T = await modelS2T.predict({
        'audio': outputT2S,
        'temperature': 0,
    })
    outputS2T = predictionS2T.output.transcription
    console.log(outputS2T)
    await getTranscription(outputS2T, filepath);
}


