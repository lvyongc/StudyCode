# JS基础

## 认识JS

### 计算机语言 

![计算机语言](C:\Users\admin\Desktop\系统笔记\img_js_基础\计算机语言.png)

------

### 编程语言 

![编程语言](C:\Users\admin\Desktop\系统笔记\img_js_基础\编程语言.png)

------

### 常见的编程语言 

![常见的编程语言](C:\Users\admin\Desktop\系统笔记\img_js_基础\常见的编程语言.png)

------

### 编程语言的发展历史 – 机器语言 

![编程语言的发展历史 – 机器语言](C:\Users\admin\Desktop\系统笔记\img_js_基础\编程语言的发展历史 – 机器语言.png)

------

### 编程语言的发展历史 – 汇编语言 

![编程语言的发展历史 – 汇编语言](C:\Users\admin\Desktop\系统笔记\img_js_基础\编程语言的发展历史 – 汇编语言.png)

------

### 编程语言的发展历史 – 高级语言 

![编程语言的发展历史 – 高级语言](C:\Users\admin\Desktop\系统笔记\img_js_基础\编程语言的发展历史 – 高级语言.png)

------

### 机器语言和高级语言 

![机器语言和高级语言](C:\Users\admin\Desktop\系统笔记\img_js_基础\机器语言和高级语言.png)

------

### 认识JavaScript 

![认识JavaScript](C:\Users\admin\Desktop\系统笔记\img_js_基础\认识JavaScript.png)

------

### JavaScript的起源（一） 

![JavaScript的起源（一）](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript的起源（一）.png)

------

### JavaScript的起源（二） 

![JavaScript的起源（二）](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript的起源（二）.png)

------

### JavaScript的历史（三） 

![JavaScript的历史（三）](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript的历史（三）.png)

------

### JavaScript的起源（四） 

![JavaScript的起源（四）](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript的起源（四）.png)

------

### JavaScript的组成 

![JavaScript的组成](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript的组成.png)

------

### JavaScript由谁来运行？ 

![JavaScript由谁来运行？](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript由谁来运行？.png)

------

### 认识JavaScript引擎 

- JSC 用于 苹果的浏览器、微信内的网页
- V8 用于 谷歌浏览器、node

![认识JavaScript引擎](C:\Users\admin\Desktop\系统笔记\img_js_基础\认识JavaScript引擎.png)

------

### 浏览器内核和JS引擎的关系 

- 分为2部分，1解析渲染html，css；2是解析，执行js

- 小程序的wxml\wxss有webview渲染，内部是webcore
- js通过jscore运行

![浏览器内核和JS引擎的关系](C:\Users\admin\Desktop\系统笔记\img_js_基础\浏览器内核和JS引擎的关系.png)

------

### 著名的Atwood定律 

![著名的Atwood定律](C:\Users\admin\Desktop\系统笔记\img_js_基础\著名的Atwood定律.png)

------

### JavaScript应用越来越广泛 

![JavaScript应用越来越广泛](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript应用越来越广泛.png)

------

## JavaScript的基本语法 

### JavaScript的编写方式 

![JavaScript的编写方式](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript的编写方式.png)

------

### noscript元素

- noscript
  - 浏览器不支持JS时，用来设置提示信息的

![noscript元素](C:\Users\admin\Desktop\系统笔记\img_js_基础\noscript元素.png)

------

### JavaScript编写的注意事项 

- 标准是写 双标签
- type 不用写
- **正确位置**在，body结束标签的上一行，在整个**body**中，处于**最末尾**的位置
  - 也可以放在body结束标签后面的位置，但这是 错误的

![JavaScript编写的注意事项](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript编写的注意事项.png)

------

### JavaScript的交互方式 

- document.write
  - 写入文档、网页中

```js
// 3.交互方式三: document.write()
    document.write("Hello Kobe");

    // 4.交互方式四: prompt函数, 作用获取用户输入的内容
    var result = prompt("请输入你的名字: ");
    alert("您刚才输入的内容是:" + result);
```

![JavaScript的交互方式](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript的交互方式.png)

------

### Chrome的调试工具 

![Chrome的调试工具](C:\Users\admin\Desktop\系统笔记\img_js_基础\Chrome的调试工具.png)

------

### JavaScript语句和分号 

![JavaScript语句和分号](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript语句和分号.png)

------

### JavaScript的注释 

- 文档注释（在js文件中使用）
  - 用于编写工具函数
  - 第一行是，函数的作用
  - 第2、3行是，参数的限制
  - 是参数-什么类型-哪个参数-参数含义
  - 这样在，使用这个函数的时候，会自动有函数作用提示、函数参数提示

```js
/**
 * 和某人打招呼的函数
 * @param {string} name 姓名
 * @param {number} age 年龄
 */
function sayHello(name, age) {

}

sayHello("why", 18)
```

- 注释

```js
	1.单行注释
	// 单行
    2.多行注释
    /* 
     我是一行注释
     我是另外一行注释
    */
    3.文档注释-是参数-什么类型-哪个参数-参数含义
    /**
     * 和某人打招呼的函数
     * @param {string} name 姓名
     * @param {number} age 年龄
     */
```

![JavaScript的注释](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript的注释.png)

------

### VSCode插件和配置 

- console 的快速编写

```js
// 推荐方式一: log -> enter
    console.log("Hello World");

    // 推荐方式二: react插件 -> clg -> enter
    console.log("Hello World")
```

- 括号-设置json文件

```js
"editor.bracketPairColorization.enabled": true,
"editor.guides.bracketPairs":"active"
```

![VSCode插件和配置](C:\Users\admin\Desktop\系统笔记\img_js_基础\VSCode插件和配置.png)

------

## JavaScript变量和数据类型 

### 变化数据的记录 – 变量 

![变化数据的记录 – 变量](C:\Users\admin\Desktop\系统笔记\img_js_基础\变化数据的记录 – 变量.png)

------

### 变量的命名格式 

![变量的命名格式](C:\Users\admin\Desktop\系统笔记\img_js_基础\变量的命名格式.png)

------

### 变量的命名规范 

- https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/lexical_grammar

![变量的命名规范](C:\Users\admin\Desktop\系统笔记\img_js_基础\变量的命名规范.png)

------

### 变量的使用注意 

```JS
// 方法二: 不借助于第三个变量完成交换(了解, 笔试面试题)10  20
    console.log("交换前, num1, num2:", num1, num2)
    num1 = num1 + num2 // num1: 30, num2: 20
    num2 = num1 - num2 // num1: 30, num2: 10
    num1 = num1 - num2 // num1: 20, num2: 10
    console.log("交换后, num1, num2:", num1, num2)20  10

    
    // 练习四: 接受用户输入一个值, 并且使用一个变量来保存
    var inputInfo = prompt("请输入一个值吧!")
    console.log(inputInfo)
```

![变量的使用注意](C:\Users\admin\Desktop\系统笔记\img_js_基础\变量的使用注意.png)

------

### JavaScript的数据类型 

![JavaScript的数据类型](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript的数据类型.png)

------

### typeof操作符 

```js
()的作用
    // ()表示的是调用函数
    // alert()

    // ()将某一个表达式当做一个整体
```

![typeof操作符](C:\Users\admin\Desktop\系统笔记\img_js_基础\typeof操作符.png)

------

### Number类型（一） 

![Number类型（一）](C:\Users\admin\Desktop\系统笔记\img_js_基础\Number类型（一）.png)

------

### Number类型（二） 

![Number类型（二）](C:\Users\admin\Desktop\系统笔记\img_js_基础\Number类型（二）.png)

------

### String类型（一） 

![String类型（一）](C:\Users\admin\Desktop\系统笔记\img_js_基础\String类型（一）.png)

------

### 字符串中的转义字符 

![字符串中的转义字符](C:\Users\admin\Desktop\系统笔记\img_js_基础\字符串中的转义字符.png)

------

### 字符串的属性和方法 

![字符串的属性和方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\字符串的属性和方法.png)

------

### Boolean类型 

![Boolean类型](C:\Users\admin\Desktop\系统笔记\img_js_基础\Boolean类型.png)

------

### Undefined类型 

![Undefined类型](C:\Users\admin\Desktop\系统笔记\img_js_基础\Undefined类型.png)

------

### Object类型 

- 空对象为 true

![Object类型](C:\Users\admin\Desktop\系统笔记\img_js_基础\Object类型.png)

------

### Null类型 

- 赋值为 null ，在内存中是 0x0 ，什么都不会创建

![Null类型](C:\Users\admin\Desktop\系统笔记\img_js_基础\Null类型.png)

------

### 数据类型总结 

![数据类型总结](C:\Users\admin\Desktop\系统笔记\img_js_基础\数据类型总结.png)

------

### 数据类型的转换 

![数据类型的转换](C:\Users\admin\Desktop\系统笔记\img_js_基础\数据类型的转换.png)

------

### 字符串String的转换 

- 一个字符串 和 其他类型 进行 + 操作时，其他类型自动转为 字符串

![字符串String的转换](C:\Users\admin\Desktop\系统笔记\img_js_基础\字符串String的转换.png)

------

### 数字类型Number的转换 

- 非 + 操作，会转为 Number
- 字符串转数字，空格和数字转为数字，包含非数字转为NAN
- 空字符串为 0

![数字类型Number的转换](C:\Users\admin\Desktop\系统笔记\img_js_基础\数字类型Number的转换.png)

------

### 布尔类型Boolean的转换 

![布尔类型Boolean的转换](C:\Users\admin\Desktop\系统笔记\img_js_基础\布尔类型Boolean的转换.png)

------

## JavaScript基础运算符 

### 认识运算符 

![认识运算符](C:\Users\admin\Desktop\系统笔记\img_js_基础\认识运算符.png)

------

### 认识运算元 

![认识运算元](C:\Users\admin\Desktop\系统笔记\img_js_基础\认识运算元.png)

------

### JavaScript中的运算 

![JavaScript中的运算](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript中的运算.png)

------

### 取余 % 和 求幂 

![取余 % 和 求幂](C:\Users\admin\Desktop\系统笔记\img_js_基础\取余 % 和 求幂.png)

------

### 赋值运算符 

![赋值运算符](C:\Users\admin\Desktop\系统笔记\img_js_基础\赋值运算符.png)

------

### 原地修改（Modify-in-place） 

- +=   *=   先加再赋值，看 书写顺序：先 + 的 再 = 赋值的

![原地修改（Modify-in-place）](C:\Users\admin\Desktop\系统笔记\img_js_基础\原地修改（Modify-in-place）.png)

------

### 自增、自减 

![自增、自减](C:\Users\admin\Desktop\系统笔记\img_js_基础\自增、自减.png)

------

### ++和—的位置 

- 前 ++ 返回加了之后的，先加再用
- 后 ++ 返回加之前的，先用再加

![++和—的位置](C:\Users\admin\Desktop\系统笔记\img_js_基础\++和—的位置.png)

------

### 运算符的优先级 

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

![运算符的优先级](C:\Users\admin\Desktop\系统笔记\img_js_基础\运算符的优先级.png)

------

### 比较运算符 

![比较运算符](C:\Users\admin\Desktop\系统笔记\img_js_基础\比较运算符.png)

------

### === 和 == 的区别 

- ==运算符, 在类型不相同的情况下, 会将运算元先转成Number的值, 再进行比较(隐式转换)
-  obj 比较特殊: obj 在进行比较的时候, 会被转成一个原始类型进行比较
-  null 、 undefined 会被原样返回，不转换
-  null == undefined 为 true
- ===运算符, 在类型不相同的情况, 直接返回false 

![=== 和 == 的区别](C:\Users\admin\Desktop\系统笔记\img_js_基础\=== 和 == 的区别.png)

------

## JavaScript分支语句 

### 程序的执行顺序 

![程序的执行顺序](C:\Users\admin\Desktop\系统笔记\img_js_基础\程序的执行顺序.png)

------

### 代码块的理解 

```js
 // 一个代码块
    {
      var num1 = 10
      var num2 = 20
      var result = num1 + num2
    }

    // 一个对象
    var info = {
      name: "why",
      age: 18
    }
```

![代码块的理解](C:\Users\admin\Desktop\系统笔记\img_js_基础\代码块的理解.png)

------

### 什么是分支结构？ 

![什么是分支结构？](C:\Users\admin\Desktop\系统笔记\img_js_基础\什么是分支结构？.png)

------

### if分支语句 

![if分支语句](C:\Users\admin\Desktop\系统笔记\img_js_基础\if分支语句.png)

------

### 单分支结构 

![单分支结构](C:\Users\admin\Desktop\系统笔记\img_js_基础\单分支结构.png)

------

### if语句的细节补充 

`if (weight > 5) totalPrice -= 8 `

![if语句的细节补充](C:\Users\admin\Desktop\系统笔记\img_js_基础\if语句的细节补充.png)

------

### 多分支语句：if.. else.. 

![多分支语句：if.. else..](C:\Users\admin\Desktop\系统笔记\img_js_基础\多分支语句：if.. else...png)

------

### 多分支结构： if.. else if.. else.. 

![多分支结构： if.. else if.. else..](C:\Users\admin\Desktop\系统笔记\img_js_基础\多分支结构： if.. else if.. else...png)

------

### 三元运算符 

![三元运算符](C:\Users\admin\Desktop\系统笔记\img_js_基础\三元运算符.png)

