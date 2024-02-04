
import express from 'express';
const portNumber = 4200;
const app = express();

import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', defaultRoute);
app.use(express.static(__dirname + '/public'));
app.use('/eye', eyeRoute);
app.use('/passingTheVars', handleGetVars);
app.use('/dataUpload', handlePostedData);

function defaultRoute(request, response) { response.send("APPEND /EYE TO URL"); }

function eyeRoute(req, res, next) { res.sendFile(__dirname + '/public/eye.html'); }

function handleGetVars(request, response, next) {
    console.log(request.url);
    console.log(request.query);
    response.send("GOT IT! THANKS!");
}

function handlePostedData(request, response) {
    console.log(request.body); //body of packet
    console.log(request.files); //request
    response.send("GOT IT! THANKS!");
    if (!request.files) {
        response.send("File was not found");
        return;
    }
    // using the name attributes of the form fields ...
    console.log("the color chosen:: " + request.body.color);
    console.log("the favorite city chosen:: " + request.body.city);

    // here is the field name of the form
    let temp_file = request.files.imageF;

    let imagePath = __dirname + '/public/images/' + request.files.imageF.name;
    // Use the mv() method to place the file somewhere on your server
    temp_file.mv(imagePath, function (err) {
        if (err)
            return response.status(500).send(err);
        response.send('File uploaded!');
    });
}

app.listen(portNumber, function () { console.log("Server is running on port " + portNumber); });

