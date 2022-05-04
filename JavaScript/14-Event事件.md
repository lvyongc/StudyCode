#Event事件

###事件监听器

####事件监听和事件绑定的区别 

```js
	<script>
        var box = document.querySelector('.box');

        // 事件绑定 后添加的事件会覆盖前面的事件
        // box.onclick = function(){
        //     alert(2)
        // }

        // box.onclick = function(){
        //     alert('1')
        // }


        // 事件监听，不会覆盖
        box.addEventListener('click',function(){
            alert(1)
        })

        box.addEventListener('click',function(){
            alert(2)
        })


    </script>
```

#### IE

- IE不支持addEventListener和removeEventListener方法
   实现了两个类似的方法：

  - attachEvent 添加
  - detachEvent 删除

  这两个方法都接受两个相同的参数。
   1.事件处理程序名称
   2.事件处理程序方法

- 兼容

  - attachEvent——兼容：IE7、IE8；不兼容firefox、chrome、IE9、IE10、IE11、safari、opera
  - addEventListener——兼容：firefox、chrome、IE、safari、opera；不兼容IE7、IE8

###addEventListener(事件名，执行函数)

####事件流

- 事件名不用加 on
- 事件冒泡（内向外）
- 事件捕获（外向内）
- 第三个参数 默认false  ，true 是先捕获从外向内，捕获一个看看有没有事件，有就执行事件，没有事件就继续捕获下一个，捕获事件全部执行完，再冒泡，这个事情就是事件流
- addEventListener 必须是命名函数才能解绑

```js
<script>

        
        var sma = document.querySelector('.sma');
        var big = document.querySelector('.big');


        // 第三个参数 是否 以捕获的方法执行
        // 捕获和冒泡是相反的（执行顺序）
        sma.addEventListener('click',function(){
            console.log('sma点击-捕获')
        // 第三个参数 true
        },true)
      
        // 事件冒泡 由内向外依次触发
        sma.addEventListener('click',function(){
            console.log('sma点击-冒泡')
        })

        big.addEventListener('click',function(){
            console.log('big点击-冒泡')
        })

        document.body.addEventListener('click',function(){
            console.log('body点击-冒泡')
        })

        document.addEventListener('click',function(){
            console.log('document点击-冒泡')
        })

		// 事件捕获 由外向内依次捕获
        big.addEventListener('click',function(){
            console.log('big点击-捕获')
        },true)

        document.body.addEventListener('click',function(){
            console.log('body点击-捕获')
        },true)

        document.addEventListener('click',function(){
            // console.log('document点击-捕获')
            这里不加事件，就没有document的捕获
        },true)

    </script>
```

####事件对象

```js
var box = document.querySelector('.box');

        // 在事件函数内-js内部会给到我们一个事件对象 - 参数是默认第一个
        // 事件对象内存储了关于这个事件触发的一些属性和信息
	    // 这个参数就是事件对象，名字随意写，一般都写 e 或者 ev
        box.addEventListener('click',function(e){
            console.log(this);
            
            console.log(e) // mouseEvent
        })
```



#### 案例：取消事件冒泡

```JS
<div class="wrap">
    <div class="menu">
        <div class="title">菜单</div>
        <ul class="list">
            <li>微博</li>
            <li>图片</li>
            <li>博客</li>
            <li>视频</li>
            <li>更多>></li>
        </ul>
    </div>
</div>
<script>
{
    let list = document.querySelector(".list");
    let menu = document.querySelector(".menu");
    let title = document.querySelector(".title")
    var lis = list.querySelectorAll('li');
    // 父级点击事件
    menu.addEventListener("click",function(e){
        // 这里点击会冒泡到menu的父级document，执行document的事件，变成none
        // 这里取消事件冒泡，是为了让它只执行menu本身的事件，变成block
        e.cancelBubble = true;
        list.style.display = 'block';
    });

    lis.forEach((item)=>{
        // 冒泡有内向外依次触发，内的事件执行完，执行外的，外有事件就执行，没有就不执行
        // 所以子级的点击事件完成后，会冒泡去执行父级的点击事件，导致刚变成none后瞬间又变成block
        item.addEventListener('click',function(ev){
            // console.log(ev); -->  mouseEvent 是 事件对象
            // cancelBubble 是 阻止事件冒泡 ，不让它去执行父级的事件，只执行它本身的事件
            ev.cancelBubble = true;

            var val = item.innerHTML;
            title.innerHTML = val;
            list.style.display = 'none';
        })
    })

    // 点击页面其他空白区域 自动收起
    document.addEventListener('click',function(){
        list.style.display = 'none';
    })
    

}
</script>
</body>
```



