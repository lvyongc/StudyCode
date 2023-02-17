## TypeScript

### JavaScript一门优秀的语言

* number/Number
* string/String
* boolean
* 数组类型
  * any[]
  * Array<any>
* 对象类型
  * object
  * { name: string, age: number }

* symbol
* null/undefined

![JavaScript一门优秀的语言](E:\AB--电脑备份\现在\StudyCode\img-typescript\JavaScript一门优秀的语言.png)

### TypeScript特有的类型

* any
* unknown
* void
  * 定义函数的类型时, 会使用
* never类型
  * 自动推导
  * 封装框架/工具: 校验
  * 类型工具: never(了解)
* tuple类型
  * 介于数组和对象之间类型
  * useState封装

### JavaScript的痛点

![JavaScript的痛点](E:\AB--电脑备份\现在\StudyCode\img-typescript\JavaScript的痛点.png)

### 类型带来的问题

![类型带来的问题](E:\AB--电脑备份\现在\StudyCode\img-typescript\类型带来的问题.png)

### 类型错误

![类型错误](E:\AB--电脑备份\现在\StudyCode\img-typescript\类型错误.png)

### 类型思维的缺失

![类型思维的缺失](E:\AB--电脑备份\现在\StudyCode\img-typescript\类型思维的缺失.png)

### JavaScript添加类型约束

![JavaScript添加类型约束](E:\AB--电脑备份\现在\StudyCode\img-typescript\JavaScript添加类型约束.png)

### 认识TypeScript

```js
// 参数是字符串
function getLength(args: string) {}
// 参数是字符串或者数组，数组中的子级类型为任意类型
function getLength2(args: string | any[]) {}
// 参数必有length属性，并且属性是 number类型
function getLength3(args: { length: number }) {}
```

![认识TypeScript](E:\AB--电脑备份\现在\StudyCode\img-typescript\认识TypeScript.png)

### TypeScript的特点

![TypeScript的特点](E:\AB--电脑备份\现在\StudyCode\img-typescript\TypeScript的特点.png)

### 众多项目采用TypeScript

![众多项目采用TypeScript](E:\AB--电脑备份\现在\StudyCode\img-typescript\众多项目采用TypeScript.png)

### 大前端的发展趋势

![大前端的发展趋势](E:\AB--电脑备份\现在\StudyCode\img-typescript\大前端的发展趋势.png)

### 安装-TypeScript的编译环境

```js
npm install typescript -g
tsc --version

tsc ts文件名字 // 编译ts文件
```

```js
// string: TypeScript给我们定义标识符时, 提供的字符串类型
// String: JavaScript中字符串的包装类
let message: string = "Hello World"
```

![TypeScript的编译环境](E:\AB--电脑备份\现在\StudyCode\img-typescript\TypeScript的编译环境.png)

### 编译TS

- tsc ts文件名字
  - tsc是安装ts时默认安装的
- webpack 插件 ts-loader
- ts-node库

### TypeScript的运行环境

-  https://mp.weixin.qq.com/s/wnL1l-ERjTDykWM76l4Ajw

![TypeScript的运行环境](E:\AB--电脑备份\现在\StudyCode\img-typescript\TypeScript的运行环境.png)

### 使用ts-node

![使用ts-node](E:\AB--电脑备份\现在\StudyCode\img-typescript\使用ts-node.png)

### 变量的声明

```js
// 定义标识符:类型注解
let name: string = "hh"
const age: number = 18
const height: number = 188
```

### ![变量的声明](E:\AB--电脑备份\现在\StudyCode\img-typescript\变量的声明.png)声明变量的关键字

![声明变量的关键字](E:\AB--电脑备份\现在\StudyCode\img-typescript\声明变量的关键字.png)

### 变量的类型推导（推断）

- 不写类型，根据值，自动 推断类型

```js
// 声明一个标识符时, 如果有直接进行赋值, 会根据赋值的类型推导出标识符的类型注解
// 这个过程称之为类型推导

// let进行类型推导, 推导出来的通用类型
// const进行类型推导, 推导出来的字面量类型

let name = "why" // 类型是 字符串
let age = 18 // 类型是 字面量类型
```

![变量的类型推导（推断）](E:\AB--电脑备份\现在\StudyCode\img-typescript\变量的类型推导（推断）.png)

### JavaScript和TypeScript的数据类型

![JavaScript和TypeScript的数据类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\JavaScript和TypeScript的数据类型.png)

### JavaScript类型 – number类型

![JavaScript类型 – number类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\JavaScript类型 – number类型.png)

### JavaScript类型 – boolean类型

![JavaScript类型 – boolean类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\JavaScript类型 – boolean类型.png)

### JavaScript类型 – string类型

![JavaScript类型 – string类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\JavaScript类型 – string类型.png)

#### JavaScript类型 – Array类型

```js
// 明确的指定<数组>的类型注解: 两种写法
// 1. string[]: 数组类型, 并且数组中存放的字符串类型
// 2. Array<string>: 数组类型, 并且数组中存放的是字符串类型

// 注意事项: 在真实的开发中, 数组一般存放相同的类型, 不要存放不同的类型
let names: string[] = ["abc", "cba", "nba"]

let nums: Array<number> = [123, 321, 111]
```

![JavaScript类型 – Array类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\JavaScript类型 – Array类型.png)

### JavaScript类型 – Object类型

![JavaScript类型 – Object类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\JavaScript类型 – Object类型.png)

### JavaScript类型 – Symbol类型

![JavaScript类型 – Symbol类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\JavaScript类型 – Symbol类型.png)

### JavaScript类型 – null和undefined类型

![JavaScript类型 – null和undefined类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\JavaScript类型 – null和undefined类型.png)

### 函数的参数类型

```js
// 在定义一个TypeScript中的函数时
// 返回值类型可以明确的指定, 也可以自动进行类型推导
// 最后一个 number 是返回值类型
function sum(num1: number, num2: number): number {
  return num1 + num2
}
```

![函数的参数类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\函数的参数类型.png)

### 函数的返回值类型

```js
// 定义对象类型
type LyricType = {
  time: number
  text: string
}

// 返回值是数组，数组中参数是time类型为number、text类型为string
function parseLyric(lyric: string): LyricType[] {
  // 参数是数组，数组中参数是time类型为number、text类型为string
  const lyrics: LyricType[] = []
  lyrics.push({ time: 1111, text: "天空想要下雨" })
  return lyrics
}

const lyricInfos = parseLyric("fdafdafdafa")
for (const item of lyricInfos) {
  console.log(item.time, item.text)
}
```

![函数的返回值类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\函数的返回值类型.png)

### 匿名函数的参数

- 最好不要添加类型注解

