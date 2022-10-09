## Min Program - 微信 小程序

### 认识小程序

- 注册账号，拿到AppId
- 下载开发者工具
- 创建项目开发

##### 插件

- wxml
- 小程序开发助手
- wechat-snippet

##### for循环

- 使用 block 包裹，*this是item

```js
<block wx:for="{{movies}}" wx:key="*this">
  <view>
    {{item}}-{{index}}
  </view>
</block>
```

##### 事件绑定&for

- for生成多个按钮并绑定同个事件，如何区分点击的是哪个按钮？
  - 通过自定义属性区分

```js
  <button size="mini" bindtap="add">+</button>
```

- 循环生成背景色按钮，点击换肤功能
- *this是 item

```js
btns: ["red", "blue", "green", "orange"]

<block wx:for="{{btns}}" wx:key="*this">
    <button 
      class="btn" 
		// 每个按钮的背景色
      style="background: {{item}};"
      bindtap="onBtnClick"
		// 每个按钮的自定义属性
      data-color="{{item}}"
    >
      {{ item }}
    </button>
  </block>
```

- data-名字， 自定义属性，data-color
  - 在绑定函数 onBtnClick 的参数 event 中获取，以此来区分，循环生成的多个按钮，是哪个被点击了
  - 跳转的路径中不能包含 中文

```js
  onBtnClick(event) {
    // 1.获取item，根据不同的自定义属性，进行不同的操作
    const item = event.target.dataset.color

    // 2.跳转路径
    wx.navigateTo({
      url: item.path,
    })
  }
```

##### 修改数据

- 使用 this.data 改变数据，不会被响应式系统监听到（页面中的数据不会改变）
- 需要使用 this.setData()，num是修改的谁，对应的是如何修改，this.data.num是当前num值

```js
  add(){
    console.log("+");
    this.setData({
      num:this.data.num + 1
    })
  }
```

### 小程序的双线程

- 单线程执行过多JS，可能会阻塞渲染，导致界面卡顿，比如H5页面
- 小程序采用了 **双线程** 两个  WebView ，一个负责渲染（渲染层），一个负责执行JS（逻辑层）
  - 页面渲染展示，在 一个 WebView 线程，渲染一个页面就是一个WebView 线程
  - 另一个  WebView线程  只负责通过 JsCore  执行 js 逻辑，在js 执行完成后，通过 微信app 把JS执行后的结果，交给第一个WebView 进行展示
  - 缺点
    - 因为创建了多个WebView 线程，增加了内存占用

![小程序的架构模型](C:\Users\admin\Desktop\系统笔记\img_min_program\小程序的架构模型.png)

------

### 配置文件

- 一般修改的是 app.json \ page.json

- project.config.json：项目配置文件, 比如项目名称、appid、基础库版本 等； 
  - project.private.config.json中的相同设置优先级高于 project.config.json
  - config配置公共的配置。private.config配置个人的配置。
  - 可以将 private.config 写到 `.gitignore` 避免版本管理的冲突，在提交到仓库时忽略的文件
  -  https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html 
- sitemap.json：小程序搜索相关的； 
  - 允许 哪些页面 被搜索到。
  -  https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html 
- app.json：全局配置； 
- page.json：页面配置；

##### 基础库版本

- 不同的基础库，提供不同的属性、方法、功能
- 在右上角，详情模块，修改的是 private.config，个人的
- 修改公共的要在 project.config.json 手动修改

### 全局app配置文件

- 小程序中所有的页面都是必须在pages中进行注册，才能使用。
- https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html

![全局app配置文件](C:\Users\admin\Desktop\系统笔记\img_min_program\全局app配置文件.png)

------

##### 下拉刷新

- 具体页面配置 "enablePullDownRefresh": true 开启下拉
- 全局配置中的 window 中的 backgroundTextStyle 是设置下拉动画颜色的（3个点的颜色）
- 在页面js中，监听下拉，下拉有默认的取消时间3s，可以自己设置取消时间（请求的时间）

```js
  // 监听下拉
  onPullDownRefresh(){
    // 用户下拉后需要做的事情
    // 1请求数据
    ...
    // 2拿到数据后，停止下拉
    wx.stopPullDownRefresh({
      success:(res)=>{
        // 停止成功了
      },
      fail:(res)=>{
        // 停止失败了
      }
    })
  }
```

##### 上拉加载

- 不需要手动开启，只需要设置触发的距离

- 页面配置中，配置  "onReachBottomDistance": 0 ，距离底部多少距离时，触发上拉
- 监听上拉

```js
  // 监听页面滚动到底部、监听上拉
  onReachBottom(){
    
  }
```

```js
  // 监听下拉刷新
  onPullDownRefresh() {
    console.log("用户进行下拉刷新~");

    // 模拟网络请求: 定时器
    setTimeout(() => {
        // 顶部下拉请求最新的30数据
      this.setData({ listCount: 30 })

      // API: 停止下拉刷新
      wx.stopPullDownRefresh({
        success: (res) => {
          console.log("成功停止了下拉刷新", res);
        },
        fail: (err) => {
          console.log("失败停止了下拉刷新", err);
        }
      })
    }, 1000)
  },

  // 监听页面滚动到底部
  onReachBottom() {
    console.log("onReachBottom");
      // 上拉，再请求30数据
    this.setData({
      listCount: this.data.listCount + 30
    })
  }
```

![上拉和下拉](C:\Users\admin\Desktop\系统笔记\img_min_program\上拉和下拉.png)

------

##### 导航栏

- list 数组就是 导航栏

```js
  "tabBar": {
      // 默认的颜色
    "color": "",
        // 选中的颜色
    "selectedColor": "",
        // 背景色
    "backgroundColor": "",
        // 导航栏的位置，可以在底部、也可以在顶部
    "position": "bottom",
        // 上边框的颜色
    "borderStyle": "black",
        // 是否开启 自定义 tabBar
    "custom":"false",
    "list": [
        // 第一个
      {
          // 对应的页面路径（pages中的）
        "pagePath": "pages/index/index",
          // 文字
        "text": "首页",
          // 默认的icon
        "iconPath": "pages/img/icon.png",
          // 选中的icon
        "selectedIconPath": ""
      },
        // 第二个
      {
        "pagePath": "",
        "text": "",
        "iconPath": "",
        "selectedIconPath": ""
      }
    ]
  }
```

