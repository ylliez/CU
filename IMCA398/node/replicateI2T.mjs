import dotenv from 'dotenv/config'
import replicate from "replicate";

const modelI2T = await replicate
    .model("methexis-inc/img2prompt:50adaf2d3ad20a6f911a8a9e3ccf777b263b8596fbd2c8fc26e8888f8a0edbb5")
    // .predict({ image: "https://replicate.delivery/pbxt/UxGRPHjpxqagN9dFq3e5vgeQvoH9hApaeHMmNIDNVJJwNZchA/out-0.png", });
    // .predict({ image: "testprintpng.png", }); // NO: 422 error unprocessable content
    // .predict({ image: "webcam_test.jpg", }); // NO: 422 error unprocessable content
    // .predict({ image: "/Users/mac/Documents/GitHub/CU/IMCA398/node/HotW_test/1680544994831_1-1.png", }); // NO: 422 error unprocessable content
    // .predict({ image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg", }); // NO: 422 error unprocessable content