![匿名函数的参数](E:\AB--电脑备份\现在\StudyCode\img-typescript\匿名函数的参数.png)

### 对象类型

```js
// 对象类型和函数类型结合使用
type PointType = {
  x: number
  y: number
  // y  ；不写类型为any
  z?: number // 可选类型 ？
}
function printCoordinate(point: PointType) {
  console.log("x坐标:", point.x)
  console.log("y坐标:", point.y)
}
printCoordinate({ x: 20, y: 30 })
```

![对象类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\对象类型.png)

### 可选类型

![可选类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\可选类型.png)

### TypeScript类型 - any类型

- 接口返回数据，复杂时，为any
- 第三方库没有类型时，为any

```js
// any类型就表示不限制标识符的任意类型, 并且可以在该标识符上面进行任意的操作(在TypeScript中回到JavaScript中)
let id: any = "aaaa"

// 定义数组
const infos: any[] = ["abc", 123, {}, []]
```

![TypeScript类型 - any类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\TypeScript类型 - any类型.png)

### TypeScript类型 - unknown类型

- 用于 在代码运行时，才能确定类型的场景

```js
let foo: unknown = "aaa"
foo = 123
// unknown类型默认情况下在上面进行任意的操作都是非法的

// 要求必须进行类型的校验(缩小), 才能根据缩小之后的类型, 进行对应的操作
if (typeof foo === "string") { // 类型缩小
  // 操作
  console.log(foo.length, foo.split(" "))
}
```

![TypeScript类型 - unknown类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\TypeScript类型 - unknown类型.png)

### TypeScript类型 - void类型

- 函数没有返回值时，返回值是 void

```js
// 1.在TS中如果一个函数没有任何的返回值, 那么返回值的类型就是void类型
// 2.如果返回值是void类型, 那么我们也可以返回undefined(TS编译器允许这样做而已)
function sum(num1: number, num2: number): void {
  console.log(num1 + num2)
  // return 123 错误的做法，void 只能返回undefined或者不返回
}


// 应用场景: 用来指定函数类型的返回值是void
// 定义 FooType函数 类型为 void
type FooType = () => void
const foo: FooType = () => {}



// 1.定义要求传入的函数的，参数、返回值，类型
type ExecFnType = (...args: any[]) => void

// 2.定义一个函数, 并且接收的参数也是一个函数, 而且这个函数的类型必须是ExecFnType
function delayExecFn(fn: ExecFnType) {
  setTimeout(() => {
    fn("why", 18)
  }, 1000);
}

// 3.执行上面函数, 并且传入一个匿名函数
delayExecFn((name, age) => {
  console.log(name, age)
})


const names = ["abc", "cba", "nba"]
// 了解即可: 基于上下文类型推导的函数中的返回值如果是void类型, 并且不指定返回值为void，可以返回值；
names.forEach((item: string, index: number, arr: string[]) => {
  return 123
})
```

![TypeScript类型 - void类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\TypeScript类型 - void类型.png)

### TypeScript类型 - never类型

- 不会有值的类型
- 当一个函数永远不可能执行 `return` 的时候，返回的就是 `never` ，与 <u>void</u> 不同，`void` 是执行了 `return`， 只是没有值，`never` 是不会执行 `return`，比如抛出错误，导致函数终止执行

```js
// 其他时候在扩展工具的时候, 对于一些没有处理的case, 可以直接报错
function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case "string":
      console.log(message.length)
      break
    case "number":
      console.log(message)
      break
    case "boolean":
      console.log(Number(message))
      break
    // 其他类型时，never
    default:
      const check: never = message
  }
}
```

![TypeScript类型 - never类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\TypeScript类型 - never类型.png)

### TypeScript类型 - tuple类型

- 元组类型

```js
// 保存我的个人信息: why 18 1.88

// 1.使用数组类型
// 不合适: 数组中最好存放相同的数据类型, 获取值之后不能明确的知道对应的数据类型
const info1: any[] = ["why", 18, 1.88]


// 2.使用对象类型(最多)
const info2 = {
  name: "why",
  age: 18,
  height: 1.88
}

// 3.使用元组类型
// 元组数据结构中可以存放不同的数据类型, 取出来的item也是有明确的类型
const info3: [string, number, number] = ["why", 18, 1.88]
const value2 = info3[2]


// 在函数中使用元组类型是最多的(函数的返回值)
// 元组：[number, (newValue: number) => void]
function useState(initialState: number): [number, (newValue: number) => void] {
  let stateValue = initialState
  function setValue(newValue: number) {
    stateValue = newValue
  }
  return [stateValue, setValue]
}

const [count, setCount] = useState(10)
setCount(100)
```

![TypeScript类型 - tuple类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\TypeScript类型 - tuple类型.png)

### Tuple的应用场景

![Tuple的应用场景](E:\AB--电脑备份\现在\StudyCode\img-typescript\Tuple的应用场景.png)

## TypeScript语法细节

### 联合类型

- 或者

```js
function printID(id: number | string) {
  // 前提：类型缩小；因为参数类型不确定
  if (typeof id === "string") {
    console.log(id.length)
  } else {
    console.log(id)
  }
}

printID("abc")
```

![联合类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\联合类型.png)

### 使用联合类型

![使用联合类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\使用联合类型.png)

### 类型别名

- 定义非对象类型时, 肯定使用type
- 定义对象类型的时候, 都可以
  * interface更加强大, 扩展性更强
  * 推荐使用interface

- type

```js
// 类型别名: type
type MyNumber = number

// 给ID的类型起一个别名
type IDType = number | string
```

![类型别名](E:\AB--电脑备份\现在\StudyCode\img-typescript\类型别名.png)

### 接口的声明

- 定义非对象类型时, 肯定使用type
- 定义对象类型的时候, 都可以
  * interface更加强大, 扩展性更强
  * 推荐使用interface

- 接口: interface

```js
// 1.区别一: type类型使用范围更广, 接口类型只能用来声明对象
type MyNumber = number
type IDType = number | string


// 2.区别二: 在声明对象时, interface可以多次声明
// 2.1. type不允许两个相同名称的别名同时存在
type PointType1 = {
  x: number
  y: number
}

type PointType1 = {
  z?: number
}


// 2.2. interface可以多次声明同一个接口名称，组合到一起
interface PointType2 {
  x: number
  y: number
}

interface PointType2 {
  z: number
}

const point: PointType2 = {
  x: 100,
  y: 200,
  z: 300
}


// 3.interface支持继承的
interface IPerson {
  name: string
  age: number
}

interface IKun extends IPerson {
  kouhao: string
}

const ikun1: IKun = {
  kouhao: "你好",
  name: "kobe",
  age: 30
}
```