------

### 认识逻辑运算符 

![认识逻辑运算符](C:\Users\admin\Desktop\系统笔记\img_js_基础\认识逻辑运算符.png)

------

### 逻辑或的本质 

- var message = info || obj || "我是默认值" 
  - info、obj为假，使用默认值
  - 为真，直接返回

- 在判断的时候转为 布尔，为true时，返回原值（转为 布尔 之前的值）

```js
	1.先将运算元转成Boolean类型
      2.对转成的boolean类型进行判断
        * 如果为true, 直接将结果(原始值)返回,后续的条件都不会进行判断
        * 如果为false, 进行第二个运算元的判断
        * 以此类推
      3.如果找到最后, 也没有找到, 那么返回最后一个运算元
```

- 脱离分支语句, 单独使用逻辑或 

```js
// 本质推导一: 之前的多条件是如何进行判断的
    var chineseScore = 95
    var mathScore = 99
    // chineseScore > 90为true, 那么后续的条件都不会进行判断
    if (chineseScore > 90 || mathScore > 90) {}

    // 本质推导二: 获取第一个有值的结果
    var info = "abc"
    var obj = {name: "why"}
    var message = info || obj || "我是默认值"
    console.log(message.length)
```

![逻辑或的本质](C:\Users\admin\Desktop\系统笔记\img_js_基础\逻辑或的本质.png)

------

### 逻辑与的本质 

- 前面为真，再调用后面的
  - `obj && obj.friend && obj.friend.eating && obj.friend.eating()`

```js
// 本质推导: 对一些对象中的方法进行有值判断
    var obj = {
      name: "why",
      friend: {
        name: "kobe",
        eating: function() {
          console.log("eat something")
        }
      }
    }

    // 调用eating函数
    // obj.friend.eating()
    obj && obj.friend && obj.friend.eating && obj.friend.eating()

	/** 也可以脱离条件判断来使用
      逻辑与的本质
       1.拿到第一个运算元, 将运算元转成Boolean类型
       2.对运算元的Boolean类型进行判断
         * 如果false, 返回运算元(原始值)
         * 如果true, 查找下一个继续来运算
         * 以此类推
       3.如果查找了所有的都为true, 那么返回最后一个运算元(原始值)
       /
```

![逻辑与的本质](C:\Users\admin\Desktop\系统笔记\img_js_基础\逻辑与的本质.png)

------

### !（非） 

![!（非）](C:\Users\admin\Desktop\系统笔记\img_js_基础\!（非）.png)

------

### switch语句 

- switch 判断是 全等 === 类型相同
- default 当 case都不满足的时候，执行
- break 跳出 switch，后面的代码不会执行了

![switch语句](C:\Users\admin\Desktop\系统笔记\img_js_基础\switch语句.png)

------

### switch语句的补充 

![switch语句的补充](C:\Users\admin\Desktop\系统笔记\img_js_基础\switch语句的补充.png)

------

## 认识循环 

![认识循环](C:\Users\admin\Desktop\系统笔记\img_js_基础\认识循环.png)

------

### while循环 

- 条件为真 - 执行代码 - 判断条件 - 条件为真 - 执行...
- 一直为真，一直执行，死循环

```js
// 计算0~99的偶数和
    var count = 0
    var totalCount = 0
    while (count < 100) {
      if (count % 2 === 0) { // 偶数 2468...
        totalCount += count
      }
      count++
    }

    console.log("所有的偶数和:", totalCount)

    // 算法优化
    var count = 0
    var totalCount = 0
    while (count < 100) {
      totalCount += count
      count += 2
    }
```

```js
// 死循环
    while (true) {
      console.log("Hello World")
      console.log("Hello Coderwhy")
    }
```

![while循环](C:\Users\admin\Desktop\系统笔记\img_js_基础\while循环.png)

------

### do..while循环 

- 先执行 - 再判断 - 再执行

![do..while循环](C:\Users\admin\Desktop\系统笔记\img_js_基础\do..while循环.png)

------

### for循环 

- 先执行 begin，判断条件 - 代码块 - step - 判断条件 - 代码块 - step ...
- 偶数和  i+=2
- i=0不是固定的，i也可以=2=3
- i++ 、i <  100 同理 

```js
for (var i = 1; i <= n; i++) {
        total += i
      }
```

```js
var totalCount = 0
    for (var i = 1; i < 100; i+=2) {
      totalCount += i
    }
```

![for循环](C:\Users\admin\Desktop\系统笔记\img_js_基础\for循环.png)

------

### for循环的嵌套 

- 外层不满足 - 停止
  - 外层每次执行，内层会执行完整的循环

```js
// for循环的嵌套: 循环中执行体, 里面又嵌套了循环
    for (var i = 0; i < 10; i++) {

      console.log("i开始执行:", i)

      for (var j = 0; j < 3; j++) {
        console.log("执行j循环")
      }

      console.log("i结束执行:", i)
    }
```

- 三角形

```js
for (var i = 0; i < 6; i++) {
      document.write("<div>")
      
      for (var m = 0; m < i+1; m++) {
        document.write("❤ ")
      }

      document.write("</div>")
    }
```

- 乘法表
  - i是列，i是0，i+1=1，i+2=2，X轴上的每列数据
  - m是行，m是0，m+1=1，m+2=2，Y轴上的每行数据
  - i是外，m是内，外是列，内是行

```js
document.write("<table>")

    for (var i = 0; i < 9; i++) {
      document.write("<tr>")
      
      for (var m = 0; m < i+1; m++) {
        var a = m + 1
        var b = i + 1
        var result = (m+1)*(i+1)
        document.write(`<td>${a}*${b}=${result}</td>`)
      }

      document.write("</tr>")
    }

    document.write("</table>")
```

### 循环控制 

- 清楚在哪里停止执行

```js
var names = ["abc", "cba", "nba", "mba", "bba", "aaa", "bbb"]

    // 循环遍历数组
    // break关键字的使用
    // 需求: 遇到nba时, 不再执行后续的迭代
    for (var i = 0; i < 4; i++) {
      console.log(names[i])
      if (names[i] === "nba") {
        break  // 在这里立刻结束，后面的不执行
      }
    }

    // continue关键字的使用: 立刻结束本次循环, 执行下一次循环(step)
    // 需求: 不打印nba
    for (var i = 0; i < 7; i++) {
      if (names[i] === "nba" || names[i] === "cba") {
        continue // 在这里立刻结束，下面的console不会执行
      }
      console.log(names[i])
    }
```

![循环控制](C:\Users\admin\Desktop\系统笔记\img_js_基础\循环控制.png)

```js
// 1.随机生成一个0~99的数字 -- 猜数游戏
    var randomNum = Math.floor(Math.random() * 100)
    alert(randomNum)

    // 2.玩家有7次机会猜测数字
    var count = 3
    for (var i = 0; i < count; i++) {
      // 获取用户的输入
      var inputNum = Number(prompt("请输入您猜测的数字:"))

      // 和randomNum进行比较
      if (inputNum === randomNum) {
        alert("恭喜您, 猜对了")
        break
      } else if (inputNum > randomNum) {
        alert("您猜大了")
      } else {
        alert("您猜小了")
      }

      if (i === count - 1) {
        alert("您的次数已经用完了")
      }
    }
```

------

### 循环的总结 

- 不确定循环次数 - while
- 确定 - for

![循环的总结](C:\Users\admin\Desktop\系统笔记\img_js_基础\循环的总结.png)

------

## JavaScript函数 

### 程序中的foo、bar、baz 

![程序中的foo、bar、baz](C:\Users\admin\Desktop\系统笔记\img_js_基础\程序中的foo、bar、baz.png)

------

### 认识函数 

![认识函数](C:\Users\admin\Desktop\系统笔记\img_js_基础\认识函数.png)

------

### 函数使用的步骤 

![函数使用的步骤](C:\Users\admin\Desktop\系统笔记\img_js_基础\函数使用的步骤.png)

------

### 声明和调用函数 

![声明和调用函数](C:\Users\admin\Desktop\系统笔记\img_js_基础\声明和调用函数.png)

------

### 函数的参数 

![函数的参数](C:\Users\admin\Desktop\系统笔记\img_js_基础\函数的参数.png)

------

### 函数的返回值 

```js
// var result = prompt("请输入一个数字:")
    // 1.理解函数的返回值
    // function sayHello(name) {
    //   console.log(`Hi ${name}`)
    // }

    // var foo = sayHello("Kobe")
    // console.log("foo:", foo)

    // 2.返回值的注意事项
    // 注意事项一: 所有的函数, 如果没有写返回值, 那么默认返回undefined
    // function foo() {
    //   console.log("foo函数被执行~")
    // }

    // var result = foo()
    // console.log("foo的返回值:", result)

    // 注意事项二: 我们也可以明确的写上return
    // 写上return关键字, 但是后面什么内容都没有的时候, 也是返回undefined
    // function bar() {
    //   console.log("bar函数被执行~")
    //   return
    // }
    // var result = bar()
    // console.log("bar的返回值:", result)

    // 注意事项三: 如果在函数执行到return关键字时, 函数会立即停止执行, 退出函数
    // function baz() {
    //   console.log("Hello Baz")
    //   return
    //   console.log("Hello World")
    //   console.log("Hello Why")
    // }

    // baz()


    // 函数的具体返回值
    function sum(num1, num2) {
      var result = num1 + num2
      return result
    }

    var total = sum(20, 30)
    console.log("total:", total)
```

![函数的返回值](C:\Users\admin\Desktop\系统笔记\img_js_基础\函数的返回值.png)

------

### 数字格式化

```js
// 从服务器拿到很多的数字
    var playCount1 = 13687 // 13687
    var playCount2 = 5433322 // 543万
    var playCount3 = 8766633333 // 87亿


    // 封装一个工具函数: 对数字进行格式化
    // 10_0000_0000就是1000000000语法糖
    // 语法糖的概念: 一种简写或者特殊的写法, 这种写法相对于原有的写法更加的方便或者阅读性更强
    // 相比于原来的写法, 有一点点的甜头, 称之为语法糖
    function formatCount(count) {
      var result = 0
      if (count >= 10_0000_0000) { // 超过10_0000_0000值进行转换
        result = Math.floor(count / 1_0000_0000) + "亿"
      } else if (count >= 10_0000) {
        result = Math.floor(count / 1_0000) + "万"
      } else {
        result = count
      }

      return result
    }

    console.log(formatCount(playCount1))
    console.log(formatCount(playCount2))
    console.log(formatCount(playCount3))
```

### arguments参数 

```js
// 1.arguments的认识
    function foo(name, age) {
      console.log("传入的参数", name, age)

      // 在函数中都存在一个变量, 叫arguments
      console.log(arguments)
      // arguments是一个对象
      console.log(typeof arguments)
      // 对象内部包含了所有传入的参数
      // console.log(arguments[0])
      // console.log(arguments[1])
      // console.log(arguments[2])
      // console.log(arguments[3])

      // 对arguments来进行遍历
      for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
      }
    }

    foo("why", 18, 1.88, "广州市")


    // 2.arguments的案例
    function sum() {
      var total = 0
      for (var i = 0; i < arguments.length; i++) {
        var num = arguments[i]
        total += num
      }
      return total
    }

    console.log(sum(10, 20))
    console.log(sum(10, 20, 30))
    console.log(sum(10, 20, 30, 40))
```

![arguments参数](C:\Users\admin\Desktop\系统笔记\img_js_基础\arguments参数.png)

------

### 函数中调用函数 

![函数中调用函数](C:\Users\admin\Desktop\系统笔记\img_js_基础\函数中调用函数.png)

------

### 函数的递归 

![函数的递归](C:\Users\admin\Desktop\系统笔记\img_js_基础\函数的递归.png)

------

### 递归的实现思路 

- 递归的性能是比循环低的，但代码比循环简洁

```js
// 需求: 封装一个函数, 函数可以实现x的n次方法
    function pow1(x, n) {
      return x ** n
    }

    // console.log(pow1(2, 3))
    // console.log(pow1(3, 3))

    // console.log(Math.pow(2, 3))
    // console.log(Math.pow(3, 3))

    // 一. for循环实现方式 
    // x² = x * x
    // x³ = x * x * x
    function pow2(x, n) {
      var result = 1
      for (var i = 0; i < n; i++) {
        result *= x
      }
      return result
    }

    console.log(pow2(2, 3))
    console.log(pow2(3, 3))

    // 二. 递归实现方式(必须有一个结束条件)
    // 缺点: 性能是比较低(占用过多的栈内存)
    // 优点: 写出来的代码非常简洁
    function pow(x, n) {
      return x * pow(x, n-1)
    }

    console.log(pow(2, 3))
    console.log(pow(3, 3))
```

### 斐波那契数列

```js
// 什么是斐波那契数列，后面是前面2个的和
    // 数列: 1 1 2 3 5 8 13 21 34 55  ... x
    // 位置: 1 2 3 4 5 6 7  8  9  10  ... n

    // 1.斐波那契的递归实现
    function fibonacci(n) {
      if (n === 1 || n === 2) return 1
      return fibonacci(n-1) + fibonacci(n-2)
    }


    // 2.斐波那契的for循环实现
    function fibonacci(n) {
      // 特殊的情况(前两个数字)
      if (n === 1 || n === 2) return 1

      // for循环的实现
      var n1 = 1
      var n2 = 1
      var result = 0
      for (var i = 3; i <= n; i++) {
        result = n1 + n2
        n1 = n2
        n2 = result
      }
      return result
    }

    console.log(fibonacci(5))
    console.log(fibonacci(10))
```

