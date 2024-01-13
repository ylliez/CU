// exec('afplay T2S2T/T2S2T_test2.mp3', audioEndCallback)
// exec('play T2S2T/T2S2T_test2.mp3', audioEndCallback)

// import sound from "sound-play";
// sound.play("T2S2T/T2S2T_test2.mp3");

import sound from "sound-play";
import fetch from 'node-fetch';
import fs from 'fs';
// sound.play("T2S2T/T2S2T_test2.mp3");
// sound.play("HotW_test/1681183415370/1_3.mp3").then(console.log("done!"));
// sound.play("buzzer.mp3");
// sound.play("buzzer.mp3", 0.1);
// sound.play("buzzer.mp3", 0.5);
// sound.play("buzzer.mp3", 1.0);
// sound.play("HotW_test/1681692688738/1_3.mp3", 0.01);
// sound.play("assets/iphone_record_startstop.mp3", 1.0)
sound.play("HotW_test/1681760310836/1-9.mp3", 0.01);

// async function getAudio(url, filepath) {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const arrayBuffer = await blob.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     // fs.writeFile(filepath + `.mp3`, buffer, function (err, res) {
//     //     console.log(filepath)
//     // });
//     const write = await writeAudio(filepath, buffer);
// }

// function writeAudio(filepath, buffer) {
//     return new Promise((resolve, reject) => {
//         console.log(`WRITING...`)
//         fs.writeFile(filepath, buffer, function (err, res) {
//             resolve(playAudio(filepath));
//             if (err) reject(err);
//         });
//     })
// }

// function playAudio(filepath) {
//     console.log(`PLAYING...`)
//     sound.play(filepath);
// }


// await getAudio("https://replicate.delivery/pbxt/0i30wKx0kO7WDZAjBdlyjFE6QfB1ofSFcfx7RfVTDbH4p8nCB/tortoise.mp3", "audio/audio_test.mp3");