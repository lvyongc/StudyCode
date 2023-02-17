import fs from 'fs';

// 1.没有默认导出的用通配导出2.在tsconfig.json设置
// import * as fs from 'fs';

// let txt: string = 'Hello KKB';

// console.log(txt);

// 不同的装饰器会有不同的定义格式，比如，如果该装饰器被用于装饰一个函数（类的方法），那么这个装饰器必须有两个参数，1、被装饰的方法所属的类（类实例）。2、被装饰的函数的名称

function log(type: 'log'|'file'|'database' = 'log') {

    // log 不在是一个装饰器函数，而是一个返回装饰器函数的工厂函数

    return function (target: any, name: string, descriptor: PropertyDescriptor) {
        // console.log('我执行了');
    
        // descriptor 描述符对象，其实就是defineProperty的第三个参数
        // console.log(target, name, descriptor)
    
        let value = descriptor.value; // 就是add函数
        descriptor.value = function(a: number, b: number) {
            // 执行原来的
            let result = value(a, b);
            // 扩展的
            switch (type) {
                case 'log':
                    console.log('参数是：', a, b);
                    console.log('结果是：', result);
                    break;
                case 'file':
                    // fs.writeFileSync(filename, data, [options])
                    // 由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
                    /*
                        接收参数：

                        filename      (String)            文件名称

                        data        (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。

                        options        (Object)           option数组对象，包含：

                        · encoding   (string)            可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。

                        · mode         (Number)        文件读写权限，默认值 438

                        · flag            (String)            默认值 ‘w'
                    */ 
                    fs.writeFileSync('./log.txt', `参数：${a}, ${b} \r\n结果：${result}`);
                    break;

            }
            // 全部返回
            return result;
        }
    
    }
}

// 原始类
class M {

    @log()
    static add(a: number, b: number) {
        return a + b;
    }

    @log('file')
    static sub(a: number, b: number) {
        return a - b;
    }
}

let rs1 = M.add(1, 2);
console.log('rs1', rs1);

let rs2 = M.sub(1, 2);
console.log('rs2', rs2);