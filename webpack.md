## 跨域

### 跨域原因

- 浏览器同源策略
- 服务端渲染，没有跨域
- 前后端分离，才有了跨域问题
- 放到 同一个 服务器，是没有跨域的

### 解决方案

- 服务器开启 CORS
- 使用 node 代理服务器（webpack 中的配置）
- 配置 nginx 反向代理，在 nginx  中 开启 cors

## webpack

```js
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
    resolve:{
        // 配置后， 文件后缀名 可以不写
        extensions:['.js','.json','.vue','.ts']
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                // ndoe_modules 下的，不转换
                // exclude:'/ndoe_modules/',
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    }
}
```

### Mode配置

- production 生产环境、线上环境
- development 开发环境、本地环境

![mode配置](E:\AB--电脑备份\现在\StudyCode\img_webpack\mode配置.png)

### 认识 source-map

![source-map](E:\AB--电脑备份\现在\StudyCode\img_webpack\source-map.png)

### 使用source-map

```js
    // 使用source-map
    devtool:'source-map'
```

- 打包后文件 如何和 source-map文件关联
  - 打包后文件自动在最后一行添加注释，指向 对应的 source-map文件
  - 这行注释会被浏览器解析，解析：将代码映射到  source-map文件
  - 浏览器将  source-map文件 下载到本地
  - 根据 source-map文件 把打包后代码 还原

![source-map 使用](E:\AB--电脑备份\现在\StudyCode\img_webpack\source-map 使用.png)

- 浏览器 设置 js、css

![source-map 浏览器设置](E:\AB--电脑备份\现在\StudyCode\img_webpack\source-map 浏览器设置.png)

![source-map文件 css](E:\AB--电脑备份\现在\StudyCode\img_webpack\source-map文件 css.png)

### 分析source-map

![分析source-map](E:\AB--电脑备份\现在\StudyCode\img_webpack\分析source-map.png)

### 生成source-map

![生成source-map](E:\AB--电脑备份\现在\StudyCode\img_webpack\生成source-map.png)

### source-map 值

![source-map值](E:\AB--电脑备份\现在\StudyCode\img_webpack\source-map值.png)

### eval-source-map

![eval-source-map](E:\AB--电脑备份\现在\StudyCode\img_webpack\eval-source-map.png)

### inline-source-map

![inline-source-map](E:\AB--电脑备份\现在\StudyCode\img_webpack\inline-source-map.png)

### cheap-source-map

![cheap-source-map](E:\AB--电脑备份\现在\StudyCode\img_webpack\cheap-source-map.png)

### webpack 使用 babel 编译 js

```js
	npm i babel-loader

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
```

### cheap-module-source-map

![cheap-module-source-map](E:\AB--电脑备份\现在\StudyCode\img_webpack\cheap-module-source-map.png)

### hidden-source-map

![hidden-source-map](E:\AB--电脑备份\现在\StudyCode\img_webpack\hidden-source-map.png)

### nosources-source-map

![nosources-source-map](E:\AB--电脑备份\现在\StudyCode\img_webpack\nosources-source-map.png)

### 多个值的组合

![多个值的组合](E:\AB--电脑备份\现在\StudyCode\img_webpack\多个值的组合.png)

### 项目中 source-map

- 开发、测试 使用 source-map
- 线上 使用 false、none

## babel

### 为什么需要babel

![为什么需要babel](E:\AB--电脑备份\现在\StudyCode\img_webpack\为什么需要babel.png)

### babel命令行使用

```js
// 安装
npm i @babel/core @babel/cli -D
// 插件
npm i @babel/preset-env -D
// 脚本
"babel": "babel ./src --out-dir ./build --presets=@babel/preset-env"
// 使用
npm run babel 
```

![babel命令行使用](E:\AB--电脑备份\现在\StudyCode\img_webpack\babel命令行使用.png)

### babel 预设  preset

- 当需要转换的内容过多，一个个设置比较麻烦，使用预设

```js
npm i @babel/preset-env -D
```

### babel底层原理

![babel底层原理](E:\AB--电脑备份\现在\StudyCode\img_webpack\babel底层原理.png)

### babel编译器执行原理

![babel编译器执行原理](E:\AB--电脑备份\现在\StudyCode\img_webpack\babel编译器执行原理.png)



### webpack使用babel

```js
	  // babel
	  npm i babel-loader -D
	  // babel 预设插件
	  npm i @babel/preset-env -D

      rules:[
            // js文件 使用 babel-loader 转换
            // 先 使用 babel 转换，再使用 webpack 打包
            {
                test:/\.js$/,
                use:{
                    // 使用 babel-loader
                    loader:'babel-loader',
                    // babel-loader 配置 
                    options:{
                        // 使用 具体的插件，转换具体的内容
                        // plugins:[

                        // ],
                        // 使用预设，转换 预设默认的大部分 内容
                        presets:[
                                                        						 // 不配置
                            // "@babel/preset-env"
                            
                            ["@babel/preset-env",{
                                // 额外 配置
                            }]
                        ]
                    }
                    
                }
            }
        ]
```

