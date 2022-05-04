

### 函数声明和调用



- 函数: 函数过程中的这些语句用于完成某些有意义的工作——通常是处理文本，控制输入或计算数值。通过在程序代码中引入函数名称和所需的参数，可在该程序中执行（或称调用）该函数



- JS的函数: 我们把一段需要重复使用的代码，用一个 function 的语法 包起来，方便我们重复调用它

- function 声明

  ```js
  函数声明:
  
      function 名字(){
          // 要执行的代码
      }
  
      函数调用:
          名字();
  */
  
  function fn(){
      console.log(1);
  }
  fn();
  ```

  

- 函数表达式

```js
匿名函数: 没有名字的函数
    匿名函数在使用时：
        1. 直接执行 -- 匿名函数自执行
            (function(){
                console.log(1);
            })(); 
        2. 把函数存储起来 - 函数表达式
            var fn = function(){
                console.log(1);
            };
```



- 函数的事件调用 和 非事件调用

```js
    事件是元素本身就具有的特征，只不过我们，触发了事件之后，默认没有相关的一些处理
    给元素的某个事件 添加一个 事件处理函数
    
    非事件调用:
    function fn(){
            console.log(123)
        }
        fn()

    匿名函数  - 事件调用函数
        div.onclick = function(){

        }

	console.dir 把对象的所有属性和方法都打印出来
```



### 函数传参
  - 形参 和 实参

```js
<script> 
/*
函数传参：
    形参：形式上的参数 - 给函数声明一个参数
    实参: 实际的参数 - 在函数调用 给 形参赋的值
    function fn(形参1,形参2){

    }    
    fn(实参1,实参2);
*/    
function fn(a,b){
    console.log(a,b);
}    
fn(1,2);
</script> 
```



  - 案例：封装选项卡函数

### arguments 不定参
  - arguments 的特性：length 和 下标   

```js
<script>
function fn(){
    console.log(arguments);
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}
fn(10,10,2,13,12432)
/*
    arguments 不定参，可变参  代表 函数的所有实参的集合
    通过下标获取参数的每一位
    通过 length 获取 实参的个数
*/
</script>    
```

```js
<script>
        function fn(){
            // 获取实参的个数
            console.log(arguments.length)

            // 获取函数
            console.log(arguments[1])
            // 调用函数 后面加括号调用
            arguments[1]();

            
        }

        fn([1,2,3],function(){alert(111)},'aaa')
    </script>
```



  - 案例：参数求和

```js
<script>
        // 求和

        // 形参可以不定义
        function sum(){
            // 参数列表
            // console.log(arguments)[1,2,3,4,5,6]

            // console.log(arguments[5])

            // 声明一个存储结果的变量
            var res = 0;

            for(var i=0;i<arguments.length;i++){
                res+=arguments[i];
            }

           console.log(res);
        }

        sum(1,2,3,4,5,6,7,8,9,213)
    </script>
```



### 封装函数

- 当有两段代码本身的功能及其相似，只有个别地方不一样，这时候，我们就可以考虑，把两段代码合并一个函数，然后把两段代码中不一致的内容，在通过传参传进去

```js
<script>

        // 定义函数的目的 是为了重复调用
        // 最好给js操作的类、id 和 CSS样式所分开！
        function tabFn(cn){
            var tab = document.querySelector(cn);
            var btns = tab.querySelectorAll('input');
            var lis = tab.querySelectorAll('li');

            for(var i=0; i<btns.length;i++){
                // 给所有的按钮都添加上对应的下标 - 存到自定义属性里
                btns[i].laowang = i;

                btns[i].onmouseover = function(){
                    for(var i=0;i<btns.length;i++){
                        btns[i].className = '';
                        lis[i].className = '';
                    }

                    this.className = 'active';

                    // 获取当前按钮的下标/索引/第几个！
                    // 当前按钮对应的li
                    lis[this.laowang].className = 'show';
                }
            }
        }

        // 调用函数
        tabFn('.tab1')
        tabFn('.tab2')

    </script>
```



