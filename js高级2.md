JavaScript ES5中实现继承

#### 原型

- 函数有 prototype 和   `__proto`
- 对象只有 `__proto__`
- 原型对象有 `__proto__` 和 constructor

#### 对象的原型

- getPrototypeOf 获取对象原型

```js
    var obj = {}
    // 获取对象的原型
    
    // 浏览器添加的对象原型
    console.log(obj.__proto__)
    // 标准获取对象原型 getPrototypeOf
    console.log(Object.getPrototypeOf(obj))
    console.log(obj.__proto__ === Object.getPrototypeOf(obj)) // true

    // 疑问: 这个原型有什么用呢?
    // 当我们通过[[get]]方式获取一个属性对应的value时
    // 1> 它会优先在自己的对象中查找, 如果找到直接返回
    // 2> 如果没有找到, 那么会在原型对象中查找

    // 自身查找
    console.log(obj.name)
    // 原型添加
    obj.__proto__.message = "Hello World"
    // 原型查找
    console.log(obj.message)
```

![认识对象的原型](C:\Users\admin\Desktop\系统笔记\img_js_高级\认识对象的原型.png)

------

#### 函数的原型 prototype

- 函数原型 通过 prototype 直接获取
  - 对象原型 通过 getPrototypeOf  获取，对象没有 prototype  
  - 函数原型 通过 prototype  获取
  - 对象、函数都有 ` __proto`__，但不相同

```js
    var obj = {}
    function foo() {}

    // 1.将函数看成是一个普通的对象时, 它是具备__proto__(隐式原型)
    // 作用: 查找key对应的value时, 会找到原型身上
    console.log(obj.__proto__)
    console.log(foo.__proto__)

    // 2.将函数看成是一个函数时, 它是具备prototype(显式原型)
    // 作用: 用来构建对象时, 给对象设置隐式原型的
    console.log(foo.prototype)
    // console.log(obj.prototype) 对象是没有prototype
```

![函数的原型 prototype](C:\Users\admin\Desktop\系统笔记\img_js_高级\函数的原型 prototype.png)

------

#### new操作符

```js
    function Foo() {
      // 1.创建空的对象
      // 2.将Foo的prototype原型(显式隐式)赋值给空的对象的__proto__(隐式原型)
    }

    console.log(Foo.prototype)

    var f1 = new Foo()
    var f2 = new Foo()
    var f3 = new Foo()
    var f4 = new Foo()
    var f5 = new Foo()
    console.log(f1.__proto__)
    console.log(f1.__proto__ === Foo.prototype) // true
    console.log(f3.__proto__ === f5.__proto__) // true
```

![new操作符](C:\Users\admin\Desktop\系统笔记\img_js_高级\new操作符.png)

------

#### 原型方法

```js
    /*
    1.什么是函数的显式原型
      * 区分和对象原型区别
    2.函数的原型的作用
      * 在通过new操作创建对象时, 将这个显式原型赋值给创建出来对象的隐式原型
    3.案例Person, 将所有的函数定义放到了显式原型上
    */

    function Student(name, age, sno) {
      this.name = name
      this.age = age
      this.sno = sno

      // 1.方式一: 编写函数, 会创建很多个函数对象
      // this.running = function() {
      //   console.log(this.name + " running")
      // }
      // this.eating = function() {
      //   console.log(this.name + " eating")
      // }
      // this.studying = function() {
      //   console.log(this.name + " studying")
      // }
    }

    // 当我们多个对象拥有共同的值时, 我们可以将它放到构造函数对象的显式原型
    // 由构造函数创建出来的所有对象, 都会共享这些属性
    Student.prototype.running = function() {
      console.log(this.name + " running")
    }
    Student.prototype.eating = function() {
      console.log(this.name + " eating")
    }

    // 1.创建三个学生
    var stu1 = new Student("why", 18, 111)
    var stu2 = new Student("kobe", 30, 112)
    var stu3 = new Student("james", 18, 111)

    // 隐式原型的作用
    // 1> stu1的隐式原型是谁? Student.prototype对象
    // 2> stu1.running查找:
    //  * 先在自己身上查找, 没有找到
    //  * 去原型去查找
    stu1.running()
    stu2.eating()
```

#### 创建对象的内存表现

![创建对象的内存表现](C:\Users\admin\Desktop\系统笔记\img_js_高级\创建对象的内存表现.png)

------

#### prototype添加属性

![prototype添加属性](C:\Users\admin\Desktop\系统笔记\img_js_高级\prototype添加属性.png)

------

### 创建对象-内存图

- 先从自身查找，再从原型查找

```js
    function Person(name, age) {
      this.name = name
      this.age = age
    }

    Person.prototype.running = function() {
      console.log("running~")
    }

    var p1 = new Person("why", 18)
    var p2 = new Person("kobe", 30)

    // 进行操作
    console.log(p1.name)
    console.log(p2.name)

    p1.running()
    p2.running()

    // 新增属性
    Person.prototype.address = "中国"
    p1.__proto__.info = "中国很美丽!"

    p1.height = 1.88
    p2.isAdmin = true

    // 获取属性
    console.log(p1.address)
    console.log(p2.isAdmin)
    console.log(p1.isAdmin)
    console.log(p2.info)

    // 修改address
    p1.address = "广州市"
    console.log(p2.address)
```

#### 创建对象

![上课画图](C:\Users\admin\Desktop\系统笔记\img_js_高级\上课画图.png)

------

#### 新增属性

![上课画图(新增属性)](C:\Users\admin\Desktop\系统笔记\img_js_高级\上课画图(新增属性).png)

------

#### constructor属性

- 原型对象上有一个属性，是 constructor，指向（等于）当前函数对象

```js
    // 非常重要的属性: constructor, 指向Person函数对象
    function Person() {

    }

    // 1.对constructor在prototype上的验证
    var PersonPrototype = Person.prototype
    console.log(PersonPrototype)
    console.log(PersonPrototype.constructor)
    console.log(PersonPrototype.constructor === Person)

    console.log(Person.name)
    console.log(PersonPrototype.constructor.name)

    // 2.实例对象p
    var p = new Person()
    console.log(p.__proto__.constructor)
    console.log(p.__proto__.constructor.name)
```

![constructor属性](C:\Users\admin\Desktop\系统笔记\img_js_高级\constructor属性.png)

------

#### 重写原型对象

```js
    function Person() {

    }

    // 在原有的原型对象上添加新的属性
    Person.prototype.message = "Hello Person"
    Person.prototype.info = {
      name: "哈哈哈",
      age: 30
    }
    Person.prototype.running = function () {}
    Person.prototype.eating = function () {}

    // keys中不包含constructor
    // console.log(Object.keys(Person.prototype))

    // 直接赋值一个新的原型对象
    Person.prototype = {
      message: "Hello Person",
      info: {
        name: "哈哈哈",
        age: 30
      },
      running: function () {},
      eating: function () {},
      //  默认的prototype是有创建constructor属性的，指向（等于）构造函数
      //  自己重写的prototype需要手动加上constructor属性，手动 等于 构造函数
      constructor: Person
    }

    // keys中包含constructor
    // console.log(Object.keys(Person.prototype))
    // 属性操作符，把prototype函数的constructor属性，添加操作符，进行限制，不许枚举
    Object.defineProperty(Person.prototype, "constructor", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: Person
    })
    // keys中不包含constructor
    console.log(Object.keys(Person.prototype))

    // 实例对象
    var p1 = new Person()
```

![重写原型对象](C:\Users\admin\Desktop\系统笔记\img_js_高级\重写原型对象.png)

------

#### 原型对象的constructor

![原型对象的constructor](C:\Users\admin\Desktop\系统笔记\img_js_高级\原型对象的constructor.png)

------

#### 创建对象 – 构造函数和原型组合

![创建对象的内存表现](C:\Users\admin\Desktop\系统笔记\img_js_高级\创建对象的内存表现.png)

------

#### 面向对象的特性 – 继承

![面向对象的特性 – 继承](C:\Users\admin\Desktop\系统笔记\img_js_高级\面向对象的特性 – 继承.png)

------

#### JavaScript原型链

- 从一个对象上获取属性，如果当前对象中没有，会依次去它的原型链中的原型获取
- 顶层是 Object构造函数的prototype，默认值是null，返回undefined

![02_自定义原型链内存图](D:\BaiduNetdiskDownload\JS\js资料\高级\day34-JS高级_05\Day05\上课画图\02_自定义原型链内存图.png)

------

![JavaScript原型链](C:\Users\admin\Desktop\系统笔记\img_js_高级\JavaScript原型链.png)

------

#### Object的原型

![Object的原型](C:\Users\admin\Desktop\系统笔记\img_js_高级\Object的原型.png)

------

#### Object是所有类的父类

![Object是所有类的父类](C:\Users\admin\Desktop\系统笔记\img_js_高级\Object是所有类的父类.png)

------

#### 1-通过原型链实现继承

- 继承父类，并添加自己的方法；Student.prototype = p 
  - stu1.prototype = p 

```js
    // 定义Person构造函数(类)
    function Person(name, age, height, address) {
      this.name = name
      this.age = age
      this.height = height
      this.address = address
    }

    Person.prototype.running = function() {
      console.log("running~")
    }
    Person.prototype.eating = function() {
      console.log("eating~")
    }

    // 定义学生类
    function Student(name, age, height, address, sno, score) {
      //  写name，就是自己的name；但和Person的name代码重复了
        // 不写name，就是p的name，多个Student的实例都是p的name，不能有各自的name
      this.name = name
      this.age = age
      this.height = height
      this.address = address

      this.sno = sno
      this.score = score
    }

    // 方式一: 父类的原型直接赋值给子类的原型
    // 缺点: 父类和子类共享通一个原型对象, 修改了任意一个, 另外一个也被修改
    // Student.prototype = Person.prototype

    // 方式二: 创建一个父类的实例对象(new Person()), 用这个实例对象来作为子类的原型对象
    var p = new Person("why", 18)
    Student.prototype = p

    // Student.prototype.running = function() {
    //   console.log("running~")
    // }
    // Student.prototype.eating = function() {
    //   console.log("eating~")
    // }
    Student.prototype.studying = function() {
      console.log("studying~")
    }

    // 创建学生
    var stu1 = new Student("kobe", 30, 111, 100)
    var stu2 = new Student("james", 25, 111, 100)
    stu1.running()
    stu1.studying()
```

![04_原型继承-父类创建一个实例对象作为子类的原型对象](C:\Users\admin\Desktop\系统笔记\img_js_高级\04_原型继承-父类创建一个实例对象作为子类的原型对象.png)

- 继承父类，并添加自己的方法

![通过原型链实现继承](C:\Users\admin\Desktop\系统笔记\img_js_高级\通过原型链实现继承.png)

------

#### 原型链继承的弊端

- 打印对象，只能拿到stu1对象本身的属性，继承自p的属性打印不出来，但是能获取到
- stu1如果不写自己的name，会用p的name，那么stu1、stu2、stu3继承的p的name都是一样的，而不是各自不同的，stu1、stu2、stu3写自己的name，就会和 Person 有 重复代码，避免写重复代码

![原型链继承的弊端](C:\Users\admin\Desktop\系统笔记\img_js_高级\原型链继承的弊端.png)

------

#### 2-借用构造函数继承

```js

    // 定义Person构造函数(类)
    function Person(name, age, height, address) {
      this.name = name
      this.age = age
      this.height = height
      this.address = address
    }

    Person.prototype.running = function () {
      console.log("running~")
    }
    Person.prototype.eating = function () {
      console.log("eating~")
    }

    // 定义学生类
    function Student(name, age, height, address, sno, score) {
      // 重点: 借用构造函数;call调用Person，把传入的参数赋值，Person的this指向stu1，所以stu1.name = Person中的name = 传入的name参数；这样实现使用公共属性；因为修改了this，所以实际上修改的是stu1属性，不是Person的属性，因为stu2的name不是stu1的name
      Person.call(this, name, age, height, address)

      // 这个this还是stu1，是stu1独有的，不是Person的，和Person无关；实现各自不同的属性
      this.sno = sno
      this.score = score
    }

    var p = new Person("why", 18)
    // p传入的参数在stu1的原型上，如果new Student（）没有传入参数，那么stu1.name自身是undefined，但是会查找到原型上就是p，最后值就是why
    Student.prototype = p

    Student.prototype.studying = function () {
      console.log("studying~")
    }

    // 创建学生
    var stu1 = new Student("kobe", 30, 111, 100, '1', '2')
    var stu2 = new Student()

    console.log(stu2)
    // stu2和stu1传入的参数无关，是各自的参数
    // address: undefined
    // age: undefined
    // height: undefined
    // name: undefined
    // score: undefined
    // sno: undefined
    console.log(stu1)
    // address: 100
    // age: 30
    // height: 111
    // name: "kobe"
    // score: "2"
    // sno: "1"
    var Person1 = new Person()
    // Person的属性并没有发送改变
    console.log(Person1)
    // address: undefined
    // age: undefined
    // height: undefined
    // name: undefined
```

![借用构造函数继承](C:\Users\admin\Desktop\系统笔记\img_js_高级\借用构造函数继承.png)

------

#### 组合借用继承的问题

![组合借用继承的问题](C:\Users\admin\Desktop\系统笔记\img_js_高级\组合借用继承的问题.png)

------

#### 原型式继承函数

![原型式继承函数](C:\Users\admin\Desktop\系统笔记\img_js_高级\原型式继承函数.png)

------

#### 寄生式继承函数

```js
    // 对象之间的继承
    // 默认的对象
    var obj = {
      name: "why",
      age: 18
    }

    // 原型式继承
    function createObject(o) {
      function F() {}
      F.prototype = o
      return new F()
    }

    // 寄生式函数；o是公共的， name, age, height, address 是各自的
    function createInfo(o, name, age, height, address) {
      var newObj = createObject(o)
      newObj.name = name
      newObj.age = age
      newObj.height = height
      newObj.address = address
      
      return newObj
    }

    // 创建一系列对象；info1继承obj，并有自己的属性"why", 18, 1.88, "广州市"
    var info1 = createInfo(obj, "why", 18, 1.88, "广州市")
    var info2 = createInfo(obj, "kobe", 30, 1.98, "洛杉矶市")
```

![寄生式继承函数](C:\Users\admin\Desktop\系统笔记\img_js_高级\寄生式继承函数.png)

------

#### 3-寄生组合式继承

- 原型链/借用/原型式(对象之间)/寄生式函数

```js
    // 推荐方案一:    
	// 工具函数
    // 创建对象的过程
    function createObject(o) {
      function F() {}
      F.prototype = o
      return new F()
    }

    // 将Subtype和Supertype联系在一起
    // 寄生式函数；Subtype子类，Supertype父类，子类继承父类
    function inherit(Subtype, Supertype) {
        // 这2个方案有兼容性问题
        // Subtype.prototype.__proto__ = Supertype.prototype
  		// Object.setPrototypeOf(Subtype.prototype, Subtype.prototype)
      // 最稳定的方案
      Subtype.prototype = createObject(Supertype.prototype)
      Object.defineProperty(Subtype.prototype, "constructor", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: Subtype
      })
    }

    /*
    满足什么条件:
      1.必须创建出来一个对象
      2.这个对象的隐式原型必须指向父类的显式原型
      3.将这个对象赋值给子类的显式原型
    */
    function Person(name, age, height) {}
    function Student() {}
    // Supertype 继承 Person
    inherit(Supertype, Person)

    // 2.方案二:
    var obj = {}
    Object.setPrototypeOf(obj, Person.prototype)
    Student.prototype = Person.prototype

    // 3.方案三:
    var obj = Object.create(Person.prototype)
    console.log(obj.__proto__ === Person.prototype)
    Student.prototype = obj
```

### ES5中最优的继承方案

- 寄生组合式继承

```js
  // 引入方案一
  <script src="./js/inherit_utils.js"></script>
  <script>
    // 寄生组合式继承
    // 原型链/借用/原型式(对象之间)/寄生式函数
      
    // 父
    function Person(name, age, height) {
      this.name = name
      this.age = age
      this.height = height
    }

    Person.prototype.running = function() {
      console.log("running~")
    }
    Person.prototype.eating = function() {
      console.log("eating~")
    }
	// 子继承父
    inherit(Student, Person)
	// 子
    Student.prototype.studying = function() {
      console.log("studying")
    }

    // 创建实例对象
    var stu1 = new Student("why", 18, 1.88, 111, 100)

  </script>
```

![寄生组合式继承](C:\Users\admin\Desktop\系统笔记\img_js_高级\寄生组合式继承.png)

------

#### 寄生组合继承的代码

![寄生组合继承的代码](C:\Users\admin\Desktop\系统笔记\img_js_高级\寄生组合继承的代码.png)

------

#### Object是其他所有类的父类，顶层类

- 给Object.prototype添加属性，所有的对象都会有添加的属性

```js
  <script src="./js/inherit_utils.js"></script>
  <script>

    function Person() {}
    function Student() {}
    function Teacher() {}

    inherit(Student, Person)
    console.log(Person.prototype.__proto__ === Object.prototype)

    // 在Object的原型上添加属性
    Object.prototype.message = "ha"
    var stu = new Student()
    console.log(stu.message)

    // Object原型上本来就已经存放一些方法
    console.log(Object.prototype)
    console.log(stu.toString())

    // 函数对象也是最终继承自Object
    function foo() {}
    console.log(foo.message)

  </script>
```

#### 对象的方法补充

```js
  <script>

    var obj = {
      name: "why",
      age: 18
    }

    var info = createObject(obj)
    info.address = "中国"
    info.intro = "中国大好河山"

    // 1.hasOwnProperty
    // console.log(info.hasOwnProperty("name")) // false
    // console.log(info.hasOwnProperty("address")) // true

    // 2.in操作符
    // console.log("name" in info)   // true
    // console.log("address" in info)  // true
    // 注意: for in遍历不仅仅是自己对象上的内容, 也包括原型对象上的内容
    for (var key in info) {
      console.log(key)
    }

    // 3.instanceof；实例对象和类的关系
    // instanceof用于判断对象和类(构造函数)之间的关系
    function Person() {}
    function Student() {}
    inherit(Student, Person)

    // stu实例(instance)对象
    var stu = new Student()
    console.log(stu instanceof Student)
    console.log(stu instanceof Person)
    console.log(stu instanceof Object)
    console.log(stu instanceof Array)

    // 4.isPrototypeOf；Student不是stu的原型
    console.log(Student.prototype.isPrototypeOf(stu))
    console.log(Person.prototype.isPrototypeOf(stu))
    
    // 可以用于判断对象之间的继承
    console.log(obj.isPrototypeOf(info))
```

![对象的方法补充](C:\Users\admin\Desktop\系统笔记\img_js_高级\对象的方法补充.png)

------

#### 创建对象的原型继承关系

```js
    var obj = {} // new Object()；Object 构造函数创建的
    obj.__proto__ // Object.prototype

    function foo() {} // new Function()Function 构造函数创建的
    console.log(foo.__proto__) // Function.prototype

    function Person() { // Person.__proto === Function.prototype

    }
```

#### 创建对象的内存表现

- 函数有 显式原型 prototype 和  隐式原型  `__proto`
- 对象只有 `__proto__`
- 原型对象有 `__proto__` 和 constructor

![创建对象](C:\Users\admin\Desktop\系统笔记\img_js_高级\创建对象.png)

------

#### 原型关系

![ES6原型继承关系](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES6原型继承关系.png)

------

构造函数创建类

```js

    function Person(name, age) {
      this.name = name
      this.age = age
    }
	// 类属性
    Person.totalCounter = "70亿"

    // 添加Person原型上的方法也成为 实例方法
    Person.prototype.running = function() {
      console.log(this.name + "running~")
    }
    Person.prototype.eating = function() {
      console.log("eating~")
    }

    // 添加Person对象本身的方法成为 类方法
    var names = ["abc", "cba", "nba", "mba"]
    Person.randomPerson = function() {
      return new Person('1','2')
    }

    // 实例对象
    var p1 = new Person("why", 18)
    var p2 = new Person("kobe", 30)
    p1.running()

    // 类的方法
    var p = Person.randomPerson()
    console.log(p)
```

#### 认识class定义类

```js
    // ES5中定义类
    // function Person() {}

    // ES6定义类
    // {key: value} -> 对象
    // {表达式} -> 代码块
    // {} -> 类的结构
    class Person {

    }

    // 创建实例对象
    var p1 = new Person()
    var p2 = new Person()
    console.log(p1, p2)
```

![认识class定义类](C:\Users\admin\Desktop\系统笔记\img_js_高级\认识class定义类.png)

------

#### 类和构造函数的异同

- 构造函数可以作为普通函数直接调用
- 类不能作为普通函数直接调用

![类和构造函数的异同](C:\Users\admin\Desktop\系统笔记\img_js_高级\类和构造函数的异同.png)

------

#### 类的构造函数

- constructor

![类的构造函数](C:\Users\admin\Desktop\系统笔记\img_js_高级\类的构造函数.png)

------

#### 类的实例方法

- 普通函数

![类的实例方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\类的实例方法.png)

------

#### class类

```js
    // 编程: 高内聚低耦合
    class Person {
      // 1.类中的构造函数
      // 当我们通过new关键字调用一个Person类时, 默认调用class中的constructor方法;使用  constructor方法 接收参数
      // constructor 是 Person的方法，执向Person， 在new Person的时候，自动执行constructor
      constructor(name, age) {
        // this是实例对象，p1
        this.name = name
        this.age = age
      }

      // 2.实例方法；类中的普通函数
      // 本质上是放在Person.prototype
      running() {
        console.log(this.name + " running~")
      }
      eating() {
        console.log(this.name + " eating~")
      }
    }

    // 创建实例对象
    var p1 = new Person("why", 18)

    // 使用实例对象中属性和方法
    console.log(p1.name, p1.age)
    p1.running()
    p1.eating()

    // 研究内容
    console.log(Person.prototype === p1.__proto__)
    console.log(Person.running)
    console.log(Person.prototype.running)
```

#### 类的访问器方法

```js
    // 访问器的应用场景
    class Rectangle {
      constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
      }

      get position() {
        return { x: this.x, y: this.y }
      }

      get size() {
        return { width: this.width, height: this.height }
      }
    }

    var rect1 = new Rectangle(10, 20, 100, 200)
    console.log(rect1.position)
    console.log(rect1.size)
```

![类的访问器方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\类的访问器方法.png)

------

#### 类的静态方法

```js
// es5构造函数    
function Person() {}
    // // 实例方法
    Person.prototype.running = function() {}
    // // 类方法
    Person.randomPerson = function() {}

    var p1 = new Person()
    p1.running()
    Person.randomPerson()

    //es6 class定义的类
    var names = ["abc", "cba", "nba", "mba"]
    class Person {
      constructor(name, age) {
        this.name = name
        this.age = age
      }

      // 实例方法
      running() {
        console.log(this.name + " running~")
      }
      eating() {}

      // 类方法(静态方法)
      static randomPerson() {
        console.log(this) // this是类 Person
        var randomName = names[0]
        return new this(randomName, 18)
      }
    }

    var p1 = new Person()
    p1.running()
    p1.eating()
    var randomPerson = Person.randomPerson()
    console.log(randomPerson)
```

![类的静态方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\类的静态方法.png)

------

#### ES6类的继承 - extends

![ES6类的继承 - extends](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES6类的继承 - extends.png)

------

#### super关键字

