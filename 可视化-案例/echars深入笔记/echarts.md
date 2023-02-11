### 浏览器画图方式有两种

- canvas：点阵图，缩放失真，适合图形数量非常大的图表
- svg：矢量图，缩放不失真，适合图形数量少的图表

### 数据可视化的交互需要

- 总览为先，缩放、过滤、按需查看细节

### echarts 的绘图步骤

- 建立 dom 容器
- 引入 echarts
- 实例化 echarts
- 建立图表配置项
- 显示图表

```JS
<!--1、建立dom 容器-->
<div id="main"></div>

<!--2、引入echarts-->
<script src="https://lib.baomitu.com/echarts/4.7.0/echarts.min.js"></script>

<script>
    /*3、基于准备好的dom，初始化echarts实例
    *   echarts.init(dom)
    * */
    const mainDom=document.querySelector('#main');
    const chart=echarts.init(mainDom);

    /*4、指定图表的option 配置项和数据
    *   xAxis x轴 {}
    *       data 类目数据
    *   yAxis y轴 {}
    *   series 系列列表
    *       type 图表类型
    *       data 数据，与xAxis.data 相对应
    * */
    const option={
        xAxis:{
            data:['html','css','js']
        },
        yAxis:{},
        series:{
            type:'bar',
            data:[30,20,40]
        }
    }

    /*5、使用刚指定的配置项和数据显示图表
    *   setOption(option)
    * */
    chart.setOption(option);

</script>
```

### echarts 常用属性

- 标题 title
  - 主标题 text
  - 副标题 subtext
  - 位置 left
  - 主标题样式 textStyle
  - 副标题样式 subtextStyle
  - 可见性 show
- 绘图区 grid
  -  left right bottom right 绘图区在容器内的边距
- 图例 legend
  - 图例 legend 可以对不同系列的数据做标注和过滤，需要与系列列表 series 搭配使用
  - ![图片1](C:\Users\Administrator\Desktop\面试整理\图片1.png)
- 工具栏 toolbox
  - 保存图片 saveAslmage
  - 配置项还原 restore
  - 数据视图工具 dataView
  - 数据区域缩放 dataZoom
  - 动态类型切换 magicType
    - type[] 动态类型 
      - line 折线图
      - bar 柱状图
      - stack 堆叠
- 提示框 tooltip
  - 提示框触发方式 trigger
  - item 图形触发，主要在散点图，饼图等无类目轴的图表中使用
  - axis 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表
  - none 什么都不触发
- 坐标轴 xAxis yAxis
  - name 坐标轴名称
  - data 类目数据
  - y轴的分割设置
    - splitNumber 分割段数
    - interval 强制设置坐标轴分割间隔
    - minlnterval 坐标轴最小间隔
    - maxlnterval 坐标轴最大间隔
- 系列列表 series
  - 列表类型 type
  - 系列名 name ：用于提示 tooltip，图例 legend筛选，数据更新
  - 数据 data
  - 标记点 markPoint
  - 标记线 markLine
- 标记点 markPoint
  - data [] 标记的数据数组
    - 标记的数据 []
      - name 名称
      - type
        - 最小 min
        - 最大 max
        - 平均值 average
      - coord [x,y]  坐标位
      - symbolOffset  标记偏移
      - symbolSize  标记大小
      - value 标记内容
      - symbol  标记图形包括 ：
        - ` 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none' ,url`
- 标记线 markLine
  - data [] 标记的数据数组
    - 标记的数据 []
      - name 名称
      - type
        - 最小  min 
        - 最大  max 
        - 平均值  average
      - coord [x,y] 坐标位

