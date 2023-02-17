import {bootstrapControllers} from 'koa-ts-controllers';
import Koa from 'koa';
import Router from 'koa-router';
 
const app = new Koa();
const router = new Router();

(async function() {
    await bootstrapControllers(app, {
        router, // required
        basePath: '/api',
        controllers: [__dirname + '/controllers/**/*.ts'],
        versions: [1]
    });
     
    app.use(router.routes());
    app.use(router.allowedMethods());

    app.listen(8080);
})()