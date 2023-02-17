const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();

const router = new KoaRouter();

router.get('/users', ctx => {
    ctx.body = [
        {id: 1, username: 'mt'},
        {id: 2, username: 'haizi'}
    ]
});

app.use(router.routes());

app.listen(7777);