![接口的声明](E:\AB--电脑备份\现在\StudyCode\img-typescript\接口的声明.png)

### interface和type区别

![interface和type区别](E:\AB--电脑备份\现在\StudyCode\img-typescript\interface和type区别.png)

### 交叉类型

- 并且

```js
// 交叉类型: 两种(多种)类型要同时满足
type NewType = number & string // 错误，没有意义

interface IKun {
  name: string
  age: number
}

interface ICoder {
  name: string
  coding: () => void
}
// 正确
type InfoType = IKun & ICoder
```

![交叉类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\交叉类型.png)

### 交叉类型的应用

![交叉类型的应用](E:\AB--电脑备份\现在\StudyCode\img-typescript\交叉类型的应用.png)

### 类型断言as

- 在不确定类型时，指定 类型

![类型断言as](E:\AB--电脑备份\现在\StudyCode\img-typescript\类型断言as.png)

### 非空类型断言!

- 只有确保,一定有值的情况, 才能使用

```js
// 定义接口
interface IPerson {
  name: string
  age: number
  // 可选 
  friend?: {
    name: string
  }
}

const info: IPerson = {
  name: "why",
  age: 18
}

// 访问属性: 可选链: ?.
console.log(info.friend?.name)

// 属性赋值:
// 解决方案一: 类型缩小
if (info.friend) {
  info.friend.name = "kobe"
}

// 解决方案二: 非空类型断言(有点危险, 只有确保friend一定有值的情况, 才能使用)
info.friend!.name = "james"
```

![非空类型断言!](E:\AB--电脑备份\现在\StudyCode\img-typescript\非空类型断言!.png)

### 字面量类型

- 字面量类型经常和联合类型一起使用

```js
// 1.字面量类型的基本使用
const name: "why" = "why"
let age: 18 = 18

// 2.将多个字面量类型联合起来 |
type Direction = "left" | "right" | "up" | "down"
const d1: Direction = "left" // 只能是上面4个中的一个

// 封装请求方法
type MethodType = "get" | "post"
function request(url: string, method: MethodType) {
}

request("http://codercba.com/api/aaa", "post")

// TS细节
const info = {
  url: "xxxx",
  method: "post"
}
// 下面的做法是错误: info.method获取的是string类型；method的类型只能是 get post
request(info.url, info.method)

// 解决方案一: info.method进行类型断言；指定为post类型
request(info.url, info.method as "post")

// 解决方案二: 直接让info对象类型是一个字面量类型
const info2: { url: string, method: "post" } = {
  url: "xxxx",
  method: "post"
}

// as const 指定类型为本身值;字面量推理
const info2 = {
  url: "xxxx",
  method: "post"
} as const
// xxx 本身就是一个string
request(info2.url, info2.method)
```

![字面量类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\字面量类型.png)

### 字面量推理

![字面量推理](E:\AB--电脑备份\现在\StudyCode\img-typescript\字面量推理.png)

### 类型缩小

*  typeof
*  平等 ===/!==
*  instanceof
*  in

```js
// 1.typeof: 使用的最多
function printID(id: number | string) {
  if (typeof id === "string") {
    console.log(id.length, id.split(" "))
  } else {
    console.log(id)
  }
}


// 2.===/!==: 方向的类型判断
type Direction = "left" | "right" | "up" | "down"
function switchDirection(direction: Direction) {
  if (direction === "left") {
    console.log("左:", "角色向左移动")
  } else if (direction === "right") {
    console.log("右:", "角色向右移动")
  } else if (direction === "up") {
    console.log("上:", "角色向上移动")
  } else if (direction === "down") {
    console.log("下:", "角色向下移动")
  }
}


// 3. instanceof: 传入一个日期, 打印日期
function printDate(date: string | Date) {
  // instanceof 判断实例
  if (date instanceof Date) {
    console.log(date.getTime())
  } else {
    console.log(date)
  }
}


// 4.in: 判断是否有某一个属性
interface ISwim {
  swim: () => void
}

interface IRun {
  run: () => void
}

function move(animal: ISwim | IRun) {
  // animal 有没有 swim
  if ("swim" in animal) {
    animal.swim()
  } else if ("run" in animal) {
    animal.run()
  }
}

const fish: ISwim = {
  swim: function() {}
}

const dog: IRun = {
  run: function() {}
}

move(fish)
move(dog)
```

![类型缩小](E:\AB--电脑备份\现在\StudyCode\img-typescript\类型缩小.png)

### typeof

![typeof](E:\AB--电脑备份\现在\StudyCode\img-typescript\typeof.png)

### 平等缩小

![平等缩小](E:\AB--电脑备份\现在\StudyCode\img-typescript\平等缩小.png)

### instanceof

![instanceof](E:\AB--电脑备份\现在\StudyCode\img-typescript\instanceof.png)

### in操作符

![in操作符](E:\AB--电脑备份\现在\StudyCode\img-typescript\in操作符.png)

### TypeScript函数类型

```js
// 方案一: 函数类型表达式 function type expression

// 函数类型: (参数列表、类型) => 返回值类型
type BarType = (num1: number) => number
// bar函数的类型、参数类型、返回值类型
const bar: BarType = (arg: number): number => {
  return 123
}

// 函数类型 
type CalcType = (num1: number, num2: number) => number
// 1.函数的定义
function calc(calcFn: CalcType) {
  const num1 = 10
  const num2 = 20
  const res = calcFn(num1, num2)
}
// 2.函数的调用
function sum(num1: number, num2: number) {
  return num1 + num2
}
calc(sum)
```

![TypeScript函数类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\TypeScript函数类型.png)

### 传入的函数参数

```js
// TypeScript对于传入的函数类型的多余的参数会被忽略掉(the extra arguments are simply ignored.)
type CalcType = (num1: number, num2: number) => number
function calc(calcFn: CalcType) {
  calcFn(10, 20)
}
// 传入的函数的参数，不做校验
calc(function(num) {
  return 123
})
```

### TypeScript函数类型解析

![TypeScript函数类型解析](E:\AB--电脑备份\现在\StudyCode\img-typescript\TypeScript函数类型解析.png)

### 函数添加类型

- 函数类型表达式: () => void
- 函数调用签名: interface { 其他属性; (): void }
- 函数构造签名: interface { 其他属性; new (): void }

