# JS高级

- JS高级设计
- 你不知道的JS

![JavaScript高级总览](C:\Users\admin\Desktop\系统笔记\img_js_高级\JavaScript高级总览.png)

### JavaScript函数this指向

- this是在运行时才被绑定的，所以在运行时被谁调用，JS引擎会自动将谁绑定到this，this就是谁
  - JS引擎隐式绑定的

![this到底指向什么呢？](C:\Users\admin\Desktop\系统笔记\img_js_高级\this到底指向什么呢？.png)

------

### 规则一：默认绑定（讲过）

```js
    // "use strict"

    // 定义函数
    // 1.普通的函数被独立的调用
    function foo() {
      console.log("foo:", this)
    }
    foo() // win


    // 2.函数定义在对象中, 但是独立调用
    var obj = {
      name: "why",
      bar: function() {
        console.log("bar:", this)
      }
    }
    obj.bar() // obj对象
    var baz = obj.bar
    baz()  // win ,这个是独立函数调用


    // 3.高阶函数
    function test(fn) {
      fn() // win ,这个是独立函数调用
    }

    test(obj.bar)

    // 4.严格模式下, 独立调用的函数中的this指向的是undefined
```

![规则一：默认绑定（讲过）](C:\Users\admin\Desktop\系统笔记\img_js_高级\规则一：默认绑定（讲过）.png)

------

### 规则二：隐式绑定（讲过）

- JS引擎

```js
    // 你不知道的JavaScript(上中下)
    // 隐式绑定
    function foo() {
      console.log("foo函数:", this) // obj
    }

    var obj = {
      bar: foo
    }

    obj.bar() // this是在运行时才被绑定的，运行时被obj调用的，JS引擎会自动把obj绑定到foo内的this上，this是obj对象(js引擎隐式绑定的)
```

![规则二：隐式绑定（讲过）](C:\Users\admin\Desktop\系统笔记\img_js_高级\规则二：隐式绑定（讲过）.png)

------

###  new绑定

```js
    /*
      1.创建新的空对象
      2.将this指向这个空对象
      3.执行函数体中的代码
      4.没有显示返回非空对象时, 默认返回这个对象
    */
    function foo() {
      this.name = "why"
      console.log("foo函数:", this)
    }

    new foo()
```

### 规则三：显式绑定

```js
    // 显式绑定
    var obj = {
      name: "why"
    }

    function foo() {
      console.log("foo函数:", this)
    }

    // 执行函数, 并且函数中的this指向obj对象
    // obj.foo = foo
    // obj.foo()

    // 执行函数, 并且强制this就是obj对象
    foo.call(obj)
    // this指向的一般都是对象，如果不是对象，会先创建包装类类型
    foo.call(123) // number类型
    foo.call("abc") // string类型
```

![规则三：显式绑定](C:\Users\admin\Desktop\系统笔记\img_js_高级\规则三：显式绑定.png)

------

### call、apply、bind

```js
    // call/apply
    function foo(name, age, height) {
      console.log("foo函数被调用:", this)
      console.log("打印参数:", name, age, height)
    }

    // ()调用
    // foo("why", 18, 1.88)

    // apply
    // 第一个参数: 绑定this
    // 第二个参数: 传入额外的实参, 以数组的形式
    foo.apply("apply", ["kobe", 30, 1.98])

    // call
    // 第一个参数: 绑定this
    // 参数列表: 后续的参数以多参数的形式传递, 会作为实参
    foo.call("call", "james", 25, 2.05)
```

```js
    function foo(name, age, height, address) {
      console.log("foo:", this)
      console.log("参数:", name, age, height, address)
    }

    var obj = { name: "why" }

    // 需求: 调用foo时, 总是绑定到obj对象身上(不希望obj对象身上有函数)

    // 1.bind函数的基本使用,bind创建了一个新对象

    // var bar = foo.bind(obj)
    // bar() // this -> obj

    // 2.bind函数的其他参数(了解)
    var bar = foo.bind(obj, "kobe", 18, 1.88)
    
    // 独立函数，但是这个函数在创建的时候就已经把this绑定好了
    bar("james") 
```

![call、apply、bind](C:\Users\admin\Desktop\系统笔记\img_js_高级\call、apply、bind.png)

------

### 内置函数的绑定思考

```js
    // 1.定时器，严格、非严格，都是win
    setTimeout(function() {
      console.log("定时器函数:", this) // win
    }, 1000)


    // forEach，第二个参数是绑定的this
    var names = ["abc", "cba", "nba"]
    names.forEach(function(item) {
      console.log("forEach:", this) // this 是 "aaaa"
    }, "aaaa")
    names.forEach(function(item){
      console.log(this) // this 是 win
    })
```

![内置函数的绑定思考](C:\Users\admin\Desktop\系统笔记\img_js_高级\内置函数的绑定思考.png)

------

### new绑定

```js
// new绑定优先级高于隐式绑定
    var obj = {
      name: "why",
      foo: function() {
        console.log("foo:", this)
        console.log("foo:", this === obj) // false
      }
    }
    // 这里是 new obj.foo， 不是new obj
    new obj.foo() // this 是新创建的foo对象,new 的this指向新创建的对象,执行foo，这是new绑定；obj.foo 调用是隐式绑定
```

![new绑定](C:\Users\admin\Desktop\系统笔记\img_js_高级\new绑定.png)

------

### 规则优先级

- new > bind > apply/call  > 隐式绑定 > 默认绑定

