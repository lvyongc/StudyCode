# DOM

## classList（补充的）

```JS
<script>
        var box = document.querySelector('.box');

        // 获取元素的class列表
        console.log(box.classList);

        // 添加一个class
        box.classList.add('aaa')
        console.log(box.classList)

        // 删除一个class
        box.classList.remove('show')
        console.log(box.classList)


        box.onclick = function(){
             // 切换class
            box.classList.toggle('show')
            console.log(box.classList)

            // 验证class是否存在 - 返回布尔值
            console.log(box.classList.contains('show'))

        }
       

    </script>
```



## javascript 的组成部分

- DOM (document object model) 文档对象模型
- BOM (browers object model) 浏览器对象模型
- ECMAScript js 的核心

## DOM 节点
- 节点分类
  - 元素节点：每个 HTML元素	
    - 属性节点：HTML元素的属性
  - 文本节点：HTML元素内的文本	
    - 注释节点：注释 <!---->
  - 文档节点：整个文档document		
- 节点类型 --- nodeType
  - 元素节点：1	
    - 属性节点：2
  - 文本节点：3	
    - 注释节点：8
  - 文档节点：9
- 获取节点类型

```js
<script>
        var body = document.querySelector('.body');

        var nodes = body.childNodes;

        // 获取节点类型
        // console.log(nodes.nodeType);

        // function(){}

        nodes.forEach((item,index)=>{
           console.log(item.nodeType) ;
        })
    </script>
```



- 节点名称 --- nodeName
  
  - 获取节点名称
  
  ```js
  <script>
          var body = document.querySelector('.body');
  
          var nodes = body.childNodes;
  
          // 获取节点类型
          // console.log(nodes.nodeType);
  
          // function(){}
  
          nodes.forEach((item,index)=>{
             console.log(item.nodeName) ;
          })
  
  
      </script>
  ```
  
  - 元素节点：与标签名相同	
  - 文本节点：为#text	
  - 注释节点：为#comment
  - 文档节点：为#document    
  
- ```js
  <script>
  // console.log(document);
  // childNodes 子节点
  {
      let list = document.querySelector("#list");
      //console.log(list.childNodes);
      //console.log(document.childNodes);
      // 节点类型
      console.log(document.nodeName,document.nodeType);
      document.childNodes.forEach(item=>{
          console.log(item,item.nodeType,item.nodeName); // 节点类型
          // 10 文档声明
          // 1 元素节点
      });
      list.childNodes.forEach(item=>{
          console.log(item,item.nodeType,item.nodeName);
          // 3 文本节点
          // 8 注释节点
      });
  
      /*
       节点类型
          1 元素节点 （标签名称）
          3 文本节点  (#text) 
          8 注释节点  (#comment)
          9 document  (#document)
          10 文档声明 (html)
      */
  }
  </script>    
  ```

## DOM关系
- childNodes 子节点

  - ```js
    <script>
    // console.log(document);
    // childNodes 子节点
    {
        let list = document.querySelector("#list");
        //console.log(list.childNodes);
        //console.log(document.childNodes);
    }
    </script>    
    ```

- children 子元素 

```js
<script>
// 父子之间
// 兄弟级之间

/* 
查找子级 
    childNodes 子节点 (包含所有节点: 文本节点、注释节点、元素节点……)
    children 子元素 (只包含元素节点)
*/
{
    let div = document.querySelector("#div");
    //let children = div.childNodes;
    //children = [...children].filter(item=>item.nodeType == 1);
    //console.log(div.childNodes,children);
    console.log(div.childNodes);
    console.log(div.children);
}

</script>  
```



- firstChild 第0个子节点
- firstElementChild 第0个子元素
- lastChild 最后一个子节点
- lastElementChild 最后一个子元素

```js
<script>
/* 
查找子级 
    childNodes 子节点 (包含所有节点: 文本节点、注释节点、元素节点……)
    children 子元素 (只包含元素节点)
    firstChild 第0个子节点
    firstElementChild 第0个子元素
    lastChild 最后一个子节点
    lastElementChild 最后一个子元素
*/
{
    let div = document.querySelector("#div");
    console.log(div.firstChild,div.firstElementChild);
    console.log(div.lastChild,div.lastElementChild);
}

</script>  
```



