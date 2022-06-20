# 官方文档

https://developer.mozilla.org/zh-CN/docs/Learn

# HTML

![HTML](C:\Users\admin\Desktop\系统笔记\img\HTML.png)

------



### HTML元素

- 元素的组成

![元素的组成](C:\Users\admin\Desktop\系统笔记\img\元素的组成.png)

------



- 元素的属性

![元素的属性](C:\Users\admin\Desktop\系统笔记\img\元素的属性.png)

------



- 标签元素

![标签元素](C:\Users\admin\Desktop\系统笔记\img\标签元素.png)

------



### HTML结构

![html结构](C:\Users\admin\Desktop\系统笔记\img\html结构.png)

------



- 文档声明

![文档声明](C:\Users\admin\Desktop\系统笔记\img\文档声明.png)

------



- html元素

![html元素](C:\Users\admin\Desktop\系统笔记\img\html元素.png)

------



- head元素

![head元素](C:\Users\admin\Desktop\系统笔记\img\head元素.png)

------



- body元素

![body元素](C:\Users\admin\Desktop\系统笔记\img\body元素.png)

------

# 常用元素

### img

- 两个属性
  - src 文件路径
  - alt: 加载失败显示的文字
- 地址
  - 网络地址
  - 本地地址
    - 绝对路径，不常用，以电脑根目录盘符开始
    - 相对路径，常用，./ ../ 
- 强制使用第三方图片
  - `referrerpolicy="no-referrer" `

###  a元素(anchor)

- 两个属性:

  - href
    - 域名
    - 下载地址
  - target
    - _self 替换原来的
    - _blank 新窗口
    - _parent 在父窗口中打开
    - _top 在顶层窗口中打开

- 页面的锚点链接

  - a href 指向 要跳转元素的 id 即可
  - 可实现地址分享访问页面固定位置（掘金）

- a元素和img元素

  ```JS
  <a href="http://www.com">
      <img src="./images/01.jpeg" alt="">
   </a>
  ```

### iframe 

- 嵌套页面
  - src 
    - 域名
    - 本地网页
  - frameborder
    - 01边框是否显示

```js
<iframe src="http://www.baidu.com" frameborder="1"></iframe>
```

- frame嵌套包含a的网页，配合a的_parent _top跳转网页

```js
<iframe src="./html/a元素的iframe嵌套.html" frameborder="1"></iframe>
```

### div&span

![divspan](C:\Users\admin\Desktop\系统笔记\img\divspan.png)

------

![divspan2](C:\Users\admin\Desktop\系统笔记\img\divspan2.png)

------



### HTML全局属性

![html全局属性](C:\Users\admin\Desktop\系统笔记\img\html全局属性.png)

------



- title
  - 鼠标放上去不动显示的文字

  `<div title:"div"></div>`

### 字符实体

![字符实体](C:\Users\admin\Desktop\系统笔记\img\字符实体.png)

------

![字符实体2](C:\Users\admin\Desktop\系统笔记\img\字符实体2.png)

------



### URL

![url](C:\Users\admin\Desktop\系统笔记\img\url.png)

------

![url2](C:\Users\admin\Desktop\系统笔记\img\url2.png)

------

### URI

![uri](C:\Users\admin\Desktop\系统笔记\img\uri.png)

------

### 语义化

![语义化](C:\Users\admin\Desktop\系统笔记\img\语义化.png)

------



### SEO

![SEO](C:\Users\admin\Desktop\系统笔记\img\SEO.png)

------

### 字符编码

https://www.jianshu.com/p/899e749be47c 

![字符编码](C:\Users\admin\Desktop\系统笔记\img\字符编码.png)

------

## HTML5

### HTML5语义化元素 

![HTML5语义化元素](C:\Users\admin\Desktop\系统笔记\img\HTML5语义化元素.png)

------

### HTML5其他新增元素 

![HTML5其他新增元素](C:\Users\admin\Desktop\系统笔记\img\HTML5其他新增元素.png)

------

### video 

![video](C:\Users\admin\Desktop\系统笔记\img\video.png)

------

### video支持的视频格式 

![video支持的视频格式](C:\Users\admin\Desktop\系统笔记\img\video支持的视频格式.png)

------

### video的兼容性写法 

- p标签是在都不支持的时候生效

![video的兼容性写法](C:\Users\admin\Desktop\系统笔记\img\video的兼容性写法.png)

------

### audio 

![audio](C:\Users\admin\Desktop\系统笔记\img\audio.png)

------

### audio支持的音频格式 

![audio支持的音频格式](C:\Users\admin\Desktop\系统笔记\img\audio支持的音频格式.png)

------

## input元素的扩展内容 

- autofocus 是 自动获取焦点
- multiple 是可以 选中多个值

```html
<select multiple>
    <option value="">苹果</option>
    <option value="">香蕉</option>
    <option value="">句子</option>
  </select>
```

![input元素的扩展内容](C:\Users\admin\Desktop\系统笔记\img\input元素的扩展内容.png)

------

### 新增全局属性 data-* 

![新增全局属性](C:\Users\admin\Desktop\系统笔记\img\新增全局属性.png)

------