##### 组件样式

- app.json 中 "style": "v2" 是使用最新的组件样式

### 页面page配置文件

- 页面中配置项在当前页面会覆盖 app.json 的 window 中相同的配置项

- https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html

```js
{
    // 用于使用自定义组件
  "usingComponents": {},
      // 开启下拉
  "enablePullDownRefresh": true,
      // 距离底部多少距离时，触发上拉
  "onReachBottomDistance": 0,
      // 顶部背景色
  "navigationBarBackgroundColor": "#000000",
      // 顶部文字色
  "navigationBarTextStyle": "black",
      // 顶部文字内容
  "navigationBarTitleText": "首页",
      // 自定义
  "navigationStyle": "custom"
}
```

![页面配置](C:\Users\admin\Desktop\系统笔记\img_min_program\页面配置.png)

### 注册小程序 – App函数-app.js

- 每个小程序都需要在 app.js 中调用 App 函数 注册小程序示例
  - 在注册时, 可以绑定对应的生命周期函数；
  - 在生命周期函数中, 执行对应的代码；
- https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html

#### app函数作用

##### 作用一：判断打开场景

- 根据不同的场景，进行不同的操作

- 常见的打开场景：群聊会话中打开、小程序列表中打开、微信扫一扫打开、另一个小程序打开

- https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html

![判断打开场景](C:\Users\admin\Desktop\系统笔记\img_min_program\判断打开场景.png)

```js
  onLaunch\onShow(options) {
    // 作用一: 判断小程序的进入场景
    console.log("onShow:", options);
  }
```

------

##### 作用二：定义全局App的数据

- globalData是自定义的
- 这个全局数据，是固定的数据，不具有响应式，一个页面改变全局数据，另一个页面拿到的还是之前的数据值

![作用二：定义全局App的数据](C:\Users\admin\Desktop\系统笔记\img_min_program\作用二：定义全局App的数据.png)

------

##### 作用三 – 生命周期函数

- 在生命周期函数中，完成应用程序启动后的初始化操作
- onLaunch 小程序初始化，只一次，执行 onLaunch  说明小程序重启了
  - 在这个声明周期，进行登录
  - 读写本地数据，设置全局共享数据
  - 发送所有页面都需要的请求数据，并共享

```js
  onLaunch(options) {
    // 0.从本地获取token/userInfo
    const token = wx.getStorageSync("token")
    const userInfo = wx.getStorageSync("userInfo")

    // 1.进行登录操作(判断逻辑)
    if (!token || !userInfo) {
      // 将登录成功的数据, 保存到storage
      console.log("登录操作");
      wx.setStorageSync("token", "kobetoken")
      wx.setStorageSync("userInfo", { nickname: "kobe", level: 100 })
    }

    // 2.将获取到数据保存到globalData中
    this.globalData.token = token
    this.globalData.userInfo = userInfo


    // 3.发送网络请求, 优先请求一些必要的数据
    // wx.request({ url: 'url'})
  },
```

### 注册页面 – Page函数-页面.js

- 小程序中的每个页面, 都有一个对应的js文件, 其中调用Page函数注册页面示例 
- 在注册时, 可以
  - 绑定初始化数据
  - 生命周期回调
  - 事件处理函数
-  https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html

##### 注册一个Page页面时，我们一般需要做什么呢？ 

- 在生命周期函数中发送网络请求，从服务器获取数据
- 初始化一些数据，以方便被wxml引用展示 
- 监听wxml中的事件，绑定对应的事件函数
- 其他一些监听（比如页面滚动、上拉刷新、下拉加载更多等

```js
Page({
  data: {
    // 2.作用二: 定义本地固定的数据
    counter: 100,
  },
  // 1.作用一: 发送网络请求, 请求数据
  onLoad() {
    console.log("onLoad");
    // 发送网络请求
    wx.request({
      url: "http://123.207.32.32:8000/home/multidata",
      success: (res) => {
        const data = res.data.data
        const banners = data.banner.list
        const recommends = data.recommend.list
        this.setData({ banners, recommends })
      }
    })
  },

  // 3.绑定wxml中产生事件后的回调函数
  onBtn1Click() {
    console.log("onBtn1Click");
  }

  // 4.绑定下拉刷新/达到底部/页面滚动
  onPullDownRefresh() {
    console.log("onPullDownRefresh");
  },
  onReachBottom() {
    console.log("onReachBottom");
  },
     // 根据滚动的距离，进行 元素的 显示和隐藏
  onPageScroll(event) {
      // 滚动距离
    console.log("onPageScroll:", event);
  },

  // 生命周期函数: 
  onShow() {
    console.log("onShow");
  }
})
```

##### 轮播图

- image组件默认宽度和高度: 320x240，所以图片不会完整展示出来
  - image宽度100%，完整展示图片宽度
  - image，mode="widthFix"，根据宽度自动计算高度，但还是没有完整展示图片
  - 图片高度，需要自己计算再设置到 image

### 页面生命周期

- 双线程模式
  - 渲染层线程，渲染页面，wxml\wxss
  - 逻辑层线程，执行JS，js\json
- 线程是如何工作的
  - 双线程同时开始运行
  - 进入页面，渲染层初始化，解析wxml、wxss，等待逻辑层创建page 实例，执行生命周期onload\onshow，page 实例创建完成后，逻辑层通过微信app把page实例中 初始化 的数据，传递给渲染层，渲染层接着开始第一次渲染 ，并在渲染完成通知给逻辑层，逻辑层会执行周期 onReady，页面首次渲染完成。
  - 修改数据时，逻辑层把新数据传递给渲染层，渲染层 重新渲染
  - 退出小程序，切到微信app时，就是后台，逻辑层执行 onHide，隐藏
  - 从app 再次进入 onShow，显示
  - 返回上一个页面时。返回之前页面的，逻辑层执行 onUnload 销毁

##### 周期执行时刻

- 首次进入
  - onload、onShow、onReady，初始化、显示、渲染
- 返回微信，onHide，隐藏
- 再次进入小程序，onShow ，显示
- 从A页面返回到B页面，A页面执行 onUnload 销毁

![page-lifecycle.2e646c86](C:\Users\admin\Desktop\系统笔记\img_min_program\page-lifecycle.2e646c86.png)

------

### 常见的内置组件

##### Text文本组件