```js
    function foo() {
      console.log("foo:", this)
    }

    // 比较优先级:

    // 1.显式绑定绑定的优先级高于隐式绑定

    // 1.1.测试一:apply高于默认绑定
    var obj = { foo: foo }
    obj.foo.apply("abc")
    obj.foo.call("abc")

    // 1.2.测试二:bind高于默认绑定
    var bar = foo.bind("aaa")
    var obj = {
      name: "why",
      baz: bar
    }
    obj.baz() // this是 aaa ，不是 obj；bind是显式绑定，调用是隐式绑定，显高于隐


    // 2.new绑定优先级高于隐式绑定
    var obj = {
      name: "why",
      foo: function() {
        console.log("foo:", this)
        console.log("foo:", this === obj) // false
      }
    }
    // 这里是 new obj.foo， 不是new obj
    new obj.foo() // this 是新创建的foo对象,new 的this指向新创建的对象,执行foo，这是new绑定；obj.foo 调用是隐式绑定


    // 3.new/显式
    // 3.1. new不可以和apply/call一起使用

    // 3.2. new优先级高于bind
    function foo() {
      console.log("foo:", this)
    }
    var bindFn = foo.bind("aaa")
    new bindFn() // this foo


    // 4.bind/apply优先级
    // bind优先级高于apply/call
    function foo() {
      console.log("foo:", this)
    }
    var bindFn = foo.bind("aaa")
    bindFn.call("bbb") // aaa

    // 5 new > bind > apply/call  > 隐式绑定 > 默认绑定
    // 显式绑定 : bind/apply/call
```

![规则优先级](C:\Users\admin\Desktop\系统笔记\img_js_高级\规则优先级.png)

------

### this规则之外 – 忽略显示绑定

```js
    // 1.情况一: 显式绑定null/undefined, 那么使用的规则是默认绑定
    function foo() {
      console.log("foo:", this)
    }

    foo.apply("abc")
    foo.apply(null) // win,严格模式下是本身对应的类型null
    foo.apply(undefined) // win,严格模式下是本身对应的类型undefined


    // 2.情况二: 间接函数引用
    var obj1 = {
      name: "obj1",
      foo: function() {
        console.log("foo:", this)
      }
    }
    var obj2 = {
      name: "obj2"
    };

    // {}[]() 代码这样连续编写时，希望分开执行，需要在分开的地方加;

    obj2.foo = obj1.foo
    obj2.foo() // obj2
    // (obj2.foo = obj1.foo) 这个是 foo函数，在加()，就是执行foo函数，独立函数调用 this win
    (obj2.foo = obj1.foo)()
```

![this规则之外 – 忽略显示绑定](C:\Users\admin\Desktop\系统笔记\img_js_高级\this规则之外 – 忽略显示绑定.png)

------

### this规则之外 - 间接函数引用

![this规则之外 - 间接函数引用](C:\Users\admin\Desktop\系统笔记\img_js_高级\this规则之外 - 间接函数引用.png)

------

### 箭头函数 arrow function

- 优化写法
  * 只有一个参数时, 可以省略()
  * 只有一行代码时, 可以省略{}
  * 只要一行代码时, 表达式的返回值会作为箭头函数默认返回值, 所以可以省略return
  * 如果箭头函数默认返回的是对象, 在省略{}的时候, 对象必须使用()包裹 () => ({name: "hello"})

```js
    // 1.之前的方式
    function foo1() {}
    var foo2 = function(name, age) {
      console.log("函数体代码", this, arguments)
      console.log(name, age)
    }

    // 2.箭头函数完整写法
    var foo3 = (name, age) => {
      console.log("箭头函数的函数体")
      console.log(name, age)
    }

    // 3.箭头函数的练习
    // 3.1. forEach
    var names = ["abc", "cba", "nba"]
    names.forEach((item, index, arr) => {
      console.log(item, index, arr)
    })
    // 3.2. setTimeout
    setTimeout(() => {
      console.log("setTimeout")
    }, 3000)
```

![箭头函数 arrow function](C:\Users\admin\Desktop\系统笔记\img_js_高级\箭头函数 arrow function.png)

------

### 箭头函数的编写优化

```js
    var names = ["abc", "cba", "nba"]
    var nums = [20, 30, 11, 15, 111]

    // 1.优化一: 如果箭头函数只有一个参数, 那么()可以省略
    names.forEach(item => {
      console.log(item)
    })

    // 2.优化二: 如果函数体中只有一行执行代码, 那么{}可以省略
    names.forEach(item => console.log(item))

    // 一行代码中不能带return关键字, 如果省略, 需要带return一起省略(下一条规则)
    var newNums = nums.filter(item => {
      return item % 2 === 0
    })

    // 3.优化三: 只有一行代码时, 这行代码的表达式结果会作为函数的返回值默认返回的
    var newNums = nums.filter(item => item % 2 === 0)


    // 4.优化四: 如果默认返回值是一个对象, 那么这个对象必须加()

    var arrFn = () => ["abc", "cba"]
    var arrFn = () => {} // 注意: 这里是{}执行体
    var arrFn = () => ({ name: "why" }) // 返回对象必须加()
    console.log(arrFn())

    // 箭头函数实现nums的所有偶数平方的和
    var nums = [20, 30, 11, 15, 111]
    var result = nums.filter(item => item % 2 === 0)
                     .map(item => item * item)
                     .reduce((prevValue, item) => prevValue + item)
    console.log(result)
```

![箭头函数的编写优化](C:\Users\admin\Desktop\系统笔记\img_js_高级\箭头函数的编写优化.png)

------

### this规则之外 – ES6箭头函数

