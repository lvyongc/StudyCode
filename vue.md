### 认识vue

#### 谁是最好的前端框架

### 如何使用Vue

- 如果 template 有内容，把template内容替换掉 #app元素的内容，渲染
- 如果没有，自动将 #app元素的内容 渲染

#### CDN

#### 下载

#### 声明式和命令式

- vue 是声明式
  - 声明 template 模板、data属性、methods方法
- 原生JS是命令式

#### MVVM模型

- MVC

  - view页面  html
  - controller控制器  js代码， 请求后端，拿到数据
  - model模型 请求拿到的数据，由 controller 将 model模型展示到 view

- MVVM

  - vue --> VM
  -  vue作为中间人，帮助实现 view页面V和 model数据M之间的通信
  - 无需自己操作dom，vue会将 model数据绑定到 view页面上
  - 当页面发生事件，通过 vue 调用model中的方法，改变  model中的数据， model数据 再绑定到 view页面
  - vue 的双向数据绑定、响应式原理

  vue-图片

#### data属性

- data 必须是一个函数，函数返回一个对象
- data 返回的对象，会被 vue 劫持（放到响应式系统中）
- 所以data的数据改变时，界面会重新渲染

#### methods属性

- 一个对象，存放多个函数
- 里面的函数不能是 箭头函数

#### 不能使用箭头函数？

```js
      // methods: option api
      methods: {
        increment: function() {
          this.counter++
        },
        // 强调: methods中函数不能写成箭头函数
        increment: () => {
          console.log(this) // window
        }
      }
```

#### this到底指向什么

- 将 methods 遍历，把每个方法通过 bind 改变this指向 为 实例（data属性）的代理对象

#### VSCode代码片段

- 需要 生成代码片段的代码
- https://snippet-generator.app/ 
  - 自定义 代码片段名字，复制
- 首先项、配置用户代码片段、选择使用的文件类型、粘贴

### 模板语法

#### Mustache双大括号语法

- 动态内容

```js
    <!-- 1.基本使用 -->
    <h2>{{ message }}</h2>
    <h2>当前计数: {{ counter }} </h2>

    <!-- 2.表达式 -->
    <h2>计数双倍: {{ counter * 2 }}</h2>
    <h2>展示的信息: {{ info.split(" ") }}</h2>

    <!-- 3.三元运算符 -->
    <h2>{{ age >= 18? "成年人": "未成年人" }}</h2>

    <!-- 4.调用methods中函数 -->
    <h2>{{ formatDate(time) }}</h2>

    <!-- 5.注意: 这里不能定义语句 -->
    <!-- <h2>{{ const name = "why" }}</h2> -->

      data: function() {
        return {
          counter: 100,
          info: "my name is why",
          age: 22,
          time: 123
        }
      },
      methods: {
        formatDate: function(date) {
          return "2022-10-10-" + date
        }
      }
```

#### v-once指令

#### v-text指令

#### v-html

#### v-pre

#### v-cloak

- 在拿到数据之前，隐藏
- 当拿到数据，显示

#### v-memo

- memo 备忘录
- 如果 将要更新的数据 和 更新之前的数据相同，则跳过更新，不重复渲染
- 用于 性能优化

```js
// 只有 当 name 或者 age 改变时， div 才会重新渲染；height 发送改变，即时值变了， div 也不会重新渲染
<div v-memo="[name, age]">
      <h2>姓名: {{ name }}</h2>
      <h2>年龄: {{ age }}</h2>
      <h2>身高: {{ height }}</h2>
</div>
```

### v-bind

- 动态属性

#### v-bind的绑定属性

#### 绑定基本属性

```js
    <!-- 1.绑定img的src属性 -->
    <img v-bind:src="showImgUrl" alt="">
    <!-- 语法糖: v-bind -> : -->
    <img :src="showImgUrl" alt="">
    <!-- 2.绑定a的href属性 -->
    <a :href="href">百度一下</a>
```

#### 绑定class介绍