```js
// 1.函数类型表达式，不能添加属性;（参数列表）=> 返回值类型
type BarType = (num1: number) => number

// 2.函数的调用签名(从对象的角度来看待这个函数, 也可以有其他属性)
interface IBar {
  name: string
  age: number
  // 函数可以调用: 函数调用签名；（参数列表）：返回值类型
  (num1: number): number
}

const bar: IBar = (num1: number): number => {
  return 123
}

bar.name = "aaa"
bar.age = 18
bar(123)


// 开发中如何选择:
// 1.如果只是描述函数类型本身(函数可以被调用), 使用函数类型表达式(Function Type Expressions)
// 2.如果在描述函数作为对象可以被调用, 同时也有其他属性时, 使用函数调用签名(Call Signatures)
```

### 调用签名（Call Signatures）

![调用签名（Call Signatures）](E:\AB--电脑备份\现在\StudyCode\img-typescript\调用签名（Call Signatures）.png)

### 构造签名 （Construct Signatures）

```js
class Person {
}

interface ICTORPerson {
  // new 的实例的类型
  new (): Person
}

function factory(fn: ICTORPerson) {
  const f = new fn()
  return f
}

factory(Person)
```

![构造签名 （Construct Signatures）](E:\AB--电脑备份\现在\StudyCode\img-typescript\构造签名 （Construct Signatures）.png)

### 参数的可选类型

```js
// y就是一个可选参数
// 可选参数类型是什么? number | undefined 联合类型
function foo(x: number, y?: number) {
  if (y !== undefined) {
  }
}
```

![参数的可选类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\参数的可选类型.png)

### 默认参数

```js
// 函数的参数可以有默认值
// 1.有默认值的情况下, 参数的类型注解可以省略
// 2.有默认值的参数, 是可以接收一个undefined的值
function foo(x: number, y = 100) {
  console.log(y + 10)
}

foo(10)
foo(10, undefined)
```

![默认参数](E:\AB--电脑备份\现在\StudyCode\img-typescript\默认参数.png)

### 剩余参数

```js
// 剩余参数，放入数组中，类型为string | number
function foo(...args: (string | number)[]) {}
foo(123, 321)
```

![剩余参数](E:\AB--电脑备份\现在\StudyCode\img-typescript\剩余参数.png)

### 函数的重载（了解）

```js
// 3.TypeScript中函数的重载写法
// 3.1.先编写重载签名，表示 函数的调用形式；（参数列表）：返回值
function add(arg1: number, arg2: number): number
function add(arg1: string, arg2: string): string

// 3.2.再编写通用的函数实现；函数只能是2个重载签名中的一个
function add(arg1: any, arg2: any): any {
  return arg1 + arg2
}

add(10, 20)
add("aaa", "bbb")
// 不能被调用，参数类型错误
add("aaa", 111)
add()// 不能直接调用，需要参数
```

![函数的重载（了解）](E:\AB--电脑备份\现在\StudyCode\img-typescript\函数的重载（了解）.png)

### sum函数的重载

![sum函数的重载](E:\AB--电脑备份\现在\StudyCode\img-typescript\sum函数的重载.png)



### 联合类型和重载

```js
// 联合类型实现(可以使用联合类型实现的情况, 尽量使用联合类型)
function getLength(arg: string | any[]) {
  return arg.length
}

getLength("aaaaa")
getLength(["abc", "cba", "nba"])
```

![联合类型和重载](E:\AB--电脑备份\现在\StudyCode\img-typescript\联合类型和重载.png)

### ts配置文件

- tsc --init

### 可推导的this类型

- 在设置配置选项(编译选项compilerOptions, noImplicitThis设置为true, 不允许模糊的this存在)
- 一般为 false

```js
// 1.对象中的函数中的this
const obj = {
  name: "why",
  studying: function() {
    // 默认情况下, this是any类型；配置后，会根据上下文自动推导this = obj
    console.log(this, "studying")
  }
}

obj.studying()


// 2.普通的函数；指定 this 类型；作为函数的第一个参数；第二个参数是传入的参数
function foo(this: { name: string }, info: {name: string}) {
  console.log(this, info)
}

foo.call({ name: "why" }, { name: "kobe" })
```

- https://mp.weixin.qq.com/s/hYm0JgBI25grNG_2sCRlTA；

![可推导的this类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\可推导的this类型.png)

### this的编译选项

![this的编译选项](E:\AB--电脑备份\现在\StudyCode\img-typescript\this的编译选项.png)

### 指定this的类型

![指定this的类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\指定this的类型.png)

### this相关的内置工具

```js
function foo(this: { name: string }, info: {name: string}) {
  console.log(this, info)
}

// FooType = typeof foo 是 foo函数 类型
type FooType = typeof foo

// 1.ThisParameterType: 获取FooType类型中this的类型
type FooThisType = ThisParameterType<FooType>


// 2.OmitOmitThisParameter: 删除this参数类型后, 剩余的函数类型
type PureFooType = OmitThisParameter<FooType>


// 3.ThisType: 用于绑定一个上下文的this

interface IState {
  name: string
  age: number
}
interface IStore {
  state: IState
  eating: () => void
  running: () => void
}
// store的类型是IStore，this是IState；ThisType<IState>给store中的this指定为IState
const store: IStore & ThisType<IState> = {
  state: {
    name: "why",
    age: 18
  },
  eating: function() {
    console.log(this.name)
  },
  running: function() {
    console.log(this.name)
  }
}
```

![this相关的内置工具](E:\AB--电脑备份\现在\StudyCode\img-typescript\this相关的内置工具.png)

### this相关的内置工具 - ThisType

![this相关的内置工具 - ThisType](E:\AB--电脑备份\现在\StudyCode\img-typescript\this相关的内置工具 - ThisType.png)

## TS的学习阶段划分

- 大多类型正确使用，少数使用any
  - 现在，到这里即可
- 封装ts类型、使用内置工具
- 看ts源码

![TS的学习阶段划分](E:\AB--电脑备份\现在\StudyCode\img-typescript\TS的学习阶段划分.png)

## TypeScript面向对象

### 认识类的使用

![认识类的使用](E:\AB--电脑备份\现在\StudyCode\img-typescript\认识类的使用.png)

### 类的定义

```js
class Person {
  // 如果有成员属性: 必须，声明成员属性
  name: string
  age: number

  // 初始化方式1：默认值
  // name: string =''
  // age: number = 0

  // 初始化方式1：constructor
  // constructor(name: string, age: number) 传入参数类型
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + " eating")
  }
}

// 实例对象: instance
const p1 = new Person("why", 18)
```

![类的定义](E:\AB--电脑备份\现在\StudyCode\img-typescript\类的定义.png)

### 类的继承

![类的继承](E:\AB--电脑备份\现在\StudyCode\img-typescript\类的继承.png)

### 类的成员修饰符

```js
// public 默认，公共的
// private  私有，只有在类内部才能访问，实例不能访问
// protected  在子类中是否可以访问

class Person {
  protected name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // 方法变成私有方法: 只有在类内部才能访问
  private eating() {
    console.log("吃东西", this.age, this.name)
  }
}
```

