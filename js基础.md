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

![变量的使用注意](C:\Users\admin\Desktop\系统笔记\img_js_基础\变量的使用注意.png)

------

### JavaScript的数据类型 

![JavaScript的数据类型](C:\Users\admin\Desktop\系统笔记\img_js_基础\JavaScript的数据类型.png)

------

### typeof操作符 

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

![Object类型](C:\Users\admin\Desktop\系统笔记\img_js_基础\Object类型.png)

------

### Null类型 

![Null类型](C:\Users\admin\Desktop\系统笔记\img_js_基础\Null类型.png)

------

### 数据类型总结 

![数据类型总结](C:\Users\admin\Desktop\系统笔记\img_js_基础\数据类型总结.png)

------

### 数据类型的转换 

![数据类型的转换](C:\Users\admin\Desktop\系统笔记\img_js_基础\数据类型的转换.png)

------

### 字符串String的转换 

![字符串String的转换](C:\Users\admin\Desktop\系统笔记\img_js_基础\字符串String的转换.png)

------

### 数字类型Number的转换 

![数字类型Number的转换](C:\Users\admin\Desktop\系统笔记\img_js_基础\数字类型Number的转换.png)

------

### 布尔类型Boolean的转换 

![布尔类型Boolean的转换](C:\Users\admin\Desktop\系统笔记\img_js_基础\布尔类型Boolean的转换.png)

------

