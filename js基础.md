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

![逻辑或的本质](C:\Users\admin\Desktop\系统笔记\img_js_基础\逻辑或的本质.png)

------

### 逻辑与的本质 

![逻辑与的本质](C:\Users\admin\Desktop\系统笔记\img_js_基础\逻辑与的本质.png)

------

### !（非） 

![!（非）](C:\Users\admin\Desktop\系统笔记\img_js_基础\!（非）.png)

------

### switch语句 

![switch语句](C:\Users\admin\Desktop\系统笔记\img_js_基础\switch语句.png)

------

### switch语句的补充 

![switch语句的补充](C:\Users\admin\Desktop\系统笔记\img_js_基础\switch语句的补充.png)

------