```js
    // 1.普通函数中是有this的标识符
    function foo() {
      console.log("foo", this)
    }

    foo()
    foo.apply("aaa")

    // 2.箭头函数中, 压根没有this
    // 是箭头函数声明时，所在作用域的this，没有就去上层查找，这里的所在作用域就是全局
    // 或是，去查找this，在箭头函数中找不到就去上层作用域找，上层在这里是全局
    var bar = () => {
      console.log("bar:", this) // win
    }
    bar()

    // 通过apply调用,绑定this，没有this，绑定不上，还是上层this
    bar.apply("aaaa")

    console.log("全局this:", this) // win

    // 3.this的查找规则
    var obj = { // 这个括号是对象，不是作用域
      name: "obj",
      // 1
      foo: function() { // 这种代码块才是作用域
        // 这个作用域this，obj.foo，是obj
        var bar = () => {
          // 这个作用域没有this
          console.log("bar:", this) // obj
        }
        return bar
        
      },
      // 2
      foo:()=>{
        // 作用域没有this，到上层全局找
        var bar  = ()=>{
          // 作用域没有this
          console.log(this) // win
        }
      }

    }
    var fn = obj.foo()
    fn.apply("bbb")
```

![this规则之外 – ES6箭头函数](C:\Users\admin\Desktop\系统笔记\img_js_高级\this规则之外 – ES6箭头函数.png)

------

### ES6箭头函数this

- 箭头函数是没有绑定this
- this的查找规则:
  * 去上层作用域中查找this
  * 直到找到全局this

```js
    // 网络请求的工具函数
    function request(url, callbackFn) {
      var results = ["abc", "cba", "nba"]
      callbackFn(results)
    }

    // 实际操作的位置(业务)
    var obj = {
      names: [],
      network: function() { // 到这里找this，network 有this，obj.network，this是obj
        // 1.早期的时候
        // var _this = this
        // request("/names", function(res) {
        //   _this.names = [].concat(res)
        // })

        // 2.箭头函数写法
        request("/names", (res) => { // 这里没有this
          this.names = [].concat(res) // this是obj
        })
      }
    }

    obj.network()
    console.log(obj)
```

![ES6箭头函数this](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES6箭头函数this.png)

### this练习

```js
var name = "window";

var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};

function sayName() {
  var sss = person.sayName;

  sss(); // 绑定: 默认绑定, window -> window

  person.sayName(); // 绑定: 隐式绑定, person -> person

  (person.sayName)(); // 绑定: 隐式绑定, person -> person 等于 person.sayName()

  (b = person.sayName)(); // 术语: 间接函数引用, window -> window
}

sayName();

```

```js
var name = 'window'


// {} -> 对象
// {} -> 代码块
var person1 = {  // 这个括号是对象，不是作用域
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () { // 这个括号是函数的括号，是一个作用域
    // console.log(this) // 第一个表达式this -> person1
    // console.log(this) // 第二个表达式this -> person2
    // console.log(this) // 第三个表达式this -> person1
    
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }


// 开始题目:
person1.foo1(); // 隐式绑定: person1
person1.foo1.call(person2); // 显式绑定: person2

person1.foo2(); // 上层作用域: window
person1.foo2.call(person2); // 上层作用域: window，箭头函数重点，查看所在作用域的this，跟调用方式没有关系；call改变的是箭头函数的this，不是且不能改变箭头函数所在作用域的this

person1.foo3()(); // 默认绑定: window
person1.foo3.call(person2)(); // 默认绑定: window，call之后，返回一个函数，是函数直接调用，和之前的call无关
person1.foo3().call(person2); // 显式绑定: person2 ，这里是先返回函数，再最后一步call执行函数，和call有关，this就是call的指定参数

person1.foo4()(); // person1，返回的箭头函数所在的作用域是foo4函数作用域，foo4函数的this是被person1调用的，就是person1
person1.foo4.call(person2)(); // person2，call之后改变了foo4函数的this为person2，所以箭头函数所在作用域的this也变为person2
person1.foo4().call(person2); // person1，这个call改变的不是foo4的this，而是foo4里面箭头函数的this，但箭头函数没有this，call无效，this依然是箭头函数所在作用域的this
```

```js
var name = 'window'

/*
  1.创建一个空的对象
  2.将这个空的对象赋值给this
  3.执行函数体中代码
  4.将这个新的对象默认返回
*/
function Person(name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}

// person1/person都是对象(实例instance)
var person1 = new Person('person1')
var person2 = new Person('person2')


// 面试题目:
person1.foo1() // 隐式绑定: person1，被person1调用
person1.foo1.call(person2) // 显式绑定: person2

person1.foo2() // 上层作用域查找: person1
person1.foo2.call(person2) // 上层作用域查找: person1，call改变的是foo2箭头函数的this，但箭头函数没有this，call无效

person1.foo3()() // 默认绑定: window，独立函数直接调用
person1.foo3.call(person2)() // 默认绑定: window，独立函数直接调用
person1.foo3().call(person2) // 显式绑定: person2，独立函数被call

person1.foo4()() // 上层作用域查找: person1(隐式绑定)
person1.foo4.call(person2)() //  上层作用域查找: person2(显式绑定)，箭头函数this是所在作用域this，作用域是foo4，call改变了foo4this
person1.foo4().call(person2) // 上层作用域查找: person1(隐式绑定)，箭头函数被call，因为无this，call无效，this是所在作用域的this--》person1
```