```js

    .active {
      color: red;
    }
      
    <!-- 2.动态class可以写对象语法 -->
    <button :class=" isActive ? 'active': '' " >我是按钮</button>

    <!-- 2.1.对象语法的基本使用(掌握) key :要添加的class； value 布尔值，是否添加class  -->
    <button :class="{ active: isActive }" >我是按钮</button>

    <!-- 2.2.对象语法的多个键值对 -->
    <button :class="{ active: isActive, why: true, kobe: false }" @click="btnClick">我是按钮</button>
    
    <!-- 2.3.动态绑定的class是可以和普通的class同时的使用 -->
    <button class="abc cba" :class="{ active: isActive, why: true, kobe: false }>我是按钮</button>
    
    <!-- 2.4.动态绑定的class是可以和普通的class同时的使用 -->
    <button class="abc cba" :class="getDynamicClasses()" >我是按钮</button>

    <!-- 3.动态class可以写数组语法(了解) -->
    <h2 :class="['abc', 'cba']">Hello Array</h2>
    <h2 :class="['abc', className]">Hello Array</h2>
    <h2 :class="['abc', className, isActive? 'active': '']">Hello </h2>
    <h2 :class="['abc', className, { active: isActive }]">Hello </h2>

      data: function() {
        return {
          classes: "abc cba nba",
          isActive: false,
          className: "why"
        }
      },

      methods: {
        getDynamicClasses: function() {
          return { active: this.isActive, why: true, kobe: false }
        }
      }
    })
```

#### 绑定class – 对象语法

#### 绑定class – 数组语法

#### 绑定style介绍

```js
    <!-- 1.普通的html写法 -->
    <h2 style="color: red; font-size: 30px;">哈哈哈哈</h2>

    <!-- 2.style中的某些值, 来自data中 -->
    <!-- 2.1.动态绑定style, 在后面跟上 对象类型 (重要)-->
    <h2 v-bind:style="{ color: fontColor, fontSize: fontSize + 'px' }">哈哈哈哈</h2>
    <!-- 2.2.动态的绑定属性, 这个属性是一个对象 -->
    <h2 :style="objStyle">呵呵呵呵</h2>

    <!-- 3.style的数组语法 -->
    <h2 :style="[objStyle, { backgroundColor: 'purple' }]">嘿嘿嘿嘿</h2>
    
    data: function() {
        return {
          fontColor: "blue",
          fontSize: 30,
          objStyle: {
            fontSize: '50px',
            color: "green"
          }
        }
      }
```

#### 绑定style演练

#### 动态绑定属性

```js
// 动态绑定属性名
<h2 :[name]="'aaaa'">Hello World</h2>
      data: function() {
        return {
          name: "class"
        }
      }
```

#### 绑定一个对象

```js
// 单个 传递    
<h2 :name="name" :age="age" :height="height">Hello World</h2>

//  v-bind绑定对象: 把对象的每个属性，添加到 h2 ；可用于 组件传递参数
<h2 v-bind="infos">Hello Bind</h2>
// 数据
data: function() {
    return {
      infos: { name: "why", age: 18, height: 1.88, address: "广州市" },
          name: "why",
          age: 18,
          height: 1.88
    }
}
```

### 绑定事件

#### v-on绑定事件

```js
    <!-- 1.基本的写法 -->
    <div class="box" v-on:click="divClick"></div>

    <!-- 2.语法糖写法(重点掌握) -->
    <div class="box" @click="divClick"></div>

    <!-- 3.绑定的方法位置, 也可以写成一个表达式(不常用, 不推荐) -->
    <h2>{{ counter }}</h2>
    <button @click="counter++">+1</button>

    <!-- 4.绑定其他方法(掌握) -->
    <div class="box" @mousemove="divMousemove"></div>

    <!-- 5.元素绑定多个事件(掌握) -->
    <div class="box" @click="divClick" @mousemove="divMousemove"></div>
    <div class="box" v-on="{ click: divClick, mousemove: divMousemove }"></div>
    <div class="box" @="{ click: divClick, mousemove: divMousemove }"></div>
```

#### v-on的用法

#### v-on的基本使用

#### v-on参数传递

- 如果在绑定事件的时候, 没有传递任何的参数, 那么event对象会被默认传递进来 

```js
    <!-- 1.默认传递event对象 -->
    <button @click="btn1Click">按钮1</button>

    <!-- 2.只有自己的参数 -->
    <button @click="btn2Click('why', age)">按钮2</button>

    <!-- 3.自己的参数和event对象 -->
    <!-- 在模板中想要明确的获取event对象: $event -->
    <button @click="btn3Click('why', age, $event)">按钮3</button>
    
        btn3Click(name, age, event) {
          console.log("btn3Click:", name, age, event)
        }
```

#### v-on的修饰符

- .stop  阻止冒泡
  - 点击子级执行事件，阻止父级的事件执行
