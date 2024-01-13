import dotenv from 'dotenv/config'
import replicate from 'replicate'
import fetch from 'node-fetch'
import fs from 'fs'

const modelT2S = await replicate.model("afiaka87/tortoise-tts:e9658de4b325863c4fcdc12d94bb7c9b54cbfe351b7ca1b36860008172b91c71")
let outputT2S;

const inputs = {
    'text': "This is the text you need to whisper into the microphone",
    'voice_a': "random",
}

outputT2S = await modelT2S.predict(inputs)
console.log(outputT2S.output)
await saveAudioFile(outputT2S.output, 'T2S2T/T2S2T_test.mp3')

async function saveAudioFile(url, filepath) {
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFile(filepath, buffer, function (err, res) {
        // resolve(console.log(filepath));
        // if (err) reject(err);
        // resolve(printAudioFilePath(filepath));
        // if (err) reject(err);
        console.log(filepath)
    });
    // const write = await writeImage(fileName, buffer);
    // fs.writeFile(fileName + `.mp3`, buffer, function (err, res) {
    //     resolve(convertImage(fileName));
    //     if (err) reject(err);
    // });
}

// /* T2S (tortoise-tts) - test 2 --> OK (to file) */
// import dotenv from 'dotenv/config'
// import replicate from 'replicate'
// import fetch from 'node-fetch'
// import fs from 'fs'

// const modelT2S = await replicate.model("afiaka87/tortoise-tts:e9658de4b325863c4fcdc12d94bb7c9b54cbfe351b7ca1b36860008172b91c71")
// let outputT2S;

// const inputs = {
//     'text': "This is the text you need to whisper into the microphone",
//     'voice_a': "random",
// }

// outputT2S = await modelT2S.predict(inputs)
// console.log(outputT2S.output)
// await saveAudioFile(outputT2S.output, 'T2S2T/T2S2T_test.mp3')

// async function saveAudioFile(url, filepath) {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const arrayBuffer = await blob.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     fs.writeFile(filepath, buffer, function (err, res) {
//         // resolve(console.log(filepath));
//         // if (err) reject(err);
//         // resolve(printAudioFilePath(filepath));
//         // if (err) reject(err);
//         console.log(filepath)
//     });
//     // const write = await writeImage(fileName, buffer);
//     // fs.writeFile(fileName + `.mp3`, buffer, function (err, res) {
//     //     resolve(convertImage(fileName));
//     //     if (err) reject(err);
//     // });
// }

// function printAudioFilePath(filepath) {
//     console.log(filepath)
// }

// /* T2S (tortoise-tts) - test 2 --> OK (to URL) */
// import dotenv from 'dotenv/config'
// import replicate from 'replicate'

// const modelT2S = await replicate.model("afiaka87/tortoise-tts:e9658de4b325863c4fcdc12d94bb7c9b54cbfe351b7ca1b36860008172b91c71")
// let outputT2S;

// const inputs = {
//     'text': "This is the text you need to whipser into the microphone",
//     // 'voice_a': "random",
// }

// outputT2S = await modelT2S.predict(inputs)
// console.log(outputT2S.output)

// /* T2S (tortoise-tts) - test 1 */
// import dotenv from 'dotenv/config'
// import replicate from 'replicate'
// import open from 'open'
// import fs from 'fs'

// const modelT2S = await replicate.model("afiaka87/tortoise-tts:e9658de4b325863c4fcdc12d94bb7c9b54cbfe351b7ca1b36860008172b91c71")
// let output;

// const inputs = {
//     'text': "Oh hi there! How are you?",
//     'voice_a': "random",
//     'voice_b': "disabled",
//     'voice_c': "disabled",
//     'preset': "fast",
//     'seed': 0,
//     'cvvp_amount': 0,
// }

// output = await modelT2S.predict(inputs)
// console.log(output)

// /* T2S (tortoise-tts) - Replicate API */
// import replicate

// model = replicate.models.get("afiaka87/tortoise-tts")
// version = model.versions.get("e9658de4b325863c4fcdc12d94bb7c9b54cbfe351b7ca1b36860008172b91c71")

// # https://replicate.com/afiaka87/tortoise-tts/versions/e9658de4b325863c4fcdc12d94bb7c9b54cbfe351b7ca1b36860008172b91c71#input
// inputs = {
//     # Text to speak.
//     'text': "The expressiveness of autoregressive transformers is literally nuts! I absolutely adore them.",

//     # Selects the voice to use for generation. Use `random` to select a
//     # random voice. Use `custom_voice` to use a custom voice.
//     'voice_a': "random",

//     # (Optional) Create a custom voice based on an mp3 file of a speaker.
//     # Audio should be at least 15 seconds, only contain one speaker, and
//     # be in mp3 format. Overrides the `voice_a` input.
//     # 'custom_voice': open("path/to/file", "rb"),

//     # (Optional) Create new voice from averaging the latents for
//     # `voice_a`, `voice_b` and `voice_c`. Use `disabled` to disable voice
//     # mixing.
//     'voice_b': "disabled",

//     # (Optional) Create new voice from averaging the latents for
//     # `voice_a`, `voice_b` and `voice_c`. Use `disabled` to disable voice
//     # mixing.
//     'voice_c': "disabled",

//     # Which voice preset to use. See the documentation for more
//     # information.
//     'preset': "fast",

//     # Random seed which can be used to reproduce results.
//     'seed': 0,

//     # How much the CVVP model should influence the output. Increasing this
//     # can in some cases reduce the likelyhood of multiple speakers.
//     # Defaults to 0 (disabled)
//     # Range: 0 to 1
//     'cvvp_amount': 0,
// }

// # https://replicate.com/afiaka87/tortoise-tts/versions/e9658de4b325863c4fcdc12d94bb7c9b54cbfe351b7ca1b36860008172b91c71#output-schema
// output = version.predict(**inputs)
// print(output)