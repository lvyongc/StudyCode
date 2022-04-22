## 第六章：float浮动布局

#### 浮动特性详解

- 使用场景

浮动不要乱用，只有在页面布局，左右排列这样的情况的时候，我们才会使用float

如果当前这一行只有一个块标签，这样的情况，我们是不需要去用float的



- 浮动书写：

 float: left;

float: right;

float: none;（隐藏）

float: inherit;（继承）



- 浮动的特性：

Δ 一行可以显示多个元素

Δ 支持宽高

Δ 宽高由内容撑开

Δ 会按照指定方向进行浮动，遇到父级的边界或者上一个浮动元素（避免同级浮动元素覆盖，所以有这个规定）的时候停止浮动

Δ 元素浮动后，上下margin不再叠加

Δ 元素浮动后，可以阻止子级元素的margin传递



- 浮动的问题：

 脱离文档流

 

#### 什么是文档流？

“normal flow” 文档流，也叫正常流、普通流。指页面中默认布局：元素从左至右、从上到下显示。



- 什么是脱离文档流？

从正常流布局中脱离出来，导致没有高度，位置让出来，下面的自动替上去，本身又没有消失，导致第三个放到了第二个的位置并且在第二个下面



- 为什么文字可以围绕在浮动元素的周围？

文本流（文字和文字）：文字会认同浮动元素所占有的位置，围绕它进行布局，也就是浮动元素并不会脱离文本流，只会脱离文档流（元素和元素）



## 第七章：clear及BFC清除浮动



因为子级的三个盒子浮动，脱离了文档流，所以没有撑开父级的高度，从边框可以看到父级是没有高度的

#### 清除浮动的方案

1. 如果可以使用固定高度，可以直接给父级添加固定高度

2. 利用`<br/>`标签达到清除浮动的效果

   换行标签，会在当前位置另起一行，可以利用br标签清除浮动的元素，语法：

   ```JS
   <br clear="all" />
   ```

   clear属性值：left / right / all

   left：清除左侧的浮动元素

   right：清除右侧的浮动元素

   all：清除左右两侧浮动的元素

   

   ***\*clear属性\****清除浮动

      语法：clear: left / right / both /none；

   clear的特性：

   \- 只会对写在它前面的浮动元素起效，后面的清除不了

   \- 清除指定方向的浮动

   \- 只有添加给块标签才是有效的，并且是具有独占一行效果的块

    
   
   4、***\*伪元素\****
   
   伪元素：利用css给一个标签创建出来的子级元素，该元素在页面中真实存在，但是在html中并不存在。

利用content可以添加内容，所有的样式针对该内容进行设置

● before：往指定的标签的内部的 前 添加内容

● after：往指定的标签的内部的 后 添加内容

***\*content可以添加的内容：\****

- 文字

- 调用当前元素的属性

`content: attr(href);`

- url() 引用媒体文件

`div::before{content: url(mouse.jpg);}`

- 添加图标

http://fontawesome.dashgame.com/

借助一些现有的图标库，通过content添加

这样的图标，我们称为字体图标，可以像字体一样操作

font-size设置大小

color设置颜色

 ```CSS
<link rel="stylesheet" href="css/font-awesome.css">
    <style>
        span::after{
            content: '\f2ba';
            font: 14px/1 FontAwesome;
            display: inline-block;
        }
    </style>
</head>
<body>
    <span></span>
</body>
 ```



#### 利用伪元素清除浮动

Δ after给当前父级添加一个，处于最后位置的子元素（clear只对前面的元素有效）

Δ content 添加内容

Δ display:block 只有添加给块标签有效

Δ clear:both 同时清除左右方向的浮动

 

***\*！！！！！！！！！！！ 所以，任何一项都不可以丢哦！！！！！\****

 ```CSS
<style>
		伪元素清除浮动作为公共样式，谁要清除浮动就给谁加class
		clearfix
        .clearfix::after{
            content: '';
            display: block;
            clear: both;
        }
    </style>
</head>

<body>
    <div id="box" class="clearfix">
    </div>
</body>
 ```



#### BFC ：

（Block Formatting Context ）块级格式化上下文

 

 一个独立渲染区域的名称（布局环境的名字），只有（块元素）Block-level box参与，它规定了内部的Block-level box 如何布局，并且不影响BFC区域以外的内容，当然BFC以外的也影响不了里面的。

 

***\*BFC的作用：\****



- 清除浮动（浮动之后变为块元素），解决父级高度塌陷问题:



- 阻止margin的传递:



- 不被浮动元素覆盖:



***\*BFC的触发条件：\****

\- float值不为none;

\- overflow值不为visible

\- display的值为inline-block、table-cell（表格单元格）、table-caption（表格标题）

\- position的值为absolute 、 fixed

 