```JS
<script>
    /*基于准备好的dom，初始化echarts实例*/
    const myChart = echarts.init(document.getElementById('main'));

    /*指定图表的配置项和数据*/
    const option = {
        /*标题 title {}
        *   主标题 text
        *   副标题 subtext
        *   位置 left
        *       left 左对齐
        *       right 右对齐
        *       center 居中
        *   主标题样式 textStyle
        *       color
        *       fontSize
        *   副标题样式 subtextStyle
        *       color
        *       fontSize
        *   show 可见性
        *       true 可见，默认
        *       false 不可见
        * */
        title:{
            text:'大前端',
            left:'center',
            // left:'right',
            // left:0,
            // left:'50%',
            subtext: '大前端学习人数',
            textStyle:{
                color:'maroon',
                fontSize:24
            },
            subtextStyle:{
                color:'#000',
                fontSize:18
            },
            // show:false,
            show:true
        },

        /*提示框 tooltip
        *   trigger 提示框触发方式
        *       item 图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        *       axis 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表
        *       none 什么都不触发
        * */
        tooltip:{
              // trigger:'none',
              // trigger:'item',
              // trigger:'axis',
        },


        /*绘图区 grid
        *   left right bottom right 绘图区在容器内的边距
        * */
        grid:{
            top:80
        },

        /*图例 legend
        *   data[] 图例的数据,每一项代表一个系列的 name
        * */
        legend:{
            left:'left',
            // data:['学习人数','就业人数']
        },

        /*工具栏 toolbox
        *   feature{} 工具配置项
        *     saveAsImage{} 保存为图片
        *     dataView{} 数据视图工具
        *     restore{} 配置项还原
        *     dataZoom{} 数据区域缩放
        *     magicType{} 动态类型切换
        *       type[] 动态类型
        *           line 折线图
        *           bar 柱状图
        *           stack 堆叠
        * */
        toolbox:{
            feature:{
                saveAsImage:{type:'jpeg'},
                dataView:{},
                restore:{},
                dataZoom:{},
                magicType:{
                    type:['line','bar','stack']
                }
            }
        },

        /*x 轴
        *   name 坐标轴名称
        *   data 类目数据 []
        * */
        xAxis:{
            name:'前端语言',
            data:['html','css','js']
        },

        /*y 轴
        *   name 坐标轴名称
        *   splitNumber 分割段数
        *   interval 强制设置坐标轴分割间隔
        *   minInterval 坐标轴最小间隔
        *   maxInterval 坐标轴最大间隔
        * */
        yAxis:{
            name:'人数',
            // splitNumber:10,
            // interval:20,
            // minInterval:20,
            // maxInterval:5
        },

        /*系列列表 series
        *   列表类型 type
        *   系列名 name ：用于提示tooltip，图例legend 筛选，数据更新
        *   数据 data []
        *   标记点 markPoint {}
        *       data [] 标记的数据数组
        *           {type:'max'} 最大值
        *           {type:'min'} 最小值
        *           {value:'值',coord:[x,y]} 图表坐标系里的坐标位
        *   标记线 markLine
        *       data[] 标记数据
        *           name 名称
        *           type 类型 'average', 'min', 'max'
        *           coord 点位
        *           ...
        * */
        series:[
            {
                name:'学习人数',
                type:'bar',
                data:[30,20,40],
                markPoint:{
                    data:[
                        {type:'max'},
                        {type:'min'},
                        {coord:[0,30],value:'开课吧'}
                    ]
                }
            },
            {
                name:'就业人数',
                type:'bar',
                data:[40,30,50],
                markLine:{
                    data:[
                        {type:'max'},
                        {type:'min'},
                        {type:'average'},
                        [
                            {coord:[0,0]},
                            {coord:[2,50]},
                        ]
                    ]
                }
            }
        ]

    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
```

### echarts 常用图表

- 折线图 line
  - 折线图主要用于展示 数据随着时间变化而变化
  - 折线图适合用于展示一个连续的二维数据，如网站访问人数或商品销售价格的波动
  - ![折线图](C:\Users\Administrator\Desktop\面试整理\折线图.png)

```JS
<script>
    /*基于准备好的dom，初始化echarts实例*/
    const myChart = echarts.init(document.getElementById('main'));

    /*图表配置项*/
    const option = {
        /*x轴
        *   data 类目轴数据
        *   boundaryGap 边界留白
        *   axisLabel 标签
        *       margin 标签偏移量
        * */
        xAxis:{
            data:['html','css','js','canvas'],
            boundaryGap:0
        },

        /*y轴*/
        yAxis:{
            axisLabel:{
                margin:20
            }

        },

        /*series 系列集合
        *   type 系列类型，line
        *   name 系列名
        *   data 系列数据，[20,10,30,40]
        *   smooth 平滑
        *   itemStyle 项目样式
        *       color 颜色
        *   areaStyle 区域样式
        *       color 区域颜色
        *       opacity 透明度
        *   symbolSize 标记点大小
        *   symbol 标记图形
        *       内置形状 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
        *       'image://url' 图片
        *       'path://' svg
        * */
        series:{
            type:'line',
            data:[30,20,40,100],
            smooth:true,
            itemStyle:{
                color:'#00acec',
                // borderWidth:50,
            },
            areaStyle:{
                color: '#00acec',
                opacity:0.3
            },
            symbolSize:50,
            // symbol:'none',
            symbol:'image://./images/bs.png'
        }
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
```

- 饼图 pie
  - 饼图主要用于展现 不同类别数值相对于总数的占比情况
  - 扇形的弧长表示该类别的占比大小，所有扇形的弧长中和为100%
  - ![饼图](C:\Users\Administrator\Desktop\面试整理\饼图.png)
  - 当各类别数据占比比较接近时，建议使用柱状图或者南丁格尔玫瑰图
  - ![南丁格尔玫瑰图](C:\Users\Administrator\Desktop\面试整理\南丁格尔玫瑰图.png)