```js
var name = 'window'

/*
  1.创建一个空的对象
  2.将这个空的对象赋值给this
  3.执行函数体中代码
  4.将这个新的对象默认返回
*/
function Person(name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() // 默认绑定: window，return独立函数，独立函数调用win
person1.obj.foo1.call(person2)() // 默认绑定: window，call改变的是foo1函数this，不是foo1中函数this，return函数，是独立函数调用
person1.obj.foo1().call(person2) // 显式绑定: person2，独立函数被call，就是call参数

person1.obj.foo2()() // 上层作用域查找: obj(隐式绑定)，箭头函数所在作用域是foo2函数作用域，foo2的this指向谁？foo2被obj调用了，所有指向obj对象
person1.obj.foo2.call(person2)() // 上层作用域查找: person2(显式绑定)，call改变了foo2的this为person2，箭头函数this是所在作用域foo2this--》person2
person1.obj.foo2().call(person2) // 上层作用域查找: obj(隐式绑定)，箭头函数call无效，依然是所在作用域this，foo2this——》obj对象
```

## 深入浏览器的渲染原理

- 1-服务器有IP地址，把IP绑定到域名上，访问域名是通过DNS解析出IP，根据IP找到服务器，服务器再返回资源（index.html）
- 2-解析html，遇到link下载css文件，遇到script下载js文件
  - 3-link元素引入的css的下载和解析不会阻塞html的继续解析
- 4-下载的html\css\js文件，会被浏览器内核（排版引擎、页面渲染引擎）解析
- 5-html先解析，生成DOM树
- 6-然后css解析，把解析后生成的 规则树（样式） 添加到DOM树上
  - 如果遇到JS文件，会下载JS，并停止HTML文件的解析，等待JS文件下载完并执行完
    - 因为JS会操作DOM，会修改DOM树；如果不停止解析html，html会生成DOM树，JS下载完，执行代码又修改DOM，又需要重新生成DOM树，导致生成多次DOM树，回流
    - 停止解析html，等待JS修改完DOM，只生成一次DOM树
  - 再继续解析html，这样性能好，但是下载、执行JS需要时间，导致用户需要等待才能看到页面
  - 所以，为了减少用户等待时间，有以下方案
  - A：JS放到body元素最后，这样JS上面的html会先渲染展示出来让用户看到，再等待JS下载执行，展示完整的页面
  - B：使用script元素的2个属性defer/async，让js下载、执行，和html解析，同时进行
  - defer不会阻塞html解析生成DOM树，当JS下载完后（执行时机），会在DOM树构建完成后，DomcontentLoaded事件之前执行，避免多次生成DOM树
    - 在DOM树后执行，所以可以操作DOM
  - 多个JS元素defer，会按照顺序执行，和JS体积小先下载执行、服务器响应速度无关
  - defer，提高页面了页面性能，一是不阻塞，二是执行顺序
  - defer的JS放到head标签最后，因为不阻塞，所以提前让浏览器去下载，减少时间
  - defer，只用于外部引入的JS文件
  - async，也不阻塞，下载完马上执行（执行时机）
    - 马上执行，可能还没有生成DOM树，这时就不一定能操作DOM
  - 多个async属性的JS标签不能保证执行顺序
  - defer，用于可以操作DOM并对JS执行顺序有要求
  - async，用于独立脚本，无DOM操作
- 7-根据DOM树和CSS规则来生成了渲染树（生成渲染树需要html和css都解析完成），这个时候的渲染树，元素都有了对应的样式，但没有计算每个节点的大小、位置信息
- 8-要再经过layout布局计算，布局是为了计算渲染树中每个节点的大小位置信息
  - 布局，是确定节点的大小、位置
- 9-再进行绘制
- 10-展示出来
  - 但是浏览器本身做了优化，不会等DOM树完全构建再展示出来，而是先展示部分内容，提供用户体验
- 11-回流
  - 元素删除、添加、修改大小、位置，窗口缩放后、使用getComputedStyle获取尺寸位置信息也会回流，需要重新生成渲染树、布局、绘制
  - 这个过程就是回流，消耗性能
  - 回流一定会重绘
  - 优化：修改样式时，一次性修改，添加一个class修改尽量多的样式
  - 避免频繁操作DOM，通过文档碎片documentFragmen完成，再一次性加入dom中或虚拟dom
  - 不使用getComputedStyle
  - 使用position的fixed，在加了这2个定位的元素修改大小后，也会回流，但是因为脱离了文档流，就算改变大小，也不会影响其他元素的布局，所以只需要计算当前这个元素，减少了布局计算量
  - 动画使用transform：translate改变位置+transition过度，会形成新图层执行动画，不改变原图层，不会回流；width、margin会改变原图层，会回流
  - 动画使用opacity设置transition也会形成新图层
- 12-重绘
  - 元素修改颜色等，是重绘（渲染内容），只有绘制

![浏览器输入URL到页面展示的过程](D:\BaiduNetdiskDownload\JS\js资料\day31-JS高级\Day02\上课画图\浏览器输入URL到页面展示的过程.png)

![网页被解析的过程](C:\Users\admin\Desktop\系统笔记\img_js_高级\网页被解析的过程.png)

------

### 浏览器的内核

![浏览器的内核](C:\Users\admin\Desktop\系统笔记\img_js_高级\浏览器的内核.png)

------

### 渲染引擎如何解析页面呢？

![渲染引擎如何解析页面呢？](C:\Users\admin\Desktop\系统笔记\img_js_高级\渲染引擎如何解析页面呢？.png)

------

### 渲染页面的详细流程

- https://www.html5rocks.com/en/tutorials/internals/howbrowserswork

![渲染页面的详细流程](C:\Users\admin\Desktop\系统笔记\img_js_高级\渲染页面的详细流程.png)

