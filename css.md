# CSS

## 官方文档

https://www.w3.org/TR/?tag=css 

https://developer.mozilla.org/zhCN/docs/Web/CSS/Reference#%E5%85%B3%E9%94%AE%E5%AD%97%E7%B4%A2%E5%BC%95 

https://caniuse.com/查询CSS属性的可用性

## 简介

- 认识

![认识css](C:\Users\admin\Desktop\系统笔记\img_css\认识css.png)

------



- 历史

![历史](C:\Users\admin\Desktop\系统笔记\img_css\历史.png)

------



- 编写

![编写](C:\Users\admin\Desktop\系统笔记\img_css\编写.png)

------



- 使用

![使用](C:\Users\admin\Desktop\系统笔记\img_css\使用.png)

------



- 内联

![内联](C:\Users\admin\Desktop\系统笔记\img_css\内联.png)

------



- 内部

![内部](C:\Users\admin\Desktop\系统笔记\img_css\内部.png)

------



- 外部

![外部](C:\Users\admin\Desktop\系统笔记\img_css\外部.png)

------



- 引入
  - @import
  - 主入口文件使用 @import 引入 其他样式文件

![import](C:\Users\admin\Desktop\系统笔记\img_css\import.png)

------



- link 标签 
  - href 引入 主入口文件
  - rel 类型
  - https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types 
  - 性能优化
    - `dns-prefetch `
    - 域名预解析

![link](C:\Users\admin\Desktop\系统笔记\img_css\link.png)

------



- 注释

![注释](C:\Users\admin\Desktop\系统笔记\img_css\注释.png)

------



## 常用属性

- css常用属性.xmind

## 进制

- 简介

![进制](C:\Users\admin\Desktop\系统笔记\img_css\进制.png)

------

- 十进制

![十进制](C:\Users\admin\Desktop\系统笔记\img_css\十进制.png)

------



- 计算机进制

![计算机进制](C:\Users\admin\Desktop\系统笔记\img_css\计算机进制.png)

------



- 进制转换

![进制转换](C:\Users\admin\Desktop\系统笔记\img_css\进制转换.png)

------

## 颜色

- 关键词
- RGB

![rgb](C:\Users\admin\Desktop\系统笔记\img_css\rgb.png)

------



- 十六进制

![16进制](C:\Users\admin\Desktop\系统笔记\img_css\16进制.png)

------

## 浏览器渲染流程

![浏览器渲染](C:\Users\admin\Desktop\系统笔记\img_css\浏览器渲染.png)

------

- 浏览器先加载html，从上往下解析html，在head标签中遇到引入css时，去下载css，不会等待css的下载，继续解析body标签中的html，将html转成树形结构，这时不会渲染页面，需要解析css，把css样式添加到树结构，这时渲染页面

