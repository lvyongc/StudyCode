#### 三目语法

语法规则： 条件？满足：不满足

```js
var b = a>5?满足:不满足
```

#### 获取一组元素

获取到的一组元素 是 类数组

```js
var divs = document.querySelectorAll('div');

<script>
// 只能获取到一个元素
// document.getElementById("idName"); 在文档中通过id来获取元素
// parent.querySelector("css selector"); 在父级下通个css选择器获取元素(根据选择器匹配到的第0个元素);
// 获取到一组元素 类数组
/*
   parent.getElementsByTagName("标签名");  在父级下通过标签名获取一组元素
   parent.getElementsByClassName("类名");  在父级下通过类名获取一组元素
   parent.querySelectorAll("css selector"); 在父级下通个css选择器获取一组元素
*/
var box = document.querySelector("#box");
//var btns = box.getElementsByTagName("button");
//var btns = box.getElementsByClassName("btn");
var btns = box.querySelectorAll(".btn");
console.log(btns);
</script>    
```

加上All，获取所有div

不能直接操作一组元素，利用循环通过下标来操作每一个元素

```js
//获取div个数
        var len = divs.length;
        for(var i=0; i<len; i++){
            divs[i].title = '1232131231';
        }
```

#### 自定义属性-索引值

- 只有对象（元素）才能加自定义属性

如果在事件中我们需要知道当前操作的是第几个一定加索引值

#### 定点清除

```js
<script>
var btns = document.querySelectorAll(".option button");
var inners = document.querySelectorAll(".inner div");
var now = 0;// 记录选中的是第几个
for(var i = 0; i < btns.length; i++){
    btns[i].index = i; //索引值 记录当前这个元素是这组中的第几个
    btns[i].onmouseover = fn;
}
/*
定点清除
    1. 声明变量 记录 当前选中的是哪一个
    在事件中
        1. 先清除上一次选中的
        2. 给当前加上
        3. 同步记录
*/
function fn(){
    // 先清除上次选中
    btns[now].classList.remove("active");
    inners[now].classList.remove("show");
    
    // 给当前操作加上选中
    this.classList.add("active");
    inners[this.index].classList.add("show");

    // 记录一下选中的是第几个
    now = this.index;// 现在 选中项已经切换了所以同步一下 now 的记录
}
</script>  
```



#### for循环

```js
<script>
// for 循环, 循环重复性去处理某些事情
/*
    for(循环初始值;循环结束条件;自增语句){
        执行语句
    }

 1. 初识值
 2. 判断条件 - 成立
 3. 执行语句
 4. 自增
 5. 判断条件  - 成立
 6. 执行语句
 7. 自增
 ……
 8. 判断条件  - 不成立
*/
for(var i = 0;i < 10; i++){
    console.log(i);
}
</script>    
```

#### 双循环

```js
<script>
// 有两（多）个循环变量的情况下，什么时候结束循环呢？最后一个循环变量不成立值，循环就结束
for(var j = 0,i = 0;j<6,i < 10; j++,i++){
    console.log(i,j);	9 和 9
    最后一个条件不成立才停止，循环继续的判断依据以分号前的最后一项为准，即判断i<10符不符合条件，j<6这个条件已经没有了
}
</script>    
```



####批量添加事件

```js
/*批量添加事件*/
for(var i = 0; i < navs.length; i++){ //循环是在js代码读取到这时就执行了

    // onmouseover 鼠标移入事件
    navs[i].onmouseover = function(){
        //鼠标移入时才会执行这里代码,这会 for 循环早已经执行完了,所以只能拿到循环结束之后的结果
        // !!! 注意事件函数中不要去调用外边循环的循环变量，这会循环早已经执行完了
        //console.log("鼠标移入");
        console.log(i);
    };

    // onmouseout 鼠标移出事件
    navs[i].onmouseout = function(){
        //console.log("鼠标移出");
    };

}
```

#### this

函数被谁调用，this就指向谁，如果被事件调用，是当前触发事件的元素，如果直接调用就指向 window

```js
for(var i = 0; i < navs.length; i++){ //循环是在js代码读取到这时就执行了
    navs[i].onmouseover = function(){
      // this
      /*
        谁调用 this 指向谁
        this 在事件处理函数中，代表的是当前调用事件的元素
      */
        //console.log(this);
        var sImg = this.querySelector(".img");
        sImg.style.display = "block";
        //console.log(sImg);
    };

    // onmouseout 鼠标移出事件
    navs[i].onmouseout = function(){
        var sImg = this.querySelector(".img");
        sImg.style.display = "none";
    };

}

```



#### 取模

[i%2] 取模 - 取余数 

​    0%2 = 0

​    1%2 = 1

​    2%2 = 0

​    3%2 = 1

​    4%2 = 0

​    ...

```js
<script>
// % 取模运算  求余数
//console.log(2%5); // 2%5 是3
for(var i = 0; i < 10; i++){
    console.log(i%5,i);// 任意数%n 结果为 0 到 n-1
    // 结果是: 0 1 2 3 4
}
</script>    
```



####classList 

- add 添加一个项
- contains 判断是否包含
- toggle 切换
- remove 删除一项

```js
el.classList 获取设置 元素的 class 列表 (类数组)
    - 通过下标获取到元素的每一个class
    - length 元素的 class 个数
    - value 存储 完整 class  
    - add("class名字") 给元素classList 添加一个class
    - remove("class名字") 从元素的 classList 删除一项
    - contains("class名字") 判断元素的classList 是否包含这个 class ，包含返回 true 否则 返回 false
    - toggle("class名字") 切换class，如果元素有这个 class 我们就删掉，否则给给加上个 class


```

