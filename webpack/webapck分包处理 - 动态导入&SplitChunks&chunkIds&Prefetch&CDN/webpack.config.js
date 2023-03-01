// path webpack 内置
const path =  require('path')
// 打包 html 
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 导出 
module.exports = {
    mode:'development',
    // devtool:'source-map',
    // 单入口 
    entry:"./src/index.js",

    // 多入口 
    // entry:{
    //     // 入口名字：路径 （key:value）；
    //     // index:'./src/index.js',
        // hah:'./src/hah.js',

    //     // 共享 第三方库 ，只打包一次 第三方库
    //     index:{
    //         import:'./src/index.js',
    //         dependOn:'shared'
    //     },
    //     hah:{
    //         import:'./src/hah.js',
    //         dependOn:'shared'
    //         // dependOn:'shared2'
    //     },
    //     // 共享 的库
    //     shared:['axios']
    //     // shared2:['fetch']
    // },
    // 出口 
    output:{
        path:path.resolve(__dirname,'./build'),
        // 单 出口 
        // filename:'build.js',
        // 多出口 ；[name] 是 入口的 key
        filename:'[name]-builde.js',
        // 单独 对分包的文件，进行命名
        chunkFilename:'[name]_chunk.js',
        // 打包时删除上次的打包结果
        clean:true,
        // 使用 CDN 服务器，把 所有webpack打的包，放入 CDN 服务器
        // publicPath:'http://fllcdn.com/'
    },
    // 排除对 第三方库 的打包 
    externals:{
        // key:value ;key 是 库的名字；value是 从 CDN 地址请求下来的 js中提供的对应的名称（全局变量）
        axios:'axios',
        // react:'React'
    },
    // 本地服务器的配置
    devServer:{
        // 默认 ,如果遇到静态文件，去public文件夹下寻找
        static:['public'],
        // 主机地址，同一网段 下，都可以通过 ip 地址访问
        host:'0.0.0.0',
        // 端口号 
        port:9999,
        // 编译后是否自动打开浏览器
        open:true,
        // 是否为 静态文件 开启 gzip 压缩,浏览器下载 压缩文件，减少下载时间，下载后浏览器自动解压
        compress:true,
        // node 本地服务器代理，解决 跨域，跨域 是 浏览器的限制， 使用 node 本地服务器代理后，变为 node 本地服务器 和 后端服务器 进行 数据交互，服务器之间，没有 跨域
        proxy:{
            // 把 api 代理 到 http://localhost:9999 地址，把 /api 变成 http://localhost:9999
            '/api':{
                target:"http://localhost:9999",
                // 路径中，以 api 开头的 替换 为 空
                pathRewrite:{
                    '^/api':''
                },
                // 本地是 localhost:8080 ,代理是 http://localhost:9999，代理去请求 后端服务器，changeOrigin 是false，后端服务器 拿到的，请求地址依然是 8080，但希望是 9999(服务器校验)，这时 9999 请求不到数据
                // 后端服务器 拿到 请求地址（header.host），属于 后端服务器校验,判断请求地址 是不是 9999
                // changeOrigin:true ，代理 会把请求地址改为 9999，这样后端服务器 中的请求地址就是 9999，可以请求数据
                changeOrigin:true
            }
        },
        historyApiFallback:true
    },
    module:{
        rules:[
            // js文件 使用 babel-loader 转换
            // 先 使用 babel 转换，再使用 webpack 打包
            {
                test:/\.js$/,
                // ndoe_modules 下的，不转换,但是有些第三方库会使用到 polyfill，所以不在这里设置，在 babel 设置
                // exclude:'/ndoe_modules/',
                use:{
                    // babel-loader
                    loader:'babel-loader',
                    // babel-loader 配置 ;放到 babel 配置文件在
                    // options:{
                    //     // 使用 具体的插件，转换具体的内容
                    //     // plugins:[

                    //     // ],
                    //     // 使用预设，转换 预设默认的大部分 内容
                    //     presets:[
                    //         // 不配置
                    //         // "@babel/preset-env"

                    //         ["@babel/preset-env",{
                    //             // 额外 配置
                    //             // 适配的浏览器,这个字段会 覆盖 .browserslistrc文件，不推荐 这样使用
                    //             targets:">5%"
                    //         }]
                    //     ]
                    // }
                    
                }
            },
            // {
            //     test:/\.ts$/,
            //     // use:'ts-loader'
            //     use:'babel-loader'
            // }
        ]
    },
    plugins:[
        // 每次打包之前，删除之前的打包文件
        // new ClearWebpackPlugin()
        // 打包 html 
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ],
    // 线上优化配置 
    optimization:{
        // 打包后的文件命名
        // 默认 开发环境是 named；线上 默认是 deterministic 

        // deterministic 是确定性的，当 打包的原文件修改后，只重新打包 修改过的文件，没有修改的文件，不会重新打包；更新线上代码时，浏览器也只会下载，重新打包后的包，因为没有重新打包的，文件名没有变化，会先去缓存中查找这个文件，如果有且一致，就不会重新下载，否则就会重新下载

        // natural 是 webpack4中的值，这个只要修改了源文件，就会重新打包所有文件

        chunkIds:'named',

        splitChunks:{
            //  默认值是，async ，只对 异步的（import函数方法导入的） 进行分包
            // all 对 所有 使用 import 导入的 进行分包

            // import 函数 方法导入的： import(/* webpackChunkName:'home' */'./router/home')
            // import 直接 导入的： import axios from 'axios'，把所有 import 直接 导入的（第三方库），打包到一个包中

            chunks:"all",

            // 当一个包大于指定的大小时，继续进行 拆包;如果 不能拆的，就不会拆，比如一个函数 大小30kb
            // 20kb
            maxSize:20000,
            // 拆出来的包不能小于 minSize
            minSize:10,

            // 自己对需要进行分包的内容进行分组
            // 把 node_modules 下的分一个包 
            // 再把 utils 下的分一个包 
            cacheGroups:{
                // key:value; key是组名
                vendors:{
                    // 把 node_modules 下的,全部分到这个包中
                    test: /[\\/]node_modules[\\/]/,
                    filename:"[name]_vendors.js"
                },
                utils:{
                    // 把 utils 下的,全部分到这个包中
                    test: /utils/,
                    filename:'[name]utils.js'
                },
            }
        }
    }
}