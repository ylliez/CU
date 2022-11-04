// import Max/MSP library
const Max = require('max-api');
Max.post("Max/MSP API loaded");
// import Express library & make instance
const express = require("express");
let app = express();
// import HTTP library & create server
const http = require('http')
let server = http.createServer(app);
// set server port number
const port = 4200;

// const path = require("path");

// import WebSocket library & make instance
// const WebSocket = require("ws");
// const wss = new WebSocket.Server({ server });

// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");

// serve pages from public dir
app.use(express.static(__dirname + '/public'));
app.use("/client", clientRoute);
app.use("/passFrequency", handleFrequency)

function clientRoute(req, res, next) {
  res.sendFile(__dirname + '/public/client.html');
}

function handleFrequency(req, res, next) {
  res.send(req.query);
  Max.outlet(req.query.id, parseInt(req.query.val));
}

server.listen(port, () => { console.log('listening on port: ' + port); })

