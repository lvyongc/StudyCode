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

- 一行显示省略号。
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
 	 /* 文本显示省略号 */
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

- banner 响应式时永远显示中心区域
  - `background-position: center `

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

### 水平居中总结

- 内联元素
  - 父级，text-akign:center
  - 让内容水平居中
- 块元素
  - 居中元素本身
  - margin:0 aotu

### CSS编写样式建议

- 1-先完成结构
  - 2-重置样式(body/a/ul)
- 3-先整体, 后局部
  - 3.1-顺序: 按照从外往里. 从上往下
- 4-去除重复的代码(css)
  - 4.1-将重复的逻辑放到一个单独的class中(.icon)
- 5-不同的代码抽到不同的class(.new .hot)
  - 5.1-通过累加class，改变样式
- 补充
  - .icon.new（中间没有空格）
  - 找到同时有.icon.new两个class的元素

```css
   /* 内容相关 */
    ul > li .content {
      display: inline;
    }

    /* 图标相关的 */
    ul > li .icon {
      position: relative;
      top: 2px;
      left: 4px;

      display: inline-block;
      width: 16px;
      height: 16px;
      background-image: url(../images/new_icon.svg);
    }

    ul > li .new {
      background-image: url(../images/new_icon.svg);
    }

    ul > li .hot {
      background-image: url(../images/hot_icon.svg);
    }
```

## CSS表格

### 表格常见的元素 

- 使用 css 来定制 表格的样式

![表格常见的元素](C:\Users\admin\Desktop\系统笔记\img_css\表格常见的元素.png)

------

### 表格的边框是分开的还是合并的 

- collapse

```css
table {
      border-collapse: collapse;
      text-align: center;
    }
/* 边框 */
td {
      border: 1px solid red;
      width: 100px;
      height: 30px;
    }
```

------

### 表格的其他元素 

![表格的其他元素](C:\Users\admin\Desktop\系统笔记\img_css\表格的其他元素.png)

------

### 单元格合并

![单元格合并](C:\Users\admin\Desktop\系统笔记\img_css\单元格合并.png)

------

## 常见的表单元素 

![常见的表单元素](C:\Users\admin\Desktop\系统笔记\img_css\常见的表单元素.png)

------

### input元素的使用 

![input元素的使用](C:\Users\admin\Desktop\系统笔记\img_css\input元素的使用.png)

------

### 布尔属性 

![布尔属性](C:\Users\admin\Desktop\系统笔记\img_css\布尔属性.png)

------

### 表单按钮 

![表单按钮](C:\Users\admin\Desktop\系统笔记\img_css\表单按钮.png)

- 当input设置了type时，并且在form中，不同的type会有不同的作用
  - reset 会清空 text

```html
<!-- 用input来实现按钮的效果 -->
  <form action="">
    <input type="text">
    <input type="date">

    <div>
      <input type="button" value="普通按钮">
      <button>普通按钮</button>
    </div>
    <!-- reset可以对form中的其他表单元素进行重置 -->
    <div>
      <input type="reset" value="重置按钮">
      <button type="reset">重置按钮</button>
    </div>
    <!-- submit可以对form中的其他表单元素进行提交(将数据提交给服务器) -->
    <div>
      <input type="submit" value="提交按钮">
      <button type="submit">提交按钮</button>
    </div>
  </form>
```

------

### input和label 

- inout作为子级且id和label的for，相同，取得关联

```html
<div>
    <label for="username">
      用户: 
      <input id="username" type="text">
    </label>
  </div>
  <div>
    <label for="password">
      密码: 
      <input id="password" type="password">
    </label>
  </div>
```

![input和label](C:\Users\admin\Desktop\系统笔记\img_css\input和label.png)

------

### radio 

- name 和 value 用于向服务器传值
- name的值sex，会作为 key
- value的值male，会作为 value
- sex=male

```html
<!-- url: http://www.baidu.com/s?sex=male -->
  
  <!-- 在类型为radio的input中, 如果name一样, 那么两个radio就会互斥 -->
  <form action="/abc">
    <label for="male">
      <input id="male" type="radio" name="sex" value="male">男
    </label>
    <label for="female">
      <input id="female" type="radio" name="sex" value="female">女
    </label>

    <button type="submit">提交按钮</button>
  </form>
```

![radio](C:\Users\admin\Desktop\系统笔记\img_css\radio.png)

------

### checkbox 

![checkbox](C:\Users\admin\Desktop\系统笔记\img_css\checkbox.png)

------

### textarea 

- name,value 用于提交作为key,value
- id,用于关联lable

![textarea](C:\Users\admin\Desktop\系统笔记\img_css\textarea.png)

------

### select和option 

