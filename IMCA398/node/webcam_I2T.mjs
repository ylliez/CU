import dotenv from 'dotenv/config'
import replicate from "replicate";
import NodeWebcam from "node-webcam";

const modelI2T = await replicate.model("methexis-inc/img2prompt:50adaf2d3ad20a6f911a8a9e3ccf777b263b8596fbd2c8fc26e8888f8a0edbb5")

NodeWebcam.capture("webcam_testI2T", { device: 'HD USB Camera', callbackReturn: "base64" }, function (err, data) {
    // console.log(data)
    modelI2T.predict({ image: data })
});