- super 用来调用父类，放在constructor内才能给父类传递参数并且在使用this之前使用super ，不放在constructor内就不传递参数，constructor是子类默认创建的用来接收参数，可以在constructor构造函数中、实例方法中、静态方法中使用super 

```js
    // 定义父类
    class Person {
      constructor(name, age) {
        this.name = name
        this.age = age
      }

      running() {
        console.log("running~")
      }
      eating() {
        console.log("eating~")
      }

    }
    // 子类继承父类
    class Student extends Person {
      // constructor;1-子类的构造函数中使用super
      constructor(name, age, sno, score) {
        // super 接收参数并调用父类传递参数
        super(name, age)
        this.sno = sno
        this.score = score
      }

      studying() {
        console.log("studying~")
      }
    }

    var stu1 = new Student("why", 18, 111, 100)
    stu1.running()
    stu1.eating()
    stu1.studying()
```

```js
    class Animal {
      running() {
        console.log("running")
      }
      eating() {
        console.log("eating")
      }

      static sleep() {
        console.log("static animal sleep")
      }
    }

    class Dog extends Animal {
      // 子类如果对于父类的方法实现不满足(继承过来的方法)
      // 重新实现称之为重写(父类方法的重写)
      running() {
        console.log("dog四条腿")
        // 调用父类的方法；2-实例方法中使用super
        super.running()
      }

      static sleep() {
        console.log("趴着")
        // static；3-静态方法中使用super
        super.sleep()
      }
    }

    var dog = new Dog()
    dog.running()
    dog.eating()

    Dog.sleep()
```

![super关键字](C:\Users\admin\Desktop\系统笔记\img_js_高级\super关键字.png)

------

#### 继承内置类并扩展

```js
    // 1.创建一个新的类, 继承自Array进行扩展
    class HYArray extends Array {
      get lastItem() {
        return this[this.length - 1]
      }

      get firstItem() {
        return this[0]
      }
    }

    var arr = new HYArray(10, 20, 30)
    // Array 默认的
    console.log(arr)
    console.log(arr.length)
    console.log(arr[0])
    // 扩展的方法
    console.log(arr.lastItem)
    console.log(arr.firstItem)

    // 2.直接对Array进行扩展
    Array.prototype.lastItem = function() {
      return this[this.length - 1]
    }

    var arr = new Array(10, 20, 30)
    console.log(arr.__proto__ === Array.prototype)
    console.log(arr.lastItem())
```

![继承内置类](C:\Users\admin\Desktop\系统笔记\img_js_高级\继承内置类.png)

------

#### 类的混入mixin

- 使用 mixin 继承多个类

```js
    // JavaScript只支持单继承(不支持多继承)
    function mixinAnimal(BaseClass) {
      return class extends BaseClass {
        running() {
          console.log("running~")
        }
      }
    }

    function mixinRunner(BaseClass) {
      return class extends BaseClass {
        flying() {
          console.log("flying~")
        }
      }
    }

    class Bird {
      eating() {
        console.log("eating~")
      }
    }

    // NewBird继承了Bird，又继承了mixinAnimal，又继承了mixinRunner
    class NewBird extends mixinRunner(mixinAnimal(Bird)) {
    }
    var bird = new NewBird()
    bird.flying()
    bird.running()
    bird.eating()
```

![类的混入mixin](C:\Users\admin\Desktop\系统笔记\img_js_高级\类的混入mixin.png)

------

#### babel将ES5转ES6

- 下载源码-引入-打断点debugger-依次查看

#### JavaScript中的多态

- 多个子类继承同个父类，实现各自不同的方法

```js
    // 继承是多态的前提
    // shape形状
    class Shape {
      getArea() {}
    }

    class Rectangle extends Shape {
      constructor(width, height) {
        super()
        this.width = width
        this.height = height
      }

      getArea() {
        return this.width * this.height
      }
    }

    class Circle extends Shape {
      constructor(radius) {
        super()
        this.radius = radius
      }

      getArea() {
        return this.radius * this.radius * 3.14
      }
    }

    var rect1 = new Rectangle(100, 200)
    var rect2 = new Rectangle(20, 30)
    var c1 = new Circle(10)
    var c2 = new Circle(15)

    // 表现形式就是多态
    /*
      在严格意义的面向对象语言中, 多态的是存在如下条件的:
        1.必须有继承(实现接口)
        2.必须有父类引用指向子类对象
    */
    function getShapeArea(shape) {
      console.log(shape.getArea())
    }

    getShapeArea(rect1)
    getShapeArea(c1)			
```

- 不同数据类型进行同一操作，表现出不同的行为

```js
    function sum(a1, a2) {
      return a1 + a2
    }
    sum(20, 30)
    sum("abc", "cba")
```

![JavaScript中的多态](C:\Users\admin\Desktop\系统笔记\img_js_高级\JavaScript中的多态.png)

------

#### 字面量的增强

- 能访问到的，都可以同名省略

```js
    var name = "why"
    var age = 18
    var key = "address" + " city"
    var obj = {
      // 1.属性的增强
      name,
      age,
      swimming: function() {
        console.log(this)
      },
      // 2.方法的增强
      swimming() {
        console.log(this)
      },
      // 无this
      swimming: () => {
        console.log(this)
      },

      // 3.计算属性名；引用外部key对应的value
      [key]: "广州"
      // 'address city': "广州"
    }
```

![字面量的增强](C:\Users\admin\Desktop\系统笔记\img_js_高级\字面量的增强.png)

------

#### 解构

- 数组、对象，解构

```js
   var names = ["abc", "cba", undefined, "nba", "mba"]

    // 1.数组的解构
    // 1.1. 基本使用;names 的前几个自定义名字
    var [name1, name2, name3] = names
    console.log(name1, name2, name3) // "abc", "cba", undefined

    // 1.2. 顺序问题: 严格的顺序
    var [name1, , name3] = names // 中间有个空格
    console.log(name1, name3)  // "abc", undefined,

    // 1.3. 解构出数组
    var [name1, name2, ...newNames] = names
    // console.log(name1, name2, newNames) newNames : undefined, "nba", "mba"

    // 1.4. 解构的默认值
    var [name1, name2, name3 = "default"] = names
    console.log(name1, name2, name3)

    // 2.对象的解构
    var obj = { name: "why", age: 18, height: 1.88 }
    // 2.1. 基本使用
    var { name, age, height } = obj
    console.log(name, age, height) // why 18 1.88

    // 2.2. 顺序问题: 对象的解构是没有顺序, 根据key解构
    var { height, name, age } = obj
    console.log(name, age, height)

    // 2.3. 对变量进行重命名
    var { height: wHeight, name: wName, age: wAge } = obj
    console.log(wName, wAge, wHeight)

    // 2.4. 默认值
    var { 
      height: wHeight, 
      name: wName, 
      age: wAge, 
      address: wAddress = "中国"
    } = obj
    console.log(wName, wAge, wHeight, wAddress)

    // 2.5. 对象的剩余内容
    var {
      name,
      age,
      ...newObj
    } = obj
    console.log(newObj)

    // 应用: 在函数中(其他类似的地方)直接使用属性名
    // function getPosition(data) {
    //   console.log(data.x, data.y)
    // }
    function getPosition({ x, y }) {
      console.log(x, y)
    }

    getPosition({ x: 10, y: 20 })
    getPosition({ x: 25, y: 35 })
```

![解构](C:\Users\admin\Desktop\系统笔记\img_js_高级\解构.png)

------

![解构应用](C:\Users\admin\Desktop\系统笔记\img_js_高级\解构应用.png)

------

#### apply&call

```js
    function foo(name, age) {
      console.log(this, name, age)
    }

    // 1.给函数对象添加方法: hyapply
    Function.prototype.hyapply = function (thisArg, otherArgs) {
      // thisArg -> 传入的第一个参数, 要绑定的this
      // console.log(this) // -> 当前调用函数的对象

      // 1-改this指向
      // this是调用者，是foo，赋值给thisArg的自定义方法fn，在执行fn方法的时候，this的调用者变成了thisArg，this指向了thisArg，实现改变this指向
      // thisArg.fn = this
      // thisArg.fn()
      // delete thisArg.fn

      // 获取thisArg, 并且确保是一个对象类型
      thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)

      Object.defineProperty(thisArg, "fn", {
        enumerable: false,
        configurable: true,
        value: this
      })
      // 2-改this指向并传入参数
      thisArg.fn(...otherArgs)

      delete thisArg.fn
    }

    // foo.hyapply({ name: "why" }, ["james", 25])
    // foo.hyapply(123, ["why", 18])
    // foo.hyapply(null, ["kobe", 30])


    // 2.给函数对象添加方法: hycall
    Function.prototype.hycall = function (thisArg, ...otherArgs) {
      // 1.获取thisArg, 并且确保是一个对象类型
      thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)

      Object.defineProperty(thisArg, "fn", {
        enumerable: false,
        configurable: true,
        value: this
      })
      thisArg.fn(...otherArgs)

      delete thisArg.fn
    }

    foo.hycall({
      name: "why"
    }, "james", 25)
    foo.hycall(123, "why", 18)
    foo.hycall(null, "kobe", 30)
```

##### 封装

```js
    function foo(name, age) {
      console.log(this, name, age)
    }

    // 1.封装思想
    // 1.1.封装到独立的函数中
    function execFn(thisArg, otherArgs, fn) {
      // 1.获取thisArg, 并且确保是一个对象类型
      thisArg = (thisArg === null || thisArg === undefined)? window: Object(thisArg)

      Object.defineProperty(thisArg, "fn", {
        enumerable: false,
        configurable: true,
        value: fn // 这里直接写this是window
      })

      // 执行代码
      thisArg.fn(...otherArgs)

      delete thisArg.fn
    }

    // 1.2. 封装原型中
    Function.prototype.hyexec = function(thisArg, otherArgs) {
      // 1.获取thisArg, 并且确保是一个对象类型
      thisArg = (thisArg === null || thisArg === undefined)? window: Object(thisArg)

      Object.defineProperty(thisArg, "fn", {
        enumerable: false,
        configurable: true,
        value: this // foo
      })
      thisArg.fn(...otherArgs)

      delete thisArg.fn
    }

    // 1.给函数对象添加方法: hyapply
    Function.prototype.hyapply = function(thisArg, otherArgs) {
      // execFn(thisArg, otherArgs,this)
      this.hyexec(thisArg, otherArgs) // 这个不需要传入this，因为hyexec是通过this（foo）调用的，在hyexec中的this也就是foo
    }
    // 2.给函数对象添加方法: hycall
    Function.prototype.hycall = function(thisArg, ...otherArgs) {
      this.hyexec(thisArg, otherArgs)
    }

    foo.hyapply({ name: "why" }, ["james", 25])
    foo.hyapply(123, ["why", 18])
    foo.hyapply(null, ["kobe", 30])
    
    foo.hycall({ name: "why" }, "james", 25)
    foo.hycall(123, "why", 18)
    foo.hycall(null, "kobe", 30)
```

#### bind

```js
    function foo(name, age, height, address) {
      console.log(this, name, age, height, address)
    }

    // 实现hybind函数
    Function.prototype.hybind = function (thisArg, ...otherArgs) {
      // console.log(this) // -> foo函数对象
      thisArg = thisArg === null || thisArg === undefined ? window : Object(thisArg)
      // defineProperty 给 thisArg 添加属性 fn ，属性值 是 value:this，this是foo函数；thisArg有了一个属性是foo函数，thisArg.fn，调用foo函数，那么foo中的this是被thisArg调用的，就指向了thisArg
      Object.defineProperty(thisArg, "fn", {
        enumerable: false,
        configurable: true,
        writable: false,
        value: this // foo
      })
      // otherArgs 是 foo.hybind 传入的参数
      // newArgs 是 newFoo 传入的参数
      // A 
      return (...newArgs) => {
        // 合并参数
        // var allArgs = otherArgs.concat(newArgs)
        var allArgs = [...otherArgs, ...newArgs]
        // 改变foo调用者，即改变foo的this指向 
        // thisArg.fn() = abc.foo()；把foo的this变成abc
        thisArg.fn(...allArgs)
      }
      // B 
      // return function (...newArgs) {
      //   var allArgs = [...otherArgs, ...newArgs]
      //   thisArg.fn(...allArgs)
      // }
    }
    // this绑定到返回的新函数上 
    var newFoo = foo.hybind("abc", "kobe", 30)
    newFoo(1.88, "广州市")
    newFoo(1.88, "广州市")
    newFoo(1.88, "广州市")
    newFoo(1.88, "广州市")
```

### ES6-ES13

#### ECMA代码执行描述

![ECMA代码执行描述](C:\Users\admin\Desktop\系统笔记\img_js_高级\ECMA代码执行描述.png)

------

#### ECMA描述内存图

![ECMA描述内存图](C:\Users\admin\Desktop\系统笔记\img_js_高级\ECMA描述内存图.png)

------

#### 词法环境

![词法环境](C:\Users\admin\Desktop\系统笔记\img_js_高级\词法环境.png)

------

#### LexicalEnvironment和VariableEnvironment

- 一个执行上下文会关联2个词法环境
  - 是否允许变量提升

![LexicalEnvironment和VariableEnvironment](C:\Users\admin\Desktop\系统笔记\img_js_高级\LexicalEnvironment和VariableEnvironment.png)

------

#### 环境记录

![环境记录](C:\Users\admin\Desktop\系统笔记\img_js_高级\环境记录.png)

------

#### let、const使用

![let、const使用](C:\Users\admin\Desktop\系统笔记\img_js_高级\let、const使用.png)

------

#### let、const作用域提升

![let、const作用域提升](C:\Users\admin\Desktop\系统笔记\img_js_高级\let、const作用域提升.png)

------

#### 暂时性死区（TDZ）

```js
    // 暂时性死区形成之后, 在该区域内这个标识符不能访问
    // const message 之前的是暂时性死区
    // 暂时性死区和定义的位置没有关系, 和代码执行的顺序有关系
    function foo() {
      console.log(message)
      const message = "哈哈哈哈"
    }
```

```js
      function foo1() {
        console.log(message1);
      }
      const message1 = "哈哈哈哈";
      // 可以访问 message1，执行顺序，先定义，再访问的
      foo();
```

```js
      let message = "Hello World";
      function foo() {
        console.log(message);

        let message = "哈哈哈哈";
      }
	// 报错，不能访问message，访问的是foo内的message，不是全局的
      foo();
```

![暂时性死区（TDZ）](C:\Users\admin\Desktop\系统笔记\img_js_高级\暂时性死区（TDZ）.png)

------

#### let、const有没有作用域提升？

![let、const有没有作用域提升？](C:\Users\admin\Desktop\系统笔记\img_js_高级\let、const有没有作用域提升？.png)

------

#### window对象添加属性

- var 声明的变量被添加到window

![window对象添加属性](C:\Users\admin\Desktop\系统笔记\img_js_高级\window对象添加属性.png)

------

#### 变量被保存到VariableMap中

![变量被保存到VariableMap中](C:\Users\admin\Desktop\系统笔记\img_js_高级\变量被保存到VariableMap中.png)

------

#### var的块级作用域

![var的块级作用域](C:\Users\admin\Desktop\系统笔记\img_js_高级\var的块级作用域.png)

------

#### let、const的块级作用域

```js
    // 1.在ES5以及之前, 只有全局和函数会形成自己的作用域
    // 函数作用域
    function foo() {
      console.log("Hello World")
    }
    // 没有作用域
    {
      var message = "Hello World"
    }
    // 全局作用域
    var message = "Hello World"

    // 2.从ES6开始, 使用let/const/function/class声明的变量是有块级作用域

    // 块级作用域

    // 不能访问，不能在块级作用域声明前访问
    foo()
    console.log(message)

    {
      var message = "Hello World"
      let age = 18
      const height = 1.88

      class Person {}

      function foo() {
        console.log("foo function")
      }
    }
    // 不能访问，因为块级作用域
    console.log(age)
    console.log(height)
    const p = new Person()
    // 可以访问，在块级作用域声明后访问
    foo()
    console.log(message)
```

![let、const的块级作用域](C:\Users\admin\Desktop\系统笔记\img_js_高级\let、const的块级作用域.png)

------

#### 块级作用域的应用

- 块级作用域会形成新的词法环境，当块级作用域内的代码执行完后，词法环境就会销毁，环境内的数据就没了，所以块级作用域后面的代码访问块级作用域内的变量时，因为已经被销毁了，所以访问不到

![词法环境图](C:\Users\admin\Desktop\系统笔记\img_js_高级\词法环境图.png)

```js
    // 监听4个按钮的点击
    const btnEls = document.querySelectorAll("button")
    for (var i = 0; i < btnEls.length; i++) {
      var btnEl = btnEls[i];
      // 闭包形成了函数作用域，4个闭包4个作用域，m是函数作用域内的变量，不是全局的
      (function(m) {
        btnEl.onclick = function() {
          debugger
          console.log(`点击了${m}按钮`)
        }
      })(i)
    }

    for (var i = 0; i < btnEls.length; i++) {
      var btnEl = btnEls[i]; // 这个就是this
      btnEl.index = i // 给每一个添加的自定义属性
        btnEl.onclick = function() {
          debugger
          console.log(`点击了${this.index}按钮`)
        }
    }

    // let 本身就是 块级作用域的，每次循环都会形成一个词法环境保存变量i，那么当下次循环时，上次的变量为什么没有被销毁，因为被onclick函数引用了变量i；4个词法环境，保存了各自的4个变量
    for (let i = 0; i < btnEls.length; i++) {
      const btnEl = btnEls[i];
      btnEl.onclick = function() {
        // 这个函数内的i，是访问的
        console.log(`点击了${i}按钮`)
      }
    }

    for (let i = 0; i < btnEls.length; i++) {
      const btnEl = btnEls[i];
      btnEl.onclick = function() {
        // 这个函数内的i，是访问的全局的i，点击是在循环完成后执行的，循环完成i是4
        console.log(`点击了${i}按钮`)
      }
    }
```

![let词法环境的应用](C:\Users\admin\Desktop\系统笔记\img_js_高级\let词法环境的应用.png)

------

![块级作用域的应用](C:\Users\admin\Desktop\系统笔记\img_js_高级\块级作用域的应用.png)

------

#### var-let-const的选择

![var-let-const的选择](C:\Users\admin\Desktop\系统笔记\img_js_高级\var-let-const的选择.png)

------

#### 字符串模板

- 也可以调用函数，使用函数的返回值

![字符串模板](C:\Users\admin\Desktop\系统笔记\img_js_高级\字符串模板.png)

------

#### 标签模板字符串使用

- 函数使用标签模板字符串

![标签模板字符串](C:\Users\admin\Desktop\系统笔记\img_js_高级\标签模板字符串.png)

```js
    function foo(...args) {
      console.log("参数:", args)
    }

    // foo("why", 18, 1.88)
	// args 为第一个数组，第一个参数又是数组，存放key；第一个数组的其他项是value
    foo`my name is ${name}, age is ${age}, height is ${1.88}`
```

![标签模板字符串使用](C:\Users\admin\Desktop\系统笔记\img_js_高级\标签模板字符串使用.png)

------

#### React的styled-components库

- 用于在css中直接使用js变量、函数

![style](C:\Users\admin\Desktop\系统笔记\img_js_高级\style.png)

#### 函数的默认参数

```js
      // 注意: 默认参数是不会对null进行处理的
      function foo(arg1 = "我是默认值", arg2 = "我也是默认值") {
        // 1.两种写法不严谨
        // 默认值写法一:
        // arg1 = arg1 ? arg1: "我是默认值"

        // 默认值写法二:
        // arg1 = arg1 || "我是默认值"

        // 2.严谨的写法
        // 三元运算符
        // arg1 = (arg1 === undefined || arg1 === null) ? "我是默认值": arg1

        // ES6之后新增语法: ?? ；?? 前面的值如果是 undefined 或者 null 2个中的一个，就使用后面的值，否则使用前面的值
        // arg1 = arg1 ?? "我是默认值"

        // 3.简便的写法: 默认参数
        console.log(arg1);
      }
```

![函数的默认参数](C:\Users\admin\Desktop\系统笔记\img_js_高级\函数的默认参数.png)

------

#### 函数默认值的补充

- 有默认参数的形参尽量写到后面
- 有默认参数的形参, 是不会计算在length之内(并且后面所有的参数都不会计算在length之内)
- 剩余参数也是放到后面(默认参数放到剩余参数的前面)

![函数默认值的补充](C:\Users\admin\Desktop\系统笔记\img_js_高级\函数默认值的补充.png)

------

#### 默认值&解构

```js
    // 1.解构添加默认值
    const obj = { name: "why" }
    const { name = "kobe", age = 18 } = obj

    // 2.函数的默认值是一个对象；对象添加默认值
    function foo(obj = { name: "why", age: 18 }) {
      console.log(obj.name, obj.age)
    }
    // 传入一个对象，并给对象添加默认值，再解构出来
    function foo({ name, age } = { name: "why", age: 18 }) {
      console.log(name, age)
    }
    // 传入一个空对象，从空对象中解构，并添加默认值
    function foo({ name = "why", age = 18 } = {}) {
      console.log(name, age)
    }

    foo({})
```

#### 函数的剩余参数

![函数的剩余参数](C:\Users\admin\Desktop\系统笔记\img_js_高级\函数的剩余参数.png)

------

#### 函数箭头函数的补充

```js
    // 1.function定义的函数是有两个原型的:
    function foo() {}
    console.log(foo.prototype) // new foo() -> f.__proto__ = foo.prototype
    console.log(foo.__proto__) // -> Function.prototype

    // 2.箭头函数是没有显式原型
    // 在ES6之后, 定义一个类要使用class定义
    var bar = () => {}
    console.log(bar.__proto__ === Function.prototype) // true
    // 没有显式原型
    console.log(bar.prototype) // false
    var b = new bar() // 不能new 箭头函数
```

![函数箭头函数的补充](C:\Users\admin\Desktop\系统笔记\img_js_高级\函数箭头函数的补充.png)

------

#### 展开语法

- 浅拷贝
- 展开传参

```js
    // 1.基本演练
    // ES6
    const names = ["abc", "cba", "nba", "mba"]
    const str = "Hello"

    // const newNames = [...names, "aaa", "bbb"]
    // console.log(newNames)

    function foo(name1, name2, ...args) {
      console.log(name1, name2, args)
    }

    foo(...names)
    foo(...str)

    // ES9(ES2018)
    const obj = {
      name: "why",
      age: 18
    }
    // 不可以这样来使用
    // foo(...obj) // 在函数的调用时, 用展开运算符, 将对应的展开数据, 进行迭代
    // 可迭代对象: 数组/string/arguments，不包括对象

    const info = {
      // 展开对象 
      ...obj,
      height: 1.88,
      address: "广州市"
    }
    console.log(info)
```

![展开语法](C:\Users\admin\Desktop\系统笔记\img_js_高级\展开语法.png)

------

#### 对象拷贝

- 引用赋值

- 浅拷贝
- 深拷贝

```js
    const obj = {
      name: "why",
      age: 18,
      height: 1.88,
      friend: {
        name: "curry"
      }
    }

    // 1.引用赋值；使用的是同一个地址的对象
    const info1 = obj

    
    // 2.浅拷贝；只能拷贝第一层
    const info2 = {
      ...obj
    }
    // 3.深拷贝；拷贝多层
    const info3 = JSON.parse(JSON.stringify(obj))
```

![01_引用赋值](C:\Users\admin\Desktop\系统笔记\img_js_高级\01_引用赋值.png)

![02_浅拷贝-原始类型](C:\Users\admin\Desktop\系统笔记\img_js_高级\02_浅拷贝-原始类型.png)

