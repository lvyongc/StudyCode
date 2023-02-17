import Koa from 'koa';
import KoaRouter from 'koa-router';


import glob from 'glob';

interface KaiKeBaOptions {
    host: string;  // 主机名
    port: number;  // 端口号
    controllersDir: string;  // 存放目录
}

// interface KaiKeBaParamsOptions {
//     host?: string;
//     port?: number;
//     controllersDir: string;
// }

// 从 KaiKeBaOptions 挑选出来一些选项重新设置成另外的类型，返回一个新的类型

// interface Todo {
//     title: string;
//     description: string;
// }

type optionalKeys = 'host' | 'port';

// https://www.typescriptlang.org/docs/handbook/utility-types.html
// Partial 把<>里面的变成可选的
// Pick <> 第一个是原来的，第二个是可选的
// Omit<> 是和Pick相反的，只有controllersDir ，可选剩余的
// 生成一个新的，新的是可选的+原来除了可选外剩余的
type KaiKeBaParamsOptions = Partial< Pick<KaiKeBaOptions, optionalKeys> > & Omit<KaiKeBaOptions, optionalKeys>;

const defaultOptions = {
    host: '127.0.0.1',
    port: 8080
}

class KaiKeBa {

    // 类的配置选项
    private options: KaiKeBaOptions;
    // Koa 的 server 实例
    private app: Koa;
    // koa-router 实例
    private router: KoaRouter;

    constructor(
         options: KaiKeBaParamsOptions
    ) {

        // 把传入的options融入（覆盖）到默认的options中
        this.options = Object.assign(defaultOptions, options);

        // 通过 koa 创建一个 server
        this.app = new Koa();

        // 构建路由对象
        this.router = new KoaRouter();

        // 加载路由信息
        this.loadRouters();
    }

    loadRouters() {
        // 1、加载控制器文件，里面是类
        let files = glob.sync(this.options.controllersDir);
        // console.log('files', files);

        files.forEach(file => {
            // 2、实例化控制器文件中导出的类  
            let Controller = require(file).default; // 默认导出的
            console.log(Controller);

            // 3、实例化类，
            let controller = new Controller();


            // 4、绑定类的方法到指定的路由上
            // this.router.get('/', controller.index);
            // console.log('__routes', controller.__routes);

            if (Array.isArray(controller.__routes)) {

                // 把收集上来的路由信息，进行遍历-绑定
                controller.__routes.forEach( __route => {
                    this.router[__route.verb](__route.path, async (ctx, next) => {

                        let body = await controller[__route.name]();

                        ctx.body = body;
                    });
                } );

            }
            

        });

        this.app.use( this.router.routes() );
        
    }

    start() {
        this.app.listen(this.options.port, this.options.host, () => {
            console.log(`服务启动成功：http://${this.options.host}:${this.options.port}`);
        })
    }

}



export function Get(path: string) {
    return function(target: any, name: string) {
        // target 实例化对象
        // console.log('我要开始收集路由信息了')
        // __routes 添加这个属性
        // 如果 __routes 不存在，进行初始化:[]
        target.__routes = Array.isArray(target.__routes) ? target.__routes : [];

        // 把当前路由信息添加到数组中
        target.__routes.push({
            // get 行为，区分get、post等
            verb: 'get',
            path,
            name
        });

    }
}



export default KaiKeBa;