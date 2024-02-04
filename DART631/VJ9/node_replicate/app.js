import dotenv from "dotenv/config";
// console.log(process.env.REPLICATE_API_TOKEN)
import Replicate from "replicate";

// const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });
const replicate = new Replicate();
const model = "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478";
const input = {
    prompt: "bassoon",
};
const output = await replicate.run(model, { input });
console.log(output);



// import Replicate from "replicate";

// // import dotenv from "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();
// // const replicate = new Replicate({ auth: "845573b9daf9097f767d098a05bbcc5d0d94b0eb", });
// import { promises as fs } from "fs";

// import Headers from "node-fetch";

// const replicate = new Replicate({});
// const model = "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478";
// const input = {
//     prompt: "bassoon",
// };
// const output = await replicate.run(model, { input });
// // console.log(output);
// // ['https://replicate.delivery/pbxt/GtQb3Sgve42ZZyVnt8xjquFk9EX5LP0fF68NTIWlgBMUpguQA/out-0.png']


// const replicate = new Replicate();
// const prediction = await replicate
//     .model("stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf")
//     .predict({ prompt: "painting of a cat by andy warhol", });



// import Replicate from "replicate";

// import dotenv from "dotenv";
// import { promises as fs } from "fs";

// dotenv.config();

// const data = await fs.readFile("./deepfakeImage.jpg", "utf-8");
// const base64 = data.toString("base64");
// const mimeType = "image/jpg";
// const dataURI = `data:${mimeType};base64,${base64}`;


// async function getVideo(inputImage, inputAudio) {
//     const replicate = new Replicate({
//         auth: process.env.REPLICATE_API_TOKEN,
//     });
//     const output = await replicate.run(
//         "cjwbw/sadtalker:3aa3dac9353cc4d6bd62a8f95957bd844003b401ca4e4a9b33baa574c549d376",
//         {
//             input: {
//                 source_image: dataURI,
//                 driven_audio: inputAudio
//             }
//         }
//     );
//     console.log(output);
// }