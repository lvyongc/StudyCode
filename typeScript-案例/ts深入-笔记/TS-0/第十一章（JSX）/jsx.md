# JSX

[toc]

## JSX

`JSX` 是一种基于 `XML` + `JS`、用于构建声明式 `UI` 的语法，它因为 `React` 而流行起来，在 `TypeScript` 也有对该语法的支持，只需要如下几个步骤即可开启基于 `JSX` 的编程

- 给文件起一个 `.tsx` 的扩展名
- 在编译配置选项中开启：`"jsx":"react"`
- 安装 `JSX` 和 `React` 类型声明文件：`npm i -D @types/react @types/react-dom`
- 在 `.tsx` 文件中引入：`import * as React from "react"`

大功告成～～

**函数式组件**

```react
import * as React from "react"

export default function MyComponent() {
    return (
        <div>Hello</div>
    );
}
```

**类式组件**

```react
import * as React from "react"

export default class MyComponent extends React.Component {

    render() {
        return (
            <div>Hello</div>
        )
    }

}
```