------

### 解析一：HTML解析过程

![解析一：HTML解析过程](C:\Users\admin\Desktop\系统笔记\img_js_高级\解析一：HTML解析过程.png)

------

### 解析二 – 生成CSS规则

![解析二 – 生成CSS规则](C:\Users\admin\Desktop\系统笔记\img_js_高级\解析二 – 生成CSS规则.png)

------

### 解析三 – 构建Render Tree

![解析三 – 构建Render Tree](C:\Users\admin\Desktop\系统笔记\img_js_高级\解析三 – 构建Render Tree.png)

------

### 解析四 – 布局（layout）和绘制（Paint）

![解析四 – 布局（layout）和绘制（Paint）](C:\Users\admin\Desktop\系统笔记\img_js_高级\解析四 – 布局（layout）和绘制（Paint）.png)

------

### 回流和重绘

![回流和重绘](C:\Users\admin\Desktop\系统笔记\img_js_高级\回流和重绘.png)

------

### 特殊解析 – composite合成

![特殊解析 – composite合成](C:\Users\admin\Desktop\系统笔记\img_js_高级\特殊解析 – composite合成.png)

------

### script元素和页面解析的关系

![script元素和页面解析的关系](C:\Users\admin\Desktop\系统笔记\img_js_高级\script元素和页面解析的关系.png)

------

### defer属性

![defer属性](C:\Users\admin\Desktop\系统笔记\img_js_高级\defer属性.png)

------

### async属性

![async属性](C:\Users\admin\Desktop\系统笔记\img_js_高级\async属性.png)

------

## 深入JavaScript的运行原理

- 浏览器内核（渲染引擎）由两部分
  - webcore	页面引擎
    - html解析、布局、渲染
  - javascriptcore  JS引擎
    - js解析、执行

### JavaScript代码的执行

![JavaScript代码的执行](C:\Users\admin\Desktop\系统笔记\img_js_高级\JavaScript代码的执行.png)

------

### V8引擎的执行原理

- V8是JS引擎，用于解析、执行JS
- 作用是源代码转为二进制代码最终被计算机识别

![V8引擎的执行原理](C:\Users\admin\Desktop\系统笔记\img_js_高级\V8引擎的执行原理.png)

------

### V8引擎的架构

- https://v8.dev/blog/scanner
- https://v8.dev/blog/ignition-interpreter
- https://v8.dev/blog/turbofan-jit

![V8引擎的架构](C:\Users\admin\Desktop\系统笔记\img_js_高级\V8引擎的架构.png)

------

### V8引擎的解析图（官方）

![V8引擎的解析图（官方）](C:\Users\admin\Desktop\系统笔记\img_js_高级\V8引擎的解析图（官方）.png)

------

### V8引擎的解析图

![V8引擎的解析图](C:\Users\admin\Desktop\系统笔记\img_js_高级\V8引擎的解析图.png)

------

### JavaScript代码执行原理 - 版本说明

![JavaScript代码执行原理 - 版本说明](C:\Users\admin\Desktop\系统笔记\img_js_高级\JavaScript代码执行原理 - 版本说明.png)

------

### JavaScript的执行过程

- JS引擎在执行代码之前，会在堆内存中创建全局对象GO（window），该对象可以访问所有作用域
- JS引擎内部有一个执行上下文栈，是用于执行代码的调用栈
  - 栈、堆
    - 执行上下文是在栈中，GO\VO\AO是在堆中

  - 执行上下文栈中可以创建多个执行上下文，去执行不同的代码（一个函数调用会创建一个执行上下文）
  - 代码进入到执行上下文中，执行
  - 在代码进入到执行上下文中之前，需要先经过JS引擎（V8）编译成可执行代码，AST树、字节码、机器码...
  - 在JS引擎编译之前，会对作用域进行提升，在内存中，将变量、函数的声明添加到VO对象，作为VO对象的属性，如果是函数，那函数的参数也会被添加到VO对象，一个VO对应一个执行上下文，相互关联；全局上下文对应的VO就是GO（window=this）
    - 全局代码执行前
    - VO用于存放变量、函数...，VO是变量对象
    - 变量提升，只把变量的声明加入了VO；不包括值
    - 函数把声明（函数名）加入了VO，同时又创建了一个存放函数的对象，声明引入了这个对象的地址；
      - 函数会被提前声明，放到最前面（JS本身的优化），在变量名的前面
      - 声明a变量，打印a的值，声明a函数；打印的是a变量
      - 先把a这个变量名加入VO；再把函数名和函数对象加入VO，这时a是函数；
      - 然后（执行中）赋值a的值给VO.a，再打印a时，a已经被覆盖成a变量的值了
    - 所以变量在声明前使用拿到的值是undefind（可以拿到是因为变量名被添加到VO中了），函数拿到的是引用地址，可以被调用
    - 以上是全局 代码执行之前
  - 全局代码执行ing
    - 按照顺序执行代码，按照代码顺序把代码中变量的值（或者变量计算后的值）赋值给VO中的变量，函数会跳过，因为在这之前已经引用了地址
  - 当函数开始执行之前，会再创建一个新的执行上下文，放在全局执行上下文的上面，并关联一个VO对象，用于存放这个函数中的变量、函数
    - 函数执行上下文，对应的VO是AO对象
    - AO会使用arguments作为初始化，初始化值就是传入的参数
    - AO对象会作为执行上下文的VO来存放变量的初始值（参数以及函数内的变量）
  - 函数之前ing
    - AO中的变量进行赋值（值是源代码中变量对应的值）
    - 执行具体代码
  - 函数执行上下文完成后
    - 会跳出执行上下文栈（销毁、被回收），继续执行下一个执行上下文，这里下一个就是最底层的全局代码，全局代码再执行全局的下一行代码，如果是一个函数，再次重复函数上下文执行过程，创建新的函数执行上下文...
  - 函数相互调用
    - 父函数创建执行上下文、VO对象，进行变量赋值，执行代码
    - 当执行到子函数的时候，会再次创建一个子函数的执行上下文（在父函数执行栈的上面）、VO对象，进行变量赋值，执行代码
    - 当子函数代码执行完成后，销毁、回收子函数的执行上下文，跳出执行上下文栈，父函数执行上下文变成栈顶
    - 再继续执行父函数的下一行代码，直到完成，跳出栈
    - 继续执行下一个执行上下文，直到全局上下文完成，跳出栈


