const path =  require('path')
// 提取 css文件，打包 css，插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩 css 的插件
const Cssminimizerplugin = require('css-minimizer-webpack-plugin')
// 压缩 js 的插件
const TerserPlugin = require('terser-webpack-plugin')
// 对 css 进行Tree Shaking处理
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
// 用于找到某个文件下的所有文件
const glob = require('glob')
// 打包后的 文件 压缩
const CompressionPlugin = require('compression-webpack-plugin')
// 打包文件分析2
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
// 定义配置信息
module.exports = {
    mode:'production',
    plugins:[
        // css 提取 打包
        new MiniCssExtractPlugin({
            // css/  是把打包的css文件，放入 css文件夹中

            // 常规导入，包名
            // import './css/style.css'
            filename:'css/[name]_css.css',

            // 动态导入的css文件，打包命名
            // import('./src/css/style.css')
            chunkFilename:'css/[name]_css.css',
        }),
        // css 进行Tree Shaking处理，删除无用 class
        new PurgeCSSPlugin({
            // 那个路径下的文件需要进行 Tree Shaking处理
            // 当前路径的上层中的src文件
            // /**/* 找到src下的所有文件
            // nodir 排除文件夹，只找文件
            paths:glob.sync(`${path.resolve(__dirname,'../src')}/**/*`,{nodir:true})
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
                    filename:"js/[name]_vendors.js"
                },
                utils:{
                    // 把 utils 下的,全部分到这个包中
                    test: /utils/,
                    filename:'js/[name]utils.js'
                },
            }
        },
        // 代码优化
        minimizer:[
            // TerserPlugin js压缩插件
            new TerserPlugin({
                // 默认注释会抽取到一个单独的文件，false 注释不抽取
                extractComments:false,
                // 自定义 优化配置
                terserOptions:{
                    compress:{
                        arguments:true,
                        // 删除 无用代码
                        // unused:true
                    },
                    mangle:true,
                    toplevel:false
                }
            }),
            // 压缩 css 插件
            new Cssminimizerplugin({
                // 无需 配置
            }),
            // 对打包后的文件进行压缩 css js 
            new CompressionPlugin({
                // 压缩哪些文件
                test:/\.(css|js)$/,
                // 压缩比例 
                minRatio:0.7,
                // 压缩格式 
                algorithm:"gzip"
            }),
            // 打包结果分析2
            new BundleAnalyzerPlugin()
        ],
        // 导入模块时，分析模块中的哪些函数有被使用，哪些函数没有被使用
        // 和 minimizer中 TerserPlugin 的 unused 配合 使用
        // usedExports:true
    }
}