### 封装获取元素的方法

```js
<script>
// var box = document.getElementById("box");
function _id(idName){ //通过 id 来获取元素
    return document.getElementById(idName);
}
function _css(parent,selector){ //通过 css选择器获取 来获取元素
    return parent.querySelector(selector);
}
function _cssAll(parent,selector){ //通过 css选择器获取 来获取一组元素
    return parent.querySelectorAll(selector);
}
var box = _id("box");
var box2 = _id("box2");
var box3 = _css(document,"#box3");
var boxs = _cssAll(document,"div");
</script>    
```



### return 返回值
  - 函数返回值定义：函数执行完成后的结果
  - return的作用
    - 设置函数执行后结果
    - 可以终止函数执行
  - return 使用的注意事项
    - 必须是函数中使用
    - 终止函数执行

- 形参：形式上的参数，相对于声明

- 函数返回值：每一个在执行时都会返回一个执行结果

```js
函数返回值 - 函数执行之后的返回结果
    1. 所有函数都会有函数返回值（也就是说函数执行之后一定会返回一个结果）,如果没有定义默认返回 undefined
    2. 在函数中 在 return 后边定义返回值
*/    
function fn(){
    var a = 1;
    return [a];
};
console.log(fn());
```



```js
// return 可以返回一个结果值
        function fn(){
            // console.log(1)
            // 返回 
            return 123;
        }

        var b = fn();

        console.log(b); 
        // b=213


        // return 可以终止函数往下执行（提前跳出函数）
        function fn2(){
            console.log(1);
            return ;			在 函数 中，return 之后代码就不在执行了
            console.log(2);
        }

        fn2();


        // 一个函数没有声明return = undefined
        // 每个函数都有return 只是定义与未定义的区别！
        function fn3(){

        }

        var c = fn3();

        console.log(c)      结果是undefined

        // return 只能在函数之内使用！
```



  - 案例：封装 选择器方法

return返回函数的结果，这个结果可以拿来用

```js
<script>
        // var div = document.querySelector('div');
        function $(n){
            return document.querySelector(n)
        }

        $('div').style.width = '100px';
        $('div').style.height = '100px';
        $('div').style.border = '1px solid red';

    </script>
```



### parseInt

```js
<script>
// parseInt(data,基数)
/*
   data: 要转成数字的字符串，如果 data 不是一个字符串类型，会先转换成字符串之后再来转换
   基数：标明了 string 中存储数字 是几进制 (2 - 36) 
*/    
// 0xf --> 15
//console.log(0xf);
// console.log(parseInt(0xf,10));// 15
// console.log(parseInt(0xf,16));// 21
// console.log(String(0xf)); -- > 15
// 0 - 9 a - f // f 在十六进制中 代表 15
console.log(parseInt("15",16)); // 15
</script>    
```



### 获取计算后样式
- 计算后样式和 style 的区别
- getComputedStyle() 方法  
- 封装 getStyle() 获取计算后样式
- 扩展：currentStyle   当前样式

```js
<div id="box"></div> 
<script src="index.js"></script>
<script>
var box = _id("box");
box.onclick = function(){
    // 点击时获取box的宽度 在原有基础上 + 100
    // console.log(box.style); // style 获取的是行间样式，直接写在div上的样式，不能拿到样式表里面设置的样式
    
    // 获取计算后样式，拿到样式表设置的样式数据
    /*
       window.getComputedStyle(el) 获取元素的计算后样式
       在js中使用 window 下的方法 window 默认可以不写

       计算后样式：优先级最高的这条样式，也就是元素当前显示出来的样式
       getComputedStyle(el)["样式名"]

       // 扩展： IE8及以下不支持getComputedStyle,需要使用el.currentStyle["样式名"]
    */
    //console.log(getComputedStyle(box)['marginLeft']);
    console.log(box.currentStyle["width"])
};
</script>

		兼容：
  <script>
var box = _id("box");
box.onclick = function(){
//    if(box.currentStyle){
//        //console.log("IE");
//         console.log(box.currentStyle["width"]);
//    } else {
//     console.log(getComputedStyle(box)["width"]);
//    }
   // console.log(getStyle(this,"width"));
   var w = parseFloat(getStyle(this,"width"));
   this.style.width = w + 100 + "px";
};
// 获取元素计算后样式
// el 元素、attr 样式名
function getStyle(el,attr){
    return el.currentStyle?el.currentStyle[attr]:getComputedStyle(el)[attr];
}
</script>
```