***\*overflow - 溢出\****

overflow: visible; 默认可见

overflow: hidden; 隐藏

overflow: auto; 超出才显示滚动条

overflow: scroll; 强制出现滚动条



***\*text-overflow - 文字溢出\****

text-overflow: clip; 裁切

text-overflow: ellipsis; 省略号

 

***\* 省略号使用的时候 注意结合 overflow：hidden 和 white-space：nowrap\****

```CSS
<style>
        div{
            width: 250px;
            height: 30px;
            background: red;
            text-overflow: ellipsis;	
            overflow: hidden;		隐藏
            white-space: nowrap;	显示一行
        }
    </style>
</head>
<body>
    <div>
        这是文字
        这是文字
        这是文字
        这是文字
        这是文字
        这是文字
    </div>
</body>
```

***\*清除浮动方法这么多~ 到底用哪个呢？？\****

1. 看一下是否已经触发BFC

2. 如果不需要内容自动撑开高度的，可以优先加固定高度

3. 利用after伪类结合clear

 

***\*clear的特性\****

\- 只对clear前面的元素有效

\- 清除指定方向浮动

\- 只有添加给块标签才有效

## 第八章：布局定位

#### 相对定位、绝对定位、层级

##### position定位

***\*属性书写：\****

position: static; 静态定位

position: relative; 相对定位

position: absolute; 绝对定位，***\*绝对定位\****是***\*根据document\****进行定位的

position: fixed; 固定定位



***\*属性详解：\****

- position: static; 默认：静态 （没有定位）



-  position: relative; 相对定位

特性：

Δ 可以利用 top、bottom、left、right设置偏移值

Δ 位移方向 参照 自己当前位置

Δ 不设置偏移方向，元素不发生位置变化

Δ 元素移动后，原始位置会被保留（不脱离文档流）

Δ 提升层级



- position: absolute; 绝对定位

特性：

Δ 元素脱离文档流

Δ 内联标签可以支持宽高

Δ 块标签不设置宽高的情况下，宽高内容撑开

Δ 可以利用top、bottom、left、right设置偏移值

Δ 位移方向 参照 定位父级的位置，没有定位父级，根据document位置

Δ 一般我们用相对定位 作为 绝对定位的定位父级

Δ 提升层级

Δ 触发BFC布局环境

 

top、left、bottom、right，可以接受数值类型：

\- px

\- %（百分比的计算根据定位父级 )



##### 层级

***\*同级元素情况\****

1. 定位会提高层级，除了static

2. 后面的定位元素层级，高于前面的定位元素层级

***\*嵌套元素情况\****

子级的层级高于父级的层级

 

***\*改变层级的属性：\****z-index: 1;

特性：

Δ 只能加给定位元素

Δ 数值越大层级越高，可以接受负数

Δ 建议同级元素之间比较层级



***\*得到一个和可视区一样大小的元素\****

因为html、body都是没有高度的，百分比是根据父级来进行计算的，所以需要给html、body的高度都设置为100%才可以~



***\*单行文本省略号，需要以下属性结合使用：\****

text-overflow: ellipsis; 

overflow：hidden;

white-space：nowrap;



##### 多行省略

`-webkit-line-clamp: <number>`多行文字溢出

▲  <number> 行数，必须大于0。

还在草案阶段，并为正式发布。

 

▲ 需要配合另外两条属性一起使用

-webkit-line-clamp:3; 

display: -webkit-box; 把当前盒子转为弹性盒子

-webkit-box-orient: vertical; 将弹性盒子里的子级排列方式统一为垂直

 ```CSS
<style>
        div{
            width: 300px;
            background: pink;
            -webkit-line-clamp:4;	显示行数为4行
            display: -webkit-box;	把当前盒子转为弹性盒子
            -webkit-box-orient: vertical;	将弹性盒子里的子级排列方式统一为垂直
            overflow: hidden;	超出隐藏
        }
    </style>
</head>
<body>
    <div>
        多行省略
    </div>
</body>
 ```



***\*为什么这些样式前面都有 -webkit- ？\**** 

有一些样式，是浏览器的私有属性，只存在于该浏览器下，并没有纳入规范之中。

而 -webkit- 是 以Webkit为内核的浏览器，定下来的前缀。

 

***\*浏览器内核：\****

| 浏览器内核 | 浏览器代表     | 对应前缀 |
| ---------- | -------------- | -------- |
| Trident    | IE             | -ms-     |
| Gecko      | Firefox        | -moz-    |
| WebKit     | Chrome、Safari | -webkit- |



https://caniuse.com/ Can I Use 我能用嘛？

***\*这个网址可以看到样式在浏览器的支持情况，以及是否需要添加前缀\****

 

● 优点：

使用简单方便

● 缺点：

