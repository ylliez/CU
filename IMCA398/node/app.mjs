// // import Express module & make instance
// import express from 'express';
// const app = express();
// // import HTTP module, set port number & create server
// import http from 'http'
// const port = 4200;
// // // heroku
// // const port = process.env.PORT;
// let server = http.createServer(app);
// server.listen(port, () => { console.log('server listening on port ' + port); })

// // serve pages from public dir
// app.use(express.static('/public'));
// // app.use(express.static(__dirname + '/public'));
// // app.use('/generate', generate);
// // // heroku : serve pages node-modules directories
// // app.use(express.static(__dirname + '/node_modules'));

import * as dotenv from 'dotenv'
dotenv.config()
import Replicate from 'replicate-js'
import open from 'open'
const replicate = new Replicate();

const modelT2I = await replicate.models.get('stability-ai/stable-diffusion')
console.log("------- T2I -------");
const predictionT2I = await modelT2I.predict({ prompt: "sad gerbil" });
console.log(predictionT2I[0])
const openT2I = await open(predictionT2I[0])
const modelI2T = await replicate.models.get("methexis-inc/img2prompt");
console.log("------- I2T -------");
const predictionI2T = await modelI2T.predict({ image: predictionT2I[0] });
console.log(predictionI2T);

