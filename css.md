## CSS

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

### CSS-文本

- text-decoration 

![text-decoration](C:\Users\admin\Desktop\系统笔记\img_css\text-decoration.png)

------



- text-transform 

![text-transform](C:\Users\admin\Desktop\系统笔记\img_css\text-transform.png)

------



- text-indent 
  - text-indent用于设置第一行内容的缩进
  - text-indent: 2em; 刚好是缩进2个文字 
- text-align 
  - 文本和图片都可以
  - 行内级元素（内联块 inline-block）的对齐方式，块元素、内联元素不生效

![text-align](C:\Users\admin\Desktop\系统笔记\img_css\text-align.png)

------

- text-align :justify

  - 除了最后一行（避免中间间隔空隙太大），其他的左右对齐

  ![text-jus](C:\Users\admin\Desktop\系统笔记\img_css\text-jus.png)

  ------

  - text-align-last:justify   最后一行需要单独设置

- spacing 
  - letter-spacing、word-spacing分别用于设置字母之间、单词之间的间距 
  - 默认是0，可以设置为负数 

### CSS属性-字体 

- font-size 
  - 可以继承
  - %不一定是父元素的

![font-size](C:\Users\admin\Desktop\系统笔记\img_css\font-size.png)

------



- font-family 
  - 在操作系统中查找定义的字体，系统中如果没有就使用系统的默认字体
  - 设置多个做备用字体，逗号分隔
  - 包含空格特殊字符使用引号包裹
  - 参考知名网站
  - 或者使用网络字体 @font-face

![font-family](C:\Users\admin\Desktop\系统笔记\img_css\font-family.png)

------



- font-weight 

![font-weight](C:\Users\admin\Desktop\系统笔记\img_css\font-weight.png)

------



- font-style 

![font-style](C:\Users\admin\Desktop\系统笔记\img_css\font-style.png)

------



- font-variant 

![font-variant](C:\Users\admin\Desktop\系统笔记\img_css\font-variant.png)

------



- line-height 
  - 行高是两基线之间的距离 = 文字所在行的高度
    - 文字所在行的高度 - 文字高度 = 剩余的高度，再平均分布给上下，文字就居中了
  - 底线和顶线之间的是行距
  - 只能用于文本
  - 倍数是基于font-size

![line-height](C:\Users\admin\Desktop\系统笔记\img_css\line-height.png)

------

![行高1](C:\Users\admin\Desktop\系统笔记\img_css\行高1.png)

------

![行高2](C:\Users\admin\Desktop\系统笔记\img_css\行高2.png)

------

![行高3](C:\Users\admin\Desktop\系统笔记\img_css\行高3.png)

------



- font 

![font](C:\Users\admin\Desktop\系统笔记\img_css\font.png)

------

### CSS选择器 

![CSS选择器](C:\Users\admin\Desktop\系统笔记\img_css\CSS选择器.png)

------



- 通用选择器 
  - *
    - 星号

![通用选择器](C:\Users\admin\Desktop\系统笔记\img_css\通用选择器.png)

------



- 简单选择器 

![简单选择器](C:\Users\admin\Desktop\系统笔记\img_css\简单选择器.png)

------



- id 

![id](C:\Users\admin\Desktop\系统笔记\img_css\id.png)

------



- 属性选择器(attribute selectors) 

```js
  <style>
    [title] {
      color: blue;
    }
    [title=box] {
      color: red;
    }
  </style>
<body>
  
  <div title="div">div元素1</div>
  <div title="box">div元素2</div>
  <div title="">div元素3</div>

</body>
```



![属性选择器(attribute selectors)](C:\Users\admin\Desktop\系统笔记\img_css\属性选择器(attribute selectors).png)

------



- 后代选择器（descendant combinator） 
  - 所有后代
  - 直接后代

![后代选择器（descendant combinator）](C:\Users\admin\Desktop\系统笔记\img_css\后代选择器（descendant combinator）.png)

------



- 兄弟选择器(sibling combinator) 
  - 相邻兄弟 +
  - 所有兄弟 ~
  - 不包含它自身

![兄弟选择器(sibling combinator)](C:\Users\admin\Desktop\系统笔记\img_css\兄弟选择器(sibling combinator).png)

------



- 选择器组 – 交集选择器 

  - 交集：并且。中间没有空格。标签是div的，并且class是one的

  ```css
  div.one {
        color: red;
      }
  ```

  - 并集：或者。给多个元素设置的时候

  ```css
  .one, .two {
        color: blue;
        font-size: 20px;
      }
  ```

