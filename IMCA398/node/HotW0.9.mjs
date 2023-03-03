// import * as dotenv from 'dotenv'
// import dotenv from 'dotenv'
// import open from 'open'
// dotenv.config()
import dotenv from 'dotenv/config'
// import Replicate from 'replicate-js'
import replicate from 'replicate'
import ipp from 'ipp'
import fs from 'fs'
import fetch from 'node-fetch'
import pngToJpeg from 'png-to-jpeg'

// const replicate = new Replicate({ token: process.env.REPLICATE_API_TOKEN });
// const replicate = new Replicate({ token: 'e71f49fa960b9449f60546f396d9c1d86c1d4752' });
// const modelT2I = await replicate.models.get('stability-ai/stable-diffusion')
// const versionT2I = await modelT2I.versions.get("f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1")
// const modelT2I = await replicate.models.get("stability-ai/stable-diffusion@f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1")
// const modelT2I = await replicate.models.get("stability-ai/stable-diffusion@db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf")
const modelT2I = await replicate.model("stability-ai/stable-diffusion:f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1")
const modelI2T = await replicate.model("methexis-inc/img2prompt:50adaf2d3ad20a6f911a8a9e3ccf777b263b8596fbd2c8fc26e8888f8a0edbb5");
let predictionT2I, imageURL;
let predictionI2T = "an angry hamster eating brie in an impressionist style";
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

for (let i = 1; i <= 1; i++) {
    console.log("PREDICTING... (T2I)");
    // predictionT2I = await modelT2I.predict({ prompt: predictionI2T });
    // predictionT2I = await modelT2I.predict({ prompt: predictionI2T, width: 768, height: 512 });
    predictionT2I = await modelT2I.predict({
        prompt: predictionI2T,
        width: 768,
        height: 512
    });
    imageURL = predictionT2I.output[0];
    console.log(imageURL)
    await getImage(imageURL, `app/230301_test6_${i}`)
    console.log("PREDICTING... (I2T)");
    predictionI2T = await modelI2T.predict({ image: imageURL });
    console.log(predictionI2T.output.trim());
}