### babel-loader

- 使用 babel-loader 后，还需要 配置 babel-loader使用的插件

![babel-loader](E:\AB--电脑备份\现在\StudyCode\img_webpack\babel-loader.png)

### babel-preset

![babel-preset](E:\AB--电脑备份\现在\StudyCode\img_webpack\babel-preset.png)

### 浏览器兼容

- js、css，兼容 各种浏览器
- 根据 适配的浏览器 进行 自动转换
- css
  - postcss
  - 自动 转换，添加 前缀，实现兼容
- js
  - babel 自动 转换，实现兼容
- 以上 2个插件，都是根据 需要 适配的浏览器，进行转换的
- 设置 需要 适配的浏览器
  - 新建 配置文件 .browserslistrc	
    - 这个 配置文件，对所有的插件 都生效
  - 在 package.json 中配置，browserslist 字段
- 根据 配置 信息 ，找到需要适配的浏览器，postcss和babel 再根据需要适配的浏览器，进行代码转换
- 减少 需要 适配的浏览器，来 优化性能

![浏览器兼容](E:\AB--电脑备份\现在\StudyCode\img_webpack\浏览器兼容.png)

### 浏览器市场占有率

![浏览器市场占有率](E:\AB--电脑备份\现在\StudyCode\img_webpack\浏览器市场占有率.png)

### 认识 browserslist 工具

- 安装 babel时，默认 自动安装的
- browserslist 是 babel用来 查询 配置文件 .browserslistrc
- 配置文件 .browserslistrc 是配置需要适配的浏览器

![browserslist 工具](E:\AB--电脑备份\现在\StudyCode\img_webpack\browserslist 工具.png)

### 浏览器查询过程

![浏览器查询过程](E:\AB--电脑备份\现在\StudyCode\img_webpack\浏览器查询过程.png)

### browserslist 编写规则

- 24个月内，没有更新和支持，就是 dead

<img src="E:\AB--电脑备份\现在\StudyCode\img_webpack\browserslist 编写规则.png" alt="browserslist 编写规则" style="zoom:75%;" />

------

![browserslist 编写规则2](E:\AB--电脑备份\现在\StudyCode\img_webpack\browserslist 编写规则2.png)

------

### 配置 browserslist

- webpack打包时，遇到 js文件，使用 babel 转换
- babel 在转换之前会 使用 browserslist 工具，查询  .browserslistrc文件 找到需要适配的浏览器
- babel 再 根据需要适配的浏览器，进行代码转换，转换后，再由 webpack 打包代码

![配置 browserslist](E:\AB--电脑备份\现在\StudyCode\img_webpack\配置 browserslist.png)



### 配置默认和条件关系

- or  ,（逗号）  换行 
  - 这3个 是  或者
- and  并且
- not 否定

![配置默认和条件关系](E:\AB--电脑备份\现在\StudyCode\img_webpack\配置默认和条件关系.png)

### 设置 目标浏览器browserslist 

- 推荐 配置 .browserslistrc文件

![设置 目标浏览器browserslist](E:\AB--电脑备份\现在\StudyCode\img_webpack\设置 目标浏览器browserslist.png)

### 设置 目标浏览器 targets

![设置 目标浏览器 targets](E:\AB--电脑备份\现在\StudyCode\img_webpack\设置 目标浏览器 targets.png)



## babel的配置文件

- webpack 只配置 babel-loader
-  babel-loader的配置 放在 babel.config.json 文件

![babel的配置文件](E:\AB--电脑备份\现在\StudyCode\img_webpack\babel的配置文件.png)

### 认识 polyfill

- 解决 代码 在 浏览器中的 兼容

![认识 polyfill](E:\AB--电脑备份\现在\StudyCode\img_webpack\认识 polyfill.png)

### 使用polyfill

```js
// 安装
npm i core-js regenerator-runtime

// 配置
        ["@babel/preset-env",{
            // 额外 配置

            // 使用 polyfill
            corejs:3, // corejs版本
            // 使用 
            useBuiltIns:"usage"
        }]
```

![使用polyfill](E:\AB--电脑备份\现在\StudyCode\img_webpack\使用polyfill.png)

### useBuiltIns 属性

- 使用 usage 即可

```js
        ["@babel/preset-env",{
            // 额外 配置

            // 使用 polyfill
            corejs:3, // corejs版本
            // 自动 检测 使用 到的
            useBuiltIns:"usage"
        }]
```

![useBuiltIns 属性](E:\AB--电脑备份\现在\StudyCode\img_webpack\useBuiltIns 属性.png)

------

