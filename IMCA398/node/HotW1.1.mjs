import dotenv from 'dotenv/config'
import replicate from 'replicate'
import fetch from 'node-fetch'
import fs from 'fs'
import ipp from 'ipp'
import pngToJpeg from 'png-to-jpeg'

const modelT2I = await replicate.model("stability-ai/stable-diffusion:f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1")
const modelI2T = await replicate.model("methexis-inc/img2prompt:50adaf2d3ad20a6f911a8a9e3ccf777b263b8596fbd2c8fc26e8888f8a0edbb5");
let predictionT2I, outputT2I, predictionI2T;
let outputI2T = "an angry hamster eating brie in an impressionist style";
const timestamp = Date.now();
const printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");

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
                resolve(printImage(fileName));
                if (err) reject(err);
            }));
    })
}

function printImage(fileName) {
    let printBuffer = fs.readFileSync(fileName + `.jpg`);
    let msg = {
        "operation-attributes-tag": {
            "requesting-user-name": "isp",
            "job-name": "test-print",
            "document-format": "image/jpeg"
        },
        data: printBuffer
    };
    printer.execute("Print-Job", msg, function (err, res) {
        // console.log(res);
        console.log(`PRINTING...`)
        if (err) console.log(err);
    });
}

for (let i = 1; i <= 2; i++) {
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
    console.log(outputI2T);
}
