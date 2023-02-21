// // import Express module & make instance
// import express from 'express';
// const app = express();
// // import HTTP module, set port number & create server
// import http from 'http'
// const port = 4200;
// // // heroku
// // const port = process.env.PORT;
// let server = http.createServer(app);
// server.listen(port, () => { console.log('server listening on port ' + port); })

// // serve pages from public dir
// app.use(express.static('/public'));
// // app.use(express.static(__dirname + '/public'));
// // app.use('/generate', generate);
// // // heroku : serve pages node-modules directories
// // app.use(express.static(__dirname + '/node_modules'));

import * as dotenv from 'dotenv'
dotenv.config()
import Replicate from 'replicate-js'
// import open from 'open'
import ipp from 'ipp'
import fs from 'fs'
import fetch from 'node-fetch'

const replicate = new Replicate();
const modelT2I = await replicate.models.get('stability-ai/stable-diffusion')
const modelI2T = await replicate.models.get("methexis-inc/img2prompt");
let predictionT2I;
let predictionI2T = "an angry hamster eating brie in an impressionist style";

const printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");

// const downloadImage = async (url, path) => {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const arrayBuffer = await blob.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     await fs.writeFile(path, buffer, function (err, result) {
//         if (err) console.log('error', err);
//     });
// }

// const printImage = async (file) => {
//     let imgBuffer = fs.readFileSync(file);
//     let msg = {
//         "operation-attributes-tag": {
//             "requesting-user-name": "isp",
//             "job-name": "test-print",
//             "document-format": "image/jpeg"
//         },
//         data: imgBuffer
//     };
//     printer.execute("Print-Job", msg, function (err, res) {
//         console.log(res);
//         console.log(err);
//     });
// }

// // Print straight from buffer?
// const printImage = async (url) => {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const arrayBuffer = await blob.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     let msg = {
//         "operation-attributes-tag": {
//             "requesting-user-name": "isp",
//             "job-name": "test-print",
//             "document-format": "image/jpeg"
//         },
//         data: buffer
//     };
//     printer.execute("Print-Job", msg, function (err, res) {
//         console.log(res);
//         console.log(err);
//     });
// }


const downloadImage = async (url, path) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const file = await fs.writeFile(path, buffer, function (err, res) {
        if (err) console.log('error', err);
        if (res) printImage(path)
    });
}

const printImage = async (path) => {
    let imgBuffer = fs.readFileSync(path);
    let msg = {
        "operation-attributes-tag": {
            "requesting-user-name": "isp",
            "job-name": "test-print",
            "document-format": "image/jpeg"
        },
        data: imgBuffer
    };
    printer.execute("Print-Job", msg, function (err, res) {
        console.log(res);
        console.log(err);
    });
}

for (let i = 1; i <= 3; i++) {
    console.log("------- T2I -------");
    predictionT2I = await modelT2I.predict({ prompt: predictionI2T });
    console.log(predictionT2I[0])
    await downloadImage(predictionT2I[0], `assets/${i}.jpg`)
    // await printImage(`assets/${i}.jpg`)
    // await printImage(predictionT2I[0])
    console.log("------- I2T -------");
    predictionI2T = await modelI2T.predict({ image: predictionT2I[0] });
    console.log(predictionI2T);
}