![递归的实现思路 ](C:\Users\admin\Desktop\系统笔记\img_js_基础\递归的实现思路 .png)

------

### 函数作用域

```js
    // 1.作用域的理解:message在哪一个范围内可以被使用, 称之为message的作用域(scope)
    // 全局变量: 全局作用域
    var message = "Hello World"
    if (true) {
      console.log(message)
    }
    function foo() {
      console.log("在foo中访问", message)
    }
    foo()

    // 2.var定义的变量是没有块级作用域
    {
      var count = 100
      console.log("在代码块中访问count:", count)
    }
    console.log("在代码块外面访问count:", count)
    // for循环的代码块也是没有自己的作用域
    for (var i = 0; i < 3; i++) {
      var foo = "foo"
    }
    console.log("for循环外面访问foo:", foo)
    console.log("for循环外面访问i:", i) // 3

    // 在函数内部定义的变量外面是访问不到的
    function test() {
      var bar = "bar"
    }

    test()
    // console.log("test函数外面访问bar:", bar)

    // 函数有自己的作用域: 函数内部定义的变量只有函数内部能访问到
    function sayHello() {
      var nickname = "kobe"
      console.log("sayHello函数的内部:", nickname)
      
      function hi() {
        console.log("hi function~")
        console.log("在hi函数中访问nickname:", nickname)
      }
      hi()
    }
    sayHello()
    // console.log("sayHello外面访问nickname:", nickname)
```

### 局部变量和外部变量 

- 函数内使用 var 声明的是函数的局部变量
- 函数内 没有使用 var 声明的是 全局变量

```js
// 1.全局变量(global variable): 在全局(script元素中)定义一个变量, 那么这个变量是可以在定义之后的任何范围内被访问到的, 那么这个变量就称之为是一个全局变量.
    var message = "Hello World"
    
    // 在函数中访问message
    function sayHello() {
      // 外部变量(outer variable): 在函数内部去访问函数之外的变量, 访问的变量称之为外部变量
      console.log("sayHello中访问message:", message)

      // 2.局部变量(local variable): 在函数内部定义的变量, 只有在函数内部才能进行访问, 称之为局部变量
      var nickname = "coderwhy"
      
      // 3.没有使用 var 定义，直接写变量名，是全局变量
      nickname = "coderwhy"

      function hi() {
        console.log("hi function~")
        // message也是一个外部变量
        console.log("hi中访问message:", message)
        // nickname也是一个外部变量
        console.log("hi中访问nickname:", nickname)
      }
      hi()
    }

    sayHello()
```

![局部变量和外部变量](C:\Users\admin\Desktop\系统笔记\img_js_基础\局部变量和外部变量.png)

------

### 函数表达式（Function Expressions） 

![函数表达式（Function Expressions）](C:\Users\admin\Desktop\系统笔记\img_js_基础\函数表达式（Function Expressions）.png)

------

### 函数声明 vs 函数表达式 

- 函数表达式是在代码执行到时，才被创建，才能被使用
- 函数声明是在被定义之前，就可以被调用

![函数声明 vs 函数表达式](C:\Users\admin\Desktop\系统笔记\img_js_基础\函数声明 vs 函数表达式.png)

------

### JavaScript头等函数 

- 函数作为一等(头等)公民
  - 函数可以被赋值给变量
  - 让函数在变量之间来回传递
  - 函数可以另外一个函数的参数
  - 函数作为另外一个函数的返回值
  - 将函数存储在另外一个数据结构中
- 函数式编程
  - 函数可以作为头等公民的编程方式, 就是函数式编程方式(范式)

```js

    // 函数作为一等(头等)公民
    // 1.函数可以被赋值给变量(函数表达式写法)
    var foo1 = function() {
      console.log("foo1函数被执行~")
    }
    foo1()

    // 2.让函数在变量之间来回传递
    var foo2 = foo1
    foo2()


    // 3.函数可以另外一个函数的参数
    function bar(fn) {
      console.log("fn:", fn)
      fn()
    }
    bar(foo1)


    // 4.函数作为另外一个函数的返回值
    function sayHello() {
      function hi() {
        console.log("hi kobe")
      }
      return hi
    }

    var fn = sayHello()
    fn()


    // 5.将函数存储在另外一个数据结构中
    var obj = {
      name: "why",
      eating: function() {
        console.log("eating")
      }
    }
    obj.eating()

    // 函数式编程: 使用函数来作为头等公民使用函数, 这种编程方式(范式).
    // JavaScript支持函数式编程.		
```

![JavaScript头等函数](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript头等函数.png)

------

### 回调函数（Callback Function） 

- 将一个函数作为另外一个函数的参数传入到另外一个函数中；
- 在另外一个函数中，对于传入的函数进行调用的过程，就叫做函数的回调

```js
	// 1.函数回调的概念理解
    function foo(fn) {
      // 通过fn去调用bar函数的过程, 称之为函数的回调
      fn()
    }
    function bar() {
      console.log("bar函数被执行了~")
    }
    foo(bar)
    
    // 2.函数回调
    function request(url, callback) {
      var list = ["javascript", "javascript学习", "JavaScript高级编程"]
      callback(list)
    }

    // 传入的函数是没有名字, 匿名函数
    request("url", function(res) {
      console.log(res)
    })
```

![回调函数（Callback Function）](C:\Users\admin\Desktop\系统笔记\img_js_基础\回调函数（Callback Function）.png)

------

### 高阶函数

- foo可以接受另外一个函数作为参数，那么foo就称之为是一个高阶函数；
- 如果一个函数有返回另外一个函数，那么这个函数也叫做高阶函数；

### 立即执行函数 

```js
// 立即执行函数的参数和返回值
    var result = (function(name) {
      console.log("函数立刻被执行~", name)
      return "Hello World"
    })("why")
    console.log(result)

```

- 作用1
  - 防止全局变量的命名冲突 ，避免变量污染(也可以单独给变量加统一前缀)（或ES6使用esmodule避免）
  - 在立即执行函数中定义的变量是有自己的作用域的 

```js
// esmodule -> import/export -> es5中立即执行函数
var xmModule = (function() {
  // 自执行函数，独立作用域，避免变量污染
  // 声明单独变量及需要导出的属性
  var xmModule = {}
  var message = "Hello XiaoMing"
  xmModule.message = message
  // 导出
  return xmModule
})()

```

- 作用2
  - 独立作用域，保存了私有的变量
  - 看作用域，作用域内可以拿到每个i
  - 作用域内拿不到就去上层作用域，拿到的是循环结束的i

```js
// let
var btnEls = document.querySelectorAll(".btn")
	// let 独立块级作用域
    for (let i = 0; i < btnEls.length; i++) {
      var btn = btnEls[i];
      btn.onclick = function() {
        console.log(`按钮${i+1}发生了点击`)
      }
    }

    // var 使用立即执行函数
    var btnEls = document.querySelectorAll(".btn") // 4个
    for (var i = 0; i < btnEls.length; i++) {
      var btn = btnEls[i];
       // 这里接收了循环的所有i
      (function(m) {
        btn.onclick = function() {
            //取得是m，就是每次传递的i，这个i是和btn顺序对应的
          console.log(`按钮${m+1}发生了点击`)
        }
      })(i) // 循环每次都把i传进去了
    }
```

![闭包](C:\Users\admin\Desktop\系统笔记\img_js_基础\闭包.png)

![立即执行函数](C:\Users\admin\Desktop\系统笔记\img_js_基础\立即执行函数.png)

------

### 立即执行函数的其他写法 

- +加号，是一个表达式，让...变成表达式

![立即执行函数的其他写法](C:\Users\admin\Desktop\系统笔记\img_js_基础\立即执行函数的其他写法.png)

------

## 代码风格 

- 变量两边 加空格
- 操作符两边 加空格
- 不同逻辑代码块之间加 空行
- else 不需要另起一行，且两边 加空格

```js
	// 1.foo和()之间不需要有空格
    // 2.多参数,后面加上一个空格
    // 3.()和{之间有一个空格
    // 4.{和其他函数定义在同一行中
    function foo(m, n) {

    }

    foo(20, 30)

    if (true) {
    } else {

    }

    for (var i = 0; i < 10; i++) {

    }

    // 模板字符串(可以换行)
    var message = `
       哈哈哈哈哈${100}
    `
```

![代码风格](C:\Users\admin\Desktop\系统笔记\img_js_基础\代码风格.png)

------

### Chrome的debug调试技巧 

- 可以查看代码的完整执行以及每个变量如何变化

- 浏览器打断点
- 代码打断点

```js
// debugger标识符就是在代码中打断点方式
    debugger
```

- watch 监听 变量
- breakpoints 所有断点
- scope 作用域以及对应的变量
  - local 自身作用域
  - closure 上层作用域
  - global 全局作用域
- call stack 函数调用栈（函数是如何调用的）
- 按钮
  - 第一个右向三角，恢复代码执行，只恢复一个断点，再点恢复
  - 第二个半圆，跳过当前行代码，执行下一行代码，一行一行执行
  - 第三个下，进入当前行所包含的函数内部，点击半圆，查看函数是如何一步步执行的，包括查看异步函数
  - 第四个上，直接跳过当前查看的函数
  - 第五个右，同第三个
    - 区别第三个可以查看异步函数是如何执行的
    - 第五个，会跳过异步函数

![Chrome的debug调试技巧](C:\Users\admin\Desktop\系统笔记\img_js_基础\Chrome的debug调试技巧.png)

------

## JavaScript的面向对象

### 认识对象类型

```js
 /*
      两个术语: 函数/方法
         函数(function): 如果在JavaScript代码中通过function默认定义一个结构, 称之为是函数.
         方法(method): 如果将一个函数放到对象中, 作为对象的一个属性, 那么将这个函数称之为方法.
    */
    function foo() { // 函数
    }

    // key: 字符串类型, 但是在定义对象的属性名时, 大部分情况下引号都是可以省略的
    var person = {
      // key: value
      name: "why",
      age: 18,
      height: 1.88,
      "my friend": {
        name: "kobe",
        age: 30
      },
      run: function() { // 方法
        console.log("running")
      }
    }
```

![认识对象类型](C:\Users\admin\Desktop\系统笔记\img_js_基础\认识对象类型.png)

------

### 创建对象和使用对象

- delete关键字(删除操作符) `delete info.height `

```js
	// 1.对象字面量 大括号
    var obj1 = {
      name: "why"
    }

    // 2.new Object()
    // Object构造函数
    var obj2 = new Object()
    obj2.name = "kobe"

    // // 3.new 自定义类()
    function Person() {}
    var obj3 = new Person()
```

![创建对象和使用对象](C:\Users\admin\Desktop\系统笔记\img_js_基础\创建对象和使用对象.png)

------

### 对象的常见操作

![对象的常见操作](C:\Users\admin\Desktop\系统笔记\img_js_基础\对象的常见操作.png)

------

### 方括号和引用的使用

![方括号和引用的使用](C:\Users\admin\Desktop\系统笔记\img_js_基础\方括号和引用的使用.png)

------

### 对象的遍历

- Object.keys() 拿到所有key
- for in 拿到 key

```js
	// 对象不支持:  for..of..: 默认是不能遍历对象
    for (var foo of info) {
    }
	// 数组支持
```

![对象的遍历](C:\Users\admin\Desktop\系统笔记\img_js_基础\对象的遍历.png)

------

### 栈内存和堆内存

- 栈内存 stack
  - 简单类型
- 堆内存 heap
  - 复杂类型
- 对象会在 堆内存 中保存，在栈内存中引用堆内存中保存的地址
  - 变量名放在 栈内存中
  - 变量名引用的地址是在堆内存中保存对象的地址

![栈内存和堆内存](C:\Users\admin\Desktop\系统笔记\img_js_基础\栈内存和堆内存.png)

------

### 值类型和引用类型

![值类型和引用类型](C:\Users\admin\Desktop\系统笔记\img_js_基础\值类型和引用类型.png)

- friend 指向的是0xaaa，不是0x100

![对象的引用赋值内存图](C:\Users\admin\Desktop\系统笔记\img_js_基础\对象的引用赋值内存图.png)

- num传给函数的a，栈中就创建了a=num=100,a=200,num还是100，函数执行完创建的a会自动被销毁，闭包引用不会销毁

```js
function foo(a) {
      a = 200
    }
    var num = 100
    foo(num)
    console.log(num) // 100
```

- a 又等于 一个 对象，就是重复赋值了一个新对象的引用地址，a的改变对obj没有影响
  - 0x100 变成 0xaaa

![函数传递-引用传递-创建新对象](C:\Users\admin\Desktop\系统笔记\img_js_基础\函数传递-引用传递-创建新对象.png)

- 修改引用值

![函数传递-引用传递-修改引用属性](C:\Users\admin\Desktop\系统笔记\img_js_基础\函数传递-引用传递-修改引用属性.png)

------

### 为什么需要this？

- this 指向

