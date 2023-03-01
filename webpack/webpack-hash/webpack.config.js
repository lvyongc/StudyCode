const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const Cssminimizerplugin = require('css-minimizer-webpack-plugin')
module.exports = {
    // mode:'production',
    mode:'development',
    entry:{
        main:'./src/main.js',
        index:'./src/index.js',
    },
    output:{
        path:path.resolve(__dirname,'./build'),

        // 推荐使用 contenthash

        // hash 只要修改了一个文件，所有的文件都会重新打包，且包名发生改变，影响 打包速度，以及 部署，不利于浏览器缓存，名字不变的情况下，浏览器才会使用缓存，否则需要重新下载

        // contenthash 只有修改过的文件，才会重新打包，部署时，没有重新打包的，包名不会变，浏览器可以使用缓存，避免重新下载；A包引入的B包，A包修改后，不修改B包，B包也不会重新打包，只打包A；但修改B包后，A、B包，都会重新打包

        // chunkhash 同 contenthash，但是：A包引入的B包（在自定义分包的前提下、import 普通导入时），A包修改后，不修改B包，A、B包，都会重新打包；使用动态导入时，和 contenthash 完全一致

        filename:'[name]_[contenthash]_buile.js',
        // 分包命名
        chunkFilename:'[contenthash]_chunk.js',

        // 打包时，删除上次打包
        clean:true
    },
    optimization:{
        // 开发环境，开启代码压缩
        minimize:true,
        // 代码优化
        minimizer:[
            // TerserPlugin js压缩插件
            new TerserPlugin({
                // 默认注释会抽取到一个单独的文件，false 注释不抽取
                extractComments:false,
                // 自定义 优化配置
                terserOptions:{
                    compress:{
                        arguments:true
                    },
                    mangle:true,
                    toplevel:false
                }
            }),
            // 压缩 css 插件
            new Cssminimizerplugin({
                // 无需 配置
            })
        ]
    }
}