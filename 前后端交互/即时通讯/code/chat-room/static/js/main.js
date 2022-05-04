var socket = io("http://localhost:8082");
const msgDiv = document.querySelector("#msg");
const sendBtn = document.querySelector("#sendBtn");
const chatMessages = document.querySelector(".chat-messages");
const rooDiv = document.querySelector("#room-name");

// parse querystring

const query = parseQueryString();

function parseQueryString() {
  //?username=cxr&room=JavaScript
  const { search } = location;
  return search
    .slice(1)
    .split("&")
    .reduce((result, str) => {
      const info = str.split("=");
      const key = info[0];
      const val = info[1];
      result[key] = val;
      return result;
    }, {});
}

// 登录的概念
socket.emit("joinChat", {
  username: query.username,
  room: query.room,
});

setRoom(query.room);

function setRoom(room) {
  rooDiv.innerText = room;
}

sendBtn.onclick = () => {
  // input 获取到
  const msg = msgDiv.value;
  socket.emit("chatMessage", msg);
  msgDiv.value = "";
  return false;
};

socket.on("message", (msg) => {
  console.log(msg);

  const div = document.createElement("div");

  div.classList.add("message");
  //   div.innerHTML = `<p>${msg}</p>`;
  div.innerHTML = `<p class="meta">${msg.username} ${msg.time}</p><p>${msg.content}</p>`;

  chatMessages.appendChild(div);
});