```js
  <script> // 这里是一个作用域

    var info = { // 这里是一个对象，是数据结构，不是一个作用域
      name: "why",
      age: 18,
      running: function() { // 这里是一个作用域
        console.log("running~", this.name) // 这个this指向的是，调用这个方法的对象，是info调用了，this就是info
      },
      eating: function() {
        console.log("eating~", this.name)
      },
      studying: function() {
        console.log("studying~", this.name)
      }
    }

    info.running()
    info.eating()
    info.studying()

  </script>
```

![为什么需要this？](C:\Users\admin\Desktop\系统笔记\img_js_基础\为什么需要this？.png)

------

### this指向什么？

- 看被谁调用
  - 默认就是函数名+小括号 调用

```js
// 函数中是有一个this的变量, this变量在大多数情况下会指向一个对象
    // arguments保存的是传入的所有参数

    // 情况一: 如果普通的函数被默认调用, 那么this指向的就是window
    function foo(name, age) {
      console.log(arguments)
      console.log(this)
    }
    foo("abc", 123) // win

    function sayHello(name) {
      console.log(this)
    }
    sayHello() // win


    // 情况二: 如果函数它是被某一个对象来引用并且调用它, 那么this会指向这个对象(调用的那个调用)
    var obj = {
      name: "why",
      running: function() {
        console.log(this)
        // console.log(obj)
        // console.log(this === obj) true
      }
    }
    obj.running()  // obj

    // 考验题目
    // 1.题目一:
    var fn = obj.running  // fn是obj对象的函数
    fn() // window，因为在这里fn函数是被默认调用的，不是被其他人调用的，看怎么调用的

    // 2.题目二:
    function bar() {
      console.log(this)
    }
    var obj = {
      name: "why",
      bar: bar
    }
    obj.bar() // obj对象，这里是被obj调用的
```

![this指向什么？](C:\Users\admin\Desktop\系统笔记\img_js_基础\this指向什么？.png)

------

### 类和对象的思维方式

![类和对象的思维方式](C:\Users\admin\Desktop\系统笔记\img_js_基础\类和对象的思维方式.png)

------

### 创建对象的方案 – 工厂函数

![创建对象的方案 – 工厂函数](C:\Users\admin\Desktop\系统笔记\img_js_基础\创建对象的方案 – 工厂函数.png)

------

### 认识构造函数

- 构造函数上(类上面)添加的函数, 称之为类 
- 函数也是对象

![认识构造函数](C:\Users\admin\Desktop\系统笔记\img_js_基础\认识构造函数.png)

------

### 类和对象的关系

- 如果有大量重复对象
- 先创建 构造函数或者类（编写公共的属性、方法）
- 再new 类，生成不同的且有一部分属性是相同的对象
- 这样的编程方式就是，面向对象编程

![类和对象的关系](C:\Users\admin\Desktop\系统笔记\img_js_基础\类和对象的关系.png)

------

### JavaScript中的类（ES5）

![JavaScript中的类（ES5）](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript中的类（ES5）.png)

------

### 创建对象的方案 – 构造函数（类）

![创建对象的方案 – 构造函数（类）](C:\Users\admin\Desktop\系统笔记\img_js_基础\创建对象的方案 – 构造函数（类）.png)

------

### 全局对象

```js
 	// 浏览器中存在一个全局对象object -> window
    // 作用一: 查找变量时, 最终会找到window头上
    // 作用二: 将一些浏览器全局提供给我们的变量/函数/对象, 放在window对象上面
    // 作用三(了解): 使用var定义的变量会被默认添加到window上面
    console.log(window)

    // 使用var定义变量
    var message = "Hello World"

    function foo() {
      // 自己的作用域
      // abc()
      // alert("Hello World")
      console.log(window.console === console)

      // 创建一个对象
      // var obj = new Object()
      console.log(window.Object === Object)

      // DOM
      console.log(document)

      // window.message
      console.log(window.message)
    }
    foo()
```

## JavaScript常见内置类 

### 原始类型的包装类 

![原始类型的包装类](C:\Users\admin\Desktop\系统笔记\img_js_基础\原始类型的包装类.png)

------

### 包装类型的使用过程 

- 在调用原始类型的属性或者方法时, 内部的操作 name = new String(name) 

![包装类型的使用过程](C:\Users\admin\Desktop\系统笔记\img_js_基础\包装类型的使用过程.png)

------

### Number类的补充 

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number
- toString 传入进制，默认10进制，按照10进制转换成字符串
- toFixed，返回 字符串 类型

![Number类的补充](C:\Users\admin\Desktop\系统笔记\img_js_基础\Number类的补充.png)

------

### Math对象 

- [5~50)的随机数

```js
    // random: 随机生成 [0, 1)
    console.log(Math.random())
    // 需求: [5~50)的随机数
    // [a, b)
    // y = a
    // x = b - a
    // Math.floor(Math.random() * x) + y
    for (var i = 0; i < 1000; i++) {
      var randomNum = Math.floor(Math.random() * 45) + 5
      console.log(randomNum)
    }
```

```js
    console.log(Number.parseInt(num1))
    console.log(Number.parseFloat(num1))

    // window对象上面
    console.log(parseInt(num1))
    console.log(parseFloat(num1))
```

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math

![Math对象](C:\Users\admin\Desktop\系统笔记\img_js_基础\Math对象.png)

------

### String类的补充（一）- 基本使用 

- 找不到
  - chatAt 返回空
  - [] 返回 undefined
- 遍历

```js
    // for..of的遍历 -> 迭代器
    // 目前可迭代对象: 字符串/数组
    // 对象是不支持for..of
    // String对象内部是将字符串变成了一个可迭代对象
    for (var char of message) {
      console.log(char)
    }
```

![String类的补充（一）- 基本使用](C:\Users\admin\Desktop\系统笔记\img_js_基础\String类的补充（一）- 基本使用.png)

------

### String类的补充（二） - 修改字符串 

- 通过[]修改会失败

![String类的补充（二） - 修改字符串](C:\Users\admin\Desktop\系统笔记\img_js_基础\String类的补充（二） - 修改字符串.png)

------

### String类的补充（三） - 查找字符串 

![String类的补充（三） - 查找字符串](C:\Users\admin\Desktop\系统笔记\img_js_基础\String类的补充（三） - 查找字符串.png)

------

### String类的补充（四）- 开头和结尾 

![String类的补充（四）- 开头和结尾](C:\Users\admin\Desktop\系统笔记\img_js_基础\String类的补充（四）- 开头和结尾.png)

------

### String类的补充（五） - 获取子字符串 

- slice 传一个参数，从第几位开始截取到最后一位

![String类的补充（五） - 获取子字符串](C:\Users\admin\Desktop\系统笔记\img_js_基础\String类的补充（五） - 获取子字符串.png)

------

### String类的补充（六） - 其他方法 

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String

```js
    // concat方法: 链式调用
    var newString2 = str1.concat(str2).concat(str3)
    var newString3 = str1.concat(str2, str3, "abc", "cba")
```

```js
    // split字符串转数组,以-作为分隔符，并去除-
    var items = message.split("-")
    // join 数组转字符串，以*作为分隔符，并添加*
    var newMessage = items.join("*")
```

![String类的补充（六） - 其他方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\String类的补充（六） - 其他方法.png)

------

### 认识数组（Array） 

![认识数组（Array）](C:\Users\admin\Desktop\系统笔记\img_js_基础\认识数组（Array）.png)

------

### 数组的创建方式 

```js
    // 传入了一个数字, 它默认会当成我们要创建一个对应长度的数组
    var arr3 = new Array(5) // 无内容，只有长度
```

![数组的创建方式](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组的创建方式.png)

------

### 数组的基本操作 

- [] 不支持负数
- at() 负数时尾部开始访问

![数组的基本操作](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组的基本操作.png)

------

### 数组的添加、删除方法（一） 

- 尾部添加支持多个
- 尾部删除没有参数，直接写pop()，只能删除最后一个
- 头部类似
- 尾部操作，其他不需要移动
- 头部操作，其他的需要移动

![数组的添加、删除方法（一）](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组的添加、删除方法（一）.png)

------

### 数组的添加、删除方法（二） 

- 在第一位的 前面 添加 

`    names.splice(1, 0, "hello", "kobe") `

![数组的添加、删除方法（二）](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组的添加、删除方法（二）.png)

------

### length属性 

![length属性](C:\Users\admin\Desktop\系统笔记\img_js_基础\length属性.png)

------

### 数组的遍历 

- of 拿不到索引

![数组的遍历](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组的遍历.png)

------

### 数组方法 – slice、cancat、 join 

- slice 不会修改原数组
- splice 会改变原数组

![数组方法 – slice、cancat、 join](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组方法 – slice、cancat、 join.png)

------

### 数组方法 – 查找元素 

```js
var stu = null
    for (var i = 0; i < students.length; i++) {
      if (students[i].id === 101) {
        stu = students[i]
        break // break 阻止 for 循环继续往下执行，在id=101时，不执行后面的循环
      }
    }
```

- find 返回查找到的结果

![数组方法 – 查找元素](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组方法 – 查找元素.png)

------

### 手动实现forEach、find 函数

- forEach

```js
    // 1.hyForEach版本一(大部分同学掌握)
    function hyForEach(fn) {
      for (var i = 0; i < names.length; i++) {
        fn(names[i], i, names) // 传递参数
      }
    }

    hyForEach(function(item, index, names) {
      console.log("-------", item, index, names) // 接收的参数
    })

    // 2.hyForEach版本二
    function hyForEach(fn, arr) { // 传入
      for (var i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr)
      }
    }

    hyForEach(function(item, index, names) {
      console.log("-------", item, index, names)
    }, names)

    hyForEach(function(item, index, names) {
      console.log("-------", item, index, names)
    }, [123, 321, 111, 222])


    // 3.hyForEach版本三
    names.hyForEach = function(fn) {
      for (var i = 0; i < this.length; i++) { // 由names调用，this指向names
        fn(this[i], i, this)
      }
    }

    names.hyForEach(function(item, index, names) {
      console.log("-------", item, index, names)
    })
    

    // 4.hyForEach版本四(了解)
    Array.prototype.hyForEach = function(fn, thisArgs) {
      for (var i = 0; i < this.length; i++) {
        fn(this[i], i, this) // item, index, names
      }
    }

    names.hyForEach(function(item, index, names) {
      console.log("------", item, index, names)
    })
```

- find
  - 找到后或者return true ，后面的不再执行查找
  - 找不到 undefined

```js
    var findStu = students.find(function(item) {
      return item.id === 101
    })
    // 实现
    Array.prototype.hyFind = function(fn) {
      for (var i = 0; i < this.length; i++) {
        var isFlag = fn(this[i], i, this) // item, index, names
        if (isFlag) { // 找到后，停止循环
          return this[i] // return 终止整个函数、for循环的执行
        }
      }
    }
    var findStu = students.hyFind(function(item, index, arr) {
      console.log(item)
      return item.id === 101
    })
```

### 数组的排序sort/reverse

- a - b
  - 谁小谁在前
  - 升序
- b - a
  - 反转
  - 降序
- 复杂类型的排序 

```js
    var students = [
      { id: 100, name: "why", age: 18 },
      { id: 101, name: "kobe", age: 30 },
      { id: 102, name: "james", age: 25 },
      { id: 103, name: "curry", age: 22 }
    ]

    students.sort(function(item1, item2) {
      return item1.age - item2.age
    })
```

![数组的排序sort-reverse](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组的排序sort-reverse.png)

------

### 数组的其他高阶方法 

```js
    // 1.forEach函数
    var names = ["abc", "cba", "nba", "mba"]

    // forEach 接收2个参数，第二个参数是要绑定的this，this指向第二个参数  { name: "why" }
    names.forEach(function(item) {
      console.log(item, this)
    }, { name: "why" })

    // forEach 接收1个参数，this指向win，因为内部的实现是，默认调用的，没有被谁调用
    names.forEach(function(item,index,arr) {
      console.log(item, this,index,arr) // 每项、下标、整个数组
    })

    // 内部实现

    Array.prototype.hyForEach = function(fn, thisArgs) {
      for (var i = 0; i < this.length; i++) {
        fn(this[i], i, this) // item, index, names
        // 这个 this 执行 names，这个this（就是这个 function）就是 hyForEach 是被 names 调用的
        console.log(this) // names
      }
    }

    names.hyForEach(function(item, index, names) {
      // this 指向win，因为这个 function 只是一个参数传入变成 fn ，fn是被谁调用的？没有人调用，默认执行的
      console.log("------", item, index, names,this) // win
    })
```

```js
    // 2.filter函数: 过滤
    var nums = [11, 20, 55, 100, 88, 32]
    // 2.1. for循环实现
    var newNums = []
    for (var item of nums) {
      if (item % 2 === 0) {
        newNums.push(item)
      }
    }
    // 2.2. filter实现
    var newNums = nums.filter(function(item) {
      return item % 2 === 0 // 返回一个新数组
    })
```

#### map 映射

- 数组的每项，按照统一规则改变，原始的第一个和改变后的第一个有对应关系，剩余也是
- 这种对应关系就是映射

```js
    // 3.map函数: 映射
    var nums = [11, 20, 55, 100, 88, 32]
    var newNums = nums.map(function(item) {
      return item * item
    })
    console.log(newNums)
```

![image-20220713212510810](C:\Users\admin\Desktop\系统笔记\img_js_基础\image-20220713212510810.png)

#### reduce

