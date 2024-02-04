import dotenv from "dotenv/config";
import Replicate from "replicate";
const replicate = new Replicate();

import express from 'express';
const port = 3000;
const app = express();

import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import fileuploadMiddleWare from "express-fileupload";

// app.use(express.static('/public'));
// app.get('/', defaultRoute);
// app.get('/eye', eyeRoute);

app.use(express.static(__dirname + '/public'));
// app.use(express.static('/public'));
app.get('/', defaultRoute);
app.get('/eye', eyeRoute);
app.use(fileuploadMiddleWare());
app.use('/dataPost', handlePostedData);

function defaultRoute(req, res) { res.send("APPEND /EYE TO URL"); }

function eyeRoute(req, res) { res.sendFile(__dirname + '/public/eye.html'); }

function handlePostedData(request, response) {
    if (!request.files) {
        response.send("not received");
        return;
    }
    response.send("received");
    console.log(request.body);
    console.log(request.files);
    // // using the name attributes of the form fields ...
    // console.log("the color chosen:: " + request.body.color);
    // console.log("the favorite city chosen:: " + request.body.city);

    // // here is the field name of the form
    // let temp_file = request.files.imageF;

    // let imagePath = __dirname + '/public/images/' + request.files.imageF.name;
    // // Use the mv() method to place the file somewhere on your server
    // temp_file.mv(imagePath, function (err) {
    //     if (err)
    //         return response.status(500).send(err);
    //     response.send('File uploaded!');
    // });
}

app.listen(port, () => { console.log('Server is running on port ' + port); });

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
function getCanvasBlob() {
    canvas.toBlob((blob) => {
        let url = URL.createObjectURL(blob);
        // console.log(url);
        image.src = url;
        sendToReplicate(blob);
    });
}

async function sendToReplicate(blob) {
    // let imageBase = "data:image/gif;base64," + fs.readFileSync("assets/line.png", 'base64');
    const output = await replicate.run(
        "jagilley/controlnet-scribble:435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117",
        {
            input: {
                // image: "assets/line.png",
                image: imageBase,
                prompt: "a line"
            }
        }
    );
    console.log(output);
}
