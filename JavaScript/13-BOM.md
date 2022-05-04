# BOM

## javascript 的组成部分
- DOM (document object model) 文档对象模型
- BOM (browers object model) 浏览器对象模型
- ECMAScript js 的核心

## BOM 下五大对象

### window 对象 -浏览器顶层对象
- innerWidth/innerHeight

```js
<script>
//console.dir(window);  
// window.innerWidth 可视区宽度
// window.innerHeight 可视区高度
console.log(window.innerWidth,window.innerHeight);
</script>  
```



- close,open 方法
  - window.close();
  - window.open(URL,target,specs,replace)  

```js
<script>
/*
    window.open(); 打开一个新窗口
        
*/

{
    let btn = document.querySelector("#btn");
    btn.onclick = function(){
        let win = window.open("http://www.baidu.com","_blank","width=200,height=200,menubar=yes,resizable = no,titlebar = no,left = 500,top = 500");
        // console.log(win.close());
        /*
            - _blank 新窗口打开
            - _self 当前窗口打开
            -
        */
       setTimeout(()=>{
            win.close();	
            window.close();	// 关闭当前窗口
       },3000);
    };
}
</script> 
```



  - URL 新窗口地址
  - target 属性 新窗口打开方式
    - _blank   新窗口打开
    - _self      当前窗口打开
  - specs 新窗口规格
    - width=pixels	窗口的宽度.最小.值为100
    - height=pixels	窗口的高度。最小.值为100
    - location=yes|no|1|0	是否显示地址字段.默认值是yes
    - menubar=yes|no|1|0	是否显示菜单栏.默认值是yes
    - resizable=yes|no|1|0	是否可调整窗口大小.默认值是yes
    - scrollbars=yes|no|1|0	是否显示滚动条.默认值是yes
    - status=yes|no|1|0	是否要添加一个状态栏.默认值是yes
    - titlebar=yes|no|1|0	是否显示标题栏.被忽略，除非调用HTML应用程序或一个值得信赖的对话框.默认值是yes
    - toolbar=yes|no|1|0	是否显示浏览器工具栏.默认值是yes
    
    

- scroll 事件

```js
<script>

        // 当页面发生滚动时触发
        window.onscroll = function(){
            // console.log(1)
        }


    </script>
```



- resize 事件

```js
<script>

        // 当窗口大小发生改变时触发
        window.onresize = function(){
            console.log(1)
        }


    </script>
```



- 操作滚动条位置
  - 获取纵向、横向滚动条位置 用于：chrome,firefox, mobile
    - window.scrollX、window.scrollY、window.scrollTo()
  - 下面这2个性能更好，当前滚动条距离页面左面、顶部的距离
    - document.documentElment.scrollTop、document.documentElment.scrollLeft
  - 低版本IE浏览器的兼容
    - document.body.scrollTop
    - document.body.scrollLeft
  - 完整兼容写法

```JS
var scrollT = document.body.scrollTop||document.documentElement.scrollTop;
```




```js
<script>
// scroll 监控滚动条位置发生变化
window.onscroll = function(){
   
        // chrome,firefox, mobile
        window.scrollY 获取纵向滚动条位置
        window.scrollX 获取横向滚动条位置
        window.scrollTo(x,y);
   
  console.log(document.body.scrollLeft,document.body.scrollTop);
	    console.log(document.documentElement.scrollLeft,document.documentElement.scrollTop);
  
    var scrollT =  document.documentElement.scrollTop||document.body.scrollTop;
  
};

setTimeout(()=>{
    document.documentElement.scrollTop=document.body.scrollTop = 0;
},3000);

</script>
```

```js
<script>

        var inp = document.querySelector('input');

        inp.onclick = function(){
            // 将滚动条设定到某个坐标位置X,Y
            window.scrollTo(0,0)
        }

      
        window.onscroll = function(){
            // 当前滚动条距离页面左面/顶部的距离
            console.log(window.scrollX,window.scrollY)
        }


    </script>
```



- window 下的各类弹窗
  - alert()
  - confirm('message')
  - prompt([msg],[defaultText])

```js
<script>
/*
    window.open(); 打开一个新窗口
        
*/

{
    let btn = document.querySelector("#btn");
    btn.onclick = function(){
      // alert("弹出消息");
     // console.log(confirm("是否想要变成前端精英"));
     // console.log(prompt("今天有什么愿望想实现?","想要暴富"));
    };
}
</script>  
```

#### 居中广告弹窗

- 需要加动画，用绝对定位来写，通过滚动条的计算来改变位置
- 不要动画，用固定定位来写，体验好