```JS
<script>
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
    const option = {
        tooltip:{},
        /*视觉映射 visualMap
        *   min 最小值
        *   max 最大值
        *   inRange 定义 在选中范围中 的视觉元素
        *       colorLightness[0, 1] 亮度
        * */
        visualMap:{
            min:0,
            max:100,
            inRange:{
                colorLightness:[0,1]
            }
        },


        /*饼图 pie
        *   type 图表类型
        *   data 数据 [{name,value},...]
        *   roseType 玫瑰图类型
        *       radius 半径
        *       area 面积
        *   radius 半径，[起始半径，结束半径]可生成环形
        *   itemStyle 项目样式
        *       color 颜色
        * */
        series:{
            type:'pie',
            data:[
                {name:'html',value:30},
                {name:'css',value:20},
                {name:'js',value:40},
                {name:'canvas',value:50},
            ],
            roseType:'radius',
            // roseType:'area',
            // radius:'70%',
            radius:['30%','70%'],
            itemStyle:{
                color:'#00acec'
            }
        }
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
```

- 散点图 scatter
  - 散点图通常用来识别 两个变量之间的相关性或用来观察他们的关系，从而发现某种趋势，对于查找异常值或者理解数据分布很有效
  - 如下图某个班级学生的身高、体重的分布情况
  - ![散点](C:\Users\Administrator\Desktop\面试整理\散点.png)
- 气泡图
  - 散点图可以将一个对象的两个变量映射到 x,y 位置上
  - 如果此对象还有一个变量，那就可以映射到散点的大小上，形成气泡图
  - ![气泡图](C:\Users\Administrator\Desktop\面试整理\气泡图.png)

```JS
<script>
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    //数据
    const data=[
        //x y  z
        [0, 0, 20],
        [10,10,40],
        [20,10,50],
        [30,30,30],
    ];
    // 指定图表的配置项和数据
    const option = {
        /*x 轴*/
        xAxis:{},
        /*y轴*/
        yAxis:{},
        /*散点图 scatter
        *   data 数据
        *   symbolSize 散点尺寸
        * */
        series:{
            type:'scatter',
            data,
            // symbolSize:50,
            symbolSize:(param)=>{
                console.log(param);
                return param[2];
            },
            
        }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
```

- K 线 candlestick
  - K 线通常用于表示股票走势
- 雷达 radar
  - 雷达图的每个变量都有一个从中心向外发射的轴线，所有的轴之间的夹角相等，同时每个轴有相同的刻度
  - 雷达图表适合 对比变量在数据集内的高低，比如产品性能、排名等
  - ![雷达](C:\Users\Administrator\Desktop\面试整理\雷达.png)

```JS
<script>
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    /*英雄数据
    *   value [生命，攻击，暴击，防御，速度]
    * */
    const data=[
        {
            name:'关羽',
            value:[80,98,80,70,70]
        },
        {
            name:'鲁班',
            value:[85,70,75,95,80]
        },
    ];

    // 指定图表的配置项和数据
    const option = {
        /*标题 title*/
        title:{
            text:'英雄实例对比'
        },
        tooltip:{},

        /*图例 legend
        *   data 数据
        *   orient 排列方式
        *       horizontal 水平，默认
        *       vertical 垂直
        * */
        legend:{},

        /*
        * 雷达坐标系组件 radar
        *   indicator 雷达图的指示器集合 []
        *       name 指示器名称
        *       min、max 数据区间，实际数据会在此区间内计算比值
        *       color 标签颜色
        *   shape 雷达形状
        *       polygon 多边形，默认
        *       circle 圆形
        *
        * */
        radar:{
            indicator:[
                {name:'生命力',color:'green',min:0,max:100},
                {name:'攻击力',color:'red',min:0,max:100},
                {name:'暴击',color:'orange',min:0,max:100},
                {name:'防御',color:'#333',min:0,max:100},
                {name:'速度',color:'blue',min:0,max:100},
            ],
            // shape:'circle',
            shape:'polygon',
        },

        /*
        * 雷达 radar
        *   type 图表类型
        *   data 数据 [{name,value[]},...]
        * */
        series:{
            type:'radar',
            data
        }

    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
```

- 仪表盘 gauge
  - 仪表盘适合表示量的变化，如速度、体积、温度、进度、完成率、满意度等
  - ![仪表盘](C:\Users\Administrator\Desktop\面试整理\仪表盘.png)

```JS
<script>
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
    const option = {
        /*
        * 仪表盘 gauge
        *   type 图表类型
        *   detail 仪表盘详情{formatter:'{value}%'}
        *   data 数据[{name,value},...]
        * */
        series:{
            type:'gauge',
            detail:{
                formatter:'{value}%'
            },
            data:[
                {name:'速度',value:80}
            ]
        }

    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    /*随机修改仪表数值，每隔一秒钟修改一次*/
    setInterval(()=>{
        option.series.data[0].value=Math.round(Math.random()*100);
        myChart.setOption(option);
    },1000)

</script>
```

- 地图 map 
  - 地图用于地理区域数据的可视化
- 地图的绘制步骤
  - 下载地图文件
  - 注册地图：echarts.registerMap('china',data);
  - 配置地图：`series:[{type:'map',map:'china'}]`

