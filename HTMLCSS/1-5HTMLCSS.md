## 第一章：HTML

```html
<!DOCTYPE html>
document type html 文档类型 html 告诉浏览器 当前这个页面是html 也是文档声明
<html>  告诉浏览器 html 代码从这里开始
    <head>
        <meta charset="UTF-8" /> 这个是编码,避免乱码

        放一些和用户无关的东西，和页面的显示有关
    </head> 
    <body>
            放给用户看的东西
    </body>
</html> 告诉浏览器HTML 代码从这里结束

<!-- 这里放注释，不会显示到浏览器 -->
```

2. 注释快捷键：Ctrl+/	浏览器查看：Alt+B	代码换行：Alt+Z

 3. 标签：

- 标签类型
  - 单标签：`<meta charset="UTF-8" />`
  - 双标签：`<body>内容</body>`

- 标签关系

  - 嵌套标签（父子级关系）
  - 并列标签（兄弟关系）

  

  4. div标签

  `<div></div>`

   

  Divide 分开（用来划分页面结构的，把内容和内容区分开来，也是个双标签）

   

  div标签特性：

  1. 是个双标签

  2. 没有高度，但是可以被内容撑开，也可以用css进行设置

  3. 不设置宽度的情况下，默认撑满父级



#### CSS基础样式使用

- 样式（HTM、CSS、JS 分离单独写）

  - 行间样式

  ```html
  <body>
      <div style="width: 200px;height: 200px;border: 3px solid #000000;"></div>
    
       <!-- 行间样式：就是添加到当前这个标签的 开始部分
          style是样式
              缺点：
                  1.只能作用在当前写的这个标签上面，就是不能重复使用
                  2.后续的代码修改维护非常麻烦
                  3.代码可读性非常差（html css js 代码分离写）
              优点：
                  写的样式直接作用在当前元素身上 -->
                  
  </body>
  ```

  

  - 内部样式

  ```css
  <style>
          div{
              width: 200px;
              height: 200px;
              border: 4px solid #000000;
          }
          #box{
              width: 900px;
          }
      </style>
  
      <!-- 内部样式：写在head 里面
          <style></style> 是告诉浏览器 我这里写的是css样式相关的代码
  
          优点：
              1.只有当前页面可以复用，作用于多个符合名字的标签上（其实是因为选中元素的问题）
              2.只有在当前页面的后期修改维护方便
              3.符合规范 做到 html css js 的分离，页面结构更加清晰，但是不够彻底
  
          缺点：
  
          通过id的方式找到页面中指定的元素
          id是唯一的
          id：
              1.当前页面只能出现一次，不能重复 
              2.开头不能用数字
              3.不能用中文
              4.不能用特殊字符，除了- 减号 _ 下划线可以 -->
  		   5.具有语义化（语义化：你看到命名就知道是个啥）
  
  </head>
  ```

  - 外部样式

  ```CSS
  <head>
      <meta charset="UTF-8">
      <title>Document</title>
      <link rel="stylesheet" href="index.css" />
      <!-- 
          link 
              1. 单标签
              2. rel 告诉浏览器你当前引入的这个文件是什么类型
                  stylesheet - 样式表
              3. href 引入地址
  
  
  
       -->
  </head>
  <!-- 
      外部引入：
          优点：
              1.多页面复用的
              2. 多页面进行维护修改
              3. html css 和 js 分离的特别彻底！！！
          缺点？？？
              1. 增加请求,影响性能
   -->
  ```

  - Id的特点：

  1. 当前页面中必须唯一（就像我们的身份证编号一样）

  2. 开头不要用数字

  3. 不要使用中文

  4. 尽量不使用特殊字符，- （杠，减号）、_（下划线）除外

####  常用样式

- width 宽（单位：px）

给元素设置宽度

- height 高（单位：px）

给元素设置高度