- 显示文本，类似span，是内联元素

```js
<!-- user-select 文字是否可以被选中 -->
<text user-select>{{ message }}</text>
<!-- decode 特殊字符是否解码；大于符号 -->
<text decode>&gt;</text>
```

##### Button按钮组件

- 默认是块级元素
- mini是内联块

```js
<button size="mini" type="warn">type属性</button>
<button size="mini" class="btn">自定义属性</button>
<!-- 缕空 -->
<button size="mini" plain>plain属性</button>
<!-- 禁用 -->
<button size="mini" disabled>disabled属性</button>
<!-- 加载 -->
<button size="mini" loading class="btn">loading属性</button>
<!-- 按下去的效果 -->
<button size="mini" hover-class="active">hover效果</button>
```

###### 按钮的 open-type 属性

```js
<!-- contact 打开客服会话 -->
<button open-type="contact" size="mini" type="primary">打开会话</button>

<!-- 获取用户信息，通过绑定事件，调用 wx.getUserProfile 获取 -->
<button size="mini" type="primary" bindtap="getUserInfo">用户信息</button>

<!-- getPhoneNumber获取用户手机号，在 bindgetphonenumber 的回调函数的默认参数event中拿到 code,使用 code请求后端接口，拿到手机号 -->
<button 
  size="mini" 
  type="primary"
  open-type="getPhoneNumber"
  bindgetphonenumber="getPhoneNumber"
>
  手机号码
</button>
```

```js
  getUserInfo(event) {
    // 调用API, 获取用户的信息
    // 1.早期小程序的API, 基本都是不支持Promise风格
    // 2.后期小程序的API, 基本都开发支持Promise风格
    wx.getUserProfile({
      desc: 'desc',
      // success: (res) => {
      //   console.log(res);
      // }
    }).then(res => {
      console.log(res);
    })
  },
  getPhoneNumber(event) {
      // event中拿到 code,使用 code请求后端接口，拿到手机号
    console.log(event);
  }
```

##### View视图组件

- 块级

```js
<view bindtap="onViewClick" hover-class="active">我是view组件</view>
```

##### Image图片组件

```js
<!-- 根目录: /表示根目录 -->
<!-- 1.图片的基本使用 -->
<!-- image元素 固定的默认 宽度和高度: 320x240 -->
<!-- 本地、网络，都可以 -->
<image src="/assets/zznh.png"/>
<image src="https://pic3.zhimg.com/v2-9be23000490896a1bfc1df70df50ae32_b.jpg"/>

<!-- 2.图片重要的属性: mode -->
<!-- aspectFit 缩放，完整地将图片显示出来 -->
<image src="/assets/zznh.png" mode="aspectFit"/>
<!-- image基本都是设置widthFix，根据宽度自动计算高度 -->
<image src="/assets/zznh.png" mode="widthFix"/> -->
<!-- <image src="/assets/zznh.png" mode="heightFix"/>
```

##### Image选择手机相册图片

- wx.chooseMedia
- 拍摄或从手机相册中选择图片或视频
- https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html

```js
<!-- 3.选择本地图片: 将本地图片使用image展示出来 -->
<button bindtap="onChooseImage">选择图片</button>
<image class="img" src="{{chooseImageUrl}}" mode="widthFix"/>
 
<!-- 视频 -->
<video src=""></video>
```

```js
  onChooseImage() {
      // api chooseMedia
    wx.chooseMedia({
      mediaType: "image"
    }).then(res => {
        // 获取结果
      const imagePath = res.tempFiles[0].tempFilePath
      this.setData({ chooseImageUrl: imagePath })
    })
  }
```

##### ScrollView滚动组件

- 局部滚动
- y轴滚动，先设置 固定高度，以及 滚动方向 scroll-y
- x轴滚动，先设置 固定宽度 或者 使用默认宽度
  - ScrollView有默认宽度，占据整行，屏幕宽度
  - 设置 滚动方向 scroll-x
  - 设置让一行可以显示多个的flex布局，enable-flex属性 让设置的 flex布局生效
  - 先css编写flex并不允许缩放，再通过 enable-flex 生效 flex布局

```js
<!-- 上下滚动(y轴) -->
<scroll-view class="container" scroll-y>
    
  <block wx:for="{{viewColors}}" wx:key="*this">
    <view class="item" style="background: {{item}};">{{item}}</view>
  </block>

</scroll-view>

<!-- 左右滚动(x轴) -->
<scroll-view 
  class="container scroll-x" 
  scroll-x
  enable-flex
>
      
  <block wx:for="{{viewColors}}" wx:key="*this">
    <view class="item" style="background: {{item}};">{{item}}</view>
  </block>

</scroll-view>
```

```css
/* scroll-view */
.container {
  background-color: orange;
  height: 150px;
}

.scroll-x {
  display: flex;
}

.item {
  width: 100px;
  height: 100px;
  color: #fff;
  flex-shrink: 0;
}
```

##### 监听滚动

```js
<!-- 监听事件 -->
<scroll-view 
  class="container scroll-x" 
  scroll-x
  enable-flex
  bindscrolltoupper="onScrollToUpper"
  bindscrolltolower="onScrollToLower"
  bindscroll="onScroll"
>

</scroll-view>
```

```js
  // 监听scroll-view滚动
  onScrollToUpper() {
    console.log("滚动到最顶部/左边");
  },
  onScrollToLower() {
    console.log("滚到到最底部/右边");
  },
      // event 中有滚动的距离
  onScroll(event) {
    console.log("scrollview发生了滚动:", event);
  }
```

- detail
  - scrollLeft x轴已滚动的距离
  - scrollWidth x轴总共可以滚动的距离
  - deltaX 
    - 正值 ，向左
    - 负值，向右

##### 组件的共同属性

- data-名字 自定义属性

![组件共同的属性](C:\Users\admin\Desktop\系统笔记\img_min_program\组件共同的属性.png)

------

##### input组件-双向绑定

```js
<input type="text" model:value="{{message}}"/>
```

### WXSS

- 行内样式，标签 style
- 页面样式，页面 wxss
  - 页面样式，是有隔离效果的，只在这个页面生效，其他页面不生效
- 全局样式，app.wxss
- 优先级依次是：行内样式 > 页面样式 > 全局样式

##### WXSS支持的选择器

![WXSS支持的选择器](C:\Users\admin\Desktop\系统笔记\img_min_program\WXSS支持的选择器.png)