```JS
<script>
    //初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));

    /*获取接送文件*/
    fetch('./data/China.json')
        .then((res) => res.json())
        .then(data => {
            //echarts 注册地图 registerMap
            echarts.registerMap('china',data);
            //echarts 配置文件
            const option = {
                title: {
                    text: '中国地图',
                    left:'center'
                },
                /*
                * 地图 map
                *   type 图表类型
                *   map 地图注册名
                * */
                series:{
                    type:'map',
                    map:'china'
                }
            };
            //基于配置文件显示图表
            myChart.setOption(option);
        })

</script>
```

- 地理坐标系组件 geo
  - geo 是地理坐标系组件，也可以画地图
  - geo 和 map 的区别是，geo 支持在地理坐标系上绘制 散点图、线集等
  - ![geo](C:\Users\Administrator\Desktop\面试整理\geo.png)

```JS
<script>
    const myChart = echarts.init(document.getElementById('main'));
    /*获取接送文件*/
    fetch('./data/China.json')
        .then((res) => res.json())
        .then(data => {
            echarts.registerMap('china',data);
            const option = {
                title: {
                    text: '中国地图',
                    left:'center',
                    textStyle:{
                        color:'rgba(255,255,255,0.8)',
                    },
                    top:24
                },
                geo: {
                    map: 'china',
                    roam:true,
                    zoom:1,
                    itemStyle:{
                        areaColor:'#004981',
                        borderColor:'#029fd4'
                    },
                    emphasis:{
                        itemStyle:{
                            color:'#029fd4'
                        },
                        label:{
                            color:'#fff'
                        }
                    }
                },
                series: [{
                    name: 'pm2.5',
                    type: 'scatter',
                    coordinateSystem:'geo',
                    data: [
                        {
                            name:'海门',
                            value:[121.15, 31.89, 9]
                        },
                        {
                            name:'鄂尔多斯',
                            value:[109.781327, 39.608266, 12]
                        },
                        {
                            name:'招远',
                            value:[120.38, 37.35, 18]
                        },

                    ],
                    symbolSize: function (val) {
                        return val[2];
                    },
                }]
            };
            myChart.setOption(option);
        })

</script>
```

### 案例疫情折线图

![疫情折线图](C:\Users\Administrator\Desktop\面试整理\疫情折线图.png)

```JS
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>西虹市 新增确诊/治愈 趋势</title>
    <style>
        #main{
            margin: 20px;
            width: 700px;
            height: 500px;
        }
    </style>
</head>
<body>
<!--建立dom 容器-->
<div id="main"></div>
<!--引入echarts-->
<script src="https://lib.baomitu.com/echarts/4.7.0/echarts.min.js"></script>
<script>
    /*基于准备好的dom，初始化echarts实例*/
    const myChart = echarts.init(document.getElementById('main'));
    /*数据*/
    //日期
    const xData=['3.3', '3.4', '3.5', '3.6', '3.7', '3.8', '3.9'];
    //确诊数据
    const qzData=[200, 170, 90, 80, 30, 40, 10];
    //治愈数据
    const zyData=[10, 20, 40, 70, 120, 145, 150];


    /*指定图表的配置项和数据*/
    const option = {
        /*标题 title {}
        *   主标题 text
        *   副标题 subtext
        *   主标题样式 textStyle
        *       color
        *       fontSize
        * */
        title:{
            text:'西虹市 新增确诊/治愈 趋势',
            subtext:'单位：例',
            textStyle: {
                fontSize:16
            },
        },
        /*提示框 tooltip
        *   trigger 提示框触发方式
        *       item 图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        *       axis 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表
        *       none 什么都不触发
        *   backgroundColor 背景色
        *   textStyle 文字样式
        *   borderWidth 边界宽度
        *   borderColor 边界颜色
        * */
        tooltip:{
            trigger:'axis',
            backgroundColor:'white',
            textStyle:{
                color:'#333'
            },
            borderWidth:1,
            borderColor:'#ddd',
        },
        /*x轴
        *   data 类目轴数据
        *   boundaryGap 边界留白
        *   axisLine 轴线
        *       show 可见性
        *   axisLabel 标签
        *       rotate 旋转
        *       margin 外边距
        *   axisTick 刻度
        *       show 可见性
        * */
        xAxis: {
            boundaryGap : false,
            data: xData,
            axisLine:{
                show:false
            },
            axisLabel:{
                rotate:50,
                margin:15
            },
            axisTick:{
                show:false
            }
        },
        /*y轴
        *   其属性与x 轴类似
        * */
        yAxis: {
            type: 'value',
            axisLine:{
                show:false
            },
            axisLabel:{
                margin:15
            },
            axisTick:{
                show:false
            }
        },
        /*图例 legend
        *   data[] 图例的数据,每一项代表一个系列的 name
        *   icon 图表形状
        *   itemGap 元素间隙
        *   itemHeight 元素高度
        *   textStyle 文字样式
        *       fontSize 大小
        *       color 颜色
        *       padding 内间距
        *   left top right bottom 边界位置
        * */
        legend:{
            data:['确诊','治愈'],
            icon:'circle',
            itemGap:18,
            itemHeight:7,
            textStyle: {
                fontSize:12,
                color:'#999',
                padding:[0,0,0,-9]
            },
            top:32,
            left:'right',
        },
        /*网格 grid
        *   left top right bottom 边界位置
        * */
        grid:{
            right:10,
            left:50,
            top:70
        },
        /*系列列表 series
        *   name 系列名,用于提示tooltip，图例legend 筛选，数据更新
        *   type 列表类型
        *   lineStyle 线的样式
        *       color 颜色
        *   showSymbol 标记点的显示
        *   smooth 线的圆滑
        *   data 数据
        * */
        series: [
            {
                name:'确诊',
                type:'line',
                lineStyle: {
                    color: 'crimson',
                },
                showSymbol:false,
                smooth:true,
                data:qzData
            },
            {
                name:'治愈',
                type:'line',
                lineStyle: {
                    color: 'lightseagreen',
                },
                showSymbol:false,
                smooth:true,
                data:zyData
            },
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
</body>
</html>
```