![类的成员修饰符](E:\AB--电脑备份\现在\StudyCode\img-typescript\类的成员修饰符.png)

### 只读属性readonly

```js
class Person {
  // 只读属性
  readonly name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// 类和实例之间的关系(重要)
const p = new Person("why", 18)

// p.name = "kobe" 只读属性不能进行写入操作
```

![只读属性readonly](E:\AB--电脑备份\现在\StudyCode\img-typescript\只读属性readonly.png)

### getters_setters

- 访问 类的私有属性

```js
class Person {
  // 私有属性: 属性前面会使用_
  private _name: string

  constructor(name: string, age: number) {
    this._name = name
  }

  // setter/getter: 对属性的访问进行拦截操作
  set name(newValue: string) {
    this._name = newValue
  }

  get name() {
    return this._name
  }
}

const p = new Person("why", 100)
p.name = "kobe"
```

![getters_setters](E:\AB--电脑备份\现在\StudyCode\img-typescript\getters_setters.png)

### 参数属性（Parameter Properties）

```js
class Person {
  // 语法糖，必须加 修饰符
  constructor(public name: string, private _age: number, readonly height: number) {
  }
}

const p = new Person("why", 18, 1.88)
console.log(p.name, p.height)
```

![参数属性（Parameter Properties）](E:\AB--电脑备份\现在\StudyCode\img-typescript\参数属性（Parameter Properties）.png)

### 抽象类abstract

```js
// 父类
abstract class Shape {
  // getArea方法只有声明没有实现体
  // 实现让子类自己实现
  // 可以将getArea方法定义为抽象方法: 在方法的前面加abstract
  // 抽象方法必须出现在抽象类中, 类前面也需要加abstract
  abstract getArea()
}

// 继承
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super()
  }
  getArea() {
    return this.width * this.height
  }
}
class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }
  getArea() {
    return this.radius ** 2 * Math.PI
  }
}
class Triangle extends Shape {
  getArea() {
    return 100
  }
}


// 通用的函数
function calcArea(shape: Shape) {
  return shape.getArea()
}
// 使用
calcArea(new Rectangle(10, 20))
calcArea(new Circle(5))
calcArea(new Triangle())
```

![抽象类abstract](E:\AB--电脑备份\现在\StudyCode\img-typescript\抽象类abstract.png)

### 抽象类演练

![抽象类演练](E:\AB--电脑备份\现在\StudyCode\img-typescript\抽象类演练.png)

### 类的类型

```js
// TypeScript对于类型检测的时候使用的鸭子类型
// 鸭子类型: 如果一只鸟, 走起来像鸭子, 游起来像鸭子, 看起来像鸭子, 那么你可以认为它就是一只鸭子
// 鸭子类型, 只关心属性和行为, 不关心你具体是不是对应的类型

class Person {
  constructor(public name: string, public age: number) {}
  running() {}
}

class Dog {
  constructor(public name: string, public age: number) {}
  running() {}
}

function printPerson(p: Person) {
  console.log(p.name, p.age)
}
// 传入 类型是 Person类
printPerson(new Person("why", 18))
// 参数属性一致
printPerson({name: "kobe", age: 30, running: function() {}})
// 参数属性一致
printPerson(new Dog("旺财", 3))
```

![类的类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\类的类型.png)

### 类作用

- 可以创建类对应的实例对象
- 类本身可以作为这个实例的类型
- 类也可以当中有一个构造签名的函数

### 对象类型的属性修饰符（Property Modifiers）

```js
// 定义对象类型
type IPerson = {
  // 属性?: 可选的属性
  name?: string
  // readonly: 只读的属性
  readonly age: number
}
```

![对象类型的属性修饰符（Property Modifiers）](E:\AB--电脑备份\现在\StudyCode\img-typescript\对象类型的属性修饰符（Property Modifiers）.png)

#### 索引签名（Index Signatures）

- 当不知道 类型中的属性的所有名字，但知道这些值的特征
- 使用 索引签名 来描述值的类型

```js
interface IIndexType {
  // 返回值类型的目的是告知通过索引去获取到的值是什么类型
  // index 类型 只能是 string、number 其一；通过 index访问值，值的类型
  // [index: number]: string
  // [index: string]: any
  [index: string]: string
}
```

```js
interface ICollection {
  // 索引签名，返回值是 number
  [index: string]: number

  length: number
}

function iteratorCollection(collection: ICollection) {
  console.log(collection[0])
  console.log(collection[1])
}

iteratorCollection({ name: 111, age: 18, length: 10 })

// ============================================
// 索引签名: 可以通过字符串索引, 去获取到一个值, 也是字符串
interface ICollection {
  [index: number]: string
  length: number
}

function printCollection(collection: ICollection) {
  for (let i = 0; i < collection.length; i++) {
    const item = collection[i]
    console.log(item.length)
  }
}

const array = ["abc", "cba", "nba"]
const tuple: [string, string] = ["why", "广州"]
printCollection(array)
printCollection(tuple)
```

![索引签名（Index Signatures）](E:\AB--电脑备份\现在\StudyCode\img-typescript\索引签名（Index Signatures）.png)

### 多个索引签名

```js
interface IIndexType {
  // 两个索引类型的写法；相当于 联合类型；或者；
  [index: number]: string
  [key: string]: any
}

const names: IIndexType = ["abc", "cba", "nba"]
const item1 = names[0] // string
const forEachFn = names["forEach"] // any
```

### 接口继承

```js
interface IPerson {
  name: string
  age: number
}

// 可以从其他的接口中继承过来属性
// 1.减少了相同代码的重复编写
// 2.如果使用第三库, 给我们定义了一些属性
//  > 自定义一个接口, 同时你希望自定义接口拥有第三方某一个类型中所有的属性
//  > 可以使用继承来完成
interface IKun extends IPerson {
  slogan: string
}

const ikun: IKun = {
  name: "why",
  age: 18,
  slogan: "hh"
}
```

![接口继承](E:\AB--电脑备份\现在\StudyCode\img-typescript\接口继承.png)

### 接口的实现

```js
interface IKun {
  name: string
  age: number
  slogan: string

  playBasketball: () => void
}

interface IRun {
  running: () => void
}

// 正常使用
const ikun: IKun = {
  name: "why",
  age: 18,
  slogan: "你干嘛!",
  playBasketball: function() {}
}

// 接口被类实现；implements 实现
class Person implements IKun, IRun {
  name: string
  age: number
  slogan: string

  playBasketball() {
    
  }

  running() {

  }
}
// 所有实例都有 IKun, IRun 类型 
const ikun2 = new Person()
const ikun3 = new Person()
```