------

##### WXSS优先级

![WXSS优先级](C:\Users\admin\Desktop\系统笔记\img_min_program\WXSS优先级.png)

------

##### 尺寸单位

- 设计稿 宽度375px 时，1px = 2rpx；10px 写 20rpx

![尺寸单位](C:\Users\admin\Desktop\系统笔记\img_min_program\尺寸单位.png)

------

### WXML

##### WXML基本格式

- 小程序和Vue一样, 提供了插值语法: 
  - Mustache语法(双大括号)
  - 可以写表达式和计算结果
  - 但不能调用方法

- 大小写敏感：class和Class是不同的属性

##### hidden属性

- hidden 是 做了渲染，display:none
- wx:if 是 不做渲染

![hidden属性](C:\Users\admin\Desktop\系统笔记\img_min_program\hidden属性.png)

------

##### wx:for

- 默认 item index

  - 自定义  item index

  - ```js
    wx:for-item="my-item" wx:for-index="my-index"
    ```

- 遍历 数组、数字、字符串

##### wx:key 作用

- 在修改节点时，添加key，可以复用节点，提高性能

- wx:key 的值以两种形式提供 

  - 字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能 动态改变。

  - 保留关键字 *this 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字。

 ![key](C:\Users\admin\Desktop\系统笔记\img_min_program\key.png)

##### block标签

- block 并不是一个组件
  - 它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。
- 将需要进行遍历或者判断的内容进行包裹
- 将遍历和判断的属性放在block便签中，不影响普通属性的阅读，提高代码的可读性。

```js
<!-- 1.Mustache语法 -->
<view>{{ message }}</view>
<view>{{ firstname + " " + lastname }}</view>
<view>{{ date }}</view>

<!-- 2.条件判断 -->
<view wx:if="{{score > 90}}">优秀</view>
<view wx:elif="{{score > 80}}">良好</view>
<view wx:elif="{{score >= 60}}">及格</view>
<view wx:else>不及格</view>

<!-- 3.hidden属性:v-show -->
<!-- 基本使用 -->
<view hidden>我是hidden的view</view>

<!-- 切换案例 -->
<button bindtap="onChangeTap">切换</button>
<view hidden="{{isHidden}}">哈哈哈哈</view>
<view wx:if="{{!isHidden}}">呵呵呵呵</view>


<!-- 4.列表展示 -->
<!-- 4.1.wx:for基本使用 -->
<!-- 遍历data中的数组 -->
<view class="books">
  <view wx:for="{{books}}" wx:key="id">
    <!-- item: 每项内容, index: 每项索引 -->
    {{item.name}}-{{item.price}}
  </view>
</view>
<!-- 遍历数字 -->
<view class="number">
  <view wx:for="{{10}}" wx:key="*this">
    {{ item }}
  </view>
</view>
<!-- 遍历字符串 -->
<view class="str">
  <view wx:for="hahehei" wx:key="*this">
    {{ item }}
  </view>
</view>

<!-- 4.2. 细节补充: block-item/index名称-key的使用 -->
<view class="books">
  <block wx:for="{{books}}" wx:key="id" wx:for-item="book" wx:for-index="i">
    <view>{{ book.name }}-{{ book.price }}-{{ i }}</view>
  </block>
</view>
```

### WXS

- 小程序的脚本语言
- 在WXML中是不能直接调用Page/Component中定义的函数
- 使用WXS，在WXML中调用函数
  - 因为WXS中的JS代码，是运行在 渲染层的线程中的，而不是逻辑层线程
  - 但是WXS不能执行复杂逻辑，可能会阻塞页面渲染，违背 双线程 架构设计

##### WXS使用的限制和特点

- WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行
- WXS 的运行环境和其他 JavaScript 代码是隔离的
  - WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序 提供的API
- 在 iOS 设备上小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍
- android 设备 上二者运行效率 无差异

##### WXS的写法

- module  名字
- 独立作用域

![WXS的写法](C:\Users\admin\Desktop\系统笔记\img_min_program\WXS的写法.png)

------

##### utils 文件 导出 WXS

```js
function formatPrice(price) {
  return "¥" + price
}

function calcPrice(books) {
  return "¥" + books.reduce(function(preValue, item) {
    return preValue + item.price
  }, 0)
}

// 必须导出后, 才能被其他地方调用: 必须使用CommonJS导出
module.exports = {
  formatPrice: formatPrice,
  calcPrice: calcPrice
}
```

###### 使用WXS

![wxs](C:\Users\admin\Desktop\系统笔记\img_min_program\wxs.png)

------

### 小程序的事件处理

##### 事件的监听

- 事件是视图层到逻辑层的通讯方式
- 事件可以将用户的行为反馈到逻辑层进行处理
- 通过 bind / catch 这个属性绑定在事件处理函数
- 事件处理函数 会收到一个事件对象 event

##### 事件类型

![事件](C:\Users\admin\Desktop\系统笔记\img_min_program\事件.png)

------

##### 事件对象event

```js
<!-- 点击 -->
<button bindtap="onBtnTap">按钮</button>
<!-- 长按 -->
<button bindlongpress="onBtnLongpress">按钮</button>
```



![事件对象event](C:\Users\admin\Desktop\系统笔记\img_min_program\事件对象event.png)

------

##### currentTarget和target的区别

- target  触发事件的元素
- currentTarget  绑定事件的元素
- 获取自定义属性
  - 自定义属性，写在哪里，就从哪里获取
  - 一般都从  绑定事件的元素 获取
  - `event.currentTarget.dataset.name`

```js
<view id="outer" class="outer" data-name="why" bindtap="onOuterViewTap">
  <view id="inner" class="inner"></view>
</view>

  onOuterViewTap(event) {
    // 1.target触发事件的元素
    // 2.currentTarget绑定事件的元素
    console.log("onOuterViewTap:", event);
    console.log(event.target);
    console.log(event.currentTarget);

    // 3.获取自定义属性: name
    const name = event.currentTarget.dataset.name
    console.log(name);
  },
```

##### touches和changedTouches的区别

- 都是触摸点的信息
- 多指触摸，依次触摸时
  - changedTouches 是改变的手指，第一次一个手指，第二次3个手指同时触摸，是3个
  - touches 是所有的手指，4个
  - 离开时，touches 为空，changedTouches 是离开的手指（改变的）