![JavaScript的执行过程](C:\Users\admin\Desktop\系统笔记\img_js_高级\JavaScript的执行过程.png)

------

### 初始化全局对象

![初始化全局对象](C:\Users\admin\Desktop\系统笔记\img_js_高级\初始化全局对象.png)

------

### 执行上下文（ Execution Contexts ）

![执行上下文（ Execution Contexts ）](C:\Users\admin\Desktop\系统笔记\img_js_高级\执行上下文（ Execution Contexts ）.png)

------

### 认识VO对象（Variable Object）

![认识VO对象（Variable Object）](C:\Users\admin\Desktop\系统笔记\img_js_高级\认识VO对象（Variable Object）.png)

------

### 全局代码执行过程（执行前）

![全局代码执行过程（执行前）](C:\Users\admin\Desktop\系统笔记\img_js_高级\全局代码执行过程（执行前）.png)

------

### 全局代码执行过程（执行后）

![全局代码执行过程（执行后）](C:\Users\admin\Desktop\系统笔记\img_js_高级\全局代码执行过程（执行后）.png)

------

### 函数如何被执行呢

![函数如何被执行呢](C:\Users\admin\Desktop\系统笔记\img_js_高级\函数如何被执行呢.png)

------

### 函数的执行过程（执行前）

![函数的执行过程（执行前）](C:\Users\admin\Desktop\系统笔记\img_js_高级\函数的执行过程（执行前）.png)

------

### 函数的执行过程（执行后）

![函数的执行过程（执行后）](C:\Users\admin\Desktop\系统笔记\img_js_高级\函数的执行过程（执行后）.png)

------

### 作用域和作用域链（Scope Chain）

- 每个执行上下文，都会关联一个作用域链（对象列表）
- 在进入执行上下文时，根据代码类型去创建作用域链，并添加一系列的对象
  - 代码类型
    - 全局代码，作用域链就是GO
    - 函数代码，作用域链是在全局代码解析函数的时候（函数创建的时候）就决定了，不是在函数执行的时候才有的，并且和函数的调用方法无关，作用域链就是函数的AO

- 作用域链是一个对象列表，内容是多个作用域，作用域链保存在VO引用的函数中
- 作用域就是执行上下文所关联的VO\GO\AO对象
- VO对象的内容是全局、函数代码中声明的变量或引用的对象
- 作用域 = VO对象
- 去作用域查找变量，就是从VO对象上取变量，如果这个VO对象内没有，即这个作用域没有这个变量
- 就去作用域链列表中的下一个作用域（VO对象）中查找
- 作用域链列表中的作用域来自于哪里？来自于执行的代码
  - 如果是执行全局代码，那作用域链列表中只有全局对象GO
  - 如果是执行函数代码，在函数定义的时候，函数就确定了作用域链的内容
    - 在执行函数的时候，会把作用域链赋值给执行上下文，按照这个作用域链去查找
    - 那函数在定义的时候，是怎么确定的作用域链？内容是作用域（VO对象）
      - 函数定义在哪里？作用域链就是哪里，只和定义的位置有关，和调用的位置无关
      - 定义在全局，是全局作用域，就是全局执行上下文关联的VO对象，这是作用域链中只有全局
      - 函数定义在A函数，A定义在B，B定义在全局
        - 全局-B-A
        - 作用域链中，放入A函数执行上下文关联的VO对象为第一个
          - 每个函数，都会创建各自的函数执行上下文，并关联对应的VO对象
        - B函数的VO对象为第二个
        - 全局的VO对象为第三个
        - A作用域链：[A（自身）,B,window]
        - B作用域链：[B,window]
        - A作用域链：[window]
      - A查找顺序是
        - 先查找自身，再从作用域链列表中按照顺序查找
        - 自身作用域（A作用域的VO对象）、B作用域（VO对象）、全局作用域（GO对象）

------

![函数的嵌套内存表现图](D:\BaiduNetdiskDownload\JS\js资料\day32-JS高级\Day03\上课画图\函数的嵌套内存表现图.png)

