import fetch from 'node-fetch';
import fs from 'fs';

// await getImage('https://replicate.delivery/pbxt/7rzgAdZLNTr7J15brmjfG5fyRLk6TSU0AuIOs7JqZfx74ikhA/out-0.png') // OK
// await getImage('replicate.delivery/pbxt/7rzgAdZLNTr7J15brmjfG5fyRLk6TSU0AuIOs7JqZfx74ikhA/out-0.png') // NO!
// await getImage('https://replicate.delivery/pbxt/VQpJ6YkSYhLBIFz2uOW0AjJAgEBKF408fep5op5XJDVGtRyQA/out-0.png') // NO?
// await getImage('https://replicate.delivery/pbxt/ezJRZv3D2jSdcSdSS3w1e0XvgueAIVEuatTaDYxWmJe1BGJDB/out-0.png') // OK?
// await getImage('https://replicate.delivery/pbxt/2CbVe077etviaU13erwmytnEqkRGSMP6TD9ncEYY5SiiHjkhA/out-0.png') // NO?
await getImage('https://replicate.delivery/pbxt/VQpJ6YkSYhLBIFz2uOW0AjJAgEBKF408fep5op5XJDVGtRyQA/out-0.png') // OK?
async function getImage(url) {
    console.log(`FETCHING IMAGE...`)
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const write = await writeImage(buffer);
}

function writeImage(buffer) {
    return new Promise((resolve, reject) => {
        console.log(`WRITING IMAGE...`)
        fs.writeFile(`getImage_test.png`, buffer, function (err, res) {
            if (err) reject(err);
        });
    })
}