- nextSibling 下一个兄弟节点
- nextElementSibling 下一个兄弟元素
- previousSibling 上一个兄弟节点
- previousElementSibling 上一个兄弟元素

```js
<script>
/* 
查找兄弟 
- nextSibling 下一个兄弟节点
- nextElementSibling 下一个兄弟元素
- previousSibling 上一个兄弟节点
- previousElementSibling 上一个兄弟元素 
*/
{
    let div = document.querySelector("#div");
    let p2 = div.children[2];
    console.log(p2.nextSibling);
    console.log(p2.nextElementSibling);
    console.log(p2.previousSibling);
    console.log(p2.previousElementSibling);
}

</script>
```



- parentNode 父节点
- offsetParent 找定位父级

```js
<script>
/*
查找父级
    parentNode 父节点 和 parentElement 父元素 都可以找父级
    
    offsetParent 找定位父级 (元素根据定位的这个父级，没有定位就是他的父级)
*/    
{
    let box2 = document.querySelector("#box2");
    let span = document.querySelector("span");
    console.log(span.parentNode);
    //console.log(span.parentElement);
    console.log(span.offsetParent);
    console.log(box2.offsetParent);
}
</script>
```

```js
 <script>
        var warp = document.querySelector('.warp');
        var top1 = document.querySelector('.top');
        var main = document.querySelector('.main');
        // 获取元素下的直接子元素
        var list = warp.children;

        // var nodes = warp.childNodes;

        // 获取第一个子节点 
        // lastChild  获取最后一个子节点
        var  firstNode = warp.firstChild;


        // 获取兄弟节点- 下一个
        // nextElementSibling 获取下一个兄弟元素
        var next = top1.nextElementSibling  ;

        // 获取兄弟节点- 上一个
        // nextElementSibling 获取上一个兄弟元素
        var prev = main.previousElementSibling;

        // 获取第一个子元素
        // lastElementChild  获取最后一个子元素
        var firstElChild = warp.firstElementChild ;


        // 获取父级节点 - 元素
        var parent = top1.parentNode;

        // 定位父级 
        var ofPar = top1.offsetParent;

        console.log(ofPar)
    </script>
```



## DOM 属性操作
注意 . 和 [] 都是 ECMAScript 中，对象的属性操作，对象属性的值会被存在内存中, 想要直接获取存在 文档中属性，或者 想把一个属性设置在文档中我们需要使用DOM 的属性操作
- el.attributes 元素所有属性的集合
- el.getAttribute("attr") 获取属性
- el.setAttribute("attr","val") 设置属性
- el.removeAttribute("attr") 移出属性
- el.hasAttribute("attr") 判断是否有这个属性

```js
<script>
        // . []，ECMAScript 的属性操作

        /*	DOM 属性操作
            - el.attributes 元素所有属性的集合
            - el.getAttribute("attr") 获取属性
            - el.setAttribute("attr","val") 设置属性
            - el.removeAttribute("attr") 移出属性
            - el.hasAttribute("attr") 判断是否有这个属性
        */
        {
            let box = document.querySelector("#box");
            // 合法属性：w3c 规定的元素的属性,都存到这个对象（box）中
            //console.dir(box);
            //console.log(box.attributes);
            console.log(box.getAttribute("class"));
            console.log(box.setAttribute("miaov","开课吧"));
            box.removeAttribute("class");
            console.log(box.hasAttribute("miaov"));
        }
    </script>    
```



- 只要操作了innerHTML 元素，所有子元素存在内存中的事件和相关的属性都会丢失。如果希望元素的某些属性在操作了父级的innerHTML 之后，还存在，就把这个属性加在 DOM 中

```js
<script>
        {
            let box = document.querySelector("#box");
            
            box.index = 0; // ECMA 的属性操作，操作的是对象，具体的数据存在内存中，从内存中获取，可以存储各种类型数据
            box.setAttribute("kkb",0); // DOM 的属性操作，值是存在文档中,从文档中获取，类型只能是字符串，不是字符串的话，也会被转成字符串
            // console.log(typeof box.index);
            // console.log(typeof box.getAttribute("kkb"));
            // console.log(box.kkb);
            // console.log(box.getAttribute("index"));
        }
    </script>    
```

