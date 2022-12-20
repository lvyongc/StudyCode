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
- v-if
- v-for

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
  - 根据key找到之前的VNode进行复用;
  - 没有VNode可以复用, 再创建新的VNode

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
  - 性能高
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

          // 3.Proxy 转 原生对象
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

#### 求和

- splice 操作数组

```js
// 选中加class
<tr
              v-for="(item, index) in books"
              :key="item.id"
              @click="rowClick(index)"
              :class="{ active: index === currentIndex }"
>
 rowClick(index) {
            this.currentIndex = index;
}

<button @click="removeBook(index, item)">移除</button>       
// 删除点击的
removeBook(index, item) {
            this.books.splice(index, 1);
},
// 求和             
{
    id: 5,
    name: '《你不知道JavaScript》',
    date: '2014-8',
    price: 88.00,
    count: 1
  }        
totalPrice() {
          // 1.直接遍历books
          let price = 0
          for (const item of this.books) {
            price += item.price * item.count
          }
          return price

          // 2.reduce(自己决定)
          // preValue 上次的值，初始0，item 是这次的
          return this.books.reduce((preValue, item) => {
            return preValue + item.price * item.count
          }, 0)
        }
```

### v-model

手动双向绑定-图片

```js
    <!-- 1.手动的实现了双向绑定 -->
    <input type="text" :value="message" @input="inputChange">

    <!-- 2.v-model实现双向绑定 -->
    <input type="text" v-model="message">
        
 inputChange(event) {
          this.message = event.target.value
 }
```

#### 基本使用

#### v-model的原理

#### 事实上v-model更加复杂

#### v-model绑定textarea

#### v-model绑定checkbox

```js

  <div id="app">
    <!-- 1.checkbox单选框: 绑定到属性中的值是一个Boolean -->
    <label for="agree">
      <input id="agree" type="checkbox" v-model="isAgree"> 同意协议
    </label>
    <h2>单选框: {{isAgree}}</h2>
    <hr>

    <!-- 2.checkbox多选框: 绑定到属性中的值是一个Array -->
    <!-- 注意: 多选框当中, 必须明确的绑定一个value值 -->
    <!-- hobbies 是选中的值，值是 value 的值 -->
    <div class="hobbies">
      <h2>请选择你的爱好:</h2>
      <label for="sing">
        <input id="sing" type="checkbox" v-model="hobbies" value="sing"> 唱
      </label>
      <label for="jump">
        <input id="jump" type="checkbox" v-model="hobbies" value="jump"> 跳
      </label>
      <label for="rap">
        <input id="rap" type="checkbox" v-model="hobbies" value="rap"> rap
      </label>
      <label for="basketball">
        <input id="basketball" type="checkbox" v-model="hobbies" value="basketball"> 篮球
      </label>
      <h2>爱好: {{hobbies}}</h2>
    </div>
  </div>
```

#### v-model绑定radio

单选-图片

#### v-model绑定select

select-图片

#### v-model的值绑定

```js
  <div id="app">
    <!-- 1.select的值绑定；循环 -->
    <select multiple size="3" v-model="fruits">
      <option v-for="item in allFruits" 
              :key="item.value" 
              :value="item.value">
        {{item.text}}
      </option>
    </select>
    <h2>多选: {{fruits}}</h2>

    <hr>

    <!-- 2.checkbox的值绑定 -->
    <div class="hobbies">
      <h2>请选择你的爱好:</h2>
      <template v-for="item in allHobbies" :key="item.value">
        <label :for="item.value">
          <input :id="item.value" type="checkbox" v-model="hobbies" :value="item.value"> {{item.text}}
        </label>
      </template>
      <h2>爱好: {{hobbies}}</h2>
    </div>
  </div>
  
        data() {
        return {
          // 水果
          allFruits: [
            { value: "apple", text: "苹果" },
            { value: "orange", text: "橘子" },
            { value: "banana", text: "香蕉" },
          ],
          fruits: [],

          // 爱好
          allHobbies: [
            { value: "sing", text: "唱" },
            { value: "jump", text: "跳" },
            { value: "rap", text: "rap" },
            { value: "basketball", text: "篮球" }
          ],
          hobbies: []
        }
      }
```

#### v-model修饰符 - lazy

