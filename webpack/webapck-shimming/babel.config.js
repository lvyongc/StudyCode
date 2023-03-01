module.exports = {
    // 使用 具体的插件，转换具体的内容
    // plugins:[

    // ],
    // 使用预设，转换 预设默认的大部分 内容
    presets:[
        // 不配置
        // "@babel/preset-env"

        ["@babel/preset-env",{
            // 额外 配置
            // 适配的浏览器,这个字段会 覆盖 .browserslistrc文件，不推荐 这样使用
            // targets:">5%"

            // 使用 polyfill
            // corejs:3, // corejs版本
            // 自动 检测 使用 到的,推荐
            // useBuiltIns:"usage"
            // 根据 入口 使用（让第三方库 使用polyfill，需要在 使用到的js文件引入 2个库 ）
            // useBuiltIns:"entry"
        }],
        // 对 ts 的预设 处理
        // ["@babel/preset-typescript",{
        //     // ts的 polyfill
        //     corejs:3,
        //     useBuiltIns:"usage"
        // }]
    ]
}