![useBuiltIns2](E:\AB--电脑备份\现在\StudyCode\img_webpack\useBuiltIns2.png)

### TypeScript编译

```js
// 安装
npm i ts-loader -D
// ts 配置文件
tsc --init
// loader 配置
{
     test:/\.ts$/,
     use:'ts-loader'
}
```

![ts编译](E:\AB--电脑备份\现在\StudyCode\img_webpack\ts编译.png)

### 使用 ts-loader

![使用 ts-loader](E:\AB--电脑备份\现在\StudyCode\img_webpack\使用 ts-loader.png)

### 使用 babel 编译 ts

- 可以 配置 polyfill

```js
	npm i @babel/preset-typescript -D

// babel 配置
    // 使用预设，转换 预设默认的大部分 内容
    presets:[
        // 不配置
        // "@babel/preset-env"

        ["@babel/preset-env",{
            // 额外 配置

            // 使用 polyfill
            corejs:3, // corejs版本
            // 自动 检测 使用 到的,推荐
            useBuiltIns:"usage"
            // 根据 入口 使用（让第三方库 使用polyfill，需要在 使用到的js文件引入 2个库 ）
            // useBuiltIns:"entry"
        }],
        // 对 ts 的预设 处理
        ["@babel/preset-typescript",{
            // ts的 polyfill
            corejs:3,
            useBuiltIns:"usage"
        }]
    ]

// webpack 配置
            {
                test:/\.ts$/,
                // use:'ts-loader'
                use:'babel-loader'
            }
```

![使用 babel 编译 ts](E:\AB--电脑备份\现在\StudyCode\img_webpack\使用 babel 编译 ts.png)

### ts-loader和babel-loader选择

- 结合 使用

![ts-loader和babel-loader选择](E:\AB--电脑备份\现在\StudyCode\img_webpack\ts-loader和babel-loader选择.png)

### 最佳 ts 编译

- 使用 ts-loader 自动检测 类型
- 使用 babel 编译 ts

```js
// 脚本命令

// 只检测类型，不输出;不需要每次执行命令，实时在 自动检测
"ts-check-watch":"tsc --noEmit --watch"

// webpakc
            {
                test:/\.ts$/,
                use:'babel-loader'
            }
```

- 需要 执行 一次 ts-check-watch
- 最后 再 使用 babel 编译 ts

![最佳 ts 编译](E:\AB--电脑备份\现在\StudyCode\img_webpack\最佳 ts 编译.png)

## webpack 本地服务器

### 为什么要搭建本地服务器

```js
// 安装
npm i webpack-dev-server -D
// 开启一个本地服务器
"serve":"webpack serve"
// webpack 打包
"build":"webpack"
```

![为什么要搭建本地服务器](E:\AB--电脑备份\现在\StudyCode\img_webpack\为什么要搭建本地服务器.png)

### webpack-dev-server

-  --config 是指定 webpack配置文件
- 本地 服务器 编译后 ，是没有 输出的
  - 将打包 后的文件，放入 内存中，不是放入文件中，本地服务器再 从内存中拿出来，给到浏览器
  - 放入内存中，效率高

![webpack-dev-server](E:\AB--电脑备份\现在\StudyCode\img_webpack\webpack-dev-server.png)

### devServer基本配置

```js
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
        static:['public','自定义文件夹']
    }
```

### devServer的static

- 静态资源 放入 public文件夹

![devServer的static](E:\AB--电脑备份\现在\StudyCode\img_webpack\devServer的static.png)

### host 配置

![host 配置](E:\AB--电脑备份\现在\StudyCode\img_webpack\host 配置.png)

### port、open、compress

![port、open、compress](E:\AB--电脑备份\现在\StudyCode\img_webpack\port、open、compress.png)

### devServer 跨域 代理 配置 proxy

- 浏览器 同源策略，导致 跨域
  - 服务器中 开启 cors
  - 静态资源 和 服务器 部署在一起，放入同个 服务器
  - node 本地服务（开发阶段）
  - Nginx （线上）

```js
devServer：{
        // node 本地服务器代理，解决 跨域，跨域 是 浏览器的限制， 使用 node 本地服务器代理后，变为 node 本地服务器 和 后端服务器 进行 数据交互，服务器之间，没有 跨域
        proxy:{
            // 把 api 代理 到 http://fll 地址，把 /api 变成 http://fll
            '/api':{
                target:"http://fll",
                // 路径中，以 api 开头的 替换 为 空
                pathRewrite:{
                    '^/api':''
                },
                // 本地是 localhost:8080 ,代理是 http://localhost:9999，代理去请求 后端服务器，changeOrigin 是false，后端服务器 拿到的，请求地址依然是 8080，但希望是 9999(服务器校验)，这时 9999 请求不到数据
                // 后端服务器 拿到 请求地址（header.host），属于 后端服务器校验,判断请求地址 是不是 9999
                // changeOrigin:true ，代理 会把请求地址改为 9999，这样后端服务器 中的请求地址就是 9999，可以请求数据
                changeOrigin:true
            }
        }
}
```

