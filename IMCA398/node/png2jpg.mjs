import fs from 'fs'
import pngToJpeg from 'png-to-jpeg'

let imagePath = "./app/230301_5"
// let buffer = fs.readFileSync("./testpng2jpg.png") // "Error: Incomplete or corrupt PNG file"
// let buffer = fs.readFileSync("./testprintpng.png") // OK
let buffer = fs.readFileSync(imagePath + `.png`) // OK
pngToJpeg({ quality: 90 })(buffer)
    // .then(output => fs.writeFileSync("./testpng2jpg.jpeg", output));
    .then(output => fs.writeFileSync(imagePath + `.jpg`, output));

// let imgBuffer = fs.readFileSync('./testprintjpg.JPG'); // OK
// console.log(imgBuffer);
// var msg = {
//     "operation-attributes-tag": {
//         "requesting-user-name": "isp",
//         "job-name": "test-print",
//         "document-format": "image/jpeg"
//     },
//     data: imgBuffer
// };
// printer.execute("Print-Job", msg, function (err, res) {
//     console.log(res);
//     console.log(err);
// });

// pngToJpeg
// let buffer = fs.readFileSync("./some-file.png");
// pngToJpeg({ quality: 90 })(buffer)
//     .then(output => fs.writeFileSync("./some-file.jpeg", output));