// path webpack 内置
const path =  require('path')
// 打包 html 
const HtmlWebpackPlugin = require('html-webpack-plugin')
// ProvidePlugin 插件，设置第三方库的全局变量
const {ProvidePlugin} = require('webpack')
// 提取 css文件，打包 css，插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 合并 webpack配置信息--插件
 const {merge} = require('webpack-merge')
// 导入 配置文件
const devConfig = require('./dev.config')
const prodConfig = require('./prod.config')

// 分析打包时间
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()

// 抽取 开发、生产，配置文件
// 1-导出一个函数
// 2-从上到下查看所有配置 属于 公共、开发、生产，中的哪个
// 3-对 单独的配置文件，单独配置

// 定义配置信息
const getCommonConfig = function(isProd){
    return {
        // 单入口 
        entry:"./src/index.js",
        // 出口 
        output:{
            path:path.resolve(__dirname,'../build'),
            // 多出口 ；[name] 是 入口的 key
            filename:'js/[name]-builde.js',
            // 单独 对分包的文件，进行命名
            chunkFilename:'js/[name]_chunk111.js',
            // 打包时删除上次的打包结果
            clean:true,
            // 使用 CDN 服务器，把 所有webpack打的包，放入 CDN 服务器
            // publicPath:'http://fllcdn.com/'
        },
        // 引入时，文件后缀名 不用写
        resolve:{
            extensions:['.js','.ts','.vue']
        },
        module:{
            rules:[
                // js文件 使用 babel-loader 转换
                // 先 使用 babel 转换，再使用 webpack 打包
                {
                    test:/\.js$/,
                    // ndoe_modules 下的，不转换,但是有些第三方库会使用到 polyfill，所以不在这里设置，在 babel 设置
                    exclude:'/ndoe_modules/',
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
                {
                    test:/\.css$/,
                    exclude:'/ndoe_modules/',
                    use:[
                        // 开发环境用 MiniCssExtractPlugin.loader，生产环境用 style-loader
    
                        // MiniCssExtractPlugin.loader 包含了style-loader；提取 css 的loader
    
                        // MiniCssExtractPlugin.loader, // 生产使用
    
                        // 'style-loader', // 让 css 生效；开发使用

                        // 动态 值
                        isProd?MiniCssExtractPlugin.loader:'style-loader',
    
                        'css-loader' // 加载 css文件
                    ]
                }
            ]
        },
        plugins:[
            // 每次打包之前，删除之前的打包文件
            // new ClearWebpackPlugin()
            // 打包 html 
            new HtmlWebpackPlugin({
                template:'./index.html',
                // 开启 html 压缩
                minify:isProd?{
                    // 压缩的时候移除注释 
                    removeComments:true,
                    // 移除空属性
                    removeEmptyAttributes:true,
                    // 移除 多余属性
                    removeRedundantAttributes:true,
                    // 移除空白字符
                    collapseWhitespace:true,
                    // 压缩内联css 
                    minifyCSS:true,
                    // 压缩内联 js
                    minifyJS:{
                        mangle:{
                            toplevel:true
                        }
                    },
                }:false
            }),
            // 设置 第三方库的全部变量
            // 从 dayjs 库中，设置 全部变量 dayjs 
            new ProvidePlugin({
                dayjs:'dayjs'
            })
        ],
    
    }
}
// 使用函数 导出 配置信息
module.exports = function(env){
    // env 参数是 package.json 的脚本命令中 --env 后面的值： development或production

    // "serve": "webpack serve --config ./config/comm.config.js --env development",
    // "build": "webpack --config ./config/comm.config.js --env production"

    // 是不是 production 环境
    const isProd = env.production
    // 确定配置
    let mergeConfig = isProd?prodConfig:devConfig
    // 合并
    const finalConfig = merge(getCommonConfig(isProd),mergeConfig)
    // 打包时，用这个
    return finalConfig
    // 分析打包时间 是这个，这个 会让 压缩 失效
    // return smp.wrap(finalConfig)
    
}