浏览器支持情况非常差

 

***\*方案二：利用定位\****

```CSS
<style>
        div{
            line-height: 1.2em;		行高是字体大小的1.2倍
            /* height: 3.6em; */
            max-height: 3.6em;		最大行数是3倍，就是3行1.2*3=3.6，超过3行方块跟随文字到第四行
            						超出的隐藏，所以超过3行显示省略号，不超过显示方块盖住省略号
            border: 2px solid red;
            overflow: hidden;		超出隐藏
            padding-right: 1em;		留出位置用来显示省略号
            text-align: justify;	加上文字、数字、字母导致每行对不齐，加上是让它平均分布
            position: relative;		作为定位父级
            /* max-height: 3.6em;
            overflow: hidden;
            padding-right: 1em;
            text-align: justify;
            position: relative;
            border: 2px solid #000;
            margin: 0 auto;
            width: 400px;  */
        }
        div::before{				伪元素来添加省略号，伪元素写两个冒号，伪类写一个冒号
            content: '...';			用来放内容
            position: absolute;		定位
            right: 0;				具体的位置
            bottom: 0;
        }
        div::after{					伪元素添加方块来盖住省略号
            content: '';
            position: absolute;
            width: 1em;
            height: 1.2em;
            background:#fff;
            right: 0;				不设置bottom，让它跟随文字对齐底部		
        }
    </style>
</head>
<body>
    <div>
        多行省
    </div>
</body>
```



实现原理：

0. 限制3行，方块跟着文字，超出3行，方块在第四行，省略号就出来了，3行内，方块在第三行，盖住了省略号

1. 准备padding-right:1em的距离，来放置...省略号，差不多1个字体大小

2. 利用行高来限制整个高度

3. 用伪元素准备一个...放到最后的位置

4. 再准备一个伪元素用于不需要省略号的时候，盖住...

5. 利用max-height 限制最大高度

#### 固定定位

##### position:fixed 固定定位

- position: fixed;

固定在页面可视区的某个位置，类似于 background-attachment: fixed;

- 特性：

Δ 针对块元素，不设置宽高的时候 ，宽高由内容撑开

Δ 使内嵌元素支持宽高

Δ 元素定位参照：页面可视区（即使滚动条滚动，也影响不到可视区哦）

Δ 提升层级

Δ 脱离文档流

Δ 触发BFC



##### 定位的适用场景

1. 是否需要脱离文档流，需要就绝对定位position:absolute，不需要就相对定位position：relative

2. 是否需要根据页面可视区进行定位，fixed

 

##### 透明度

- 透明度

\- 纯色背景、文字情况

rgba(r,g,b,a): 这里的a用于控制透明程度 

background: (0,0,0,.3);



\- 图片或不为纯色背景的如何透明？(0-1)

opacity: .3;

 

- 选择分析：

1. rgba针对单个元素，opacity针对整个元素所有内容，包括子级

2. rgba处理不了图片透明，opacity可以



IE：	filter:progid:DXImageTransform.Microsoft.Alpha(opacity=50);		（IE浏览器写法）

 

##### 以图换字

优点：页面中不会出现空标签，对于内容可以快速进行定位

 

1. 利用text-indent

text-indent: -999px;

overflow: hidden;

 

2. 设置一个元素，然后隐藏起来

display: none;

 

3. 高度设置为0，利用padding撑开

height: 0px;

overflow: hidden;

padding: 20px 20px;

 ```CSS
<style>
        h1{
            width: 121px;
            height: 75px;
            background: url(img/logo.jpg) no-repeat;
            /* text-indent: -999px;
            overflow: hidden; */
        }
        span{
            display: none;
        }
    </style>
</head>
<body>
    <!-- <h1>LOGO</h1> -->
    <h1><span>LOGO</span></h1>
</body>
 ```



##### 使用场景float、inline-block、position

什么时候inline-block？什么时候float？什么时候position？

 

1. 是否有元素需要居中（需要居中的元素是多个，还是单个）

2. 页面左中由类型的正常布局，靠左或者靠右

3. 是否需要脱离文档流、提成层级、基于某个元素 或者 可视区进行定位



## 第九章：表格及结构选择器

#### 表格的基本组成

```CSS
<body>

    <table>  表格

        <caption></caption> 表格标题

        <thead> 表格头部
            <tr> 行
                <th></th> 列
                <th></th> 列
            </tr>
        </thead>

        <tbody> 表格主体
            <tr> 行
				<td></td> 列
				<td></td> 列
            </tr>
        </tbody>

        <tfoot> 表格底部
            <tr> 行
                <td></td> 列
                <td></td> 列
            </tr>
        </tfoot>

        </table>
</body>
```

不写tbody，浏览器会自动解析为tbody：

#### 嵌套规则