### 多坐标轴

- 一个图表有两个Y轴

```JS
<script>
    /*基于准备好的dom，初始化echarts实例*/
    const myChart = echarts.init(document.getElementById('main'));

    /*指定图表的配置项和数据*/
    const option = {
        /*图例*/
        legend:{},
        /*提示*/
        tooltip:{},
        /*x 轴*/
        xAxis:{
            data:['html','css','js']
        },

        /*y 轴
        *   name 坐标轴名称
        *   min 刻度最小值
        *   max 刻度最大值
        * */
        yAxis:[
            // {min:0,max:50},
            {interval:10,min:0,max:50},
            // {interval:10},
            {}
        ],

        /*系列列表 series
        *   yAxisIndex 当前系列对应的y 轴的索引位置
        * */
        series:[
            {
                name:'学习人数',
                type:'bar',
                data:[30,20,40],
            },
            {
                name:'就业人数',
                type:'bar',
                data:[330,450,850],
                yAxisIndex:1
            }
        ]
    };

    // 基于配置项显示图表。
    myChart.setOption(option);
</script>
```

### 数据更新

- ajax,fetch
- 先请求数据，再setOption()

```JS
<script>
    const myChart = echarts.init(document.getElementById('main'));
    fetch('./data/China.json')
        .then((res) => res.json())
        .then(data => {
            /*注册地图*/
            echarts.registerMap('china', data);
            /*配置项*/
            const option = {
                title: {
                    text: '中国地图',
                    left:'center'
                },
                series: {
                    type: 'map',
                    map: 'china'
                }
            };
            /*基于配置项显示图表*/
            myChart.setOption(option);
        })

</script>
```

- 先setOption()，有什么配置什么，等请求到数据后，再追加配置
- 数据加载中：
  - 显示 loading:showLoading()
  - 隐藏 loading:hideLoading()

```JS
<script>
    const myChart = echarts.init(document.getElementById('main'));
    /*有什么先配置什么*/
    myChart.setOption({
        title: {
            text: '中国地图',
            left:'center'
        }
    });
    //显示loading
    myChart.showLoading();
    fetch('./data/China.json')
        .then((res) => res.json())
        .then(data => {
            //隐藏loading
            myChart.hideLoading();
            /*注册地图*/
            echarts.registerMap('china', data);
            /*等请求到数据后，追加配置*/
            myChart.setOption({
                series: {
                    type:'map',
                    map:'china',
                }
            });
        })
</script>
```

### 数据集 dataset

- dataset 数据集组件是ECharts4
- 优点：
  - 基于原始数据，设置映射关系，形成图表
  - 数据和配置分离，便于独立管理
  - 数据可以被多个系列或者组件复用
  - 支持更多的数据格式，如二维数据，对象数据等

```JS
<script>
    //基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    //数据源
    /*const source=[
        ['大前端','学习人数','就业人数'],
        ['html',  30,       40],
        ['css',   20,       30],
        ['js',    40,       50],
    ];*/
    const source=[
        {'大前端':'html','学习人数':30,'就业人数':40},
        {'大前端':'css','学习人数':20,'就业人数':30},
        {'大前端':'js','学习人数':40,'就业人数':50},
    ];

    // 指定图表的配置项和数据
    const option = {
        tooltip:{},
        legend:{},
        /*
        * dataset数据集
        *   source 数据源 []
        * */
        dataset:{source},

        /*x轴
        *   type 轴的类型
        *       category 类目轴，离散型数据
        *       value 数值轴，连续性数据
        * */
        xAxis:{
            type:'category',
            // data:['html','css','js']
        },
        yAxis:{
            type:'value'
        },

        /*系列列表*/
        series:[
            {
                // name:'学习人数',
                type:'bar',
                // data:[30,20,40],
                itemStyle:{
                    color:'#00acec'
                }
            },
            {
                type:'bar',
            },
        ]

    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
```

![数据集](C:\Users\Administrator\Desktop\面试整理\数据集.png)

![数据集2](C:\Users\Administrator\Desktop\面试整理\数据集2.png)

- 行列映射