```js
<script>
        {
            let box = document.querySelector("#box");
            let div = box.children[0];
            div.index = 1;
            div.setAttribute("kkb","miaov");
            box.innerHTML = box.innerHTML;
            console.log(box.children[0].index);
            console.log(box.children[0].getAttribute("kkb"));
            // 只要操作了innerHTML 元素，所有子元素存在内存中的事件和相关的属性都会丢失。如果希望元素的某些属性在操作了父级的innerHTML 之后，还存在，就把这个属性加在 DOM 中
        }
    </script>  
```



## data 自定义属性
- 在标签中定义data自定义属性：data-key="value";规定加-
- 这个是存在文档中，类型只能是字符串
- 在js操作该元素的 data 自定义属性：el.dataset
    - 获取：el.dataset.key
    - 设置: el.dataset.key = "value"

```js
<script>
        {
            let box = document.querySelector("#box");
            box.dataset.kkb = "开课吧";
            console.log(box.dataset.kkb);
            box.dataset.miaov = "妙味";
        }
        // obj.属性名
        // obj["属性名"]
        // 
    </script>  
```

```js
<script>
        var warp = document.querySelector('.warp');
        var top1 = document.querySelector('.top');
        var main = document.querySelector('.main');
        var bottom = document.querySelector('.bottom');
        
        bottom.innerHTML = '这是底部';

        // 获取自定义属性
        // console.log(bottom.dataset.abc);

        // 设置自定义属性
        bottom.dataset.abc = '666';
    </script>
```



## 节点操作

### 创建节点
语法：element document.createElement("tagName"); 创建一个节点
参数：tagName 标签名称
返回值：创建好的节点

```js
<script>
{
    /*
       element createElement("tagName"); //创建元素
    */
    let h1 = document.createElement("h1");
    h1.innerHTML = "这是标题";
    console.log(h1);
}
</script> 
```

```js
<script>
        // 创建节点
        var oP = document.createElement('p');
        var box = document.querySelector('.box');

        // 插入文档过程 - 添加子节点
        // document.body.appendChild(oP);

        // 将p标签插入到div之前
        document.body.insertBefore(oP,box);

    </script>
```



### 向页面中添加节点
- el.appendChild(node)  在元素的末尾添加一个子级

```js
<script>
{
    /*
      parent.appendChild(node); 向 parent 插入 node，插入在 父级的最末尾
    */
    let box = document.querySelector("#box");
    let h1 = document.createElement("h1");
    h1.innerHTML = "hello DOM";
    box.appendChild(h1);
}
</script>    
```



- el.insertBefore(newNode,oldNode) 在 oldNode 前边添加入 newNode 

```js
<script>
{
    /*
       parent.insertBefore(newNode,oldNode); 在 parent 插入 newNode，插入在 oldNode 之前
    */
    let box = document.querySelector("#box");
    let p = document.querySelector("p")
    let h1 = document.createElement("h1");
    h1.innerHTML = "hello DOM";
    //box.appendChild(h1);
    box.insertBefore(h1,p)
}
</script>   
```



- 在使用 appendChild 和 insertBefore时，如果添加是一个页面上已经存在的节点，会先从原位置删除，然后在添加到新的位置去。

```js
如果添加、插入的节点是一个已有节点的话，会先把这个节点，从原先的位置删除，然后放入我们的新位置
<script>
{
    let box = document.querySelector("#box");
    let div1 = document.querySelector("#div1");
    let box2 = document.querySelector("#box2");
    let div2 = document.querySelector("#div2");
    // box2.appendChild(div1);
    box.insertBefore(div2,div1);
}
/*
    如果插入的节点是一个已有节点的话，会先把这个节点，从原先的位置删除，然后放入我们的新位置
*/
</script>
```



### 替换节点

- parent.replaceChild(newNode,oldNode) 替换子元素

```js
<script>
        // 创建节点
        var oP = document.createElement('p');
        var box = document.querySelector('.box');

        // 将元素替换
        document.body.replaceChild(oP,box);
/*
    如果替换的节点是一个已有节点的话，会先把这个节点，从原先的位置删除，然后放入我们的新位置
*/
    </script>
```



### 删除节点