![接口的实现](E:\AB--电脑备份\现在\StudyCode\img-typescript\接口的实现.png)

### 抽象类和接口的区别（了解）

![抽象类和接口的区别（了解）](E:\AB--电脑备份\现在\StudyCode\img-typescript\抽象类和接口的区别（了解）.png)

![接口和抽象类的区别](E:\AB--电脑备份\现在\StudyCode\img-typescript\接口和抽象类的区别.png)

### 严格的字面量赋值检测

```js
interface IPerson {
  name: string
  age: number
}

// 第一次创建的对象字面量, 称之为fresh(新鲜的)
// 对于新鲜的字面量, 会进行严格的类型检测. 必须完全满足类型的要求(不能有多余的属性)

// 新鲜的
const obj2 = {
  name: "why",
  age: 18,

  height: 1.88
}
// 不是新鲜的
const p: IPerson = obj2
```

![严格的字面量赋值检测](E:\AB--电脑备份\现在\StudyCode\img-typescript\严格的字面量赋值检测.png)

### 为什么会出现这种情况呢？

![为什么会出现这种情况呢？](E:\AB--电脑备份\现在\StudyCode\img-typescript\为什么会出现这种情况呢？.png)

### TypeScript枚举类型

```js
// 定义枚举类型:包含了所有可能出现的值
enum Direction {
  LEFT,
  RIGHT
}

function turnDirection(direction: Direction) {
  switch(direction) {
    case Direction.LEFT:
      console.log("角色向左移动一个格子")
      break
    case Direction.RIGHT:
      console.log("角色向右移动一个格子")
      break
  }
}

// 监听键盘的点击
turnDirection(Direction.LEFT)
```

![TypeScript枚举类型](E:\AB--电脑备份\现在\StudyCode\img-typescript\TypeScript枚举类型.png)

### 枚举类型的值

![枚举类型的值](E:\AB--电脑备份\现在\StudyCode\img-typescript\枚举类型的值.png)

## TypeScript泛型编程

### 认识泛型

- 将参数类型当做参数 传入

![认识泛型](E:\AB--电脑备份\现在\StudyCode\img-typescript\认识泛型.png)

### 泛型实现类型参数化

```js
// 第一个 type 是接受类型，第二个 type是参数的类型，第三个 type是返回值的类型
function bar<Type>(arg: Type): Type {
  return arg
}

// <number> 传入 number 类型
const res1 = bar<number>(123)
const res2 = bar<string>("abc")
// 2.2. 省略的写法；类型推导
const res4 = bar("aaaaaaaaa")
const res5 = bar(11111111)
```

```js
function useState<Type>(initialState: Type): [Type, (newState: Type) => void] {
  let state = initialState
  function setState(newState: Type) {
    state = newState
  }

  return [state, setState]
}

const [count, setCount] = useState(100) // number 类型推导
const [message, setMessage] = useState("Hello World") // string
const [banners, setBanners] = useState<any[]>([]) // any[] 指定类型
```

![泛型实现类型参数化](E:\AB--电脑备份\现在\StudyCode\img-typescript\泛型实现类型参数化.png)

### 泛型的基本补充

```js
function foo<T, E>(arg1: T, arg2: E) {

}

foo(10, 20)
foo(10, "abc")
foo<string, { name: string }>("abc", { name: "why" })
```

![泛型的基本补充](E:\AB--电脑备份\现在\StudyCode\img-typescript\泛型的基本补充.png)

### 泛型接口

```js
// Type 是类型，string 是默认值
interface IKun<Type = string> {
  name: Type
  age: number
  slogan: Type
}

// 使用 IKun 接口时，传入 类型 string
const kunkun: IKun<string> = {
  name: "why",
  age: 18,
  slogan: "哈哈哈"
}
```

![泛型接口](E:\AB--电脑备份\现在\StudyCode\img-typescript\泛型接口.png)

### 泛型类

```js
class Point<Type = number> {
  x: Type
  y: Type
  constructor(x: Type, y: Type) {
    this.x = x
    this.y = y
  }
}

const p1 = new Point(10, 20)
const p2 = new Point("123", "321") // 自动推导，类型是 string
```

![泛型类](E:\AB--电脑备份\现在\StudyCode\img-typescript\泛型类.png)

### 泛型约束（Generic Constraints）

- 传入的类型不同，但是都有一个共同 属性

```js
// 接口
interface ILength {
  // 必须有 length属性，类型是 number 
  length: number
}

// 获取传入的内容, 这个内容必须有length属性
// Type相当于是一个变量, 用于记录本次调用的类型, 所以在整个函数的执行周期中, 一直保留着参数的类型
// type 每次传入不同。但是都有 length属性，且 length值是number 类型，通过 extends
// 定义共同属性 ILength ，Type extends ILength 实现，所有类型都有了 ILength
function getInfo<Type extends ILength>(args: Type): Type {
  return args
}

const info1 = getInfo("aaaa")
const info2 = getInfo(["aaa", "bbb", "ccc"])
const info3 = getInfo({ length: 100 })
```

![泛型约束（Generic Constraints）](E:\AB--电脑备份\现在\StudyCode\img-typescript\泛型约束（Generic Constraints）.png)

![泛型约束（Generic Constraints）2](E:\AB--电脑备份\现在\StudyCode\img-typescript\泛型约束（Generic Constraints）2.png)

### 泛型约束中使用类型参数

- 要求：getObjectProperty传入的key类型, 是obj当中key的其中之一

```JS
// 要求：getObjectProperty传入的key类型, 是obj当中key的其中之一
// 泛型约束中使用类型参数

interface IKun {
  name: string
  age: number
}

// K extends keyof O ；K 来自于 O ；K = "name"|"age"
function getObjectProperty<O, K extends keyof O>(obj: O, key: K){
  return obj[key]
}

const info = {
  name: "why",
  age: 18,
  height: 1.88
}
// name 必须是 info对象的key之一
const name = getObjectProperty(info, "name")
// 传入不同 对象
const name = getObjectProperty(data, "img")
```

### 映射类型（Mapped Types）

- 一个类型 基于 另一个类型

```js
// TypeScript提供了映射类型: 函数

// 映射类型不能使用interface定义

type MapPerson<Type> = {
  // 索引类型 依次 进行使用；aaa 自定义 形参名字
  [aaa in keyof Type]: Type[aaa]
  // = 
  // name: string
  // age: number
}

interface IPerson {
  name: string
  age: number
}

type NewPerson = MapPerson<IPerson>
```

![映射类型（Mapped Types）](E:\AB--电脑备份\现在\StudyCode\img-typescript\映射类型（Mapped Types）.png)