- border 边框（一个边框的设置，需要设置边框的宽度、颜色、边框的样式）

  - border-width 边框宽度（单位：px）

  - border-color 边框颜色（三种形式）

    - \- 关键词（英文颜色单词，例如：red）

      \- rgb（三原色，利用ps工具获取这些数值）

      \- 十六进制颜色（利用ps工具获取数值，一般是3位或者6位）

  - **b**order-style 边框样式（三种形式）

    ​	solid 直线

    ​	dotted 点虚线

    ​	dashed 方虚线

    ​	double 双线，双线的宽度等于border-width的值（以浏览器解析为准，我们没有办法去改变它的默认样式）

  - 复合样式： border：边框宽度 边框样式 边框颜色 ;以空格进行间隔。

     

    多值书写：

    一个值（上左下右）

    两个值（上下 和 左右）

    三个值（上 和 左右 和 下）

    四个值（上 和 左 和 下 和 右）

  

  ```css
  <style>
          div{
              width: 200px;
              height: 200px;
              /* border:10px solid red; */
              border-color: red green blue pink;
              border-style: solid dashed dotted solid;
              border-width: 10px 20px 30px 40px;
              /*
                  一个值（上左下右）
                  两个值（上下 和 左右）
                  三个值（上 和 左右 和 下）
                  四个值（上 和 右 和 下 和 左）
              */
          }
    </style>
  ```

  - 指定边框方向： 

    border-left：边框宽度 边框样式 边框颜色;

    border-left-width:左边框宽度;

    border-left-color:左边框颜色;

    border-left-style:左边框样式;

    

  - 左：border-left-width、border-left-color、border-left-style

    ```css
    <style>
            div{
                width: 200px;
                height: 200px;
                border-top: 10px solid red;
                border-left: 30px solid green;
                /* border-bottom: 30px solid blue; */
                border-right: 30px solid pink;
            }
      </style>
    ```

    

  - 不想要的边框如何去掉？

    border:none;

    none - 没有

     ```css
     <style>
            div{
                width: 200px;
                height: 200px;
                border-color: red green blue pink;
                border-style: solid dashed dotted solid;
                border-width: 0px 0px 30px 0px;
            }
      </style>
     ```

    ```css
    <style>
            div{
                width: 200px;
                height: 200px;
                border: 20px solid red;
                border-top:none;
                /* none :没有*/
                /* width: 400px; */
                /*
                    在样式表中，给同一个元素 添加 同一条样式，后面覆盖前面的
                */
            }
      </style>
    ```

    

    **- 在样式表中，给同一个元素 添加 同一条样式，后面覆盖前面的**

    

  - 边框的特性：

    \- 同一个元素，相交的两条边框，连接处是斜线

    \- 元素的宽高 = width + 边框   height  + 边框

    ```css
     <style>
            div {
                width: 0px;
                height: 0px;
                border: 50px solid red;
                
                border-color: white white white pink; 
                border-color: transparent transparent transparent pink; 
                border-color: rgba(0,0,0,0.5)  rgba(0,0,0,0.8)  rgba(0,0,0,.2) pink; 
                border-color: #000 #f00 #ccc;
               
                transparent 透明
    rgba(red,green,blue,alpha)  a - 控制透明度，取0 - 1的值，表示0%~100%
    小数点前面的0可以省略，例如：0.5  ->  .5
                
            }
      </style>
    ```

    

    ###### 圆角

    

    - **border-radius**：半径;  用于设置圆角（**IE9之前不支持**）

    半径（x/y）：

    \- 具体数值，单位px

    \- 百分比，单位 %

     

    多值书写：（从左上角开始）

    \- 一个值（左上和右上和右下和左下）

    \- 两个值（左上和右下  右上和左下）

    \- 三个值（左上  右上和左下  右下）

    \- 四个值（左上  右上  右下  左下）

```js
<style>
             div{
                width: 200px;
                height: 200px;
                border: 5px solid #000;
                border-radius: 50px 20px 70px 10px;
                /* 
                    - 一个值（左上和右上和右下和左下）
                    - 两个值（左上和右下  右上和左下）
                    - 三个值（左上  右上和左下  右下）
                    - 四个值（左上  右上  右下  左下）
                 */
            }
        </style>
```

- 4个角都要用不一样的x半径和y半径控制，以下哪种写法正确？

```js
<style>
          div {
              width: 200px;
              height: 200px;
              border: 5px solid #000;
              /* border-radius: 10px/20px 30px/40px 50px/60px 70px/80px; 这个是错的 */
              border-radius:10px 30px 50px 70px / 20px 40px 60px 80px;
              /*
诀窍：斜杠左边的全部设置x半径 / 斜杠右边的全部设置y半径
              */
          }
      </style>
```



- 指定其中一个角变圆？先上下，后左右

```html
<style>
          div {
              width: 200px;
              height: 200px;
              border: 5px solid #000;
              border-radius: 50px;
              border-top-right-radius: 0px;
              /*
                  - border-top-left-radius       左上角
                  - border-top-right-radius      右上角
                  - border-bottom-right-radius   右下角
                  - border-bottom-left-radius    左下角
  
                  先上下，后左右，不要倒过来写
              */
          }
      </style>
```

```JS
1、圆形：
#circle{
border-radius: 50%;
}
 
2、半圆：
#semi_circle{
border-radius: 100px 100px 0px 0px;
height: 50px;
}

3、扇形：
#sector{
border-radius: 100px 0px 0px;}
```

   **background** 背景

  \- background-color：颜色; （三种形式颜色值：关键词、rgb、十六进制颜色值）

  \- background-image：url(背景图片地址);

- 背景图显示原则

   	- 容器尺寸等于图片尺寸，背景图片正好显示在容器中;
		
   	- 容器尺寸大于图片尺寸，背景图片将默认平铺，直至铺满元素；
		
   	- 容器尺寸小于图片尺寸，只显示容器/元素/范围以内的背景图；

  1. 制作页面素材分类

- 所有的image统一放到一个文件夹，不要和html页面放在一起，后期不好维护修改

2. 建议大家使用：外部引入

3. 图片可以选择jpg，不选择png，可以png，就不选择gif

   ```
   jpg 和 png 是因为图片 png的导出 比 jpg的要大
   
   gif主要用于导出动图，导出的过程会进行压缩，虽然小，但是图片质量下降了
   
   图片的命名尽量避免中文
   ```

- 绝对路径：

  \- 线上绝对路径：<https://www.kaikeba.com/>

  - 本地绝对路径:  E:\笔记

- 相对路径：基于你现在的位置

-  背景重复

  - background-repeat: repeat\repeat-x\repeat-y\no-repeat;