```JS
<script>
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    //数据源
    const source=[
        ['大前端','学习人数', '就业人数'],
        ['html',  20,   25],
        ['css',   10,   15],
        ['js',    30,   40]
    ];

    // 指定图表的配置项和数据
    const option = {
        legend: {},
        tooltip: {},

        /*
        * dataset数据集
        *   source 数据源 []
        *   seriesLayoutBy 行列映射
        *       column 基于列映射
        *       row 基于行映射
        * */
        dataset: {
            source,
        },

        /*grid [{},{}] 在一个echarts 实例中建立多个grid，并设置其位置
        *   bottom 下边距，如'55%'
        *   top 上边距，如'55%'
        * */
        grid:[
            {bottom:'55%'},
            {top:'55%'}
        ],


        /*建立两个x 轴，分属两个网格
        *   type 轴类型，如category
        *   gridIndex 绘图区索引位置
        * */
        xAxis: [
            {type: 'category',gridIndex:0},
            {type: 'category',gridIndex:1},
        ],
        /*建立两个y 轴，分属两个网格*/
        yAxis:[
            {type:'value',gridIndex:0},
            {type:'value',gridIndex:1},
        ],
        /*
        * series系列
        *   type 图表类型
        *   seriesLayoutBy 行列映射
        *       column 列映射，默认
        *       row  行映射
        *   xAxisIndex x轴索引
        *   yAxisIndex y轴索引
        * */
        series: [
            //绘图区1-第一列为类目信息
            {type: 'bar'},
            {type: 'bar'},

            //绘图区2-第一行为类目信息
            {
                type:'bar',
                seriesLayoutBy:'row',
                xAxisIndex:1,
                yAxisIndex:1,
            },
            {
                type:'bar',
                seriesLayoutBy:'row',
                xAxisIndex:1,
                yAxisIndex:1,
            },
            {
                type:'bar',
                seriesLayoutBy:'row',
                xAxisIndex:1,
                yAxisIndex:1,
            },
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
```

- 数据集的维度映射
  - 数据集的维度就是每个系列的名称 name
  - 维度映射作用：对数据的维度信息统一定义和管理
  - ECharts 默认从 dataset.source 的第一行中获取维度信息
  - 如果在 dataset 指定了 dimensions，那么ECharts不会自动从 dataset.source 获取维度信息

```JS
<script>
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));

    //数据源
    const source=[
        ['html',  20,   25],
        ['css',   10,   15],
        ['js',    30,   40]
    ];

    //维度映射 dimensions
    const dimensions=['大前端','学习人数', {name:'就业人数'}];

    // 指定图表的配置项和数据
    const option = {
        legend: {},
        tooltip: {},
        dataset: {source,dimensions},
        xAxis: {type: 'category'},
        yAxis: {},
        series: [
            {
                type: 'bar',
            },
            /*{
                type: 'bar',
            },*/
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
```

### dimensions 维度映射

- null :不为此处维度定义
- {type:'ordinal'}:只定义维度类型，有下面几种类型
  - number:默认是普通数字
  - ordinal:离散型，一般文本使用这种，
  - float:浮点型
  - int:整型
- {name:'good',type:'number'}:维度名称，维度类型
- 'bad':只指定维度名称，等同于{name:'bad'}
- 如 `dimensions:[null,{type:'ordinal'},{name:'good',type:'number'},'bad']`

### encode 编码映射

- `tooltip:['product','score']`,提示信息
- `seriesName:[1,3]`,系列名
- x:x:轴的数据映射
- y:y轴的数据映射

```JS
<script>
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    //维度映射
    const dimensions=['大前端','学习人数', '就业人数'];
    //数据源
    const source =[
        ['html',  20,   25],
        ['css',   10,   15],
        ['js',    30,   40],
    ];

    // 指定图表的配置项和数据
    const option = {
        tooltip:{},
        dataset: {dimensions,source},
        /*设置类目轴和数值轴*/
        xAxis:{type:'category'},
        yAxis:{type:'value'},
        /*encode 编码映射
        *   x x轴维度
        *   y y轴维度
        *   seriesName 系列名，n|[n]|[n,m,...]
        *   tooltip 提示信息，n|[n]|[n,m,...]
        * */
        series:{
            type:'bar',
            encode:{
                // x:0,
                x:'大前端',
                y:2,
                // seriesName:2,
                tooltip:[1,2]

            }
        }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
```

### 区域缩放 dataZoom

- 作用：概览整体，观察细节
- 区域缩放的方式：
  - 框选型 数据区域缩放组件（dataZoomSelect）：提供一个选框进行数据缩放。 toolbox.feature.dataZoom，配置项在 toolbox 中
  - 内置型数据区域缩放组件（dataZoomInside）：内置于坐标系中，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系。
  - 滑动条型数据区域缩放组件（dataZoomSlider）：有单独的滑动条，用户在滑动条上进行缩放或漫游。