- select的name用于提交作为key
- id,用于关联lable
- option的value 用于提交作为 value
- selected 是默认选中

```html
<select name="fruits" id="" multiple size="2">
    <option value="apple" selected>苹果</option>
    <option value="banana">香蕉</option>
    <option value="orange">橘子</option>
  </select>
```

![select和option](C:\Users\admin\Desktop\系统笔记\img_css\select和option.png)

------

### form常见的属性 

- 搜集 form 表单中所有的name和value，加入baidu.com/abc后作为参数

```html
  <form action="http://baidu.com/abc" method="post" target="_blank">
    <div>
      <label for="username">
        用户: <input id="username" type="text" name="username">
      </label>
    </div>
    <div>
      <label for="password">
        密码: <input id="password" type="password" name="password">
      </label>
    </div>

    <!-- 性别 -->
    <div>
      性别: 
      <label for="male">
        <input id="male" type="radio" name="sex" value="male">男
      </label>
      <label for="female">
        <input id="female" type="radio" name="sex" value="female">女
      </label>
    </div>

    <!-- 爱好 -->
    <div>
      爱好:
      <label for="basketball">
        <input id="basketball" type="checkbox" name="hobby" checked value="basketball">篮球
      </label>
      <label for="football">
        <input id="football" type="checkbox" name="hobby" value="football">足球
      </label>
    </div>

    <!-- 提交按钮 -->
    <button type="reset">重置内容</button>
    <button type="submit">提交内容</button>
  </form>
```

![form常见的属性](C:\Users\admin\Desktop\系统笔记\img_css\form常见的属性.png)

------

### nth-child 结构伪类选择器

- 参数 n 
- table tr:nth-child(-n + 2)
  - table 下 前2个 tr
  - -n+几就是前几个
  - n 代表 0 ~ 整数，0 1 2 3 4 5 。。。
  - n 为0和负数时，无效
  - -0+2=2 第二个
  - -1+2=1 第一个
  - -2+2=0 无效
  - -3+2=-1 无效

```css
	/* n的取值: 0和整数  */
    /* 0, 1, 2, 3, 4, 5, 6......... */
    table tr:nth-child(-n + 2) {
      font-weight: 700;
      font-size: 20px;
    }
```

### 属性选择器的使用

- 选中 table下的 tr 下的 td 的属性是 rowspan 的 td

```css
/* 属性选择器 */
    table tr td[rowspan] {
      font-weight: 700;
      font-size: 18px;
    }
```

- 属性
  - 这里的colspan 是属性

`<td colspan="6">课程表</td> `

## 识emmet语法 

- vscode 内置了 emmet 语言

![识emmet语法](C:\Users\admin\Desktop\系统笔记\img_css\识emmet语法.png)

------

### （>子代）和（+兄弟） 

- 图2：
  - 2个兄弟关系的div
    - 第一个是空div
    - 第二个div，有一个子级p
      - p有一个子级span
      - span和i是兄弟，所以i也是p的子级

![子代兄弟](C:\Users\admin\Desktop\系统笔记\img_css\子代兄弟.png)

------

### （*多个）和（^上一级 ）

- *后的数字，是生成几个
- 图2：
  - span^h1 
  - span的上一级，添加一个兄弟h1

![多个上一级](C:\Users\admin\Desktop\系统笔记\img_css\多个上一级.png)

------

### （）（分组） 

- footer和括号内的为兄弟

![分组](C:\Users\admin\Desktop\系统笔记\img_css\分组.png)

------

### 属性(id属性、class属性、普通属性) {}（内容） 

- 直接添加属性内容
- div的id是header
- 兄弟div的id是main，且子级class是container（不写标签默认是div）
- container的子级是a添加了href属性，值为空

![属性](C:\Users\admin\Desktop\系统笔记\img_css\属性.png)

- a 的 [] 是添加属性和属性值
- {} 是添加内容

------

### $（数字） 

- `ul>li{内容$}*5`
- ul有5个li子级，内容就是内容，且$加上了序号
  - $可以多个

```html
<ul>
    <li>列表内容1</li>
    <li>列表内容2</li>
    <li>列表内容3</li>
    <li>列表内容4</li>
    <li>列表内容5</li>
  </ul>
```

------

### 隐式标签 

- `.box`
  - 默认生成 `<div class="box"></div> `

![隐式标签](C:\Users\admin\Desktop\系统笔记\img_css\隐式标签.png)

- ul 下的标签是隐式标签 li，不用单独写

------

### CSS Emmet 

- 样式快捷写法
- `bd`
  - `border: 1px solid #000; `
- `bd1#cs`
  - c是颜色，s是solid
  - `border: 1px #ccc solid;`