```js
<!-- bindtap 点击；bindtouchend 触摸离开；bindlongpress 长按 -->
<view
  class="touches"
  bindtap="onTouchTap"
  bindlongpress="onLongPress"
  bindtouchend="onTouchEnd"
>
  多指触摸
</view>

  // 监听触摸事件
  onTouchTap(event) {
    console.log("tap:", event);
  },
  onLongPress(event) {
    console.log("long:", event);
  },
  onTouchEnd(event) {
    console.log("end:", event);
  },
```

##### 事件参数的传递

- 通过data-属性来完成
  - 添加：data-属性的名称 
  - 获取：e.currentTarget.dataset.属性的名称

```js
<view 
  class="arguments"
  bindtap="onArgumentsTap"
  data-name="why"
  data-age="18"
  data-height="1.88"
>
  参数传递
</view>

  // 监听事件, 并且传递参数
  onArgumentsTap(event) {
    console.log("onArgumentsTap:", event);
    const { name, age, height } = event.currentTarget.dataset
    console.log(name, age, height);
  },
```

##### 选项卡案例

```js
<view class="tab-control">
  <block wx:for="{{ titles }}" wx:key="*this">
    <view 
      class="item {{index === currentIndex ? 'active': ''}}"
      bindtap="onItemTap"
      data-index="{{index}}"
    >
      <text class="title">{{ item }}</text>
    </view>
  </block>
</view>

  data: {
    titles: ["手机", "电脑", "iPad", "相机"],
    currentIndex: 0
  },

  onItemTap(event) {
    const currentIndex = event.currentTarget.dataset.index
    console.log(currentIndex);
    this.setData({ currentIndex })
  },
```

### 事件冒泡和事件捕获

- 通过 bindtap 监听的是冒泡阶段的事件
- 通过 capture-bind:tap 监听 捕获阶段的事件

```js
<view class="view1" capture-bind:tap="onView1CaptureTap" bindtap="onView1Tap">
</view>
```

![事件冒泡和事件捕获](C:\Users\admin\Desktop\系统笔记\img_min_program\事件冒泡和事件捕获.png)

#### 阻止事件传递

- capture-bind:tap ，捕获到事件向下传递
- capture-catch :tap，捕获到事件并阻止向下传递
  - 用于在特定位置，阻止事件的执行

#### 通过mark，给逻辑传递数据

```js
<view 
  class="mark"
  bindtap="onMarkTap"
  data-name="why"
  data-age="18"
  mark:name="kobe"
  mark:age="30"
>
  <text mark:address="洛杉矶" class="title">mark</text>
</view>

  // mark的数据传递
  onMarkTap(event) {
      // 自定义属性 {name:'why',age:'18'}
    const data1 = event.target.dataset
	  // mark {name:'kobe',age:'30',address:'洛杉矶'}
    const data2 = event.mark
  }
```

### 组件化开发

- 尽可能的将页面拆分成一个个小的、可复用的组件
- 这样让我们的代码更加方便组织和管理，并且扩展性也更强

![组件化](C:\Users\admin\Desktop\系统笔记\img_min_program\组件化.png)

#### 创建一个组件

- 组件通过 Component 实例化
- 页面 通过 Page 实例化

![创建一个组件](C:\Users\admin\Desktop\系统笔记\img_min_program\创建一个组件.png)

------

#### 使用自定义组件

- 页面需要在 usingComponents 引入组件，名称和组件路径
- 自定义组件也可以引用自定义组件
- 在 app.json 的 usingComponents 引入某个组件
  - 那么所有页面和组件可以直接使用该组件
  - 不需要在页面的 usingComponents 引入了

```js
{
  "usingComponents": {
    "section-info": "/components/section-info/section-info",
    "test-style": "/components/test-style/test-style",
    "tab-control": "/components/tab-control/tab-control"
  }
}
```

#### 组件的样式细节

- 组件内的样式 对 外部样式 的影响 
  - 组件内的class样式，只对组件wxml内的节点生效, 对于引用组件的Page页面不生效
  - 组件内不能使用id选择器、属性选择器、标签选择器 ，否则会对其他组件产生影响
    - 只使用 class 即可
- 外部样式 对 组件内样式 的影响 
  - 外部使用class的样式，只对外部wxml的class生效，对组件内是不生效的
  - 外部使用了id选择器、属性选择器不会对组件内产生影响
  - 外部使用了标签选择器，会对组件内产生影响 
    - 不使用 标签选择器
    - 使用 class 
- 如何让class可以相互影响 
  - 在组件的 Component 对象中，可以传入一个 options 属性，其中 options 属性中有一个styleIsolation（隔离）属性
  - styleIsolation有三个取值：
    -  ✓ - isolated 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（默认取值）
    -  ✓ - apply-shared 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面
    -  ✓ - shared 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置 了

```js
Component({
  options: {
    styleIsolation: "shared"
  }
})
```

------

#### 组件的通信

![组件的通信](C:\Users\admin\Desktop\系统笔记\img_min_program\组件的通信.png)

------

#### 向组件传递数据 - properties

```js
// 页面传递
<section-info 
  title="我与地坛" 
  content="要是有些事情我没说, 别以为是我忘记了"
/>
// 组件接收
Component({
  properties: {
    title: {
      type: String,
      value: "默认标题"
    },
    content: {
      type: String,
      value: "默认内容"
    }
  }
})
// 组件使用
  <view class="title">{{ title }}</view>
  <view class="content info">{{ content }}</view>
```

![向组件传递数据 - properties](C:\Users\admin\Desktop\系统笔记\img_min_program\向组件传递数据 - properties.png)

------

#### 向组件传递样式 - externalClasses

- 用于引用同个组件，但展示不同样式

```js
// 页面写好 cba 样式，通过 自定义键名 info ，键值 cba ，传给组件
<section-info info="cba"/> 
// 组件通过 externalClasses 接收 键名 
Component({
  externalClasses: ["info"]
})
// 组件直接使用 键名
<view class="info"></view>
```

![向组件传递样式 - externalClasses](C:\Users\admin\Desktop\系统笔记\img_min_program\向组件传递样式 - externalClasses.png)

------

#### 组件向外传递事件 – 自定义事件