![03_浅拷贝-复杂类型](C:\Users\admin\Desktop\系统笔记\img_js_高级\03_浅拷贝-复杂类型.png)

![04_深拷贝-JSON做法](C:\Users\admin\Desktop\系统笔记\img_js_高级\04_深拷贝-JSON做法.png)

#### 数值的表示

```js
    // 1.进制
    // 10进制
    console.log(100)
    // 二进制
    console.log(0b100)
    // 8进制
    console.log(0o100)
    // 16进制
    console.log(0x100)

    // 2.长数字的表示
    const money = 100_00_00_0000_00_00
```

![数值的表示](C:\Users\admin\Desktop\系统笔记\img_js_高级\数值的表示.png)

------

#### Symbol的使用

```js
      // ES6之后可以使用Symbol生成一个独一无二的值
      const s1 = Symbol();
      const obj = {
        [s1]: "aaa",
      };
      console.log(obj); // Symbol() : 'aaa'

      const s2 = Symbol();
      obj[s2] = "bbb";
      console.log(obj); // Symbol() : 'bbb'

      function foo(obj) {
        const sKey = Symbol();
        // 通过Symbol添加的不会覆盖原有的值，因为Symbol生成一个独一无二的值；避免自己写的key和之前对象中的key重复导致覆盖之前的，有时并不知道之前的对象中key都有哪一些
        obj[sKey] = function () {};
        delete obj[sKey];
      }

      foo(obj);

      const obj = {
        name: "why",
        fn: "aaa",
      };
```

![Symbol的使用](C:\Users\admin\Desktop\系统笔记\img_js_高级\Symbol的使用.png)

------

#### Symbol作为属性名

```js
    const s1 = Symbol() // aaa
    const s2 = Symbol() // bbb

    // 1.把 Symbol 加入对象中
    const obj = {
      name: "why",
      age: 18,
      [s1]: "aaa",
      [s2]: "bbb"
    }

    const obj1 = {}
    obj1[s1] = "aaa"
    obj2[s2] = "bbb"

    const obj2 = {}
    Object.defineProperty(obj, s1, {
      value: "aaa"
    })

    // 2.获取symbol对应的key；getOwnPropertySymbols
    console.log(Object.keys(obj)) // 这个获取不到symbol对应的key
    console.log(Object.getOwnPropertySymbols(obj))
    const symbolKeys = Object.getOwnPropertySymbols(obj)
    for (const key of symbolKeys) {
      console.log(obj[key])
    }

    // 3.description
    // 3.1.Symbol函数直接生成的值, 都是独一无二
    const s3 = Symbol("ccc") // ccc 就是description、描述
    console.log(s3.description)
    const s4 = Symbol(s3.description)
    console.log(s3 === s4) // false

    // 3.2. 传入相同的description, 通过Symbol.for可以生成相同的Symbol值
    const s5 = Symbol.for("ddd")
    const s6 = Symbol.for("ddd")
    console.log(s5 === s6) // true

    // 获取传入的key
    console.log(Symbol.keyFor(s5))
```

![Symbol作为属性名](C:\Users\admin\Desktop\系统笔记\img_js_高级\Symbol作为属性名.png)

------

#### 相同值的Symbol

![相同值的Symbol](C:\Users\admin\Desktop\系统笔记\img_js_高级\相同值的Symbol.png)

------

### Set&Map-数据结构

#### Set的基本使用

```js
    // 1.创建Set
    const set = new Set()
    console.log(set)

    // 2.添加元素
    set.add(10)
    set.add(22)
    set.add(35)
    set.add(22)
    console.log(set)

    const info = {}
    const obj = {name: "obj"}
    set.add(info)
    set.add(obj)
    set.add(obj) // 只要是重复的都不会再次被添加到set
    console.log(set)

    // 3.应用场景: 数组的去重
    const names = ["abc", "cba", "nba", "cba", "nba"]
    // 1
    // const newNames = []
    // for (const item of names) {
    //   if (!newNames.includes(item)) {
    //     newNames.push(item)
    //   }
    // }
    // console.log(newNames)
    // 2
    const newNamesSet = new Set(names)
    const newNames = Array.from(newNamesSet)
    console.log(newNames)

    // 4.Set的其他属性和方法
    // 属性
    console.log(set.size)
    // 方法
    // 4.1. add方法
    set.add(100)
    // 4.2. delete方法
    set.delete(obj)
    // 4.3. has方法
    console.log(set.has(info))
    // 4.4. clear方法
    set.clear()
    // 4.5. forEach
    set.forEach(item => console.log(item))

    // 5.set支持for...of
    for (const item of set) {
      console.log(item)
    }
```

![Set的基本使用](C:\Users\admin\Desktop\系统笔记\img_js_高级\Set的基本使用.png)

#### Set的常见方法

![Set的常见方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\Set的常见方法.png)

#### WeakSet使用

- 弱引用 
  - 可以获取到弱引用的数据
  - 在垃圾回收的时候，会把弱引用忽略掉，回收弱引用的数据占用的内存
  - 反之，就是强引用，在检查到存在引用时，不会回收

![WeakSet使用](C:\Users\admin\Desktop\系统笔记\img_js_高级\WeakSet使用.png)

#### WeakSet的应用

```js
      // 1.Weak Reference(弱引用)和Strong Reference(强引用)
      let obj1 = { name: "why" };
      let obj2 = { name: "kobe" };
      let obj3 = { name: "jame" };

      let arr = [obj1, obj2, obj3];
      obj1 = null;
      obj2 = null;
      obj3 = null;
      // 设置=null 后，obj123不会被回收，因为他们被arr引用了

      const set = new Set(arr);
      arr = null;
      // 设置=null 后，obj123不会被回收，因为他们被set引用了

      // 2.WeakSet的用法
      // 2.1.和Set的区别一: 只能存放对象类型
      const weakSet = new WeakSet();
      weakSet.add(obj1);
      weakSet.add(obj2);
      weakSet.add(obj3);

      // 2.2.和Set的区别二: 对对象的引用都是弱引用

      // 3.WeakSet的应用
      const pWeakSet = new WeakSet();
      class Person {
        constructor() {
          pWeakSet.add(this);
        }

        running() {
          if (!pWeakSet.has(this)) {
            console.log("Type error: 调用的方式不对");
            return;
          }
          console.log("running~");
        }
      }

      let p = new Person();
      p.running(); // this是p，可以调用
      const runFn = p.running;
      runFn(); // this是window，不可以调用
      const obj = { run: runFn };
      obj.run(); // this是obj，不可以调用
```

![WeakSet的应用](C:\Users\admin\Desktop\系统笔记\img_js_高级\WeakSet的应用.png)

#### Map的基本使用

- 用于把对象作为key

```js
      const info = { name: "why" };
      const info2 = { age: 18 };

      // 1.对象类型的局限性: 不可以使用复杂类型作为key
      // const obj = {
      //   address: "北京市",
      //   [info]: "哈哈哈",
      //   [info2]: "呵呵呵"
      // }
      // console.log(obj)

      // 2.Map映射类型
      const map = new Map();
      map.set(info, "aaaa"); // info是key，aaaa是value
      map.set(info2, "bbbb");
      console.log(map);

      // 3.Map的常见属性和方法
      console.log(map.size);
      // 3.1. set方法, 设置内容
      map.set(info, "cccc");
      // console.log(map)
      // 3.2. get方法, 获取内容
      console.log(map.get(info));
      // 3.3. delete方法, 删除内容
      map.delete(info);
      // console.log(map)
      // 3.4. has方法, 判断内容
      console.log(map.has(info2));
      // 3.5. clear方法, 清空内容
      map.clear();
      // console.log(map)
      // 3.6. forEach方法
      map.forEach((item) => console.log(item));

      // 4.for...of遍历
      for (const item of map) {
        // 从item中解构拿到key, value
        const [key, value] = item;
        console.log(key, value);
      }
```

![Map的基本使用](C:\Users\admin\Desktop\系统笔记\img_js_高级\Map的基本使用.png)

#### Map的常用方法

![Map的常用方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\Map的常用方法.png)

#### WeakMap的使用

```js
    let obj1 = { name: "why" }
    let obj2 = { name: "kobe" }

    // 1.WeakMap的基本使用；key只能是对象
    const weakMap = new WeakMap()
    weakMap.set(obj1, "aaa")
    weakMap.set(obj2, "bbb")

    obj1 = null
    obj2 = null
    // =null 后，obj12会被回收，weakMap.set是弱引用
```

![WeakMap的使用](C:\Users\admin\Desktop\系统笔记\img_js_高级\WeakMap的使用.png)

#### WeakMap的应用

![WeakMap的应用](C:\Users\admin\Desktop\系统笔记\img_js_高级\WeakMap的应用.png)

#### ES7~ES13

#### 7-Array Includes

![Array Includes](C:\Users\admin\Desktop\系统笔记\img_js_高级\Array Includes.png)

#### 7-exponentiation运算符

![exponentiation运算符](C:\Users\admin\Desktop\系统笔记\img_js_高级\exponentiation运算符.png)

#### ES8 Object values

```js
    const obj = {
      name: "why",
      age: 18,
      height: 1.88,
      address: "广州市"
    }

    // 1.获取所有的key
    const keys = Object.keys(obj)
    console.log(keys)

    // 2.ES8 Object.values
    const values = Object.values(obj)
    console.log(values)

    // 3.ES8 Object.entries
    // 3.1. 对对象操作
    const entries = Object.entries(obj)
    console.log(entries)
    for (const entry of entries) {
      const [key, value] = entry
      console.log(key, value)
    }

    // 3.2. 对数组/字符串操作(了解)
    console.log(Object.entries(["abc", "cba"]))
    console.log(Object.entries("Hello"))
```

![ES8 Object values](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES8 Object values.png)

#### ES8 Object entries

- entries 对象转成数组

![ES8 Object entries](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES8 Object entries.png)

#### ES8 - String Padding

- 隐藏身份证部分位数

```js
  <h1 class="card"></h1>
  <script>
    // padStart和padEnd；往前、往后，填充
    // 1.应用场景一: 对时间进行格式化
    const minute = "15".padStart(2, "0") // 使用0填充2位，如果是2位就不填充
    const second = "6".padStart(2, "0")
    // console.log(`${minute}:${second}`)

    // 2.应用场景二: 对一些敏感数据格式化
    let cardNumber = "132666200001018899"
    // -4 最后的4位
    const sliceNumber = cardNumber.slice(-4)
    // 将除了后4位的其他位使用*来填充；往前填充18个，本身有4个，就是填充14个*
    cardNumber = sliceNumber.padStart(cardNumber.length, "*")
    const cardEl = document.querySelector(".card")
    // 设置文本显示内容
    cardEl.textContent = cardNumber
    // cardEl.innerHTML = cardNumber
  </script>
```

![ES8 - String Padding](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES8 - String Padding.png)

#### ES8 - Trailing Commas

![ES8 - Trailing Commas](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES8 - Trailing Commas.png)

#### ES10 - flat flatMap

- 多维数组转一维数组

```js
    // 1.flat的使用: 
    // 将一个数组, 按照制定的深度遍历, 将遍历到的元素和子数组中的元素组成一个新的数组, 进行返回
    const nums = [10, 20, [111, 222], [333, 444], [[123, 321], [231, 312]]]
    const newNums1 = nums.flat(1)
    console.log(newNums1)
    const newNums2 = nums.flat(2)
    console.log(newNums2)

    // 2.flatMap的使用:
    // 1> 对数组中每一个元素应用一次传入的map对应的函数
    const messages = [
      "Hello World aaaaa",
      "Hello Coderwhy",
      "你好啊 李银河"
    ]

    // 1.for循环的方式:
    const newInfos = []
    for (const item of messages) {
      const infos = item.split(" ")
      for (const info of infos) {
        newInfos.push(info)
      }
    }
    console.log(newInfos)

    // 2.先进行map, 再进行flat操作
    const newMessages = messages.map(item => item.split(" "))
    const finalMessages = newMessages.flat(1)
    console.log(finalMessages)

    // 3.flatMap
    const finalMessages = messages.flatMap(item => item.split(" "))
    console.log(finalMessages)
```

![ES10 - flat flatMap](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES10 - flat flatMap.png)

#### ES10 - Object fromEntries

- fromEntries 数组转成对象

```js
    // 1.对象
    const obj = {
      name: "why",
      age: 18,
      height: 1.88
    }

    const entries = Object.entries(obj) // 对象转数组
    const info = Object.fromEntries(entries) // 数组转对象
    console.log(info)

    // 2.应用
    const searchString = "?name=why&age=18&height=1.88"
    const params = new URLSearchParams(searchString)
    console.log(params.get("name"))
    console.log(params.get("age"))
    console.log(params.entries())

    // for (const item of params.entries()) {
    //   console.log(item)
    // }

    const paramObj = Object.fromEntries(params)
    console.log(paramObj)
```

![ES10 - Object fromEntries](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES10 - Object fromEntries.png)

#### URLSearchParams 

- 处理 URL 的查询字符串 
- https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams

#### ES10 - trimStart trimEnd

```js
    const message = "   Hello World    "
    // 去除空格 
    console.log(message.trim())
    console.log(message.trimStart())
    console.log(message.trimEnd())
```

![ES10 - trimStart trimEnd](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES10 - trimStart trimEnd.png)

#### ES11 - BigInt

![ES11 - BigInt](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES11 - BigInt.png)

#### ES11 - Nullish Coalescing Operator

-  空值合并运算符 
  - 双问号，问号前面为 unll undefined 才使用后面的值，否则使用前面的值

```js
    let info = undefined
    // info = info || "默认值"
    // console.log(info)

    // ??: 空值合并运算符
    info = info ?? "默认值"
    console.log(info)
```

![ES11 - Nullish Coalescing Operator](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES11 - Nullish Coalescing Operator.png)

#### ES11 - Optional Chaining

- 可选链，有才调用，判断 不为  unll undefined
- 问号点 ?. 
- 函数调用也需要判断

```js
    const obj = {
      name: "why",
      friend: {
        name: "kobe",
        // running: function() {
        //   console.log("running~")
        // }
      }
    }

    // 1.直接调用: 非常危险
    obj.friend.running()

    // 2.if判断: 麻烦/不够简洁
    if (obj.friend && obj.friend.running) {
      obj.friend.running()
    }

    // 3.可选链的用法: ?.
	// 如果没有running函数会返回undefined，需要把undefined再进行判断 ?. 再进行调用
// obj?.friend?.running() ==> undefined()
    obj?.friend?.running?.()
```

![ES11 - Optional Chaining](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES11 - Optional Chaining.png)

#### ES11 - Global This

![ES11 - Global This](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES11 - Global This.png)

#### ES11 - for..in标准化

- 遍历数组、字符串
  - 对象是遍历key

![ES11 - for..in标准化](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES11 - for..in标准化.png)

#### ES12 - FinalizationRegistry

- register方法 监听垃圾回收时的回调
- 会在cpu空闲时，再去检查回收，并不是马上回收

```js
    let obj = { name: "why", age: 18 }
    let info = { name: "kobe", age: 30 }

    const finalRegistry = new FinalizationRegistry((value) => {
      console.log("某一个对象被回收了:", value)
    })

    finalRegistry.register(obj, "why")
    finalRegistry.register(info, "kobe")

    // obj = null
    info = null
```

![ES12 - FinalizationRegistry](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES12 - FinalizationRegistry.png)

#### ES12 - WeakRefs

- 弱引用 ,避免内存泄漏

```js
    let info = {
      name: "why",
      age: 18
    }
    // 1-弱引用 
    let obj = new WeakRef(info)
    let obj2 = new WeakRef(info)

    const finalRegistry = new FinalizationRegistry(() => {
      console.log("对象被回收~")
    })

    finalRegistry.register(info, "info")

    setTimeout(() => {
      // 2-引用来源被回收
      info = null
    }, 2000)
    // 等待垃圾回收后
    setTimeout(() => {
      // 3-弱引用 被回收；通过 deref() 获取 属性
      console.log(obj.deref().name, obj.deref().age)
    }, 8000)
```

![ES12 - WeakRefs](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES12 - WeakRefs.png)

#### ES12 - logical assignment operators

- 逻辑赋值运算符

```js
    // 赋值运算符
    // const foo = "foo"
    let counter = 100
    counter = counter + 100
    counter += 50

    // 逻辑赋值运算符
    function foo(message) {
      // 1.||逻辑赋值运算符；message有值就是message（不包括空字符串），否则默认值；下面2种写法都是一个意思
      // message = message || "默认值"
      // message ||= "默认值"

      // 2.??逻辑赋值运算符；解决空字符串 使用 默认值的问题
      // message = message ?? "默认值"
      message ??= "默认值"

      console.log(message)
    }

    foo("abc")
    foo()

    // 3.&&逻辑赋值运算符
    let obj = {
      name: "why",
      running: function() {
        console.log("running~")
      }
    }

    // 3.1.&&一般的应用场景；存在obj再判断存在 obj.running，再调用 obj.running()
    obj && obj.running && obj.running()
    obj = obj && obj.name // 存在obj再取name；和下面是一个意思
    obj &&= obj.name
    console.log(obj)
```

![ES12 - logical assignment operators](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES12 - logical assignment operators.png)

#### ES12-字符串替换

- 替换第一个
- 替换所有的 why

```js
    const message = "my name is why, why age is 18"
    const newMessage = message.replace("why", "kobe")
    const newMessage2 = message.replaceAll("why", "kobe")
```

#### ES13 - method .at()

- 取值，第几个
- 不如使用 下标 取值

![ES13 - method .at()](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES13 - method .at().png)

#### ES13 - Object.hasOwn(obj, propKey)

- 判断一个属性是否属于自身，排除原型的属性
  - hasOwn
  - hasOwnProperty
  - 区别：
    - hasOwnProperty 是通过对象调用，可以在对象中自己写一个hasOwnProperty 方法
    - hasOwn是通过Object调用
    - Object.create(null)  创建的对象原型为null，对象自身和原型都没有hasOwnProperty ，无法判断
      - 但Object和原型无关，可以判断

```js
    const obj = {
      name: "why",
      age: 18,
      // 1.hasOwnProperty: 不能防止对象中也有一个自己的hasOwnProperty方法，可能会出意外
      hasOwnProperty: function () {
        return "abc"
      },
      __proto__: {
        address: "广州市"
      }
    }

    // 判断属性是在自身还是在原型上；hasOwnProperty 是对象obj的方法，如果自己在obj写一个同名的方法，那么就失效了
    console.log(obj.hasOwnProperty("name")) // true 自身
    console.log(obj.hasOwnProperty("address")) // false 原型
    // 判断属性是在自身还是在原型上
    console.log(Object.hasOwn(obj, "name")) // true 自身
    console.log(Object.hasOwn(obj, "address")) // false 原型


    // 2.和hasOwnProperty的区别二:
    const info = Object.create(null) // 创建的info原型为null
    info.name = "why"
    console.log(info.hasOwnProperty("name")) // 找不到hasOwnProperty方法，因为自身没有，原型为null也没有
    console.log(Object.hasOwn(info, "name")) // Object的方法和原型无关
```

![ES13 - Object.hasOwn(obj, propKey)](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES13 - Object.hasOwn(obj, propKey).png)

#### ES13 - New members of classes

```js
    class Person {
      // 1.实例对象的公共属性，相同的值
      // public 公共 -> public instance fields
      height = 1.88

      // ES13对象属性: private 私有 使用 # 开头 
      #intro = "name is why"


      // 2.类属性(static) 静态属性
      // 类属性: public
      static totalCount = "70亿"

      // 类属性: private 私有类属性；只能在类立面访问（{}），不能在类外面访问(Person.#maleTotalCount)
      static #maleTotalCount = "20亿"

      constructor(name, age) {
        // 实例对象中的属性: 在constructor通过this设置，每个实例拥有不同的值
        this.name = name
        this.age = age
        this.address = "广州市"
      }

      // 3.静态代码块;在加载解析类的时候就会执行，且只执行一次;用于类的初始化操作
      static {
        console.log("Hello World")
        console.log("Hello Person")
      }
    }

    const p = new Person("why", 18)
    console.log(p)
    console.log(p.name, p.age, p.height, p.address, p.#intro)
    console.log(Person.#maleTotalCount)
```

![ES13 - New members of classes](C:\Users\admin\Desktop\系统笔记\img_js_高级\ES13 - New members of classes.png)

### JS中代码报错

- 在js中代码报错，后面的代码都不会执行
- 使用 try catch 捕获错误，不影响后面的代码执行

### Proxy

#### 监听对象的操作

- defineProperty

```js
    const obj = {
      name: "why",
      age: 18,
      height: 1.88
    }

    // 需求: 监听对象属性的所有操作
    // 监听属性的操作
    // 1.针对一个属性
    let _name = obj.name
    Object.defineProperty(obj, "name", {
      set: function(newValue) {
        console.log("监听: 给name设置了新的值:", newValue)
        _name = newValue
      },
      get: function() {
        console.log("监听: 获取name的值")
        return _name
      }
    })

    // 2.监听所有的属性: 遍历所有的属性, 对每一个属性使用defineProperty
    const keys = Object.keys(obj)
    for (const key of keys) {
      let value = obj[key]
      Object.defineProperty(obj, key, {
        set: function(newValue) {
          console.log(`监听: 给${key}设置了新的值:`, newValue)
          value = newValue
        },
        get: function() {
          console.log(`监听: 获取${key}的值`)
          return value
        }
      })
    }

    // console.log(obj.name)
    // obj.name = "kobe"
    console.log(obj.age)
    obj.age = 17
    console.log(obj.age)
```

![监听对象的操作](C:\Users\admin\Desktop\系统笔记\img_js_高级\监听对象的操作.png)

------

#### Proxy基本使用

![Proxy基本使用](C:\Users\admin\Desktop\系统笔记\img_js_高级\Proxy基本使用.png)

------

#### Proxy的set和get捕获器

```js
    const obj = {
      name: "why",
      age: 18,
      height: 1.88
    }


    // 1.创建一个Proxy对象（代理对象）；代理obj，对obj的操作
    const objProxy = new Proxy(obj, {
      // 捕获器；target 是目标对象；key；value
      set: function(target, key, newValue) {
        console.log(`监听: 监听${key}的设置值: `, newValue)
        target[key] = newValue
      },
      get: function(target, key) {
        console.log(`监听: 监听${key}的获取`)
        // 获取需要返回
        return target[key]
      }
    })

    // 2.对obj的所有操作, 应该去操作objProxy
    console.log(objProxy.name)
    objProxy.name = "kobe"
    console.log(objProxy.name)
    objProxy.name = "james"
    objProxy.address = "广州市"
    console.log(objProxy.address)
```

![Proxy的set和get捕获器](C:\Users\admin\Desktop\系统笔记\img_js_高级\Proxy的set和get捕获器.png)

------

#### Proxy所有捕获器

```js
    const obj = {
      name: "why",
      age: 18,
      height: 1.88
    }    
	// 1.创建一个Proxy对象
    const objProxy = new Proxy(obj, {
      set: function(target, key, newValue) {
        console.log(`监听: 监听${key}的设置值: `, newValue)
        target[key] = newValue
      },
      get: function(target, key) {
        console.log(`监听: 监听${key}的获取`)
        return target[key]
      },

      deleteProperty: function(target, key) {
        console.log(`监听: 监听删除${key}属性`)
        delete obj.name
      },

      has: function(target, key) {
        console.log(`监听: 监听in判断 ${key}属性`)
        return key in target
      }
    })

    delete objProxy.name

    console.log("age" in objProxy)
```

