// path webpack 内置
const path =  require('path')
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
    entry:"./src/main.js",
    // 出口,打包到当前路径下的 bunld文件夹
    output:{
        // __dirname 当前路径
        path:path.resolve(__dirname,'./build'),
        // 打包后的文件名字 
        filename:'build.js'
    },
    
    module:{
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    }
}