```js
      <!-- 1.lazy: 绑定change事件，失去焦点时，再修改值  -->
      <input type="text" v-model.lazy="message" />
      <h2>message: {{message}}</h2>

      <hr />

      <!-- 2.number: 自动将内容转换成数字 -->
      <!-- type="text" 输入的默认是字符串 -->
      <input type="text" v-model.number="counter" />
      <h2>counter:{{counter}}-{{typeof counter}}</h2>
      <!-- type="number" 只能输入数字 -->
      <input type="number" v-model="counter2" />
      <h2>counter2:{{counter2}}-{{typeof counter2}}</h2>

      <hr />

      <!-- 3.trim: 去除首尾的空格 -->
      <input type="text" v-model.trim="content" />
      <h2>content: {{content}}</h2>

      <hr />

      <!-- 4.使用多个修饰符 -->
      <input type="text" v-model.lazy.trim="content" />
      <h2>content: {{content}}</h2>
```

#### v-model修饰符 - number

#### v-model修饰符 - trim

#### v-mode组件上使用

### 组件化开发

- 组件树
- 名字使用 短横岗 - 
- 全局组件的特点: 
  - 默认注册
  - 一旦注册成功后, 可以在任意其他组件的template中使用 
  - 即使没有使用到，也会被打包，增加体积
  - app.component 
- 局部组件
  - 在使用的时候注册，不使用不注册不打包
  - 在哪里使用，就在哪里注册
  - components 

```js
main.js
import { createApp } from 'vue'
import App from './components/App.vue'
// 引入
import ProductItem from "./components/ProductItem.vue"

const app = createApp(App)

// 全局注册
app.component("product-item", ProductItem)

app.mount('#app')

// 组件 a.vue
<template>
  <div class="product">
    <h2>我是商品标题</h2>
    <p>我是商品描述, 9.9秒杀</p>
    <div>价格: {{price}}</div>
  </div>
</template>

// 页面 b.vue
<template>
  <h2>{{title}}</h2>
  <h2>当前计数: {{counter}}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
//  局部 引入 注册 再 使用
  <a><a/>
  // 全局 直接使用
  <product-item></product-item>
</template>
// 引入
import a from './a.vue'
export default {
    // 注册
  components: {
      a
  }
｝
```

#### 人处理问题的方式

#### 认识组件化开发

#### 组件化开发

#### Vue的组件化

#### 注册组件的方式

#### 注册全局组件

#### 全局组件的逻辑

#### 组件的名称

#### 注册局部组件

#### 布局组件注册代码

#### Vue的开发模式

#### 单文件的特点

#### 如何支持SFC

#### VSCode对SFC文件的支持

### Vue CLI脚手架

#### Vue CLI 安装和使用 

- `vue -V` 查看安装的版本

#### vue create 项目的过程

#### 项目的目录结构

#### Vue CLI的运行原理

#### 配置路径别名

```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      // 配置路径别名
      // @是已经配置好的路径别名: 对应的是src路径;是cli默认的
      alias: {
        "utils": "@/utils" 
      }
    }
  }
})
```

- jsconfig.json
  - vscode 配置

```js
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "moduleResolution": "node",
    "paths": {
      // @
      "@/*": [
        "src/*"
      ],
      // 别名
      "utils/*": [
        "src/utils/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  }
}
```

- vue 版本
  - main.js

```js
import { createApp } from 'vue' // 不支持template选项
// import { createApp } from 'vue/dist/vue.esm-bundler' // compile代码
import App from './App.vue' // vue-loader: template -> createVNode过程
// createVNode VNode  VDOM  DOM
import "./utils/abc/cba/nba/index"

/**
 * 1.jsconfig.json的演练
 *   作用: 给VSCode来进行读取, VSCode在读取到其中的内容时, 给我们的代码更加友好的提示.
 * 2.引入的vue的版本
 *   默认vue版本: runtime, vue-loader完成template的编译过程
 *   vue.esm-bundler: runtime + compile, 对template进行编译
 * 
 * 3.补充: 单文件Vue style是有自己的作用域
 *   style -> scoped
 * 4.补充: vite创建一个Vue项目
 */

// 元素 -> createVNode: vue中的源码来完成
// compile的代码
// const App = {
//   template: `<h2>Hello Vue3 App</h2>`,
//   data() {
//     return {}
//   }
// }

createApp(App).mount('#app')
```

#### vscode插件

-  vue2  vetur
-  vue3  volar

#### 创建 vue 项目

- cli 、vite

创建项目-图片

创建项目2-图片

### 组件间通信 

- 自定义组件 名 用 大驼峰

#### 认识组件的嵌套 

#### 组件的拆分 

#### 组件的通信 

#### 父子组件之间通信的方式

#### 父组件传递给子组件 

```js
age: {
        type: Number,
        required: true,
        default: 0
      },
      height: {
        type: Number,
        default: 2
      },
      // 重要的原则: 对象类型写默认值时, 需要编写default的函数, 函数返回默认值
      friend: {
        type: Object,
        default() {
          return { name: "james" }
        }
      },
      hobbies: {
        type: Array,
        default: () => ["篮球", "rap", "唱跳"]
      }
```