- 表格相关的内容要写在table下

- table的子级有：

  Δ caption 表格标题

  Δ thead 表格头部

  Δ tbody 表格主体

  Δ tfoot 表格底部

- thead的子级有：

  \- tr 行

  \- th 列 （只有在thead下面的列，才是th）

- tbody的子级有：

  \- tr 行

  \- td 列 

- tfoot的子级有：

  \- tr 行

  \- td 列

- thead 和 tfoot都不是必须的

- 不写tbody，系统会自动解析为tbody

```CSS
table{
        border-collapse: collapse;
      }
td,th{
        padding: 0;
      }
```

***\*以上是需要清除的样式\****



- 标签样式：

  `<table border="1" cellspacing="20" cellpadding="50"></table>`   

  \- border 边框粗细

  \- cellspacing 单元格margin

  \- cellpadding 单元格padding

 

- CSS样式表样式：

  1. border-spacing: 20px;

  \- 单元格margin，相当于 cellspacing

  

  2. border-collapse: collapse; 单元格合并

  \- separate 分离，默认值

  \- collapse 边框合并为单一边框，忽略border-spacing

  

  3. vertical-align: bottom;

  \- 控制单元格内垂直对齐方式，默认为垂直居中

 



- 操作单元格合并

  

  1. <td rowspan="2">下午</td>

     \- rowspan 行合并（数字是合并几行）

  2. <td colspan="7">1</td>

     \- colspan 列合并

 

 

- 表格使用的特性：

  1. 修改其中一个的宽度，会影响整列的宽度

  2. 修改其中一个的高度，会影响整行的高度

 

***\*注意事项： 单元格一一对应\****

```CSS
<style>
        table{
            border-collapse: collapse;
        }
        td,th{
            padding: 0;
        }
        th{
            font-weight: normal;
        }
        .one{
            color: red;
        }
    </style>
</head>
<body>
    <table>
        <caption>课程表</caption>
        <thead>
            <tr>
                <th colspan="2"></th>
                <!-- <th></th> -->
                <th>星期一</th>
                <th>星期二</th>
                <th>星期三</th>
                <th>星期四</th>
                <th>星期五</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="4">上<br/>午</td>
                <td class="one">1</td>
                <td>数学</td>
                <td>语文</td>
                <td>数学</td>
                <td>语文</td>
                <td>数学</td>
            </tr>
            <tr>
                <!-- <td></td> -->
                <td>2</td>
                <td>语文</td>
                <td>数学</td>
                <td>语文</td>
                <td>数学</td>
                <td>语文</td>
            </tr>
            <tr>
                <!-- <td></td> -->
                <td>3</td>
                <td>数学</td>
                <td>语文</td>
                <td>数学</td>
                <td>语文</td>
                <td>数学</td>
            </tr>
            <tr>
                <!-- <td></td> -->
                <td>4</td>
                <td>语文</td>
                <td>数学</td>
                <td>语文</td>
                <td>数学</td>
                <td>语文</td>
            </tr>
            <tr>
                <td rowspan="4">下午</td>
                <td>5</td>
                <td>数学</td>
                <td>语文</td>
                <td>数学</td>
                <td>语文</td>
                <td>数学</td>
            </tr>
            <tr>
                <!-- <td></td> -->
                <td>6</td>
                <td>语文</td>
                <td>数学</td>
                <td>语文</td>
                <td>数学</td>
                <td>语文</td>
            </tr>
            <tr>
                <!-- <td></td> -->
                <td>7</td>
                <td>数学</td>
                <td>语文</td>
                <td>数学</td>
                <td>语文</td>
                <td>数学</td>
            </tr>
            <tr>
                <!-- <td></td> -->
                <td>8</td>
                <td>语文</td>
                <td>数学</td>
                <td>语文</td>
                <td>数学</td>
                <td>语文</td>
            </tr>
        </tbody>
    </table>
</body>
```



#### 结构选择器



***\*结构伪类选择器\*

- `span:nth-child(3)`

  表示父元素中子元素为第3的并且名字为span的标签被选中

  第几个，不是span的也算数

● nth-child（n）：选择器匹配父元素中的第 n 个子元素

p:nth-child(3){}

p标签父级下的，正数第3个子级如果是p标签，则添加样式

p:nth-last-child(3){}

p标签父级下的，倒数第3个子级如果是p标签，则添加样式

p:first-child{}

p标签父级下的，正数第1个子级如果是p标签，则添加样式

p:last-child{}

p标签父级下的，倒数第1个子级如果是p标签，则添加样式

***\*括号内可以填入的内容：\****

\- number 指定第几个元素

\- odd（奇数） / even（偶数）

\- 数列（n）

 ```CSS
<style>
        li:nth-child(odd){
            background: green;
        }
        li:nth-child(even){
            background: red;
        }
    </style>
</head>
<body>

    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
    </ul>

</body>
 ```