####事件监听相关配置

- capture   是否在捕获阶段执行
- once   是否只执行一次
- passive  阻止取消默认事件 

```js
第三个参数 直接写 boolean（布尔值） 就是确定是否捕获执行
        // capture   是否在捕获阶段执行
        // once 控制事件执行次数（只能执行一次 - 之后自动销毁）
        // passive 不让事件的默认行为被阻止
```

```js
<script>
        // contextmenu 鼠标右键事件就是默认事件
        window.addEventListener('contextmenu',function(e){
            e.preventDefault();  // 阻止默认事件
            return true;
        },{
            passive:true         // 取消阻止默认事件
    		capture:true 和直接写true一样
        })
    </script>
```



####removeEventListener 取消事件监听   （不能用匿名函数）

```js
// 删除事件监听 必须得是命名函数
            window.removeEventListener('contextmenu',fn1)
			两个函数：事件名称和命名函数
```



###Event 事件对象

####Event.target、Event.currentTarget 事件源

```js
  <script>
        var box = document.querySelector('.box');

        // 在事件函数之内-js内部会给到我们一个事件对象 - 参数是默认第一个
        // 事件对象内存储了关于这个事件触发的一些属性和信息
        box.addEventListener('click',function(e){
            
            // 事件触发的元素，并不是事件绑定的元素（根据触发位置发生变化）
            console.log(e.target)

            // 事件监听的元素，就是事件绑定的元素（不变的）
            console.log(e.currentTarget)
        })
    </script>
```



####事件委托(事件代理)

- 把事件添加给现有父级元素上，通过事件源，触发的源头来执行具体元素要执行的代码

- 事件委托的优点
  1. 可减少需要添加事件绑定的元素
  2. 可给新增DOM元素添加事件（在不刷新页面的情况下）
- 事件委托的缺点
  1. 事件处理函数中需要判断事件源增加逻辑复杂度。
     2. 祖父级和事件源之间不能有阻止冒泡 

- mousenter移入、mouseleave移出 事件 

```js
  <script>
        var box = document.querySelector('div');

        box.addEventListener('mouseenter',function(){
            console.log('mouseenter移入')
        })

        box.addEventListener('mouseleave',function(){
            console.log('mouseleave移出')
        })

        box.addEventListener('mouseover',function(){
            console.log('mouseover移入')
        })

        box.addEventListener('mouseout',function(){
            console.log('mouseout移出')
        })

        // mouseenter、mouseleave 是移入移出只有一次，在范围内的移动不算，不会再鼠标移动父子级切换过程中触发
        // mouseover、mouseout 在范围内每次都是，在它的范围内移入移出子级（子级没有加移入移出）每次都会触发over和out
    </script>
```

##### 事件代理案例

```JS
<script>
(function(){
    let user = document.querySelector("#user");
    let message = document.querySelector("#message");
    let btn = document.querySelector("#btn");
    let list = document.querySelector("#list");
   
    // 点击创建li添加到list
    btn.addEventListener('click',function(){
        var liHtml = `
            <li style="height: auto">
                <h2 class="user">${user.value}说:</h2>
                <p>${message.value}</p>
                <a href="javascript:;" class="clos">删除<span>X</span></a>
            </li>
        `
        list.innerHTML+= liHtml;
    })


    // 事件委托，事件委托给父级
    // 点击删除按钮的同时会冒泡点击到ul，所以给ul加点击事件
    list.addEventListener('click',function(e){
        // e.target 事件触发元素  a 标签
        console.log(e.target.tagName)

        // e.target - 触发事件的a标签
        // tagName 获取元素的标签名，返回值是大写的
        // li 下有多个元素，指定为a（a就是删除按钮）的时候再删除
        if(e.target.tagName == 'A'){
            // a的父级就是li，就是要删除的
            var li = e.target.parentNode;

            console.log(li)

            // 直接删除li
            li.remove();
        }
    })  
})();    
</script>
```