![proxy](E:\AB--电脑备份\现在\StudyCode\img_webpack\proxy.png)

### changeOrigin

![changeOrigin](E:\AB--电脑备份\现在\StudyCode\img_webpack\changeOrigin.png)

### historyApiFallback

- 改变路由
  - 页面不刷新，根据路由加载不同的组件，组件显示不同页面内容

- false，刷新页面，请求的是 localhost:8080/about，请求 localhost:8080 服务器 下面的 about 页面
  - 但是 about 不是一个页面，只是一个组件，所以找不到 about 页面
- true，刷新页面，自动返回 index.html，并把 about 加到 history 中，所以 请求的还是 index.html页面，路由 是 about，再根据路由加载组件

```js
historyApiFallback:true
```

![historyApiFallback](E:\AB--电脑备份\现在\StudyCode\img_webpack\historyApiFallback.png)

### webpack 打包 html

- 使用 插件 ，配置后，自动打包 配置的 html文件，并为打包后的html 自动引入打包后的 js 代码

```js
// 安装
npm i html-webpack-plugin -D

// 引入 
const HtmlWebpackPlugin = require('html-webpack-plugin')

    plugins:[
        // 指定 html 
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
```

## webpack 性能优化 方案

### 使用 webpack 性能优化

- 结果 优化
  - 分包处理 
    - vue 路由懒加载
      - 进入页面时，只下载 需要的包，避免一次性下载所有包
      - 减少 下载 时间，让用户更快的看到 页面
  - 对 代码压缩
  - 删除 无用代码
  - CDN 服务器（放 静态资源）
- 打包速度优化
  - exclude ，排除某些文件，不打包某些文件
  - cache 缓存，之前打包过的，再次打包就不用打包了

![webpack优化](E:\AB--电脑备份\现在\StudyCode\img_webpack\webpack优化.png)

------

![使用 webpack 性能优化](E:\AB--电脑备份\现在\StudyCode\img_webpack\使用 webpack 性能优化.png)

### 性能优化-代码分离-分包

- 不使用，分包
  - 所有的代码（自己写的代码、第三方库的代码）打包到一个文件中
  - 当用户打开页面，需要下载这个 非常大的包
  - 会造成 下载时间长，首屏渲染速度慢，用户长时间，看到的是一个 空白页面
- 使用，分包。把一个大包，分成多个小包
  - 用户进入哪个页面，只需要下载这个页面需要的包
  - 或者等到浏览器空闲时，再下载其他包（预下载）prefetch
- SSR
  - 加快首屏渲染速度
  - 增加 SEO 优化

![分包](E:\AB--电脑备份\现在\StudyCode\img_webpack\分包.png)

![代码分离-分包](E:\AB--电脑备份\现在\StudyCode\img_webpack\代码分离-分包.png)

------

### 如何分包

- 多入口，一个入口，作为一个打包
- 动态导入，利用 import函数，单独打包 导入的文件
- SplitChunks(自定义分包)，把第三方库单独打包、根据包大小继续拆包

### 多入口

- 默认，多入口，使用到 同一个第三方库时，每个 入口都会打包一遍 第三方库
  - 使用 共享 解决 

```js
    // 单入口 
    // entry:"./src/index.js",

    // 多入口 
    entry:{
        // 入口名字：路径 （key:value）;不共享：
        // index:'./src/index.js',
        // hah:'./src/hah.js'
        
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
    }
```

![多入口起点](E:\AB--电脑备份\现在\StudyCode\img_webpack\多入口起点.png)

### Entry Dependencies(入口依赖)

![Entry Dependencies(入口依赖)](E:\AB--电脑备份\现在\StudyCode\img_webpack\Entry Dependencies(入口依赖).png)

### 动态导入（dynamic import）

```js
// 不使用 动态导入：
// 开始就和主包一起下载下来，影响 首屏渲染速度
// 下载的内容直接被渲染

// import './router/about'
// import './router/home'

// 使用 动态导入，在点击 时，去下载 导入的文件
// 开始 只下载主包
button1.onclick = () =>{
    import('./router/home')
}
button2.onclick = () =>{
    import('./router/about').then(res =>{
        // res 是 about整个模块 
        
        // 获取 export 导出的内容
        res.aoubt()
        // 获取 export default 导出的内容
        res.default()
    })
}
```

![动态导入（dynamic import）](E:\AB--电脑备份\现在\StudyCode\img_webpack\动态导入（dynamic import）.png)

### 动态导入的文件命名

- 打包后的分包的命名

