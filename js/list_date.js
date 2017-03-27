/*海洋技术结构饼状图*/
var myChart0 = echarts.init(document.getElementById('number_one'));
var option0 = {
    title : {
        text: '海洋技术结构',
        subtext: 'Marine Technology',
        x:'left',
        textStyle:{
        	'color':'#fff'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x:'left',
        y:60,
        textStyle:{
        	'color':'#fff'
        },
        data: ['海洋监测','海洋生物活性物质及生物制品','海水养殖','海底资源环境勘测','其他']
    },
    series : [
        {
            name: ['日志信息'],
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
        	color:['#f02a46','#6112f1','#18ce36','#ece526','#ee450a'],
            data:[
                {value:13, name:'海洋监测'},
                {value:20, name:'海洋生物活性物质及生物制品'},
                {value:12, name:'海水养殖'},
                {value:14, name:'海底资源环境勘测'},
                {value:44, name:'其他'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart0.setOption(option0);
/*海洋技术结构饼状图结束*/
/*技术领域结构饼状图*/
var myChart7 = echarts.init(document.getElementById('number_eight'));
var option7 = {
    title: {
        text: '技术领域结构',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    legend: {
        orient: 'vertical',
        x:'left',
        y:60,
        textStyle:{
        	'color':'#fff'
        }
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            color:['skyblue','#00cc66','#f5f5f5','#ff9933','#2d6fa4','#00459A','#E3A886','#DDA0F7','#4B9617','#2394E9'],
            data:[
                {value:500, name:'电子信息'},
                {value:235, name:'农业'},
                {value:374, name:'先进制造'},
                {value:310, name:'新能源与高效节能'},
                {value:435, name:'生物、医药和医疗器械'},
                {value:300, name:'现代交通'},
                {value:250, name:'新材料及其应用'},
                {value:420, name:'城市建设与社会发展'},
                {value:310, name:'环境保护与资源综合利用'},
                {value:360, name:'航空航天'},
            ]
        }
    ]
};
myChart7.setOption(option7);
/*技术领域结构饼状图结束*/
/*计划来源结构雷达图*/
var myChart4 = echarts.init(document.getElementById('number_four'));
var dataBJ = [
    [55,9,56,0.46,18,6,1],
    [25,11,21,0.65,34,9,2],
    [56,7,63,0.3,14,5,3],
    [33,7,29,0.33,16,6,4],
    [42,24,44,0.76,40,16,5],
    [82,58,90,1.77,68,33,6],
    [74,49,77,1.46,48,27,7],
    [78,55,80,1.29,59,29,8],
    [267,216,280,4.8,108,64,9],
    [185,127,216,2.52,61,27,10],
    [39,19,38,0.57,31,15,11],
    [41,11,40,0.43,21,7,12],
    [64,38,74,1.04,46,22,13],
    [108,79,120,1.7,75,41,14],
    [108,63,116,1.48,44,26,15],
    [33,6,29,0.34,13,5,16],
    [94,66,110,1.54,62,31,17],
    [186,142,192,3.88,93,79,18],
    [57,31,54,0.96,32,14,19],
    [22,8,17,0.48,23,10,20],
    [39,15,36,0.61,29,13,21],
    [94,69,114,2.08,73,39,22],
    [99,73,110,2.43,76,48,23],
    [31,12,30,0.5,32,16,24],
    [42,27,43,1,53,22,25],
    [154,117,157,3.05,92,58,26],
    [234,185,230,4.09,123,69,27],
    [160,120,186,2.77,91,50,28],
    [134,96,165,2.76,83,41,29],
    [52,24,60,1.03,50,21,30],
    [46,5,49,0.28,10,6,31]
];

var dataGZ = [
    [26,37,27,1.163,27,13,1],
    [85,62,71,1.195,60,8,2],
    [78,38,74,1.363,37,7,3],
    [21,21,36,0.634,40,9,4],
    [41,42,46,0.915,81,13,5],
    [56,52,69,1.067,92,16,6],
    [64,30,28,0.924,51,2,7],
    [55,48,74,1.236,75,26,8],
    [76,85,113,1.237,114,27,9],
    [91,81,104,1.041,56,40,10],
    [84,39,60,0.964,25,11,11],
    [64,51,101,0.862,58,23,12],
    [70,69,120,1.198,65,36,13],
    [77,105,178,2.549,64,16,14],
    [109,68,87,0.996,74,29,15],
    [73,68,97,0.905,51,34,16],
    [54,27,47,0.592,53,12,17],
    [51,61,97,0.811,65,19,18],
    [91,71,121,1.374,43,18,19],
    [73,102,182,2.787,44,19,20],
    [73,50,76,0.717,31,20,21],
    [84,94,140,2.238,68,18,22],
    [93,77,104,1.165,53,7,23],
    [99,130,227,3.97,55,15,24],
    [146,84,139,1.094,40,17,25],
    [113,108,137,1.481,48,15,26],
    [81,48,62,1.619,26,3,27],
    [56,48,68,1.336,37,9,28],
    [82,92,174,3.29,0,13,29],
    [106,116,188,3.628,101,16,30],
    [118,50,0,1.383,76,11,31]
];

var dataSH = [
    [91,45,125,0.82,34,23,1],
    [65,27,78,0.86,45,29,2],
    [83,60,84,1.09,73,27,3],
    [109,81,121,1.28,68,51,4],
    [106,77,114,1.07,55,51,5],
    [109,81,121,1.28,68,51,6],
    [106,77,114,1.07,55,51,7],
    [89,65,78,0.86,51,26,8],
    [53,33,47,0.64,50,17,9],
    [80,55,80,1.01,75,24,10],
    [117,81,124,1.03,45,24,11],
    [99,71,142,1.1,62,42,12],
    [95,69,130,1.28,74,50,13],
    [116,87,131,1.47,84,40,14],
    [108,80,121,1.3,85,37,15],
    [134,83,167,1.16,57,43,16],
    [79,43,107,1.05,59,37,17],
    [71,46,89,0.86,64,25,18],
    [97,71,113,1.17,88,31,19],
    [84,57,91,0.85,55,31,20],
    [87,63,101,0.9,56,41,21],
    [104,77,119,1.09,73,48,22],
    [87,62,100,1,72,28,23],
    [168,128,172,1.49,97,56,24],
    [65,45,51,0.74,39,17,25],
    [39,24,38,0.61,47,17,26],
    [39,24,39,0.59,50,19,27],
    [93,68,96,1.05,79,29,28],
    [188,143,197,1.66,99,51,29],
    [174,131,174,1.55,108,50,30],
    [187,143,201,1.39,89,53,31]
];

var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

option4 = {
    title: {
        text: '计划来源结构',
        left: 'left',
        textStyle: {
            color: '#eee'
        }
    },
    legend: {
        bottom: 5,
        itemGap: 20,
        x:'left',
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        selectedMode: 'single'
    },
    // visualMap: {
    //     show: true,
    //     min: 0,
    //     max: 20,
    //     dimension: 6,
    //     inRange: {
    //         colorLightness: [0.5, 0.8]
    //     }
    // },
    radar: {
        indicator: [
            {name: '国家科技计划', max: 200},
            {name: '部门计划', max: 250},
            {name: '计划外', max: 300},
            {name: '省、自治区、直辖市及计划单列市计划', max: 5}
        ],
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                color: 'rgb(238, 197, 102)'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '青岛',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#ffffcc'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        }
    ]
};
myChart4.setOption(option4);
/*计划来源结构雷达图结束*/
/*区县结构折线图*/
var myChart5 = echarts.init(document.getElementById('number_five'));
var option5 = {
    title:{
        text:'区/县结构',
        left: 'left',
        textStyle: {
            color: '#eee'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true, 
                type: ['line', 'bar'],
                iconStyle:{
                    color:'#fff'
                }
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['区/县','区/县','占比'],
        textStyle:{
            color:'#fff'
        }
    },
    xAxis: [
        {
        	name:'区/县',
            type: 'category',
            axisLine:{
                lineStyle:{
                    color: '#fff' 
                }
            },
            data: ['城阳区','黄岛区','即墨市','胶南市','胶州市','莱西市','李沧区','平度市','青岛市','市北区','市南区']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '占比',
            min: 0,
            max: 240,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine:{
                lineStyle:{
                    color: '#fff' 
                }
            }
        },
        {
            type: 'value',
            name: '占比',
            min: 0,
            max: 240,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name:'区/县',
            type:'bar',
            color:['purple'],
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4]
        },
        {
            name:'区/县',
            type:'bar',
            color:['purple'],
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0]
        },
        {
            name:'占比',
            type:'line',
            color:['yellow'],
            yAxisIndex: 1,
            data:[20, 22, 33, 45, 63, 102, 203, 234, 230, 165, 120]
        }
    ]
};
myChart5.setOption(option5);
/*区县结构折线图结束*/
/*环保技术结构*/
var myChart6 = echarts.init(document.getElementById('number_six'));
var option6 = {
    title: {
        text: '环保技术结构',
        textStyle:{
            color: '#fff' 
        },
        top:20,
        left:'left'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['大气污染防治','水污染防治','固体废弃物处理与综合利用','环境监测及环境生态保护','噪声及辐射污染防治','资源综合利用','海洋工程','其他'],
        textStyle:{
            color: '#fff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['大气污染','水污染','固体废弃物处理','环境监测','噪声及辐射','资源综合','其它'],
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        }  
    },
    yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        }  
    },
    series: [
        {
            name:'源IP地址',
            type:'line',
            stack: '总量',
            color:['skyblue'],
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'目的IP地址',
            type:'line',
            stack: '总量',
            color:['#00cc66'],
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'源端口',
            type:'line',
            color:['#ff9933'],
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'目的端口',
            type:'line',
            color:['#ff9933'],
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'来源接口',
            type:'line',
             color:['#2d6fa4'],
            stack: '总量',
            data:[820, 932, 820, 934, 820, 934, 850]
        },
        {
            name:'转发接口',
            type:'line',
            color:['#00459A'],
            stack: '总量',
            data:[820, 932, 820, 934, 820, 934, 850]
        },
        {
            name:'转发接口',
            type:'line',
            color:['#E3A886'],
            stack: '总量',
            data:[820, 932, 820, 934, 820, 934, 850]
        },
        {
            name:'转发接口',
            type:'line',
            stack: '总量',
            color:['#DDA0F7'],
            data:[820, 932, 820, 934, 820, 934, 850]
        }
    ]
};
myChart6.setOption(option6);
/*环保技术结构*/
var myChart7 = echarts.init(document.getElementById('number_seven'));
var option7 = {
    title: {
        text: '知识产权结构',
        subtext: '',
        textStyle:{
            color: '#fff' 
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['知识产权结构']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        min:0,
        max:300,
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        } 
    },
    yAxis: {
        type: 'category',
        data: ['计算机软件著作权','生物、医药新品种','集成电路布图设计专有权','未涉及知识产权','技术秘密','专利'],
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        } 
    },
    series: [
        {
            name: '知识产权结构',
            type: 'bar',
            color:['#DDA0F7'],
            data: [30, 50, 110, 150, 177, 270]
        }
    ]
};

myChart7.setOption(option7);
/*青岛买方结构中国地图*/
require.config({
    paths: {
        echarts: './js'
    }
});

// Step:4 require echarts and use it in the callback.
// Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径
require(
    [
        'echarts',
        'echarts/chart/map'
    ],
    function (ec) {
        // --- 地图 ---
        var myChart2 = ec.init(document.getElementById('number_two'));
        myChart2.setOption({
            title:{
                text:'Echarts案例',
                textStyle:{
                    color: '#fff' 
                },
                x:'center'
            },
            dataRange: {
                min : 0,
                max : 100,
                calculable : true,
                color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
                textStyle:{
                    color:'#fff'
                }
            },
            series : [
                {
                    name: '全国',
                    type: 'map',
                    roam: true,
                    hoverable: false,
                    mapType: 'china',
                    itemStyle:{
                        normal:{
                            borderColor:'rgba(100,149,237,1)',
                            borderWidth:0.5,
                            areaStyle:{
                                color: 'rgba(0,0,0,0)'
                            },
                            label:{show:true}
                        }
                    },
                    data:[],
                    markLine : {
                        smooth:true,
                        symbol: ['none', 'circle'],  
                        symbolSize : 1,
                        itemStyle : {
                            normal: {
                                color:'#fff',
                                borderWidth:1,
                                borderColor:'rgba(30,144,255,0.5)'
                            }
                        },
                        data : [
                        ],
                    },
                    geoCoord: {
                        '上海': [121.4648,31.2891],
                        '东莞': [113.8953,22.901],
                        '东营': [118.7073,37.5513],
                        '中山': [113.4229,22.478],
                        '临汾': [111.4783,36.1615],
                        '临沂': [118.3118,35.2936],
                        '丹东': [124.541,40.4242],
                        '丽水': [119.5642,28.1854],
                        '乌鲁木齐': [87.9236,43.5883],
                        '佛山': [112.8955,23.1097],
                        '保定': [115.0488,39.0948],
                        '兰州': [103.5901,36.3043],
                        '包头': [110.3467,41.4899],
                        '北京': [116.4551,40.2539],
                        '北海': [109.314,21.6211],
                        '南京': [118.8062,31.9208],
                        '南宁': [108.479,23.1152],
                        '南昌': [116.0046,28.6633],
                        '南通': [121.1023,32.1625],
                        '厦门': [118.1689,24.6478],
                        '台州': [121.1353,28.6688],
                        '合肥': [117.29,32.0581],
                        '呼和浩特': [111.4124,40.4901],
                        '咸阳': [108.4131,34.8706],
                        '哈尔滨': [127.9688,45.368],
                        '唐山': [118.4766,39.6826],
                        '嘉兴': [120.9155,30.6354],
                        '大同': [113.7854,39.8035],
                        '大连': [122.2229,39.4409],
                        '天津': [117.4219,39.4189],
                        '太原': [112.3352,37.9413],
                        '威海': [121.9482,37.1393],
                        '宁波': [121.5967,29.6466],
                        '宝鸡': [107.1826,34.3433],
                        '宿迁': [118.5535,33.7775],
                        '常州': [119.4543,31.5582],
                        '广州': [113.5107,23.2196],
                        '廊坊': [116.521,39.0509],
                        '延安': [109.1052,36.4252],
                        '张家口': [115.1477,40.8527],
                        '徐州': [117.5208,34.3268],
                        '德州': [116.6858,37.2107],
                        '惠州': [114.6204,23.1647],
                        '成都': [103.9526,30.7617],
                        '扬州': [119.4653,32.8162],
                        '承德': [117.5757,41.4075],
                        '拉萨': [91.1865,30.1465],
                        '无锡': [120.3442,31.5527],
                        '日照': [119.2786,35.5023],
                        '昆明': [102.9199,25.4663],
                        '杭州': [119.5313,29.8773],
                        '枣庄': [117.323,34.8926],
                        '柳州': [109.3799,24.9774],
                        '株洲': [113.5327,27.0319],
                        '武汉': [114.3896,30.6628],
                        '汕头': [117.1692,23.3405],
                        '江门': [112.6318,22.1484],
                        '沈阳': [123.1238,42.1216],
                        '沧州': [116.8286,38.2104],
                        '河源': [114.917,23.9722],
                        '泉州': [118.3228,25.1147],
                        '泰安': [117.0264,36.0516],
                        '泰州': [120.0586,32.5525],
                        '济南': [117.1582,36.8701],
                        '济宁': [116.8286,35.3375],
                        '海口': [110.3893,19.8516],
                        '淄博': [118.0371,36.6064],
                        '淮安': [118.927,33.4039],
                        '深圳': [114.5435,22.5439],
                        '清远': [112.9175,24.3292],
                        '温州': [120.498,27.8119],
                        '渭南': [109.7864,35.0299],
                        '湖州': [119.8608,30.7782],
                        '湘潭': [112.5439,27.7075],
                        '滨州': [117.8174,37.4963],
                        '潍坊': [119.0918,36.524],
                        '烟台': [120.7397,37.5128],
                        '玉溪': [101.9312,23.8898],
                        '珠海': [113.7305,22.1155],
                        '盐城': [120.2234,33.5577],
                        '盘锦': [121.9482,41.0449],
                        '石家庄': [114.4995,38.1006],
                        '福州': [119.4543,25.9222],
                        '秦皇岛': [119.2126,40.0232],
                        '绍兴': [120.564,29.7565],
                        '聊城': [115.9167,36.4032],
                        '肇庆': [112.1265,23.5822],
                        '舟山': [122.2559,30.2234],
                        '苏州': [120.6519,31.3989],
                        '莱芜': [117.6526,36.2714],
                        '菏泽': [115.6201,35.2057],
                        '营口': [122.4316,40.4297],
                        '葫芦岛': [120.1575,40.578],
                        '衡水': [115.8838,37.7161],
                        '衢州': [118.6853,28.8666],
                        '西宁': [101.4038,36.8207],
                        '西安': [109.1162,34.2004],
                        '贵阳': [106.6992,26.7682],
                        '连云港': [119.1248,34.552],
                        '邢台': [114.8071,37.2821],
                        '邯郸': [114.4775,36.535],
                        '郑州': [113.4668,34.6234],
                        '鄂尔多斯': [108.9734,39.2487],
                        '重庆': [107.7539,30.1904],
                        '金华': [120.0037,29.1028],
                        '铜川': [109.0393,35.1947],
                        '银川': [106.3586,38.1775],
                        '镇江': [119.4763,31.9702],
                        '长春': [125.8154,44.2584],
                        '长沙': [113.0823,28.2568],
                        '长治': [112.8625,36.4746],
                        '阳泉': [113.4778,38.0951],
                        '青岛': [120.4651,36.3373],
                        '韶关': [113.7964,24.7028]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            },
                            emphasis: {
                                label:{position:'top'}
                            }
                        },
                        label:{
                            normal:{
                                show:true
                            }
                        },
                        data : [
                            {name:'上海',value:95},
                            {name:'太原',value:90},
                            {name:'大连',value:80},
                            {name:'南宁',value:70},
                            {name:'南昌',value:60},
                            {name:'拉萨',value:50},
                            {name:'长春',value:40},
                            {name:'包头',value:30},
                            {name:'重庆',value:20},
                            {name:'常州',value:10}
                        ]
                    }
                },
                {
                    name: '青岛 Top10',
                    type: 'map',
                    mapType: 'china',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 100
                        },
                        itemStyle : {
                            normal: {
                                label:{show:false},
                                borderWidth:1,
                                lineStyle: {
                                    type: 'dashed',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'上海'}, {name:'青岛',value:95}],
                            [{name:'太原'}, {name:'青岛',value:85}],
                            [{name:'大连'}, {name:'青岛',value:80}],
                            [{name:'南宁'}, {name:'青岛',value:70}],
                            [{name:'南昌'}, {name:'青岛',value:60}],
                            [{name:'拉萨'}, {name:'青岛',value:50}],
                            [{name:'长春'}, {name:'青岛',value:40}],
                            [{name:'包头'}, {name:'青岛',value:30}],
                            [{name:'重庆'}, {name:'青岛',value:20}],
                            [{name:'常州'}, {name:'青岛',value:10}]
                        ]
                    },
                    markPoint : {
                        symbol:'arrow',
                        symbolSize : function (v){
                            return 0.1
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:true,
                                      position:'top',
                                      textStyle: {
                                                fontSize: 14
                                            }
                                      }
                            },
                            emphasis: {
                                label:{show:false}
                            }
                        },
                        data : [
                            {name:'上海',value:2314},
                            {name:'太原',value:636},
                            {name:'大连',value:1063},
                            {name:'南宁',value:450},
                            {name:'南昌',value:365},
                            {name:'拉萨',value:71},
                            {name:'长春',value:506},
                            {name:'包头',value:578},
                            {name:'重庆',value:1492},
                            {name:'常州',value:1913}
                        ]
                    }
                }
            ]
    });
});
/*青岛买方结构中国地图结束*/