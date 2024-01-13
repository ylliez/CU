import NodeWebcam from "node-webcam";
import recognize from 'tesseractocr'

// NodeWebcam.capture("webcam_test", { device: 'HD USB Camera' }, function (err, data) { });

// const text = await recognize()

NodeWebcam.capture("webcam_testOCR", { device: 'HD USB Camera', callbackReturn: "buffer" }, function (err, data) {
    console.log(data)
    ocrRecognize(data)
})

async function ocrRecognize(data) {
    const text = await recognize(data)
    console.log(text)
}

// /* OCR test 2: https://www.npmjs.com/package/node-tesseract-ocr */
// import tesseract from "node-tesseract-ocr"

// const config = {
//     lang: "eng",
//     oem: 1,
//     psm: 3,
// }

// tesseract
//     .recognize("OCR/OCR4.jpg", config)
//     .then((text) => {
//         console.log("Result:", text)
//     })
//     .catch((error) => {
//         console.log(error.message)
//     })

