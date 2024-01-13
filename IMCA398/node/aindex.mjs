import express from "express";
import http from "http";
import { Server as SocketIO } from "socket.io";

import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const portNumber = 4200;
const server = http.createServer(app);
const io = new SocketIO(server);

app.use(express.static(`${__dirname}/public`));

io.on("connection", (socket) => {
    console.log("CONNECTED...");
    socket.on("buttonPress", () => {
        console.log("PRESSED!");
        io.emit("S2C", "RECEIVED!");
    });
    socket.on("disconnect", () => { console.log("DISCONNECTED..."); });
});

server.listen(portNumber, () => { console.log(`Server running on http://localhost:${portNumber}`); });