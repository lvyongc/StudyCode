# if布尔运算符数组

- 只有如果

```js
if (box.style.width == '200px') {
                //只有小括号里面的条件满足，那么这里的代码才会执行
                alert('条件成立')
            }
```

- 如果...否则

```js
btn.onclick = function(){
            if(box.style.width == '200px'){
                alert('条件成立')
            }else{
                //当不满足上述条件的时候，执行这里的代码
                alert('条件不成立');
            }
        }
```

- 如果...或者如果...或者如果...否则...（多条件判断）

```js
btn.onclick = function(){
            var scoreTxt = score.value;
           if(scoreTxt >= 80){
               alert('优秀')
           }else if(scoreTxt >= 70){
               alert('良好')
           }else if(scoreTxt >= 60){
               alert('一般')
           }else{
               alert('不及格')
           }
        }
```



注意事项：

- 判断条件可以没有else
- 判断添加可以有多个
- （）括号内是判断的条件

#### 点击隐藏

```js
<style>
        #box{
            width: 200px;
            height: 200px;
            background: red;
        }
    </style>
</head>
<body>
    <button id="btn">点击</button>
    <div id="box"></div>
    <script>
        var btn = document.getElementById('btn');
        var box = document.getElementById('box');

        btn.onclick = function(){
            box.style.display = 'none';
        }
    </script>
</body>
```



#### 判断条件之布尔值

- true	真
- false   假

数字中 0 = false  除了0 = true 

程序会把判断条件转为true或false，然后交给if去做判断

```js
 var onOff = true;
                if(onOff){
                    alert('成立')
                    // onOff = false;
                }else{
                    alert('不成立')
                    // onOff = true;
                }
                /*
                    每次都需要修改onoff的值，为自己当前的相反值
                */
                onOff = !onOff;
```



#### 比较运算符和逻辑运算符

#####比较运算符

- 5>10		大于
- 5<10        小于
- 5==10      等于
- 大于等于 >= 、小于等于 <=  

A==B：比较等号左右两边的值是否相等，如果相等返回true，否则返回false

##### 逻辑运算符

   "与或非"

- && - 与

```js
 if(score.value<90 && score.value > 60){
                alert('同时满足了')
            }else{
                alert('没有满足')
            }
```

- || - 或

```js
if(score.value > 90 || score.value < 20){
                alert('比较极端的成绩')
            }else{
                alert('正常的成绩')
            }
```

- ! - 非

```js
if(!score.value > 90){
                alert('非常好')
            }else{
                alert('一般般')
            }
```



- 5<10 && 2<3
- 5>10 || 2>3

A && B：如果左侧的结果为true，返回右侧的结果，如果左侧的结果为false，直接返回左侧的结果

```JS
int andand(int a, int b)
{
    if (a)
        if (b)
            return 1;
        else
            return 0;
    else
        return 0;
}
```



A || B：如果左侧的结果为true，返回左侧的结果，否则返回右侧的结果

```JS
int oror(int a, int b)
{
    if (a)
        return 1;
    else
        if (b)
            return 1;
        else
            return 0;
}
```



##### 禁止a标签刷新



a标签是超链接，点击会导致页面的刷新或者跳转页面，可以在href添加

javascript:;	来禁止发生

```JS
  <a id="prev" href="javascript:;"></a>
```



##### 定义数组

[] 可以存储多个值

每个值之间用逗号进行间隔，最后一个值后面没有逗号

```js
var arr = ['a','b','c','b','vccc'];
```

##### 数组的长度

length

```js
var arr = ['a','b','c','b','vccc'];
arr.length;	获取数组的长度，表示当前数组有多少个值
```

##### 数组的取值

根据下标进行取值，下标为数字，因为不符合标识符命名要求，所以我们必须使用 [] 的方式，对其进行操作

下标从0开始

```js
var arr = ['a','b','c','b','vccc'];
arr[0] 'a'
arr[1] 'b'
arr[2] 'c'
arr[3] 'd'
arr[4] 'vccv' 
```

```js
<script>
// 数组 [data,data2,data2……];    
var arr = ["a","b","c"];
// 数组中每一位数据 用 , 隔开
//console.log(arr);
// 用下标可以获取到数组的其中一位,注意数组是从0开始计数的 arr[inder]
console.log(arr[2]);
// length 来获取数组的长度 arr.length 数组中存储的数据的个数
console.log(arr.length);
</script>    
```

##### 一组元素的操作

如果要批量操作一组元素可以使用循环

```js
<script>
var box = document.querySelector("#box");
var btns = box.querySelectorAll("button");
/*
    !!! 一组元素不能直接操作,只能通过下标操作
    btns.length 代表是元素的个数
*/
console.log(btns[0], btns.length);
// !!! 一组不能直接操作,哪怕这组元素只有一个
btns[0].style.background = "red";
btns[1].style.background = "red";
btns[2].style.background = "red";
btns[3].style.background = "red";
btns[4].style.background = "red";
// btns[1].style.background = "red";
// 如果要批量操作一组元素可以使用循环
</script>    
```