### 映射修饰符（Mapping Modifiers）

- 符号，不写，默认 + 

```js
type MapPerson<Type> = {
  // ? 可选、readonly 只读，映射的每个类型，都是 可选、只读
  readonly [Property in keyof Type]?: Type[Property]
}

interface IPerson {
  name: string
  age: number
  height: number
  address: string
}

type IPersonOptional = MapPerson<IPerson>

const p: IPersonOptional = {

}
```

```js
type MapPerson<Type> = {
  // 修饰符的符号；- 是删除 修饰符；+ 是 添加 修饰符
  // 所有类型 删除 可选、只读
  -readonly [Property in keyof Type]-?: Type[Property]
}

interface IPerson {
  name: string
  age?: number
  readonly height: number
  address?: string
}
```

![映射修饰符（Mapping Modifiers）](E:\AB--电脑备份\现在\StudyCode\img-typescript\映射修饰符（Mapping Modifiers）.png)

### 内置工具和类型体操

-  https://github.com/type-challenges/type-challenges 
-  https://ghaiklor.github.io/type-challenges-solutions/en/

![内置工具和类型体操](E:\AB--电脑备份\现在\StudyCode\img-typescript\内置工具和类型体操.png)

### 条件类型（Conditional Types）

* as
* infer
* 分发

```js
type IDType = number | string

// 判断  boolean 是否 继承 IDType
type ResType = boolean extends IDType? true: false

// 举个栗子: 函数的重载
// function sum(num1: number, num2: number): number
// function sum(num1: string, num2: string): string

function sum<T extends number | string>(num1: T, num2: T): T extends number? number:string

function sum(num1, num2) {
  return num1 + num2
}

const res = sum(20, 30)
const res2 = sum("abc", "cba")
```

![条件类型（Conditional Types）](E:\AB--电脑备份\现在\StudyCode\img-typescript\条件类型（Conditional Types）.png)

### 在条件类型中推断（infer）

```js
type CalcFnType = (num1: number, num2: string) => number

function foo() {
  return "abc"
}

// 实现: 获取一个函数的返回值类型
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R? R: never
// 实现: 获取一个函数的 参数 类型
type MyParameterType<T extends (...args: any[]) => any> = T extends (...args: infer A) => any? A: never

// 获取返回值类型
type MYCalcReturnType = MyReturnType<CalcFnType>
type MYFooReturnType = MyReturnType<typeof foo>
// 获取参数类型
type CalcParameterType = MyParameterType<CalcFnType>

// ReturnType 内置工具（获取一个函数的返回值类型）
type CalcReturnType = ReturnType<CalcFnType>
type FooReturnType = ReturnType<typeof foo>
```

![在条件类型中推断（inter）](E:\AB--电脑备份\现在\StudyCode\img-typescript\在条件类型中推断（inter）.png)

### 分发条件类型（Distributive Conditional Types）

- 如果传入的是 联合类型，会 自动 分发类型
- 循环执行 number|string 
- 得到  number[]|string[] 

```js
type toArray<T> = T extends any? T[]: never

// number 类型 转为 number[]
type NumArray = toArray<number>

// number[]|string[]
type NumAndStrArray = toArray<number|string>
```

![分发条件类型（Distributive Conditional Types）](E:\AB--电脑备份\现在\StudyCode\img-typescript\分发条件类型（Distributive Conditional Types）.png)

### Partial -Type

```js
interface IKun {
  name: string
  age: number
  slogan?: string
}

// 类型体操
type HYPartial<T> = {
  [P in keyof T]?: T[P] 
}


// IKun都变成可选的
type IKunOptional = HYPartial<IKun>
```

![Partial](E:\AB--电脑备份\现在\StudyCode\img-typescript\Partial.png)

### Required -Type

```js
interface IKun {
  name: string
  age: number
  slogan?: string
}

// 类型体操
type HYRequired<T> = {
  [P in keyof T]-?: T[P] 
}


// IKun都变成 必选的
type IKun2 = Required<IKun>
```

![Required](E:\AB--电脑备份\现在\StudyCode\img-typescript\Required.png)

### Readonly -Type

```js
interface IKun {
  name: string
  age: number
  slogan?: string
}

// 类型体操
type HYReadonly<T> = {
  readonly [P in keyof T]: T[P] 
}


// IKun都变成 只读的
type IKun2 = HYReadonly<IKun>
```

![Readonly](E:\AB--电脑备份\现在\StudyCode\img-typescript\Readonly.png)

### Record -Keys, Type

```js
interface IKun {
  name: string
  age: number
  slogan?: string
}
type t1 = "上海" | "北京" | "洛杉矶"

type HYRecord<Keys extends keyof any, T> = {
  // key : value
  [P in Keys]: T
}

// HYRecord ，传入2个泛型，生成一个对象，对象的key 必须是 t1中的类型，对象的key 的值必须是 IKun类型
type IKuns = HYRecord<t1, IKun>
```

![Record Keys, Type](E:\AB--电脑备份\现在\StudyCode\img-typescript\Record Keys, Type.png)

### Pick -Keys, Type

- 挑选出部分类型

```js
interface IKun {
  name: string
  age: number
  slogan?: string
}

type HYPick<T, K extends keyof T> = {
  // key ： value
  [P in K]: T[P]
}

// 从 IKun 中 ，拿出 slogan"|"name ，2个类型，给 IKuns
type IKuns = HYPick<IKun, "slogan"|"name">
```

![Pick](E:\AB--电脑备份\现在\StudyCode\img-typescript\Pick.png)

### Omit -Keys, Type

![Omit](E:\AB--电脑备份\现在\StudyCode\img-typescript\Omit.png)

### Exclude -UnionType, ExcludedMembers

```js
type IKun = "sing" | "dance" | "rap"

// e 不在 t，返回t，过滤 rap
type HYExclude<T, E> = T extends E? never: T

type IKuns = HYExclude<IKun, "rap">
```

![Exclude](E:\AB--电脑备份\现在\StudyCode\img-typescript\Exclude.png)

### Extract -Type, Union

```js
type IKun = "sing" | "dance" | "rap"

// "rap"|"dance" 在 T中，返回 t
type HYExtract<T, E> = T extends E? T: never

type IKuns = HYExtract<IKun, "rap"|"dance">
```

![Extract](E:\AB--电脑备份\现在\StudyCode\img-typescript\Extract.png)

### NonNullable -Type

```js
type IKun = "sing" | "dance" | "rap" | null | undefined

// 排除 null | undefined
type HYNonNullable<T> = T extends null|undefined ? never: T

type IKuns = HYNonNullable<IKun>
```

![NonNullable](E:\AB--电脑备份\现在\StudyCode\img-typescript\NonNullable.png)

