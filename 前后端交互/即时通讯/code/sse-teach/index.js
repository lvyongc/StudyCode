// http

const http = require("http");
const fs = require("fs");
const moment = require("moment");

const server = http.createServer((req, res) => {
  if (req.url === "/sse") {
    // 写 server 端的逻辑

    res.writeHead(200, {
      "content-type": "text/event-stream",
    });

    // type: data
    // data
    // event
    // \n\n 结束一个消息
    res.write(`event: start\n`);
    // res.write(`event: start \n data: xxxxx\n\n`)
    res.write(`data: ${getDate()}\n\n`);
    // sse server -> client

    setInterval(() => {
      res.write(`data: ${getDate()}\n\n`);
    }, 1000);

    res.write(`data: ${getDate()}`);
    // 不能调用 res.end()
  } else {
    res.setHeader("content-type", "text/html");
    const readStream = fs.createReadStream(__dirname + "/static/index.html");
    readStream.pipe(res);
  }
});

function getDate() {
  // 2020-04-21 8:22:00
  return moment().format("YYYY-MM-DD HH:mm:ss");
}
server.listen(9004);