```js
<script>
{
    let box = document.querySelector("#box");
    let div1 = document.querySelector("#div1");
    // node.remove() 把 node 从 DOM 中删除
    //console.log(div1.remove());
    // parent.removeChild(node) 从 parent 删除掉 node 节点
    console.log(box.removeChild(div1));
}  
</script>
```



- parent.removeChild(el) 删除掉某个子元素

```js
<script>
        // 创建节点
        var oP = document.createElement('p');
        var box = document.querySelector('.box');

        // 删除子节点
        document.body.removeChild(box);
        

    </script>
```



- node.remove();兼容差

```js
<script>
        // 创建节点
        var oP = document.createElement('p');
        var box = document.querySelector('.box');

        // 自己删除
        box.remove();
        

    </script>
```



### 克隆节点

- 不克隆事件

- node.cloneNode(deep) 
    - deep: 默认为false
    - deep 为 true, 克隆元素及属性，以及元素的内容和后代
    - deep 为 false, 只克隆元素本身，及它的属性

```js
<script>
{
    let box = document.querySelector("#box");
    let box1 = document.querySelector("#box1");
    box1.onclick = function(){
        alert(1);
    }
    box.appendChild(box1.cloneNode(true)); 
}    
</script>
```

```js
  <script>
        // 创建节点
        var oP = document.createElement('p');
        var box = document.querySelector('.box');

        // 克隆节点 默认是浅克隆
        // var newBox = box.cloneNode();
        // 深度克隆 - 将子元素也复制
        var newBox = box.cloneNode(true);

        document.body.appendChild(newBox)
        

    </script>
```



## 元素的尺寸获取

- 获取浏览器显示区宽度
  - window.innerWidth

- offset包括边框
    - offsetWidth  可视宽度 + padding + border
    - offsetHeight 可视高度 
    - offsetLeft   距离定位父级的left坐标 
    - offsetTop    距离定位父级的top坐标
    - 直接通过 offsetWidth 来获取元素宽度，必须是显示的元素


```js
<script>
// offset
/*
    offsetWidth
    offsetHeight
    offsetTop
    offsetLeft
*/
{
    let div = document.querySelector("#div");
    // 可视宽高 =  width(height) + padding + border
    console.log(div.offsetWidth,div.offsetHeight);
    // offsetTop/offsetLeft: 元素距离定位父级左上角的距离
    console.log(div.offsetLeft,div.offsetTop);

    let box = document.querySelector("#box");
    console.log(box.offsetLeft,box.offsetTop);
}

</script>
```



- client不包括边框
    - clientWidth  可视宽度 - border+ padding;
    - clientHeight 可视高度 减去 border
    - clientTop    上边框宽度
    - clientLeft   左边框宽度 


```js
<script>

{
    let div = document.querySelector("#div");
    // clientWidth/clientHeight =  width(height) + padding;
    console.log(div.clientWidth,div.clientHeight);
    // clientLeft/clientTop: 左边框宽度/上边框宽度
    console.log(div.clientLeft,div.clientTop);
}

</script>  
```



- scroll
    - scrollWidth   内容宽度
    - scrollHeight  内容高度
    - scrollLeft    左右滚动距离
    - scrollTop     上下滚动距离


```js
<script>
{
    let box = document.querySelector("#box");
    // scrollHeight 内容高度，如果内容高度比元素高度要高，scrollHeight 就是内容高度加滚动条，否则就是元素高度
    console.log(box.scrollHeight);// 内容高度

    // scrollWidth 元素的内容宽度，如果内容宽度小于box宽度，就是box宽度
    console.log(box.scrollWidth);

    // setTimeout(()=>{
    //     // 上下滚动条位置
    //     console.log(box.scrollTop);
    // },2000);

    // setTimeout(()=>{
    //     // 左右滚动条位置
    //     console.log(box.scrollLeft);
    // },2000);
	滚动条滚动事件 onscroll
    // box.onscroll = function(){
    //     console.log(box.scrollTop);
    // };
}

</script> 
```



- getBoundingClientRect()
    - left   元素左侧距离可视区左侧距离
    - top    元素顶部距离可视区顶部距离
    - right  元素右侧距离可视区左侧距离
    - bottom 元素底部距离可视区顶部距离
    - width  可视宽度 
    - height 可视高度