```js
    // function的第一个参数 preValue 是上一次计算后的值（是function return 返回的值），初始没有，所以 reduce 的第二个参数就是 preValue 的初始值
    // function的第二个参数，是每一项
    // 最后一次执行，返回值 会作为reduce的返回值

    // 第一次执行: preValue->0 item->11
    // 第二次执行: preValue->11 item->20
    // 第三次执行: preValue->31 item->55
    // 第四次执行: preValue->86 item->100
    // 第五次执行: preValue->186 item->88
    // 第六次执行: preValue->274 item->32
    // 最后一次执行的时候 preValue + item, 它会作为reduce的返回值

    // reduce 的第二个参数：initialValue: 初始化值, 第一次执行的时候, 对应的preValue
    // 如果initialValue没有传呢? 会把第一个item（11）作为 初始 preValue，而参数item 是第二个item（20）
    var nums = [11, 20, 55, 100, 88, 32]
    var result = nums.reduce(function(preValue, item) {
      console.log(`preValue:${preValue} item:${item}`)
      return preValue + item
    }, 0)
    console.log(result)
```

```js
// 价格和数量，求和
    var products = [
      { name: "鼠标", price: 88, count: 3 },
      { name: "键盘", price: 200, count: 2 },
      { name: "耳机", price: 9.9, count: 10 },
    ]
    var totalPrice = products.reduce(function(preValue, item) {
      return preValue + item.price * item.count
    }, 0)
    console.log(totalPrice)
```

```js
    var nums = [11, 20, 55, 100, 88, 32]

    // 过滤所有的偶数, 映射所有偶数的平方, 并且计算他们的和
    var total = nums.filter(function(item) {
      return item % 2 === 0
    }).map(function(item) {
      return item * item
    }).reduce(function(preValue, item) {
      return preValue + item
    }, 0)
    console.log(total)

    var total = nums.filter(item => item % 2 === 0)
                    .map(item => item * item)
                    .reduce((preValue, item) => preValue + item, 0)
    console.log(total)
```

![数组的其他高阶方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组的其他高阶方法.png)

------

### 时间的表示方式 

![时间的表示方式](C:\Users\admin\Desktop\系统笔记\img_js_基础\时间的表示方式.png)

------

### 时区对比图 

- GMT 的基础上，加减时间（小时）

![时区对比图](C:\Users\admin\Desktop\系统笔记\img_js_基础\时区对比图.png)

------

### 创建Date对象 

```js
    // 1.没有传入任何的参数, 获取到当前时间
    var date1 = new Date()
    console.log(date1)

    // 2.传入参数: 时间字符串。得到固定时间
    var date2 = new Date("2022-08-08")
    console.log(date2)

    // 3.传入具体的年月日时分秒毫秒。得到固定时间
    var date3 = new Date(2033, 10, 10, 09, 08, 07, 333)
    console.log(date3)

    // 4.传入一个Unix时间戳，得到 1970年1月1日00：00：00 后 10004343433 毫秒的时间
    // 1s -> 1000ms
    var date4 = new Date(10004343433)
    console.log(date4)
```

![创建Date对象](C:\Users\admin\Desktop\系统笔记\img_js_基础\创建Date对象.png)

------

### dateString时间的表示方式 

#### 初步转换标准时间

```js
    var date = new Date()

    console.log(date)
    console.log(date.toDateString())
```

![dateString时间的表示方式](C:\Users\admin\Desktop\系统笔记\img_js_基础\dateString时间的表示方式.png)

------

### Date获取信息的方法 

```js
    // 1.获取想要的时间信息
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    console.log(year, month, day, hour, minute, second)
    console.log(`${year}/${month}/${day} ${hour}:${minute}:${second}`)

    var weekday = date.getDay() // 一周中的第几天
    console.log(weekday)


    // 2.也可以给date设置时间(了解)
    date.setFullYear(2033)
    // 3.自动校验，没有32号，自动顺延到下月1号
    date.setDate(32)
    console.log(date)
```

![Date获取信息的方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\Date获取信息的方法.png)

------

### Date设置信息的方法 

![Date设置信息的方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\Date设置信息的方法.png)

------

### Date获取Unix时间戳 

```js
    // 时间戳，是1970年1月1号00：00：00 到某个时间，之间的时间（毫秒）
    // 时间戳 转时间
    var date = new Date(1132324234242)
    console.log(date)

    // Date对象, 时间转成时间戳
    var date = new Date()
    var date2 = new Date("2033-03-03")

    // 方法一: 当前时间的时间戳，1970年1月1号00：00：00 到 当前时间 ，这中间的时间（毫秒）
    var timestamp1 = Date.now()
    console.log(timestamp1)

    // 方法二/三：将一个date对象转成时间戳
    var timestamp2 = date.getTime()
    var timestamp3 = date2.valueOf()
    console.log(timestamp2, timestamp3)

    // 方法四: 转数字，转成时间戳
    console.log(+date)


    // 计算这个操作所花费的时间
    var startTime = Date.now()
    for (var i = 0; i < 100000; i++) {
      console.log(i)
    }
    var endTime = Date.now()
    console.log("执行100000次for循环的打印所消耗的时间:", endTime - startTime)


    // 封装一个简单函数，计算函数执行时间
    function testPerformance(fn) {
      var startTime = Date.now()
      fn()
      var endTime = Date.now()
    }
```

![Date获取Unix时间戳](C:\Users\admin\Desktop\系统笔记\img_js_基础\Date获取Unix时间戳.png)

------

### Date.parse方法 

```js
    // 将字符串 转为 时间戳
    var timeString = "03/23/2033"

    // 1.方式一:
    var date = new Date(timeString)
    var timestamp = date.getTime()

    // 2.方式二:
    var timestamp = Date.parse(timeString)
    console.log(timestamp)
```

![Date.parse方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\Date.parse方法.png)

------

### 时间格式化的方法 

![时间格式化的方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\时间格式化的方法.png)

------

### 继承的概念

```js
    // 继承的概念
    class Person {
      constructor(name, age) {
        // 属性
        this.name = name
        this.age = age
      }
      // 方法
      running() {
      }
      eating() {
      }
    }

     // Student extends Person 继承后 Student 为 Person 的子类 Student 拥有了 父类Person所有 属性和方法
     // 并且 Student 还可以 添加 属于自己的 属性和方法
    class Student extends Person {
      // 自己的方法
      studying() {

      }
    }

    // 多个继承，会形成继承树，最底层会拥有 上面所有类的属性方法
    // SmallStudent 有了 Student 和 Person 的 属性方法
    class SmallStudent extends Student {
      dwzry() {
      }
    }

    class BigStudent extends Student {
      xwjf() {
      }
    }
    
    var stu = new Student("why", 18)
    stu.running()
    stu.eating()
    stu.studying()
```

## JavaScript的DOM操作 

### 认识DOM和BOM 

- api
  - 应用程序编程接口

![认识DOM和BOM](C:\Users\admin\Desktop\系统笔记\img_js_基础\认识DOM和BOM.png)

------

### 深入理解DOM 

- DOM
  - （文档）页面中所有的内容，表示为可修改的对象，通过JS修改对象，改变页面内容
- BOM
  - 通过JS对浏览器本身，做修改

![深入理解DOM](C:\Users\admin\Desktop\系统笔记\img_js_基础\深入理解DOM.png)

------

### DOM Tree的理解 

![DOM Tree的理解](C:\Users\admin\Desktop\系统笔记\img_js_基础\DOM Tree的理解.png)

------

### DOM的学习顺序 

![DOM的学习顺序](C:\Users\admin\Desktop\系统笔记\img_js_基础\DOM的学习顺序.png)

------

### DOM的继承关系图 

- 最底层的继承了所有上层的属性、方法
  - document 继承自 Node ，Node 继承自 EventTarget
  - 所有节点都是 document 对象的属性、方法

- 元素和节点
  - Node节点包括了不同类型的节点和元素，Node节点里面的都是节点，只是类型不同
  - 注释、文本是节点
  - 标签是元素，也叫元素节点
  - 这就是节点和元素的区分

```html
  <!-- 我是注释, 哈哈哈 -->
  我是文本, 呵呵呵

  <div class="box">哈哈哈哈哈</div>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
```

![DOM的继承关系图](C:\Users\admin\Desktop\系统笔记\img_js_基础\DOM的继承关系图.png)

------

### document对象 

- 浏览器载入整个网页，抽象成对象模型，这个对象模型就是 document 对象
- 是整个DOM的入口对象，包含了所有节点元素
- document 是一个对象，通过 document 的属性、方法来获取 节点、方法
- document 继承自 Node ，Node 继承自 EventTarget

![document对象](C:\Users\admin\Desktop\系统笔记\img_js_基础\document对象.png)

------

### 原生DOM和框架DOM操作区别

- 前端通过JS向服务器请求数据，服务器去数据库拿到数据，返给前端
- 前端再通过原生JS操作DOM，改变页面内容，这是命令式编程
- 通过VUE框架，是声明式编程
  - vue 先把template模板中的内容，变成不同的JS对象，再变成虚拟DOM（梳理所有对象之间的关系，形成树结构），再把虚拟DOM转成真实DOM（就是原生的HTML写法），最后载入到浏览器，被浏览器识别，渲染出来

### 节点（Node）之间的导航（navigator） 

- 获取所有节点
  -  注释、文本 节点
  - 元素 节点，就是标签

- 获取节点，是按照所有节点的关系结构去获取，包括 注释、文本、元素等节点

```js
    // 1.获取节点的导航
    var bodyEl = document.body
    // 1.1.获取body所有的子节点
    console.log(bodyEl.childNodes)
    // 1.2.获取body的第一个子节点
    var bodyElFirstChild = bodyEl.firstChild
    // 1.3.获取下一个兄弟节点
    var bodyElCommentChild = bodyElFirstChild.nextSibling
    // 1.4.获取body的父节点
    var bodyParent = bodyEl.parentNode
```

![节点（Node）之间的导航（navigator）](C:\Users\admin\Desktop\系统笔记\img_js_基础\节点（Node）之间的导航（navigator）.png)

------

### 元素（Element）之间的导航（navigator） 

- 获取元素，是按照所有元素节点的关系结构去获取，不包括 注释、文本 节点
  - 只包括元素节点，就是 标签
- children
  - 所有元素节点，不包括 注释、文本 节点，只包括元素节点
- childNodes
  - 所有节点，包括 注释、文本、元素等节点

```js
    var bodyEl = document.body
    // 根据body元素去获取子元素(element)
    var childElements = bodyEl.children

    // 获取第一个子元素
    var boxEl1 = bodyEl.firstElementChild
    // 所有子元素中的第一个
    var boxEl2 = bodyEl.children[0]

    // 获取下一个兄弟ul元素
    var ulEl = boxEl1.nextElementSibling

    // 获取ul子元素
    var liEls = ulEl.children

```

![元素（Element）之间的导航（navigator）](C:\Users\admin\Desktop\系统笔记\img_js_基础\元素（Element）之间的导航（navigator）.png)

------

### 表格（table）元素的导航（navigator） 

- 只适用于 table

```js
<body>
  
  <!-- 高级元素: table/form -->
  <table>
    <thead>
      <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>身高</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>why</td>
        <td>18</td>
        <td>1.88</td>
      </tr>
      <tr>
        <td>kobe</td>
        <td>30</td>
        <td>1.98</td>
      </tr>
    </tbody>
  </table>

  <script>

    var tableEl = document.body.firstElementChild

    // 通过table元素获取内部的后代元素,tBodies 是 tbody
    console.log(tableEl.tHead, tableEl.tBodies, tableEl.tFoot)
    console.log(tableEl.rows)

    // 拿到第3行 tr
    var rowEl = tableEl.rows[2]
    // 第3行的第一个列 td
    console.log(rowEl.cells[0])
    // 第3行 tr的下标是多少，在 tbody 中 1
    console.log(rowEl.sectionRowIndex)
    // 第3行 tr的下标是多少，在 table 中 2 多了一个thead中的tr
    console.log(rowEl.rowIndex)

  </script>

</body>
```

```js
    table {
      /* 边框合并 */
      border-collapse: collapse;
    }

    td {
      /* 设置边框 */
      border: 1px solid #000;
      padding: 8px 12px;
    }
	// for循环，第一行的第一列，第2行的第2列
    for (var i = 0; i < tableEl.rows.length; i++) {
      var rowEl = tableEl.rows[i]
      var cellEl = rowEl.cells[i]

      // 设置样式
      cellEl.style.backgroundColor = "red"
      cellEl.style.color = "white"
    }
```

![表格（table）元素的导航（navigator）](C:\Users\admin\Desktop\系统笔记\img_js_基础\表格（table）元素的导航（navigator）.png)

------

### form 元素的导航

- 只适用于 form

```js
  <form action="">
    <!-- form 中 name 在向服务器提交的时候，作为key ,123是输入的值 -->
    <!-- /list?account=123 -->
    <input name="account" type="text">
    <input name="password" type="password">
    <input name="hobbies" type="checkbox" checked>
    <select name="fruits">
      <option value="apple">苹果</option>
      <option value="orange">橘子</option>
    </select>
  </form>
  
  <script>

    // 1.获取form
    // var formEl = document.body.firstElementChild
    var formEl = document.forms[0]

    // 2.获取form中的子元素 children/elements
    var inputEl = formEl.children
    // elements 通过 name值 拿到 元素
    var inputEl = formEl.elements.account
    setTimeout(function() {
      // 元素的value输入值
      console.log(inputEl.value)
    }, 5000)

  </script>
```