```JS
<script>
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));

    //数据源
    const source = [
        //x  y   z
        [2,  1, 5],
        [4,  2, 10],
        [6,  3, 15],
        [8,  4, 20],
        [10, 5, 25],
        [12, 6, 30],
        [14, 7, 35],
        [16, 8, 40],
        [18, 9, 45],
    ];

    // 指定图表的配置项和数据
    const option = {
        tooltip: {},
        /*工具栏 toolbox
        *   feature{} 工具配置项
        *     dataZoom{} 框选型缩放缩放
        * */
        toolbox:{
            feature:{
                dataZoom:{}
            }
        },

        /*
        * x 轴
        *   min 最小值
        *       dataMin 取所有数据中的最小值
        *   max 最大值
        *       dataMax 取所有数据中的最大值
        * */
        xAxis: {
            type: 'value',
            min: 'dataMin',
            max: 'dataMax',
        },
        yAxis: {
            type: 'value',
            min: 'dataMin',
            max: 'dataMax',
        },
        /*
        * dataZoom 区域缩放 [{},{}]
        *   type 缩放方式
        *       inside 内置缩放，通过鼠标的平移缩放实现
        *       slider 滑动条缩放
        *   xAxisIndex 缩放作用于哪个x轴
        *   yAxisIndex 缩放作用于哪个y轴
        *   start 起始位，百分百 [0,100]
        *   end 结束位，百分百 [0,100]
        * */
        dataZoom:[
            {
                type:'inside',
                start:50,
                // end:100,
                // yAxisIndex:0
            },
            {
                type:'slider',
                xAxisIndex:0
            },
            {
                type:'slider',
                yAxisIndex:0
            }
        ],

        /*数据集*/
        dataset:{source},
        /*系列列表*/
        series: [
            {
                type: 'scatter',
                symbolSize: function (param) {
                    return param[2];
                },
            },
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
```

### visualMap 视觉映射

- 可以让项目的数据和颜色、大小等属性相关联。
- 举个例子： 
  `source = [ 
  	[1, 1, 5],  
  	[2, 2, 9]
  ]`
  - 数据源source 的第一列和第二列分别对应散点在直角坐标系中的x、y 信息，第三列则默认对应visualMap 。
- 常见属性
  - type 映射方式
  - continuous 连续型
  - piecewise 分段型
  - min、max 映射区间的起始位置和结束位置，对应实际数据
  - range 显示此范围内的项目，百分百类型
  - calculable 是否显示拖拽用的手柄，在连续型的颜色映射器中
  - inRange 自定义选中范围中的视觉元素
  - color[] 颜色映射
  - symbolSize 大小映射
  - visualMap 以前叫dataRange

```JS
<script>
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));

    //数据源
    const source = [
       //x   y   z
        [2,  1, 10],
        [4,  2, 20],
        [6,  3, 30],
        [8,  4, 50],
        [10, 5, 50],
        [12, 6, 60],
        [14, 7, 70],
        [16, 8, 80],
        [18, 9, 90],
    ];

    // 指定图表的配置项和数据
    const option = {
        tooltip: {},
        /*绘图区*/
        grid:{
            left:100
        },
        /*x 轴*/
        xAxis: {},
        /*y 轴*/
        yAxis: {},
        /*数据集*/
        dataset:{source},
        /*
        * visualMap 视觉映射 {}
        *   type 映射方式
        *       continuous 连续型
        *       piecewise 分段型
        *   min 映射区间的起始位置，如0
        *   max 映射区间的接收位置，如90
        *   calculable 是否显示拖拽用的手柄，只适用于连续型
        *   range [] 显示此范围内的项目，实际数据，只适用于连续型,如[0,100]
        *   dimension 基于哪个维度的数据进行视觉映射
        *   inRange 自定义取色范围
        *       color[] 颜色映射
        *       symbolSize[] 大小映射
        *
        * */
        /*visualMap:{
            type:'continuous',
            min:0,
            max:100,
            inRange:{
                color:['#00acec','orange','maroon'],
                symbolSize:[5,50],
                // colorSaturation:[0,1]
            },
            calculable:true,
            // dimension:1,
            // range:[20,50]
        },*/
        visualMap:{
            type:'piecewise',
            min:0,
            max:100,
            inRange:{
                color:['#00acec','orange','maroon'],
                symbolSize:[5,50],
                // colorSaturation:[0,1]
            },

        },

        /*系列列表*/
        series: [
            {
                name: '视觉映射',
                type: 'scatter',
                encode:{
                    tooltip:[0,1,2]
                }
            },
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>
```

### ECharts 监听事件

- ECharts  使用on 绑定事件，事件名称对应 DOM 事件名称，均为小写的字符串。如：
  `myChart.on('click', function (params) {
      // 控制台打印数据的名称
      console.log(params.name);
  });`

