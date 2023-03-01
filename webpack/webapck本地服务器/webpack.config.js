// path webpack 内置
const path =  require('path')
// 导出 
module.exports = {
    mode:'development',
    devtool:'source-map',
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'build.js',
        clean:true
    },
    // 本地服务器的配置
    devServer:{
        // 默认 ,如果遇到静态文件，去public文件夹下寻找
        static:['public','自定义文件夹'],
        // 主机地址，同一网段 下，都可以通过 ip 地址访问
        host:'0.0.0.0',
        // 端口号 
        port:9999,
        // 编译后是否自动打开浏览器
        open:true,
        // 是否为 静态文件 开启 gzip 压缩,浏览器下载 压缩文件，减少下载时间，下载后浏览器自动解压
        compress:true,
        // public 默认，静态资源 去 public文件夹 寻找
        static:['public','自定义文件夹'],
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
    }
}