![表单（form）元素的导航（navigator）](C:\Users\admin\Desktop\系统笔记\img_js_基础\表单（form）元素的导航（navigator）.png)

------

### 获取元素的方法 

- 是否可以在元素上调用
  - 都支持 在 document 上调用 document .querySelector
  - 元素调用，是指 某个元素 box.querySelector
- 实时的
  - 拿到元素后动态修改了，之前拿到的元素会不会也改变

```js
  <script>

    // 一. 通过导航获取
    // 1.拿到body
    var bodyEl = document.body

    // 2.拿到box
    var boxEl = bodyEl.firstElementChild

    // 3.拿container
    var containerEl = boxEl.children[1]

    // 4.拿p
    var pEl = containerEl.children[0]

    // 5.拿到keyword
    var spanEl = pEl.children[0]
    spanEl.style.color = "red"

    // 二. getElementBy*/getElementsBy*
    // 1.通过className获取元素
    var keywordEls = document.getElementsByClassName("keyword")
    // 修改第一个
    // keywordEls[0].style.color = "red"
    // 修改所有的
    for (var i = 0; i < keywordEls.length; i++) {
      keywordEls[i].style.color = "red"
    }

    // 2. 通过id获取元素
    var titleEl = document.getElementById("title")
    titleEl.style.color = "orange"


    // 三.querySelector: 通过选择器查询
    var keywordEl = document.querySelector(".keyword")
    // keywordEls是可迭代对象，但不是数组，是伪数组，支持 foreach for of
    // 可迭代对象: String/数组/节点的列表
    var keywordEls = document.querySelectorAll(".keyword")
    for (var el of keywordEls) {
      el.style.color = "red"
    }
    console.log(keywordEls)

    var titleEl = document.querySelector("#title")
    titleEl.style.color = "orange"

  </script>
```

![获取元素的方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\获取元素的方法.png)

------

### Node节点的属性 - nodeType 

- Node节点有的属性，元素也有，因为元素节点继承自节点
- 空格、换行 是本文节点
- nodeType是节点类型：
  - 1 、3、 8、 9、 10   数值和常量 表示的是同一个东西
  - 元素节点 、文本节点 、注释节点 、文档节点、 文档声明节点

```js
document.body.childNodes // 所有子节点
node.nodeType // 节点类型
```

![节点的属性 - nodeType](C:\Users\admin\Desktop\系统笔记\img_js_基础\节点的属性 - nodeType.png)

------

### 节点的属性 – nodeName、tagName 

- nodeName 所有节点，拿到的节点名称 是常量，其中的元素节点拿到的是 标签名
- tagName 只用于元素节点，拿到的是 标签名

![节点的属性 – nodeName、tagName](C:\Users\admin\Desktop\系统笔记\img_js_基础\节点的属性 – nodeName、tagName.png)

------

### 节点的属性 - innerHTML、textContent 

- data 拿到非元素节点的其他节点数据

- innerHTML 拿到元素节点的 所有内容，整个标签和标签的内容，html元素和文本内容

  - 不包括 获取元素本身
  - `<h2>呵呵呵呵</h2>`

- textContent 拿到元素节点 标签的内容，文本内容

  - `呵呵呵呵`

- 设置本文

  - 设置文本, 作用是一样
  - 设置文本中包含元素内容, 那么innerHTML浏览器会解析, textContent会当成文本的一部分

  ```js
      divNode.innerHTML = "<h2>呵呵呵呵</h2>"
  	// 页面显示的内容
  	呵呵呵呵
      divNode.textContent = "<h2>呵呵呵呵</h2>"
  	// 页面显示的内容
      "<h2>呵呵呵呵</h2>"
  ```

- outerHTML

  - 包括获取元素本身，拿到元素节点的 所有内容，整个标签和标签的内容，html元素和文本内容

- innerHTML 和 outerHTML

  - 区别是 outerHTML 拿到的包括 获取元素本身
  - divNode是box

```html
  <div class="box">
    <h2>我是标题</h2>
    <p>我是内容, 哈哈哈哈</p>
  </div>
```

```js
// console.log(divNode.innerHTML)
    <h2>我是标题</h2>
    <p>我是内容, 哈哈哈哈</p>
```

```js
// console.log(divNode.outerHTML)
 <div class="box">
    <h2>我是标题</h2>
    <p>我是内容, 哈哈哈哈</p>
  </div>
```

![节点的属性 - innerHTML、textContent](C:\Users\admin\Desktop\系统笔记\img_js_基础\节点的属性 - innerHTML、textContent.png)

------

### 节点的属性 - nodeValue 

![节点的属性 - nodeValue](C:\Users\admin\Desktop\系统笔记\img_js_基础\节点的属性 - nodeValue.png)

------

### 元素节点才有的其他属性 

```js
  <button class="btn">切换</button>

  <!-- 全局属性 id class title style -->
  <div id="box" class="cba" title="aaa" style="color: red">
    哈哈哈哈哈
  </div>
  
  <script>
    // 1.获取元素
    var boxEl = document.querySelector("#box")
    var btnEl = document.querySelector(".btn")

    // 2.监听btn的点击
    btnEl.onclick = function() {
      // 1.只是隐藏
      // boxEl.hidden = true
      // boxEl.style.display = "none"

      // 2.切换
      // boxEl.hidden = false
      // if (boxEl.hidden === false) {
      //   boxEl.hidden = true
      // } else {
      //   boxEl.hidden = false
      // }

      // 3.直接取反
      boxEl.hidden = !boxEl.hidden
    }


  </script>
```

![节点的其他属性](C:\Users\admin\Desktop\系统笔记\img_js_基础\节点的其他属性.png)

------

### 元素的属性和特性

- 元素（标签本身）的属性是 attribute
  - id class 等

```html
  <!-- 属性: attribute(特性) -->
  <!-- 
    attribute的分类:
      1.如果是HTML标准制定的attribute, 称之为标准Attribute;id class title href 
      2.而自定义的Attribute, 称之为非标准Attribute;age height
   -->
  <div id="abc" class="box" title="box"
       age="18" height="1.88">
    我是box
  </div>
  <a href="https://www.baidu.com">百度一下</a>
```

![元素的属性和特性](C:\Users\admin\Desktop\系统笔记\img_js_基础\元素的属性和特性.png)

------

### attribute的分类

![attribute的分类](C:\Users\admin\Desktop\系统笔记\img_js_基础\attribute的分类.png)

------

### attribute的操作

![attribute的操作](C:\Users\admin\Desktop\系统笔记\img_js_基础\attribute的操作.png)

------

### 元素的属性（property）

- 对象的属性是property
  - 元素（标签本身）的属性是 attribute

- 标准的attribute在对应的对象模型中都有对应的property
  - 可以通过property来获取attribute的值
- 非标准的attribute在对应的对象模型中没有property
  - 不能通过property来获取attribute的值
  - 只能通过 getAttribute 获取attribute的值
- style 也是attribute,也有对于的property
  - `<div class="box" style="">`
  - `box.style.color = "red"`
  - 通过 property修改style的属性

```js
  <!-- 0.元素中的属性称之为attribute -->
  <!-- 0.标准的attribute在对应的对象模型中都有对应的property -->

  <!-- A.第一步：id class title 是标准的attribute（非自定义）  -->
  <div id="abc" class="box" title="标题"
       age="18" height="1.88">  
    我是box
  </div>

  <input type="checkbox" checked>

  账号: <input class="account" type="text">
  <button class="btn">设置input的值</button>

  <script>

    // 对象中的属性称之为property
    var obj = {
      // property
      name: "why"
    }

    // 1.通过property获取attribute的值
    // 获取box元素
    var boxEl = document.querySelector(".box")
    // A.第二步：标准的attribute，通过property获取attribute的值
    console.log(boxEl.id, boxEl.title)
    // A.第二步：标准的attribute，不能通过property获取attribute的值，只能getAttribute获取
    console.log(boxEl.age, boxEl.height)

    // input元素
    var inputEl = document.querySelector("input")
    // B.getAttribute，拿到是只能是字符串
    if (inputEl.getAttribute("checked")) {  
      console.log("checkbox处于选中状态")
    }
    // B.拿到的是有具体类型的
    if (inputEl.checked) {
      console.log("checkbox处于选中状态")
    }
    console.log(typeof inputEl.checked)
    
    // 2.attribute和property是相互影响的
    boxEl.id = "aaaaa"
    console.log(boxEl.getAttribute("id"))

    boxEl.setAttribute("title", "哈哈哈")
    console.log(boxEl.title)

    // 3.比较特殊的情况, input设置值(了解)
    var accountInputEl = document.querySelector(".account")
    var btnEl = document.querySelector(".btn")
    btnEl.onclick = function() {
      // 通过 attribute 设置
      accountInputEl.setAttribute("value", "kobe")
      // 通过 property 设置
      accountInputEl.value = "哈哈哈"
    }
```

![元素的属性（property）](C:\Users\admin\Desktop\系统笔记\img_js_基础\元素的属性（property）.png)

------

### HTML5的data-*自定义属性

- 非标准 attribute 没有对应的 property
- 通过 自定义属性 `data-height="1.88"` 添加的自定义属性 
  - 都存放在 dataset 中
- 这样避免使用 getAttribute 
  - `boxEl.dataset.age`

![HTML5的自定义属性](C:\Users\admin\Desktop\系统笔记\img_js_基础\HTML5的自定义属性.png)

------

### JavaScript动态修改样式

```js
    boxEl.onclick = function() {
      // 1.直接修改style
      boxEl.style.color = "red"

      // 2.动态的添加某一个class
      boxEl.className = "active"

      // 3.动态的修改boxEl的宽度,精准修改
      boxEl.style.width = 100 * counter + "px"
      counter++
    }
```

![JavaScript动态修改样式](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript动态修改样式.png)

------

### 元素的className和classList

- className 
  - class的属性名字
- classList 
  - 用于操作class

```js
    // 需求: box在active之间切换
    var btnEl = document.querySelector(".btn")
    btnEl.onclick = function() {
      // if (boxEl.classList.contains("active")) {
      //   boxEl.classList.remove("active")
      // } else {
      //   boxEl.classList.add("active")
      // }
      boxEl.classList.toggle("active")
    }
```

![元素的className和classList](C:\Users\admin\Desktop\系统笔记\img_js_基础\元素的className和classList.png)

------

### 元素的style属性

- property style 只适用于 行间样式
  - 获取样式值 `boxEl.style.backgroundColor`

- 在property中使用的驼峰格式
- 属性的值, 设置为空的字符串, 那么是使用默认值
- 通过  property 设置 style 多值，使用 cssText 

`boxEl.style.cssText = "font-size: 30px; color: red;"`

![元素的style属性](C:\Users\admin\Desktop\系统笔记\img_js_基础\元素的style属性.png)

------

### 元素style的读取 - getComputedStyle

- getComputedStyle 也是获取样式值，解决property style仅能获取行间样式值的问题，不能获取 style 标签、css文件 编写的样式

![元素style的读取 - getComputedStyle](C:\Users\admin\Desktop\系统笔记\img_js_基础\元素style的读取 - getComputedStyle.png)

------

### 创建元素

![创建元素](C:\Users\admin\Desktop\系统笔记\img_js_基础\创建元素.png)

------

### 插入元素

- 现在 使用 append，可以传入多个
  - appendChild 已经是 旧方法了，不推荐使用，只能传入一个

```js
    // 1.通过innerHTML(不推荐)浏览器先解析字符串，再解析h2标签，用于只插入文本
    boxEl.innerHTML = `
      <h2 class="title">我是标题</h2>
    `

    // 2.真实创建一个DOM对象
    var h2El = document.createElement("h2")
    h2El.className = "title"
    h2El.classList.add("active")
    h2El.textContent = "我是标题"

    // 将元素插入boxEl
    boxEl.append(h2El)  // h2插入到box里面的尾部
    boxEl.prepend(h2El)  // h2插入到box里面的头部
    boxEl.after(h2El)   // h2插入到box元素的后面（下面）h2和box是兄弟关系
    boxEl.before(h2El)  // h2插入到box元素的前面（上面）
    boxEl.replaceWith(h2El, "abc")  // h2把box替换，可以传入多个

    // 插入到span和p元素之间
    var spanEl = boxEl.querySelector("span")
    spanEl.after(h2El)
```

![插入元素](C:\Users\admin\Desktop\系统笔记\img_js_基础\插入元素.png)

------

### 移除和克隆元素

- 调用的是元素 本身 的方法 
- box.remove 移除是包括元素本身以及子级
- box.cloneNode()
  - 默认是浅克隆，克隆的本身
  - box.cloneNode(true) 深克隆，克隆本身以及子级

![移除和克隆元素](C:\Users\admin\Desktop\系统笔记\img_js_基础\移除和克隆元素.png)

------

### 旧的元素操作方法

![旧的元素操作方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\旧的元素操作方法.png)

------

### 元素的大小、滚动

- 这是 **元素** 的 大小
- clientWidth
  - 拿到的值没有单位
  - 宽度只 = 内容宽度加padding
- clientTop
  - 上边框的宽度

- offsetWidth
  - 宽度 = 元素显示的宽度，包括border\padding\contentwidth\滚动条
  - 真实占据的宽度