- .prevent  阻止默认行为

### 条件渲染

#### v-if、v-else、v-else-if

- 回流

```js
    <!-- v-if="条件" -->
    <template class="info" v-if="Object.keys(info).length">
      <h2>个人信息</h2>
      <ul>
        <li>姓名: {{info.name}}</li>
        <li>年龄: {{info.age}}</li>
      </ul>
    </template>
    
    data() {
        return {
          info: {}
        }
    }
```

#### template元素

- template 作为外层元素，不会被渲染出来，在 if 的时候，可以 少渲染一个 外层div元素

#### v-show

- 不支持 template 
  - template 作为外层元素，不会被渲染出来，页面不存在，无法给不存在的元素设置 display:none
- 重绘

#### v-show和v-if的区别

### 列表渲染

#### v-for基本使用

- v-for 写在谁身上，谁就是多个
- for in、 for of 一样

```js
// 数组    
<ul>
      <li v-for="(movie, index) in movies">{{index + 1}} - {{ movie }}</li>
</ul>
// 对象
    <ul>
      <li v-for="(value, key, index) in info">{{value}}-{{key}}-{{index}}</li>
    </ul>
    <!-- 3.遍历字符串(iterable) -->
    <ul>
      <li v-for="item in message">{{item}}</li>
    </ul>

    <!-- 4.遍历数字 -->
    <ul>
      <li v-for="item in 100">{{item}}</li>
    </ul>
```

#### v-for支持的类型

#### template元素

- template 不会被渲染出来

```js
<!-- 如果div没有实际的意义, 那么可以使用template替换 -->
      <div v-for="(value, key, index) in infos">
        <template v-for="(value, key, index) in infos">
          <span>{{value}}</span>
          <strong>{{key}}</strong>
          <i>{{index}}</i>
        </template>
      </div>
```

#### 数组更新检测

- 直接使用数组方法（会修改原数组的方法），即可修改页面数据
  - 无需 this.data = data.push()
- 不会替换原来的数组，而是会生成新的数组的
  - 页面数据不会修改，需要重新赋值
  - map、filter

### key & diff 算法

#### v-for中的key是什么作用

#### 认识VNode

- VNode虚拟节点，元素和组件在vue中都是VNode，本质是一个JS对象

#### 虚拟DOM

- 多个 VNode ，形成 树形结构，这棵树就是 虚拟 DOM

虚拟DOM的作用之一-跨平台-图片

#### 插入F的案例

- 没有key时
  - 插入前后进行比较，相同的不变，直到遇到第一个不同的，修改为插入后的f，下一位修改为插入前的c，直到最后一位，创建一个新的为e
  - 从第一个不同的开始，一直修改到最后，最后一个要新建
- 有key
  - 会复用插入前的，而不是修改
  - 只会新建一个，无需修改其他

key的作用在虚拟DOM中diff算法-图片

#### Vue源码对于key的判断

#### 没有key的操作（源码）

#### 没有key的过程如下

#### 有key执行操作（源码）

#### 有key的diff算法如下（一）

#### 有key的diff算法如下（二）

#### 有key的diff算法如下（三）

### Options API

### computed

#### 复杂data的处理方式

- 经过运算后，才可以使用的数据

```js
// 直接运算    
<!-- 1.拼接名字 -->
    <h2>{{ firstName + " " + lastName }}</h2>
    <h2>{{ firstName + " " + lastName }}</h2>
    <h2>{{ firstName + " " + lastName }}</h2>

    <!-- 2.显示分数等级 -->
    <h2>{{ score >= 60 ? '及格': '不及格' }}</h2>

    <!-- 3.反转单词显示文本 -->
    <h2>{{ message.split(" ").reverse().join(" ") }}</h2>
// methods 方法 运算
    <!-- 1.拼接名字 -->
    <h2>{{ getFullname() }}</h2>

    <!-- 2.显示分数等级 -->
    <h2>{{ getScoreLevel() }}</h2>

    <!-- 3.反转单词显示文本 -->
    <h2>{{ reverseMessage() }}</h2>

      methods: {
        getFullname() {
          return this.firstName + " " + this.lastName
        },
        getScoreLevel() {
          return this.score >= 60 ? "及格": "不及格"
        },
        reverseMessage() {
          return this.message.split(" ").reverse().join(" ")
        }
      }
```

#### 认识计算属性computed

- 对于任何包含响应式数据的复杂逻辑，你都应该使用计算属性