- `dib`
  - `display: block;`

![CSS Emmet](C:\Users\admin\Desktop\系统笔记\img_css\CSS Emmet.png)

------

### 结构伪类 - :nth-child 

- 无类型限制

![结构伪类nth-child](C:\Users\admin\Desktop\系统笔记\img_css\结构伪类nth-child.png)

------

### 结构伪类 - :nth-last-child( ) 

![结构伪类nth-last-child](C:\Users\admin\Desktop\系统笔记\img_css\结构伪类nth-last-child.png)

------

### 结构伪类 - :nth-of-type( )、:nth-last-of-type( ) 

- 有类型限制

![结构伪类](C:\Users\admin\Desktop\系统笔记\img_css\结构伪类.png)

------

### 否定伪类（negation pseudo-class） 

![否定伪类](C:\Users\admin\Desktop\系统笔记\img_css\否定伪类.png)

------

## 额外补充

### border图形

- https://css-tricks.com/the-shapes-of-css/#top-of-site

```css
.box {
      width: 100px;
      height: 100px;
      /* 边框占据所有，且内容为透明 */
      border: 50px solid transparent;
      /* 上三角形添加颜色 */
      border-top-color: orange;
      /* 让边框属于100px中 */
      box-sizing: border-box;
      /* 旋转中心基于三角形的中心点，水平center，垂直是盒子的中心50%，三角形中心50的50，就是25% */
      transform-origin: center 25%;
      /* 旋转180度，不旋转就是向下的三角形 */
      transform: rotate(180deg); 
    }
```

### 网络字体

- Web Fonts即 
  - 自定义字体
    - 拿到、下载字体
    - 在css中使用字体
    - 把字体部署在静态服务器

#### Web fonts的工作原理 ![Web fonts的工作原理](C:\Users\admin\Desktop\系统笔记\img_css\Web fonts的工作原理.png)

------

#### 使用Web Fonts 

- 下载免费的、收费的

  - 或者使用设计师设计的字体

- 在css中使用

  - ttf文件存放font文件夹
  - 通过 @font-face 引入字体，设置字体名字和引入路径
  - 再指定元素，使用具体字体名字

  ```html
    <style>
      /* 将这个字体引入到网页中 */
      @font-face {
          /*自定义的字体名字*/
        font-family: "why";
          /*引入的字体路径*/
        src: url("./fonts/AaQingHuanYuanTi-2.ttf");
      }
      .box {
          /*使用字体名字*/
        font-family: "why";
      }
    </style>
    <div class="box">我是div元素</div>
  ```

![使用web字体](C:\Users\admin\Desktop\系统笔记\img_css\使用web字体.png)

------

#### web-fonts的兼容性 

- https://font.qqe2.com/

![web-fonts的兼容性](C:\Users\admin\Desktop\系统笔记\img_css\web-fonts的兼容性.png)

------

#### web fonts兼容性写法 

- 解决兼容适配
- https://font.qqe2.com/
  - 打开字体，下载压缩包，包含所有字体文件
  - 多个url ，写上所有字体文件，达到适配所有
    - 字体文件中的css文件，有写好的 @font-face 
    - 直接复制,修改引入路径
  - format，帮助浏览器快速识别字体的格式
  - 统一默认样式
    - `font-style: normal;`  ` font-weight: 400;`

```css
@font-face {
      font-family: "myfont";
      src: url("./fonts02/AaQingHuanYuanTi.eot"); /* IE9 */
      src: url("./fonts02/AaQingHuanYuanTi.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
      url("./fonts02/AaQingHuanYuanTi.woff") format("woff"), /* chrome、firefox */
      url("./fonts02/AaQingHuanYuanTi.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */
      url("./fonts02/AaQingHuanYuanTi.svg#uxfonteditor") format("svg"); /* iOS 4.1- */
      font-style: normal;
      font-weight: 400;
    }
    body {
      font-family: "myfont";
    }
```

![web fonts兼容性写法](C:\Users\admin\Desktop\系统笔记\img_css\web fonts兼容性写法.png)

------

### 字体图标

- https://www.iconfont.cn/
- 加入购物车，下载代码文件
- css文件、ttf文件，放入项目font文件夹中
- link引入font中的css文件，class使用具体图标，css改变图标样式

```css
/*引入*/
<link rel="stylesheet" href="./fonts03/iconfont.css">
  <style>
/* 改变*/
    .icon-shouye {
      font-size: 30px;
      color: red;
    }
  </style>
/* iconfont是必写的，第二个class就是对应的不同图标 */
<i class="iconfont icon-shouye"></i>
```

#### 字体图标 

![字体图标](C:\Users\admin\Desktop\系统笔记\img_css\字体图标.png)