- 背景定位  background-position:位置; 控制背景的位置

  - 子元素水平和垂直居中，可以只写一个center 即
  - background-position：center;
  - 值的类型：
  - 具体数值 （单位：px）关
  - 键词 ：right、left、top、bottom、center
  - 百分比 （单位：%）
  - **百分比的计算是基于：盒子的宽\高 - 背景的宽高 得到的结果，计算的。
  - 值的个数：

    一个：x center（默认）;

    两个：x y;


​       ` background-position: right 20px bottom 50px;`


              background-image: url("img/logo.jpg");
              background-repeat: no-repeat;
              background-position: 50px center; 
              background-position: center;

- 背景滚动	background-attachment：fixed   \   scroll;
- 背景是跟随滚动条滚动（scroll），还是固定当前位置（fixed）
-  ***\* 这个值会影响到背景定位，从基于当前元素，变成基于可视区**
- 复合样式
  - background:背景颜色 背景图 背景重复 背景定位 背景跟随滚动;

background: red url("img/logo.jpg") no-repeat  50px 50px;


## 第二章 常见样式：字体、文本设置

1、font 字体

\- font-size 字体大小

\- font-weight 加粗

\- font-style 倾斜

\- font-family 字体

2、line-height  行高 

3、文本设置

\- color 文字颜色 

 	- text-align 文本对齐
		
		- text-indent 首行缩进
		
		- text-decoration 文本修饰
		
		- word-spacing 词间距
		
		- letter-spacing 字间距
		
		- word-break 强制换行
		
		- white-space 强制不换行
		
		- text-shadow 文字阴影

#### 字体

**-** **font** 字体

\- font-weight:bold; 字体加粗

 ***font-weight:（字体加粗）\*******\*：\***normal / bold / bolder /100-900

\- font-style:italic;字体样式 倾斜

***\*font-style:（字体倾斜）\****：normal/italic/oblique

**font-weight \ font-style 如果想要去除的话，可以使用normal**

\- font-size：数值px; 字体大小

**谷歌最小显示字体为12px，小于12px的，都按照12px处理**

不设置的情况，一般默认为16px的大小

***\*font-family（字体）\*******\*：\****"字体1","字体2";

**中文常用：微软雅黑、宋体 （中文必须写在引号内）**

**英文常用：Arial、Helvetica**

**首选字体放在前面，备选字体放在后面**

**英文写在中文的前面，因为英文的字体里面没有中文的，但是因为中文有aoe拼音，所以对于英文也有字体的设计。**

```css
#box {
            font-family: "微软雅黑","宋体";
            font-family: Arial, Helvetica, sans-serif;
        }
```

```css
 #box {
            /* font-family: Agency Fb; */
            /* font-family: "宋体"; */
            font-family: Agency Fb,"宋体";
            color: blueviolet;
        }
```

**一定要注意：英文和中文都选中看一下，字体是否一致**

 

line-height:具体数值; 行高;

\- 具体数值 px

\- 倍数：该倍数是根据字体大小来进行计算的

```css
<style>
        div{
            width: 200px;
            height: 80px;
            font-size: 14px;
            border: 1px solid #000;
            line-height: 80px;
            line-height: 3;(3倍文字大小的倍数)

        }
    </style>
</head>
<body>
    <div>
        蓝色紫罗兰
    </div>**扩展：我们说div的高度可以由内容撑开，但是这个内容具体是什么？**
```

 

**是行高。所以让内容自动撑开div，这时候div的高度就是行高。**

**除了行高以外，具有高度的子元素也可以撑开父级高度**

 

**但是注意 行高 和 高度同时设置的话，以高度为准。**

 

上面这些也可以写到一起哦：字体复合样式

font: 

font-style 

font-weight 

font-size/line-height 

font-family;

 

**额外注意！！ font复合样式一定要写font-size 和 font-family**

**而且顺序也不可以随便改 font-style 和 font-weight 一定要放在前面**

```CSS
font: bold italic 20px/40px "宋体";
```

#### 文本

- **文本设置**

\- color：颜色; 文字颜色（三种方式:关键词、rgb、十六进制颜色）;

\- text-align: left \ right \ center; 文本对齐方式



\- text-indent:具体数值; 首行缩进

-可继承，单位 px、em（倍数，跟当前字号有关系）

\- text-indent属性只对第一行起作用

\- text-indent可以取负值



-text-align-last:justify 段落的最后一行对齐方式



- **单位：em -> 1em** = 当前设置的这个元素上的文字大小，想缩进两个文字? 2em



- **文本修饰**

\- text-decoration:修饰值; 文本修饰;

\- none; 去除

\- underline 下划线

\- overline 上划线

\- line-through 删除线（**不要****5980****，不要只要1980！**）

 

-  **word-spacing：具体数值; 词间距**

浏览器怎么知道什么是单词？你要自己用空格间隔开来，这时候才有效果

*间隔 = 空格大小+词间距*

在宋体的情况下，一个空格 =  字体大小的一半，但是不是所有字体都是

 

**宋体的右侧有1px的空白间隙**

 

-  **letter-spacing:具体数值; 字间距**

空格同样也是字符，所以也会有字间距

**今             天              空格**

 

```CSS
<style>
        div{
            font:16px "宋体";
            word-spacing: 20px;词间距
            letter-spacing: 10px;字间距
        }
    </style>
</head>
<body>
    <div>今天 说 文本设置</div>
    <!--

        48 = 20px + 10px + 10px + 8px

      -->
</body>
```