```js
button1.onclick = () =>{

    // 使用 注释，指定 打包后的分包的文件名
    // 固定 webpackChunkName，about 是自定义名字
    // /* webpackChunkName:'about' */
    
    import(/* webpackChunkName:'home' */'./router/home')
}

    output:{
        path:path.resolve(__dirname,'./build'),
        // 多出口 ；[name] 是 入口的 key
        filename:'[name]-builde.js',
            
        // 单独 对分包的文件，进行命名
        chunkFilename:'[name]_chunk.js',

        clean:true
    }

// 结果：
about_chunk.js
```

![动态导入的文件命名](E:\AB--电脑备份\现在\StudyCode\img_webpack\动态导入的文件命名.png)

### 代码的懒加载

![代码的懒加载](E:\AB--电脑备份\现在\StudyCode\img_webpack\代码的懒加载.png)

### SplitChunks

- 第三方库，打包到一个包中

```js
    // 线上优化配置 
    optimization:{
        splitChunks:{
            //  默认值是，async ，只对 异步的（import函数方法导入的） 进行分包
            // all 对 所有 使用 import 导入的 进行分包

            // import 函数 方法导入的： import(/* webpackChunkName:'home' */'./router/home')
            // import 直接 导入的： import axios from 'axios'，把所有 import 直接 导入的（第三方库），打包到一个包中

            chunks:"all"
        }
    }
```

![SplitChunks](E:\AB--电脑备份\现在\StudyCode\img_webpack\SplitChunks.png)

### SplitChunks自定义配置

- 自定义 打包
  - 当一个包大于指定的大小时，继续进行 拆包
  - 自己对需要进行分包的内容进行分组
    - 把 node_modules 下的分一个包 
    - 再把 utils 下的分一个包 

```js
    // 线上优化配置 
    optimization:{
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
```

![自定义分包代码](E:\AB--电脑备份\现在\StudyCode\img_webpack\自定义分包代码.png)

------

![SplitChunks自定义配置](E:\AB--电脑备份\现在\StudyCode\img_webpack\SplitChunks自定义配置.png)

------

![SplitChunks自定义配置2](E:\AB--电脑备份\现在\StudyCode\img_webpack\SplitChunks自定义配置2.png)

### optimization.chunkIds配置

```js
    optimization:{
        // 打包后的文件命名
        // 默认 开发环境是 named；线上 默认是 deterministic 

        // deterministic 是确定性的，当 打包的原文件修改后，只重新打包 修改过的文件，没有修改的文件，不会重新打包；更新线上代码时，浏览器也只会下载，重新打包后的包，因为没有重新打包的，文件名没有变化，会先去缓存中查找这个文件，如果有且一致，就不会重新下载，否则就会重新下载

        // natural 是 webpack4中的值，这个只要修改了源文件，就会重新打包所有文件

        chunkIds:'named',
    }
```

![optimization.chunkIds配置](E:\AB--电脑备份\现在\StudyCode\img_webpack\optimization.chunkIds配置.png)

### optimization.runtimeChunk配置

![optimization.runtimeChunk配置](E:\AB--电脑备份\现在\StudyCode\img_webpack\optimization.runtimeChunk配置.png)

### Prefetch和Preload

- Preload 预加载，在主包 下载时，并行下载，占用带宽、流量
- Prefetch 预获取， 在 主包 下载结束后再开始下载；在浏览器空闲时下载
  - 下载后放入内存中，在使用时，从 内存中 拿到（prefetch cache）做解析
  - 这样用户在 调整页面时，就不用下载文件了，直接使用 内存中的文件，提供渲染速度
- 是在 代码中 配置的，不是在 webpack配置
- 推荐 使用 
  - Prefetch 预获取

```js
// 使用 动态导入，在点击 时，去下载 导入的文件
// 开始 只下载主包
button1.onclick = () =>{
    // 命名
    import(/* webpackChunkName:'home' */'./router/home')
    // 预获取
    import(/* webpackPrefetch:true */'./router/home')
}
```

![Prefetch和Preload](E:\AB--电脑备份\现在\StudyCode\img_webpack\Prefetch和Preload.png)

## 什么是CDN？

- 在多个地域，有多个CDN服务器，CDN缓存了很多数据
- 用户获取数据时，直接从CDN返回数据，加快获取数据的速度
- 如何 加快的速度？
  - 距离 用户 最近的CDN服务器，发送数据
  - 通过 减少 传输 距离，来减少 传输时间



![什么是CDN](E:\AB--电脑备份\现在\StudyCode\img_webpack\什么是CDN.png)

### 配置CDN服务器

- 所有静态资源，全部放入 CDN

```js
    output:{
        // 使用 CDN 服务器，把 所有webpack打的包，放入 CDN 服务器
        publicPath:'http://fllcdn.com/'
    }
```

![购买CDN服务器](E:\AB--电脑备份\现在\StudyCode\img_webpack\购买CDN服务器.png)

### 第三方库的CDN服务器