```js
//    computed  使用 不用加 ()
<!-- 1.拼接名字 -->
    <h2>{{ fullname }}</h2>

    <!-- 2.显示分数等级 -->
    <h2>{{ scoreLevel }}</h2>

    <!-- 3.反转单词显示文本 -->
    <h2>{{ reverseMessage }}</h2>
   
      computed: {
        // 1.计算属性默认对应的是一个函数
        fullname() {
          return this.firstName + " " + this.lastName
        },

        scoreLevel() {
          return this.score >= 60 ? "及格": "不及格"
        },

        reverseMessage() {
          return this.message.split(" ").reverse().join(" ")
        }
      }
```

#### 案例实现思路

#### 实现思路一：模板语法

#### 实现思路二：method实现

#### 思路三的实现：computed实现

#### 计算属性 vs methods

- 计算属性 简洁
- 计算属性 有缓存

#### 计算属性的缓存

- 在数据不发生变化时，计算属性是不需要重新计算的，只执行一次
- 如果依赖的数据发生变化，在使用时，计算属性依然会重新进行计算
  - 依赖数据改变，重新计算，后面计算的时候，数据不变，无论调用多少次，都只执行一次
- methods，调用几次就执行几次

```js
    <!-- 1.methods -->
    <h2>{{ getFullname() }}</h2>
    <h2>{{ getFullname() }}</h2>
    <h2>{{ getFullname() }}</h2>

    <!-- 2.computed -->
    <h2>{{ fullname }}</h2>
    <h2>{{ fullname }}</h2>
    <h2>{{ fullname }}</h2>
    
     methods: {
        getFullname() {
          console.log("getFullname-----") // 执行3次
          return this.firstName + " " + this.lastName
        },
        changeLastname() {
          this.lastName = "why"
        }
      },
      computed: {
        fullname() {
          console.log("computed fullname-----") // 执行1次
          return this.firstName + " " + this.lastName
        }
      }
```

#### 计算属性的setter和getter

```js
      computed: {
        // 只有 get方法的时候，才可以使用的语法糖写法；同下
        fullname() {
          return this.firstname + " " + this.lastname
        },
        
        fullname: {
          get: function() {
            return this.firstname + " " + this.lastname
          }
        }
      }
```

set设置值-图片

#### 源码如何对setter和getter处理呢

### 侦听器

#### 认识侦听器watch

- 当数据改变，需要去执行 逻辑代码时，使用
- 可以监听 data的key、computed的可以

```js
      data() {
        return {
          message: "Hello Vue",
          info: { name: "why", age: 18 }
        }
      },
      methods: {
          // 改变数据
        changeMessage() {
          this.message = "你好啊, 李银河!"
          this.info = { name: "kobe" }
        }
      },
      watch: {
        // 1.默认有两个参数: newValue/oldValue
        message(newValue, oldValue) {
          console.log("message数据发生了变化:", newValue, oldValue)
        },
        info(newValue, oldValue) {
          // 2.如果是对象类型, 那么拿到的是代理对象 Proxy
          console.log("info数据发生了变化:", newValue, oldValue)
          console.log(newValue.name, oldValue.name)

          // 3.获取原生对象
          // console.log({ ...newValue }) 放入一个新对象
          console.log(Vue.toRaw(newValue)) // 原始对象
        }
      }
```

#### 侦听器案例

#### 侦听器watch的配置选项

- 默认，监听对象的一层
- deep 为 true 监听对象 所有层

```js
      watch: {
        // 默认watch监听不会进行深度监听
        // info(newValue, oldValue) {
        //   console.log("侦听到info改变:", newValue, oldValue)
        // }

        // 进行深度监听，但 新旧值 相同，这里，没有改变info，只改变了info的属性;监听 info，发送改变执行 handler
        info: {
          handler(newValue, oldValue) {
            console.log("侦听到info改变:", newValue, oldValue)
            console.log(newValue === oldValue)
          },
          // 监听器选项:
          // info进行深度监听
          deep: true,
          // 第一次渲染直接执行一次监听器，就是执行一次 handler 函数
          immediate: true
        },
        // 单独监听，对象的，某个属性
        "info.name": function(newValue, oldValue) {
          console.log("name发生改变:", newValue, oldValue) // 新旧值，不同
        }
      }
```

#### 侦听器watch的配置选项（代码）

#### 侦听器watch的其他方式（一）

#### 侦听器watch的其他方式（二）