- 左侧为栈，底层是window全局
- 右侧是堆内存
- 全局代码执行前，是解析代码，创建全局执行上下文，创建并关联GO对象，存放全局代码中的msg变量、foo函数（放的是foo函数的内存地址）
- foo函数要在堆内存新建，才会有一个存放地址，在foo函数对象中有一个作用域链，作用域链是一个对象列表，列表内容在这里是全局执行上下文的VO，即GO
- 全局代码执行，执行到foo函数；在foo函数执行之前，foo函数会创建一个执行上下文，创建关联一个VO对象，VO存放了bar函数的引入地址和name：undefined，在内存中新建bar函数，bar函数中有作用域链，这个作用域链在定义（编写）bar函数的时候就确定了，[foo,window]
- foo函数执行了，nema被赋值为foo函数中name的值；foo执行会返回bar函数，这个bar函数被放到了（全局）全局执行上下文的GO对象，引入地址就是bar函数的内存存放地址（和foo引用的bar函数地址一样）
- foo函数执行完成，跳出，执行下一个上下文，全局上下文，执行bar函数
- bar函数执行前，创建函数执行上下文，创建关联VO对象，存放变量
- bar函数执行了，打印name
- 先在bar函数的VO对象（作用域）中查找，没有去bar函数中的作用域链查找，[foo,window]
- 再去foo对象的VO对象（作用域）中查找，没有再去全局的VO对象（GO）（作用域）查找
- VO包括GO\AO

------



```js
console.log(msg) // undefined
var msg = 'g-msg'
console.log(msg) // g-msg
function foo(){
	console.log(msg) // undefined
	var msg = 'foo-msg'
    console.log(msg) // foo-msg
}
foo()
```

- 以上代码执行过程(foo函数中有声明msg)
  - 全局执行前：在执行上下文栈中，创建全局执行上下文，并创建全局执行上下文关联的VO对象（GO），把全局代码中的变量名添加到VO对象上，只加了变量名，没有加变量对应的值，这时值都是undefined
  - 全局执行：执行全局代码，第一行的msg，会去全局执行上下文关联的VO对象上查找，有msg，但值为undefined，执行到第二行才会赋值为 g-msg
  - 遇见函数会跳过
  - 函数执行前：执行最后一行，函数执行，在全局执行上下文的上面，创建函数执行上下文，创建函数执行上下文关联的VO对象（AO），把函数中的变量名添加到VO对象，初始都没有值
  - 函数执行：执行函数中的代码，第一行中的msg会去函数的VO对象中查找，因为var 变量名提升，所以函数的VO对象中有msg但初始值为undefined，要执行到第二行才会赋值
  - 所以foo函数的第一行打印为undefined
  - 第三行打印为foo-msg
  - 函数中的代码执行完：跳出执行上下文栈（销毁、回收），继续执行下一个上下文，即全局执行上下文
  - 全局代码执行完：全局跳出栈，所有代码执行完成

```js
var msg = 'g-msg'
function foo(){
    console.log(msg)
}
```

- 以上代码查找msg的执行过程（foo函数中没有声明msg）
- 先去自身、foo函数执行上下文关联的VO对象查找msg，没有找到
- 再去作用域列表中按照顺序查找，这里作用域链中只有全局执行上下文的VO对象
- msg是g-msg

![作用域和作用域链（Scope Chain）](C:\Users\admin\Desktop\系统笔记\img_js_高级\作用域和作用域链（Scope Chain）.png)

------

```js
var n = 100
function foo(){
	n = 200
}
foo()
console.log(n) // 200
// foo 自身没有n去访问全局的n并修改了n为200
```

```js
var n = 100
function foo1(){
	console.log(n)
}
function foo2(){
	var n = 200
	console.log(n)
	foo1()
}
// foo2先执行，打印200，在执行foo1，打印100，foo1的作用域链是在定义函数的时候决定的，全局n，在哪里调用foo1无关
foo2()
console.log(n)
```

```js
var n = 100
function foo(){
	console.log(n)
    return
    var n = 200
}
foo() // undefined;foo访问n，先从自身找，有n（因为下面声明了n，在执行代码前会先解析代码，解析时会把n添加到VO对象中）但是没有赋值，所以undefined；代码执行是按照代码顺序执行的，执行到第三行n才被赋值，所以第一行的n没有被赋值，没有值
```

```js
function foo(){
  var a=b=100
}
foo()
console.log(a,b) 
// a是var声明的函数内变量，全局是没有的；b不是var声明的，没有声明，就是全局变量
```



## JavaScript内存管理和闭包

### 认识内存管理

- 内存包括2部分
  - 栈内存，简单数据类型，声明的函数会引用堆内存中VO对象的地址（函数存放的地址）
    - 栈内存，在执行完代码就会弹出栈，释放栈内存
  - 堆内存，复杂数据类型
    - 堆内存管理，垃圾回收机制（自动管理）

![认识内存管理](C:\Users\admin\Desktop\系统笔记\img_js_高级\认识内存管理.png)

### JavaScript的内存管理

![JavaScript的内存管理](C:\Users\admin\Desktop\系统笔记\img_js_高级\JavaScript的内存管理.png)

### JavaScript的垃圾回收

![JavaScript的垃圾回收](C:\Users\admin\Desktop\系统笔记\img_js_高级\JavaScript的垃圾回收.png)

### 常见的GC算法 – 引用计数（Reference counting）

![常见的GC算法 – 引用计数（Reference counting）](C:\Users\admin\Desktop\系统笔记\img_js_高级\常见的GC算法 – 引用计数（Reference counting）.png)

### 常见的GC算法 – 标记清除（mark-Sweep）

- 这是 JS引擎采用的 垃圾回收机制 算法

![常见的GC算法 – 标记清除（mark-Sweep）](C:\Users\admin\Desktop\系统笔记\img_js_高级\常见的GC算法 – 标记清除（mark-Sweep）.png)

### 常见的GC算法 – 其他算法优化补充

- 标记整理，释放了中间2块内存，但是内存空间不连续
  - 如果一个对象占用的内存比较大，那么这2块内存都将用不上，形成内存碎片化
  - 标记整理，把清除后的内存汇集到连续的内存空间

![标记整理](C:\Users\admin\Desktop\系统笔记\img_js_高级\标记整理.png)