```CSS
<style>
        li:nth-child(3n-1){
            background: green;
        }
        /* li:nth-child(2n){
            background: pink;
        } */
        /*
            2 * 0 0
            2 * 1 2
            2 * 2 4


            3 * 0 + 1  1
            3 * 1 + 1  4
            3 * 2 + 1  7
        */
    </style>
</head>
<body>

    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>

</body>
```



● nth-of-type  ***\*选择器匹配同类型中的第n个同级兄弟元素\****  ***\*非常多\*

`span:nth-of-type(3)`

第几个，不是span的不算数，只有是span的才算数，数就是n第几个

p:nth-of-type(3){}

找到p标签父级下的，正数第3个为p标签的子级，添加样式

p:nth-last-of-type(3){}

找到p标签父级下的，倒数第3个为p标签的子级，添加样式

p:first-of-type{}

找到p标签父级下的，正数第1个为p标签的子级，添加样式

p:last-of-type{}

找到p标签父级下的，倒数第1个为p标签的子级，添加样式

***\*结构选择器\**** ***\*这三个都常用\****

● ~  匹配选择器 

.p~h3{}

选中class为.p的元素后所有的同级h3标签

● +  相邻选择器

p+h3

选中p标签的下一个兄弟节点，如果为h3，则添加样式

● >  子元素选择器

ul > li{}

选择当前ul下的li，该li是直接子级（而不是子级里面的子级）

***\*针对文本类型\**** ***\*这三个不常用\****

p::first-letter{}

选中第一个文字

p::first-line{}

选中第一行位置

p::selection{}

被选中时候的样式

***\*:target 选择器\**** ***\*不常用\**** 

\#div1:target{}

该选择器必须结合锚点，当url地址（href地址）和id命名一致时，添加该样式

 ```CSS
<style>
        #box{
            width: 200px;
            height: 200px;
            background: red;
        }
        #box:target{
            background: green;
        }
    </style>
</head>
<body>
    <a href="#box">链接</a>
    <div id="box"></div>
</body>
 ```



- 表格的注意事项

1. 标签嵌套规则要注意

2. thead、tfoot不是必须的

3. 不写tbody会自动解析

4. th必须是在thead内的

5. 修改宽度会影响一整列

6. 修改高度会影响一整行



## 第十章：表单及属性选择器

### 1.表单元素及属性

#### form - 表单（不怎么常用）

`<form action="提交地址" method="提交方式" target="_blank"></form>`

​			Δ action 表单信息提交地址，信息提交成功会跳转去该地址

​			Δ method 提交方式

​				1.  get （默认）

​				2.  post

​			Δ target 信息提交成功打开页面的方式

​				_blank

​				_self

#### input表单元素

`<input type="" />`

Δ 单标签

Δ 用于收集用户信息，根据不同的type值，可以让input表单元素具备不一样的功能

 

***1. type类型：***

● submit 提交

`<input type="submit" value="提交按钮上的文字设置">`

 

● text 单行文本输入框

`<input type="text" value="单行文本内的默认文字" />`

 

***\*注意：需要form提交的内容 或者 和form提交相关的内容，都放在form表单内，如果不需要form提交，可以不写form，form不是必写标签\****

 

`<form action="https://www.baidu.com/">`

`<input type="text" value="请输入中文" />`

`<input type="submit" value="发送">`

`</form>`

 

***\*提交的内容这么多，如何找到哪个内容是做什么用途的呢？\****

​	  和接受信息方（后端）定下统一名称：name，后端根据发送的		name来判断该数据是做什么

`<input type="text" value="请输入中文" name="word"/>`

#### 其他type类型

● password 密码框

`<input type="password" />`

 

● reset 重置按钮

`<input type="reset" />`

 

● button按钮

`<input type="button" />`

`<button>按钮</button>`

 

● file文件上传

`<input type="file" />`



● hidden隐藏域 不常用

`<input type="hidden" />`

​	在页面上没有任何显示效果

​	该表单的用途是：

​	发送信息的时候，携带一些需要后端接收，但不需要用户看到的内容

​	而且该请求一定是需要通过表单的form进行提交的

● radio 单选

`<input type="radio" name="n" value="男">男`

`<input type="radio" name="n" value="女">女`

`<input type="radio" name="n" value="保密">保密`

 

Δ 单选需要圈定在哪些值之间，进行选择，通过name 控制一组中的元素

Δ value的用途是提交给后端的，并非展示给用户

Δ 用户看到的是写在radio后面的文字

 ***\*通过checked可以设置默认选中\****



● checkbox复选

`<h3>爱看的书籍</h3>`

`<input type="checkbox" name="book" value="">css权威指南`