### JS 预解析机制 （变量提升 Hoisting）

变量提升（Hoisting）被认为是， Javascript中执行上下文 （特别是创建和执行阶段）工作方式的一种认识

- var 的提升

```js
<script>
/*
    JS 预解析机制 (变量提升)
        JS 在读取到一个 script（或者一个函数作用域），会先进行一个预解析的过程，在这个过程中，会把 var 声明的变量 和 function 声明的函数体，提升到整个 script（或者一个函数作用域）最前边去
        - var 在预解析时，会把 声明提升到最前边
        - function的函数体在预解析时，会把整个函数体提升至最前边
        在预解析完之后，JS 才会从上到下一行一行解析代码并执行

函数体：
function fn(){
    console.log(1);
}
函数表达式:
var fn = function(){}   

*/ 

console.log(a); //  undefined
console.log(fn);  // fn(){ console.log(1); }
console.log(fn2);	//  undefined
var a = 0;
function fn(){
    console.log(1);
}
var fn2 = function(){}   
</script>    
```

```js
<script>
/*
预解析之后的代码流程：
var a;
var a;
function a(){
    console.log(1);
}
console.log(a); // function a(){console.log(1);} 
a = 10;
console.log(a); //  10
console.log(a); //  10
a = function(){
    console.log(2);
}
console.log(a); // function(){ console.log(2);}

*/    
console.log(a); // 
var a = 10;
console.log(a); //
function a(){
    console.log(1);
}
console.log(a); // 
var a = function(){
    console.log(2);
}
console.log(a); //
</script>    
```



- function 的提升

扩展：从概念的字面意义上说，“变量提升”意味着变量和函数的声明会在物理层面移动到代码的最前面，但这么说并不准确。实际上变量和函数声明在代码里的位置是不会动的，而是在编译阶段被放入内存中  

###作用域 （scope）
通常来说一段程序代码中使用的变量和函数并不总是可用的，限定其可用性的范围即作用域，作用域的使用提高了程序逻辑的局部性，增强程序的可靠性，减少名字冲突。

- 全局作用域

  - 通过 var 或 function 声明在全局中(任意函数之外)的数据，在全局的任意地方都可以调用或者修改 - 全局变量
  - window(在浏览器 window 本身和作用域有合并) 的属性
  - 在浏览器中，默认不写 var,浏览器就会任务是要给 window 的属性

- 函数作用域
  - 声明在某个函数中的数据(var,function,参数)，就只能在该函数内容使用 - 函数的局部数据(局部变量)
  - 变量、函数的参数、声明在函数内部函数

```js
var a = 0;//声明在任意函数之外，就是全局变量  
console.log(a);
function fn(){
    var b = 10;		//声明在任意函数内，就是局部变量
    console.log(a);
    a = 10;
}
fn();
console.log(a);
console.log(b);
```



- ###作用域链 （scope chain）
  
  - 作用域链：JS 中数据的查找规则
  
  - 在 JS 中我们调用一条数据时，会现在当前作用域进行查找，如果找不到，就从向上找父作用域的数据，还找不到就接着向上，一直找到全局作用域(window下)，还找不到就报错。
  
  
  
  https://developer.mozilla.org/en-US/docs/Glossary/Scope