### ReturnType -Type

![ReturnType](E:\AB--电脑备份\现在\StudyCode\img-typescript\ReturnType.png)

### InstanceType -Type

![InstanceType](E:\AB--电脑备份\现在\StudyCode\img-typescript\InstanceType.png)

## TypeScript知识扩展

### TypeScript模块化

```js
// 导入的是类型, 推荐在类型的前面加上type关键词，用于 语义化、打包时直接移除
import type {  price, date } from "./utils/format"
```

![TypeScript模块化](E:\AB--电脑备份\现在\StudyCode\img-typescript\TypeScript模块化.png)

### 非模块（Non-modules）

![非模块（Non-modules）](E:\AB--电脑备份\现在\StudyCode\img-typescript\非模块（Non-modules）.png)

### 内置类型导入（Inline type imports）

![内置类型导入（Inline type imports）](E:\AB--电脑备份\现在\StudyCode\img-typescript\内置类型导入（Inline type imports）.png)

### 命名空间namespace（了解）

![命名空间namespace（了解）](E:\AB--电脑备份\现在\StudyCode\img-typescript\命名空间namespace（了解）.png)

### 类型的查找

- 类型声明文件
  - .d.ts
  - 由于声明 类型
  - 告知 ts 现在有哪些类型
  - ts.config 会查找 类型声明文件
  - 类型声明文件包括：
    - 内置类型声明（自带）
    - 外部定义类型声明（第三方库）
    - 自定义类型声明（自己添加的）

![类型的查找](E:\AB--电脑备份\现在\StudyCode\img-typescript\类型的查找.png)

### 内置类型声明

- https://github.com/microsoft/TypeScript/tree/main/lib

![内置类型声明](E:\AB--电脑备份\现在\StudyCode\img-typescript\内置类型声明.png)

### 内置声明的环境

-  https://www.typescriptlang.org/tsconfig#lib

![内置声明的环境](E:\AB--电脑备份\现在\StudyCode\img-typescript\内置声明的环境.png)

### 外部定义类型声明 – 第三方库

- 当第三方库，没有 ts 声明文件时

  - 去 https://www.typescriptlang.org/dt/search?search= 这里，查找 对应库，安装库对应的 ts 库，即可
  - 或者 自己 自定义 第三方库的，类型声明文件

  ```js
  // declare 声明；
  // 声明 模块 lodash
  declare module "lodash" {
    // 模块中的 方法、方法的类型
    export function join(...args: any[]): any
  }
  
  // 声明 文件模块
  declare module "*.png"
  declare module "*.jpg"
  declare module "*.jpeg"
  declare module "*.svg"
  declare module "*.vue"
  
  // 为自己全局的 变量/函数/类 定义类型声明
  declare const whyName: string
  declare const whyAge: number
  declare const whyHeight: number
  declare function foo(bar: string): string
  ```

- CDN 引入

```js
  // html 通过 CDN 引入，全局使用
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js
  "></script>

  // 使用
$.ajax({
  url: "http://codercba.com:8000/home/multidata",
  success: function(res: any) {
    console.log(res)
  }
})

// 声明成模块(不合适)
// 声明命名空间
declare namespace $ {
  export function ajax(settings: any): any
}
```

- 库的GitHub地址：https://github.com/DefinitelyTyped/DefinitelyTyped/ 
- 该库查找声明安装方式的地址：https://www.typescriptlang.org/dt/search?search=

![外部定义类型声明 – 第三方库](E:\AB--电脑备份\现在\StudyCode\img-typescript\外部定义类型声明 – 第三方库.png)

### 外部定义类型声明 – 自定义声明

- 平时使用的代码中用到的类型, 直接在当前位置进行定义
  - 或者在业务文件夹某一个位置编写一个类型文件即可
- 全局的 类型 写到 自定义类型声明文件中

![外部定义类型声明 – 自定义声明](E:\AB--电脑备份\现在\StudyCode\img-typescript\外部定义类型声明 – 自定义声明.png)

### declare 声明模块

![declare 声明模块](E:\AB--电脑备份\现在\StudyCode\img-typescript\declare 声明模块.png)

### declare 声明文件

![declare 声明文件](E:\AB--电脑备份\现在\StudyCode\img-typescript\declare 声明文件.png)

### declare 命名空间

![declare 命名空间](E:\AB--电脑备份\现在\StudyCode\img-typescript\declare 命名空间.png)

### 认识tsconfig.json文件

- 定义 ts文件 的编译规则，编译成 js
- 让 编译器（vscode） 读取文件，根据文件配置，检查代码，提示错误
- 一般 使用默认，不用自己配置

![认识tsconfig.json文件](E:\AB--电脑备份\现在\StudyCode\img-typescript\认识tsconfig.json文件.png)

### tsconfig.json配置

![tsconfig.json配置](E:\AB--电脑备份\现在\StudyCode\img-typescript\tsconfig.json配置.png)

### tsconfig.json顶层选项

![tsconfig.json顶层选项](E:\AB--电脑备份\现在\StudyCode\img-typescript\tsconfig.json顶层选项.png)

### tsconfig.json文件

-  https://www.typescriptlang.org/tsconfig

![tsconfig.json文件](E:\AB--电脑备份\现在\StudyCode\img-typescript\tsconfig.json文件.png)

![tsconfig.json2](E:\AB--电脑备份\现在\StudyCode\img-typescript\tsconfig.json2.png)

### webpack配置ts

- ts-loader

```js
// 初始化 package.josn 文件
npm init
// 安装 webpack ; -D 只用于开发
npm i webpack webpack-cli -D
// 安装 ts-loader
npm i ts-loader -D
// 安装本地服务
npm i webpack-dev-server -D
// 生成 ts 配置文件：tsconfig.json
tsc --init

// 创建 webpack.config.js 配置文件 :
const path = require("path")
const HtmlWeabpckPlugin = require("html-webpack-plugin")
// 导出配置 
module.exports = {
  mode: "development",
  // 入口 
  entry: "./src/index.ts",
  // 出口 
  output: {
    path: path.resolve(__dirname, "./dist"),
    // 打包的文件 
    filename: "bundle.js"
  },
  resolve: {
    // 后缀名 
    extensions: [".ts", ".js", ".cjs", ".json"]
  },
  devServer: {},
  module: {
    // 规则 
    rules: [
      // ts-loader 
      {
        test: /\.ts$/,
        loader: "ts-loader"
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    // 模板
    new HtmlWeabpckPlugin({
      template: "./index.html"
    })
  ]
}

// 脚本命令启动
  "scripts": {
    "serve": "webpack serve",
    "build": "webpack"
  },
```