`<input type="checkbox" name="book" value="">html权威指南`

`<input type="checkbox" name="book" value="">js权威指南`

 

Δ 多选 与 单选一样，需要圈定值的范围，通过name控制一组的范围

Δ value的用途是提交给后端的，并非展示给用户

Δ 用户看到的是写在checkbox后面的文字

 ***\*通过checked可以设置默认选中\****



#### 更多的表单元素

● label标签

帮助扩大点击区域，而不是只有点击表单元素有效

`<label>`

`<input type="radio" name="n" value="男">男`

`</label>`

点击文字 “男”同样可以使单选框选中

利用标签上的属性 ***\*for\**** 与 表单元素 id 绑定

`<label for="man">男</label>`

`<input id="man" type="radio" name="n" value="男">`

● select 下拉表单 && option 选项

`<select>`

`<option>上海市</option>`

`<option>北京</option>`

`<option>重庆</option>`

`<option>天津</option>`

`</select>`

 ***\*通过selected可以设置默认选中，默认选中第一个\****



● textarea 多行文本输入框

`<textarea cols="30" rows="10"></textarea>`

Δ cols 列 ： 显示 30 个字的宽度（根据英文）

Δ rows 行 ： 显示 10行的高度

 ***\*不建议使用cols 和 rows来控制宽高，建议直接用width height\****

 ```CSS
<style>
        textarea{
            width: 500px;
            height: 500px;
        }
    </style>
 ```

- 使用的时候注意	vertical-align：top ）

#### 标签默认样式清除

**1. form**（IE6下的，可以不用再添加）

 ```CSS
form{

margin: 0;

}

 ```



**2.input**

```CSS
input{

padding:0;

margin:0;

outline: none;

vertical-align: top;

}
```

Δ 类型 radio、checkbox 是有margin的

Δ text、password 是有padding的

Δ 选中输入框的时候，外面会有一层蓝色边框

​	outline - 轮廓

Δ 默认是有边框的，根据实际情况选择是否要去除

 

**3.select**

```CSS
select{

padding:0;

vertical-align: top;

}
```

Δ firefox下有padding值

Δ 边框根据设计图需求

 

 

**4.button**

```CSS
button{

padding:0;

outline: none;

vertical-align: top;

}
```

Δ firefox下有outline值

Δ 边框根据设计图需求

 

**5.textarea**

```CSS
textarea{

resize: none;

padding:0;

margin:0;

outline: none;

vertical-align: top;

}
```

Δ chrome下有padding值

Δ firefox下有margin值

Δ 边框根据设计图需求

Δ 默认情况下，允许用户修改多行文本的宽高

​				resize：重置尺寸

​						\- none 不允许

​						\- vertical 垂直

​						\- horizontal 水平

​						\- both 垂直 + 水平

​				需要配合overflow：auto一起使用

 ```CSS
<style>
        div{
            width: 200px;
            height: 200px;
            border: 2px solid #000;
            resize: both;
            overflow: auto;
        }
    </style>
</head>
<body>
    <div></div>
</body>
 ```



#### 表单伪类（E代表元素）



**1.E:checked**

```CSS
input:checked{

 //样式

}
```



给选中的这个元素添加样式（配合选择器更好用哦~）

```CSS
 <style>
        input:checked + span{
           color: red;
        }
    </style>
</head>
<body>
    <h2>选择性别</h2>
    <input type="radio" name="sex" value="男">
    <span>男</span>
    <input type="radio" name="sex" value="女">
    <span>女</span>
    <input type="radio" name="sex" value="保密" checked>
    <span>保密</span>
</body>
```



**2.E:focus**

```CSS
input:focus{

 //样式

}
```



给获取到光标的元素添加样式（配合选择器更好用哦~）

```CSS
<style>
        span{
            display: none;
        }
        input:focus + span{
            display: block;
        }
    </style>
</head>
<body>
    <input type="text" placeholder="请输入10-15个字符">
    <span>请输入10-15个字符</span>
    <input type="password">
    <span>请输入密码</span>
    <!-- <input type="password">
    <input type="password"> -->
</body>
```

### 2.H5新增表单及属性选择器

```HTML
<input type="text" />
```

- 表单属性

```html
<input type="radio" checked />
```

- 表单伪类

```css
.input:checked{
    /**给选中的表单添加样式**/
}
```

- 利用label美化表单

```html
<input id="radio1" type="radio" />
<label for="radio1"></label>
```

```css
input:checked + label{
    /**当表单选中后，给label添加选中样式**/
}
```

#####  更多的type类型

 - image <span style="background:yellow">（非H5，5%）</span>

   ```html
   <input type="image" src="图片地址" alt="代替图片的文字" />
   ```