- 第三方库，使用 CDN

- 当不使用 第三方库的CDN服务器，webpack 会把 第三方库代码，打包到 静态资源中，当部署后，用户访问页面，需要下载  第三方库的包，会增加下载时间
- 使用 第三方库的CDN
  - 在 打包时，不对 第三方库 进行打包
  - 在 html 中引入 第三方库的 cdn 地址

```js
	// 排除对 第三方库 的打包 
    externals:{
        // key:value ;key 是 库的名字；value是 从 CDN 地址请求下来的 js中提供的对应的名称（全局变量）
        axios:'axios',
        // react:'React'
    }
    
    <!-- 使用 cdn -->
    <script src="https://cdn.bootcdn.net/ajax/libs/axios/1.2.5/axios.min.js"></script>
</body>
```

![第三方库的CDN服务器](E:\AB--电脑备份\现在\StudyCode\img_webpack\第三方库的CDN服务器.png)

### 认识 shimming

![shimming](E:\AB--电脑备份\现在\StudyCode\img_webpack\shimming.png)

### shimming预支全局变量

- 第三方库，如果没有导入，就直接使用库的API
  - 使用 CDN 后无需导入，即可直接使用
  - 配置 shimming，设置 第三方库的API 为 全局变量
  - 否则 API 找不到

```js
// import dayjs from 'dayjs'
// 没有导入，直接使用 
console.log(dayjs(new Date()).format('YYYY-MM-DD'))

    plugins:[
        // 设置 第三方库的全部变量
        // 从 dayjs 库中，设置 全部变量 dayjs 
        new ProvidePlugin({
            dayjs:'dayjs',
        })
    ]
```

![shimming预支全局变量](E:\AB--电脑备份\现在\StudyCode\img_webpack\shimming预支全局变量.png)

### MiniCssExtractPlugin

- 提取 css 文件
  - 默认 css 没有单独打包，被打包 在 使用到的文件中
  - 使用 插件 mini-css-extract-plugin 提取 css文件，单独打包 css文件

```js
npm i style-loader css-loader -D
npm i mini-css-extract-plugin -D

// 常规导入 css
import './css/style.css'
// 动态导入 css
import('./src/css/style.css')

// 提取 css文件，打包 css，插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

    module:{
         rules:[
             {
                test:/\.css$/,
                use:[
                    // 开发环境用 MiniCssExtractPlugin.loader，生产环境用 style-loader

                    // MiniCssExtractPlugin.loader 包含了style-loader；提取 css 的loader
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', // 让 css 生效

                    'css-loader' // 加载 css文件
                ]
            }
         ]
    }

    plugins:[
        // css 提取 
        new MiniCssExtractPlugin({
            // css/  是把打包的css文件，放入 css文件夹中

            // 常规导入，包名
            // import './css/style.css'
            filename:'css/[name]_css.css',

            // 动态导入的css文件，打包命名
            // import('./src/css/style.css')
            chunkFilename:'css/[name]_css.css',
        })
    ]
```

![MiniCssExtractPlugin](E:\AB--电脑备份\现在\StudyCode\img_webpack\MiniCssExtractPlugin.png)

### 打包后的文件放入文件夹

- 前缀 js、css，就是 文件夹名

```js
filename:'js/[name].js'
filename:'css/[name].css'
```

### Hash、ContentHash、ChunkHash

- ContentHash，只重新打包修改过的文件
- 利于 浏览器 使用 缓存

```js
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
    }
```

![Hash、ContentHash、ChunkHash](E:\AB--电脑备份\现在\StudyCode\img_webpack\Hash、ContentHash、ChunkHash.png)

### 只了解 DLL库

- 不推荐 使用 DLL

- 不经常变化的库，第三方库，抽取到 DLL
- 下次打包时，不会打包第三方库，只打包 逻辑代码，再引入 DLL 使用
- 加快 打包 速度

![只了解 DLL库](E:\AB--电脑备份\现在\StudyCode\img_webpack\只了解 DLL库.png)

## TerserPlugin -js代码压缩（仅了解）

- 了解 即可，实际 不需要 做任何配置，开发环境，webpack 会默认 自动 压缩 js文件、html文件，但 不压缩 css文件，css 压缩需要 手动配置
- 插件 TerserPlugin ，底层 调用 Terser

### Terser（仅了解）

- 是一个插件
- webpack 打包 默认开发环境 是没有代码压缩的
- production 生产模式是开启压缩
- 压缩代码、删除无用代码

![Terser](E:\AB--电脑备份\现在\StudyCode\img_webpack\Terser.png)

### 命令行Terser（仅了解）

```js
 npm i terser -D
// 需要压缩的文件 、输出的文件 c、m的配置
npx terser s.js -o s.min.js -c xxx -m xxx
```

### compress和mangle的options（仅了解）

- compress
  - -c