```js
<script>

        // 作用域链 - 变量/函数 查找规则
        // 由内向外 - 就近原则
        // 从自身作用域 -> 外层作用域 -> 全局作用域 - > window
        
        // 全局变量 - 存在window下面的
        var a=12; // window.a

        function fn(){
            var a = 5;
            //局部函数
            function fn2(){
                var a=666;
                console.log(a)
            }
            fn2();
        }
        fn();

        console.log(window)

        
    </script>
```

```js
<script>
// 函数的每次调用，都相当于把这个代码复制出来执行了一遍
function fn(){
    var b = 100;
    return function(){
        b -= 20;
        console.log(b);
    }
    
}
var f = fn();
f();// 80
f();// 60
f();// 40
fn()();//80

</script>    
```



##### window

```js
	在 JS 中，默认情况下 var 声明的全局变量和function 声明的全局函数会挂载在window上

    在 JS 中，默认 我们全局数据都会保存在window下。
    另外 window 是 JS 在浏览器里的顶层 对象，所以 window的属性 和 方法 也都是全局的
    在 JS 中 调用 window 下的属性 和 方法，默认可以不写 window
```

##### 全局污染

```js
<script>
// 全局变量污染：大家都在全局中写代码，会容易命名冲突，导致代码冲突

/*
    养成一个好习惯，不要在全局去声明变量
*/
(function (){ // 命名空间
    // 小明的代码
    var list = document.querySelector(".list");
    console.log(list);
    /////
})();


(function (){
// 小茹的代码
    var list = document.querySelector(".menuList");
    console.log(list);
/////
})();
</script>    
```



###闭包
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures

函数对象可以通过作用域链相互关联起来，函数体内的数据(变量和函数声明)都可以保存在函数作用域内，这种特性在计算机科学文献中被称为“闭包”。既函数体内的数据被隐藏于作用于链内，看起来像是函数将数据“包裹”了起来。从技术角度来说，js的函数都是闭包：函数都是对象，都关联到作用域链，函数内数据都被保存在函数作用域内。



闭包的本质是对作用域的应用，闭包能读取其他函数中的函数，在JS中只有函数的子函数能访问。

闭包就是能够读取其他函数内部变量的函数。例如在javascript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成“定义在一个函数内部的函数“。在本质上，闭包是将函数内部和函数外部连接起来的桥梁 

- ```js
  
  <script>
          闭包：
      形式：函数嵌套函数
      作用：子函数可以访问父函数的作用域，但是父级不能访问子级的
  
    	闭包就是能够读取其他函数内部变量的函数。例如在javascript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成“定义在一个函数内部的函数“。在本质上，闭包是将函数内部和函数外部连接起来的桥梁  
  
          // 闭包 - 函数作用域形成的一种写法
          // 子函数调用父级函数的局部变量 - 称之为闭包
          function fn(){
              // 局部变量
              var a=12;
              function fn2(){
                  console.log(a);
              }
              fn2();
          }
          fn();
  
  
      </script>
  
  		function fn(){
              // 局部变量
              var a=12;
              function fn2(){
                 a--;
                 console.log(a);
              }
              fn2();  
              // 得到12-1=11
              闭包的局部变量是声明一次，第二次使用的是上一次函数的结果
              fn2();  
              // 得到11-1=10
          }
          fn();
  
  ```

- 闭包的直接写法（自执行函数）

```js
<script>
        // 自执行函数
        (function(){
            var a = 5;
            function fn2(){
                a++;
                console.log(a);
            }
            fn2();
        })()
        得到6
    </script>
```

##### 闭包应用

