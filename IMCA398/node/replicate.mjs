/* REPLICATE API TESTS */

/* REPLICATE-API */
// import 'replicate-api'
// async function generate(req, res) {
//     const prediction = await predict({
//         model: "stability-ai/stable-diffusion",
//         input: { prompt: "an angry hamster eating brie in an impressionist style" },
//         token: "e94bb74480bd1cec6759ea2d2f784bb84795149b",
//         poll: true,
//     })
//     console.log(prediction.outputs[0])
// }
// await generate()

/* REPLICATE-JS */
// import Replicate from 'replicate-js'
// import open from 'open'
// // const replicate = new Replicate({ token: '845573b9daf9097f767d098a05bbcc5d0d94b0eb' });
// const replicate = new Replicate({ token: 'b590de6e35d35db67acdeee0633d98708e705124' });
// // If you set the REPLICATE_API_TOKEN environment variable, you do not need to provide a token to the constructor.
// // const replicate = new Replicate();

// // // Replicate Hello World test
// // const helloWorldModel = await replicate.models.get('replicate/hello-world');
// // const helloWorldPrediction = await helloWorldModel.predict({ text: "you" });
// // console.log(helloWorldPrediction);

// // // Replicate Dall-E test
// // const dalleMiniModel = await replicate.models.get('kuprel/min-dalle')
// // const dalleMiniImage = await dalleMiniModel.predict({ text: "sad gerbil", grid_size: 1 });
// // // const upscaledImage = await swinModel.predict({ image: dalleMiniImage.pop() })
// // // console.log(upscaledImage);
// // console.log(dalleMiniImage);

// // // Replicate Stable Diffusion test
// // const modelT2I = await replicate.models.get('stability-ai/stable-diffusion')
// // console.log("------- T2I -------");
// // const predictionT2I = await modelT2I.predict({ prompt: "sad gerbil" });
// // console.log(predictionT2I[0])
// // const openT2I = await open(predictionT2I[0])

// // // Replicate Img2Prompt test
// // const modelI2T = await replicate.models.get("methexis-inc/img2prompt");
// // console.log("------- I2T -------");
// // const predictionI2T = await modelI2T.predict({ image: predictionT2I[0] });
// // console.log(predictionI2T);

// // Replicate T2I2T test
// const modelT2I = await replicate.models.get('stability-ai/stable-diffusion')
// console.log("------- T2I -------");
// const predictionT2I = await modelT2I.predict({ prompt: "sad gerbil" });
// console.log(predictionT2I[0])
// const openT2I = await open(predictionT2I[0])
// const modelI2T = await replicate.models.get("methexis-inc/img2prompt");
// console.log("------- I2T -------");
// const predictionI2T = await modelI2T.predict({ image: predictionT2I[0] });
// console.log(predictionI2T);

// // Replicate I2T2I test (.env config)
// import * as dotenv from 'dotenv'
// dotenv.config()
// import Replicate from 'replicate-js'
// import open from 'open'
// const replicate = new Replicate(); // token in .env

// const modelT2I = await replicate.models.get('stability-ai/stable-diffusion')
// console.log("------- T2I -------");
// const predictionT2I = await modelT2I.predict({ prompt: "sad gerbil" });
// console.log(predictionT2I[0])
// const openT2I = await open(predictionT2I[0])
// const modelI2T = await replicate.models.get("methexis-inc/img2prompt");
// console.log("------- I2T -------");
// const predictionI2T = await modelI2T.predict({ image: predictionT2I[0] });
// console.log(predictionI2T);

/* REPLICATE */
// missing API issue --> config
// // import * as dotenv from 'dotenv'
// console.log(process.env.REPLICATE_API_TOKEN)

// const test = require('dotenv').config()

// import dotenv from 'dotenv'
// let test = dotenv.config()
// console.log(test)

// import dotenv from 'dotenv'
// dotenv.config()
// console.log(process.env.REPLICATE_API_TOKEN)
// // OK!

import dotenv from 'dotenv/config'
// dotenv.config()
console.log(process.env.REPLICATE_API_TOKEN)

import replicate from "replicate";

const prediction = await replicate
    .model(
        "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf"
    )
    .predict({
        // prompt: "painting of a cat by andy warhol",
        prompt: "munchkins flabooding schmurtzles",
    });