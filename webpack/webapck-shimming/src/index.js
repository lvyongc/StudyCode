// import hah from './hah'

// 常规导入 css
import './css/style.css'
// 动态导入 css
// import('./src/css/style.css')


console.log('index')
import axios from 'axios'

import {a} from '../utils/a'
import {b} from '../utils/b'
a()
b()

console.log(axios)

// import dayjs from 'dayjs'
// 没有导入，直接使用 
console.log(dayjs(new Date()).format('YYYY-MM-DD'))


// 不使用 动态导入：
// 开始就和主包一起下载下来，影响 首屏渲染速度
// 下载的内容直接被渲染

// import './router/about'
// import './router/home'


const button1 = document.createElement('button')
const button2 = document.createElement('button')
button1.textContent = 'go home'
button2.textContent = 'go about'
document.body.append(button1)
document.body.append(button2)

// 使用 动态导入，在点击 时，去下载 导入的文件
// 开始 只下载主包
button1.onclick = () =>{
    // 命名
    import(/* webpackChunkName:'home' */'./router/home')
    // 预获取;在 主包 下载结束后再开始下载
    import(/* webpackPrefetch:true */'./router/home')
}
button2.onclick = () =>{
    // 使用 注释，指定 打包后的分包的文件名
    // /* webpackChunkName:'about' */
    import(/* webpackChunkName:'about' */'./router/about').then(res =>{
        // res 是 about整个模块 
        // 获取 export 导出的内容
        res.aoubt()
        // 获取 export default 导出的内容
        res.default()
    })
}