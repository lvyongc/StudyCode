const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 因为 webpack 是运行在 node 环境下的，所以该文件也就是运行在 node 环境下了，那么 node 语法，模块都可以进行调用

// 这个导出去都对象就是 webpack 打包需要用到都配置对象
module.exports = {

    // 模式 : `"production" | "development" | "none"`
    mode: 'development',

    // 源文件内容映射表（文件），现代浏览器基本都支持这种数据格式都处理
    devtool: 'source-map',

    // entry: './src/index.js',

    // entry: [
    //     './src/index.js',
    //     './src/list.js'
    // ],

    /**
     * 入口设置
     *  1、一对一
     *  2、多对一
     *  3、多对多
     */
    entry: {
        'index': './src/index.ts'
    },


    /**
     * 出口文件
     */
    output: {
        // path 必须是绝对路径
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },

    // 模块解析规则
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        // 各种 loader 加载处理规则
        rules: [

            // TS loader
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader"
            },

            // 每一种规则就是一个对象
            {
                // 被加载都模块规则，支持正则
                test: /\.txt$/i,
                // 满足上面的规则调用的对应loader
                use: 'raw-loader'
            },

            /**
             * 把加载多文件模块进行移动处理，并返回移动后多url
             */
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    // 每一个options对应着一个loader
                    // 每一个loader具体有哪些配置，就需要看具体多loader的文档
                    loader: 'url-loader',
                    options: {
                        // placeholder 占位符 [name] 源资源模块的名称
                        // [ext] 源资源模块的后缀
                        name: '[name]_[hash].[ext]',
                        //打包后的存放位置，存放的物理路径
                        outputPath: "./images",
                        // 打包后文件的 url
                        publicPath: './images',
                        // 小于 1024 字节转成 base64 格式
                        limit: 1024
                    }
                }
            },

            {
                test: /\.css$/,
                // 一个规则有多个loader，use是一个数组，顺序是从后往前
                use: [
                    // "style-loader", 
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: true
                        }
                    }
                ]
            }
        ]
    },


    // 插件
    plugins: [
        // 每一项就是一个具体插件的调用
        new HtmlWebpackPlugin({
            appName: '开课吧',
            template: './html/app.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],

    // webpack-dev-server 模块的相关配置
    devServer: {
        // 把其它目录也加入到webserver的根目录中
        contentBase: './public',
        // 端口
        port: 8081,
        // 自动开启浏览器
        // open: true,
        // 开启模块热替换
        hot: true,

        // 代理
        proxy: {
            '/api': {
                // http://localhost:8081/api/users => http://localhost:7777/api/users
                target: 'http://localhost:7777',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }

}