- email 邮箱验证

  ```html
  <input type="email" />
  ```

  提交的时候自动做邮箱验证

  - 必须有 @ 这个符号
  - 必须要输入@后面的内容，例如 `qq.com`

  ```CSS
  <body>
      <form action="#">
          <input type="email">
          <input type="submit">
      </form>
  </body>
  ```
  
  
  
- tel 电话

  ```html
  <input type="tel" />
  ```

  移动端点击，弹出的键盘只显示数字s

  因为世界各地对于 电话号码的格式 非常的不统一，所以并没有验证

  ```CSS
  <form action="#">
          <input type="tel">
          <input type="submit">
      </form>
  ```

  

- search 搜索

  ```html
  <input type="search" />
  ```

  有个可以删除内容的 `x`


```JS
<form action="#">
          <input type="search" />
          <input type="submit">
 </form>
```

  ```
- url 网站地址 （不常用）
  <input type="url" />
  ```

  - 验证网址输入是否正确，但不检测是否真实存在
  - 需要带有`http` 或 `https`

  ```CSS
  <form action="#">
          <input type="url" />
          <input type="submit">
      </form>
  ```

- color 颜色 （不常用）

  ```html
  <input type="color" />
  ```

  可以在页面中设置 选取颜色表单

  ```CSS
  <style>
          div{
              width: 200px;
              height: 200px;
              border: 2px solid #000;
          }
      </style>
  </head>
  <body>
      <input type="color" />
      <div></div>
      <script>
          //这是找input标签
          var color = document.querySelector('input');
          var div = document.querySelector('div');
          
          //input color 的值发生改变
          color.onchange = function(){
              //把color的颜色设置给div做背景色
              div.style.background = color.value;
          }
      </script>
  </body>
  ```

  

- range 数值选取器 （不常用）

  ```html
  <input type="range" min="0" max="100"  step="10"  value="0"/>
  ```

  - `min` 最小值，默认 ` 0`
- `max` 最大值，默认 `100`
  - `step` 移动一次的数值，默认 `1`
  - `value` 停止滑块时候的值，默认 `0`
  - 滑块初始位置居中
  
  ```CSS
  body>
      <input type="range" min="0" max="10" value="0" step="2" >
      <script>
          var range = document.querySelector('input');
  
          range.onchange  = function(){
              console.log(range.value);
          }
          
      </script>
  </body>
  ```
  
  

- number 数字（不常用）

  ```html
  <input type="number" min="0" max="10" step="2" />
  ```

  - `min `最小值
  - `max` 最大值
  - `step` 控制每次点击，数值的加减量，默认为 `1`

  ```CSS
  <form action="#">
          <input type="number" min="0" max="10" step="2" />
          <input type="submit">
      </form>
  ```
  
  
  
- 日期时间表单（不常用）

  - datetime-local 显示完整 - 年 月 日 时 分

    ```html
    <input type="datetime-local" />
    ```

  
  - date 显示 - 年 月 日
  
    ```html
    <input type="date">
    ```
  
  - month 显示 - 年 月
  
    ```html
    <input type="month" />
    ```
  
  - week 显示 - 年 周
  
    ```html
    <input type="week" />
    ```
  
  - time 显示  - 时 分
  
    ```html
    <input type="time" />
    ```

##### 更多功能的表单

- datalist 定义可能出现的值，和list配合使用（不常用）

  ```html
  <input type="text" list="list1">
  <datalist id="list1">
      <option>第一个</option>
      <option>第二个</option>
      <option>第三个</option>
      <option>三个</option>
  </datalist>
  ```

  将 `datalist` 的 `id` 绑定给 `input` 的 `list`

  `option` 为可能出现的列表项

- progress 进度条（不常用）

  ```html
  <progress max="100" value="10"></progress>
  ```

  - `max` 最大值，默认 `1`
- `value` 设置当前进度位置

```CSS
<body>
    <progress max="100" value="0"></progress>
    <script>
        var progress = document.querySelector('progress');

        var timer = setInterval(function(){
            progress.value++;
            if(progress.value == 50){
                clearInterval(timer);清除定时器
                console.log('已经全部完成');
                
            }
        },30)
    </script>
</body>
```



##### 更多表单设置

- placeholder - 提示信息，不会成为value内容

  ```html
  <input type="text" placeholder="请输入密码" />
  ```

- autocomplete - 是否记录用户输入过的内容（不常用）

  ```html
  <input type="text" name="one"  autocomplete="off" />
  ```

  - `on` 开启

  - `off` 关闭

    注意：要添加 name

- contenteditable 定义内容是否可编辑 （不常用）

  ```html
  <p contenteditable="true">这是内容</p>
  ```

  - true 允许编辑
  - false 不允许编辑

