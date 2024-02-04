import express from 'express';
import fileuploadMiddleWare from "express-fileupload";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import dotenv from "dotenv/config";
import Replicate from "replicate";
// import { send } from 'process';
const replicate = new Replicate();

// const express = require('express');
// const fileuploadMiddleWare = require("express-fileupload");
const portNumber = 4200;
const app = express();
app.get('/', requestHandler);
app.use('/banana.html', errorRoute); // needs to be before express.static to not be ignored
app.use(express.static(__dirname + '/public')); // make visible on client side, anything in public server is accessible
app.use('/veg', vegRoutes);
app.use('/fruit', fruitRoutes);
app.use('/banana', bananaRoute);
app.use('/passingTheVars', handleGetVars);
app.use(fileuploadMiddleWare()); // specify to express that using this MW module
app.use('/dataUpload', handlePostedData);

function requestHandler(request, response) {
    // send a default response to the client...
    response.send("HELLO WORLD");
    console.log(request); //built in
    console.log(response); //built  in
    console.log(request.url);
}

function bananaRoute(req, res, next) {
    res.sendFile(__dirname + '/public/banana.html');
}

//new error route:
function errorRoute(req, res, next) {
    const error = new Error('Not valid url'); // built-in object
    res.send(error.message);
}

function fruitRoutes(req, res, next) {
    // req is the Node.js http request object
    // res is the Node.js http response object
    // next is a function to call to invoke the next middleware
    console.log("IN FRUIT FUNCTION ");
    console.log(req.url);
    res.send("WE ARE HERE FRUIT ROUTE");
}

function vegRoutes(req, res, next) {
    // req is the Node.js http request object
    // res is the Node.js http response object
    // next is a function to call to invoke the next middleware
    console.log("IN VEG FUNCTION ");
    console.log(req);
    res.send("WE ARE HERE VEG ROUTE");
}

function handleGetVars(request, response, next) {
    console.log(request.url);
    console.log(request.query);
    response.send("GOT IT! THANKS!");
}

function handlePostedData(request, response) {
    // console.log("body:");
    // console.log(request.body); // PAIR
    // console.log("file:");
    // console.log(request.files); // NULL
    // response.send("GOT IT! THANKS!");
    // if (!request.files) {
    //     response.send("File was not found");
    //     return;
    // }
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

    // console.log(request.body);
    // console.log(request.body.canvasImage);
    sendToReplicate(request.body.canvasImage, request.body.canvasLabel).then((res) => {
        response.send(res);
    });
}

async function sendToReplicate(image, label) {
    // let imageBase = "data:image/gif;base64," + fs.readFileSync("assets/line.png", 'base64');
    const output = await replicate.run(
        "jagilley/controlnet-scribble:435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117",
        // "greeneryscenery/sheeps-control-v4:19632a95f72bc6d1112e9b70303aad7d3651cbcec5b8c3539ad9131227a75fd1",
        {
            input: {
                // image: "assets/line.png",
                // image: imageBase,
                image: image,
                // prompt: "a line"
                prompt: label
            }
        }
    );
    console.log(output);
    return output;

}

app.listen(portNumber, function () {
    console.log("Server is running on port " + portNumber);
});