数字和英文不会自动换行，只有中文可以自动换行这时候怎么办？

\- word-break：break-all; 强制换行

\- white-space:nowrap; 强制不换行



- **text-shadow：x y 模糊距离 颜色; 文字阴影**（IE9之前不支持）

x、y是必填值（xy偏移）

模糊距离（默认为0）	颜色（默认字体颜色）非必填项

可以叠加多层阴影，利用“,”进行间隔。

 ```CSS
<style>
        div{
            font: bold 50px "微软雅黑";
            color: orange;
            text-shadow: 5px 10px 2px #000,
            10px 20px 2px red;
        }
    </style>
 ```

### 第三章：盒模型

#### 标准盒模型

**content区域（由width和height组成）可以显示文字、子元素**

**子元素div的可视宽高（border+padding+content）会撑满父级content区域**



标准盒模型的可视宽高计算公式：

**标准盒模型的可视宽高 = border + padding + width/height（content）**

 

 

#####padding

内填充: 边框以内填充的距离（在选中的时候呈现绿色）

填充的位置 - **border 到 content之间**

 

注意事项：

★ 添加padding，会导致div元素的宽高发生变化

 

★ 背景图片依旧默认在元素的左上角，并不是content区域的左上角，padding并不影响背景图片

 

多值书写：

一个值：上 右 下 左

两个值：上下 和 左右

三个值：上 和 左右 和 下

四个值：上 和 右 和 下 左

 

指定方向：

\- 上：padding-top

\- 下：padding-bottom

\- 左：padding-left

\- 右：padding-right

 

 ##### margin

外填充：作用在当前元素边框以外区域，通常用来控制元素和元素之间的间隔

- 可以用padding解决的，不采用margin

注意事项：

 

★ 因为margin是在元素可视区以外区域，所以不会影响元素的可视宽高

★ 因为margin是在元素可视区以外区域，所以不会影响背景图片，背景从元素左上角



多值书写：

一个值：上 右 下 左

两个值：上下 和 左右

三个值：上 和 左右 和 下

四个值：上 和 右 和 下 左



指定方向：

\- 上：margin-top

\- 下：margin-bottom

\- 左：margin-left

\- 右：margin-right



**margin可以接受正负值**



margin里超好用的auto

◥ margin: auto;

**左右两边设置auto，**可以让一个元素居中，剩余空间平均分布在左右两侧



◥ margin-left: auto;

**只有左边设置auto**，可以让一个元素靠右



◥ margin-right: auto;

**只有右边设置auto**，可以让一个元素靠左（其实也就没有设置的必要，因为默认情况就是靠左的）

**margin-top:auto; / margin-bottom:auto;  是无效的**

 ```CSS
<style>
        div{
            width: 300px;
            height: 300px;
            background: red;
            /* margin:0 auto; */
            /* margin-left: auto; */
            /* margin-right: auto; */
        }
    </style>
 ```



margin的问题

★ margin传递的问题

 

**除了margin-top 会传递 margin-bottom 同样也会传递**

 

**解决方案：**

1. 给父级的红色盒子加padding，使红、绿两个盒子顶部保持间隙(**推荐使用**)
2. 给父级加边框（有种弄个栅栏不让子级margin跑出去的感觉）
3. 用一个并列同级元素，代替margin距离

★ magin叠加问题

```CSS
<style>
        #box1{
            width: 400px;
            height: 400px;
            background: red;
            /* margin-bottom: 50px; */
            margin-bottom: 200px;
        }
        #box2{
            /* margin-top: 150px; */
            width: 200px;
            height: 200px;
            background: green;
        }
    </style>
```

两个时取最大值用

**解决方案：**

给红色直接把底部margin定为 150px，或者给绿色顶部 定为150px，

把总margin加给一个元素身上

 

**padding适合用在嵌套标签之间，margi 适合用在并列标签之间，能不用margi就不用，**

 

#### 怪异盒模型

**- box-sizing 用于定义元素的可视宽高的计算方式（**IE8以下不可使用）

\- content-box（默认情况：标准盒模型）

\- border-box（怪异盒模型）

怪异盒模型可视宽高计算公式：

可视宽高 = width / height;	包括了 padding 、 border和content

Content区域计算公式：

Content = width / height - border - padding

**- box-shadow** 盒模型阴影

box-shadow : x  y 模糊半径 扩展 颜色   内/外阴影;

\- inset 内阴影（不写默认是外阴影）

\- x 距离左侧

\- y 距离顶部

\- 扩展：扩展到一个位置之后，在进行模糊

\- 颜色：盒模型阴影的颜色

**添加多层box-shadow，可以用“，”进行间隔**



可以给多方向添加阴影

\- 单边阴影

\- 多边阴影

```CSS
<style>
        div {
            width: 300px;
            height: 300px;
            background: red;
            margin: 100px auto 0;
            box-shadow:0px 5px 4px -4px black;
        }
    </style>
```



## 第四章：常用标签、选择器

#### **标题类标签**

<h1>这是h1标签</h1>
h1标签通常用于当前网站的名称 或 logo（在搜索的时候，这个标签的优先	级非常高，所以不要在页面滥用）

<h2>这是h2标签</h2>
文章内的大标题 或 板块名称

