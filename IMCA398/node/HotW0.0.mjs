// // // import Express module & make instance
// // import express from 'express';
// // const app = express();
// // // import HTTP module, set port number & create server
// // import http from 'http'
// // const port = 4200;
// // // // heroku
// // // const port = process.env.PORT;
// // let server = http.createServer(app);
// // server.listen(port, () => { console.log('server listening on port ' + port); })

// // // serve pages from public dir
// // app.use(express.static('/public'));
// // // app.use(express.static(__dirname + '/public'));
// // // app.use('/generate', generate);
// // // // heroku : serve pages node-modules directories
// // // app.use(express.static(__dirname + '/node_modules'));

// import * as dotenv from 'dotenv'
// dotenv.config()
// import Replicate from 'replicate-js'
// // import open from 'open'
// import ipp from 'ipp'
// import fs from 'fs'
// import fetch from 'node-fetch'

// const replicate = new Replicate();
// const modelT2I = await replicate.models.get('stability-ai/stable-diffusion')
// const modelI2T = await replicate.models.get("methexis-inc/img2prompt");
// let predictionT2I;
// let predictionI2T = "an angry hamster eating brie in an impressionist style";

// const printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");

// // const downloadImage = async (url, path) => {
// //     const response = await fetch(url);
// //     const blob = await response.blob();
// //     const arrayBuffer = await blob.arrayBuffer();
// //     const buffer = Buffer.from(arrayBuffer);
// //     await fs.writeFile(path, buffer, function (err, result) {
// //         if (err) console.log('error', err);
// //     });
// // }

// // const printImage = async (file) => {
// //     let imgBuffer = fs.readFileSync(file);
// //     let msg = {
// //         "operation-attributes-tag": {
// //             "requesting-user-name": "isp",
// //             "job-name": "test-print",
// //             "document-format": "image/jpeg"
// //         },
// //         data: imgBuffer
// //     };
// //     printer.execute("Print-Job", msg, function (err, res) {
// //         console.log(res);
// //         console.log(err);
// //     });
// // }

// // // Print straight from buffer? --> NO: needs to be a file
// // const printImage = async (url) => {
// //     const response = await fetch(url);
// //     const blob = await response.blob();
// //     const arrayBuffer = await blob.arrayBuffer();
// //     const buffer = Buffer.from(arrayBuffer);
// //     let msg = {
// //         "operation-attributes-tag": {
// //             "requesting-user-name": "isp",
// //             "job-name": "test-print",
// //             "document-format": "image/jpeg"
// //         },
// //         data: buffer
// //     };
// //     printer.execute("Print-Job", msg, function (err, res) {
// //         console.log(res);
// //         console.log(err);
// //     });
// // }

// import pngToJpeg from 'png-to-jpeg'

// const downloadImage = async (url, fileName) => {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const arrayBuffer = await blob.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     const file = await fs.writeFile(fileName + `.png`, buffer, function (err, res) {
//         if (err) console.log('error', err);
//     });
// }

// const convertImage = async (fileName) => {
//     let convertBuffer = fs.readFileSync(fileName + `.png`)
//     pngToJpeg({ quality: 90 })(convertBuffer)
//         .then(output => fs.writeFileSync(fileName + `.jpg`, output));
// }


// const printImage = async (fileName) => {
//     let printBuffer = fs.readFileSync(fileName + `.jpg`);
//     let msg = {
//         "operation-attributes-tag": {
//             "requesting-user-name": "isp",
//             "job-name": "test-print",
//             "document-format": "image/jpeg"
//         },
//         data: printBuffer
//     };
//     printer.execute("Print-Job", msg, function (err, res) {
//         console.log(res);
//         console.log(err);
//     });
// }

// // for (let i = 1; i <= 1; i++) {
// //     console.log("------- T2I -------");
// //     predictionT2I = await modelT2I.predict({ prompt: predictionI2T });
// //     console.log(predictionT2I[0])
// //     await downloadImage(predictionT2I[0], `assets/${i}.jpg`)
// //     // await printImage(`assets/${i}.jpg`)
// //     // await printImage(predictionT2I[0])
// //     console.log("------- I2T -------");
// //     predictionI2T = await modelI2T.predict({ image: predictionT2I[0] });
// //     console.log(predictionI2T);
// // }

// await downloadImage(`https://replicate.delivery/pbxt/OOY8jYZBXEYCOJhXQ1RTzlUuViPeZ2WZHYbIfsr7K5YqCEjQA/out-0.png`, `appTest/1`)
// // await convertImage(`appTest/1`)
// // await printImage(`appTest/1`)
// // Result: works sequentially!


// /* 230228 */

// import * as dotenv from 'dotenv'
// dotenv.config()
// import Replicate from 'replicate-js'
// // import open from 'open'
// import ipp from 'ipp'
// import fs from 'fs'
// import fetch from 'node-fetch'
// import pngToJpeg from 'png-to-jpeg'

