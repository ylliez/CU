// import Max/MSP library
const Max = require('max-api');
// Max.post("Max/MSP API loaded");
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
const WebSocket = require("ws");
const wss = new WebSocket.Server({ server });

// const readline = require("readline")
// const rl = readline.createInterface({
//   input: process.stdin,
//   terminal: false
// })
// rl.on("line", async line => {
//   // This will be posted to the Max console
//   await console.log(line)
// })

// const fs = require('fs');
// const static = require('node-static');

// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");

// serve pages from public dir
app.use(express.static(__dirname + '/public'));
// app.use("/", defaultRoute);
app.use("/ws", wsRoute);
app.use("/client", clientRoute);
app.use("/attr", attributionRoute);
app.use("/delay", delayRoute);
app.use("/reverb", reverbRoute);

app.use("/passVal", handleVal)
app.use("/passClientInput", handleClientVal)
app.use("/passValNum", handleValNum)
app.use("/passValStr", handleValStr)
app.use("/passInputStr", handleInputStr)
app.use("/passInputNum", handleInputNum)

// function defaultRoute(req, res, next) { res.sendFile(__dirname + '/public/index.html'); }
function clientRoute(req, res, next) { res.sendFile(__dirname + '/public/client.html'); }
function wsRoute(req, res, next) { res.sendFile(__dirname + '/public/ws.html'); }

function attributionRoute(req, res, next) {
  let routes = [`client`, `client_delay`, `client_reverb`];
  let route = routes[Math.floor(Math.random() * routes.length)];
  res.sendFile(__dirname + `/public/${route}.html`);
}
function delayRoute(req, res, next) { res.sendFile(__dirname + '/public/client_delay.html'); }
function reverbRoute(req, res, next) { res.sendFile(__dirname + '/public/client_reverb.html'); }

function handleClientVal(req, res, next) {
  // res.send(req.query);
  // res.send(req.query.val);
  res.send(typeof req.query.val);
  if (typeof req.query.val == "number") {
    Max.outlet(req.query.id, parseFloat(req.query.val));
  }
  else {
    Max.outlet(req.query.id, req.query.val);
  }
}

function handleVal(req, res, next) {
  res.send(req.query);
  Max.outlet(req.query.id, parseFloat(req.query.val));
}

function handleValNum(req, res, next) {
  res.send(req.query);
  Max.outlet(req.query.cat, req.query.id, parseFloat(req.query.val));
}

function handleValStr(req, res, next) {
  res.send(req.query);
  Max.outlet(req.query.id, req.query.val);
}

function handleInputStr(req, res, next) {
  res.send(req.query);
  Max.outlet(req.query.cat, req.query.id, req.query.val);
}

function handleInputNum(req, res, next) {
  res.send(req.query);
  Max.outlet(req.query.cat, req.query.id, parseFloat(req.query.val));
}

server.listen(port, () => { console.log('listening on port: ' + port); })


// // IMPLEMENT THE BROADCAST FUNCTION TO ALL --> outside of wss
// wss.broadcast = function broadcast(data) {
//   //get all clients (note that the Socket server instance maintains a list of clients)
//   wss.clients.forEach(function each(client) {
//     //if client is there
//     if (client.readyState === WebSocket.OPEN) {
//       client.send(data);
//     }
//   });
// };

wss.on('connection', function connection(ws, req) {
  const in_ip = req.connection.remoteAddress;
  Max.post(`C2S: new client at ${in_ip}`);
  ws.send("Connected");

  ws.on('message', function incoming(message) {
    // Max.post(message);
    Max.outlet(message);
  });

  // ws.on("close", function stop() {
  //   Max.removeHandlers("send");
  //   console.log("Connection closed");

  //   ws.terminate();
  // });
});