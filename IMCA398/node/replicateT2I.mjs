import dotenv from 'dotenv/config'
import replicate from "replicate";

const prediction = await replicate
    .model("stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf")
    .predict({ prompt: "painting of a cat by andy warhol", });


await getImage(outputT2I)
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
        fs.writeFile(filestep + `.png`, buffer, function (err, res) {
            resolve(convertImage());
            if (err) reject(err);
        });
    })
}

function convertImage() {
    return new Promise((resolve, reject) => {
        console.log(`CONVERTING IMAGE...`)
        let convertBuffer = fs.readFileSync(filestep + `.png`)
        pngToJpeg({ quality: 90 })(convertBuffer)
            .then(output => fs.writeFile(filestep + `.jpg`, output, function (err, res) {
                resolve(printImageUSB());
                if (err) reject(err);
            }));
    })
}