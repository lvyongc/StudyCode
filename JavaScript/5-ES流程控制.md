# 流程控制-语句分类

#### 三种基本流程结构

- 顺序结构

```js
 <script>
        var num = 0;
        num ++;
        alert('第一次打印结果：'+ num);
        num++;
        alert('第二次打印结果：' + num);
        num++;
        alert('第三次打印结果：' + num)
    </script>
```

按照顺序执行，从上至下。

- 分支结构

```js
<script>
        var btn = document.querySelector('button');
        var onOff = true;
        btn.onclick = function(){
            if(onOff){
                alert('左边');
            }else{
                alert('右边')
            }
            onOff = !onOff;
        }
    </script>
```

执行的时候，可以根据条件进行选择，条件越多对应的结果越多，分支也就越多。

- 循环结构

```js
<script>
        var num = 0;
        num ++;
        alert('第一次打印结果：'+ num);
        num++;
        alert('第二次打印结果：' + num);
        num++;
        alert('第三次打印结果：' + num)
    </script>
```

重复的做一件事，如果不给条件，就会无限执行，可以限制重复的次数



# 分支结构

#### if

```js
<script>
        if(true){
            alert('条件为真');
        }
        
        if(false){
            alert('条件为真');
        }else{
            alert('条件为假')
        }

        /*
            更多的条件
        */
        var num = 5;
        if(num == 0){
            alert('当前num为0');
        }else if(num == 1){
            alert('当前num为1');
        }else if(num == 2){
            alert('当前num为2');
        }else{
            alert('当前num没有符合条件的值');
        }
    </script>
```



#### switch

```js
/*
            switch(表达式 || 变量){
                case value1:
                    console.log('满足1的条件');
                case value2:
                    console.log('满足2的条件');
                default:
                    console.log('以上条件都不满足');
            }

            表达式 || 变量 和 value 做的是全等（===）的比较
        */
```

​		语法包含：switch、case、default

- switch后面的小括号内可以写变量 || 表达式，一般都是变量
- value是与括号里的内容作比较，这个比较是全等的比较
- 一旦满足全等的条件，就执行后续的代码
- default，以上条件都不满足的时候，执行这里对应的代码
- default可以放在任何位置



##### 穿透

一旦符合条件，并且没有break终止后续代码，会产生穿透问题，当前满足条件的位置开始，后续的执行代码，都会被执行

**穿透的表现**：输入1的时候，把所有的打印出来星期1234

```js
var btn = document.querySelector('button');
        var txt = document.querySelector('input');

        btn.onclick = function(){
            var value = txt.value;

            switch(value){
                case '1':
                    console.log('今天星期一');
                case '2':
                    console.log('今天星期二');
                case '3':
                    console.log('今天星期三');
                case '4':
                    console.log('今天星期四');
                    
            }

        }
```

- 缺点：找到对应的匹配项之后，从该匹配项执行，一直到代码的结束
- 优点：有时候利用这样的穿透性，可以让我们的代码变得更简洁，性能更好

```JS
switch(value){
                case '1':
                  
                case '2':
                   
                case '3':
                    console.log('工作日');
                case '4':
                    console.log('休息日');
                    
            }
```



##### break

break后面的代码会终止执行，并跳出

```js
var btn = document.querySelector('button');
        var txt = document.querySelector('input');

        btn.onclick = function(){
            var value = txt.value;

            switch(value){
                case '1':
                    console.log('今天星期一');
                    break;
                case '2':
                    console.log('今天星期二');
                    break;
                case '3':
                    console.log('今天星期三');
                    break;
                case '4':
                    console.log('今天星期四');
                    break;
            }

        }
```

加上break就正确了，最后一个可以不加break，建议加上。



#### if替换switch

```js
btn.onclick = function(){
            var value = txt.value;

            switch (value) {
                
                case '1':
                case '2':
                case '3':
                
                case '4':
                case '5':
                    console.log('今天是工作日');
                    break;
                case '6':
                case '7':
                    console.log('今天是休息日');
                    break;
                default:
                    console.log('以上输入的内容有误');
                    break;
            }

            // if(value === '1' || value === '2' ||value === '3'){
            //     console.log('今天是工作日');
            // }else if(value === '6'||value === '7'){
            //     console.log('今天是休息日');
            // }else{
            //     console.log('以上输入的内容有误');
            // }

            /*
                当以上条件都不满足的时候，我们在if语句中可以使用else
                                            在switch语句中可以使用default

                default 可以写在switch中的任何位置，不过推荐写在最下面 
            */
```

注意：可以使用switch的时候 我们不推荐使用if .. else if..else  



**分数评级**