![Proxy所有捕获器](C:\Users\admin\Desktop\系统笔记\img_js_高级\Proxy所有捕获器.png)

------

#### Proxy的construct和apply

- 监听函数

```js

    function foo(num1, num2) {
      console.log(this, num1, num2)
    }

    const fooProxy = new Proxy(foo, {
      apply: function(target, thisArg, otherArgs) {
        console.log("监听执行了apply操作")
        target.apply(thisArg, otherArgs)
      },
      construct: function(target, otherArray) {
        console.log("监听执行了new操作")
        console.log(target, otherArray)
        return new target(...otherArray)
      }
    })

    // fooProxy.apply("abc", [111, 222])
    new fooProxy("aaa", "bbb")
```

![Proxy的construct和apply](C:\Users\admin\Desktop\系统笔记\img_js_高级\Proxy的construct和apply.png)

------

### Reflect

#### Reflect的作用

- 原对象的反射，可以通过反射对象修改，而不修改原对象

```js
    const obj = {
      name: "why",
      age: 18
    }

    Object.defineProperty(obj, "name", {
      configurable: false
    })

    // 1.用以前的方式进行操作
    delete obj.name // 非严格模式才可以使用
    if (obj.name) {
      console.log("name没有删除成功")
    } else {
      console.log("name删除成功")
    }

    // 2.Reflect；Reflect.deleteProperty 返回 boolean
    if (Reflect.deleteProperty(obj, "name")) {
      console.log("name删除成功")
    } else {
      console.log("name没有删除成功")
    }
```

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods

![Reflect的作用](C:\Users\admin\Desktop\系统笔记\img_js_高级\Reflect的作用.png)

------

#### Reflect的常见方法

![Reflect的常见方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\Reflect的常见方法.png)

------

#### Reflect的使用

![Reflect的使用](C:\Users\admin\Desktop\系统笔记\img_js_高级\Reflect的使用.png)

------

#### Receiver的作用

- reflect 和 proxy 一起使用
- receiver 是 proxy实例对象 objProxy

```js
    const obj = {
      _name: "why",
      set name(newValue) {
        console.log("this:", this) // 默认是obj
        this._name = newValue
      },
      get name() {
        return this._name
      }
    }

    const objProxy = new Proxy(obj, {
      set: function (target, key, newValue, receiver) {
        // target[key] = newValue
        // 1.好处一: 代理对象的目的: 不再直接操作原对象
        // 2.好处二: Reflect.set方法有返回Boolean值, 可以判断本次操作是否成功
        /*
           3.好处三:
             > receiver就是外层Proxy对象,objProxy
             > Reflect.set/get最后一个参数, 可以决定对象访问器setter/getter的this指向
        */
        console.log("proxy中设置方法被调用")
        // 设置obj的属性，obj调用set，set内再次修改_name，一共2次修改，但是Proxy只能监听到第一次set的修改，因为obj的set内的this是obj，obj.name = newValue,是对原对象的修改，Proxy只能监听代理对象（objProxy），监听不到 this._name = newValue
        const isSuccess = Reflect.set(target, key, newValue)
        // receiver 改变原对象的this，set内的this由obj改为objProxy，实现监听2次
        const isSuccess = Reflect.set(target, key, newValue, receiver)

        if (!isSuccess) {
          throw new Error(`set ${key} failure`)
        }
      },
      get: function (target, key, receiver) {
        console.log("proxy中获取方法被调用")
        // target 是 obj 对象
        return Reflect.get(target, key, receiver)
      }
    })


    // 操作代理对象
    // objProxy.name = "kobe"
    console.log(objProxy.name)
```

![Receiver的作用](C:\Users\admin\Desktop\系统笔记\img_js_高级\Receiver的作用.png)

------

#### Reflect的construct

- 创建一个 Student，但是不执行Student内的代码，执行Person内的代码，并传入参数

```js
    function Person(name, age) {
      this.name = name
      this.age = age
    }

    function Student(name, age) {
      // 借用构造函数，使用构造函数Person的属性、方法
      // Person.call(this, name, age)
      // 利用 Reflect 反射,需要判断释放支持Reflect 的使用，Reflect.construct，要执行的函数，传入的参数，要创建的类型；创建一个 Student，但是不执行Student内的代码，执行Person内的代码，并传入参数
      const _this = Reflect.construct(Person, [name, age], Student)
      // 返回对象
      return _this
    }

    // const stu = new Student("why", 18)
    const stu = new Student("why", 18)
    console.log(stu)
    console.log(stu.__proto__ === Student.prototype) // true
```

![Reflect的construct](C:\Users\admin\Desktop\系统笔记\img_js_高级\Reflect的construct.png)

------

### Promise

#### 异步任务的处理

```js
    // 1.设计这样的一个函数
    function execCode(counter, successCallback, failureCallback) {
      // 异步任务
      setTimeout(() => {
        if (counter > 0) { // counter可以计算的情况 
          let total = 0
          for (let i = 0; i < counter; i++) {
            total += i
          }
          // 在某一个时刻只需要回调传入的函数
          successCallback(total)
        } else { // 失败情况, counter有问题
          failureCallback(`${counter}值有问题`)
        }
      }, 3000)
    }

    // 2.ES5之前,处理异步的代码都是这样封装
    execCode(100, (value) => {
      console.log("本次执行成功了:", value)
    }, (err) => {
      console.log("本次执行失败了:", err)
    })
```

![异步任务的处理](C:\Users\admin\Desktop\系统笔记\img_js_高级\异步任务的处理.png)

------

#### 什么是Promise呢？

- 只有在 new Promise 内 调用 resolve 才会执行then的回调，调用reject 才会执行 catch的回调
- 在 new Promise 内 调用 多次 resolve，then的回调只会执行一次
- 如果在 new Promise 内 ，调用了resolve又调用了reject ，只有前面的会生效并执行对应方法的回调
- 如果在 new Promise 内，既没有调用resolve，有没有调用reject ，Promise 的状态的等待，直到调用resolve或者reject 后才能确定Promise 的状态，调用resolve是成功状态，调用reject 是失败状态
- 一旦Promise 的状态被确定了，就不能被更改了，调用resolve就是成功状态，执行then的回调，不会再执行reject 也不会再次执行resolve
- then和catch，必须都要写

```js
      function execCode(counter) {
        // 在通过new创建Promise对象时，我们需要传入一个回调函数，这个回调函数会被立即执行，并且给传入另外两个回调函数resolve、reject
        const promise = new Promise((resolve, reject) => {
          // 异步任务
          setTimeout(() => {
            if (counter > 0) {
              let total = 0;
              for (let i = 0; i < counter; i++) {
                total += i;
              }
              // 成功的回调；通过闭包可以访问 resolve 方法
              // 当我们调用resolve回调函数时，会执行Promise对象的then方法传入的回调函数；
              resolve(total);
            } else {
              // 失败的回调
              // 当我们调用reject回调函数时，会执行Promise对象的catch方法传入的回调函数
              reject(`${counter}有问题`);
            }
          }, 3000);
        });

        return promise;
      }

      const promise = execCode(100);
      // then、catch 相当于监听成功（resolve）、失败，当调用resolve，就会执行then的回调，then回调函数的默认参数就是resolve的参数
      promise.then((value) => {
        console.log("成功有了结果: ", value);
      });
      // 失败是调用promise的catch
      promise.catch((err) => {
        console.log("失败有了错误: ", err);
      });

      // const promise2 = execCode(-100)
      // promise2.then(value => {
      //   console.log("成功:", value)
      // })
      // promise2.catch(err => {
      //   console.log("失败:", err)
      // })

      // 执行一次；promise有固定的then和catch方法，当成功会调用resolve，resolve会执行then传入的回调函数；execCode(255)返回一个promise，promise.then.catch,成功的时候执行then的回调，失败执行catch的回调
      execCode(255)
        .then((value) => {
          console.log("成功:", value);
        })
        .catch((err) => {
          console.log("失败:", err);
        });
```

![什么是Promise呢？](C:\Users\admin\Desktop\系统笔记\img_js_高级\什么是Promise呢？.png)

------

#### Promise的代码结构

```js
    // 1.创建一个Promise对象
    const promise = new Promise((resolve, reject) => {
      // 注意: Promise的状态一旦被确定下来, 就不会再更改, 也不能再执行某一个回调函数来改变状态
      // 1.待定状态 pending
      console.log("111111")
      console.log("222222")
      console.log("333333")

      // 2.兑现状态 fulfilled
      resolve()

      // 3.拒绝状态 rejected
      reject()
    })

    promise.then(value => {
      console.log("成功的回调")
    }).catch(err => {
      console.log("失败的回调")
    })

    // executor
    const promise2 = new Promise((resolve, reject) => {

    })
```

![Promise的代码结构](C:\Users\admin\Desktop\系统笔记\img_js_高级\Promise的代码结构.png)

------

#### Promise重构请求

![Promise重构请求](C:\Users\admin\Desktop\系统笔记\img_js_高级\Promise重构请求.png)

------

#### Executor

![Executor](C:\Users\admin\Desktop\系统笔记\img_js_高级\Executor.png)

------

#### resolve不同值的区别

- resolve 可以返回不同类型的值
  - 字符串、数组、对象、函数
- 如果 resolve 的值是一个 promise，那么这个resolve 的promise的状态会是，resolve 传入的promise的状态
- 如果 resolve 的值中有then方法，那么会自动执行这个then，并调用then方法中的 resolve 返回状态

```js
    const p = new Promise((resolve) => {
      // setTimeout(resolve, 2000)
      setTimeout(() => {
        resolve("p的resolve")
      }, 2000)
    })

    const promise = new Promise((resolve, reject) => {
      // 1.普通值
      // resolve([
      //   {name: "macbook", price: 9998, intro: "有点贵"},
      //   {name: "iPhone", price: 9.9, intro: "有点便宜"},
      // ])

      // 2.resolve(promise)
      // 如果resolve的值本身是Promise对象, 那么当前的Promise的状态会由传入的Promise来决定，=传入的Promise的状态
      resolve(p)

      // 3.resolve(thenable对象)
      resolve({
        name: "kobe",
        then: function(resolve) {
          resolve(11111)
        }
      })
    })

    promise.then(res => {
      console.log("then中拿到结果:", res)
    })
```

![resolve不同值的区别](C:\Users\admin\Desktop\系统笔记\img_js_高级\resolve不同值的区别.png)

------

#### then方法 – 接受两个参数

- 一个成功、一个失败；2个回调函数
  - 第二个 = catch 方法；一个then即监听成功，又监听失败

```js
// 1.then参数的传递方法: 可以传递两个参数
    // 这种写法也是可以的
    promise.then(res => {
      console.log("成功回调~", res)
    }, err => {
      console.log("失败回调~", err)
    })
```

![then方法 – 接受两个参数](C:\Users\admin\Desktop\系统笔记\img_js_高级\then方法 – 接受两个参数.png)

------

#### then方法 – 多次调用

```js
    const promise = new Promise((resolve, reject) => {
      resolve("success")
      // reject("failure")
    })

    // 这里调用4次then，当 promise调用resolve时，会把这4个then的回调全部执行
    // catch 也一样
    promise.then(res => {
      console.log("成功回调~", res)
    })
    promise.then(res => {
      console.log("成功回调~", res)
    })
    promise.then(res => {
      console.log("成功回调~", res)
    })
    promise.then(res => {
      console.log("成功回调~", res)
    })
```

![then方法 – 多次调用](C:\Users\admin\Desktop\系统笔记\img_js_高级\then方法 – 多次调用.png)

------

#### then方法 – 返回值

- then可以返回值，这个值就是then返回的新的Promise的resolve的参数，而resolve调用后就会执行第二个then的回调函数，第二个then的回调参数就是第一个then返回的新的Promise的resolve的参数，就是第一个then的返回值，可以被第二个then的回调拿到 

```js
      const promise = new Promise((resolve, reject) => {
        resolve("aaaaaaa");
        // reject()
      });

      // 1.then方法是返回一个新的Promise, 这个新Promise的决议是等到then方法传入的回调函数有返回值时, 进行决议
      // Promise本身就是支持链式调用
      // then方法是返回一个新的Promise, 链式中的then是在等待这个新的Promise有决议之后执行的
      // then可以返回值，这个值就是then返回的新的Promise的resolve的参数，而resolve调用后就会执行第二个then的回调函数，第二个then的回调参数就是第一个then返回的新的Promise的resolve的参数，就是第一个then的返回值，可以被第二个then的回调拿到；
      // 如果第一个then没有返回值，那么第二个then回调的参数是 undefined
      promise
        .then((res) => {
          console.log("第一个then方法:", res);
          return "bbbbbbbb";
        })
        .then((res) => {
          console.log("第二个then方法:", res);
          return "cccccccc";
        })
        .then((res) => {
          console.log("第三个then方法:", res);
        });

      promise.then((res) => {
        console.log("添加第二个then方法:", res);
      });

      // 2.then方法传入回调函数的返回值类型
      const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("why");
        }, 3000);
      });

      promise
        .then((res) => {
          console.log("第一个Promise的then方法:", res);
          // 1.普通值
          return "bbbbbbb"; // 返回 bbbbbbb
          // 2.新的Promise
          return newPromise; // 返回 why
          // 3.thenable的对象
          return {
            then: function (resolve) {
              resolve("thenable"); // 返回 thenable
            },
          };
        })
        .then((res) => {
          console.log("第二个Promise的then方法:", res); // 第一个then没有return，就是undefined；1 是bbbbbbb；2是why；3是thenable
        });
```

![then方法 – 返回值](C:\Users\admin\Desktop\系统笔记\img_js_高级\then方法 – 返回值.png)

------

#### catch方法 – 多次调用

```js
    const promise = new Promise((resolve, reject) => {
      reject("failure")
    })

    // 这个 then，没有第二个参数，没有监听 catch，但是 promise 返回了 reject，所以这个then会报错，没有捕获promise的错误
    promise.then(res => {
      console.log("成功的回调:", res)
    })
    // 这个then是正确的
    promise.then(res => {
      console.log("成功的回调:", res)
    }).catch(err => {
      console.log("失败的回调:", err)
    })
    // 调用reject，会执行所有catch的回调
    promise.catch(err => {
      console.log("失败的回调:", err)
    })
    promise.catch(err => {
      console.log("失败的回调:", err)
    })
    promise.catch(err => {
      console.log("失败的回调:", err)
    })
    promise.catch(err => {
      console.log("失败的回调:", err)
    })
```

![catch方法 – 多次调用](C:\Users\admin\Desktop\系统笔记\img_js_高级\catch方法 – 多次调用.png)

------

#### then内错误捕获

- then内没有reject，如果要在这里写reject，让catch找到这里的reject，使用 throw 抛出异常，并终止代码继续往下执行，这个异常会被 catch 捕获

```js
promise.then(res => {
      console.log("then第一次回调:", res)
      throw new Error("第二个Promise的异常error") 
    }).catch(err => {
      console.log("catch回调被执行:", err)
    })
```

#### promise一定要加catch

- catch 可以捕获到 reject 或者 throw new Error
- 使用 promise ，就一定要捕获错误，使用 catch 来捕获
- 使用 reject 或者 throw new Error，来让 catch 能捕获到错误
- 否则代码报错，下面的代码全部都不会执行了；捕获错误后，下面的代码依然可以继续执行

#### catch方法 – 返回值

- catch方法的执行时机；会被最近的 promise的reject调用执行；并不一定是catch上一个then返回的promise，因为上个then不一定会被执行，会找到最近的promise的reject
- then catch 返回的promise都是新的promise，第一个new的promise不同，每个都是新的

```js
    const promise = new Promise((resolve, reject) => {
      // reject("error: aaaaa")
      resolve("aaaaaa")
    })

    // 1.catch方法也会返回一个新的Promise
    promise.catch(err => {
      console.log("catch回调:", err)
      return "bbbbb"
    }).then(res => {
      console.log("then第一个回调:", res)
      return "ccccc"
    }).then(res => {
      console.log("then第二个回调:", res)
    })

    // 2.catch方法的执行时机；会被最近的 promise的reject调用执行；并不一定是catch上一个then返回的promise，因为上个then不一定会被执行，会找到最近的promise的reject
    // then catch 返回的promise都是新的promise，第一个new的promise不同，每个都是新的
    promise.then(res => {
      console.log("then第一次回调:", res)
      // then内没有reject，如果要在这里写reject，让catch找到这里的reject，使用 throw 抛出异常，并终止代码继续往下执行，这个异常会被 catch 捕获
      throw new Error("第二个Promise的异常error") 
      // return "bbbbbb"
    }).then(res => {
      console.log("then第二次回调:", res)
      throw new Error("第三个Promise的异常error")
    }).then(res => {
      console.log("then第三次回调:", res)
    }).catch(err => {
      console.log("catch回调被执行:", err)
    })

    // 中断函数继续执行:
    // 方式一: return
    // 方式二: throw new Error()
    // 方式三: yield 暂停(暂时性的中断)
```

![catch方法 – 返回值](C:\Users\admin\Desktop\系统笔记\img_js_高级\catch方法 – 返回值.png)

------

#### 中断函数继续执行 

```js
	方式一: return
    方式二: throw new Error()
    方式三: yield 暂停(暂时性的中断)
```

#### finally方法

- 只要 promise 确定了状态，都会执行 finally 回调

```js
    const promise = new Promise((resolve, reject) => {
      resolve("aaaa")
    })

    promise.then(res => {
      console.log("then:", res)
      foo()
    }).catch(err => {
      console.log("catch:", err)
      foo()
    }).finally(() => {
      console.log("呵呵呵呵")
    })

    // 这个方法会再promise确定状态之前被执行；finally是在确定状态后执行
    function foo() {
      console.log("哈哈哈哈")
    }
```

![finally方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\finally方法.png)

------

#### resolve方法

- 能简洁一点点

```js
    // 实例方法
    const promise2 = new Promise((resolve) => {
      // 进行一系列的操作
      resolve("result")
    })
    promise2.catch

    // 类方法
    const studentList = []
    const promise = Promise.resolve(studentList)

    promise.then(res => {
      console.log("then结果:", res)
    })

    // 只返回一个值时，可以这样写，和下面的一样
    Promise.resolve("Hello World").then(()=>{
      console.log(res);
    })
    // 相当于
    const promise1 = new Promise((resolve) => {
      resolve("Hello World")
    })
    promise1.then(()=>{
      console.log(res);
    })
```

![resolve方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\resolve方法.png)

------

#### reject方法

```js
    // 类方法
    const promise = Promise.reject("rejected error")
    promise.catch(err => {
      console.log("err:", err)
    })
    // 相当于
    const promise1 = new Promise((_, reject) => {
      reject("rejected error")
    })
    promise1.catch(err => {
      console.log("err:", err)
    })
```

![reject方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\reject方法.png)

------

#### all方法

- 当3个promise都确定状态后，all的promise才会有状态 
- 且返回的值时数组

```js
    // 创建三个Promise
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("p1 resolve")
        reject("p1 reject error")
      }, 3000)
    })

    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p2 resolve")
      }, 2000)
    })
    
    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p3 resolve")
      }, 5000)
    })

    // all:全部/所有;当3个promise都确定状态后，all的promise才会有状态
    Promise.all([p1, p2, p3]).then(res => {
      console.log("all promise res:", res) // 数组;全部成功
    }).catch(err => {
      console.log("all promise err:", err) // 只要一个失败，p1 reject error
    })
```

![all方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\all方法.png)

------

#### allSettled方法

- 等所有promise确定状态后，allSettled固定是成功的，执行then的回调，参数为数组，是每个promise的状态和返回值

```js
    // 创建三个Promise
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("p1 resolve")
        reject("p1 reject error")
      }, 3000)
    })

    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p2 resolve")
      }, 2000)
    })
    
    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p3 resolve")
      }, 5000)
    })

    // 类方法: allSettled
    Promise.allSettled([p1, p2, p3]).then(res => {
      console.log("all settled:", res)
    })
// 结果
[
    {
        "status": "rejected",
        "reason": "p1 reject error"
    },
    {
        "status": "fulfilled",
        "value": "p2 resolve"
    },
    {
        "status": "fulfilled",
        "value": "p3 resolve"
    }
]
```

![allSettled方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\allSettled方法.png)

------

#### race方法

- 会等到第一个Promise有结果(无论这个结果是fulfilled还是rejected) ;取最快确定状态的一个promise

```js
    // 创建三个Promise
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p1 resolve")
        // reject("p1 reject error")
      }, 3000)
    })

    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("p2 resolve")
        reject("p2 reject error")
      }, 2000)
    })
    
    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p3 resolve")
      }, 5000)
    })

    // 类方法: race方法
    // 特点: 会等到一个Promise有结果(无论这个结果是fulfilled还是rejected)
    Promise.race([p1, p2, p3]).then(res => {
      console.log("race promise:", res)
    }).catch(err => {
      console.log("race promise err:", err)
    })
```

![race方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\race方法.png)

------

#### any方法

- 会等到第一个Promise的结果是 fulfilled（成功的）
- 所有的promise都是失败的，会报错

```js
    // 创建三个Promise
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("p1 resolve")
        reject("p1 reject error")
      }, 3000)
    })

    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("p2 resolve")
        reject("p2 reject error")
      }, 2000)
    })
    
    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("p3 resolve")
        reject("p3 reject error")
      }, 5000)
    })

    // 类方法: any方法
    Promise.any([p1, p2, p3]).then(res => {
      console.log("any promise res:", res)
    }).catch(err => {
      console.log("any promise err:", err)
    })
```

![any方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\any方法.png)

------

### Iterator-Generator

- 迭代器和生成器

#### 什么是迭代器？

- A对象和B数组
- 可以通过A来遍历B
- 那么A就是迭代器，B就是可迭代对象

```js
    const names = ["abc", "cba", "nba"]
    const nums = [100, 24, 55, 66, 86]

    // 封装一个返回迭代器的函数
    function createArrayIterator(arr) {
      let index = 0
      return {
        // next固定的方法，返回对象，对象有2个属性
        next: function() {
          // done: Boolean，是否迭代完成
          // value: 具体值/undefined
          if (index < arr.length) {
            return { done: false, value: arr[index++] }
          } else {
            return { done: true }
          }
        }
      }
    }
    // 创建迭代器对象
    const namesIterator = createArrayIterator(names)
    console.log(namesIterator.next())
    console.log(namesIterator.next())
```

![什么是迭代器？](C:\Users\admin\Desktop\系统笔记\img_js_高级\什么是迭代器？.png)

------

#### 可迭代对象

- 数组就是一个可迭代对象 
- 对象object 不是一个可迭代对象 
- 数组是怎么实现变成可迭代对象的？
  - 实现可迭代对象

```js

    // 将infos变成一个可迭代对象
    /*
      1.必须实现一个特定的函数: [Symbol.iterator]
      2.这个函数需要返回一个迭代器(这个迭代器用于迭代当前的对象)
    */
    const infos = {
      friends: ["kobe", "james", "curry"],
      [Symbol.iterator]: function() {
        let index = 0
        const infosIterator = {
          next: function() {
            // done: Boolean
            // value: 具体值/undefined
            if (index < infos.friends.length) {
              return { done: false, value: infos.friends[index++] }
            } else {
              return { done: true }
            }
          }	
        }
        return infosIterator
      }
    }

    // 可迭对象可以进行for of操作
    for (const item of infos) {
      console.log(item)
    }
    const iterator = infos[Symbol.iterator]()
    console.log(iterator.next())
    console.log(iterator.next())


    // 可迭代对象必然有一个[Symbol.iterator]函数
    // 数组是一个可迭代对象
    const students = ["张三", "李四", "王五"]
    console.log(students[Symbol.iterator])
    const studentIterator = students[Symbol.iterator]()
    console.log(studentIterator.next())
    console.log(studentIterator.next())
    console.log(studentIterator.next())
    console.log(studentIterator.next())
```