```js
<script>
window.onload = function(){
    // 广告
    var banner = document.querySelector("#banner");
    // 计算位置
    var resizeBanner = function(){
        // 大盒子宽一半 - 小盒子宽一半 = 小盒子距离大盒子顶部的距离
        var l = (window.innerWidth - banner.offsetWidth)/2;
        var t = (window.innerHeight - banner.offsetHeight)/2;
        // 获取滚动条位置，2个是为了兼容
        var scrollL = document.body.scrollLeft||document.documentElement.scrollLeft;
        var scrollT = document.body.scrollTop||document.documentElement.scrollTop;
        // 小盒子设置位置
        banner.style.left = l + scrollL + "px";
        banner.style.top = t + scrollT + "px";
    };
    resizeBanner();
    // window resize: 监听窗口大小发生改变 
    window.onresize = function(){
        banner.style.transition = "1s";
        // 重新计算
        resizeBanner();
    };
    // onscroll  监听滚动条位置发生改变
    window.onscroll = function(){
        banner.style.transition = "1s";
        // 重新计算
        resizeBanner();
    }
};
</script>
```



### location 对象 -地址，存的是地址栏相关信息

```js
<script>
// location 地址栏相关的信息
console.log(location);

// host: "127.0.0.1" 主机信息  域名 + 端口（计算机提供访问的端口）
// hostname: "localhost" 主机地址 || 域名
// href 完整的地址
// port: 端口
// pathname: 路径
// protocol: "http"||"https"
// hash 代表了 # 后边跟随的是hash
// search  代表了 ？后边跟随的内容, ?wd=开课吧 (get方式提交过来的数据)
post方式数据不再地址栏
</script>  
```



- hostname
- port 
- protocol 
- href 

```js
<script>
{
    let btn = document.querySelector("button");

    btn.onclick = function(){
        console.log(location.href);
        location.href = "https://www.baidu.com/s?wd=开课吧";
    }
}
</script>  
```



- hash
  
  - ```js
    <nav>
        <a href="13-hash.html">视图1</a>
        <a href="13-hash-2.html">视图2</a>
        <a href="13-hash-3.html">视图3</a>
    </nav>   
    <div>
        这是第一个视图
    </div> 
    <script>
    // 路由（routing）: 根据路径决定前端显示的视图
    </script>
    ```
    
    
    
  - hashChange
  
  ```js
  <nav>
      <a href="#view1">视图1</a>
      <a href="#view2">视图2</a>
      <a href="#view3">视图3</a>
  </nav>   
  <div id="view">
      这是第一个视图
  </div> 
  <script>
  {
      let view = document.querySelector("#view");
  1.开始调用
      setView();
  2.hash切换后调用
      window.onhashchange =  setView;
      function setView(){
          let hash = location.hash;
          console.log(hash);
          switch(hash){
              case "":
              case "#view1":
              console.log(1);
                  view.innerHTML = "这是第一个视图";
                  break;
              case "#view2":
                  view.innerHTML = "这是第二个视图";
                  break;
              case "#view3":
                  view.innerHTML = "这是第三个视图";
                  break;
          }
      }
  }    
  // console.log(location.hash);    
  // // 监听 location 中的 hash 变化了
  // window.onhashchange = function(){
  //     console.log(location.hash); 
  // };
  </script>    
  ```
  
  
  
- search

  -  代表了 ？后边跟随的内容, ?wd=开课吧 (get方式提交过来的数据)

- reload()

```js
<script>
{
    let btn = document.querySelector("button");

    btn.onclick = function(){
        //location.reload();	 // 重载页面
        location.href = location.href;
    }
}
</script> 
```



- replace()替换地址栏信息

```js
<script>
{
    let btn = document.querySelector("button");

    btn.onclick = function(){
        // console.log(location.href);
        // location.href = "https://www.baidu.com/s?wd=开课吧";
        location.replace("https://www.baidu.com/s?wd=开课吧");
    }
}
</script> 
```



### history 对象 -历史记录
- back()、回退到上一步
- forward()  前进一步
- go()   参数决定前进和回退的步数
- history  静态路由 不是跳转页面，记录的是地址栏的变化
- 要想实现history 路由，必须在服务器环境下才能实现

```js
{
    let btn = document.querySelector("#btn");
    btn.onclick = function(){
       // history.back(); 返回
       history.go(-2);
    }
}
```



- state
  - 获取 history 传递过来的值
- pushState()
  - 改变history的值
- popstate 
  - onpopstate 浏览器上 前进后退触发事件
- history 路由实现原理