```JS
<script>
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));

    //数据源
    const source=[
        ['大前端','学习人数','就业人数'],
        ['html',  30,       50],
        ['css',   20,       40],
        ['js',    40,       80],
    ];
    // 指定图表的配置项和数据
    const option={
        tooltip:{},
        legend:{},
        dataset:{source},
        xAxis:{
            data:['html','css','js']
        },
        yAxis:{},
        series:[
            {type:'bar'},
            {type:'bar'},
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    /*
    * 使用on 方法绑定click点击事件
    * */
    myChart.on('click',(param)=>{
        console.log(param);
    })
    

</script>
```

### 鼠标事件

- `'click'、'dblclick'、'mousedown'、'mousemove'、'mouseup'、'mouseover'、'mouseout'、'globalout'、'contextmenu' `

### 代码触发组件行为

- ECharts 通过调用 echarts 实例对象的dispatchAction() 方法触发组件行为。
- 如触发某个元素的highlight 高亮事件：
  `myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: app.currentIndex
  });`

```JS
<script>
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));

    //数据源
    const source=[
        ['html',  30],
        ['css',   20],
        ['js',    40],
        ['canvas',70],
    ];
    //维度
    const dimensions=['大前端','学习人数'];

    // 指定图表的配置项和数据
    const option = {
        title:{
            text:'前端语言学习人数'
        },
        tooltip:{},
        legend:{
            left:'left',
            orient:'vertical',
            top:40
        },
        dataset:{source,dimensions},
        series:{
            type:'pie',
            emphasis:{
                itemStyle:{
                    shadowColor:'rgba(0,0,0,0.5)',
                    shadowOffsetY:10,
                    shadowBlur:10
                }
            }
        }
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    /*使用dispatchAction 方法高亮并提示一个扇形
    *   type 触发的行为类型
    *       highlight 高亮
    *       showTip 显示提示
    *       downplay 取消高亮
    *       hideTip 取消提示
    *   seriesIndex 系列索引，用于寻找系列列表中的某个系列
    *   dataIndex 数据所有，用于寻找系列中的某个元素
    * */
    myChart.dispatchAction({
        type:'highlight',
        seriesIndex:0,
        dataIndex: 2
    })
    myChart.dispatchAction({
        type:'showTip',
        seriesIndex:0,
        dataIndex: 2
    })

    myChart.dispatchAction({
        type:'hideTip',
        seriesIndex:0,
        dataIndex: 2
    })
    myChart.dispatchAction({
        type:'downplay',
        seriesIndex:0,
        dataIndex: 2
    })




    /*当前索引*/
    let curInd=0;

    /*获取系列数据的长度*/
    const len=source.length;

    /*建立时间监听器*/
    setInterval(function(){
        myChart.dispatchAction({
            type:'downplay',
            seriesIndex:0,
            dataIndex:curInd
        });
        myChart.dispatchAction({
            type:'hideTip',
            seriesIndex:0,
            dataIndex:curInd
        });
        curInd++;
        if(curInd===len){
            curInd=0;
        }
        myChart.dispatchAction({
            type:'highlight',
            seriesIndex:0,
            dataIndex:curInd
        });
        myChart.dispatchAction({
            type:'showTip',
            seriesIndex:0,
            dataIndex:curInd
        });
    },1500)


</script>
```

### 富文本标签

- 用formatter 写文本片段
          `formatter:
          ‘{a|文字内容}\n'+
          '{b|文字内容}\n'+
          '默认样式{x|样式 x}’`
  	相当于：
  `<span class="a">样式a</span>\n
  <span class="b">样式b</span>\n
  默认样式 <span class="x">x</span>`
- 用rich 设置文本样式
- 文本块（Text Block）：文本标签块整体。
- 文本片段（Text fragment）：文本标签块中的部分文本。

```JS
<script>
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));

    // 数据
    const data=[
        {name:'杨戬',value:80,img:'./images/yj.jpg'},
        {name:'鲁班',value:60,img:'./images/lb.jpg'},
        {name:'沈梦溪',value:40,img:'./images/smx.jpg'},
        {name:'诸葛亮',value:30,img:'./images/zgl.jpg'}
    ];

    data.forEach(item=>{
        /*自定义标签 label
    *   formatter 文本片段
    *       '{样式名|文字内容}\n 换行'
    *   文本块的样式
    *       textBorderColor 文本描边颜色
    *       textBorderWidth 文本描边宽度
    *       ...
    *   rich 富文本，在其中写入样式
    *       width 宽
    *       height 高
    *       backgroundColor 背景色
    *           image 背景图
    *       fontSize 文字大小
    *       lineHeight 行高
    *       fontWeight 文本加粗
    *       ...
    * */
        item.label={
            textBorderColor:'#fff',
            textBorderWidth:4,
            formatter:'{img|}\n{name|'+item.name+'}\n{val|实力：'+item.value+'}',
            rich:{
                img:{
                    width:60,
                    height:60,
                    backgroundColor:{
                        image:item.img
                    }
                },
                name:{
                    lineHeight:32,
                    fontSize:18,
                }
            }
        }
    })



    /*配置项*/
    const option = {
        title:{text:'英雄战力'},
        series: {
            type: 'pie',
            data,
            radius:'70%',
        }
    };
    myChart.setOption(option);
</script>
```

