// 后端
const Koa = require("koa");
const serve = require("koa-static");
const koaBody = require("koa-body");
const Router = require("koa-router");
const upload = require('./lib/upload');
const login = require('./lib/login');
const {initDB} = require('./lib/db');
const koaJwt = require('koa-jwt');
const {secret} = require('./lib/config')
initDB();
const app = new Koa();

app.use(
  koaBody({
    multipart: true,
  })
);
app.use(serve(__dirname + "/static"));
// 先处理静态服务
app.use(koaJwt({secret}).unless({path:[/^\/login/]}));
const router = new Router();

router.post("/upload",upload);
router.post("/login",login);

// router.post("/upload", (ctx) => {
//   console.log(ctx.request.files);
//   ctx.body = "上传成功";
// });

app.use(router.routes());
app.listen(8081);