####Event.stopPropagation()、Event.cancelBubble 取消冒泡   

```js
 <script>
        document.addEventListener('click',function(){
            console.log('document')
        })

        document.body.addEventListener('click',function(e){
            // e.cancelBubble = true;  第一种

            // 取消冒泡
            e.stopPropagation();	第二种是标准的
            
            console.log('body')
        })
    </script>
```

###鼠标位置获取

- Event.clientX、
- Event.clientY、

```js
		// 相对于可视区位置
            var clientX = e.clientX;
            var clientY = e.clientY;

            // 相对于页面位置
            var pageX = e.pageX;
            var pageY = e.pageY;
```



- Event.pageX、
- Event.pageY 

```js
1、clientY翻译过来为客户区坐标Y，表示页面可视区域的Y偏移量(不包括工具栏、搜索栏等)，并且与页面滚动无关，滚动后的clientY值不变。

			// 获取鼠标点击位置
            var x = e.clientX;
            var y = e.clientY;

2、pageY翻译为页面坐标Y，与clientY基本类似，唯一区别在于该值与页面滚动有关，具体来说,pageY = clientY + 页面滚动高度。


```



###contextmenu 事件 

-  Event.preventDefault() 阻止默认事件   

```js
<script>
        // contextmenu 鼠标右键事件
        window.addEventListener('contextmenu',function(e){
            e.preventDefault();  // 阻止默认事件
        },{
            passive:true         // 取消阻止默认事件
        })

		// 选中文字事件
        document.addEventListener('selectstart',function(e){
            console.log('选中')
            e.preventDefault()
        })
    </script>
```



###键盘事件

- keydown键盘按下、keyup键盘抬起
- Event.keyCode键码值、Event.key键盘按钮
- Event.altKey：altKey 事件属性返回一个布尔值。指示在指定的事件发生时，Alt 键是否被按下并保持住了。
- Event.ctrlKey：Ctrl 键是否被按下并保持住了。
- shiftKey：Shift 键是否被按下并保持住了。
- 制作组合键 

```js
 window.addEventListener('keydown',function(e){
            console.log(e.key);

            console.log(e.keyCode)

            console.log(e.ctrlKey)

            if(e.ctrlKey && e.keyCode == 67){
                alert('复制')
            }

            if(e.shiftKey && e.keyCode == 67){
                alert('shift组合')
            }

        })
```



###拖拽思路详解

- mousedown：按下鼠标左键
- mousemove：当鼠标指针在指定的元素中移动时，就会发生 mousemove 事件
- mouseup：抬起鼠标左键
- 拖拽公式：元素当前位置 = (鼠标当前位置 - 鼠标初始位置) + 元素初始位置
- 拖拽问题修复
- 限制范围拖拽

