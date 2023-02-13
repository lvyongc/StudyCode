const Koa = require("koa");
const serve = require("koa-static");
const Router = require("koa-router");
const moment = require("moment");

const app = new Koa();
app.use(serve(__dirname + "/static"));
const router = new Router();

router.get("/polling", (ctx) => {
  // 显示一下当前的时间
  ctx.body = getDate();
});

function getDate() {
  // 2020-04-21 8:22:00
  return moment().format("YYYY-MM-DD HH:mm:ss");
}

app.use(router.routes());
app.listen(9004);
