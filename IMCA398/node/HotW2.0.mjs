import dotenv from 'dotenv/config'
import replicate from 'replicate'
import fetch from 'node-fetch'
import fs from 'fs'
import pngToJpeg from 'png-to-jpeg'
import escpos from 'escpos';
import USB from 'escpos-usb';
import Printer from 'c410-printer';

const modelT2I = await replicate.model("stability-ai/stable-diffusion:f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1")
const modelI2T = await replicate.model("methexis-inc/img2prompt:50adaf2d3ad20a6f911a8a9e3ccf777b263b8596fbd2c8fc26e8888f8a0edbb5");
let predictionT2I, outputT2I, predictionI2T;
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
        fs.writeFile(fileName + `.png`, buffer, function (err, res) {
            resolve(convertImage(fileName));
            if (err) reject(err);
        });
    })
}

function convertImage(fileName) {
    return new Promise((resolve, reject) => {
        console.log(`CONVERTING...`)
        let convertBuffer = fs.readFileSync(fileName + `.png`)
        pngToJpeg({ quality: 90 })(convertBuffer)
            .then(output => fs.writeFile(fileName + `.jpg`, output, function (err, res) {
                // resolve(printImageIPP(fileName));
                resolve(printImageUSB(fileName));
                if (err) reject(err);
            }));
    })
}

function printImageUSB(fileName) {
    var printer = new Printer('HP_Photosmart_5510_series');
    var fileBuffer = fs.readFileSync(fileName + `.jpg`);
    var options = { o: ' media=4x6.Photo.FullBleed' };
    var jobFromBuffer = printer.printBuffer(fileBuffer, options);
    printer.destroy()
}

function printText(text) {
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

for (let i = 1; i <= 1; i++) {
    console.log("PREDICTING... (T2I)");
    predictionT2I = await modelT2I.predict({
        prompt: outputI2T,
        width: 768,
        height: 512
    });
    outputT2I = predictionT2I.output[0];
    console.log(outputT2I)
    await getImage(outputT2I, `app/${timestamp}_${i}`)
    console.log("PREDICTING... (I2T)");
    predictionI2T = await modelI2T.predict({ image: outputT2I });
    outputI2T = predictionI2T.output.trim();
    printText(outputI2T)
    console.log(outputI2T);
}