```js
<input type="text">
    <button>获取评级</button>
    <script>
        var btn = document.querySelector('button');
        var input = document.querySelector('input');

        btn.onclick = function(){
            var score = input.value;

            /*
                >=90 优秀
                >= 60 良好
                <60 不及格
            */

            // if(score >= 90){

            // }else if(score >= 60){

            // }else if(score < 60 ){

            // }else{

            // }
            /*
                因为score和case后面的value是进行全等的比较的，所以我们不能写score

                又因为score和任何数值进行比较，最后返回的都是布尔值，一旦返回true就说明，
                符合条件，所以在这里，我们直接在switch的括号里面写上最终结果true，和case后面的条件进行比较
            */

            switch(true){
                case score >=90 && score <= 100:
                    console.log('优秀');
                    break;
                case score >= 60 && score < 90:
                    console.log('良好');
                    break;
                case score < 60 && score >= 0: 
                    console.log('不及格');
                    break;
                default:
                    console.log('输入的内容有问题');
                    break;
            }
        }
    </script>
```



# 循环结构

#### for循环

```js
<script>
        /*
            1. 初始化变量
            2. 判断当前for循环执行的条件
            3. 更改判断条件
        */
        // for(var i = 0;i < 10;i++){
        //     console.log(i);
            
        // }

        // var arr = ['a','b',10,'20'];

        // for(var i = 0;i<arr.length;i++){
        //     console.log(arr[i]);
        // }

        var obj = {
            0:50,
            x:10,
            y:20,
            z:30
        }
        console.log(obj[0]);
        

        // console.log(obj.length); 注意obj没有长度
        
        // for(var i = 0;i<3;i++){
        //     console.log(obj[i]);
            
        // }
    </script>
```



#### for...in循环

```js
<script>
    	下面是对象：
        // var obj = {
        //     x:20,
        //     y:30,
        //     z:40
        // }

        /*
            var key in obj - > 声明一个key变量用于代表obj里面的key
            for(var key in obj){}
        */
        // for(var v in obj ){
        //     // console.log(v);	拿到x y z ，在对象中拿到key的值
        //     console.log(obj[v]);	拿到20 30 40
        // }
		
		下面是数组：
        var arr = [10,20,30,40];

        for(var v in arr){
            // console.log(v);	拿到0 1 2 3 ，在数组中拿到下标/索引值
            console.log(arr[v]);  拿到10 20 30 40
        }
    </script>
```

for..in	一般用在对象，获取key的值



#### while（前测试循环语句）

```js
<script>

        /*
            () => 判断条件
            {} => 满足条件执行的代码
        */
        var num = 0;
        while(num<10){
            num+=2;
            console.log(num);
        }
        var i = 0;
        for(;i<10;){
            i+=2;
            console.log(i);
        }

        /*
            for循环：更适合已知执行次数的情况，例如：我们要获取数组中的每一位的值
            while循环：更适合，未知的一个执行次数
        */
    </script>
```

**我只希望获取到第一个比26大的数字！**

```js
<script>
        var arr = [10,420,50,25,28,46];
        var num = 26;
        // for(var i=0;i<arr.length;i++){ 
        //     if(arr[i]>26){
        //         alert(arr[i]);
        //     }
        // }
        /*
            我只希望获取到第一个比26大的数字！
        */        
        // var i = 0;
        // while(arr[i]<num){
        //     i++;
        //     if(arr[i]>num){
        //         console.log(arr[i]);
        //     }
        // }     
    </script>
```

#### do while（后测试循环）



```js
<script>
        var num = 0;
        // while(num > 10){
        //     console.log(num);
        //     num += 2;
        // }

        do{
            console.log(num);
            num += 2;
        }while(num>10);
        /*
            do while 是至少执行一次的，不管是不是满足条件，如果满足条件会执行下一次
        */
    </script>
```

do while 是至少执行一次的，不管是不是满足条件，如果满足条件会执行下一次



#### break和continue

break（打破）

- 终止当前循环，包括break后面的代码也终止，并跳出该循环

continue（持续）

- 终止当前循环，包括break后面的代码也终止，但不跳出循环，循环会在这次结束之后，继续执行。

```js
<script>
        // var arr = [10, 420, 50, 25, 28, 46];

        // var num = 26;

        // for (var i = 0; i < arr.length; i++) {
        //     if (arr[i] > 26) {
        //         alert(arr[i]);
        //         break;
        //     }
        // }


        // for(var i = 0;i<3;i++){
        //     for(var j = 0;j<5;j++){
        //         console.log(i,j)
        //         if(j==3){
        //             break;	
    				  j加上break不会影响i的循环，i的循环不变
        //         }
        //     }
        //     if(i == 1){
        //         break;
					break之后的代码不会被执行
        //         alert('你好');		alert不会被执行
        //     }
        // }
        /*
            0 0
            0 1
            0 2
            0 3

            ????后续还会不会执行
        */

        /*
            break:跳出**当前**循环
        */


        
        for(var i = 0;i<10;i++){
            
            if(i == 5){
                //break; 直接跳出循环了，不会执行后面我们想要的6 7 8 9 
                continue;	跳过==5这个循环，并继续下面的循环
            }
            console.log(i); // 跳过5，并继续循环完。
        }

        /*
            continue 可以终止当前这次循环，但是不会跳出循环，他会跳过当前这次的循环执行下一次的循环
        */
    </script>
```