```js
// bindtap 组件绑定事件
<view bindtap="onTitleTap"></view>
// triggerEvent 并传递事件以及参数
onTitleTap() 
  this.triggerEvent("titleclick", "aaa")
}
// 页面 bind: 监听事件
<section-info 
  bind:titleclick="onSectionTitleClick"
/>
// 执行回调，detail 中 获取参数
  onSectionTitleClick(event) {
    console.log("发生了点击", event.detail);
  }
```

![组件向外传递事件 – 自定义事件](C:\Users\admin\Desktop\系统笔记\img_min_program\组件向外传递事件 – 自定义事件.png)

------

#### 父子通信-选项卡

- 父定义循环项，子接收展示，动态class 给选中的设置样式
  - 循环后，每个子级都有循环本身的index，通过自定义属性=index
  - 然后在点击时，让自定义属性=自定义的选中项
  - 这样点击第几个，自定义属性就是几
  - 最后动态class 通过三目  循环的index = 自定义的选中项，添加class
- 子把选中的传递给父，父拿到选中的请求数据

```js
// 父,titles传递，bind:监听
<tab-control
  class="tab-control"
  titles="{{digitalTitles}}"
  bind:indexchange="onTabIndexChange"
/>
<button bindtap="onExecTCMethod">调用TC方法</button>
<tab-control titles="{{['流行', '新款', '热门']}}"/>
// js
Page({
    // 定义循环项
  data: {
    digitalTitles: ['电脑', '手机', 'iPad']
  },
    // 监听的回调，拿到传递的选中项，根据选中项 请求不同数据
  onTabIndexChange(event) {
      // 选中项
    const index = event.detail
    // 选中项 是数组中的哪一个
    console.log("点击了", this.data.digitalTitles[index]);
  }
})
// 子
Component({
    // 接收
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
// 定义选中项
  data: {
    currentIndex: 0
  },
  methods: {
    onItemTap(event) {
        // 点击时，选中项currentIndex = 自定义属性 index（= 循环的 index）
      const currentIndex = event.currentTarget.dataset.index
      this.setData({ currentIndex })
      // 自定义事件，传递选中项
      this.triggerEvent("indexchange", currentIndex)
    }
  }
})
//  使用并循环展示
<block wx:for="{{ titles }}" wx:key="*this">
    // 动态 class 
    // 设置自定义属性 index
    // 循环时， 自定义属性index = 循环的 index
    // 当 循环的 index = 选中项currentIndex(=自定义属性 index = 循环的 index) 添加class
    <view 
      class="item {{index === currentIndex ? 'active': ''}}"
      bindtap="onItemTap"
      data-index="{{index}}"
    >
      <text class="title">{{ item }}</text>
    </view>
  </block>
```

#### 页面直接调用组件方法

- 通过 selectComponent 和 class 名字

![页面直接调用组件方法](C:\Users\admin\Desktop\系统笔记\img_min_program\页面直接调用组件方法.png)

------

```js
// 页面
// 使用组件，并给组件添加 class  tab-control
<tab-control
  class="tab-control"
  titles="{{digitalTitles}}"
  bind:indexchange="onTabIndexChange"
/>
// 通过事件,获取组件实例，并调用组件方法
<button bindtap="onExecTCMethod">调用TC方法</button>

  onExecTCMethod() {
    // 1.selectComponent 获取对应的组件实例对象
    const tabControl = this.selectComponent(".tab-control")

    // 2.调用组件实例的方法
    tabControl.test(2)
  }
```

### 什么是插槽？

- 组件的插槽，是为了让我们封装的组件更加具有扩展性

#### 单个插槽的使用

- 通过插槽，显示不同的内容，文字、图片、按钮等
- 小程序中插槽是不支持默认值的

```js
// 页面

<my-slot>
    // 插槽-按钮
  <button>我是按钮</button>
</my-slot>

<my-slot>
    // 插槽-图片
  <image src="/assets/nhlt.jpg" mode="widthFix"></image>
</my-slot>

// 组件
<view class="my-slot">
    
  <view class="header">Header</view>

  <view class="content">
      
    <!-- 显示不同的内容，图片、按钮等 -->
    <slot></slot>

  </view

  <view class="footer">Footer</view>

</view>
```

##### 通过class设置插槽默认值

```js
<view class="my-slot">
    
  <view class="header">Header</view>

  <view class="content">
      
    <slot></slot>

  </view>

	// 这个就是自定义的插槽默认值，通过class 的伪类 控制显示隐藏
  <view class="default">哈哈哈哈</view>

  <view class="footer">Footer</view>

</view>

// 默认隐藏
.default {
  display: none;
}
// 当content的内容为空时，就是没有插入内容，让默认的显示
// 伪类 :empty 是内容为空， + 是兄弟选择器
.content:empty + .default {
  display: block;
}
```

#### 多个插槽的使用

- 在组件中，开启多插槽

```js
Component({
  options: {
    multipleSlots: true
  }
})
```

- 使用多插槽

```js
// 页面，slot 命名
<mul-slot>
    
  <button slot="left">left</button>

  <view slot="center">哈哈哈</view>

  <button slot="right">right</button>

</mul-slot>


// 组件，通过 name 名字区分
<view class="mul-slot">
    
    <slot name="left"></slot>

    <slot name="center"></slot>

    <slot name="right"></slot>

</view>
```

### behaviors-组件代码共享

![behaviors](C:\Users\admin\Desktop\系统笔记\img_min_program\behaviors.png)

------

- 通过 Behavior 函数 创建 共享的代码
- 这个共享代码的文件在最外层和utils一层

```js
export const counterBehavior = Behavior({
  data: {
    counter: 100
  },
  methods: {
    increment() {
      this.setData({ counter: this.data.counter + 1 })
    },
    decrement() {
      this.setData({ counter: this.data.counter - 1 })
    }
  }
})
```

- 在组件混入共享的代码，共享的代码会直接添加到组件的js文件中

```js
import { counterBehavior } from "../../behaviors/counter"

Component({
  behaviors: [counterBehavior]
})
```

- 在组件的wxml中，直接使用，和写在js文件中一样使用

```js
<view>
  <view class="counter">当前计数: {{counter}}</view>
  <button bindtap="increment">+1</button>
  <button bindtap="decrement">-1</button>
</view>
```

- 最后在页面引入组件使用

### 组件的生命周期

- created
  - 组件实例，被创建时
  - 请求数据