- offsetLeft
  - 距离父元素的x轴距离
- scrollHeight
  - 整个可滚动的区域高度
- scrollTop
  - 已滚动的高度

```js
    // 1.获取样式(局限性很强)
    var boxStyle = getComputedStyle(boxEl)
    console.log(boxStyle.width, boxStyle.height)

    // 2.获取更多信息
    console.log(boxEl.clientWidth)
```

![元素的大小、滚动](C:\Users\admin\Desktop\系统笔记\img_js_基础\元素的大小、滚动.png)

------

### window的大小、滚动

- 这是 **窗口** 的大小
- outerWidth
  - 整个浏览器的宽度，**整个**，包括所有可以看到的宽度，右侧调试栏、头部标签页、滚动条
- innerWidth
  - 内容的宽度，仅包含滚动条
- 通过 html元素 来获取  `document.documentElement.某个属性`
  - 具体看上一个 **元素的大小、滚动**
  - `document.documentElement.clientWidth`
  - `document.documentElement.offsetWidth`
  - `document.documentElement.scrollHeight`
- 获取页面滚动的值
  - window.scrollX
- 设置页面滚动到某个位置

```js
	  window.scrollBy(0, 100) // 在原来位置的基础上，再次改变位置
      window.scrollTo(0, 0) // 滚动到一个绝对的位置
onscroll监听window.scrollY设置显示隐藏
scrollTo回到固定位置
```

![window的大小、滚动](C:\Users\admin\Desktop\系统笔记\img_js_基础\window的大小、滚动.png)

------

### DOM案例

```js
  <h1>动态创建列表</h1>
  <ul class="list"></ul>

  <script>
    var ulEl = document.querySelector(".list")

    var isFlag = true
    while (isFlag) {
      // prompt 原生输入弹窗
      var message = prompt("请输入信息:")
      if (!message) { // 没有输入内容
        isFlag = false
      } else {
        var liEl = document.createElement("li")
        liEl.textContent = message
        ulEl.append(liEl)
      }
    }
```

```js
    // 实时显示时间
	// 封装工具函数
    function padLeft(content, count, padStr) {
      count = count || 2
      padStr = padStr || "0"
      // 转字符串，调用字符串方法padStart
      content = String(content)
      // 默认2位，补0
      return content.padStart(count, padStr)
    }

    // 1.获取时间的元素
    var timeEl = document.querySelector(".time")

    setInterval(function() {
      // 2.获取具体的时间并且进行格式化
      var date = new Date()
      var year = date.getFullYear()
      var month = padLeft(date.getMonth() + 1)
      var day = padLeft(date.getDate())
      var hour = padLeft(date.getHours())
      var minute = padLeft(date.getMinutes())
      var second = padLeft(date.getSeconds())

      // 3.将时间放到timeEl中
      timeEl.textContent = `${year}-${month}-${day} ${hour}:${minute}:${second}`
    }, 1000);


    // 补充String方法
    var str = "124"
    // padStart 是 字符串str的原生方法，显示几（4）个字符，不够用什么补齐4位
    console.log(str.padStart(4, "0")) // 0004,padStart在前面补
```

#### 倒计时

- 拿到当前时间、结束时间，相减拿到秒，把 秒 转成 某时某分某秒
  - 时间转不过来先转数字，会简单点，再根据数字的去转时间的

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .countdown {
      color: #f00;
      font-size: 20px;
    }

    .countdown .time {
      background-color: #f00;
      color: #fff;
      display: inline-block;
      padding: 5px;
      border-radius: 3px;
    }
  </style>
</head>
<body>
  
  <div class="countdown">
    <span class="time hour">03</span>
    <span class="split">:</span>
    <span class="time minute">25</span>
    <span class="split">:</span>
    <span class="time second">43</span>
  </div>

  <script src="./js/format.js"></script>
  <script>
    // 1.获取元素
    var hourEl = document.querySelector(".hour")
    var minuteEl = document.querySelector(".minute")
    var secondEl = document.querySelector(".second")
    
    // 设置今天的结束时间
    var endDate = new Date()
    endDate.setHours(24)
    endDate.setMinutes(0)
    endDate.setSeconds(0)
    endDate.setMilliseconds(0)

    setInterval(function() {
      // 获取倒计时的小时-分钟-秒钟
      // 开始11:53:22 => 结束24:00:00

      // 当前时间
      var nowDate = new Date()
      // 结束时间 减去 当前时间 = 倒计时的时间，距离结束还有多少秒
      // /1000 转秒
      var intervalTime = Math.floor((endDate.getTime() - nowDate.getTime()) / 1000)
      // console.log(intervalTime)

      // 43324秒 转成 x小时x分钟x秒钟
      var hour = Math.floor(intervalTime / 3600) // 43324秒/3600=多少小时，取整=具体小时
      var minute = Math.floor(intervalTime / 60) % 60  // 43324秒/60=多少分钟，取余60，因为不能超60分钟，同数字，10进制在这里换60进制
      var second = intervalTime % 60

      // 2.设置内容
      hourEl.textContent = formatPadLeft(hour)
      minuteEl.textContent = formatPadLeft(minute)
      secondEl.textContent = formatPadLeft(second)
    }, 1000)


    // 时间转不过来先转数字简单点，再根据数字去转时间的
    // 125 转 x百x十x个
    var num = 125
    console.log(Math.floor(num / 100)) // 125/100=1.25 取整=1
    console.log(Math.floor(num / 10) % 10)  // 125/10=12.5 取整=12 12取余10=2
    console.log(num % 10) // 125取余10=5

  </script>

</body>
</html>
```

## JavaScript的事件处理

https://developer.mozilla.org/zh-CN/docs/Web/Events

### 认识事件（Event）

- onclick 会覆盖事件，同一个元素只能添加一个事件
- addEventListener，添加多个

```js
    // 1.在html中编写
    <button onclick="console.log('按钮1发生了点击~');">按钮1</button>
    // 2.onclick属性
    function handleClick01() {
      console.log("按钮2发生了点击~")
    }
    function handleClick02() {
      console.log("按钮2的第二个处理函数")
    }
    btn2El.onclick = handleClick01
    btn2El.onclick = handleClick02 // 覆盖了handleClick01
    // 3.addEventListener(推荐)
    btn3El.addEventListener("click", function() {
      console.log("第一个btn3的事件监听~")
    })
    btn3El.addEventListener("click", function() {
      console.log("第二个btn3的事件监听~")
    })
    btn3El.addEventListener("click", function() {
      console.log("第三个btn3的事件监听~")
    })
```

![认识事件（Event）](C:\Users\admin\Desktop\系统笔记\img_js_基础\认识事件（Event）.png)



------

### 常见的事件列表

![常见的事件列表](C:\Users\admin\Desktop\系统笔记\img_js_基础\常见的事件列表.png)

------

### 认识事件流

- 事件传递的路径/顺序，就叫做 事件流
  - span --> div --> body  这就是 事件流
  - div 包含了 span，点击了span，也就点击了div，点击了div，也就点击了body

- 2 种事件流
  - 捕获 和 冒泡

![认识事件流](C:\Users\admin\Desktop\系统笔记\img_js_基础\认识事件流.png)

------

### 事件冒泡和事件捕获

- 为了让事件能够传递。IE、Netscape采用了不同的事件流（冒泡、捕获），现在都被保留下来了

- 默认是 监听 事件冒泡

- 监听事件流的方式是， 由内向外 传递事件，就是 事件冒泡
- 监听事件流的方式是， 由外向内 传递事件，就是 事件捕获
- 冒泡和捕获的区别，就是 传递事件 的顺序 不同
- 如何监听事件捕获
  - addEventListener 第三个参数为 true，只监听事件捕获，不监听事件冒泡

```js
spanEl.addEventListener("click", function() {
      console.log("span元素发生了点击~捕获")
    }, true)
```

![事件冒泡和事件捕获](C:\Users\admin\Desktop\系统笔记\img_js_基础\事件冒泡和事件捕获.png)

------

### 事件捕获和冒泡的过程

- 这个过程是有 阶段的
  - 1 是捕获
  - 2 是到达目标
  - 3 是冒泡

- 无论 捕获 和 冒泡，都是在 传递 事件

- 监听捕获 并监听冒泡，addEventListener设置true（捕获）加上 addEventListener默认的，不写第三个参数（冒泡）

  - 外到内，最外层 win 会捕获事件，然后win把事件传递给下层，直到目标元素td
  - 内到外，td执行事件，冒泡到（td把事件传递给）上层，上层有事件执行事件，没有事件就不执行
  - 执行完，或者没有事件，都会继续冒泡到上层，直到最外层 win
  - 结束
  - 监听 捕获 和 冒泡

  ```js
      // 默认情况下是事件冒泡
      spanEl.addEventListener("click", function() {
        console.log("span元素发生了点击~冒泡")
      })
      divEl.addEventListener("click", function() {
        console.log("div元素发生了点击~冒泡")
      })
      bodyEl.addEventListener("click", function() {
        console.log("body元素发生了点击~冒泡")
      })
  
      // 设置希望监听事件捕获的过程
      spanEl.addEventListener("click", function() {
        console.log("span元素发生了点击~捕获")
      }, true)
      divEl.addEventListener("click", function() {
        console.log("div元素发生了点击~捕获")
      }, true)
      bodyEl.addEventListener("click", function() {
        console.log("body元素发生了点击~捕获")
      }, true)
  ```

- 不监听捕获，只监听冒泡，默认的（冒泡）

  - 内到外，td执行事件，冒泡到（td把事件传递到）上层，上层有事件执行事件，没有事件就不执行
  - 无论有没有事件，都会继续冒泡到上层，直到最外层 win
  - 结束

- 不监听冒泡，只监听捕获，addEventListener设置true（捕获）

  - 外到内，最外层win先捕获事件，执行事件，传递给（win把事件传递给）下层，执行事件，传递给下层...
  - 直到最内层，结束

![事件捕获和冒泡的过程](C:\Users\admin\Desktop\系统笔记\img_js_基础\事件捕获和冒泡的过程.png)

------

### 事件对象

- 在回调函数中拿到 event 对象
  - addEventListener 是一个方法，第二个参数是一个函数，这个函数传递到 addEventListener 内部被调用，这个函数就是回调函数，所以在回调函数中拿到 event 对象

![事件对象](C:\Users\admin\Desktop\系统笔记\img_js_基础\事件对象.png)

------

### event常见的属性和方法

- 当绑定事件的元素**等于**执行事件的实际目标元素的时候，e.target和e.currentTarget以及this三者相同
- target、currentTarget，在冒泡时，不同
- target
  - 触发当前事件的元素（当前事件在哪个元素上触发了）（根据触发位置发生变化）
- currentTarget
  - 绑定当前事件的元素（当前事件绑定在哪个元素上）（不变的）
- 阻止默认行为
  - preventDefault
    - 阻止默认事件
  - stopPropagation
    - 阻止事件传递（冒泡、捕获，都可以被阻止），不能阻止默认事件

```js
    // 1.阻止默认行为
    var aEl = document.querySelector("a")
    aEl.onclick = function(event) {
      console.log("a元素发生了点击~")
      event.preventDefault() // 阻止默认跳转页面
    }

    // 2.阻止事件进一步传递
    var btnEl = document.querySelector("button")
    var spanEl = document.querySelector("span")
    var divEl = document.querySelector("div")
    
    divEl.addEventListener("click", function(event) {
      console.log("div的事件捕获监听~")
    }, true)
    spanEl.addEventListener("click", function() {
      console.log("span的事件捕获监听~")
    }, true)
    btnEl.addEventListener("click", function(event) {
      console.log("button的事件捕获监听~")
      // event.stopPropagation() 事件传递到这里，被阻止，不会再继续传递
    }, true)
    
    divEl.addEventListener("click", function() {
      console.log("div的事件冒泡监听~")
    })
    spanEl.addEventListener("click", function(event) {
      console.log("span的事件冒泡监听~")
      event.stopPropagation()
    })
    btnEl.addEventListener("click", function() {
      console.log("button的事件冒泡监听~")
    })
```

```js
// event 参数    
divEl.onclick = function(event) {
      // 1.偶尔会使用
      console.log("事件类型:", event.type) // click
      console.log("事件阶段:", event.eventPhase) // - 1 是捕获- 2 是到达目标  - 3 是冒泡


      // 2.比较少使用
      console.log("事件元素中位置", event.offsetX, event.offsetY)
      console.log("事件客户端中位置", event.clientX, event.clientY)
      console.log("事件页面中位置", event.pageX, event.pageY)
      console.log("事件在屏幕中位置", event.screenX, event.screenY)

      // 3.target/currentTarget
      console.log(event.target)
      console.log(event.currentTarget)
      console.log(event.currentTarget === event.target)
    }
```

![event常见的属性和方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\event常见的属性和方法.png)

------

### 事件处理函数中的this

- 在浏览器内部，调用 event handler 是绑定到当前的 currentTarget 上的

```js
    var btnEl = document.querySelector("button")
    var divEl = document.querySelector("div")

    divEl.onclick = function(event) {
      console.log(this)
      console.log(event.currentTarget)
      console.log(divEl)
      console.log(this === divEl)
    }