#### 让对象变成可迭代对象

- 实现可迭代对象的优化版

```js
    const infos = {
      name: "why",
      age: 18,
      height: 1.88,

      [Symbol.iterator]: function() {
        // const keys = Object.keys(this)
        // const values = Object.values(this)
        // entries 拿到 key 和 value
        const entries = Object.entries(this)
        let index = 0
        const iterator = {
          next: function() {
            if (index < entries.length) {
              return { done: false, value: entries[index++] }
            } else {
              return { done: true }
            }
          }
        }
        return iterator
      }
    }
        // 可迭对象可以进行for of操作
    for (const item of infos) {
      const [key, value] = item
      console.log(key, value)
    }
```

![可迭代对象](C:\Users\admin\Desktop\系统笔记\img_js_高级\可迭代对象.png)

------

#### 原生迭代器对象

![原生迭代器对象](C:\Users\admin\Desktop\系统笔记\img_js_高级\原生迭代器对象.png)

------

#### 可迭代对象的应用

```js
      // 1.用在特定的语法上
      const names = ["abc", "cba", "nba"];
      const info = {
        name: "why",
        age: 18,
        height: 1.88,
        [Symbol.iterator]: function () {
          const values = Object.values(this);
          let index = 0;
          const iterator = {
            next: function () {
              if (index < values.length) {
                return { done: false, value: values[index++] };
              } else {
                return { done: true };
              }
            },
          };
          return iterator;
        },
      };

      function foo(arg1, arg2, arg3) {
        console.log(arg1, arg2, arg3);
      }
      // ... 用于可迭代对象
      foo(...info);

      // 2.一些类的构造方法中, 也是传入的可迭代对象
      const set = new Set(["aaa", "bbb", "ccc"]);
      const set2 = new Set("abc");
      console.log(set2);
      const set3 = new Set(info);
      console.log(set3);

      // 3.一些常用的方法
      const p1 = Promise.resolve("aaaa");
      const p2 = Promise.resolve("bbb");
      const p3 = Promise.resolve("ccc");
      const pSet = new Set();
      pSet.add(p1);
      pSet.add(p2);
      pSet.add(p3);
      Promise.all(pSet).then((res) => {
        console.log("res:", res);
      });

      function bar() {
        // console.log(arguments)
        // 将伪数组arguments转成Array类型
        const arr = Array.from(arguments); // 参数是可迭代对象
        console.log(arr);
      }

      bar(111, 222, 333);
```

![可迭代对象的应用](C:\Users\admin\Desktop\系统笔记\img_js_高级\可迭代对象的应用.png)

------

#### 自定义类的迭代

![自定义类的迭代](C:\Users\admin\Desktop\系统笔记\img_js_高级\自定义类的迭代.png)

------

#### 对象遍历

```js
      let data = {
        name:'1',
        age:'2'
      }
      for (const item of Object.entries(data)) {
        console.log(item);
      }
```

#### 自定义类的迭代实现

- 通过类创建出来的对象，都是可迭代对象

```js

```

![自定义类的迭代实现](C:\Users\admin\Desktop\系统笔记\img_js_高级\自定义类的迭代实现.png)

------

#### 迭代器的中断

- 通过 迭代器内的 return 函数 来监听 中断

```js
    class Person {
      constructor(name, age, height, friends) {
        this.name = name
        this.age = age
        this.height = height
        this.friends = friends
      }

      // 实例方法
      running() {}
      [Symbol.iterator]() {
        let index = 0
        const iterator = {
          next: () => {
            if (index < this.friends.length) {
              return { done: false, value: this.friends[index++] }
            } else {
              return { done: true }
            }
          },
          return: () => {
            console.log("监听到迭代器中断了")
            return { done: true }
          }
        }
        return iterator
      }
    }

    
    const p1 = new Person("why", 18, 1.88, ["curry", "kobe", "james", "tatumu"])

    for (const item of p1) {
      console.log(item)
      if (item === "kobe") {
        break
      }
    }
```

![迭代器的中断](C:\Users\admin\Desktop\系统笔记\img_js_高级\迭代器的中断.png)

------

#### 什么是生成器？

![什么是生成器？](C:\Users\admin\Desktop\系统笔记\img_js_高级\什么是生成器？.png)

------

#### 生成器函数执行

```js
    /*
      生成器函数: 
        1.function后面会跟上符号: *
        2.代码的执行可以被yield控制
        3.生成器函数默认在执行时, 返回一个生成器对象
          * 要想执行函数内部的代码, 需要生成器对象, 调用它的next操作
          * 当遇到yield时, 就会中断执行
        4.生成器事实上是一种特殊的迭代器
    */

    // 1.定义了一个生成器函数
    function* foo() {
      console.log("1111")
      console.log("2222")
      yield
      console.log("3333")
      console.log("4444")
      yield
      console.log("5555")
      console.log("6666")
    }

    // 2.调用生成器函数, 返回一个 生成器对象
    const generator = foo()
    // 调用next方法
    generator.next() // 1 2
    generator.next() // 3 4
    generator.next() // 5 6
```

![生成器函数执行](C:\Users\admin\Desktop\系统笔记\img_js_高级\生成器函数执行.png)

------

#### 生成器传递参数 – next函数

```js
// 1.定义了一个生成器函数
      function* foo(name1) {
        console.log("执行内部代码:1111", name1);
        console.log("执行内部代码:2222", name1);
        const name2 = yield "aaaa";
        console.log("执行内部代码:3333", name2);
        console.log("执行内部代码:4444", name2);
        const name3 = yield "bbbb";
        // return "bbbb"
        console.log("执行内部代码:5555", name3);
        console.log("执行内部代码:6666", name3);
        yield "cccc";
        return undefined;
      }

      // 2.调用生成器函数, 返回一个 生成器对象
      const generator = foo("next1"); // next1 是第一次传的参数赋值给name1
      // 调用next方法;会返回迭代器，yield的done: false，return的done: true；yield 后面的值就是迭代器的value
      // console.log(generator.next()) // { done: false, value: "aaaa" }
      // console.log(generator.next()) // { done: false, value: "bbbb" }
      // console.log(generator.next()) //  { done: false, value: "cccc" }
      // console.log(generator.next()) // {done: true, value: undefined}

      // 3.在中间位置直接return，return "bbbb", 结果return后面的 done: true, value: undefined
      // console.log(generator.next()) // { done: false, value: "aaaa" }
      // console.log(generator.next()) // { done: true, value: "bbbb" }
      // console.log(generator.next()) // { done: true, value: undefined }
      // console.log(generator.next()) // { done: true, value: undefined }
      // console.log(generator.next()) // { done: true, value: undefined }
      // console.log(generator.next()) // { done: true, value: undefined }

      // 4.给函数每次执行的时候, 传入参数
      console.log(generator.next()); // 这里不是第一次传参的地方
      console.log(generator.next("next2")); // next2 赋值给了name2并作为迭代器的value
      console.log(generator.next("next3"));
      // console.log(generator.next())
```

![生成器传递参数 – next函数](C:\Users\admin\Desktop\系统笔记\img_js_高级\生成器传递参数 – next函数.png)

------

#### 生成器提前结束 – return函数

![生成器提前结束 – return函数](C:\Users\admin\Desktop\系统笔记\img_js_高级\生成器提前结束 – return函数.png)

------

#### 生成器抛出异常 – throw函数

```js
      function* foo(name1) {
        console.log("执行内部代码:1111", name1);
        console.log("执行内部代码:2222", name1);
        const name2 = yield "aaaa";
        console.log("执行内部代码:3333", name2);
        console.log("执行内部代码:4444", name2);
        const name3 = yield "bbbb";
        // return "bbbb"
        console.log("执行内部代码:5555", name3);
        console.log("执行内部代码:6666", name3);
        yield "cccc";

        console.log("最后一次执行");
        return undefined;
      }

      const generator = foo("next1");

      // 1.generator.return提前结束函数
      console.log(generator.next());
      console.log(generator.return("next2"));
      console.log("-------------------");
      console.log(generator.next("next3"));
      console.log(generator.next("next4"));

      // 2.generator.throw向函数抛出一个异常，如果没有捕获异常就会终止代码继续执行
      console.log(generator.next());
      console.log(generator.throw(new Error("next2 throw error")));
      console.log("-------------------");
      console.log(generator.next("next3"));
      console.log(generator.next("next4"));
```

![生成器抛出异常 – throw函数](C:\Users\admin\Desktop\系统笔记\img_js_高级\生成器抛出异常 – throw函数.png)

------

#### 生成器替代迭代器

- 使用生成器替代迭代器实现可迭代对象

```js
    // 1.对之前的代码进行重构(用生成器函数)
    const names = ["abc", "cba", "nba"]
    const nums = [100, 22, 66, 88, 55]
    // 生成器就是一个迭代器
    function* createArrayIterator(arr) {
      for (let i = 0; i < arr.length; i++) {
        yield arr[i] // yield的返回值就是next的返回值
      }
    }
	// 语法糖
	function* createArrayIterator(arr) {
      yield* arr
    }

    // const namesIterator = createArrayIterator(names)
    // console.log(namesIterator.next())
    // console.log(namesIterator.next())
    // console.log(namesIterator.next())
    // console.log(namesIterator.next())

    // 2.生成器函数, 可以生成某个范围的值
    // [3, 9)
    function* createRangeGenerator(start, end) {
      for (let i = start; i < end; i++) {
        yield i
      }
    }

    const rangeGen = createRangeGenerator(3, 9)
    console.log(rangeGen.next())
    console.log(rangeGen.next())
    console.log(rangeGen.next())
    console.log(rangeGen.next())
    console.log(rangeGen.next())
    console.log(rangeGen.next())
    console.log(rangeGen.next())
    console.log(rangeGen.next())
```

![生成器替代迭代器](C:\Users\admin\Desktop\系统笔记\img_js_高级\生成器替代迭代器.png)

------

#### 自定义类迭代 – 生成器实现

- 封装一个类，创建的实例都为生成器(迭代器)
- 终版，实现类，所有对象变成可迭代对象

```js
    class Person {
      constructor(name, age, height, friends) {
        this.name = name
        this.age = age
        this.height = height
        this.friends = friends
      }

      // 实例方法；生成器（迭代器）函数 *[Symbol.iterator]
      *[Symbol.iterator]() {
        yield* this.friends
      }
    }

    const p = new Person("why", 18, 1.88, ["kobe", "james", "curry"])
    for (const item of p) {
      console.log(item)
    }

    const pIterator = p[Symbol.iterator]()
    console.log(pIterator.next())
    console.log(pIterator.next())
    console.log(pIterator.next())
    console.log(pIterator.next())
```

![自定义类迭代 – 生成器实现](C:\Users\admin\Desktop\系统笔记\img_js_高级\自定义类迭代 – 生成器实现.png)

------

#### 对生成器的操作

![对生成器的操作](C:\Users\admin\Desktop\系统笔记\img_js_高级\对生成器的操作.png)

------

#### 异步处理方案

- 直接使用方案4

```js
    // 封装请求的方法: url -> promise(result)
    function requestData(url) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(url)
        }, 2000)
      })
    }
    /*
      需求: 
        1.发送一次网络请求, 等到这次网络请求的结果
        2.发送第二次网络请求, 等待这次网络请求的结果
        3.发送第三次网络请求, 等待这次网络请求的结果
    */
    // 方式一: 层层嵌套(回调地狱 callback hell)
    function getData() {
      // 1.第一次请求
      requestData("why").then(res1 => {
        console.log("第一次结果:", res1)

        // 2.第二次请求
        requestData(res1 + "kobe").then(res2 => {
          console.log("第二次结果:", res2)

          // 3.第三次请求
          requestData(res2 + "james").then(res3 => {
            console.log("第三次结果:", res3)
          })
        })
      })
    }

    // 方式二: 使用Promise进行重构(解决回调地狱)
    // 链式调用
    function getData() {
      requestData("why").then(res1 => {
        console.log("第一次结果:", res1)
        return requestData(res1 + "kobe") // res2;return的promise给到第二个then
      }).then(res2 => {
        console.log("第二次结果:", res2)
        return requestData(res2 + "james") // res3
      }).then(res3 => {
        console.log("第三次结果:", res3)
      })
    }

    // 方式三: async/await的实现原理；使用生成器和yield
    function* getData() {
      // yield 中断执行
      const res1 = yield requestData("why")
      console.log("res1:", res1)

      const res2 = yield requestData(res1 + "kobe")
      console.log("res2:", res2)

      const res3 = yield requestData(res2 + "james")
      console.log("res3:", res3)
    }

    const generator = getData()
    // next 拿到res1 ，value 是值，requestData返回的是promise，调用then。这是第一个yield
    generator.next().value.then(res1 => {
      generator.next(res1).value.then(res2 => { // 这是第2个yield
        generator.next(res2).value.then(res3 => {
          generator.next(res3)
        })
      })
    })

    // 方式四: async/await的解决方案
    async function getData() {
        // requestData 是请求，放入promise
      const res1 = await requestData("why")
      console.log("res1:", res1)

      const res2 = await requestData(res1 + "kobe")
      console.log("res2:", res2)

      const res3 = await requestData(res2 + "james")
      console.log("res3:", res3)
    }

    const generator = getData()
```

![异步处理方案](C:\Users\admin\Desktop\系统笔记\img_js_高级\异步处理方案.png)

------

#### Generator方案

![Generator方案](C:\Users\admin\Desktop\系统笔记\img_js_高级\Generator方案.png)

------

#### 自动执行generator函数

- 优化，async/await的实现原理；使用生成器和yield

```js
    // 封装请求的方法: url -> promise(result)
    function requestData(url) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(url)
        }, 2000)
      })
    }

    // 生成器的处理方案
    function* getData() {
      const res1 = yield requestData("why")
      console.log("res1:", res1)

      const res2 = yield requestData(res1 + "kobe")
      console.log("res2:", res2)

      const res3 = yield requestData(res2 + "james")
      console.log("res3:", res3)

      const res4 = yield requestData(res3 + "curry")
      console.log("res4:", res4)

      const res5 = yield requestData(res4 + "tatumu")
      console.log("res5:", res5)
    }

    // const generator = getData()
    // generator.next().value.then(res1 => {
    //   generator.next(res1).value.then(res2 => {
    //     generator.next(res2).value.then(res3 => {
    //       generator.next(res3).value.then(res4 => {
    //         generator.next(res4)
    //       })
    //     })
    //   })
    // })

    // 自动化执行生成器函数(了解)
    function execGenFn(genFn) {
      // 1.获取对应函数的generator
      const generator = genFn()
      // 2.定义一个递归函数
      function exec(res) {
        // result -> { done: true/false, value: 值/undefined }
        const result = generator.next(res)
        if (result.done) return
        result.value.then(res => {
          exec(res)
        })
      }
      // 3.执行递归函数
      exec()
    }

    execGenFn(getData)
```

![自动执行generator函数](C:\Users\admin\Desktop\系统笔记\img_js_高级\自动执行generator函数.png)

------

### await、async、事件循环

#### 异步函数 async function

```js
    // 普通函数
    function foo() {} // 函数声明
    const bar = function() {} // 表达式
    const baz = () => {}

    // 生成器函数，返回生成器对象
    function* foo() {}

    // 异步函数 async
    async function foo() {
      console.log("foo function1")
      console.log("foo function2")
      console.log("foo function3")
    }
    foo()

    const bar2 = async function() {}
    const baz3 = async () => {}
    class Person {
      async running() {}
    }
```

![异步函数 async function](C:\Users\admin\Desktop\系统笔记\img_js_高级\异步函数 async function.png)

------

#### 异步函数的执行流程

- 异步函数返回值是一个 promise

```js
    // 返回值的区别
    // 1.普通函数
    function foo1() {
      return 123
      // 不返回默认就是 undefined
    }
    foo1()

    // 2.异步函数,返回一个promise
    async function foo2() {
      // 1.返回一个普通的值
      return ["abc", "cba", "nba"]
      // -> Promise.resolve(["abc", "cba", "nba"])

      // 2.返回一个Promise
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("aaa")
        }, 3000)
      })

      // 3.返回一个thenable对象
      return {
        then: function (resolve, reject) {
          resolve("bbb")
        }
      }
    }

    foo2().then(res => {
      console.log("res:", res)
    })
```

![异步函数的执行流程](C:\Users\admin\Desktop\系统笔记\img_js_高级\异步函数的执行流程.png)

------

#### 异步函数异常

```js

    // 什么情况下异步函数的结果是rejected

    // 如果异步函数中有抛出异常(产生了错误), 这个异常不会被立即浏览器处理
    // 进行如下处理: Promise.reject(error)
    async function foo() {
      console.log("---------1")
      console.log("---------2")
      // "abc".filter()
      throw new Error("coderwhy async function error")
      console.log("---------3")

      // return new Promise((resolve, reject) => {
      //   reject("err rejected")
      // })

      return 123
    }

    // promise -> pending -> fulfilled/rejected
    foo().then(res => {
      console.log("res:", res)
    }).catch(err => {
      console.log("coderwhy err:", err) // console3 并不会执行
      // 在这里写错误后继续执行的代码
      console.log("继续执行其他的逻辑代码")
    })
```

#### await关键字

- await 前面必须是 async
- async后面不一定是await
- await后面的必须是promise，并且await要等到promise的成功状态，才会继续执行async异步函数的下一行代码
- 通过 catch 捕获错误

```js
    // await条件: 必须在异步函数中使用
    function bar() {
      console.log("bar function")
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(123)
        }, 10000)
      })
    }

    async function foo() {
      console.log("-------")
      // await后续返回一个Promise, 那么会等待Promise有结果之后, 才会继续执行后续的代码
      const res1 = await bar() // 执行到这里等10s，拿到123再打印出来
      console.log("await后面的代码:", res1)
      const res2 = await bar() // 执行到这里再等10s，拿到123再打印出来
      console.log("await后面的代码:", res2)

      console.log("+++++++")
    }
	
    foo().catch(err => {
      console.log("err:", err)
    })
```

```js
    function requestData(url) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(url)
          // reject("error message")
        }, 2000);
      })
    }

    async function getData() {
      // 1-方法内，通过 try、catch 捕获异常
      try {
        const res1 = await requestData("why")
        console.log("res1:", res1)

        const res2 = await requestData(res1 + "kobe")
        console.log("res2:", res2)
      } catch (error) {
        console.log("error:", error)
      }

    }
    // 2-调用方法时，通过 catch 捕获异常
    getData().catch(err => {
      console.log("err:", err)
    })
```

![await关键字](C:\Users\admin\Desktop\系统笔记\img_js_高级\await关键字.png)

------

#### async&await

- 不一定要自己写promise来包裹请求
- async 异步函数，默认返回promise，async 异步函数内，直接写请求

```js
   // 1.定义Promise
    function requestData(url) {
      console.log("request data")
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(url)
        }, 3000)
      })
    }
	// 2.async 异步函数，默认返回promise
    async function test() {
      console.log("test function")
      return "test"
    }

    async function bar() {
      console.log("bar function")

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("bar")
        }, 2000);
      })
    }

    async function demo() {
      console.log("demo function")
      return {
        then: function(resolve) {
          resolve("demo")
        }
      }
    }


    // 2.调用的入口async函数
    async function foo() {
      console.log("foo function")

      const res1 = await requestData("why")
      console.log("res1:", res1)

      const res2 = await test()
      console.log("res2:", res2)

      const res3 = await bar()
      console.log("res3:", res3)

      const res4 = await demo()
      console.log("res4:", res4)
    }

    foo().catch(err => {
      console.log("err:", err)
    })
```

#### 计算机体系结构

![计算机体系结构画图](C:\Users\admin\Desktop\系统笔记\img_js_高级\计算机体系结构画图.png)

------

#### 进程和线程

- 进程：打开一个应用就会开启一个或多个进程，通过这个进程管理这个应用如何运行
- 线程：在操作系统中的进程中，通过线程来执行代码，一个进程中最少有一个线程，这一个称为主线程
- 进程是线程的容器

![进程和线程](C:\Users\admin\Desktop\系统笔记\img_js_高级\进程和线程.png)

------

#### 操作系统 – 进程 – 线程

- 每个线程负责执行各自的代码

![操作系统 – 进程 – 线程](C:\Users\admin\Desktop\系统笔记\img_js_高级\操作系统 – 进程 – 线程.png)

------

#### 操作系统的工作方式

![操作系统的工作方式](C:\Users\admin\Desktop\系统笔记\img_js_高级\操作系统的工作方式.png)

------

#### 浏览器中的JavaScript线程

- JS是单线程
- 浏览器、node是JS的进程
- 浏览器有多个进程，进程中包含了多个线程，其中一个线程是，JS的单线程
- 同一时间只能做一件事情，执行上下文栈，依次执行，遇到函数创建函数的执行上下文，依次从栈顶开始执行，执行完销毁，执行 下一个 执行上下文的下一行代码，全部执行完销毁，再执行 下一个执行上下文，直到全局执行上下文执行完成销毁，代码执行完成

![JS执行](C:\Users\admin\Desktop\系统笔记\img_js_高级\JS执行.png)

------

![浏览器中的JavaScript线程](C:\Users\admin\Desktop\系统笔记\img_js_高级\浏览器中的JavaScript线程.png)

------

#### JS单线程中的异步代码是如何执行的？

- setTimeout 定时器，不是由JS线程来执行的，是由浏览器的其他进程中的某个线程来执行的
- 所以才不用等待setTimeout 的时间，就执行setTimeout 下面的代码
- setTimeout 定时器,是2个函数，一个是setTimeout 本身，一个是setTimeout 的回调函数
- 本身的函数是由JS线程执行的，但JS线程会把回调函数，交给浏览器，浏览器完成回调函数的计时工作，当计时结束，会把回调函数放入队列中，浏览器并不是执行回调内的代码，回调函数内的代码还是由JS线程来执行的
- 这样JS线程就可以继续往下执行了 = setTimeout 的执行上下文栈销毁
- 直到全局执行上下文栈，执行完成，没有代码执行了
- 浏览器的其他线程在setTimeout 计时结束时，会把setTimeout 的回调函数，添加到事件队列中，如果有多个就添加多个，最先加入的会被最先执行
  - 放入队列中，是为了给事件排序，依次完成执行
- 全局执行上下文栈的所有代码执行完成后，全局执行上下文栈，会一直查看队列中有没有事件需要执行，有的话就执行，如何执行？
- 把回调放入全局执行上下文栈，回调是一个函数，创建函数执行上下文栈，执行，销毁，直到全局销毁，全部代码执行完成
- setTimeout 的计时为0，回调函数同样也是在其他正常代码全部执行完成后，再执行的
  - 因为只有栈内存中的全局执行上下文栈，全部代码执行完成后，才会去队列中取最先加入的，放入全局执行上下文栈中，去执行，所以setTimeout 的回调是最后执行的

![单线程异步执行](C:\Users\admin\Desktop\系统笔记\img_js_高级\单线程异步执行.png)