- attached
  - 组件实例，被添加到，页面DOM树时
  - 操作DOM
- resdy
  - 组件在页面渲染完成
- detached
  - 组件实例，从页面DOM树，移除时
  - 回收、销毁

- 组件生命周期写在，lifetimes

![组件的生命周期](C:\Users\admin\Desktop\系统笔记\img_min_program\组件的生命周期.png)

------

#### 组件所在页面的生命周期

- 组件所在的，页面被展示、页面被隐藏、页面尺寸改变时

![组件所在页面的生命周期](C:\Users\admin\Desktop\系统笔记\img_min_program\组件所在页面的生命周期.png)

------

````js
// 组件
Component({
    // 组件的生命周期
  lifetimes: {
    created() {
      console.log("组件被创建created");
    },
    attached() {
      console.log("组件被添加到组件树中attached");
    },
    detached() {
      console.log("组件从组件树中被移除detached");
    }
  },
    // 组件所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log("page show");
    },
    hide() {
      console.log("page hide");
    }
  }
})
````

### Component构造器

- 组件的Componnet 可以使用的方法、属性

![Component构造器](C:\Users\admin\Desktop\系统笔记\img_min_program\Component构造器.png)

------

![Component构造器2](C:\Users\admin\Desktop\系统笔记\img_min_program\Component构造器2.png)

------

### 网络请求 – API

- 请求地址、参数、请求头、超时时间、请求方法
- url data header timeout  method

![网络请求 – API参数](C:\Users\admin\Desktop\系统笔记\img_min_program\网络请求 – API参数.png)

------

- 在页面生命周期 onLoad 发起网络请求

```js
 onLoad() {
    wx.request({
      url: 'http://codercba.com:1888/api/home/houselist',
      data: {
        page: 1
      },
      success: (res) => {
        const data = res.data.data
        this.setData({ houselist: data })
      },
      fail: (err) => {
        console.log("err:", err);
      }
    })
  }
```

#### 网络请求配置域名

图片

网络请求域名配置 

#### 封装网络请求

- 格式
  - async 函数
    - await 请求

- 函数

```js
// 封装成函数
export function hyRequest(options) {
  return new Promise((resolve, reject) => {
    wx.request({ 
      ...options, 
      success: (res) => {
        resolve(res.data)
      },
      fail: reject
    })
  })
}
// 使用
// 将请求封装到一个单独函数中(推荐)
this.getHouselistData()
async getHouselistData() {
    const houseRes = await hyRequest({
        url: "http://codercba.com:1888/api/home/houselist",
        data: { page: this.data.currentPage }
    })
    const finalHouseList = [...this.data.houselist, ...houseRes.data]
    this.setData({ houselist: finalHouseList })
    // 思考: 为什么这里不需要setData?
    // 通过this.data 直接修改的，是修改成功了，但没有响应到页面上，页面数据没变,这里只需要改变数据，不需要数据显示在页面上
    // 只在需要改变页面数据时，才是有 setData
    this.data.currentPage++
}
```

- 类

```js
import { hyRequest, hyReqInstance } from "../../service/index"
    // 使用类的实例发送请求
    hyReqInstance.get({
      url: "/city/all"
    }).then(res => {
      console.log(res);
    })

// 封装成类 -> 实例
class HYRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
  }
  request(options) {
    const { url } = options
    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        url: this.baseURL + url,
        success: (res) => {
          resolve(res.data)
        },
        fail: (err) => {
          console.log("err:", err);
        }
      })
    })
  }
  get(options) {
    return this.request({ ...options, method: "get" })
  }
  post(options) {
    return this.request({ ...options, method: "post" })
  }
}

export const hyReqInstance = new HYRequest("http://codercba.com:1888/api")
export const hyLoginReqInstance = new HYRequest("http://123.207.32.32:3000")
```

### 系统API

#### 展示弹窗

图片

弹窗 

```js
  onShowToast() {
    wx.showToast({
      title: '操作失败!',
      icon: "error",
      // 显示时间
      duration: 5000,
      // 开启后，在弹窗显示时，不能进行页面操作
      mask: true,
      // 弹出成功
      success: (res) => {
        console.log("res:", res);
      },
      fail: (err) => {
        console.log("err:", err);
      }
    })

    // wx.showLoading({
    //   title: "加载中ing"
    // })

    // 需要单独调用 hideLoading 关闭 加载中
  },
  onShowModal() {
    wx.showModal({
      title: "确定购买吗?",
      content: "确定购买的话, 请确定您的微信有钱!",
      confirmColor: "#f00",
      cancelColor: "#0f0",
      success: (res) => {
        // cancel
        if (res.cancel) {
          console.log("用户点击取消");
        } else if (res.confirm) {
          console.log("用户点击了确定");
        }
      }
    })
  },
  onShowAction() {
    wx.showActionSheet({
      itemList: ["衣服", "裤子", "鞋子"],
      success: (res) => {
          // 哪个 tapIndex
        console.log(res.tapIndex);
      },
      fail: (err) => {
        console.log("err:", err);
      }
    })
  }
```

#### 分享

- 只需在 onShareAppMessage 写分享的内容即可
- 不写 onShareAppMessage  ，默认也有分享功能

图片

分享 

```js
  // 分享功能
  onShareAppMessage() {
    // return 分享内容
    // path 点击分享，进入的页面
    return {
      title: "旅途的内容",
      path: "/pages/favor/favor",
      imageUrl: "/assets/nhlt.jpg"
    }
  }
```

#### 获取设备信息 、位置

- wx.getSystemInfo  手机

- wx.getLocation  位置

  - https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission
  - 获取位置，需要在app.json配置

  ```js
  // 2-1 
  "permission": {
      "scope.userLocation": {
        "desc": "需要获取您的位置信息"
      }
    }
  ```

```js
    // 1.获取手机的基本信息
    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
      }
    })

    // 2-2.获取当前的位置信息
    wx.getLocation({
      success: (res) => {
        console.log("res:", res);
      }
    })
```

#### Storage存储 

- 同步会等待 同步Storage存储完成后，再继续执行下面的代码
  - 存后要用的
- 异步 不会 等待
  - 存后过段时间再用的
- 可以直接存 类型

图片

Storage存储 

