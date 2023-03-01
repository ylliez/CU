import * as dotenv from 'dotenv'
dotenv.config()
import Replicate from 'replicate-js'
// import open from 'open'
import ipp from 'ipp'
import fs from 'fs'
// import { promises as fs } from 'fs';
// import fs from 'fs/promises'
// import * as fs from 'fs'
// import fs from 'fs'
// import promises from 'fs';
import fetch from 'node-fetch'
import pngToJpeg from 'png-to-jpeg'

const replicate = new Replicate();
const modelT2I = await replicate.models.get('stability-ai/stable-diffusion')
const modelI2T = await replicate.models.get("methexis-inc/img2prompt");
let predictionT2I;
let predictionI2T = "an angry hamster eating brie in an impressionist style";

const printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");

// let fileDir = `appTest/`
// let timestamp = Date.now()
// await downloadImage(`https://replicate.delivery/pbxt/TUkoT15HUO4jAtTt1hdId1uRDg3ovAo6uw4KupVaybHom0IE/out-0.png`, fileDir + timestamp)
// await convertImage(`appTest/` + timestamp)
// await printImage(`appTest/1`)

async function downloadImage(url, fileName) {
    console.log(`DOWNLOADING...`)
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const write = await writeImage(fileName, buffer);
}


// const downloadImage = async (url, fileName) => {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const arrayBuffer = await blob.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     const file = await fs.writeFile(fileName + `.png`, buffer, function (err, res) {
//         if (err) console.log('error', err);
//     });
// }

function writeImage(fileName, buffer) {
    return new Promise((resolve, reject) => {
        console.log(`WRITING...`)
        fs.writeFile(fileName + `.png`, buffer, function (err, res) {
            // resolve(convertImage(fileName));
            // reject(err);
            // resolve(console.log("writeImage Success"));
            // if (err) reject(console.log("writeImage Error"));
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
            //         // take 1
            //         .then(output => fs.writeFileSync(fileName + `.jpg`, output));
            //     // resolve(printImage(fileName));
            //     resolve(console.log("convertImage Success"));
            //     reject(console.log("convertImage Error"));
            // })
            //         take 2
            //     fs.writeFileSync(fileName + `.jpg`, output, function (err, res) {
            //         resolve(printImage(fileName));
            //         reject(err);
            //     });
            // })
            //         take 3
            //         .then(output => fs.writeFileSync(fileName + `.jpg`, output, function (err, res) {
            //             resolve(printImage(fileName));
            //             if (err) reject(err);
            //         }));
            // })
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

await downloadImage(`https://replicate.delivery/pbxt/TUkoT15HUO4jAtTt1hdId1uRDg3ovAo6uw4KupVaybHom0IE/out-0.png`, `appTest/230301_1`)
// await printImage(`appTest/230301_1`)
