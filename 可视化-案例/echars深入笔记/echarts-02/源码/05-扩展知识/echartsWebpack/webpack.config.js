const path=require('path');
module.exports={
    /*entry 入口*/
    entry:{
        main:'./src/index.js'
    },
    /*output 出口，定义打包输出的文件和路径*/
    output:{
        filename: 'bound.js',
        path:path.resolve(__dirname,'dist'),
    },
    /*resolve 模块解析
    *   extensions 是特定文件在引入时，不需要写后缀
    *   alias 为文件路径指定别名
    * */
    resolve:{
        extensions: ['.js','.json'],
        alias:{
            '@':path.resolve(__dirname,'src')
        }
    },
    /*module模块
    *   rules 模块规则
    *       test 定义文件类型，此类型将通过loader 进行转换
    *       use 使用哪个 loader 转换文件
    *       include 只将loader 作用于某个文件夹中的文件
    * */
    module:{
        rules: [
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader'
                },
                include:path.resolve(__dirname,'src')
            }
        ]
    },
    /*devServer 在开发中启服务*/
    devServer: {
        contentBase: './',
        host: 'localhost',
        port: 8001,
        inline: true,
        hot: true,
        open:true
    }
};
