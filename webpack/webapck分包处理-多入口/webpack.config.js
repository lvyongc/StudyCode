// path webpack 内置
const path =  require('path')
// 打包 html 
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 导出 
module.exports = {
    mode:'development',
    devtool:'source-map',
    // 单入口 
    // entry:"./src/index.js",

    // 多入口 
    entry:{
        // 入口名字：路径 （key:value）；
        // index:'./src/index.js',
        // hah:'./src/hah.js',

        // 共享 第三方库 ，只打包一次 第三方库
        index:{
            import:'./src/index.js',
            dependOn:'shared'
        },
        hah:{
            import:'./src/hah.js',
            dependOn:'shared'
            // dependOn:'shared2'
        },
        // 共享 的库
        shared:['axios']
        // shared2:['fetch']
    },
    // 出口 
    output:{
        path:path.resolve(__dirname,'./build'),
        // 单 出口 
        // filename:'build.js',
        // 多出口 ；[name] 是 入口的 key
        filename:'[name]-builde.js',

        clean:true
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
    ]
}