- mangle
  - -m

```js
npx terser s.js -o s.min.js -c arrows=true,arguments=true -m toplevel=true
```

![compress和mangle](E:\AB--电脑备份\现在\StudyCode\img_webpack\compress和mangle.png)

### Terser在wabpack中配置（仅了解）

- 生产环境下，使用默认的，不需要 做任何配置
- 开发环境，需要配置，但好像没有什么实际作用
- 使用 TerserPlugin 插件

```js

const TerserPlugin = require('terser-webpack-plugin')

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
            })
        ]
    }
```

![Terser在wabpack中配置](E:\AB--电脑备份\现在\StudyCode\img_webpack\Terser在wabpack中配置.png)

## CSS压缩-掌握

- 默认 生产环境，不会压缩 css，需要手动 配置
  - 插件 css-minimizer-webpack-plugin
- 普通插件 放在 plugin
- 压缩相关的插件，放在 optimization的 minimizer

```js
// css压缩插件
npm i css-minimizer-webpack-plugin -D

const Cssminimizerplugin = require('css-minimizer-webpack-plugin')

    optimization:{
        // 开发环境，开启代码压缩
        minimize:true,
        // 代码优化
        minimizer:[
            // 压缩 css 插件
            new Cssminimizerplugin({
                // 无需 配置
            })
        ]
    }
```

![CSS压缩](E:\AB--电脑备份\现在\StudyCode\img_webpack\CSS压缩.png)

## webpack 配置 抽取（掌握）

- 开发配置、生成配置，分开
- comm.config.js
  - 开发、生产，公共的配置
- prod.config.js
  - 生产配置
- dev.config.js
  - 开发配置

```js
// --config 指定 webpack 配置文件
// --env development 指定 环境 是 开发环境，指定的环境会传递给 comm.config.js 中的函数作为 参数

  "scripts": {
    "serve": "webpack serve --config ./config/comm.config.js --env development",
    "build": "webpack --config ./config/comm.config.js --env production"
  }
```

```js
// 合并webpack配置文件--插件
npm i webpack-merge -D

// 抽取 开发、生产，配置文件
// 1-导出一个函数
// 2-从上到下查看所有配置 属于 公共、开发、生产，中的哪个
// 3-对 单独的配置文件，单独配置
```

```js
// 公共配置
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
            chunkFilename:'js/[name]_chunk.js',
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
                {
                    test:/\.css$/,
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
                template:'./index.html'
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
    return merge(getCommonConfig(isProd),mergeConfig)
}
```

```js
// 开发配置
// 定义配置信息
module.exports = {
    mode:'development',

    // 本地服务器的配置
    devServer:{
        // 默认 ,如果遇到静态文件，去public文件夹下寻找
        static:['public'],
        // 主机地址，同一网段 下，都可以通过 ip 地址访问
        // host:'0.0.0.0',
        // 端口号 
        // port:9999,
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
    }
}
```

```js
// 生产配置
// 提取 css文件，打包 css，插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩 css 的插件
const Cssminimizerplugin = require('css-minimizer-webpack-plugin')

// 定义配置信息
module.exports = {
    mode:'production',
    plugins:[
        // css 提取 
        new MiniCssExtractPlugin({
            // css/  是把打包的css文件，放入 css文件夹中

            // 常规导入，包名
            // import './css/style.css'
            filename:'css/[name]_css.css',

            // 动态导入的css文件，打包命名
            // import('./src/css/style.css')
            chunkFilename:'css/[name]_css.css',
        })
    ],
    // 线上优化配置 
    optimization:{
        // 打包后的文件命名
        // 默认 开发环境是 named；线上 默认是 deterministic 

        // deterministic 是确定性的，当 打包的原文件修改后，只重新打包 修改过的文件，没有修改的文件，不会重新打包；更新线上代码时，浏览器也只会下载，重新打包后的包，因为没有重新打包的，文件名没有变化，会先去缓存中查找这个文件，如果有且一致，就不会重新下载，否则就会重新下载

        // natural 是 webpack4中的值，这个只要修改了源文件，就会重新打包所有文件

        chunkIds:'deterministic',

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
            // 压缩 css 插件
            new Cssminimizerplugin({
                // 无需 配置
            })
        ]
    }
}
```

## JS Tree Shaking （仅了解）

- 生产环境下，webpack 有默认配置 对 JS 做 Tree Shaking，无需任何操作

![Tree Shaking 实现](E:\AB--电脑备份\现在\StudyCode\img_webpack\Tree Shaking 实现.png)

### usedExports（仅了解）

- 用于 删除无用 代码
- usedExports 标识 无用代码，生产环境 下，不用配置，使用默认即可
- 再配合 TerserPlugin 插件 使用，设置 unused。删除无用代码