```js
    let name = "why"
    name = "kobe"

    function bar() {
      console.log("bar function")
    }

    function foo() {
      console.log("foo function")
      // 1.在JavaScript内部执行
      let total = 0
      for (let i = 0; i < 1000000; i++) {
        total += i
      }

      // 2.创建一个定时器，在浏览器执行
      setTimeout(() => {
        console.log("setTimeout")
      }, 10000);
      // 所以这个函数，不会等setTimeout的10S后再执行，而是立即执行的
      bar()
    }

    foo()
```

------

#### JS线程中的事件执行

- 浏览器监听按钮点击，点击，找到绑定的函数，放入事件队列中，执行上下文栈中全部执行完后，会去查看事件队列中有没有事件，有，把最早放入队列的事件，放入执行上下文栈中去执行

![JS事件](C:\Users\admin\Desktop\系统笔记\img_js_高级\JS事件.png)

#### 浏览器的事件循环

- 图右侧的闭环，就是事件循环
  - 具体查看：
  - JS单线程中的异步代码是如何执行的？
  - JS线程中的事件执行

![浏览器的事件循环](C:\Users\admin\Desktop\系统笔记\img_js_高级\浏览器的事件循环.png)

------

#### 宏任务和微任务

- resolve 会执行then，then的回调会被加入到队列中，在最后执行（全局上下文栈的代码全部执行完成后再执行）,resolve前面的代码会被直接执行

##### 任务队列

- 宏任务
  - 定时器、ajax网络请求
- 微任务
  - promise的then的回调
- 优先级
  - 当全局上下文栈的代码全部执行完，执行任何一个宏任务之前，都会先去查看任务列队中是否有微任务需要执行，有先执行完所有的微任务，再执行宏任务

![宏任务和微任务](C:\Users\admin\Desktop\系统笔记\img_js_高级\宏任务和微任务.png)

------

![宏任务和微任务画图](C:\Users\admin\Desktop\系统笔记\img_js_高级\宏任务和微任务画图.png)

```js
    // 定时器
    setTimeout(() => {
      console.log("setTimeout0")
    }, 0)
    setTimeout(() => {
      console.log("setTimeout1")
    }, 0)

    // Promise中的then的回调也会被添加到队列中
    console.log("1111111")
    new Promise((resolve, reject) => {
      console.log("2222222")
      console.log("-------1")
      console.log("-------2")
      resolve()
      console.log("-------3")
    }).then(res => {
      console.log("then传入的回调: res", res)
    })
    console.log("3333333")

    console.log("script end")
```

------

#### Promise面试题

![Promise面试题](C:\Users\admin\Desktop\系统笔记\img_js_高级\Promise面试题.png)

- 解析

![1全局](C:\Users\admin\Desktop\系统笔记\img_js_高级\1全局.png)

![2微任务](C:\Users\admin\Desktop\系统笔记\img_js_高级\2微任务.png)

![3执行完成](C:\Users\admin\Desktop\系统笔记\img_js_高级\3执行完成.png)

------

#### async await 面试题1

#### await 后面的代码 

- 必须等到promise是 成功状态 后 才会执行，错误状态就不会执行代码了
- await 后面的代码，就 相等于 是 then的回调

![1-代码执行顺序](C:\Users\admin\Desktop\系统笔记\img_js_高级\1-代码执行顺序.png)

![2-代码执行顺序](C:\Users\admin\Desktop\系统笔记\img_js_高级\2-代码执行顺序.png)

![3-代码执行顺序](C:\Users\admin\Desktop\系统笔记\img_js_高级\3-代码执行顺序.png)

------

#### async await 面试题2

#### await 后面的代码 

- async 异步函数，默认返回promise，没有写状态，就是默认返回 undefiend ，async2函数 默认返回了 promise.resolve(undefiend)，那么async2 下面的代码，会被加入微任务，log(async1 end)，被加入微任务
- await async2 执行顺序
  - await 上面的代码 和 async2函数中的 resolve上面的代码，是正常执行
    - async1 start \ async2
  - 而 await 下面的代码需要等待 promise 是 resolve状态后，才会被加入微任务中,并不是执行，是加入微任务
    - async1 end

![await1](C:\Users\admin\Desktop\系统笔记\img_js_高级\await1.png)

![await2](C:\Users\admin\Desktop\系统笔记\img_js_高级\await2.png)

#### Node的事件循环

![Node的事件循环](C:\Users\admin\Desktop\系统笔记\img_js_高级\Node的事件循环.png)

------

#### Node事件循环的阶段

![Node事件循环的阶段](C:\Users\admin\Desktop\系统笔记\img_js_高级\Node事件循环的阶段.png)

------

#### Node事件循环的阶段图解

![Node事件循环的阶段图解](C:\Users\admin\Desktop\系统笔记\img_js_高级\Node事件循环的阶段图解.png)

------

#### Node的宏任务和微任务

![Node的宏任务和微任务](C:\Users\admin\Desktop\系统笔记\img_js_高级\Node的宏任务和微任务.png)

------

#### Node事件循环的顺序

![Node事件循环的顺序](C:\Users\admin\Desktop\系统笔记\img_js_高级\Node事件循环的顺序.png)

------

#### Node执行面试题

![Node执行面试题](C:\Users\admin\Desktop\系统笔记\img_js_高级\Node执行面试题.png)

------

### 错误处理方案

-  throw 是抛出异常，不是处理异常，只有处理异常，异常后的代码才会继续执行
  - 是异常后，所有的代码都不会执行，包括全局代码
  - 异常会往上层传递，直到浏览器接收到异常，终止程序执行
-  try catch 处理异常

```js
    // 1.遇到一个错误, 造成后续的代码全部不能执行
    function foo() {
      "abc".filter() // 这行代码报错，下面的代码都不会执行了，包括btn的点击，不是函数中，是全局的代码都不会执行

      console.log("第15行代码")
      console.log("-------")
    }

    foo()
    console.log("+++++++++")
    // 包括这里都不会执行
    const btn = document.querySelector("button")
    btn.onclick = function() {
      console.log("监听btn的点击")
    }

    // 2.自己封装一些工具
    function sum(num1, num2) {
      if (typeof num1 !== "number") {
        throw "type error: num1传入的类型有问题, 必须是number类型"
      }

      if (typeof num2 !== "number") {
        throw "type error: num2传入的类型有问题, 必须是number类型"
      }

      return num1 + num2
    }

    // 李四调用
    const result = sum(123, 321)
```

![错误处理方案](C:\Users\admin\Desktop\系统笔记\img_js_高级\错误处理方案.png)

------

#### throw关键字

-  throw 是抛出异常，不是处理异常，只有处理异常，异常后的代码才会继续执行

- 遇到throw之后, 后续的代码都不会执行

```js
    class HYError {
      constructor(message, code) {
        this.errMessage = message
        this.errCode = code
      }
    }

    // throw抛出一个异常
    // 1.函数中的代码遇到throw之后, 后续的代码都不会执行
    // 2.throw抛出一个具体的错误信息
    function foo() {
      console.log("foo function1")
      // 1.number/string/boolean
      // throw "反正就是一个错误"

      // 2.抛出一个对象
      // throw { errMessage: "我是错误信息", errCode: -1001 }
      // throw new HYError("错误信息", -1001)

      // 3.Error类: 错误函数的调用栈以及位置信息
      throw new Error("我是错误信息")
		// 不会执行的
      console.log("foo function2")
      console.log("foo function3")
      console.log("foo function4")
    }

    function bar() {
      foo()
    }
    bar()
```

![throw关键字](C:\Users\admin\Desktop\系统笔记\img_js_高级\throw关键字.png)

------

#### Error类型

![Error类型](C:\Users\admin\Desktop\系统笔记\img_js_高级\Error类型.png)

------

#### 异常的处理

![异常的处理](C:\Users\admin\Desktop\系统笔记\img_js_高级\异常的处理.png)

------

#### 异常的捕获

- catch 捕获后，throw 所在函数中，throw 后面的代码还是不会执行，但只限于throw所在的函数，全局的代码 是可以正常执行的
  - log : function1\ --------

```js
    function foo() {
      console.log("foo function1")
      throw new Error("我是错误信息")
        // 下面的依然不会被执行
      console.log("foo function2")
      console.log("foo function3")
      console.log("foo function4")
    }

    function test() {
      // 自己捕获了异常的话, 那么异常就不会传递给浏览器, 那么后续的代码可以正常执行
      try {
        foo()
        console.log("try后续的代码")
      } catch (error) {
        console.log("catch中的代码")
        // console.log(error)
      } finally {
        console.log("finally代码")
      }
    }

    function bar() {
      test()
    }

    bar()
	// 但全局的可以正常执行
    console.log("--------")
```

![异常的捕获](C:\Users\admin\Desktop\系统笔记\img_js_高级\异常的捕获.png)

------

### 认识Storage

- 部分数据，可以长期使用，保存到浏览器，避免每次发送请求

```js
    // 1.token的操作
    let token = localStorage.getItem("token")
    if (!token) {
      console.log("从服务器获取token")
      token = "1"
      localStorage.setItem("token", token)
    }

    // 2.username/password的操作
    let username = localStorage.getItem("username")
    let password = localStorage.getItem("password")
    if (!username || !password) {
      console.log("让用户输入账号和密码")
      username = "coderwhy"
      password = "123456"
      // 将token/username/password保存到storage
      localStorage.setItem("username", username)
      localStorage.setItem("password", password)
    }

    // 3.后续的操作
    console.log(token)
    console.log(token.length)
    console.log(token + " 哈哈哈")
```

![认识Storage](C:\Users\admin\Desktop\系统笔记\img_js_高级\认识Storage.png)

------

#### localStorage和sessionStorage的区别

- localStorage 本地存储，永久存储
- sessionStorage 会话存储，关闭后清除

```js
    // 1.验证一: 关闭网页
    // 1.1.localStorage的存储保持
    localStorage.setItem("name", "localStorage")

    // 1.2.sessionStorage的存储会消失
    sessionStorage.setItem("name", "sessionStorage")


    // 2.验证二: 路由跳转（在同一个标签页）都会保存，使用sessionStorage可以不在本地存储，减少空间
    localStorage.setItem("info", "local")
    sessionStorage.setItem("info", "session")

    
    // 3.验证三: 打开新的页面, 并且是在新的标签中打开
    localStorage.setItem("infoTab", "local") // 保存
    sessionStorage.setItem("infoTab", "session")  // 清除，一个标签页是一个会话
```

![localStorage和sessionStorage的区别](C:\Users\admin\Desktop\系统笔记\img_js_高级\localStorage和sessionStorage的区别.png)

------

#### Storage常见的方法和属性

![Storage常见的方法和属性](C:\Users\admin\Desktop\系统笔记\img_js_高级\Storage常见的方法和属性.png)

------

#### Storage封装

- storage本身是不能直接存储对象类型的 

```js
      // storage本身是不能直接存储对象类型的
      const userInfo = {
        name: "1",
        nickname: "2",
        level: 100,
        imgURL: "http://github.com/3",
      };

      // localStorage.setItem("userInfo", JSON.stringify(userInfo))
      // console.log(JSON.parse(localStorage.getItem("userInfo")))

      sessionCache.setCache("userInfo", userInfo);
      console.log(sessionCache.getCache("userInfo"));
```

```js
class Cache {
  constructor(isLocal = true) {
    // 使用 localStorage 还是 sessionStorage
    this.storage = isLocal ? localStorage : sessionStorage;
  }

  setCache(key, value) {
    if (!value) {
      // throw 抛出异常，终止代码继续执行
      throw new Error("value error: value必须有值!");
    }

    if (value) {
      this.storage.setItem(key, JSON.stringify(value));
    }
  }

  getCache(key) {
    const result = this.storage.getItem(key);
    if (result) {
      return JSON.parse(result);
    }
  }

  removeCache(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

const localCache = new Cache();
const sessionCache = new Cache(false);
```

### 正则表达式

- https://c.runoob.com/front-end/854/

#### 什么是正则表达式？

- 用于处理字符串

```js
      // 创建正则
      // 1> 匹配的规则pattern
      // 2> 匹配的修饰符flags
      // new创建
      const re1 = new RegExp("abc", "ig"); // 全局匹配abc忽略大小写
      // 字面量创建
      const re2 = /abc/gi; // 全局匹配abc忽略大小写
```

![什么是正则表达式？](C:\Users\admin\Desktop\系统笔记\img_js_高级\什么是正则表达式？.png)

------

#### 正则表达式的使用方法

```js
    // 创建正则
    const re1 = /abc/ig
    const message = "fdabc123 faBC323 dfABC222 A2324aaBc"

    // 2.使用字符串的方法, 传入一个正则表达式
    // 需求: 将所有的abc(忽略大小写)换成cba

    const newMessage = message.replaceAll("abc", "cba") // 不能实现忽略大小写
    
    const newMessage1 = message.replaceAll(/abc/ig, "cba") // 正则可以

    // 需求: 将字符串中数字全部删除；\d 数字； + 一个或多个
    const newMessage2 = message.replaceAll(/\d+/ig, "")
```

```js
    // 创建正则
    const re1 = /abc/ig
    const message = "fdabc123 faBC323 dfABC222 A2324aaBc"

    // 1.使用正则对象上的实例方法
    // 1.1.test方法: 检测某一个字符串是否符合正则的规则；返回布尔
    if (re1.test(message)) {
      console.log("message符合规则")
    } else {
      console.log("message不符合规则")
    }

    // 1.2.exec方法: 使用正则执行一个字符串；返回匹配的第一个结果，即使是全局匹配
    const res1 = re1.exec(message) // 数组
    console.log(res1)


    // 2.使用字符串的方法, 传入一个正则表达式
    // 2.1. match方法:返回匹配的结果，全局返回所有
    const result2 = message.match(re1) // 数组
    console.log(result2)

    // 2.2. matchAll方法
    // 注意: matchAll传入的正则修饰符,必须加g
    const result3 = message.matchAll(re1) // 返回一个迭代器（iterator）
    // console.log(result3.next())
    // console.log(result3.next())
    // console.log(result3.next())
    // console.log(result3.next())
    for (const item of result3) {
      console.log(item)
    }

    // 2.3. replace/replaceAll 字符串替换方法

    // 2.4. split切割方法
    const result4 = message.split(re1)

    // 2.5. search搜索方法
    const result5 = message.search(re1)
    console.log(result5)
```

![正则表达式的使用方法](C:\Users\admin\Desktop\系统笔记\img_js_高级\正则表达式的使用方法.png)

------

#### 修饰符flag的使用

![修饰符flag的使用](C:\Users\admin\Desktop\系统笔记\img_js_高级\修饰符flag的使用.png)

------

#### 规则-字符类

- 拉丁字母就是英文字母，不分大小写

```js
    // \d 匹配一个数字
    // \d+ 匹配一个或者多个数字
    const re = /\d+/ig

    // \d -> 匹配范围是所有的数字 0~9
    console.log(message.match(re))
```

![字符类](C:\Users\admin\Desktop\系统笔记\img_js_高级\字符类.png)

------

#### 规则 – 锚点

```js
    const message = "My name is WHY."

    // 字符串方法
    if (message.startsWith("my")) {
      console.log("以my开头")
    }
    if (message.endsWith("why")) {
      console.log("以why结尾")
    }

    // 正则: 锚点
    if (/^my/i.test(message)) {
      console.log("以my开头")
    }
    // \. 必须是 . ; \ 是转义符号
    // . 除换行符之外的任何字符
    if (/why\.$/i.test(message)) {
      console.log("以why.结尾")
    }

    const re = /^coder$/
    const info = "codaaaer"
    console.log(re.test(info)) // false
```

![规则 – 锚点](C:\Users\admin\Desktop\系统笔记\img_js_高级\规则 – 锚点.png)

------

#### 词边界

```js
    // \w：字母或数字或下划线 _
    const message = "My name! is WHY."

    // 需求: name, name必须是一个单独的词
    // \b ：词边界，不是 \w 
    if (/\bname\b/i.test(message)) {
      console.log("有name, name有边界")
    }

    // 词边界的应用
    const infos = "now time is 11:56, 12:00 eat food, number is 123:456"
    const timeRe = /\b\d\d:\d\d\b/ig
    console.log(infos.match(timeRe))
```

#### 规则 – 转义字符串

```js
      // 定义正则: 对.转义
      const re = /\./gi;
      const message = "abc.why";
      const results = message.match(re);

      // 特殊: /
      // const re2 = /\//

      // 获取到很多的文件名
      // jsx -> js文件
      const fileNames = [
        "abc.html",
        "Home.jsx",
        "index.html",
        "index.js",
        "util.js",
        "format.js",
      ];
      // 获取所有的js的文件名(webpack)
      // x?: 是0个或者1个x，x可有可无
      const jsfileRe = /\.jsx?$/;
      // 1.for循环做法
      const newFileNames1 = [];
      for (const filename of fileNames) {
        if (jsfileRe.test(filename)) {
          newFileNames1.push(filename);
        }
      }

      // 2.filter高阶函数
      const newFileNames = fileNames.filter((filename) =>
        jsfileRe.test(filename)
      );
```

![规则 – 转义字符串](C:\Users\admin\Desktop\系统笔记\img_js_高级\规则 – 转义字符串.png)

------

#### 集合（Sets）和范围（Ranges）

```js
// 1开头第二位3-9任意，数字，后面9位结尾；前面2+后9=11
/^1[3-9]\d{9}$/
// 排除0-9
[^0-9]
```

![集合（Sets）和范围（Ranges）](C:\Users\admin\Desktop\系统笔记\img_js_高级\集合（Sets）和范围（Ranges）.png)

------

#### 量词（Quantifiers）

```js
    // 1.量词的使用
    const re = /a{3,5}/ig // 3-5个a
    const message = "fdaaa2fdaaaaaasf42532fdaagjkljlaaaaf"

    const results = message.match(re)
    console.log(results)

    // 2.常见的符号: +/?/*
    // + 是 {1,}
    // ? 是 {0,1}
    // * 是 {0,}

    // 3.案例: 字符串的html元素, 匹配出来里面所有的标签
    const htmlElement = "<div><span>哈哈哈</span><h2>我是标题</h2></div>"
    const tagRe = /<\/?[a-z][a-z0-9]*>/ig
```

![量词（Quantifiers）](C:\Users\admin\Desktop\系统笔记\img_js_高级\量词（Quantifiers）.png)

------

#### 贪婪（ Greedy）和惰性（ lazy）模式

```js
    // 1.贪婪模式/惰性模式
    const message = "我最喜欢的两本书: 《黄金时代》和《沉默的大多数》、《一只特立独行的猪》"

    // 默认.+ 采用贪婪模式,到最后一个》；.+ 任意字符1个或多个;
    const nameRe = /《.+》/ig
    
    // const result1 = message.match(nameRe)
    // console.log(result1)

    // .+? 使用惰性模式，到第一个》；
    const nameRe1 = /《.+?》/ig
```

![贪婪（ Greedy）和惰性（ lazy）模式](C:\Users\admin\Desktop\系统笔记\img_js_高级\贪婪（ Greedy）和惰性（ lazy）模式.png)

------

#### 捕获组（capturing group）

```js
    // 1.捕获组
    const message = "我最喜欢的两本书: 《黄金时代》和《沉默的大多数》、《一只特立独行的猪》"

    // 使用惰性模式
    const nameRe = /(?:《)(?<why>.+?)(?:》)/ig // 3组
    const iterator = message.matchAll(nameRe)
    for (const item of iterator) {
      console.log(item)
    }

    // 2.将捕获组作为整体
    const info = "dfabcabcfabcdfdabcabcabcljll;jk;j"
    const abcRe = /(abc){2,}/ig // abc两个以上
    console.log(info.match(abcRe))
```

![捕获组（capturing group）](C:\Users\admin\Desktop\系统笔记\img_js_高级\捕获组（capturing group）.png)

------

#### 捕获组的补充

```js
/(abc|cba|nba){2,}/ig
```

![捕获组的补充](C:\Users\admin\Desktop\系统笔记\img_js_高级\捕获组的补充.png)

------

#### 案例练习 – 歌词解析

```js
    /*
      currentTime: 2000

      [00:00.000] 作词 : 许嵩 -> { time: 0, content: "作词 : 许嵩" }
      [00:01.000] 作曲 : 许嵩 -> { time: 1000, content: "作曲 : 许嵩" }
    */
    const lyricString = "[00:00.000] 作词 : 许嵩\n[00:01.000] 作曲 : 许嵩\n[00:02.000] 编曲 : 许嵩\n[00:22.240]天空好想下雨\n[00:24.380]我好想住你隔壁\n"

    // 一. 没有封装
    // 1.根据\n切割字符串
    const lyricLineStrings = lyricString.split("\n")
    // console.log(lyricLineStrings)

    // 2.针对每一行歌词进行解析
    // [01:22.550]夏末秋凉里带一点温热有换季的颜色；几位数字；分组
    const timeRe = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/i
    const lyricInfos = []
    for (const lineString of lyricLineStrings) {
      // 1.获取时间
      const result = lineString.match(timeRe)
      // continue 过掉这次循环，继续下次循环
      if (!result) continue
      const minuteTime = result[1] * 60 * 1000 // 分钟转毫秒
      const secondTime = result[2] * 1000
      // *1 保证为数字，不为字符串
      const mSecondTime = result[3].length === 3? result[3]*1: result[3]*10
      const time = minuteTime + secondTime + mSecondTime
      
      // 2.获取内容
      const content = lineString.replace(timeRe, "").trim()

      // 3.将对象放到数组中；{ time, content } =》 { time:time, content:content };对象增强写法
      lyricInfos.push({ time, content })
    }
    console.log(lyricInfos)
    
    // 二.封装工具: 解析歌词
    const lyricInfos1 = parseLyric(lyricString)
    console.log(lyricInfos1)
```

```js
function parseLyric(lyricString) {
  // 1.根据\n切割字符串
  const lyricLineStrings = lyricString.split("\n")
  // console.log(lyricLineStrings)

  // 2.针对每一行歌词进行解析
  // [01:22.550]夏末秋凉里带一点温热有换季的颜色
  const timeRe
  const lyricInfos = = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/i []
  for (const lineString of lyricLineStrings) {
    // 1.获取时间
    const result = lineString.match(timeRe)
    if (!result) continue
    const minuteTime = result[1] * 60 * 1000
    const secondTime = result[2] * 1000
    const mSecondTime = result[3].length === 3? result[3]*1: result[3]*10
    const time = minuteTime + secondTime + mSecondTime
    
    // 2.获取内容
    const content = lineString.replace(timeRe, "").trim()

    // 3.将对象放到数组中
    lyricInfos.push({ time, content })
  }

  return lyricInfos
}
```

![柯里化案例练习](C:\Users\admin\Desktop\系统笔记\img_js_高级\柯里化案例练习.png)

------

#### 案例练习 – 时间格式化