// const replicate = new Replicate();
// const modelT2I = await replicate.models.get('stability-ai/stable-diffusion')
// const modelI2T = await replicate.models.get("methexis-inc/img2prompt");
// let predictionT2I;
// let predictionI2T = "an angry hamster eating brie in an impressionist style";
// const printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");

// const downloadImage = async (url, fileName) => {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const arrayBuffer = await blob.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     const file = await fs.writeFile(fileName + `.png`, buffer, function (err, res) {
//         if (err) console.log('error', err);
//     });
// }

// const convertImage = async (fileName) => {
//     let convertBuffer = fs.readFileSync(fileName + `.png`)
//     pngToJpeg({ quality: 90 })(convertBuffer)
//         .then(output => fs.writeFileSync(fileName + `.jpg`, output));
// }

// const printImage = async (fileName) => {
//     let printBuffer = fs.readFileSync(fileName + `.jpg`);
//     let msg = {
//         "operation-attributes-tag": {
//             "requesting-user-name": "isp",
//             "job-name": "test-print",
//             "document-format": "image/jpeg"
//         },
//         data: printBuffer
//     };
//     printer.execute("Print-Job", msg, function (err, res) {
//         console.log(res);
//         console.log(err);
//     });
// }

// let fileDir = `appTest/`
// // let timestamp = Date.now()
// let timestamp = `2`
// // await downloadImage(`https://replicate.delivery/pbxt/OOY8jYZBXEYCOJhXQ1RTzlUuViPeZ2WZHYbIfsr7K5YqCEjQA/out-0.png`, fileDir + timestamp)
// // await convertImage(`appTest/` + timestamp)
// await printImage(`appTest/` + timestamp)

/* 230301 */

// import * as dotenv from 'dotenv'
// dotenv.config()
// import Replicate from 'replicate-js'
// import ipp from 'ipp'
// import fs from 'fs'
// import fetch from 'node-fetch'
// import pngToJpeg from 'png-to-jpeg'

// const replicate = new Replicate();
// const modelT2I = await replicate.models.get('stability-ai/stable-diffusion')
// const modelI2T = await replicate.models.get("methexis-inc/img2prompt");
// let predictionT2I;
// let predictionI2T = "an angry hamster eating brie in an impressionist style";
// const printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");

// const downloadImage = async (url, fileName) => {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const arrayBuffer = await blob.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     // const file = await fs.writeFile(fileName + `.png`, buffer, function (err, res) { if (err) console.log('error', err); });
//     await fs.writeFile(fileName + `.png`, buffer, function (err, res) { if (err) console.log('error', err); });
//     // await writeFile(buffer, fileName);
// }

// // const writeFile = async (buffer, fileName) => {
// //     fs.writeFile(fileName + `.png`, buffer, function (err, res) { if (err) console.log('error', err); });
// // }

// const convertImage = async (fileName) => {
//     let convertBuffer = fs.readFileSync(fileName + `.png`)
//     pngToJpeg({ quality: 90 })(convertBuffer)
//         .then(output => fs.writeFileSync(fileName + `.jpg`, output));
// }

// const printImage = async (fileName) => {
//     let printBuffer = fs.readFileSync(fileName + `.jpg`);
//     let msg = {
//         "operation-attributes-tag": {
//             "requesting-user-name": "isp",
//             "job-name": "test-print",
//             "document-format": "image/jpeg"
//         },
//         data: printBuffer
//     };
//     printer.execute("Print-Job", msg, function (err, res) {
//         console.log(res);
//         console.log(err);
//     });
// }

// // // code to get image from Replicate --> for simplicity (i.e. milking free credits), using a URL accessing previously generated image 
// // for (let i = 1; i <= 1; i++) {
// //     console.log("------- T2I -------");
// //     predictionT2I = await modelT2I.predict({ prompt: predictionI2T });
// //     console.log(predictionT2I[0])
// //     await downloadImage(predictionT2I[0], `app/${i}`)
// //     await convertImage(`app/${i}`)
// //     await printImage(`app/${i}`)
// //     console.log("------- I2T -------");
// //     predictionI2T = await modelI2T.predict({ image: predictionT2I[0] });
// //     console.log(predictionI2T);
// // }

// let URL = `https://replicate.delivery/pbxt/TUkoT15HUO4jAtTt1hdId1uRDg3ovAo6uw4KupVaybHom0IE/out-0.png`
// let prefix = `app/230301_`

// for (let i = 1; i <= 1; i++) {
//     // console.log(URL)
//     // await downloadImage(URL, prefix + `${i}`)
//     // await convertImage(prefix + `${i}`)
//     // await printImage(prefix + `${i}`)
// }

// // await downloadImage(URL, prefix + `2`)