```

------

### EventTarget类

- EventTarget 是 DOM 中，最顶层的类，所有节点都继承自 EventTarget，也都有EventTarget的属性、方法
  - window 也继承自 EventTarget
  - EventTarget 是一个DOM接口，用于 添加、删除、派发 Event 事件

- 移除的函数，必须是添加进去的函数，同一个引用地址

```js
    // 1.将监听函数移除的过程
    var foo = function() {
      console.log("监听到按钮的点击")
    }
    // 添加
    btnEl.addEventListener("click", foo) // 这是一个对象

    // // 需求: 过5s钟后, 将这个事件监听移除掉
    setTimeout(function() {
      // 删除
      btnEl.removeEventListener("click", foo) // 这是同一个对象
    }, 5000)

    // 2.这种做法是无法移除的
    btnEl.addEventListener("click", function() { // 这是一个对象
      console.log("btn监听的处理函数~")
    })

    setTimeout(function() {
      btnEl.removeEventListener("click", function() {}) // 这是另一个对象，删除失败
    }, 5000)
```

#### dispatchEvent

- 自定义事件，先派发，才能被监听到，监听到再执行事件

```js
    // eventtarget就可以实现类似于事件总线的效果
    // 先派发，才能被监听到，监听到再执行事件
    window.addEventListener("haha", function() { // 自定义事件 haha，但是默认并监听不到这个事件
      console.log("监听到haha")
    })

    setTimeout(function() {
      window.dispatchEvent(new Event("haha")) // 需要派发这个事件，才能被监听到。参数是Event，Event参数是自定义事件名
    }, 5000)
```

![EventTarget类](C:\Users\admin\Desktop\系统笔记\img_js_基础\EventTarget类.png)

------

### 事件委托（event delegation）

- 事件委托/事件代理
- 将事件绑定到父，子被点击时，会冒泡到父，就会执行父绑定的事件
  - 通过 `event.target` 触发事件的元素，来找到是哪个子被点击了
- 在子触发事件，在父类执行事件

```js
    // 1.每一个li都监听自己的点击, 并且有自己的处理函数(自己的函数)
    var liEls = document.querySelectorAll("li")
    for (var liEl of liEls) {
      // 监听点击
      liEl.onclick = function(event) {
        // 这里拿到的是for后的liEl，最后一个liEl
        liEl.classList.add("active")
        // 1-event.currentTarget 事件绑定的元素
        event.currentTarget.classList.add("active")
        // 2-this 是当前执行事件的对象
        this.classList.add("active")
        // 3-或立即执行函数，形成闭包
      }
    }

    // 2.统一在ul中监听
    var ulEl = document.querySelector("ul")
    ulEl.onclick = function(event) {
      console.log("点击了某一个li", event.target) // 触发事件的元素
      event.target.classList.add("active")
    }

	// 3.新需求: 点击li变成active, 其他的取消active
    var ulEl = document.querySelector("ul")
    // activeLiEl 表示哪个元素是active
    var activeLiEl = null
    ulEl.onclick = function(event) {
      // 1.判断 之前的 activeLiEl 有没有值
      if (activeLiEl && event.target != ulEl) {
        activeLiEl.classList.remove("active")
      }
      
      // 排除点击ul，只在li点击时执行
      if(event.target != ulEl){
      // 2.给点击的元素添加active
        event.target.classList.add("active")
      }

      // 3.把 新添加 active的元素给到 activeLiEl
      activeLiEl = event.target
    }
```

#### 自定义属性

- data-action="search"
  - 通过 data- 添加自定义属性名为action，值为search
- 通过event.target.dataset.action 
  - event.target.dataset.属性名，拿到属性名对应的值

```js
  <div class="box">
    <button data-action="search">搜索~</button> // 添加
    <button data-action="new">新建~</button>
    <button data-action="remove">移除~</button>
    <button>1111</button>
  </div>

  <script>

    var boxEl = document.querySelector(".box")
    boxEl.onclick = function(event) {
      var btnEl = event.target
      var action = btnEl.dataset.action // 取值
      switch (action) {
        case "remove":
          console.log("点击了移除按钮")
          break
        case "new":
          console.log("点击了新建按钮")
          break
        case "search":
          console.log("点击了搜索按钮")
          break
        default:
          console.log("点击了其他")
      }
    }
  </script>
```

![事件委托（event delegation）](C:\Users\admin\Desktop\系统笔记\img_js_基础\事件委托（event delegation）.png)

------

### 事件委托的标记

![事件委托的标记](C:\Users\admin\Desktop\系统笔记\img_js_基础\事件委托的标记.png)

------

### 常见的鼠标事件

![常见的鼠标事件](C:\Users\admin\Desktop\系统笔记\img_js_基础\常见的鼠标事件.png)

------

### mouseover和mouseenter的区别

- onmouseenter 监听父元素时，移入父元素中的子元素时，不会触发
  - 没有冒泡，不会传递事件
  - 不能做事件代理
- onmouseover 监听父元素时，移入父元素中的子元素时，会触发
  - 有冒泡，会传递事件
  - 可以做事件代理
- mouseenter:
  * 不冒泡
  * 进入子元素的时候, 不会有任何反应
- mouseover
  * 会冒泡
  * 进入子元素
    * 先离开out父元素
    * 进入子元素over
    * 并且会冒泡给父元素 over

![mouseover和mouseenter的区别](C:\Users\admin\Desktop\系统笔记\img_js_基础\mouseover和mouseenter的区别.png)

------

### 常见的键盘事件

- event.key, event.code
  - 优先使用 code
- 键盘按下
  - 先 down ，按下后马上执行
  - 后 press ，按下后在文本被输入（显示出来）执行
- 抬起
  - up

```js
    inputEl.onkeydown = function() {
      console.log("onkeydown")
    }
    inputEl.onkeypress = function() {
      console.log("onkeypress")
    }
    inputEl.onkeyup = function(event) {
      console.log(event.key, event.code)
    }

    // 1.搜索功能

    inputEl.onkeyup = function(event) {
      if (event.code === "Enter") {
        console.log("进行搜索功能", inputEl.value)
      }
    }

    // 2.按下s的时候, 搜索自动获取焦点
    document.onkeyup = function(event) {
      if (event.code === "KeyS") {
        inputEl.focus()
      }
    }
```

![常见的键盘事件](C:\Users\admin\Desktop\系统笔记\img_js_基础\常见的键盘事件.png)

------

### 常见的表单事件

- 失去焦点的时候，change 才会触发
- 重置是整个表单的重置，在 form表单上触发

```js
    // 1.获取焦点和失去焦点
    inputEl.onfocus = function() {
      console.log("input获取到了焦点")
    }
    inputEl.onblur = function() {
      console.log("input失去到了焦点")
    }

    // 2.内容发生改变/输入内容
    // 输入的过程: input
    // 内容确定发生改变(离开): change
    inputEl.oninput = function() {
      console.log("input事件正在输入内容", inputEl.value)
    }
    inputEl.onchange = function() { // 失去焦点时
      console.log("change事件内容发生改变", inputEl.value)
    }

    // 3.监听重置和提交
    var formEl = document.querySelector("form")
    formEl.onreset = function(event) {
      console.log("发生了重置事件")
      event.preventDefault()
    }

    formEl.onsubmit = function(event) {
      console.log("发生了提交事件")
      // axios库提交
      event.preventDefault()
    }
```

![常见的表单事件](C:\Users\admin\Desktop\系统笔记\img_js_基础\常见的表单事件.png)

------

### 文档加载事件

- DOMContentLoaded
  - HTML内容加载完毕,但是外部资源还没有加载完
- onload
  - HTML所有的内容(包括资源)

```js
    // 注册事件监听，DOMContentLoaded DOM加载完成，不包括图片、外部资源
    window.addEventListener("DOMContentLoaded", function() {
      // 1.这里可以操作box, box已经加载完毕
      var boxEl = document.querySelector(".box")
      boxEl.style.backgroundColor = "orange"
      console.log("HTML内容加载完毕")

      // 2.获取img对应的图片的宽度和高度
      var imgEl = document.querySelector("img")
      console.log("图片的宽度和高度:", imgEl.offsetWidth, imgEl.offsetHeight) // 拿不到图片宽高，还没有加载完图片
    })

    // 文档加载完成 onload，包括图片、外部资源
    window.onload = function() {
      console.log("文档中所有资源都加载完毕")
      var imgEl = document.querySelector("img")
      console.log("图片的宽度和高度:", imgEl.offsetWidth, imgEl.offsetHeight) // 可以拿到宽高，已经全部加载完
    }
    // 改变出口大小
    window.onresize = function() {
      console.log("创建大小发生改变时")
    }
```

![文档加载事件](C:\Users\admin\Desktop\系统笔记\img_js_基础\文档加载事件.png)

------

### window定时器方法

```js
    // 1.setTimeout
    function foo(name, age, height) { // 接收了setTimeout传递的3个参数
      console.log("foo被调用----", name, age, height)
    }

    // 记录定时器
    var timeoutID = setTimeout(foo, 3000, "why", 18, 1.88) // 最后3个参数，会传给foo函数

    var timeoutBtn = document.querySelector(".out")
    timeoutBtn.onclick = function() {
      // 取消定时器
      clearTimeout(timeoutID)
    }

    // 2.setInterval

    var itvID = setInterval(bar, 3000)

    var itvBtn = document.querySelector(".itv")
    itvBtn.onclick = function() {
      clearInterval(itvID)
    }
```

![window定时器方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\window定时器方法.png)

------

### setTimeout的使用

![setTimeout的使用](C:\Users\admin\Desktop\系统笔记\img_js_基础\setTimeout的使用.png)

------

### setInterval的使用

![setInterval的使用](C:\Users\admin\Desktop\系统笔记\img_js_基础\setInterval的使用.png)

### 随机索引值

- arr.length = 5
- 随机得到 0 到 4 中的一个

```js
Math.floor(Math.random() * arr.length)
```

### DOM案例

```js
    // 1.获取元素
    var topBar = document.querySelector(".top-bar")
    var deleteEl = topBar.querySelector(".delete")

    // 2.监听delete的点击
    deleteEl.onclick = function() {
      // transition 设置过度时间 配合 height 给消失添加过度动画
      topBar.style.height = 0
    }

    // 3.监听过渡动画结束ontransitionend，再删除元素
    topBar.ontransitionend = function() {
      topBar.remove()
    }
```

```js
    // 3s切换一次数据
    var currentIndex = 0 // 记录当前展示到的索引位置
    setInterval(function() {
      // 1> 根据索引获取item
      var tipItem = tipList[currentIndex]

      // 2> 给DOM设置内容
      imgEl.src = tipItem.icon
      spanEl.textContent = tipItem.title
      
      // 3> 重新计算索引
      currentIndex++
      if (currentIndex >= tipList.length) currentIndex = 0
    }, 3000)

    // 随机 索引值
    // Math.floor(Math.random() * tipList.length)
```

- nameEl的动画效果是右到左显示出来
  - 是因为nameEl的absolute定位是 right方向
    - 如果想要从左到右显示出来
    - 设置方向为left即可

```js
<body>
  
  <div class="tool-bar">
    <div class="item">
      <i class="icon icon01"></i>
      <div class="name">购物车</div>
    </div>
    <div class="item">
      <i class="icon icon02"></i>
      <div class="name">收藏</div>
    </div>
    <div class="item">
      <i class="icon icon03"></i>
      <div class="name">限时活动</div>
    </div>
    <div class="item">
      <i class="icon icon04"></i>
      <div class="name">大礼包</div>
    </div>
  </div>

  <script>
    // 1.动态给icon设置backgroundPosition，精灵图icon位置
    var iconEls = document.querySelectorAll(".icon")
    for (var i = 0; i < iconEls.length; i++) {
      var iconEl = iconEls[i]
      iconEl.style.backgroundPosition = `-48px -${50*i}px`
    }

    // 2.实现鼠标进入动画
    // 方案一: mouseenter(不能使用事件委托)
    var itemEls = document.querySelectorAll(".item")
    for (var itemEl of itemEls) {
      itemEl.onmouseenter = function() {
        var nameEl = this.children[1] // this就是itemEl
        nameEl.style.width = "62px" // nameEl的动画效果是右到左显示出来，是因为nameEl的absolute定位是 right方向；如果想要从左到右显示出来，设置方向为left即可
      }
      itemEl.onmouseleave = function() {
        var nameEl = this.children[1]
        nameEl.style.width = "0"
      }
    }

    // 方案二: mouseover(使用事件委托)
    var toolbarEl = document.querySelector(".tool-bar")
    toolbarEl.onmouseover = function(event) {
      handleMouseEvent(event, 62)
    }
    toolbarEl.onmouseout = function(event) {
      handleMouseEvent(event, 0)
    }

    function handleMouseEvent(event, width) {
      if (event.target !== toolbarEl) {
        // 1.获取唯一的item
        var itemEl = event.target.classList.contains("item") ? event.target: event.target.parentElement
        
        // var itemEl = null
        // if (event.target.classList.contains("item")) {
        //   // 是item直接赋值
        //   itemEl = event.target
        // } else {
        //   // 不是item，就是item的子级，那子级的父就是item； parentElement 父元素
        //   itemEl = event.target.parentElement
        // }

        // 2.根据item获取nameElement，拿到即将显示的元素
        var nameEl = itemEl.children[1]

        // 3.设置宽度
        nameEl.style.width = `${width}px`
      }
    }

  </script>
```