```JS
<script>
        // history 历史记录  记录的是地址栏的变化
        // history 静态路由  不是跳转页面
        // 要实现 history 路由 必须在服务器环境才能实现
        // history 做的路由 需要 后端服务器做配置 判断当前路径是否真实存在

        let btnS = document.querySelectorAll('ul a');
        let view = document.querySelector('#view');

        btnS.forEach((item,index)=>{
            item.onclick = function(){
                console.log(item.href)

                // 切换对应模板 --> 条件 history的值
                // 先设置 history 的值
                // 添加一个状态，有3个参数
                // 第一个是对象，也可以不传
                // 第二个一般不传，空
                // 第三个 history 状态值
                history.pushState({
                    info:index
                },'',item.href)

                matching();

                // 阻止a跳转
                return false;
            }
        })

        // 页面进来调用
        matching();

        // 判断显示对应内容
        function matching(){
            // history改变后的值
            console.log(location.pathname)

            let path = location.pathname;

            switch(path){
                case '/index':
                case '/index.html':
                view.innerHTML = indexR();
                break;
                case '/about':
                view.innerHTML = aboutR();
                break;
                case '/lesson':
                view.innerHTML = lessonR();
                break;
            }
        }

        // 历史记录上下切换
        // onpopstate 浏览器上 前进后退触发事件
        window.onpopstate = function(){
            // console.log(1);

            // 获取 history 传递过来的值(index下标)
            console.log(history.state)
            matching();
        }

        function indexR(){
            return `
                <h3>这是首页</h3>
            `
        }
        function aboutR(){
            return `
                <h3>关于我们</h3>
                <p>123213213123213132</p>
            `
        }
        function lessonR(){
            return `
                <h3>课程介绍</h3>
                <p>asdqweasdsaewdsadwdsawdsad</p>
            `
        }


    </script> 
```



### navigator 对象 -设备和浏览器信息

navigator为Window对象的一个属性，指向了一个包含浏览器相关信息的对象

- userAgent
- appName
  - appVersion
- onLine 网络信息 
  - true 有网
  - false 无网
- userAgent 用户代理信息

```js
<script>
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}    
//console.log(IsPC());
// onLine 网络信息 true 有网，false 无网
// userAgent 用户代理信息，
{
let ua = navigator.userAgent.toLowerCase();
if (/android|adr/gi.test(ua)) {
    // 安卓
    console.log("安卓");
    } else if(/\(i[^;]+;( U;)? CPU.+Mac OS X/gi.test(ua)){
        //苹果
        console.log("苹果");
    }
}

</script>    
```

```js
navigator.appVersion 浏览器的版本号 

navigator.appName 浏览器的名称 

navigator.language 浏览器使用的语言 

navigator.platform 浏览器使用的平台 

navigator.userAgent 浏览器的user-agent信息

```



### screen 对象  -屏幕
  width 、height

```js
<script>
        // 设备（分辨率）宽高
        console.log(screen.width,screen.height)
    </script>
```





# navigator 对应的方法

```JS
// 判断PC
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true; // 是PC
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false; // 不是PC
            break;
        }
    }
    return flag;
}

// 判断设备
var ua = navigator.userAgent.toLowerCase();
if (/android|adr/gi.test(ua)) {
    // 安卓
     
}else if(/(i (;)+;( U;)? CPU.+Mac OS X/gi.test(ua)){
    //苹果
     
}

// 判断不同客户端：新浪微博为1，QQ客户端为2，微信低于6.0.2版本为3，高于6.0.2版本为4，其他为0。

var ua = navigator.userAgent.toLowerCase();  
if(ua.match(/weibo/i) == "weibo"){  
    console.log(1);
}else if(ua.indexOf('qq/')!= -1){  
    console.log(2);
}else if(ua.match(/MicroMessenger/i)=="micromessenger"){  
var v_weixin = ua.split('micromessenger')[1];  
    v_weixin = v_weixin.substring(1,6);  
    v_weixin = v_weixin.split(' ')[0];  
if(v_weixin.split('.').length == 2){  
    v_weixin = v_weixin + '.0';  
}  
if(v_weixin < '6.0.2'){  
    console.log(3);
}else{  
    console.log(4);  
}  
}else{  
    console.log(0); 
}

// 区分各个浏览器
var ua=navigator.userAgent.toLowerCase();  
if(/msie/i.test(ua) && !/opera/.test(ua)){  
    alert("IE");  
    return ;  
}else if(/firefox/i.test(ua)){  
    alert("Firefox");  
    return ;  
}else if(/chrome/i.test(ua) && /webkit/i.test(ua) && /mozilla/i.test(ua)){  
    alert("Chrome");  
    return ;  
}else if(/opera/i.test(ua)){  
    alert("Opera");  
    return ;  
} else if(/webkit/i.test(ua) &&!(/chrome/i.test(ua) && /webkit/i.test(ua) && /mozilla/i.test(ua))){  
    alert("Safari");  
    return ;  
}else{  
    alert("unKnow");  
}

```



