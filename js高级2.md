### JavaScript ES5中实现继承

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

词法环境-图片

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

let词法环境的应用-图片

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

标签模板字符串-图片

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

React的styled-components库-图片

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

图片

01_引用赋值

02_浅拷贝-原始类型

03_浅拷贝-复杂类型

04_深拷贝-JSON做法

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

Set的基本使用

#### Set的常见方法

Set的常见方法

#### WeakSet使用

- 弱引用 
  - 可以获取到弱引用的数据
  - 在垃圾回收的时候，会把弱引用忽略掉，回收弱引用的数据占用的内存
  - 反之，就是强引用，在检查到存在引用时，不会回收

WeakSet使用

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

WeakSet的应用

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

Map的基本使用

#### Map的常用方法

Map的常用方法

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

WeakMap的使用

#### WeakMap的应用

WeakMap的应用

#### ES7~ES13

#### 7-Array Includes

Array Includes

#### 7-exponentiation运算符

exponentiation运算符

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

ES8 Object values

#### ES8 Object entries

- entries 对象转成数组

ES8 Object entries

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

ES8 - String Padding

#### ES8 - Trailing Commas

ES8 - Trailing Commas

ES8 - async await

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

ES10 - flat flatMap

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

ES10 - Object fromEntries

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

ES10 - trimStart trimEnd

#### ES11 - BigInt

ES11 - BigInt

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

ES11 - Nullish Coalescing Operator

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

ES11 - Optional Chaining

#### ES11 - Global This

ES11 - Global This

#### ES11 - for..in标准化

- 遍历数组、字符串
  - 对象是遍历key

ES11 - for..in标准化

#### ES12 - FinalizationRegistry

ES12 - FinalizationRegistry

#### ES12 - WeakRefs

ES12 - WeakRefs

#### ES12 - logical assignment operators

ES12 - logical assignment operators

#### ES13 - method .at()

ES13 - method .at()

#### ES13 - Object.hasOwn(obj, propKey)

ES13 - Object.hasOwn(obj, propKey)

#### ES13 - New members of classes

ES13 - New members of classes

## JS中代码报错

- 在js中代码报错，后面的代码都不会执行
- 使用 try catch 捕获错误，不影响后面的代码执行