<h3>这是h3标签</h3>
文章内的小标题 或 板块下的栏目名称

<h4>这是h4标签</h4>
<h5>这是h5标签</h5>
<h6>这是h6标签</h6>
h4 ~ h6，依次递减，并不太具备什么特殊的含义，就是标题。

 

**h1 ~ h6 都是用于标题的，下面准备一张图给大家展示下，分别是什么意思：**

 

#### 结构类标签

`<div>结构的划分<div>`

块：一般没有别的适合的标签的时候，就可以轮到它啦

`<header>这里包含头部的内容</header>`

头部，这里可以是一个网站的头部，也可以是一个大版块的头部

主要用于页面的头部的信息介绍，也可用于板块头部

`<section>划分版块</section>`

划分板块，用于划分页面上的不同区域，或者划分文章里不同的节

`<article>文章</article>`

文章（可以包含：标题：作者、发布时间、发布内容等的）

用来在页面中表示一套结构完整且独立的内容部分（论坛帖子、报纸文章、博客条目、用户评论）

`<nav>导航栏</nav>`

`<aside>附属信息（侧边内容）</aside>`

元素标签可以包含与当前页面或主要内容相关的引用、侧边栏、广告、nav元素组，以及其他类似的有别与主要内容的部分，网站侧边的悬浮都可以用这个

`<footer>这里包含底部的内容</footer>`

底部，可以是一个网站的底部，也可以是一个大板块的底部

#### **列表类标签**

- 有序列表，用在对顺序有要求的结构类似的情况

```JS
<ol>
    <li>这是li1</li>

	<li>这是li2</li>

	<li>这是li3</li>

</ol>
```

- 无序列表，对顺序没有要求的 但是结构类似的情况

```JS
<ul>

<li>这是li1</li>

<li>这是li2</li>

<li>这是li3</li>

</ul>
```

- 自定义列表，dt一般是标题，dd是对标题展开的描述

dl：定义列表

dt：列表标题

dd：对标题展开的描述



 ```css
<body>
    <dl>
        <dt>国家</dt>
            <dd>中国</dd>
            <dd>美国</dd>
            <dd>英国</dd>
        <dt>水果</dt>
            <dd>榴莲</dd>
            <dd>西瓜</dd>
            <dd>水蜜桃</dd>
    </dl>
</body>
 ```



 

 

#### **文本类标签**



`<p>用于文本段落</p>`

`<span>文本</span>`

并不具备任何含义，中间可以放置文本，对文本单独进行操作

`<strong>文本加粗，强调(用于修饰)</strong>` <b>文本加粗，强调</b>

`<em>斜体</em> ``<i>斜体</i>`

`<mark>高亮</mark>`

`<time>时间</time>`

`<cite>引用</cite>`

`<sup>上标文本</sup>`

`<sub>下标文本</sub>`

`<del>删除文本</del>`



#### **- img标签**

向页面中，添加一张图片，是个单标签哦。

书写方式：

<img src="图片地址" title="鼠标停留的提示信息" alt="图片不显示时候的备用文字"/>

特性：

1- 一行显示多个，父级宽度不够，元素换行

2- 支持宽高

3- 宽高等比缩放（宽高同时设定，不会等比缩放）

4- img标签底部存在间隙（vertical-align:top;解决这个问题）

5- 换行会被解析出一个空格

6-	vertical - align :  top ; 	图片基于顶部对齐

```css
<style>
        div{
            background: red;
            height: 1000px;
        }
        img{
            /* vertical-align: top; */图片基于顶部对齐
            /* vertical-align: middle; */中间对齐
            /* vertical-align: bottom; */底部对齐
        }
    </style>
</head>
<body>
    <div>
        <img src="images/dog.jpg" />
    </div>
```



换行产生间隙的解决方案：

1. 不换行

2. 父级font-size设置为0;

3. 利用margin-left:负值

#### **图文标签**

```JS
<figure>用于文档中插入的图片

		<figcaption>为文档中插入图片设置标题</figcaption>
		<img src="" />
</figure>
```

#### **- a标签 超链接**

三个用途：

1. 跳转页面

2. 下载文件

	. 锚点跳转	

书写方式：

```JS
<a target="打开方式"  href="跳转地址 或 下载地址 或 锚点"></a>
```

```CSS
<body>
    <!-- <a href="#">跳转到百度</a> -->
    <!-- <a href="https://www.baidu.com/">跳转到百度</a> -->
    <!-- <a target="_self" href="1.自定义列表.html">跳转到自定义列表</a> -->
    <a target="_blank" href="1.自定义列表.html">跳转到自定义列表</a>
<!-- 

    <a target="打开方式"  href="跳转地址 或 下载地址 或 锚点"></a>
    如果没有需要跳转的地方可以写个#，但是超链接必须要有href属性， 否则只是一个占位标签
 -->
</body>
```



如果没有需要跳转的地方可以写个#，但是超链接必须要有href属性，	否则只是一个占位标签

特性：

1- 一行可以显示多个，父级宽度不够会换行显示

2- 不支持宽高

3- 换行会产生空格

4- 父级字体颜色的设置对其无效

5- 有下划线

● 跳转页面

target

\- _blank 新窗口打开

\- _self 在当前窗口打开

