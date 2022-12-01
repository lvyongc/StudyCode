### CDN

![cdn](C:\Users\admin\Desktop\系统笔记\img_js库\cdn.png)

------

#### 给服务器减压

- 通过nginx 实现 负载均衡，配置多台服务器，每个城市请求不同的服务器

![服务器减压](C:\Users\admin\Desktop\系统笔记\img_js库\服务器减压.png)

------

#### 提高访问速度

- 购买CDN，得到域名和DNS
- 解析用户本地DNS，再解析网站授权DNS，再解析CDN阿里云DNS，得到ip，访问ip对应的服务器（如果CDN服务器没有，就去源服务器），服务器返回数据，给到每一个CDN服务器，并缓存下来，CDN服务器最后返回给客户端
  - 另一个用户访问时，因为之前CDN已经缓存了数据，现在可以直接通过CDN服务器返回数据，而不需要再去源服务器访问，实现访问就近服务器，提供访问速度，并给源服务器减压

![CND工作原理](C:\Users\admin\Desktop\系统笔记\img_js库\CND工作原理.png)

### Lodash库

![underscore库 VS Lodash库](C:\Users\admin\Desktop\系统笔记\img_js库\underscore库 VS Lodash库.png)

------

### Day.js库

![Day.js库](C:\Users\admin\Desktop\系统笔记\img_js库\Day.js库.png)

------

### Bootstrap

- Bootstrap 是一个前端框架
  - 由CSS\JS\HTML组成
  - 在使用 Bootstrap 前，需要引入相应的 CSS\JS 文件，并添加一些全局配置

#### 认识Bootstrap

![认识Bootstrap](C:\Users\admin\Desktop\系统笔记\img_js库\认识Bootstrap.png)

------

#### 起源

![起源](C:\Users\admin\Desktop\系统笔记\img_js库\起源.png)

------

#### Bootstrap优缺点

![Bootstrap优缺点](C:\Users\admin\Desktop\系统笔记\img_js库\Bootstrap优缺点.png)

------

#### 学习Bootstrap理由

![学习Bootstrap理由](C:\Users\admin\Desktop\系统笔记\img_js库\学习Bootstrap理由.png)

------

#### 引入Bootstrap

- CDN、源码、npm

![引入1](C:\Users\admin\Desktop\系统笔记\img_js库\引入1.png)

------

![引入2](C:\Users\admin\Desktop\系统笔记\img_js库\引入2.png)

------

#### 屏幕尺寸

- 不同尺寸，通过媒体查询，从上到下，尺寸小到大，先写默认样式，再写小屏样式，最后写大屏样式，这样大屏覆盖小屏，小屏覆盖默认，让后写的生效
  - 实现响应式
  - 媒体查询+flex+%
  - `flex:0 0 33%` 不放大、不缩小、固定宽度33%
  - `min-width`
  - 容器左右margin15；行左右margin -15；列左右margin15；通过抵消，避免出现多个margin
- 只使用响应式时，可以只引入css文件，不需要js文件

媒体查询-图片

![屏幕尺寸](C:\Users\admin\Desktop\系统笔记\img_js库\屏幕尺寸.png)

------

#### 响应式容器

- 不同容器，有不同的样式，不同的作用

![响应式容器](C:\Users\admin\Desktop\系统笔记\img_js库\响应式容器.png)

------

#### 网格系统

![网格系统](C:\Users\admin\Desktop\系统笔记\img_js库\网格系统.png)

------

#### 12列网格系统

![12列网格系统](C:\Users\admin\Desktop\系统笔记\img_js库\12列网格系统.png)

------

#### 网格系统原理

![网格系统原理](C:\Users\admin\Desktop\系统笔记\img_js库\网格系统原理.png)

------

![网格系统原理2](C:\Users\admin\Desktop\系统笔记\img_js库\网格系统原理2.png)

------

#### 网格系统-row的负外边距（margin）

![网格系统-row的负外边距（margin）](C:\Users\admin\Desktop\系统笔记\img_js库\网格系统-row的负外边距（margin）.png)

------

#### 网格系统-嵌套(nesting)

![网格系统-嵌套(nesting)](C:\Users\admin\Desktop\系统笔记\img_js库\网格系统-嵌套(nesting).png)

------

#### 网格系统-自动布局（Auto-layout ）

![网格系统-自动布局（Auto-layout ）](C:\Users\admin\Desktop\系统笔记\img_js库\网格系统-自动布局（Auto-layout ）.png)

------

#### 网格系统-响应式类（Responsive Class）

- 一行总12份，不同尺寸，占不同份数，超过12换行
- col-12 是默认 最小的
- 从小到大写

###### 解析

- 默认 div 占12份，一个div是一行，一行总12份

col-12-图片

- sm尺寸 div 占6份，2个div是一行

col-sm-6-图片

- md尺寸 div 占4份，3个div是一行

col-md-4-图片

- lg尺寸 div 占3份，4个div是一行，多的换行

col-lg-3-图片

- xl尺寸 div 占2份，6个div是一行

col-xl-2-图片

```html
  <div class="container">

    <div class="row">
      
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 item">1</div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 item">2</div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 item">3</div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 item">4</div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 item">5</div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 item">6</div>

    </div>
      
  </div>
```

###### 控制显示隐藏

```html
  <!-- 引入 Bootstarp中的CSS文件 -->
  <link rel="stylesheet" href="../libs/bootstrap-4.6.1/css/bootstrap.css">
</head>
<body>
  
  <!-- 1.某个元素只在lg(>=992px) 和 xl 屏显示 -->
  <h1 class="d-none d-lg-block">某个元素只在lg(>=992px) 和 xl 屏显示</h1>
  <!-- 2.某个元素只在lg(>=992px) 和 xl 屏隐藏 -->
  <h1 class="d-block d-lg-none">某个元素只在lg(>=992px) 和 xl 屏隐藏</h1>
  <!-- 3.某个元素只在 md(>=768px) 屏隐藏；-->
  <h1 class="d-block d-md-none d-lg-block">某个元素只在 md(>=768px) 屏隐藏；</h1>
```



![网格系统-响应式类（Responsive Class）](C:\Users\admin\Desktop\系统笔记\img_js库\网格系统-响应式类（Responsive Class）.png)

------

![响应式类2](C:\Users\admin\Desktop\系统笔记\img_js库\响应式类2.png)

------

![响应式类3](C:\Users\admin\Desktop\系统笔记\img_js库\响应式类3.png)

------

#### 正确使用 Bootstarp

- 只需引入 css 文件，使用 Bootstarp 的class 即可
  - 比自己写 css 要 高效很多
  - 通过 添加 class 写自己的样式，把自己的样式文件 放在 Bootstarp css 文件 下面，来覆盖修改 Bootstarp 样式
- 需要使用组件时，再引入 js 文件