![选择器组 – 交集选择器](C:\Users\admin\Desktop\系统笔记\img_css\选择器组 – 交集选择器.png)

------



### 认识伪类 

- https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes
- 伪类(pseudo-classes) 
- 伪类是**选择器**的一种，用于选择处于特定状态的元素
- 伪类是一个冒号 : 

![伪类(pseudo-classes)](C:\Users\admin\Desktop\系统笔记\img_css\伪类(pseudo-classes).png)

------



- 动态伪类（dynamic pseudo-classes) 
  - 固定的书写顺序

![动态伪类](C:\Users\admin\Desktop\系统笔记\img_css\动态伪类.png)

------



- 动态伪类 - :focus 
  - 获取到焦点时

![动态伪类focus](C:\Users\admin\Desktop\系统笔记\img_css\动态伪类focus.png)

------



- 伪元素（pseudo-elements） 
  - 选择元素中某个具体的部分
  - 写1个或者2个 冒号 都可以，一般写2个

![伪元素（pseudo-elements）](C:\Users\admin\Desktop\系统笔记\img_css\伪元素（pseudo-elements）.png)

------



- 伪元素 - ::first-line - ::first-letter(了解) 

![伪元素 first-line first-letter](C:\Users\admin\Desktop\系统笔记\img_css\伪元素 first-line first-letter.png)

------



- 伪元素 - ::before和::after(常用) 
  - 为行内级元素（内联元素）不支持设置宽高
    - display 改变

![伪元素 before和after(常用)](C:\Users\admin\Desktop\系统笔记\img_css\伪元素 before和after(常用).png)

------

- 目标伪类
  - 当访问地址中的参数 #theme 和 元素的 id theme 相同时，:target会触发设置想添加的样式
  - 再加上 a 标签的href等于  #theme，可以在访问地址的时候，跳转到之前访问的位置，之前查看的是，主题01，复制链接给别人，别人打开查看到的还是，主题01，主题01为选中的
  - www.***.html?#theme01

![目标伪类](C:\Users\admin\Desktop\系统笔记\img_css\目标伪类.png)

------

```HTML

  <style>
    :target {
      color: red;
    }
  </style>

<body>

  <a href="#theme01">主题01</a>
  <a href="#theme02">主题02</a>
  <a href="#theme03">主题03</a>
  
  <h2 id="theme01">主题01</h2>
  <h2 id="theme02">主题02</h2>
  <h2 id="theme03">主题03</h2>

</body>
```

- 语言伪类
  - 选中 某种语言的元素设置样式

```html
  <style>
    :lang(zh) {
      color: red;
    }
  </style>
<body>
  
  <p lang="en">哈哈哈</p>
  <p lang="zh-CN">呵呵呵</p>
  <p lang="en">嘿嘿嘿</p>
  <p lang="zh-CN">嘻嘻嘻</p>

</body>
```

### em

- 自身字体大小
  - 父级字体大小
    - 浏览器默认字体大小

### CSS的属性继承

-  继承的是计算后的值
- 不能继承的，可以使用 `inherit ` 强制继承

![CSS的属性继承](C:\Users\admin\Desktop\系统笔记\img_css\CSS的属性继承.png)

------



- 常见的继承属性 

![常见的继承属性](C:\Users\admin\Desktop\系统笔记\img_css\常见的继承属性.png)

------



### CSS属性的层叠 

![CSS属性的层叠](C:\Users\admin\Desktop\系统笔记\img_css\CSS属性的层叠.png)

------



### 选择器的权重 

![选择器的权重](C:\Users\admin\Desktop\系统笔记\img_css\选择器的权重.png)

------



### HTML元素的类型 

![HTML元素的类型](C:\Users\admin\Desktop\系统笔记\img_css\HTML元素的类型.png)

------



### CSS属性 - display 

![CSS属性 - display](C:\Users\admin\Desktop\系统笔记\img_css\CSS属性 - display.png)

------



### display值的特性(非常重要) 

```HTML
  <!-- 块级元素 -->
  <div>我是div元素</div>

  <!-- 行内级元素设置宽度和高度不生效??? 行内非替换元素不可以设置宽高 -->
  <span>我是span元素</span>

  <!-- 补充:  -->
  <!-- img元素: inline - replaced -> 行内替换元素 -->
  <!-- 行内替换元素: 
    1> 和其他的行内级元素在同一行显示
    2> 可以设置宽度和高度 
  -->
  <img src="../images/gouwujie01.jpg" alt="">
  <input type="text">
```



