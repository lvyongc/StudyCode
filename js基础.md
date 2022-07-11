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

![数组的遍历](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组的遍历.png)

------

### 数组方法 – slice、cancat、 join 

![数组方法 – slice、cancat、 join](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组方法 – slice、cancat、 join.png)

------

### 数组方法 – 查找元素 

![数组方法 – 查找元素](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组方法 – 查找元素.png)

------

### 数组的排序sort/reverse

![数组的排序sort-reverse](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组的排序sort-reverse.png)

------

### 数组的其他高阶方法 

![数组的其他高阶方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\数组的其他高阶方法.png)

------

### 时间的表示方式 

![时间的表示方式](C:\Users\admin\Desktop\系统笔记\img_js_基础\时间的表示方式.png)

------

### 时区对比图 

![时区对比图](C:\Users\admin\Desktop\系统笔记\img_js_基础\时区对比图.png)

------

### 创建Date对象 

![创建Date对象](C:\Users\admin\Desktop\系统笔记\img_js_基础\创建Date对象.png)

------

### dateString时间的表示方式 

![dateString时间的表示方式](C:\Users\admin\Desktop\系统笔记\img_js_基础\dateString时间的表示方式.png)

------

### Date获取信息的方法 

![Date获取信息的方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\Date获取信息的方法.png)

------

### Date设置信息的方法 

![Date设置信息的方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\Date设置信息的方法.png)

------

### Date获取Unix时间戳 

![Date获取Unix时间戳](C:\Users\admin\Desktop\系统笔记\img_js_基础\Date获取Unix时间戳.png)

------

### Date.parse方法 

![Date.parse方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\Date.parse方法.png)

------

### 时间格式化的方法 

![时间格式化的方法](C:\Users\admin\Desktop\系统笔记\img_js_基础\时间格式化的方法.png)

------