```js
    // timestamp: 1659252290626
    // yyyy/MM/dd hh:mm:ss
    // yyyy*MM*dd hh-mm-ss
    // dayjs/moment
    function formatTime(timestamp, fmtString) {
      // 1.将时间戳转成Date
      const date = new Date(timestamp)

      // // 2.获取到值
      // const year = date.getFullYear()
      // const month = date.getMonth() + 1
      // const day = date.getDate()
      // const hour = date.getHours()
      // const minute = date.getMinutes()
      // const second = date.getSeconds()

      // // 3.创建正则
      // const yearRe = /y+/
      // const monthRe = /M+/

      // 2.正则和值匹配起来
      const dateO = {
        "y+": date.getFullYear(),
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
      }

      // 3.for循环进行替换
      for (const key in dateO) {
        const keyRe = new RegExp(key)
        // fmtString是否有 key 
        if (keyRe.test(fmtString)) {
          // 个位补位；padStart方法，2位，如果不足2位，在前面补0
          const value = (dateO[key] + "").padStart(2, "0")
          // "y+" 替换成 "y+"匹配的值
          fmtString = fmtString.replace(keyRe, value)
        }
      }

      return fmtString
    }

    // 某一个商品上架时间, 活动的结束时间
    const timeEl = document.querySelector(".time")
    const productJSON = {
      name: "iPhone",
      newPrice: 4999,
      oldPrice: 5999,
      endTime: 1659252301637
    }
    timeEl.textContent = formatTime(productJSON.endTime, "hh:mm:ss yyyy*MM*dd")
```

![案例练习 – 时间格式化](C:\Users\admin\Desktop\系统笔记\img_js_高级\案例练习 – 时间格式化.png)

------

### 网络

#### 前后端分离的优势

![前后端分离的优势](C:\Users\admin\Desktop\系统笔记\img_js_高级\前后端分离的优势.png)

------

#### 网页的渲染过程 – 服务器端渲染

![网页的渲染过程 – 服务器端渲染](C:\Users\admin\Desktop\系统笔记\img_js_高级\网页的渲染过程 – 服务器端渲染.png)

------

#### 网页的渲染过程 – 前后端分离(客户端渲染)

![网页的渲染过程 – 前后端分离](C:\Users\admin\Desktop\系统笔记\img_js_高级\网页的渲染过程 – 前后端分离.png)

------

#### 什么是HTTP？

- http 是客户端和服务器沟通的协议，通过这个协议向服务器发送请求
  - 请求对象
  - 响应对象

![什么是HTTP？](C:\Users\admin\Desktop\系统笔记\img_js_高级\什么是HTTP？.png)

------

#### 网页中资源的获取

![网页中资源的获取](C:\Users\admin\Desktop\系统笔记\img_js_高级\网页中资源的获取.png)

------

#### HTTP的组成

请求-图片

![HTTP的组成](C:\Users\admin\Desktop\系统笔记\img_js_高级\HTTP的组成.png)

------

#### HTTP的版本

![HTTP的版本](C:\Users\admin\Desktop\系统笔记\img_js_高级\HTTP的版本.png)

------

#### HTTP的请求方式

- HEAD，用于下载文件，返回响应头，从响应头拿到文件大小，根据大小来决定是否下载文件

![HTTP的请求方式](C:\Users\admin\Desktop\系统笔记\img_js_高级\HTTP的请求方式.png)

------

#### HTTP Request Header（一）

![HTTP Request Header（一）](C:\Users\admin\Desktop\系统笔记\img_js_高级\HTTP Request Header（一）.png)

------

#### HTTP Request Header（二）

- HTTP是应用层协议，基于TCP协议，向服务端发送请求
- TCP是中间人，需要经过 握手、挥手

TCP-图片

TCP2-图片

- accept-encoding
  - 通过 webpack 把JS文件压缩成gz文件，上传到服务器，把压缩的文件放入服务器
  - 请求，拿到压缩文件，不用解压，浏览器会自动解压执行

压缩JS-图片

![HTTP Request Header（二）](C:\Users\admin\Desktop\系统笔记\img_js_高级\HTTP Request Header（二）.png)

------

#### HTTP Response响应状态码

- https://developer.mozilla.org/zh-CN/docs/web/http/status

错误码-图片

![HTTP Response响应状态码](C:\Users\admin\Desktop\系统笔记\img_js_高级\HTTP Response响应状态码.png)

------

#### HTTP Request Header

![HTTP Request Header](C:\Users\admin\Desktop\系统笔记\img_js_高级\HTTP Request Header.png)

------

#### Chrome安装插件 - FeHelper

![Chrome安装插件 - FeHelper](C:\Users\admin\Desktop\系统笔记\img_js_高级\Chrome安装插件 - FeHelper.png)

------

#### AJAX发送请求

- 使用类XHR创建AJAX对象

```js
    // 1.创建XMLHttpRequest对象
    const xhr = new XMLHttpRequest()

    // 2.监听状态的改变(宏任务)
    // 监听四种状态
    xhr.onreadystatechange = function() {
      // 1.如果状态不是DONE状态，不是4，没有下载完成, 直接返回
      if (xhr.readyState !== XMLHttpRequest.DONE) return

      // 2.确定拿到了数据
      console.log(xhr.response)
    }
    // 6.onload监听数据加载完成
    xhr.onload = function() {
      console.log("onload")
    }

    // 3.配置请求open;异步请求
    xhr.open("get", "http://123.207.32.32:8000/home/multidata")
// 5.实际开发中要使用异步请求, 异步请求不会阻塞js代码继续执行；第三个参数false是同步请求
    xhr.open("get", "http://123.207.32.32:8000/home/multidata", false)

    // 4.发送请求(浏览器帮助发送对应请求)
    xhr.send()
	    // 5.同步必须等到有结果后, 才会继续执行
    console.log(xhr.response)
```

![AJAX发送请求](C:\Users\admin\Desktop\系统笔记\img_js_高级\AJAX发送请求.png)

------

#### XMLHttpRequest的state（状态）

![XMLHttpRequest的state（状态）](C:\Users\admin\Desktop\系统笔记\img_js_高级\XMLHttpRequest的state（状态）.png)

------

#### XMLHttpRequest其他事件监听

![XMLHttpRequest其他事件监听](C:\Users\admin\Desktop\系统笔记\img_js_高级\XMLHttpRequest其他事件监听.png)

------

#### 响应数据和响应类型

```js
    // 1.
    const xhr = new XMLHttpRequest()

    // 2.onload监听数据加载完成
    xhr.onload = function() {
      // const resJSON = JSON.parse(xhr.response)
      console.log(xhr.response)
      console.log(xhr.responseText)
      console.log(xhr.responseXML)
    }

    // 3.告知xhr获取到的数据的类型
    xhr.responseType = "json"
    xhr.responseType = "text"
    xhr.responseType = "xml"

    // 4.配置网络请求
    // 4.1.json类型的接口
    xhr.open("get", "http://123.207.32.32:8000/home/multidata")
    // 4.2.json类型的接口
    // xhr.open("get", "http://123.207.32.32:1888/01_basic/hello_json")
    // 4.3.text类型的接口
    // xhr.open("get", "http://123.207.32.32:1888/01_basic/hello_text")
    // 4.4.xml类型的接口
    // xhr.open("get", "http://123.207.32.32:1888/01_basic/hello_xml")

    // 5.发送网络请求
    xhr.send()
```

![响应数据和响应类型](C:\Users\admin\Desktop\系统笔记\img_js_高级\响应数据和响应类型.png)

------

#### HTTP响应的状态status

```js
      // 1.创建对象
      const xhr = new XMLHttpRequest();

      // 2.监听结果
      xhr.onload = function () {
        console.log(xhr.status, xhr.statusText);
        // 根据http的状态码判断是否请求成功
        if (xhr.status >= 200 && xhr.status < 300) {
          // 成功
          console.log(xhr.response);
        } else {
          // 错误
          console.log(xhr.status, xhr.statusText);
        }
      };

      xhr.onerror = function () {
        console.log("onerror", xhr.status, xhr.statusText);
      };

      // 3.设置响应类型
      xhr.responseType = "json";

      // 4.配置网络请求
      // xhr.open("get", "http://123.207.32.32:8000/abc/cba/aaa")
      xhr.open("get", "http://123.207.32.32:8000/home/multidata");

      // 5.发送网络请求
      xhr.send();
```

![HTTP响应的状态status](C:\Users\admin\Desktop\系统笔记\img_js_高级\HTTP响应的状态status.png)

------

#### GET/POST请求传递参数

```js
    const formEl = document.querySelector(".info")
    const sendBtn = document.querySelector(".send")
    sendBtn.onclick = function() {
      // 创建xhr对象
      const xhr = new XMLHttpRequest()

      // 监听数据响应
      xhr.onload = function() {
        console.log(xhr.response)//结果
      }

      // 配置请求
      xhr.responseType = "json"

      // 1.传递参数方式一: get -> query ；参数放入url中，可以被看到
      xhr.open("get", "http://123.207.32.32:1888/02_param/get?name=why&age=18&address=广州市")

      // 2.传递参数方式二: post -> urlencoded
      xhr.open("post", "http://123.207.32.32:1888/02_param/posturl")
      // 发送请求(请求体body)
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")// 设置传递参数的格式；setRequestHeader 设置请求头字段
      xhr.send("name=why&age=18&address=广州市") // send 传参

      // 3.传递参数方式三: post -> formdata
      xhr.open("post", "http://123.207.32.32:1888/02_param/postform")
      // formElement对象转成FormData对象
      const formData = new FormData(formEl)
      xhr.send(formData) // 传form表单

      // 4.传递参数方式四: post -> json
      xhr.open("post", "http://123.207.32.32:1888/02_param/postjson")
      xhr.setRequestHeader("Content-type", "application/json")
      xhr.send(JSON.stringify({name: "why", age: 18, height: 1.88}))
    }
```

![GETPOST请求传递参数](C:\Users\admin\Desktop\系统笔记\img_js_高级\GETPOST请求传递参数.png)

------

#### ajax网络请求封装

```js
// 练习hyajax -> axios
function hyajax({
  url,
  method = "get",
  data = {},
  timeout = 10000,
  headers = {}, // token
} = {}) {
  // 1.创建对象
  const xhr = new XMLHttpRequest()

  // 2.创建Promise
  const promise = new Promise((resolve, reject) => {

    // 2.监听数据
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response)
      } else {
        reject({ status: xhr.status, message: xhr.statusText })
      }
    }

    // 3.设置类型
    xhr.responseType = "json"
    xhr.timeout = timeout

    // 4.open方法
    if (method.toUpperCase() === "GET") {
      const queryStrings = []
      for (const key in data) {
        queryStrings.push(`${key}=${data[key]}`)
      }
      url = url + "?" + queryStrings.join("&")
      xhr.open(method, url)
      xhr.send()
    } else {
      xhr.open(method, url)
      xhr.setRequestHeader("Content-type", "application/json")
      xhr.send(JSON.stringify(data))
    }
  })

  promise.xhr = xhr

  return promise
}
// 使用
    const promise = hyajax({
      url: "http://123.207.32.32:1888/02_param/get",
      data: {
        username: "coderwhy",
        password: "123456"
      }
    })

    promise.then(res => {
      console.log("res:", res)
    }).catch(err => {
      console.log("err:", err)
    })
```

![ajax网络请求封装](C:\Users\admin\Desktop\系统笔记\img_js_高级\ajax网络请求封装.png)

------

#### 延迟时间timeout和取消请求

- 通过 timeout 自动取消请求
  - 不设置就是没有超时时间
  - 一般10s
- 手动设置取消请求

```js
    // 1-手动
    xhr.onabort = function() {
      console.log("请求被取消掉了")
    }
    // 2-timeout: 浏览器达到过期时间还没有获取到对应的结果时, 取消本次请求
    xhr.timeout = 3000
    xhr.ontimeout = function() {
      console.log("timeout过期，取消请求后的操作")
    }
```

![延迟时间timeout和取消请求](C:\Users\admin\Desktop\系统笔记\img_js_高级\延迟时间timeout和取消请求.png)

------

#### 认识Fetch和Fetch API

![认识Fetch和Fetch API](C:\Users\admin\Desktop\系统笔记\img_js_高级\认识Fetch和Fetch API.png)

------

#### Fetch数据的响应（Response）

![Fetch数据的响应（Response）](C:\Users\admin\Desktop\系统笔记\img_js_高级\Fetch数据的响应（Response）.png)

------

#### Fetch网络请求的演练

```js
    // 1.fetch发送get请求；直接使用fetch，它返回一个promise，then拿结果
    // 1.1.未优化的代码
    fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      // 1.获取到response
      const response = res

      // 2.获取具体的结果；json()代表是json格式，text就是text()
      response.json().then(res => {
        console.log("res:", res) // 结果
      })
    }).catch(err => {
      console.log("err:", err)
    })

    // 1.2. 优化方式一:
    fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      // 1.获取到response
      const response = res
      // 2.获取具体的结果
      return response.json()
    }).then(res => {
      console.log("res:", res)
    }).catch(err => {
      console.log("err:", err)
    })

    // 1.3. 优化方式二:
    async function getData() {
      const response = await fetch("http://123.207.32.32:8000/home/multidata")
      const res = await response.json()
      console.log("res:", res)
    }
    getData()


    // 2.post请求并且有参数
    async function getData() {
      const response = await fetch("http://123.207.32.32:1888/02_param/postjson", {
        method: "post",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          name: "why",
          age: 18
        })
      })
      
      // const formData = new FormData()
      // formData.append("name", "why")
      // formData.append("age", 18)
      // const response = await fetch("http://123.207.32.32:1888/02_param/postform", {
      //   method: "post",
      //   body: formData
      // })

      // 获取response状态
      console.log(response.ok, response.status, response.statusText)

      const res = await response.json()
      console.log("res:", res)
    }
    getData()
```

![Fetch网络请求的演练](C:\Users\admin\Desktop\系统笔记\img_js_高级\Fetch网络请求的演练.png)

------

#### Fetch POST请求

![Fetch POST请求](C:\Users\admin\Desktop\系统笔记\img_js_高级\Fetch POST请求.png)

------

#### XMLHttpRequest文件上传

- 可以监听文件上传进度

```js
const uploadBtn = document.querySelector(".upload")
    uploadBtn.onclick = function() {
      // 1.创建对象
      const xhr = new XMLHttpRequest()

      // 2.监听结果
      xhr.onload = function() {
        console.log(xhr.response)
      }

      xhr.onprogress = function(event) {
        console.log(event)// 上传进度
      }
      

      xhr.responseType = "json"
      xhr.open("post", "http://123.207.32.32:1888/02_param/upload")

      // 表单
      const fileEl = document.querySelector(".file")
      const file = fileEl.files[0] // 文件

      const formData = new FormData()
      formData.append("avatar", file) // 加入formData中

      xhr.send(formData)
    }
```

![XMLHttpRequest文件上传](C:\Users\admin\Desktop\系统笔记\img_js_高级\XMLHttpRequest文件上传.png)

------

#### Fetch文件上传

- 不能监听文件上传进度

```js
    const uploadBtn = document.querySelector(".upload")
    uploadBtn.onclick = async function() {
      // 表单
      const fileEl = document.querySelector(".file")
      const file = fileEl.files[0]

      const formData = new FormData()
      formData.append("avatar", file)

      // 发送fetch请求
      const response = await fetch("http://123.207.32.32:1888/02_param/upload", {
        method: "post",
        body: formData
      })
      const res = await response.json()
      console.log("res:", res)
    }
```

![Fetch文件上传](C:\Users\admin\Desktop\系统笔记\img_js_高级\Fetch文件上传.png)

------

### 防抖和节流

#### 认识防抖和节流函数

![认识防抖和节流函数](C:\Users\admin\Desktop\系统笔记\img_js_高级\认识防抖和节流函数.png)

------

#### 认识防抖debounce函数

```js
  <script src="https://cdn.jsdelivr.net/npm/underscore@1.13.4/underscore-umd-min.js"></script>
  <script>

    // 1.获取input元素
    const inputEl = document.querySelector("input")
    
    // 2.防抖处理代码
    let counter = 1
    inputEl.oninput = _.debounce(function() {
      console.log(`发送网络请求${counter++}:`, this.value)
    }, 10000)
```

![认识防抖debounce函数](C:\Users\admin\Desktop\系统笔记\img_js_高级\认识防抖debounce函数.png)

------

#### 防抖函数的案例

![防抖函数的案例](C:\Users\admin\Desktop\系统笔记\img_js_高级\防抖函数的案例.png)

------

#### 手写防抖

- 基本实现;用于面试

```js
    function myDebounce(fn, delay) {
      // 1.用于记录上一次事件触发的timer
      let timer = null

      // 2.触发事件时执行的函数
      const _debounce = () => {
        // 2.1.如果有再次触发(更多次触发)事件, 那么取消上一次的事件
        if (timer) clearTimeout(timer)

        // 2.2.延迟去执行对应的fn函数(传入的回调函数)
        timer = setTimeout(() => {
          fn()
          timer = null // 执行过函数之后, 将timer重新置null
        }, delay);
      }

      // 返回一个新的函数
      return _debounce
    }
```

- 绑定this和参数

```js
      function hydebounce(fn, delay) {
        // 1.用于记录上一次事件触发的timer
        let timer = null;

        // 2.触发事件时执行的函数;_debounce是被inputEl调用，this是inputEl
          // ...args 多个参数
        const _debounce = function (...args) {
          // 箭头函数本身没有this，这里拿不到
          // 2.1.如果有再次触发(更多次触发)事件, 那么取消上一次的事件
          if (timer) clearTimeout(timer);

          // 2.2.延迟去执行对应的fn函数(传入的回调函数)
          timer = setTimeout(() => {
            // 箭头this = 上层 this = inputEl
            fn.apply(this, args);
            timer = null; // 执行过函数之后, 将timer重新置null
          }, delay);
        };

        // 返回一个新的函数
        return _debounce;
      }
    </script>

    <script>
      // 获取input元素
      const inputEl = document.querySelector("input");

      // 自己实现的防抖
      let counter = 1;
      // event 是 input的event
      inputEl.oninput = hydebounce(function (event) {
        console.log(`发送网络请求${counter++}:`, this, event);
      }, 1000);
```

- 取消功能
  - 在输入后，执行前，离开页面；这时这个请求应该取消

```js
    function hydebounce(fn, delay) {
      // 1.用于记录上一次事件触发的timer
      let timer = null

      // 2.触发事件时执行的函数
      const _debounce = function(...args) {
        // 2.1.如果有再次触发(更多次触发)事件, 那么取消上一次的事件
        if (timer) clearTimeout(timer)

        // 2.2.延迟去执行对应的fn函数(传入的回调函数)
        timer = setTimeout(() => {
          fn.apply(this, args)
          timer = null // 执行过函数之后, 将timer重新置null
        }, delay);
      }

      // 3.给_debounce绑定一个取消的函数
      _debounce.cancel = function() {
        if (timer) clearTimeout(timer)
      }

      // 返回一个新的函数
      return _debounce
    }
  </script>

  <script>
    // 1.获取input元素
    const inputEl = document.querySelector("input")
    const cancelBtn = document.querySelector(".cancel")

    // 3.自己实现的防抖
    let counter = 1
    const debounceFn = hydebounce(function(event) {
      console.log(`发送网络请求${counter++}:`, this, event)
    }, 5000)
    inputEl.oninput = debounceFn

    // 4.实现取消的功能
    cancelBtn.onclick = function() {
      debounceFn.cancel()
    }
```

- 立即执行
  - 每次搜索的第一次立即执行，第二次延迟，完成后，依此循环：下次搜索的第一次立即执行，第二次延迟

```js
    // 原则: 一个函数进行做一件事情, 一个变量也用于记录一种状态

    function hydebounce(fn, delay, immediate = false) {
      // 1.用于记录上一次事件触发的timer
      let timer = null
      let isInvoke = false

      // 2.触发事件时执行的函数
      const _debounce = function(...args) {
        // 2.1.如果有再次触发(更多次触发)事件, 那么取消上一次的事件
        if (timer) clearTimeout(timer)

        // 第一次操作是不需要延迟
        if (immediate && !isInvoke) {
          fn.apply(this, args)
          // 第二次延迟
          isInvoke = true
          return
        }

        // 2.2.延迟去执行对应的fn函数(传入的回调函数)
        timer = setTimeout(() => {
          fn.apply(this, args)
          timer = null // 执行过函数之后, 将timer重新置null
          // 完成后，恢复初始化
          isInvoke = false
        }, delay);
      }

      // 3.给_debounce绑定一个取消的函数
      _debounce.cancel = function() {
        if (timer) clearTimeout(timer)
        // 完成后，恢复初始化
        timer = null
        isInvoke = false
      }

      // 返回一个新的函数
      return _debounce
    }
```

- 获取返回值

```js
    // 原则: 一个函数进行做一件事情, 一个变量也用于记录一种状态

    function hydebounce(fn, delay, immediate = false, resultCallback) {
      // 1.用于记录上一次事件触发的timer
      let timer = null
      let isInvoke = false

      // 2.触发事件时执行的函数
      const _debounce = function(...args) {
        return new Promise((resolve, reject) => {
          try {
            // 2.1.如果有再次触发(更多次触发)事件, 那么取消上一次的事件
            if (timer) clearTimeout(timer)

            // 第一次操作是不需要延迟
            let res = undefined
            if (immediate && !isInvoke) {
              // res 是fn return 的值
              res = fn.apply(this, args)
              if (resultCallback) resultCallback(res)
              // 成功返回结果，自动调用then拿到结果
              resolve(res)
              isInvoke = true
              return
            }

            // 2.2.延迟去执行对应的fn函数(传入的回调函数)
            timer = setTimeout(() => {
              res = fn.apply(this, args)
              if (resultCallback) resultCallback(res)
              resolve(res)
              timer = null // 执行过函数之后, 将timer重新置null
              isInvoke = false
            }, delay);
          } catch (error) {
            reject(error)
          }
        })
      }

      // 3.给_debounce绑定一个取消的函数
      _debounce.cancel = function() {
        if (timer) clearTimeout(timer)
        timer = null
        isInvoke = false
      }

      // 返回一个新的函数
      return _debounce
    }
  </script>

  <script>
    // 1.获取input元素
    const inputEl = document.querySelector("input")
    const cancelBtn = document.querySelector(".cancel")

    // 2.手动绑定函数和执行
    const myDebounceFn = hydebounce(function(name, age, height) {
      console.log("----------", name, age, height)
      return "coderwhy 哈哈哈哈"
    }, 1000, false)
    // myDebounceFn给_debounce 传参
    myDebounceFn("why", 18, 1.88).then(res => {
      console.log("拿到执行结果:", res)
    })
```

- 封装

```js
    const inputEl = document.querySelector("input")
    const cancelBtn = document.querySelector(".cancel")

    let counter = 1
    const debounceFn = hydebounce(function(event) {
      console.log(`发送网络请求${counter++}:`, this, event)
    }, 1000)
    inputEl.oninput = debounceFn

    // 4.实现取消的功能
    cancelBtn.onclick = function() {
      debounceFn.cancel()
    }
```

```js

// 原则: 一个函数进行做一件事情, 一个变量也用于记录一种状态
function hydebounce(fn, delay, immediate = false, resultCallback) {
  // 1.用于记录上一次事件触发的timer
  let timer = null
  let isInvoke = false

  // 2.触发事件时执行的函数
  const _debounce = function(...args) {
    return new Promise((resolve, reject) => {
      try {
        // 2.1.如果有再次触发(更多次触发)事件, 那么取消上一次的事件
        if (timer) clearTimeout(timer)

        // 第一次操作是不需要延迟
        let res = undefined
        if (immediate && !isInvoke) {
          res = fn.apply(this, args)
          if (resultCallback) resultCallback(res)
          resolve(res)
          isInvoke = true
          return
        }

        // 2.2.延迟去执行对应的fn函数(传入的回调函数)
        timer = setTimeout(() => {
          res = fn.apply(this, args)
          if (resultCallback) resultCallback(res)
          resolve(res)
          timer = null // 执行过函数之后, 将timer重新置null
          isInvoke = false
        }, delay);
      } catch (error) {
        reject(error)
      }
    })
  }

  // 3.给_debounce绑定一个取消的函数
  _debounce.cancel = function() {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  // 返回一个新的函数
  return _debounce
}
```

