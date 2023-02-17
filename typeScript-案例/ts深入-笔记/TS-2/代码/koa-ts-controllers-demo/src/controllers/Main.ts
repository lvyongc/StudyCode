import {Controller, Get} from 'koa-ts-controllers'

Controller('/')
export class Main {

    // 把当前这个类的index方法绑定到路由 url / 中
    @Get('')
    public index() {

        return 'Hello';
    }

    // 把当前这个类的index方法绑定到路由 url /login 中
    @Get('/login')
    public login() {

        return '登陆';
    }

}