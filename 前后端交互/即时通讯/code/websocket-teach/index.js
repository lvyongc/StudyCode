// ws
const WebSocket = require("ws");
const moment = require("moment");

const wss = new WebSocket.Server({ port: 8080 });

let isOpen = false;
wss.on("connection", (ws) => {
  console.log("客户端连接啦");

  ws.on("message", (e) => {
    if (e === "open") {
      isOpen = true;
    }
    if (e === "stop") {
      console.log("stop");
      isOpen = false;
    }
  });

  setInterval(() => {
    if (isOpen) {
      ws.send(getDate());
    }
  }, 1000);
});

function getDate() {
  // 2020-04-21 8:22:00
  return moment().format("YYYY-MM-DD HH:mm:ss");
}