```js
 <script>
        // mousedown
        // mousemove
        // mouseup 

        var div = document.querySelector('div');

        div.addEventListener('mousedown',function(e){
            // 记录鼠标按下时起始位置
            var startX = e.clientX; 
            var startY = e.clientY;

            // 记录元素本身位置（距离定位父级位置）
            var oldLeft = div.offsetLeft;
            var oldTop = div.offsetTop;

            // document不让拖拽离开div，快速拖拽离开div就失效
            document.addEventListener('mousemove',move)
            function move(e){
                // 移动后的位置
                var endX = e.clientX;
                var endY = e.clientY;


                // 应该加上或减去的位置
                var disX = endX-startX;
                var disY = endY-startY;

                
                // 最大值 页面宽度减去div宽度
                var maxL = document.documentElement.clientWidth  - div.offsetWidth;
                var maxT = document.documentElement.clientHeight  - div.offsetHeight;

                // 新位置
                var l = oldLeft + disX;
                var t = oldTop + disY

                // 限制范围
                if(l<0){
                    l = 0;
                }
                if(t<0){
                    t = 0;
                }
                if(maxL<l){
                    l = maxL;
                }
                if(maxT<t){
                    t = maxT;
                }

                console.log(endX-startX);
                console.log(endY-startY);

                // 赋值新位置
                div.style.left = l + 'px';
                div.style.top = t + 'px';
            }

            // 抬起
            div.addEventListener('mouseup',function(){
                // 清除给document避免离开div失效
                document.removeEventListener('mousemove',move)
            },{
                // 一次性事件，按下抬起，按下抬起，按下抬起
                once:true
            })


        })

    </script>
```



### 鼠标按键

```JS
<script>
        document.addEventListener('mousedown',function(e){
            // 鼠标按下 
            // console.log(e)
            // 0  左键
            // 1  滚轮
            // 2  右键
            console.log(e.button);

        })
    </script>
```



###鼠标滚动事件

- mousewheel （用于 IE/chrome）和 DOMMouseScroll （用于 火狐和标准浏览器）事件
- Event.wheelDelta 和  Event.detail 滚轮方向获取

```js
	鼠标滚动事件兼容方案：
<script>
        // obj 元素
		// 封装的兼容函数
        function mouseWheel(obj,up,down){
            mousewheel 用于 IE/chrome
            obj.addEventListener('mousewheel',function(e){
                 向下滚动是负值 -120
                 向上滚动是正值 120
                // console.log(e.wheelDelta)
                wheelDelta 是滚动的数值，根据数值的正负获取滚动方向

                if(e.wheelDelta > 0){
                    // 简写判断，有up才去执行up()
                    up&&up.call(obj);
                }else{
                    down&&down.call(obj)
                }

            })

            obj.addEventListener('DOMMouseScroll',function(e){
                DOMMouseScroll 用于 火狐和标准浏览器
                // console.log(e)
                // 向下滚动 正值 3
                // 向上滚动 负值 -3
                // console.log(e.detail)

                if(e.detail < 0){
                    // 这里 call 把this执行obj就是div
                    up&&up.call(obj);
                }else{
                    down&&down.call(obj)
                }

            })
        }



        var div = document.querySelector('div');
	// 执行
        mouseWheel(div,function(){
            console.log('向上')
            console.log(this)  // 这里想要this指向div
        },function(){
            console.log('向下')
        })
    </script>
```



###其他常用事件：

####dblclick 双击事件

```js
<input type="button" name="" value="按钮" id="">
    <script>
        var inp = document.querySelector('input');

        inp.addEventListener('dblclick',function(){
            console.log('双击事件')
        })
    </script>
```



####blur、focus、change、input、submit、reset

```js
		// 失去焦点时触发
        txt.addEventListener('blur',function(){
            // console.log()
            txt.style.border = '1px solid red';
        })

        // 获取焦点时触发
        txt.addEventListener('focus',function(){
            // console.log()
            txt.style.border = '1px solid blue';
        })

        // 当选值发生变化时触发
        select.addEventListener('change',function(){
            console.log('change事件触发')
        })

        //在输入过程中触发
        txt.addEventListener('input',function(){
            // console.log()
            txt.style.border = '10px solid yellow';
        })


	submit() 方法把表单数据提交到 Web 服务器。
    
    reset() 方法可把表单中的元素重置为它们的默认值。
```



####表单其他方法：blur()、focus()、select()

```js
			// 当选值发生变化时触发
        select.addEventListener('change',function(){
            console.log('change事件触发')

            // 将焦点给到某个元素
            // txt.focus();

            // 失去焦点
            // this.blur();


            // 将表单内容选中
            txt.select()

        })
```