------

#### 字体图标的使用 

![字体图标的使用](C:\Users\admin\Desktop\系统笔记\img_css\字体图标的使用.png)

------

#### 精灵图 CSS Sprite 

![精灵图 CSS Sprite](C:\Users\admin\Desktop\系统笔记\img_css\精灵图 CSS Sprite.png)

------

#### 精灵图的使用 

- https://www.toptal.com/developers/css/sprite-generator
  - 生成精灵图
- http://www.spritecow.com
  - 获取精灵图中每个图标的具体位置

```css
  <style>
    .topbar {
      background-image: url(../images/topbar_sprite.png);
      background-repeat: no-repeat;
      display: inline-block;
    }
    i.hot-icon {
      background-position: -192px 0;
      width: 26px;
	    height: 13px;
    }
    i.logo-icon {
      background-position: 0 -19px;
      width: 157px;
	    height: 33px;
    }
  </style>
  <div class="box">
    <i class="topbar hot-icon"></i>
    <i class="topbar logo-icon"></i
  </div>
```

![精灵图的使用](C:\Users\admin\Desktop\系统笔记\img_css\精灵图的使用.png)

------

#### cusor 

![cusor](C:\Users\admin\Desktop\系统笔记\img_css\cusor.png)

------

## CSS元素定位 

### 标准流（Normal Flow） 

![标准流（Normal Flow）](C:\Users\admin\Desktop\系统笔记\img_css\标准流（Normal Flow）.png)

------



### margin-padding位置调整 

![margin-padding位置调整](C:\Users\admin\Desktop\系统笔记\img_css\margin-padding位置调整.png)

------

### 元素的定位 

- 定位允许您从**正常的文档流布局中取出元素**，并使它们具有不同的行为: 
  -  例如放在另一个元素的上面; 
  -  或者始终保持在浏览器视窗内的同一位置 

### position属性 

![position属性](C:\Users\admin\Desktop\系统笔记\img_css\position属性.png)

------

#### 静态定位 - static 

- position属性的默认值
  - 元素按照normal flow（标准流）布局 
  - left 、right、top、bottom 没有任何作用 

#### 相对定位 - relative 

- 页面放大缩小，img的中心一直保持在页面的中心 
  - 方案一：img的margin是%时，是相对于它的包含块的宽度，就是div的宽度
    - translate中的百分比是相对于自己
  - 方案二：背景图，center

```css
.box {
      height: 489px;
      background-color: #f00;
      /* 超出隐藏，不出现滚动条 */
      overflow: hidden;
    }

    /*页面放大缩小，img的中心一直保持在页面的中心*/
    .box img {
      position: relative;
      /* left: 图片的一半 */
      /* left: -960px; */
        
      /* translate中的百分比是相对于自己 */
      transform: translate(-50%);

      /* 向右边移动div的一半
        img的margin是%时，是相对于它的包含块的宽度，就是div的宽度
      */
      margin-left: 50%;
    }

  <div class="box">
    <img src="../images/mhxy.jpg" alt="">
  </div>
```

```css
.box {
      height: 489px;
      background-color: #f00;
      background: url(../images/mhxy.jpg) center;
    }
<div class="box"></div>
```

![相对定位 - relative](C:\Users\admin\Desktop\系统笔记\img_css\相对定位 - relative.png)

------

#### 固定定位 - fixed 

![固定定位 - fixed](C:\Users\admin\Desktop\系统笔记\img_css\固定定位 - fixed.png)

------

#### 画布 和 视口 

![画布 和 视口](C:\Users\admin\Desktop\系统笔记\img_css\画布 和 视口.png)

------

#### 定位元素的特点 

![定位元素的特点](C:\Users\admin\Desktop\系统笔记\img_css\定位元素的特点.png)

------

#### 绝对定位 - absolute 

![绝对定位 - absolute](C:\Users\admin\Desktop\系统笔记\img_css\绝对定位 - absolute.png)

------

![绝对定位2](C:\Users\admin\Desktop\系统笔记\img_css\绝对定位2.png)

------

#### 子绝父相 

- 绝对定位是相对于最近的一个定位元素

![子绝父相](C:\Users\admin\Desktop\系统笔记\img_css\子绝父相.png)

------



#### 粘性定位 - sticky 

![粘性定位 - sticky](C:\Users\admin\Desktop\系统笔记\img_css\粘性定位 - sticky.png)

------



#### position值对比 

![position值对比](C:\Users\admin\Desktop\系统笔记\img_css\position值对比.png)

------



### CSS属性 - z-index 

![CSS属性 - z-index](C:\Users\admin\Desktop\系统笔记\img_css\CSS属性 - z-index.png)

------