`<base href="页面所有相对路径 打开前置路径"  target="页面所有标签打开方式"/>`




● 下载文件

download ：可以用来下载文件

`<a href="6-常用标签和选择器.doc">下载</a>`



● 锚点

跳转到`href`里对应的标签位置

ID 和 href# 相同

```CSS
<body>
    <nav>
        <a href="#index">首页</a>
        <a href="#class">课程</a>
        <a href="#vedio">视频</a>
        <a href="#work">作品</a>
    </nav>
    <div id="index">首页的内容</div>
    <div id="class">课程的内容</div>
    <div id="vedio">视频的内容</div>
    <div id="work">作品的内容</div>
</body>
```

#### **-a标签的伪类**

a标签的特征：

:link - 没有被访问过的

:visited - 被访问过的

:hover - 鼠标经过时的样式

:active - 鼠标单击下，没松开的时候

 

**以上书写的时候，一定要注意顺序 lvha（看到lv包时候的感慨：lv哈）**

```CSS
		a:link{
            color: red;没有被访问过的
        }
        a:visited{
            color: green;被访问过的
        }
        a:hover{
            color: pink;鼠标经过时的样式
        }  
        a:active{
            color: orange;鼠标单击下，没松开的时候
        } 
```

#### **标签语义化**

优点1：

语义化：

为了让结构看上去更加清晰、易读，程序员看到这个标签，就知道是一个	头部，至于是谁的头就靠你 id命名的语义化了

优点2：

浏览器更清晰的知道，当前这块是什么内容

优点3：

SEO优化

搜索引擎优化，搜索关键词的时候，让你的网站显示更靠前的位置。



爬虫会根据你输入的关键词，爬取大量的网站，爬取的时候，会根据你不同的标签，着重找内容，而不是读你的整个网页。

 

#### SEO优化，我们可以做什么？



1. title标签（页面名字）

2. 在页面中添加关键词及描述

`<meta name="keywords" content="开课吧，Web前端开发，javaEE架构师，python爬虫/大数据，机器学习/人工智能，产品经理，c4d，ui设计/uxd">`

上面是关键词



下面是描述

 `<meta name="description" content="开课吧是为互联网从业者提供技能提升，集一线大型互联网公司的用人需求和核心技能，与企业级认证师资合作，提供Web前端架构师、JavaEE高级架构师、人工智能、python爬虫、产品经理、UXD全栈设计、C4D设计的直播课程。">`


3. 权重标签的使用

(1) h1

(2) h2

(3) h3

(4) h4

(5) h5

(6) h6

 

4. 代码精简
5. 图片优化（jpg 和 png 都可以的时候，选择jpg）
6. 网页结构合理



##### 总结

***\*结构类标签\****

`<div></div>` <!-- 不具备任何含义 -->

`<nav></nav>` <!-- 导航 -->

`<header></header>` <!-- 头部（网页或板块） -->

`<footer></footer>` <!-- 底部（网页或板块） -->

`<section></section>` <!-- 板块 -->

`<article></article>` <!-- 文章 -->

`<aside></aside>`<!-- 侧边悬浮 -->

***\*标题类标签\****

`<h1></h1>` <!-- logo或网站名称 -->

`<h2></h2>` <!-- 板块标题 -->

`<h3></h3>` <!-- 文章标题 -->

`<h4></h4>` <!-- 加粗强调文本 -->

`<h5></h5>` <!-- 加粗强调文本 -->

`<h6></h6>` <!-- 加粗强调文本 -->

***\*列表类标签\****

`<ol>`

<li></li>	

</ol>

<!-- 有序列表 -->

`<ul>`

<li></li>

</ul>

<!-- 无序列表 -->

`<dl>`

<dt></dt>

<dd></dd>

<dd></dd>

</dl>

<!-- 自定义列表 -->

 

***\*文本类标签\****

`<p></p> <!-- 段落 -->`

`<span></span>` <!-- 不具备任何含义 -->

`<strong></strong> <b></b>` <!-- 加粗 着重强调 -->

`<em></em> <i></i>` <!-- 文字倾斜 -->

`<mark></mark>` <!-- 文本高亮 -->

`<time></time>` <!-- 时间 -->

`<cite></cite>` <!-- 引用 -->

`<sub></sub> `<!-- 下标文本 -->

`<sup></sup> `<!-- 上标文本 -->

`<del></del>` <!-- 删除文本 -->

***\*图片相关标签\****

<img src="图片地址" /> <!-- 图片 -->

`<figure>`

`<img src="图片地址" />`

`<figcaption>图片描述文字</figcaption>`

`</figure>`<!-- 图文标签 -->

***\*超链接\****

`<a href="链接地址">超链接</a>`



### 标签和选择器

常用选择器：

① id选择器

② class选择器

③ 标签选择器

④ 通配符

⑤ 群组选择器

 6 包含选择器



###### 普通选择器优先级

当优先级高的选择器 和 优先级低的选择器 给同一个元素，添加同一个样式

会以优先级高的样式为准，最终显示在元素上



优先级规则（普通的选择器）

***\*id > class > 标签选择器 > \*通配符\****

***\*行间样式 > 内部样式和外部样式\****



!important > 行间样式 > id > class > 标签选择器 > *通配符 > 继承样式\> 浏览器默认样式

行内样式的权重为1000