#### Props的数组用法 

#### Props的对象用法 

#### type的类型都可以是哪些

#### 对象类型的其他写法

#### Prop 的大小写命名

#### 非Prop的Attribute 

- 子组件没有接收的 prop 属性
  - 包括 class、style、id属性等
- 默认放在 子组件的 根元素标签上
- 把所有 非Prop的Attribute 绑定到一个元素上
  - $attrs
  - ` <div class="others" v-bind="$attrs"></div> `
- 把 其中一个 非Prop的Attribute 绑定到一个元素上
  - ` <div class="others" v-bind="$attrs.one"></div> `
- 不希望组件的根元素继承attribute，可以在组件中设置
  -  inheritAttrs: false 

```JS
  export default {
    inheritAttrs: false
    props: {
    }
  }
```

#### 禁用Attribute继承和多根节点 

#### 子组件传递给父组件 

```js
      // 子
      btnClick(count) {
        console.log("btnClick:", count)
        // 让子组件发出去一个自定义事件
        // 第一个参数自定义的事件名称
        // 第二个参数是传递的参数
        this.$emit("add", 100)
      }
      // 父；父接收的参数名，是自定义的；count
	 <add-counter @add="addBtnClick"></add-counter>
	 addBtnClick(count) {
        this.counter += count
      }
```

- 存放组件发出的事件

```js
	// 存放组件发出的事件，方便阅读
    // emits数组语法,放发送的事件名
    emits: ["add"]
```

#### 自定义事件的流程 

#### 自定义事件的参数和验证（了解） 

#### 组件间通信案例练习 

案例1

案例2

### 插槽Slot/非父子通信 

#### 认识插槽Slot 

- 在使用 组件的时候，利用 插槽 传入 自定义内容

插槽-图片

插槽2-图片

- 当父组件，没有传入内容时，使用 子组件 插槽的默认值

插槽默认值-图片

- 具名 插槽

具名插槽-图片

- 动态插槽名

动态插槽名-图片

- 作用域插槽
  - 子组件把循环项，传递给父组件，父组件 再通过 插槽把循环性 插入 子组件的插槽；但是 以什么形式 展示，是父组件决定的
  - 循环项，第一个 是 按钮，第二个是 超链接，第三个是 文字
  - 把 子组件的数据，传递给 父组件的插槽，来使用

作用域插槽-图片

- 推荐-直接写 ，完整-简写-写法，避免 出错

```js
	 <template #default="props">
        <a href="#">{{ props.item }}</a>
      </template>
```

插槽写法-图片

#### 如何使用插槽slot 

#### 插槽的默认内容

#### 多个插槽的效果

#### 插槽的基本使用 

#### 具名插槽的使用

#### 动态插槽名 

#### 具名插槽使用的时候缩写 

#### 渲染作用域 

#### 渲染作用域案例 

#### 认识作用域插槽 

#### 作用域插槽的案例 

#### 独占默认插槽的缩写 

#### 默认插槽和具名插槽混合

#### 非父子组件的通信 

### 全局事件总线mitt库 

#### 使用事件总线工具 

#### Mitt的事件取消 

### Provide和Inject

- 响应式 Provide 数据，使用 computed

```js
 // provide一般都是写成函数
    provide() {
      return {
        name: "why",
        age: 18,
        message: computed(() => this.message) // 默认 有 return 返回
      }
    }
```

provide - 图片

#### Provide和Inject基本使用 

#### Provide和Inject函数的写法

#### 处理响应式数据

### 认识生命周期 

#### 生命周期的流程 

- 父组件的一个生命周期内，完成子组件的整个生命周期

生命周期的历程-图片

```js

    // 1.组件被创建之前
    beforeCreate() {
      console.log("beforeCreate")
    },
    // 2.组件被创建完成
    created() {
      console.log("created")
      console.log("1.发送网络请求, 请求数据")
      console.log("2.监听eventbus事件")
      console.log("3.监听watch数据")
    },
    // 3.组件template准备被挂载
    beforeMount() {
      console.log("beforeMount")
    },
    // 4.组件template被挂载: 虚拟DOM -> 真实DOM
    mounted() {
      console.log("mounted")
      console.log("1.获取DOM")
      console.log("2.使用DOM")
    },
    // 5.数据发生改变
    // 5.1. 准备更新DOM
    beforeUpdate() {
      console.log("beforeUpdate")
    },
    // 5.2. 更新DOM
    updated() {
      console.log("updated")
    },

    // 6.卸载VNode -> DOM元素
    // 6.1.卸载之前
    beforeUnmount() {
      console.log("beforeUnmount")
    },
    // 6.2.DOM元素被卸载完成
    unmounted() {
      console.log("unmounted")
    }
```

