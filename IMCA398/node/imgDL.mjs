// import fs from "fs";
// import fetch from 'node-fetch';
// const downloadImage = async (url, path) => {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const arrayBuffer = await blob.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     await fs.writeFile(path, buffer);
// }
// await downloadImage("https://sabe.io/images/saturn.png", "imgDL/saturn.png")
// // TypeError[ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined

import fs from "fs";
import fetch from 'node-fetch';

const downloadImage = async (url, path) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(path, buffer, function (err, result) {
        if (err) console.log('error', err);
    });
}

// await downloadImage("https://sabe.io/images/saturn.png", "imgDL/saturn.png")
await downloadImage("https://replicate.delivery/pbxt/FeemCFfKfhmOwS6TSID0A0Fk4fPeVfXYNiFpCCx4KOb3raPQIA/out-0.png", "imgDL/1.jpg")