```js
optimization:{
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
                        // 2-根据 usedExports结果，删除 无用代码
                        unused:true
                    },
                    mangle:true,
                    toplevel:false
                }
            }),
            // 压缩 css 插件
            new Cssminimizerplugin({
                // 无需 配置
            })
        ],
        // 1-导入模块时，分析模块中的哪些函数有被使用，哪些函数没有被使用
        // 和 minimizer中 TerserPlugin 的 unused 配合 使用
        usedExports:true
}
```

![usedExports](E:\AB--电脑备份\现在\StudyCode\img_webpack\usedExports.png)

### sideEffects（仅了解）

![sideEffects](E:\AB--电脑备份\现在\StudyCode\img_webpack\sideEffects.png)

### webpack中 Tree Shaking的设置（仅了解）

![webpack中 Tree Shaking的设置](E:\AB--电脑备份\现在\StudyCode\img_webpack\webpack中 Tree Shaking的设置.png)

## CSS Tree Shaking（掌握）

- 默认 webpack 没有对 css 进行 Tree Shaking
- Tree Shaking：css文件中，没有使用到的 class，不打包 进去
- 使用插件 ，purgecss-webpack-plugin

```JS
npm i purgecss-webpack-plugin -D
// 对 css 进行Tree Shaking处理
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
// 用于找到某个文件下的所有文件
const glob = require('glob')

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
        
        // 对css 进行Tree Shaking处理，删除无用 class
        new PurgeCSSPlugin({
            // 哪个路径下的文件需要进行 Tree Shaking处理
            // 当前路径的上层中的src文件中所有的文件
            // /**/* 找到src下的所有文件
            // nodir 排除文件夹，只找文件
            paths:glob.sync(`${path.resolve(__dirname,'../src')}/**/*`,{nodir:true})
        })
    ]
```

![CSS Tree Shaking](E:\AB--电脑备份\现在\StudyCode\img_webpack\CSS Tree Shaking.png)

### 配置 PurgeCSSPlugin

![配置 PurgeCSSPlugin](E:\AB--电脑备份\现在\StudyCode\img_webpack\配置 PurgeCSSPlugin.png)

## Scope Hoisting 作用域提升（仅了解）

- 生产环境，有默认配置，无需任何操作

![Scope Hoisting](E:\AB--电脑备份\现在\StudyCode\img_webpack\Scope Hoisting.png)

## HTTP 文件压缩传输

- 在 webpack 压缩的基础上，再次压缩
- 使用 gzip 算法，生成 .gz文件
- 浏览器会自动解压，解析代码

### 什么是 HTTP 文件压缩

![什么是 HTTP 文件压缩](E:\AB--电脑备份\现在\StudyCode\img_webpack\什么是 HTTP 文件压缩.png)

### webpack对(js、css)文件的压缩（掌握）

- 需要 手动 设置，才会 压缩成 .gz 

```js
npm i compression-webpack-plugin -D

// 打包后的 文件 压缩
const CompressionPlugin = require('compression-webpack-plugin')

            new CompressionPlugin({
                // 压缩哪些文件
                test:/\.(css|js)$/,
                // 压缩比例 
                minRatio:0.7,
                // 压缩格式 
                algorithm:"gzip"
            })
```

![webpack对文件的压缩](E:\AB--电脑备份\现在\StudyCode\img_webpack\webpack对文件的压缩.png)



## HTML 文件的压缩

- 生产模式 默认压缩，无需配置

```js
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
            })
```

![HTML 文件的压缩](E:\AB--电脑备份\现在\StudyCode\img_webpack\HTML 文件的压缩.png)

## webpack 打包分析

### 打包时间分析

```js
npm i speed-measure-webpack-plugin -D

// 分析打包时间
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()

    // 合并
    const finalConfig = merge(getCommonConfig(isProd),mergeConfig)
    // 分析打包时间 
    return smp.wrap(finalConfig)
```

![打包时间分析](E:\AB--电脑备份\现在\StudyCode\img_webpack\打包时间分析.png)

### 打包后文件分析

- 先生成 status.json

```js
 // --profile --json=status.json 是：
 // 这次打包的信息，生产 json文件，文件名是 status
 
     "build": "webpack --config ./config/comm.config.js --env production --profile --json=status.json"
```

- http://webpack.github.com/analyse

  - 官方

- https://github.com/webpack/analyse

  - 下载，运行

  ```js
  npm install -g yarn --registry=https://registry.npm.taobao.org
  yarn config set registry https://registry.npm.taobao.org -g
  yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
  
  "dev": "set NODE_OPTIONS=--openssl-legacy-provider & webpack-dev-server"
  
  npm run dev
  ```

  - 打开后，选择 项目文件 status.json，查看分析结果

### 打包后文件分析2

```js
npm i webpack-bundle-analyzer -D

// 打包文件分析2
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

// 打包结果分析2
new BundleAnalyzerPlugin()
```