![display值的特性(非常重要)](C:\Users\admin\Desktop\系统笔记\img_css\display值的特性(非常重要).png)

------



### 编写HTML时的注意事项 

![编写HTML时的注意事项](C:\Users\admin\Desktop\系统笔记\img_css\编写HTML时的注意事项.png)

------



### 元素隐藏方法 

- transparent 透明

![元素隐藏方法](C:\Users\admin\Desktop\系统笔记\img_css\元素隐藏方法.png)

------



### CSS属性 - overflow 

![CSS属性 - overflow](C:\Users\admin\Desktop\系统笔记\img_css\CSS属性 - overflow.png)

------



### CSS样式不生效技巧 

![CSS样式不生效技巧](C:\Users\admin\Desktop\系统笔记\img_css\CSS样式不生效技巧.png)

------

## CSS盒子模型 

### 盒子模型(Box Model) 

![盒子模型(Box Model)](C:\Users\admin\Desktop\系统笔记\img_css\盒子模型(Box Model).png)

------



### 盒子模型的四边 

![盒子模型的四边](C:\Users\admin\Desktop\系统笔记\img_css\盒子模型的四边.png)

------



### auto

- auto 交给浏览器来决定 
- 块级元素: 独占一行(占的是父元素)

### 内容 – 宽度和高度 

- 宽、高的默认值是 auto

```CSS
	 /* 最大的宽度: 750px */
      max-width: 750px;

      /* 最小的宽度: 500px */
      min-width: 600px;

      /* 块级元素居中 */
      margin: 0 auto;
```



![内容 – 宽度和高度](C:\Users\admin\Desktop\系统笔记\img_css\内容 – 宽度和高度.png)

------



### 内边距 - padding 

![内边距 - padding](C:\Users\admin\Desktop\系统笔记\img_css\内边距 - padding.png)

------



### padding的其他值 

![padding的其他值](C:\Users\admin\Desktop\系统笔记\img_css\padding的其他值.png)

------



### 边框 - border 

![边框 - border](C:\Users\admin\Desktop\系统笔记\img_css\边框 - border.png)

------



### 设置边框的方式 

![设置边框的方式](C:\Users\admin\Desktop\系统笔记\img_css\设置边框的方式.png)

------



### 边框的样式设置值 

![边框的样式设置值](C:\Users\admin\Desktop\系统笔记\img_css\边框的样式设置值.png)

------



### 同时设置的方式 

![同时设置的方式](C:\Users\admin\Desktop\系统笔记\img_css\同时设置的方式.png)

------



### 圆角 – border-radius 

![圆角 – border-radius](C:\Users\admin\Desktop\系统笔记\img_css\圆角 – border-radius.png)

------



### border-radius补充 

![border-radius补充](C:\Users\admin\Desktop\系统笔记\img_css\border-radius补充.png)

------



### 外边距 - margin 

- 行内级元素设置margin 无效

![外边距 - margin](C:\Users\admin\Desktop\系统笔记\img_css\外边距 - margin.png)

------



### margin的其他值 

![margin的其他值](C:\Users\admin\Desktop\系统笔记\img_css\margin的其他值.png)

------



### 上下margin的传递 

![上下margin的传递](C:\Users\admin\Desktop\系统笔记\img_css\上下margin的传递.png)

------



### 上下margin的折叠 

![上下margin的折叠](C:\Users\admin\Desktop\系统笔记\img_css\上下margin的折叠.png)

------



### 上下margin折叠的具体情况 

![上下margin折叠的情况](C:\Users\admin\Desktop\系统笔记\img_css\上下margin折叠的情况.png)

------



### 外轮廓 - outline 

![外轮廓 - outline](C:\Users\admin\Desktop\系统笔记\img_css\外轮廓 - outline.png)

------



### 盒子阴影 – box-shadow 

`box-shadow: 5px 5px 5px 5px #0f0, 10px 10px 5px 5px #00f; `

![盒子阴影 – box-shadow](C:\Users\admin\Desktop\系统笔记\img_css\盒子阴影 – box-shadow.png)

------



### 盒子阴影 – 在线查看 

![盒子阴影 – 在线查看](C:\Users\admin\Desktop\系统笔记\img_css\盒子阴影 – 在线查看.png)

------



### 文字阴影 - text-shadow 

