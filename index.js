const express = require("express");

let rooms = ["room1", "room2"];

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/error", (req, res, next) => {
  try {
    throw new Error("BROKEN");
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error("custom error handler!");
  res.status(500).send("Something broke!");
});

var server = require("http").Server(app);
var io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    let message = JSON.parse(msg);
    socket.join(message.room);
    io.to(message.room).emit("chat message", message.content);
  });
  socket.once("join room", () => {
    let room = rooms[Math.floor(Math.random() * 2)];
    io.to(socket.id).emit("room notification", room);
  });
});

server.listen(3000, () => {
  console.log("listening on :3000");
});