```js
var btns = document.querySelectorAll('input');

        // 弹出对应下标
        for(var i=0;i<btns.length;i++){
            tab(i);			循环中调用函数，传入实参
        }

		这是函数，传入形参：
        function tab(index){
            // 在函数中，形参相当于局部变量：var index;
            // 局部变量在子函数直接调用，所以下面的函数直接调用形参
            // 形成了闭包
            btns[index].onclick = function(){
                alert(index);
            }
        }


		执行过程;
		btns[0].onclick = function(){
             alert(0);
         }

        btns[1].onclick = function(){
             alert(1);
         }

         btns[2].onclick = function(){
             alert(2);
         }


		代码优化：
        // 使用匿名函数自执行
        for(var i=0;i<btns.length;i++){
            (function(index){
                btns[index].onclick = function(){
                    alert(index);
                }
            })(i);
        }
```



### this

this 当前执行代码的环境对象

- 默认情况下：

  函数外：window

  函数内：函数中的 this 指向谁，取决这个 函数 是怎么调用

1. 作为对象的属性(方法，事件)调用，指向当前对象

2. 其余情况指向 window

```js
 事件函数下this
         btn.onclick = function(){
             //this 当前事件对象
             alert(this.value)    就是btn的内容
         }
```

- this 当前执行代码的环境对象

```js
//this的值取决于函数被调用的方式
        function fn(){
            alert(this.value);
        }

        btn.onclick = fn;		弹出btn的内容，在事件中调用this，this就是事件本身
        
        
        function fn(){
            alert(this);
        }

        fn（）		弹出 [object Window]，直接调用函数 this会指向window
```



- 函数（运行内）环境
  在函数内部，this的值取决于函数被调用的方式



######小测试

```js
<script>
//函数的每次执行之间没有任何关系,每次执行都相当与 在 js 内部 把这个代码重新写了一遍
/*
function fn(){
    var b = 0;
    b++;
    console.log(b);
}
fn();
// function fn2(){
//     var b = 0;
//     b++;
//     console.log(b);
// }
// fn2();
*/

function fn(){
    var b = 0;
    // function fn2(){
    //     b++;
    //     console.log(b); // 1
    // }
    // fn2();
    // function fn2_2(){
    //     b++;
    //     console.log(b); // 2
    // }
    // fn2_2();
    // function fn2_3(){
    //     b++;
    //     console.log(b); // 3
    // }
    // fn2_3();
    function fn2(){
        b++;
        console.log(b);
    }
    fn2();//1
    fn2();//2
    fn2();//3
}
fn();

</script>    
```

```js
<script>

function fn(){
    var b = 0;
    function fn2(){
        b++;
        console.log(b);
    }
    fn2();//1
    fn2();//2
    fn2();//3
}
fn();
// function fnA(){
//     var b = 0;
//     function fn2(){
//         b++;
//         console.log(b);
//     }
//     fn2();//1
//     fn2();//2
//     fn2();//3
// }
// fnA();
fn();

</script>    
```

```js
<script>
// 函数每次执行之间没有任何关系，函数执行一次就相对于在js中复制了一个新的函数
// function fn(){
//     var b = 0;
//     function fn2(){
//         b++;
//         console.log(b);
//     }
//     fn2();//1
//     fn2();//2
//     fn2();//3
// }
// fn();

// function fn(){
//     var b = 0;
//     function fn2(){
//         b++;
//         console.log(b);
//     }
//     fn2();
//     fn2();
//     fn2();
// }
// fn();

function fn(){
    var b = 0;
    // 作用域  ！！！ 声明在那
    return function(){
        // 注意这里声明 在 fn 中，也就是 fn 的子函数，那它可以访问父级的作用域 也就 fn 的作用域
        b++;
        console.log(b);
    };
}
var f = fn();
f();//1
f(); //2
// 注意 f 这会是 fn 的子函数 function(){b++; console.log(b); }
//console.log(f);
</script>    
```



#####严格模式

严格模式(use strict)下 function 的 this 指向
"严格模式"体现了Javascript更合理、更安全、更严谨的发展方向

