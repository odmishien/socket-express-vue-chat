var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);

let rooms = ["room1", "room2"];

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

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