id选择器的权重为0100

class选择器的权重为0010

伪类选择器的权重为0010	

标签选择器的权重为0001					

包含选择器的权重：为包含选择器的权重之和

###### !important

优先级最高，高于行间样式，所以没有其它样式可以替换带有!important的样式，慎重使用

 ```CSS
 <style>
        div{
            background: green !important;
        }
    </style>
 ```

###### 继承：inherit

继承到的优先级非常的低，任何针对这个标签的样式设置，都可以替换掉它

 

###### 垂直居中

***\*- vertical-align 属性设置元素的垂直对齐方式\****

***\*- 作用于：行内块元素身上或行内替换元素\****

vertical-align: top;

vertical-align: middle;  居中

vertical-align: bottom;

vertical-align: baseline; (默认情况下是这个，基于基线对齐) 

通过设置 vertical-align: middle;可以达到基于中线进行对齐的效果

- 图片垂直居中

  - 给子元素添加vertical-align：middle，其中一个子元素高度设置为盒子的高度，宽度为0

  - display: table-cell; 转换为单元格

    在单元格中，给父级设置vertical-align，内容会根据设置进行垂直排列

```CSS
<style>
        div{
            width: 500px;
            height: 500px;
            border: 5px solid #000;
            display: table-cell;
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <div>
        <img src="img/1.jpg" alt="">
    </div>
</body>
```



###### 标签嵌套规则：

1. ul下只能用li

2. ol下只能用li

3. dl下只能用dt、dd

4. figcaption只能写在figure内，写在第一个或者最后一个

5. a标签里面不能套a标签



## 第五章：标签的类型划分、转化、默认清除

#### 所有标签

```CSS
<body>
    <div>div1</div>
    <div>div2</div>
    <hr/>
    <header>头部1</header>
    <header>头部2</header>
    <hr/>
    <footer>底部1</footer>
    <footer>底部2</footer>
    <hr/>
    <nav>导航1</nav>
    <nav>导航2</nav>
    <hr/>
    <aside>侧边1</aside>
    <aside>侧边2</aside>
    <hr/>
    <article>文章1</article>
    <article>文章2</article>
    <hr/>
    <section>板块1</section>
    <section>板块2</section>
    <hr/>
    <h1>h1标题1</h1>
    <h1>h1标题2</h1>
    <hr/>
    <h2>h2标题1</h2>
    <h2>h2标题2</h2>
    <hr />
    <h3>h3标题1</h3>
    <h3>h3标题2</h3>
    <hr />
    <h4>h4标题1</h4>
    <h4>h4标题2</h4>
    <hr />
    <h5>h5标题1</h5>
    <h5>h5标题2</h5>
    <hr />
    <h6>h6标题1</h6>
    <h6>h6标题2</h6>
    <hr/>
    <ol>
        <li>ol - li1</li>        
        <li>ol - li2</li>        
    </ol>
    <ol>
        <li>ol2 - li0</li>
        <li>ol2 - li0</li>
    </ol>
    <hr />
    <ul>
        <li>ul - li1</li>
        <li>ul - li2</li>
    </ul>
    <ul>
        <li>ul2 - li0</li>
        <li>ul2 - li0</li>
    </ul>
    <hr/>
    <dl>
        <dt>a-标题1</dt>
            <dd>a-描述1</dd>
            <dd>a-描述2</dd>
    </dl>
    <dl>
        <dt>b-标题1</dt>
            <dd>b-描述1</dd>
            <dd>b-描述2</dd>
    </dl>
    <hr/>
    <figure>figure1</figure>
    <figure>figure2</figure>
    <hr/>
    <figcaption>figcaption1</figcaption>
    <figcaption>figcaption2</figcaption>
    <hr/>
    <p>p1</p>
    <p>p2</p>
    <hr/>
    <span style="width: 200px;">span1</span>
    <span>span2</span>
    <hr/>
    <strong style="width: 200px;">strong1</strong>
    <strong>strong2</strong>
    <hr/>
    <em style="width: 200px;">em1</em>
    <em>em2</em>
    <hr/>
    <mark style="width: 200px;">mark1</mark>
    <mark>mark2</mark>
    <hr/>
    <cite style="width: 200px;">引用1</cite>
    <cite>引用2</cite>
    <hr/>
    <sub style="width: 200px;">下标1</sub>
    <sub>下标2</sub>
    <hr/>
    <sup style="width: 200px;">上标1</sup>
    <sup>上标2</sup>
    <hr/>
    <del>删除1</del>
    <del>删除2</del>
    <hr/>
    <a href="#">链接1</a>
    <a href="#">链接2</a>
    <hr/>
    <img style="width: 200px;" src="img/1.jpg" alt="">
    <img src="img/2.jpg" alt="">
</body>
```



#### 标签分类

- 块标签

***\*如果独占一行，块标签\****，根据这个特性，我们挑出所有的块标签，如下：

 

`<h1></h1>、<h2></h2>、<h3></h3>、<h4></h4>、<h5></h5>、<h6></h6>`

`<header></header>、<footer></footer>、<nav></nav>、		<section></section>、`

`<article></article>、<aside></aside>、	<div></div>`

`<ul></ul>、<ol></ol>、<li></li>`

`<dl></dl>、<dt></dt>、<dd></dd>`

`<p></p>`