- pattern 添加正则验证 

  ```html
  <input type="tel" pattern="^1[3456]\d{9}$" placeholder="请输入一个手机号" />
  ```

  - `^` 开头 `1`
  - `[3456]`  允许是 3 4 5 6 中的任意值
  - `\d` 匹配数字
  - `{9}$` 匹配9个数字结尾

- formaction 新增提交地址，不依靠 `form`上面的 `action` 

  ```html
  <input type="submit" formaction="https://www.baidu.com" />
  ```

- formnovalidate 取消验证

  ```html
  <input type="submit" formaction="https://www.baidu.com" formnovalidate>
  ```

- required 必填项

  ```html
  <input type="text" required>
  ```

```CSS
<body>
    <form action="https://www.bilibili.com/" target="_blank">
        <input type="email" required>
        <input type="submit">
        <input type="submit" value="草稿箱" formaction="https://www.baidu.com/" formnovalidate>
    </form>
</body>
```



- autofocus 自动获取光标

  ```html
  <input type="text" autofocus>
  ```

- readonly 只读

  ```html
  <input type="text" value="开课吧" readonly>
  ```

- disabled 禁用

  ```html
  <input type="submit" disabled>
  ```

```CSS
<style>
        input:disabled{
            cursor: not-allowed;
        }
        input:enabled{
            color: red;
        }
    </style>
</head>
<body>
    <input type="text" value="这是内容" readonly>
    <input type="text" autofocus>
    <input type="password" value="21212" disabled>
</body>
```



#####  表单伪类

- `:enabled` 可用表单

  ```css
  input:enabled{
      background: pink;
  }
  ```

- `:disabled `禁用表单

  ```css
  input:disabled{
      background: #666;
  }
  ```

- placeholder 伪类  (通过伪类添加样式)

  ```css
  input::-webkit-input-placeholder{	谷歌
      color: #000;
  }
  input::-moz-placeholder{	火狐
      color: red;
  }
  input:-ms-input-placeholder{	IE
      color: #000;
  }
  ```

  - 注意：使用的时候一定要注意，以上的兼容方案，每个写法都不一样

##### 属性选择器

- 选择器[属性]

  ```css
  div[kkb]{
      
  }
  ```

  标签带有 `kkb`这个属性的都会被选中，并添加 `{}`内样式

- 选择器[属性="属性值"]

  ```css
  div[kkb="hello"]{
      
  }
  ```

  标签带有 `kkb="hello" `这个属性的都会被选中，并添加 `{}`内样式

  ```CSS
  <style>
          div{
              width: 200px;
              height: 200px;
              border: 2px solid #000;
          }
          div[kkb]{
              /* background: red; */
          }
          div[kkb="miaov"]{
              background: green;
          }
      </style>
  </head>
  <body>
      <div miaov>1</div>
      <div kkb="miaov">2</div>
      <div kkb>3</div>
  </body>
  ```

  

- 选择器[属性~="属性值"]

  ```css
  div[kkb~="hello"]{
      
  }
  ```

  ```html
  <div kkb="hello world"></div>
  ```

  标签带有 `kkb="hello"`，其中`hello`是词列表中的一个

- 选择器[属性^="hello"]

  ```css
  div[kkb^="hello"]{
      
  }
  ```

  ```html
  <div kkb="helloworld"></div>
  ```

  标签带有 `kkb="hello"`，其中以 `hello`开头

- 选择器[属性$="hello"]

  ```css
  div[kkb$="hello"]{
      
  }
  ```

  标签带有 `kkb="hello"`，其中以 `hello `结尾

- 选择器[属性*="属性值"]

  ```css
  div[kkb*="hello"]{
      
  }
  ```

  ```html
  <div kkb="wohellorld"></div>
  ```

  标签带有 `kkb="hello"`，其中包含 `hello`

- 选择器[属性|="属性值"]

  ```css
  div[kkb|="hello"]{
      
  }
  ```

  ```html
  <div kkb="hello-word"></div>
  ```

  标签带有 `kkb="hello"`，其中以 `hello- `开头

```CSS
<style>
        div{
            width: 200px;
            height: 200px;
            border: 2px solid #000;
        }
        div[kkb]{
            /* background: red; */
        }
        div[kkb="miaov"]{
            /* background: green; */
        }
        div[kkb~="miaov"]{
            /* background: pink; */
        }
        div[kkb*="miaov"]{
            /* background: orange; */
        }
        div[kkb^="miaov"]{
            /* background: lightblue; */
        }
        div[kkb|="miaov"]{
            /* background: lightgreen; */
        }
        div[kkb$="a"]{
            background: lightseagreen;
        }
        input[type="text"]{}
    </style>
</head>
<body>

    <div miaov>1</div>
    <div kkb="miaov-helloa">2</div>
    <div kkb="miaovhello">3</div>
</body>
```