- 分代收集
  - 新代，在第一次分配内存时，变量存放在内存空间A，当标记清除时
    - 把清除后保留下来的存放到另一个内存空间B中
    - 当再次分配内存时，新的变量会被分配到内存空间B中，当标记清除时，把进过A、B，2次清除后保留下来的，存放到旧代
  - 旧代
    - 旧代会降低标记清除检查的频率，节省性能
- 增量收集
  - 如果遍历标记很多对象，会需要一些时间，带来延迟
  - 增量收集，把垃圾收集工作分为几个部分，这几个部分逐一进行处理，一会做一个，一会再做一个，把大延迟变成小延迟

![常见的GC算法 – 其他算法优化补充](C:\Users\admin\Desktop\系统笔记\img_js_高级\常见的GC算法 – 其他算法优化补充.png)

### V8引擎详细的内存图

![V8引擎详细的内存图](C:\Users\admin\Desktop\系统笔记\img_js_高级\V8引擎详细的内存图.png)

## 闭包

![闭包](C:\Users\admin\Desktop\系统笔记\img_js_高级\闭包.png)

### JavaScript的函数式编程

![JavaScript的函数式编程](C:\Users\admin\Desktop\系统笔记\img_js_高级\JavaScript的函数式编程.png)

### 闭包的定义

- 闭包是函数可以通过作用域链访问外部作用域

![闭包的定义](C:\Users\admin\Desktop\系统笔记\img_js_高级\闭包的定义.png)

### 闭包的访问过程

- 执行代码

![执行代码](C:\Users\admin\Desktop\系统笔记\img_js_高级\执行代码.png)

- 执行前
  - 分配内存

![执行前](C:\Users\admin\Desktop\系统笔记\img_js_高级\执行前.png)

- 执行第一个 createAdder(5)函数
  - createAdder返回一个adder函数，放到了全局，改变了全局adder的引用地址

![第一次](C:\Users\admin\Desktop\系统笔记\img_js_高级\第一次.png)

- 第一个执行完
  -  执行完createAdder(5)，执行上下文栈销毁，但是 createAdder(5)的AO对象没有被销毁
  - 因为全局的GO中的adder5引用了oxb00，oxb00的作用域链引用了createAdder的AO对象
  - 如果adder函数没有访问createAdder函数中的count变量，那么createAdder的AO对象会被销毁，这是V8引擎的优化

![第一次执行完](C:\Users\admin\Desktop\系统笔记\img_js_高级\第一次执行完.png)

- adder5(100)执行
  - 按照作用域链查找count、num

![adder](C:\Users\admin\Desktop\系统笔记\img_js_高级\adder.png)

- createAdder(8)执行
  - 重复执行createAdder(5)
  - adder8(22)
  - createAdder(5)一个AO，createAdder(8)一个AO

![adder8](C:\Users\admin\Desktop\系统笔记\img_js_高级\adder8.png)

- 最终代码执行后，内存空间都没有被销毁，因为存在引用
  - 一行3个，共3行，都有3个对象，没有被销毁
  - 第一行是全局
  - 第二行是adder5
  - 第三行是adder8

![内存图](C:\Users\admin\Desktop\系统笔记\img_js_高级\内存图.png)

------

![闭包的访问过程](C:\Users\admin\Desktop\系统笔记\img_js_高级\闭包的访问过程.png)

------

### 闭包的执行过程

![闭包的执行过程](C:\Users\admin\Desktop\系统笔记\img_js_高级\闭包的执行过程.png)

------

### 闭包的内存泄漏

- 如果adder8(7)执行完后，后面不再使用adder8函数，那么adder8的3个对象应该被销毁，而实际没有被销毁，垃圾回收检测到全局引用了，所以会保留
- 这就是内存泄漏，应该释放的内存没有被释放
- 随着形成了很多adder8函数，内存就会被占满、耗尽

![闭包的内存泄漏](C:\Users\admin\Desktop\系统笔记\img_js_高级\闭包的内存泄漏.png)

#### 进行手动清除

- adder8 = null ；全局GO对象中的adder8 = null ，在下一次垃圾回收时，检查到adder8 = null  没有在引用之前的adder8地址，那之前的adder8地址指向的对象，以及对象引用的对象，共3个对象，自然就销毁了

```js
adder8 = null 
```

------

### 闭包的内存泄漏测试 

- 解析代码，全局GO中有createArray（值为createArray函数的引用地址），arr（值为undefined）和totalarr（值为undefined）
- 执行代码，totalarr调用执行了createArray函数，createArray中的arr的值变为了Array函数，并返回了对arr的引用，totalarr引用了createArray中的arr，也就引用了Array函数，这时全局中的arr的值变为了引用Array函数，再垃圾回收检查时，检查到Array函数被arr引用了，所以会保留，不会销毁
- 当totalarr=[],也就是执行代码的时候，就没有调用createArray函数，arr还是undefined，就没有生成、不存在Array函数，就没有内存占用；没有人使用的变量，会被销毁

- 手动让totalarr为空数组，totalarr就不会调用createArray函数，createArray函数不执行，arr就没有值，那么再下次垃圾回收时，arr没有值，就没有内存占用；没有人使用的变量，会被销毁

![内存泄漏](C:\Users\admin\Desktop\系统笔记\img_js_高级\内存泄漏.png)

------

### AO对不使用的属性进行优化

- 闭包中没有人使用的变量，会被销毁

![AO不使用的属性优化](C:\Users\admin\Desktop\系统笔记\img_js_高级\AO不使用的属性优化.png)

------

