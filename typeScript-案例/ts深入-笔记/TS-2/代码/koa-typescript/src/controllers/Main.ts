import {Get} from '../libs/KaiKeBa'
// 通过类的方式组织路由
export default class Main {

    @Get('/')
    public index() {
        console.log('index');

        // ctx.body = 'index';
        return '这是首页';
    }

    @Get('/login')
    public login() {
        console.log('login');

        // ctx.body = 'login';
        return '这是登陆页面！！！！';
    }

}