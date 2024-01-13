// import fetch from 'node-fetch';
// const response = await fetch('https://github.com/');
// console.log(response);
// const body = await response.text();
// console.log(body);

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
    // console.log(`response:` + response)
    // console.log(response)
    const blob = await response.blob();
    // console.log(`blob:` + blob)
    // console.log(blob)
    const arrayBuffer = await blob.arrayBuffer();
    // console.log(`arrayBuffer:` + arrayBuffer)
    // console.log(arrayBuffer)
    const buffer = Buffer.from(arrayBuffer);
    console.log(buffer)
    await fs.writeFile(path, buffer, function (err, result) {
        if (err) console.log('error', err);
    });
}

// await downloadImage("https://sabe.io/images/saturn.png", "imgDL/saturn.png")
// await downloadImage("https://replicate.delivery/pbxt/Ib0vihEn6spRBdzLgoEez8hHo3jFMdCZawEeEaueJb4ekGLCB/out-0.png", "imgDL/1.jpg")
// await downloadImage("https://replicate.delivery/pbxt/Ib0vihEn6spRBdzLgoEez8hHo3jFMdCZawEeEaueJb4ekGLCB/out-0.png", "imgDL/test.png")
await downloadImage("https://replicate.delivery/pbxt/TUkoT15HUO4jAtTt1hdId1uRDg3ovAo6uw4KupVaybHom0IE/out-0.png", "imgDL/1.jpg")

// fs.createReadStream(path, options)