const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://63fc8319a24d110008576cc4--falcon-chatapp.netlify.app",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("room", (data) => {
    socket.join(data);
  });

  socket.on("message", (data) => {
    socket.to(data.room).emit("messageReturn", data);
  });
});

const PORT = "https://63fc8319a24d110008576cc4--falcon-chatapp.netlify.app";

server.listen(PORT, () => {
  console.log("SERVER IS RUNNING");
});