```js
元素相对可视区的位置

<script>
{
    let box = document.querySelector("#box");
    box.onclick = function(){
        console.log(this.getBoundingClientRect());
    };
    /*
    	getBoundingClientRect 新方法IE不兼容
    	
        bottom: 元素底部，相对可视区顶部的距离
        height: 元素的可视高度
        left: 元素的左侧相对于可视区左侧的距离
        right: 元素的右侧相对于可视区左侧的距离
        top: 元素顶部相对可视区顶部的距离
        width: 元素的可视宽度
    */
}
</script>
```

```js
获取元素相对于页面的位置
<script>

{   // 兼容方法
    let div = document.querySelector("#div");
    let l = div.offsetLeft;
    l += div.offsetParent.offsetLeft;
    console.log(l,div.getBoundingClientRect().left);
}

</script>  
```

```js
获取页面绝对尺寸（完整兼容，计算多个父级）
<script>
{
    let div = document.querySelector("#div");
    console.log(getPageOffset(div));
}
function getPageOffset(el){
    let left = el.offsetLeft;
    let top =  el.offsetTop;
    while(el.offsetParent){
        el = el.offsetParent;
        left += el.offsetLeft + el.clientLeft;
        top += el.offsetTop + el.clientTop;
    }
    return {left,top};
}

</script> 
```

- 获取计算后样式值
  - `getComputedStyle(box)['left']`

## 表格相关操作
- tBodies、tHead、tFoot、rows、cells

```js
<body>
    <table border="1" id="table" width="300">
        <thead>
            <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
        </tfoot>
    </table>
<script>
{
    let table = document.querySelector("table");
    /*  
        table.tHead 获取 tead 表头
        table.tBodies 获取的就是 tbody 
        rows 获取 行(tr)
        cells 获取单元格 (th,td)
    */
    console.log(table.tHead,table.tFoot,table.tBodies);
    console.log(table.tBodies[0].rows[0].cells[0]);
}    
</script>
</body>
```



## 其他
- createDocumentFragment 文档碎片

```js
<script>
{
    let box = document.querySelector("#box");

    // console.time(1);计时开始
    // let inner = "";
    // for(let i = 0; i < 1000; i++){
    //     inner += `<div>${i}</div>`;
    // }
    // box.innerHTML = inner;
    // console.timeEnd(1);计时结束

    console.time(1);
1.先创建一个文档碎片
    let fragment = document.createDocumentFragment();
    for(let i = 0; i < 1000; i++){
        let div = document.createElement("div");
        div.innerHTML = i;
       2. 再把内容加到文档碎片中
        fragment.appendChild(div);
    }
3.最后把文档碎片加到页面中，这样性能好
    box.appendChild(fragment);
    console.timeEnd(1);
}
</script>  
```



- NodeList 和 HTMLCollection 

```js
<script>
/*
    nodeList：是节点的集合
        childNodes
        querySelectorAll    
    HTMLCollection ：HTML 元素的集合
        children
        getElementsByTagName
        getElementsByClassName

    1. nodeList 有 forEach 方法，但是 HTMLCollection 没有forEach
    2. HTMLCollection 每次调用时都会动态的去获取, nodeList 中 childNodes 有动态更新，但是querySelectorAll 就不会动态更新
*/    
{
    let div = document.querySelector("#div");
    let nodes = div.querySelectorAll("p");
    let collection = div.children;
    console.log(nodes,collection);
    div.innerHTML = "";
    //nodes = div.querySelectorAll("p");
    console.log(nodes,collection);
    // console.log(div.getElementsByClassName("p"));
    // div.childNodes.forEach(item=>{
    //     console.log(item);
    // });
    // div.children.forEach(item=>{
    //     console.log(item);
    // });
}

</script>    
```

- classList

```js
<body>
    <div class="box active show"></div>
    <script>
        var box = document.querySelector('.box');

        // 获取元素的class列表
        console.log(box.classList);

        // 添加一个class
        box.classList.add('aaa')
        console.log(box.classList)

        // 删除一个class
        box.classList.remove('show')
        console.log(box.classList)


        box.onclick = function(){
             // 切换class
            box.classList.toggle('show')
            console.log(box.classList)

            // 验证class是否存在 - 返回布尔值
            console.log(box.classList.contains('show'))

        }
       

    </script>
</body>
```