```js
开启严格模式 - 添加字符串 use strict
   <script>
        'use strict'
        
    </script>
```

```js
在严格模式下，function 如果不是作为对象的属性调用， this 就 undefined

<script>
'use strict'; 
function fn(){
    console.log(this); // 在严格模式下，function 如果不是作为对象的属性调用， this 就 undefined
}
fn();


</script>    
```



##### 改变this指向方法

- call 
  
  -  function.call(this指向谁,参数1,参数2) 调用函数，并修改函数中的this指向
  
  
  
    执行函数的 call 方法，会调用函数，并且修改函数中的 this 指向
  
    call 中 第 0 个参数（是下标第0个），代表当前执行时，函数中的this要指向谁,第二三个是参数值



- apply

  - function.apply(this指向谁,[参数1,参数1]) 调用函数，并修改函数中的this指向

    

      执行函数的 apply 方法，会调用改函数，并且修改函数中的 this 指向

      apply中第 0 个参数，代表当前执行时，函数中的this指向谁

      apply中第 1 个参数是个数组，数组中代表了我们要往 函数中传递的参数

```js
<script>	用call改变this的指向
        
        var btn = document.querySelectorAll('input')[0];
        // 改变this指向

        function fn(a,b,c){
            console.log(this,a,b,c);
        }

        // fn()

        // call(写你想指向的this元素,参数...)
        fn.call(btn,123,456,789)

    </script>
```

```js
<script>		用apply改变this的指向,apply的第二个参数是一个数组
        
        var btn = document.querySelectorAll('input')[0];
        // 改变this指向

        function fn(a,b,c){
            console.log(this,a,b,c);
        }

        // apply(指向this的元素,[参数...])
        fn.apply(btn,[1,2,3])

        

    </script>
```



##### this总结

```js
this
        - 函数内
            - 作为对象属性(方法、事件): 指向当前对象
            - this --> window
        - 函数外
            this --> window
        - 严格模式下
            函数中的 this 默认是 undefined

    call 和 apply: 函数调用时 修改 this 指向        

    bind 调用bind会返回一个新函数，这个新函数中的this，就指向我们要绑定的对象
```





- bind

  ```js
  <script>
  /*
     function.bind(指向,参数1,参数2,参数3) 绑定 this 指向
     
     调用 函数的 bind 方法，会返回 一个 绑定了 this 指向的新函数
     第 0 个参数，就是 bind 返回的新函数的 this 指向
  
     bind 返回的新函数，不能在进行绑定
  */    
  
  function fn(a,b,c){
      console.log(this,arguments,a,b,c);
  }
  var fn2 = fn.bind(document.body,1,2,3);
  // 'fn2(4,5,6);'
  document.onclick = fn2;
  </script>   
  ```

  

创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用

## 

###bind 实现原理解析

```js
<script>
// bind ECMAscript 5.1   
/*
bind(fn,_this)
参数：
    fn 要绑定 this 的函数
    _this 返回新函数 this 指向谁

*/  

function bind(fn,_this,...arg){
    return function(...arg2){
        fn.call(_this,...arg,...arg2);
    }
} 
function fn(){
    console.log(this,arguments);
}

var fn2 = bind(fn,document.body,1,2,3);
fn2(4,5,6);
var fn3 = bind(fn2,1);
document.onclick = fn2;


</script>    
```



- bind总结

```js
<script>
function fn(){
    console.log(this,arguments);
}    

var fn2 = fn.bind(document.body);
fn2();

/*
    fn.bind(指向,参数1,参数2,参数3) 调用函数的 bind 方法，会返回一个新函数,在新函数中 this 会绑定成 我们希望他指向的内容
    指向: 新函数的 this 指向
    剩余的参数,就是传入函数的实参(通常还是在调用函数时再传参)
    bind 返回的新函数 this 指向，已经被绑定了，不能再次进行修改
*/
</script>    
```