`<figure></figure><figcaption></figcaption>`

 1. 不设置宽度，默认撑满父级
        2. 独自占有一行
           3. 支持所有样式的设置
           4. 块状元素一般作为其他元素的容器，它可以容纳其它行内元素和其它块元素。



- 内联标签

***\*如果是一行可以多个，并且不接受宽度的设置的，内联标签\****，根据这个特性，我们挑出如下标签：

 

`<span></span>`

`<strong></strong>`

`<b></b>`

`<em></em>`

`<i></i>`

`<mark></mark>`

`<cite></cite>`

`<sub></sub>`

`<sup></sup>`

`<del></del>`

`<a href="#"></a>`



***\*内联标签特性\*******\*：\****

1. 一行可以显示多个

2. 不支持宽高的设置，宽高由内容撑开

3. 代码换行会解析空格

4. 上下margin、上下padding、上下border会受到影响





- 内联块标签

***\*如果一行可以多个，并且接受宽度的设置，内联块标签\****，根据这个特性，我们挑出如下标签：

`<img src="" alt="">`

`<input  type=””/>`

 ***\*行内块标签：\****

1. 一行可以显示多个

2. 支持宽高的设置

3. 代码换行会解析空格

4. 需要设置对齐方式为顶部 vertical-align:top



#### 标签特性



- 块标签：

1. 独自占有一行

2. 支持所有样式的设置

3. 不设置宽度，默认撑满父级



- 内联标签：

1. 一行可以显示多个

2. 不支持宽高的设置，宽高由内容撑开

3. 代码换行会解析空格

4. 上下margin、上下padding、上下border会受到影响



- 内联块标签：

1. 一行可以显示多个

2. 支持宽高的设置

3. 代码换行会解析空格

4. 需要设置对齐方式为顶部 vertical-align:top



#### 标签嵌套规则

1. ul下只能用li

2. ol下只能用li

3. dl下只能用dt、dd

4. figcaption只能写在figure内

5. a标签里面不能套a标签

6. p、h1~h6、dt 标签中 不用块标签

7. 内嵌标签中 不用块标签



#### 标签转换：

###### display

\- block 块

\- list-item （列表项，在块的基础上多了列表样式）

\- inline 内联

\- inline-block 内联块

\- none 无（该元素会隐藏起来，经常可以用来做下拉菜单）

 

***\*本身是内联，通过display转为块的标签，是可以放在内联标签里面的\****



#### 标签默认样式清除：

- body

```CSS
body{

margin: 0;

font: 14px "微软雅黑";

}
```

Δ margin 是默认样式

Δ font 以设计图出现次数最多的 字体大小 和 字体进行设置（字体样式可	 以继承）

 

- p、h1~h6、dl、dd、figure

```CSS
h1,h2,h3,h4,h5,h6,p,dl,dd,figure{

margin: 0;

}
```

Δ h1、h2、h3、h4、h5、h6、p、dl 都是上下margin

Δ dd 左margin

 

- h1~h6、strong、b

```CSS
h1,h2,h3,h4,h5,h6,strong,b{

font-weight: normal;

}
```

Δ 字体在默认情况下都有加粗

 

- em、i、cite

```CSS
em,i,cite{

font-style: normal;

}
```

Δ 字体在默认情况下倾斜

 

- ul、ol

```CSSS
ul,ol{

margin: 0;

padding: 0;

list-style: none;

}
```

Δ ul、ol有margin值，同时去除list默认列表样式

 

- mark

```CSSS
background: none;
```

Δ 去除高亮背景色

 

- a

```CSS
a{

text-decoration: none;

color: black;

}
```



Δ 链接默认有下划线

Δ 文字默认颜色鲜艳，可把颜色默认设置页面出现最多的颜色

 

- img

```CSSS
img{

vertical-align: top;

border: none;

}
```

Δ 内联块标签默认对齐：基线，将其修改为顶部

Δ img放在a标签内的时候，部分浏览器会加上边框，如：IE



***\*所有转为inline-block的元素，记得最好也加上vertical-align:top\****



#### reset文件

在实际工作中，经常会有一个文件来专门处理默认样式，一般叫做reset

可以通过外部引入的方式，这样不需要重复写。



- 关于margin：0 auto；

1）为什么对一个不设置宽度的div用 margin：0 auto; 不起作用？

左右两边的距离是根据：（标签占有宽度 - 标签本身宽度）/ 2 分配的

2）为什么对一个内联/行内 或 内联块/行内块元素设置margin:0 auto;也不起作用？

内联/行内 或内联块/行内 占有的宽度和标签本身的宽度是一致的，所以达不到居中效果

3）内联/行内 或内联块/行内块元素想居中怎么办？

设置：text-align: center;

 

- 低版本H5标签兼容方案：

\- 使用JS创建标签，然后把改标签的样式手动设置

\- 可以使用：html5shiv

#### cursor鼠标指针设置

\- default  默认光标

\- pointer (手指)

\- move（移动）

\- text（文字光标）

\- auto（自动）

wait(等待状态)

help(帮助)     

crosshair(十字架)

se-resize(向下及向右)           

sw-resize(向下及向左)

```CSS
<style>
        div{
            width: 200px;
            height: 200px;
            background: pink;
            /* cursor: pointer; */
            cursor: move;
        }
    </style>
```