#### $refs的使用 

- 获取 组件、原生DOM元素

```js
    <h2 ref="title" class="title" :style="{ color: titleColor }">{{ message }}</h2>
    <button ref="btn" @click="changeTitle">修改title</button>

    <banner ref="banner"/>       
// 1.不要主动的去获取DOM, 并且修改DOM内容
        // this.message = "你好啊, 李银河!"
        // this.titleColor = "blue"

        // 2.获取h2/button元素
        console.log(this.$refs.title)
        console.log(this.$refs.btn)

        // 3.获取banner组件: 组件实例
        console.log(this.$refs.banner)
        
        // 3.1.在父组件中可以主动的调用子组件的对象方法
        this.$refs.banner.bannerClick()

        // 3.2.获取banner组件实例, 获取banner中的元素
        console.log(this.$refs.banner.$el)

        // 3.3.如果banner template是多个根, 拿到的是第一个node节点
        // 注意: 开发中不推荐一个组件的template中有多个根元素
        // console.log(this.$refs.banner.$el.nextElementSibling)

        // 4.组件实例还有两个属性(了解):
        console.log(this.$parent) // 获取父组件
        console.log(this.$root) // 获取根组件 
```

#### $parent和 

#### $root

#### 切换组件案例 

#### v-if显示不同的组件 

#### 动态组件的实现 

#### 动态组件的传值

```js
<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="item">
        <button :class="{ active: currentTab === item }" 
                @click="itemClick(item)">
          {{ item }}
        </button>
      </template>
    </div>
    <div class="view">
      <!-- 1.第一种做法: v-if进行判断逻辑, 决定要显示哪一个组件 -->
      <!-- <template v-if="currentIndex === 0">
        <home></home>
      </template>
      <template v-else-if="currentIndex === 1">
        <about></about>
      </template>
      <template v-else-if="currentIndex === 2">
        <category></category>
      </template> -->

      <!-- 2.第二种做法: 动态组件 component -->
      <!-- is中的组件需要来自两个地方: 1.全局注册的组件 2.局部注册的组件 -->
      <!-- <component :is="tabs[currentIndex]"></component> -->
      <!-- currentTab 是组件名，name age 是参数 传递给 currentTab 组件，homeClick 是监听 currentTab 组件发送的事件 -->
      <component name="why" 
                 :age="18"
                 @homeClick="homeClick"
                 :is="currentTab">
      </component>
    </div>
  </div>
</template>

<script>
  import Home from './views/Home.vue'
  import About from './views/About.vue'
  import Category from './views/Category.vue'

  export default {
    components: {
      Home,
      About,
      Category
    },
    data() {
      return {
        tabs: ["home", "about", "category"],
        // currentIndex: 0
        currentTab: "home" // 默认 加载 home组件
      }
    },
    methods: {
      itemClick(tab) { // 点击改变 加载的组件
        this.currentTab = tab
      },
      homeClick(payload) { // 监听子组件的回调函数和参数
        console.log("homeClick:", payload)
      }
    }
  }
</script>
```

#### 认识keep-alive

缓存组件-图片

#### keep-alive属性

#### 缓存组件的生命周期 

#### Webpack的代码分包

```js
// import函数可以让webpack对导入文件进行分包处理
// import 异步导入，返回 promise
import("./utils/math").then(res => {
  res.sum(20, 30) // sum 文件中的函数
})
```

#### Vue中实现异步组件

- 单独打包一个组件为一个文件，在使用到的时候，再下载使用
- 默认是把所有组件打包到一个文件中，体积大，增加首屏渲染时间

```js
  import { defineAsyncComponent } from 'vue'  
// defineAsyncComponent 生成 异步组件，函数参数是 import函数返回的 promise；AsyncCategory是一个异步组件
  // 异步组件在 webpack打包的时候，会单独打包到一个文件中
  const AsyncCategory = defineAsyncComponent(() => import("./views/Category.vue"))
  
    components: {
      // 名字：值
      Category: AsyncCategory
    }
```

#### 异步组件的写法二（了解） 

### 组件的v-model

组件model-图片

组件model自定义-图片

#### 组件v-model的实现 

#### 绑定多个属性

### 认识Mixin 

#### Mixin的基本使用 

#### Mixin的合并规则 

#### 全局混入Mixin

- 每个组件，在 created生命周期时，都执行 打印代码