```CSS
text-shadow: 5px 5px 5px #f00, 
             5px -5px 5px #0f0,
             5px 5px 5px #00f;
```

![文字阴影 - text-shadow](C:\Users\admin\Desktop\系统笔记\img_css\文字阴影 - text-shadow.png)

------



### 行内非替换元素的注意事项 

- 行内非替换元素指的是 内联元素
- 上下 padding、border，不占据空间，但会撑起来
- 上下 margin，不生效
  - 内联元素一般是放在段落一起的，给某个单独内联元素添加会破坏整体性

![行内非替换元素的注意事项](C:\Users\admin\Desktop\系统笔记\img_css\行内非替换元素的注意事项.png)

------



### 前景色、背景色

- 背景色会设置到 border 下面
  - background-color
- 前景色会在 border 没有设置颜色时，显示 color 颜色
  - color

### CSS属性 - box-sizing 

![CSS属性 - box-sizing](C:\Users\admin\Desktop\系统笔记\img_css\CSS属性 - box-sizing.png)

------



### box-sizing: content-box 

- 不包含margin，margin是盒子外面的

![box-sizing-content-box](C:\Users\admin\Desktop\系统笔记\img_css\box-sizing-content-box.png)

------



### box-sizing: border-box 

- 当 padding border增加时，content会随之缩小

![box-sizing-border-box](C:\Users\admin\Desktop\系统笔记\img_css\box-sizing-border-box.png)

------



### IE盒子模型 

![IE盒子模型](C:\Users\admin\Desktop\系统笔记\img_css\IE盒子模型.png)

------



### 元素的水平居中方案 

- 块占据整行，在设置了宽度后，没办法占据整行，所以margin-right 由 0 变为 整行 - 块设置的宽度，这样才能达到占据整行
- 左右 margin auto 会把 margin 平均分配到左右，块就水平居中了
  - margin : 0 auto
    - 指的是 上下margin 0
    - 左右 margin auto
- 占据整行，指的是占据父级元素的整行

![元素的水平居中方案](C:\Users\admin\Desktop\系统笔记\img_css\元素的水平居中方案.png)

------

- 行内级元素指的是内联元素

### 查看元素属性

- 右键检查
  - :hov

### 省略号

这里继续，101，重新整理

- 一行显示省略号。默认P元素宽度是auto，如果设置nowrap，宽度会自动增加
  - 给P的父级添加固定宽度

```CSS
	 /* 一行显示...方法 */
      
      /* 换行 */
      white-space: nowrap;  
      /* 超出隐藏 */
      overflow: hidden;
      /* 文本显示省略号 */
      text-overflow: ellipsis;
```

- 多行显示省略号。
  - display: -webkit-box  设置为  -webkit-box（布局方案）

```CSS
	  overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
	  /* 保留2行 */
      -webkit-line-clamp: 2;
	  /* box方向为vertical */
      -webkit-box-orient: vertical;
```

## CSS设置背景 

### background-image 

![background-image](C:\Users\admin\Desktop\系统笔记\img_css\background-image.png)

------



### background-repeat 

![background-repeat](C:\Users\admin\Desktop\系统笔记\img_css\background-repeat.png)

------



### background-size 

![background-size](C:\Users\admin\Desktop\系统笔记\img_css\background-size.png)

------



### background-position 

![background-position](C:\Users\admin\Desktop\系统笔记\img_css\background-position.png)

------



### background-attachment 

![background-attachment](C:\Users\admin\Desktop\系统笔记\img_css\background-attachment.png)

------



### background 

![background](C:\Users\admin\Desktop\系统笔记\img_css\background.png)

------



### background-image和img对比 

![background-image和img对比](C:\Users\admin\Desktop\系统笔记\img_css\background-image和img对比.png)

------

## CSS列表

### 有序列表 – ol – li 

![有序列表 – ol – li](C:\Users\admin\Desktop\系统笔记\img_css\有序列表 – ol – li.png)

------



### 无序列表 – ul - li 

![无序列表 – ul - li](C:\Users\admin\Desktop\系统笔记\img_css\无序列表 – ul - li.png)

------



### 定义列表 – dl – dt - dd 

![定义列表 – dl – dt - dd](C:\Users\admin\Desktop\系统笔记\img_css\定义列表 – dl – dt - dd.png)

------

## CSS表格

### 表格常见的元素 

![表格常见的元素](C:\Users\admin\Desktop\系统笔记\img_css\表格常见的元素.png)

------