#### 认识节流throttle函数

- 防抖是只执行最后一次
  - 输入框，只要不停止输入就一直不执行，直到停止输入后的多少S执行一次
  - 用于输入框，在停止输入后多少S执行一次
- 节流是在每个固定的时间执行一次
  - 输入框，一直在输入中，也会按照固定的时间每2S执行一次
  - 用于频繁点击按钮，1S内点击10次，执行一次
  - 第一次一定会立即执行

![认识节流throttle函数](C:\Users\admin\Desktop\系统笔记\img_js_高级\认识节流throttle函数.png)

------

#### 实现节流-面试

```js
    function hythrottle(fn, interval) {
      let startTime = 0

      const _throttle = function() {
        const nowTime = new Date().getTime()// 时间戳 213324134
        const waitTime = interval - (nowTime - startTime) // 1000 - (213324134 - 0) = - 213323134，完成第一次立即执行；第一次执行后 starttime = 213324134，nowTime = 213324135，1000-（213324134 - 213324135）= 999，不执行，startTime 还是213324135，一直等到 nowTime - startTime >= interval, waitTime <= 0 , 才会再次执行
        // startTime是上次的时间，nowTime是这次的时间，间隔要大于等于interval，才执行
        if (waitTime <= 0) {
          fn()
          startTime = nowTime
        }
      }

      return _throttle
    }
// 使用
    let counter = 1
    inputEl.oninput = hythrottle(function() {
      console.log(`发送网络请求${counter++}:`, this.value)
    }, 1000)
```

#### 节流绑定this和参数

- 如何传递的参数？

```js
    <script>
      function hythrottle(fn, interval) {
        let startTime = 0;
        // 接收参数
        const _throttle = function (...args) {
          // console.log(args);
          const nowTime = new Date().getTime();
          const waitTime = interval - (nowTime - startTime);
          if (waitTime <= 0) {
            // 这个 this 是调用者 inputEl，fn函数的this就指向了 inputEl
            // 因为fn函数内部使用到了event，所以在调用的时候就需要传入event
            // 把接收的参数再传给fn
            fn.apply(this, args);
            // 函数独立调用，函数内的this是window
            // fn();
            startTime = nowTime;
          }
        };

        return _throttle;
      }
    </script>

    <script>
      // 1.获取input元素
      const inputEl = document.querySelector("input");
      // 2.自己实现的节流函数
      let counter = 1;
      // hythrottle(fn,1000) 这个函数,在inputEl点击之前就已经执行了，hythrottle()直接调用执行的，hythrottle返回一个函数_throttle，就是在点击之前代码变成了：inputEl.oninput = _throttle，所以 input的默认事件参数event，只能传给 _throttle； inputEl.oninput = _throttle(event);所以在 _throttle 函数内部，接收了参数
      inputEl.oninput = hythrottle(function (event) {
        // this.value是input的value；event是input事件的默认参数event
        // 默认this的函数独立调用，函数内的this是window
        console.log(`发送网络请求${counter++}:`, this, this.value, event);
      }, 1000);
      // 在点击之前
      inputEl.oninput = hythrottle(fn, 1000);
      // input事件的默认参数event，可以直接传递给函数 _throttle；所以要在 _throttle 函数内部 进行接收参数
      inputEl.oninput = _throttle(event);
      // 多个参数，使用 ...arg 把全部参数传进去，在这里 ...arg 就是 event
      inputEl.oninput = function (...arg) {
        console.log(arg, "111");
      };
      // 点击，执行的是 _throttle(event)
```

#### 控制第一次的立即执行

```js
    // leading 默认立即执行
    function hythrottle(fn, interval, leading = true) {
      let startTime = 0

      const _throttle = function(...args) {
        // 1.获取当前时间
        const nowTime = new Date().getTime()

        // 对立即执行进行控制；startTime === 0 是第一次；在第一次的时候并且leading=false不是立即执行的时候，startTime = nowTime，waitTime > 0 ，就不会执行
        if (!leading && startTime === 0) {
          startTime = nowTime
        }

        // 2.计算需要等待的时间执行函数
        const waitTime = interval - (nowTime - startTime)
        if (waitTime <= 0) {
          fn.apply(this, args)
          startTime = nowTime
        }
      }

      return _throttle
    }
    // 使用
        let counter = 1
    inputEl.oninput = hythrottle(function(event) {
      console.log(`发送网络请求${counter++}:`, this.value, event)
    }, 1000,false)
```

#### 了解-控制最后一次是否执行，默认不会执行

```js
      // { leading = true, trailing = false } = {}；是解构并赋值默认参数，第一个{}是解构并赋值默认参数，第二个{}是接收参数，接收 { trailing: true }，如果有值，就使用接收的值，没有值使用默认设置的值
      function hythrottle(
        fn,
        interval,
        { leading = true, trailing = false } = {}
      ) {
        let startTime = 0;
        let timer = null;

        const _throttle = function (...args) {
          // 1.获取当前时间
          const nowTime = new Date().getTime();

          // 对立即执行进行控制
          if (!leading && startTime === 0) {
            startTime = nowTime;
          }

          // 2.计算需要等待的时间执行函数
          const waitTime = interval - (nowTime - startTime);
          if (waitTime <= 0) {
            // 如果刚好在3S又点击了，取消之前在2S的时候添加的定时器，这样在3S的时候只会执行一个
            if (timer) clearTimeout(timer);
            fn.apply(this, args);
            startTime = nowTime;
            // 这里清空，下面的定时器才会开启
            timer = null;
            return;
          }

          // 3.判断是否需要执行尾部;这里的 waitTime 是多久之后执行最后一次；假如原本是 每3S执行一次，一直点击按钮在最后一个3S执行之后，继续点击按钮，在下一个3S没有到达3S的时候，比如在2S的时候又点击了，这时 因为不到3S，waitTime > 0 ，不会执行，也就是默认的尾部不执行，现在实现执行，需要先拿到剩余时间，把3S 减去 从上次3S执行完的时间 到 点击时的时间，就是 剩余多少时间才满足 3S 去执行，这个剩余时间就是 waitTime，把 waitTime给定时器，定时器去执行尾部，这个3S固定时间现在是，点击之前的时间 加上 剩余时间 waitTime，就等于3S，waitTime = 0，完成尾部执行，完成最后一次按照 固定的3S执行一次
          // 如果没有定时器，在开启定时器；否则会每次都开启新的定时器
          // A:在满足 waitTime <= 0 的最后一次执行完成后，就开启定时器，准备尾部执行，如果又满足 waitTime <= 0，就清除定时器，然后再次开启定时器，并不是只在：B:一直点击按钮在最后一个3S执行之后，继续点击按钮，在下一个3S没有到达3S的时候，开启定时器；B是属于A的
          if (trailing && !timer) {
            timer = setTimeout(() => {
              // console.log("执行timer")
              // 执行最后一次
              fn.apply(this, args);
              // 重置时间为这次最新时间，setTimeout执行完的时间；nowTime 是上次点击时获取的最新时间，在时间线上，上次的值在前面，值小，这次最新时间在后面，值大；startTime 值小，导致 (nowTime - startTime) 变大，  interval - (nowTime - startTime) 变 小，小到 <=0执行，就会导致执行，出现多余的错误执行
              startTime = new Date().getTime();
              // 定时器执行，清空
              timer = null;
            }, waitTime);
          }
        };

        return _throttle;
      }
      // 使用
            let counter = 1;
      inputEl.oninput = hythrottle(
        function (event) {
          console.log(`发送网络请求${counter++}:`, this.value, event);
        },
        3000,
        { trailing: true }
      );
```

#### 获取返回值

- 通过 promise 获取返回值
- 有尾部执行功能，才有取消功能

```js
      function hythrottle(
        fn,
        interval,
        { leading = true, trailing = false } = {}
      ) {
        let startTime = 0;
        let timer = null;

        const _throttle = function (...args) {
          return new Promise((resolve, reject) => {
            try {
              // 1.获取当前时间
              const nowTime = new Date().getTime();

              // 对立即执行进行控制
              if (!leading && startTime === 0) {
                startTime = nowTime;
              }

              // 2.计算需要等待的时间执行函数
              const waitTime = interval - (nowTime - startTime);
              if (waitTime <= 0) {
                // console.log("执行操作fn")
                if (timer) clearTimeout(timer);
                // res：fn 执行的返回值
                const res = fn.apply(this, args);
                resolve(res);
                startTime = nowTime;
                timer = null;
                return;
              }

              // 3.判断是否需要执行尾部
              if (trailing && !timer) {
                timer = setTimeout(() => {
                  // console.log("执行timer")
                  const res = fn.apply(this, args);
                  resolve(res);
                  startTime = new Date().getTime();
                  timer = null;
                }, waitTime);
              }
            } catch (error) {
              reject(error);
            }
          });
        };
        // 取消
        _throttle.cancel = function () {
          if (timer) clearTimeout(timer);
          startTime = 0;
          timer = null;
        };

        return _throttle;
      }
      // 使用
            let counter = 1;

      const throttleFn = hythrottle(
        function (event) {
          console.log(`发送网络请求${counter++}:`, this.value, event);
          return "throttle return value";
        },
        3000,
        { trailing: true }
      );

      throttleFn("aaaa").then((res) => {
        // 返回值
        console.log("res:", res); // "throttle return value";
      });

      // 取消
      cancelBtn.onclick = function () {
        throttleFn.cancel();
      };
```

#### 封装 throttleFn

```js
function hythrottle(fn, interval, { leading = true, trailing = false } = {}) {
  let startTime = 0
  let timer = null

  const _throttle = function(...args) {
    return new Promise((resolve, reject) => {
      try {
         // 1.获取当前时间
        const nowTime = new Date().getTime()

        // 对立即执行进行控制
        if (!leading && startTime === 0) {
          startTime = nowTime
        }

        // 2.计算需要等待的时间执行函数
        const waitTime = interval - (nowTime - startTime)
        if (waitTime <= 0) {
          // console.log("执行操作fn")
          if (timer) clearTimeout(timer)
          const res = fn.apply(this, args)
          resolve(res)
          startTime = nowTime
          timer = null
          return
        } 

        // 3.判断是否需要执行尾部
        if (trailing && !timer) {
          timer = setTimeout(() => {
            // console.log("执行timer")
            const res = fn.apply(this, args)
            resolve(res)
            startTime = new Date().getTime()
            timer = null
          }, waitTime);
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  _throttle.cancel = function() {
    if (timer) clearTimeout(timer)
    startTime = 0
    timer = null
  }

  return _throttle
}
```

- 使用

```js
      // A-渲染的数据
      var a = "";
      // 自己实现的节流函数
      let counter = 1;
      const throttleFn = hythrottle(function (event) {
        console.log(`发送网络请求${counter++}:`, this.value, event);
        // 这是请求返回的数据
        const b = +a + +1;
        // B-每次请求改变渲染的数据
        a = b;
        console.log(a);
      }, 3000);
      // 使用
      inputEl.oninput = throttleFn;
```

#### 节流函数的应用场景

![节流函数的应用场景](C:\Users\admin\Desktop\系统笔记\img_js_高级\节流函数的应用场景.png)

------

#### 生活中的例子：防抖和节流

![生活中的例子：防抖和节流](C:\Users\admin\Desktop\系统笔记\img_js_高级\生活中的例子：防抖和节流.png)

------

#### 案例准备

![案例准备](C:\Users\admin\Desktop\系统笔记\img_js_高级\案例准备.png)

------

#### Underscore库的介绍

- https://underscorejs.org/

![Underscore库的介绍](C:\Users\admin\Desktop\系统笔记\img_js_高级\Underscore库的介绍.png)

------

#### Underscore实现防抖和节流

![Underscore实现防抖和节流](C:\Users\admin\Desktop\系统笔记\img_js_高级\Underscore实现防抖和节流.png)

------

#### 自定义防抖和节流函数

![自定义防抖和节流函数](C:\Users\admin\Desktop\系统笔记\img_js_高级\自定义防抖和节流函数.png)

------

#### 自定义深拷贝函数

##### 浅拷贝、深拷贝

```js
    const info = {
      name: "why",
      age: 18,
      friend: {
        name: "kobe"
      },
      running: function() {},
      [Symbol()]: "abc",
    }
    info.obj = info

    // 1.操作一: 引用赋值
    const obj1 = info

    // 2.操作二: 浅拷贝
    const obj2 = { ...info }
    obj2.name = "james"
    // 深层会被改变，深层依然是引用赋值；只有第一层是新创建的对象
    obj2.friend.name = "james"
    console.log(info.friend.name)
    // 将 info 拷贝到 空对象 {}，生成 obj3
    const obj3 = Object.assign({}, info)
    obj3.name = "curry"
    // 同上，会被改变
    obj3.friend.name = "curry"
    console.log(info.friend.name)

    // 3.操作三: 深拷贝
    // 3.1.JSON方法，JSON.parse会创建新对象，深拷贝会忽略函数，不会拷贝函数，不能拷贝源对象的属性 info.obj
    const obj4 = JSON.parse(JSON.stringify(info))
    // 深拷贝，不会被改变
    info.friend.name = "curry"
    console.log(obj4.friend.name)
    console.log(obj4)
```

##### 实现深拷贝

```js
    // 深拷贝函数
    function deepCopy(originValue) {
      // 1.如果是原始类型, 直接返回
      if (!isObject(originValue)) {
        return originValue
      }

      // 2.如果是对象类型, 才需要创建对象
      const newObj = {}
      for (const key in originValue) {
        newObj[key] = deepCopy(originValue[key]);
      }
      return newObj
    }

    const info = {
      name: "why",
      age: 18,
      friend: {
        name: "kobe",
        address: {
          name: "洛杉矶",
          detail: "斯坦普斯中心"
        }
      }
    }

    const newObj = deepCopy(info)
```

##### 判断是否为对象

- typeof 不能区分null，得到object

```js
// 需求: 判断一个标识符是否是对象类型
function isObject(value) {
  // null,object,function,array
  // null -> object
  // function -> function -> true
  // object/array -> object -> true
  const valueType = typeof value
 // 返回 true\false
  return (value !== null) && ( valueType === "object" || valueType === "function" )
}
const name = "why"
const age = 18
const foo = {}
const bar = function() {}
const arr = []

console.log(isObject(null)) // false
console.log(isObject(bar)) // true
console.log(isObject(name)) // false
console.log(isObject(foo)) // true
console.log(isObject(arr)) // true
```

##### 深拷贝-数组拷贝

```js
      // 深拷贝函数
      function deepCopy(originValue) {
        // 1.如果是原始类型, 直接返回
        if (!isObject(originValue)) {
          return originValue;
        }

        // 2.如果是对象类型, 才需要创建对象；数组创建数组
        const newObj = Array.isArray(originValue) ? [] : {};
        for (const key in originValue) {
          newObj[key] = deepCopy(originValue[key]);
        }
        return newObj;
      }

      const books = [
        {
          name: "黄金时代",
          price: 28,
          desc: { intro: "这本书不错", info: "这本书讲了一个很有意思的故事" },
        },
        { name: "你不知道JavaScript", price: 99 },
      ];
      const newBooks = deepCopy(books);
```

##### 深拷贝-其他类型

- new Set 得到的数组，支持for of，不支持for in
- originValue instanceof Set ，判断 originValue 是否为 Set
- 函数类型，直接返回

```js
      // 深拷贝函数
      function deepCopy(originValue) {
        // 0.如果值是Symbol的类型
        if (typeof originValue === "symbol") {
          return Symbol(originValue.description);
        }

        // 1.如果是原始类型, 直接返回
        if (!isObject(originValue)) {
          return originValue;
        }

        // 2.如果是set类型
        if (originValue instanceof Set) {
          const newSet = new Set();
          // Set 支持for of，不支持for in
          for (const setItem of originValue) {
            // add(deepCopy(setItem)) 是为了添加对象；直接add 只加数组
            newSet.add(deepCopy(setItem));
          }
          return newSet;
        }

        // 3.如果是函数function类型, 不需要进行深拷贝
        if (typeof originValue === "function") {
          return originValue;
        }

        // 2.如果是对象类型, 才需要创建对象
        const newObj = Array.isArray(originValue) ? [] : {};
        // 遍历普通的key
        for (const key in originValue) {
          newObj[key] = deepCopy(originValue[key]);
        }
        // 单独遍历symbol；key为symbol；通过getOwnPropertySymbols从originValue里面拿到是symbol的key
        const symbolKeys = Object.getOwnPropertySymbols(originValue);
        for (const symbolKey of symbolKeys) {
          newObj[Symbol(symbolKey.description)] = deepCopy(
            originValue[symbolKey]
          );
        }

        return newObj;
      }

      const set = new Set(["abc", "cba", "nba"]);
      const s1 = Symbol("s1");
      const s2 = Symbol("s2");
      const info = {
        name: "why",
        age: 18,
        friend: {
          name: "kobe",
          address: {
            name: "洛杉矶",
            detail: "斯坦普斯中心",
          },
        },

        // 1.特殊类型: Set
        set: set,

        // 2.特性类型: function
        running: function () {
          console.log("running~");
        },

        // 3.值的特殊类型: Symbol
        symbolKey: Symbol("abc"),

        // 4.key是symbol时
        [s1]: "aaaa",
        [s2]: "bbbb",
      };

      const newObj = deepCopy(info);
      console.log(newObj);
```

##### 深拷贝-循环引用

- 当对象的key = 对象本身时，会无限递归 
- `info.self = info `

```js
    // 深拷贝函数
    // D 创建的map为弱引用且只是用于临时保存对象的，用完之后要解除内存占有，所以使用弱引用，map = new WeakMap()，避免占有内存；放入参数中生成map，只在第一次创建，递归时传入，保证多次递归使用的是同个map
    function deepCopy(originValue, map = new WeakMap()) {
      // const map = new WeakMap() 这里每次递归都会创建map

      // 0.如果值是Symbol的类型
      if (typeof originValue === "symbol") {
        return Symbol(originValue.description)
      }

      // 1.如果是原始类型, 直接返回
      if (!isObject(originValue)) {
        return originValue
      }

      // 2.如果是set类型
      if (originValue instanceof Set) {
        const newSet = new Set()
        for (const setItem of originValue) {
          newSet.add(deepCopy(setItem))
        }
        return newSet
      }

      // 3.如果是函数function类型, 不需要进行深拷贝
      if (typeof originValue === "function") {
        return originValue
      }
      // C 创建对象之前，先判断这次要创建的对象，之前有没有创建过
      if (map.get(originValue)) {
        // 有就直接使用之前的，避免再次创建，无限递归
        return map.get(originValue)
      }
      // 4.如果是对象类型, 才需要创建对象
      
      const newObj = Array.isArray(originValue) ? []: {}
      // B 每次创建对象的时候加入map
      map.set(originValue, newObj)
      // 遍历普通的key
      for (const key in originValue) {
        newObj[key] = deepCopy(originValue[key], map);
      }
      // 单独遍历symbol
      const symbolKeys = Object.getOwnPropertySymbols(originValue)
      for (const symbolKey of symbolKeys) {
        newObj[Symbol(symbolKey.description)] = deepCopy(originValue[symbolKey], map)
      }

      return newObj
    }

    const info = {
      name: "why",
      age: 18,
      friend: {
        name: "kobe",
        address: {
          name: "洛杉矶",
          detail: "斯坦普斯中心"
        }
      },
      // self: info
    }
    // A 不处理会无限递归，处理 - BCD
    info.self = info

    let newObj = deepCopy(info)
    console.log(newObj)
    console.log(newObj.self === newObj)
```

![自定义深拷贝函数](C:\Users\admin\Desktop\系统笔记\img_js_高级\自定义深拷贝函数.png)

------

#### 自定义事件总线

- 跨文件、跨组件，通信
- 数据改变都是通过事件，所以监听事件，改变数据
- 创建一个事件总线，在A通过事件总线发送事件，在B通过事件总线监听事件，并传入回调函数，通过回调函数

事件总线-图片

```js
    // 类EventBus -> 事件总线对象；创建事件总线
    class HYEventBus {
      constructor() {
        // 用于保存 监听事件的 回调函数
        this.eventMap = {}
      }
      // 监听事件，监听什么事件A，监听后执行的回调函数B
      // 回调函数需要保存，因为在 监听事件时，需要获取到并执行
      // 在on时，把eventName, eventFn作为key、value加入eventMap中
      on(eventName, eventFn) {
        // 默认 this.eventMap 是空，没有key,eventFn作为value，也没有，会报错
        let eventFns = this.eventMap[eventName]
        if (!eventFns) {
          // this.eventMap 空，就创建数组作为 value，用于存放回调函数
          // this.eventMap =  {eventName1:[eventFn1,eventFn2],eventName2:[eventFn3,eventFn4],eventName3:[eventFn5,eventFn6]}
          eventFns = [] // value
          this.eventMap[eventName] = eventFns // object.key = value
        }
        // 把每个回调 eventFn（value） 加入到 保存回调的数组 eventFns 中，一个eventName（key）可能有多个eventFn（value）
        eventFns.push(eventFn)
      }
      // 取消事件监听，取消 哪个 eventName 对应的 哪个 eventFn
      off(eventName, eventFn) {
        // 所有的回调
        let eventFns = this.eventMap[eventName]
        if (!eventFns) return
        for (let i = 0; i < eventFns.length; i++) {
          const fn = eventFns[i]
          // 找到所有的回调 eventFns 中 和 要取消的 eventFn ，相同的，取消掉，把要取消的从 eventFns 中删除即可
          if (fn === eventFn) {
            eventFns.splice(i, 1)
            break
          }
        }

        // 如果eventFns已经清空了，value 为空，把 key 删除
        if (eventFns.length === 0) {
          delete this.eventMap[eventName]
        }
      }
      // 发送事件，发送什么事件A，参数；发送事件后，在这里需要获取，监听事件中的事件名A的所有回调函数B，并执行
      // 在emit时，在eventMap中查找eventName对应的value，并全部执行
      // ...args 发送事件时，接收的参数，用于传递给监听事件中 eventName 对应的回调函数 的参数
      emit(eventName, ...args) {
        // 根据 eventName 在  this.eventMap 中 取值 eventFns，eventFns 存放的是所有的回调函数
        let eventFns = this.eventMap[eventName]
        if (!eventFns) return
        // 执行所有的回调函数，并传入参数
        eventFns.forEach(fn => {
          fn(...args)
        })
      }
    }


    // 使用过程
    const eventBus = new HYEventBus()

    // 监听 navclick 事件，传入回调，以及回调要接收的参数
    eventBus.on("navclick", (name, age, height) => {
      console.log("navclick listener 01", name, age, height)
    })
    // 回调函数
    const click =  () => {
      console.log("navclick listener 02")
    }
    // 监听
    eventBus.on("navclick", click)
    // 取消监听
    setTimeout(() => {
      eventBus.off("navclick", click)
    }, 5000);
    // 监听
    eventBus.on("asideclick", () => {
      console.log("asideclick listener")
    })


    const navBtnEl = document.querySelector(".nav-btn")
    navBtnEl.onclick = function() {
      // 发送 navclick，并传入参数，参数传给，监听事件中 navclick 对应的回调函数
      eventBus.emit("navclick", "why", 18, 1.88)
    }
```

![自定义事件总线](C:\Users\admin\Desktop\系统笔记\img_js_高级\自定义事件总线.png)

------

