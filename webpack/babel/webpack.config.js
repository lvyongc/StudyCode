// path webpack 内置
const path =  require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 导出 
module.exports = {
    // production 生产环境、线上环境，devtool 无bug设置 none，有bug设置为 source-map
    // development 开发环境、本地环境，devtool默认是 eval，一般设置为 eval
    mode:'development',
    // 常见 source-map、eval、
    // 不常见:
    //  eval-source-map 添加到eval函数后面、
    //  inline-source-map 添加到 文件后面、
    //  cheap-source-map（用于dev环境） 低开销、高效率、
    //  cheap-module-source-map 、类似cheap-source-map，但对 来自loader的 source-map处理的更好
    //  hidden-source-map （用于production）、会生成source-map文件，但不会引用，需要自己添加引用
    //  nosources-source-map，有错误提示，但看不到源码
    // 不同的值，会影响 打包构建 速度
    devtool:'source-map',
    // 入口 
    entry:"./src/index.js",
    // 出口,打包到当前路径下的 bunld文件夹
    output:{
        // __dirname 当前路径
        path:path.resolve(__dirname,'./build'),
        // 打包后的文件名字 
        filename:'build.js',
        // 每次打包之前，删除之前的打包文件
        clean:true
    },
    resolve:{
        // 配置后， 文件后缀名 可以不写
        extensions:['.js','.json','.vue','.ts']
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
            {
                test:/\.ts$/,
                // use:'ts-loader'
                use:'babel-loader'
            }
        ]
    },
    plugins:[
        // 每次打包之前，删除之前的打包文件
        // new ClearWebpackPlugin()
        new HtmlWebpackPlugin({
            // template:'index.html'
        })
    ]
}