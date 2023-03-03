import * as dotenv from 'dotenv'
// import open from 'open'
dotenv.config()
import Replicate from 'replicate-js'
import ipp from 'ipp'
import fs from 'fs'
import fetch from 'node-fetch'
import pngToJpeg from 'png-to-jpeg'

const replicate = new Replicate();
const modelT2I = await replicate.models.get('stability-ai/stable-diffusion')
// const versionT2I = await modelT2I.versions.get("f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1")
// const modelT2I = await replicate.models.get("stability-ai/stable-diffusion@f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1")
// const modelT2I = await replicate.models.get("stability-ai/stable-diffusion@db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf")
const modelI2T = await replicate.models.get("methexis-inc/img2prompt");
let predictionT2I;
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
    console.log(`PRINTING...`)
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
        console.log(res);
        console.log(err);
    });
}

for (let i = 1; i <= 1; i++) {
    console.log("------- T2I -------");
    predictionT2I = await modelT2I.predict({ prompt: predictionI2T });
    // predictionT2I = await modelT2I.predict({ prompt: predictionI2T, width: 768, height: 512 });
    // predictionT2I = await versionT2I.predict({
    //     prompt: predictionI2T,
    //     width: 768,
    //     height: 512
    // });
    console.log(predictionT2I[0])
    await getImage(predictionT2I[0], `app/230301_test2_${i}`)
    console.log("------- I2T -------");
    predictionI2T = await modelI2T.predict({ image: predictionT2I[0] });
    console.log(predictionI2T);
}

// let URL = `https://replicate.delivery/pbxt/TUkoT15HUO4jAtTt1hdId1uRDg3ovAo6uw4KupVaybHom0IE/out-0.png`
// let prefix = `app/230301_`

// for (let i = 1; i <= 1; i++) {
//     // console.log(URL)
//     // await downloadImage(URL, prefix + `${i}`)
//     // await convertImage(prefix + `${i}`)
//     // await printImage(prefix + `${i}`)
// }

// await getImage(URL, prefix + `3`)
