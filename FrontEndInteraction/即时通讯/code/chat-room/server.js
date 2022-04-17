const Koa = require("koa");
const serve = require("koa-static");
const http = require("http");
const app = new Koa();
const server = http.createServer(app.callback());
const io = require("socket.io")(server);
const { addUser, findUserById } = require("./user");
const moment = require("moment");

app.use(serve(__dirname + "/static"));

io.on("connection", (socket) => {
  console.log("hi");

  socket.on("joinChat", (msg) => {
    const { username, room } = msg;
    const id = socket.id;

    socket.join(room);

    // 先存一个用户
    addUser(id, username, room);

    // 给当前用户提示 - 欢迎来到聊天室
    socket.emit("message", createMessage("机器人", "欢迎来到聊天室"));

    socket.broadcast
      .to(room)
      .emit("message", createMessage("机器人", `欢迎 ${username} 来到聊天室`));
  });

  socket.on("chatMessage", (msg) => {
    console.log(msg);

    // 获取到用户名称
    const user = findUserById(socket.id);
    const { room, username } = user;

    socket.emit("message", createMessage(username, msg));

    socket.broadcast
      .to(room)
      .emit("message", createMessage(user.username, msg));
  });

  socket.on("disconnect", () => {
    // 通知当前房间的其他用户 某某某离开了
    // 当前离开的这个用户
    const user = findUserById(socket.id);

    if (user) {
      const { room, username } = user;
      socket.broadcast
        .to(room)
        .emit("message", createMessage("机器人", `${username} 离开了聊天室`));
    }
  });
});

function createMessage(username, content) {
  return {
    username,
    content,
    time: moment().format("LT"),
  };
}

server.listen(8082);