```js
    // 同步
	// 1.存储一些键值对
    wx.setStorageSync('name', "haha")
    wx.setStorageSync('age', 18)
    wx.setStorageSync('friends', ["abc", "cba", "nba"])

    // 2.获取storage中内容
    const name = wx.getStorageSync('name')
    const age = wx.getStorageSync('age')
    const friends = wx.getStorageSync('friends')

    // 3.删除storage中内容
    wx.removeStorageSync('name')

    // 4.清空storage中内容
    wx.clearStorageSync()
	
    // 异步操作
    wx.setStorage({
      key: "books",
      data: "哈哈哈",
      // 开启 encrypt 加密 
      encrypt: true,
      // success 存储成功
      success: (res) => {
        // 成功后再取值
        wx.getStorage({
          key: "books",
          encrypt: true,
          success: (res) => {
            console.log(res);
          }
        })
      }
    })
```

#### 界面跳转 

-  界面的跳转有两种方式：
  - 通过navigator组件
  - 通过wx的API跳转

- wx.switchTab
  - 跳转到 tabBar页面，并关闭其他所有非tabBar页面
  - 从某个页面的按钮，跳转到 tabBar页面
- wx.reLaunch 
  - 关闭所有页面，打开应用内的某个页面
  - 页面栈有数量限制，reLaunch ，关闭所有页面，就是**清空 页面栈**，打开一个新页面
- wx.redirectTo
  - 关闭当前页面，跳转到应用内某个页面
  - 不会关闭其他页面，只会关闭当前页面

- wx.navigateTo
  - 保留当前页面，跳转到应用内的某个页面
  - 但是不能跳到 tabbar 页面
  - 会**添加到 页面栈** 中
- wx.navigateBack
  - 关闭当前页面，返回上一页面或**多级**页面
  - 在页面自定义位置，通过按钮 返回
- navigator组件主要就是用于界面的跳转的，也可以跳转到其他小程序中

```js
// navigateTo 跳转&传递参数
// 跳转
    const name = this.data.name
    const age = this.data.age
    // 页面导航操作
    wx.navigateTo({
      // 跳转的过程, 传递一些参数过去
      url: `/pages2/detail/detail?name=${name}&age=${age}`,
      events: {
        backEvent(data) {
          console.log("back:", data);
        },
        coderwhy(data) {
          console.log("why:", data);
        }
      }
    })
// 接收参数，在 onLoad 参数 options 中
  onLoad(options) {
    const name = options.name
    const age = options.age
    this.setData({ name, age })

    // const eventChannel = this.getOpenerEventChannel()
  }
```

```js
// navigateBack 返回
    wx.navigateBack({
      // delta 返回几层
      delta:2
    })
```

#### 页面跳转 - 数据传递（一） 

- 首页 -> 详情页：使用URL中的query字段 
- 详情页 -> 首页：在详情页内部拿到首页的页面对象，直接修改数据 

图片

页面跳转 - 数据传递（一） 

##### 返回时给上一级页面传递数据

- getCurrentPages  存放的是所有打开的页面
- 只在自定义的点击事件中生效，事件中执行以下代码
- 在左上角的返回键，不生效，监听不到，无法添加代码执行
- 如果想要2个**都生效**，写在 **生命周期 onUnload 卸载**中，不是写在函数方法中，因为这2个返回，都是卸载当前页面

```js
// 当前页面，进行返回操作的页面    
// 方式一: 给上一级的页面传递数据
    // 1. 获取到上一个页面的实例
    const pages = getCurrentPages()
    // 通过下标，返回到上一个页面，length从1开始，下标从0开始，-1是当前页面，-2才是上个页面
    const prePage = pages[pages.length-2]

    // 2.通过setData给上一个页面设置数据，message 是上个页面的
    prePage.setData({ message: "呵呵呵" })
```

#### 页面跳转 - 数据传递（二） 

##### navigateTo 的 events 

```js
// 要返回的页面，这个是上个页面   
wx.navigateTo({
      // 跳转的过程, 传递一些参数过去
      url: `/pages2/detail/detail?name=${name}&age=${age}`,
      events: {
          // 添加 自定义回调函数 backEvent
        backEvent(data) {
          console.log("back:", data);
        },
        coderwhy(data) {
          console.log("why:", data);
        }
      }
    })
// 当前页面，进行返回操作的页面
    // 方式二: 回调events的函数
    // 1. 通过 getOpenerEventChannel 拿到eventChannel
    const eventChannel = this.getOpenerEventChannel()

    // 2. 通过eventChannel.emit 调用上个页面的回调函数，并传递参数
    eventChannel.emit("backEvent", { name: "back", age: 111 })
    eventChannel.emit("coderwhy", { name: "why", age: 10 })
```

#### navigator组件

- 用于界面的跳转的
- 可以跳转到其他小程序中 

```js
// 跳转
<navigator class="nav" url="/pages2/detail/detail?name=why&age=18">跳转</navigator>
// 返回
<navigator open-type="navigateBack">返回</navigator>
```

### 小程序登录

图片

小程序登录

- openid
  - 小程序唯一标识
- unionid
  - 微信中，多个产品是同一用户的唯一标识
  - 公众号、小程序，是同一个人的，相互同步数据，通过 unionid 判断 
- PC网页、小程序等，多个平台共享数据信息，想要同步数据，需要通过 账号或者手机号登录
  - 把 账号或者手机号 和 openid 绑定在一起
  - 其他平台，在登录后，可以通过 账号或者手机号 找到绑定的 openid ，从而找到 用户的数据

图片

登录的流程

```js
import { getCode } from "../../service/login";
import { hyLoginReqInstance } from "../../service/index"  
async onLoad() {
    // 1.获取token, 判断token是否有值
    const token = wx.getStorageSync('token') || ""

    // 2.判断token是否过期
    const res = await hyLoginReqInstance.post({
      url: "/auth",
      header: {
        token: token
      }
    })

    // 2.如果token有值
    if (token && res.message === "已登录") {
      console.log("请求其他的数据");
    } else {
      this.handleLogin()
    }
  }

// 获取 token
  async handleLogin() {
    // 1.获取code
    const code = await getCode()

    // 2.使用code换取token
    const res = await hyLoginReqInstance.post({
      url: "/login",
      data: { code }
    })

    // 3.保存token
    wx.setStorageSync('token', res.token)
  }
// 封装获取 code
export function getCode() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: (res) => {
        resolve(res.code)
      }
    })
  })
}
```







