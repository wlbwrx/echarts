var myChart0 = echarts.init(document.getElementById('ybPan'));
var myChart1 = echarts.init(document.getElementById('bzTu'));
var myChart2 = echarts.init(document.getElementById('zzTu'));
// var myChart3 = echarts.init(document.getElementById('wordMap'));
var myChart4 = echarts.init(document.getElementById('ldTu'));
var myChart5 = echarts.init(document.getElementById('zsTu'));
var myChart6 = echarts.init(document.getElementById('zxTu'));
//仪表盘瞬间点击次数
var option0 = {
    title:{
        text:'瞬间点击数',
        textStyle:{
            'color':'#fff'
        }
    },
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: ''}],
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                    width: 3,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :15,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :25,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {           // 分隔线
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'normal',
                    fontSize:12,
                    fontStyle: 'normal',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
                //backgroundColor: 'rgba(30,144,255,0.8)',
                width:"85%",
                height:"40%",
                //borderWidth: 1,
                //borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'normal',
                    color: '#fff'
                }
            },
        }
    ]
};
var app = {};
app.timeTicket = setInterval(function () {
    option0.series[0].data[0].value = parseInt((Math.random() * 100).toFixed(2) - 0);
    myChart0.setOption(option0, true);
},2000);
myChart0.setOption(option0);
//仪表盘瞬间点击次数结束

//饼状图
var option1 = {
    title : {
        text: '日志输出字段',
        subtext: 'TRXLOG_AC',
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
        data: ['ID','SRC','DST','SPORT','DPORT','INDEV','OUTDEV']
    },
    series : [
        {
            name: ['日志信息'],
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
        	color:['#f02a46','#6112f1','#f11290','red','#18ce36','#ece526','#ee450a'],
            data:[
                {value:100, name:'ID'},
                {value:100, name:'SRC'},
                {value:100, name:'DST'},
                {value:100, name:'SPORT'},
                {value:100, name:'DPORT'},
                {value:100, name:'INDEV'},
                {value:100, name:'OUTDEV'}
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
myChart1.setOption(option1);
//饼状图结束

//柱状图金字塔结构
var option2 = {
    title: {
        text: '地区访问次数',
        subtext: '数据来自网络',
        textStyle:{
        	'color' : '#fff'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2014年', '2015年','2016年'],
        textStyle:{
        	'color':'#fff'
        },
        top:'5%',
        left:'30%'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLine:{
        	lineStyle:{
        		color:'#fff'
        	}
        },
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        axisLine:{
        	lineStyle:{
        		color:'#fff'
        	}
        },
        data: ['法国','英国','美国','德国','中国','总计访问次数']
    },
    series: [
        {
            name: '2014年',
            type: 'bar',
            color:['#ee450a'],
            data: [105000, 205000, 250000, 268000, 331744, 630230]
        },
        {
            name: '2015年',
            type: 'bar',
            color:['#17a9f5'],
            data: [205000, 305000, 450000, 568000, 431744,600230]
        },
        {
            name: '2016年',
            type: 'bar',
            color:['#6112f1'],
            data: [255000, 285000, 390000, 185000, 540230, 191807]
        }
    ]
};
myChart2.setOption(option2);
//柱状图金字塔结构结束
//中间世界地图
var dom = document.getElementById("wordMap10");
var myChart10 = echarts.init(dom);
var app = {};
option10 = null;
option10 = {
    title : {
        text: '日志分布图',
        subtext: '',
        sublink : 'http://esa.un.org/wpp/Excel-Data/population.htm',
        left: 'left',
        top:10,
        textStyle:{
        	color:'#fff'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter : function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                    + '.' + value[1];
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
    },
    toolbox: {
        show : true,
        orient : 'vertical',
        left: 'right',
        top: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    visualMap: {
        type: 'continuous',
        min: 0,
        max: 1000000,
        text:['High','Low'],
        realtime: false,
        calculable : true,
        color: ['orangered','lightskyblue','lightskyblue']
    },
    series : [
        {
            name: 'World Population (2016)',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle:{
                emphasis:{label:{show:true}}
            },
            data:[
                {name : '阿富汗', value : 28397.812},
                {name : '安哥拉', value : 19549.124},
                {name : '阿尔巴尼亚', value : 3150.143},
                {name : 'United Arab Emirates', value : 8441.537},
                {name : 'Argentina', value : 40374.224},
                {name : 'Armenia', value : 2963.496},
                {name : '法国', value : 268.065},
                {name : '澳大利亚', value : 22404.488},
                {name : '奥地利', value : 8401.924},
                {name : '阿塞拜疆', value : 9094.718},
                {name : 'Burundi', value : 9232.753},
                {name : 'Belgium', value : 10941.288},
                {name : 'Benin', value : 9509.798},
                {name : 'Burkina Faso', value : 15540.284},
                {name : 'Bangladesh', value : 151125.475},
                {name : 'Bulgaria', value : 7389.175},
                {name : 'The Bahamas', value : 66402.316},
                {name : 'Bosnia and Herzegovina', value : 3845.929},
                {name : 'Belarus', value : 9491.07},
                {name : 'Belize', value : 308.595},
                {name : 'Bermuda', value : 64.951},
                {name : 'Bolivia', value : 716.939},
                {name : 'Brazil', value : 195210.154},
                {name : 'Brunei', value : 27.223},
                {name : 'Bhutan', value : 716.939},
                {name : 'Botswana', value : 1969.341},
                {name : 'Central African Republic', value : 4349.921},
                {name : 'Canada', value : 34126.24},
                {name : 'Switzerland', value : 7830.534},
                {name : 'Chile', value : 17150.76},
                {name : 'China', value : 1359821.465},
                {name : 'Ivory Coast', value : 60508.978},
                {name : 'Cameroon', value : 20624.343},
                {name : 'Democratic Republic of the Congo', value : 62191.161},
                {name : 'Republic of the Congo', value : 3573.024},
                {name : 'Colombia', value : 46444.798},
                {name : 'Costa Rica', value : 4669.685},
                {name : 'Cuba', value : 11281.768},
                {name : 'Northern Cyprus', value : 1.468},
                {name : 'Cyprus', value : 1103.685},
                {name : 'Czech Republic', value : 10553.701},
                {name : 'Germany', value : 83017.404},
                {name : 'Djibouti', value : 834.036},
                {name : 'Denmark', value : 5550.959},
                {name : 'Dominican Republic', value : 10016.797},
                {name : 'Algeria', value : 37062.82},
                {name : 'Ecuador', value : 15001.072},
                {name : 'Egypt', value : 78075.705},
                {name : 'Eritrea', value : 5741.159},
                {name : 'Spain', value : 46182.038},
                {name : 'Estonia', value : 1298.533},
                {name : 'Ethiopia', value : 87095.281},
                {name : 'Finland', value : 5367.693},
                {name : 'Fiji', value : 860.559},
                {name : 'Falkland Islands', value : 49.581},
                {name : 'France', value : 63230.866},
                {name : 'Gabon', value : 1556.222},
                {name : 'United Kingdom', value : 62066.35},
                {name : 'Georgia', value : 4388.674},
                {name : 'Ghana', value : 24262.901},
                {name : 'Guinea', value : 10876.033},
                {name : 'Gambia', value : 1680.64},
                {name : 'Guinea Bissau', value : 10876.033},
                {name : 'Equatorial Guinea', value : 696.167},
                {name : 'Greece', value : 11109.999},
                {name : 'Greenland', value : 56.546},
                {name : 'Guatemala', value : 14341.576},
                {name : 'French Guiana', value : 231.169},
                {name : 'Guyana', value : 786.126},
                {name : 'Honduras', value : 7621.204},
                {name : 'Croatia', value : 4338.027},
                {name : 'Haiti', value : 9896.4},
                {name : 'Hungary', value : 10014.633},
                {name : 'Indonesia', value : 240676.485},
                {name : '意大利', value : 1205624.648},
                {name : 'Ireland', value : 4467.561},
                {name : 'Iran', value : 240676.485},
                {name : 'Iraq', value : 30962.38},
                {name : 'Iceland', value : 318.042},
                {name : 'Israel', value : 7420.368},
                {name : 'Italy', value : 60508.978},
                {name : 'Jamaica', value : 2741.485},
                {name : 'Jordan', value : 6454.554},
                {name : 'Japan', value : 127352.833},
                {name : 'Kazakhstan', value : 15921.127},
                {name : 'Kenya', value : 40909.194},
                {name : 'Kyrgyzstan', value : 5334.223},
                {name : 'Cambodia', value : 14364.931},
                {name : 'South Korea', value : 51452.352},
                {name : 'Kosovo', value : 97.743},
                {name : 'Kuwait', value : 2991.58},
                {name : 'Laos', value : 6395.713},
                {name : 'Lebanon', value : 4341.092},
                {name : 'Liberia', value : 3957.99},
                {name : 'Libya', value : 6040.612},
                {name : 'Sri Lanka', value : 20758.779},
                {name : 'Lesotho', value : 2008.921},
                {name : 'Lithuania', value : 3068.457},
                {name : 'Luxembourg', value : 507.885},
                {name : 'Latvia', value : 2090.519},
                {name : 'Morocco', value : 31642.36},
                {name : 'Moldova', value : 103.619},
                {name : 'Madagascar', value : 21079.532},
                {name : 'Mexico', value : 117886.404},
                {name : 'Macedonia', value : 507.885},
                {name : 'Mali', value : 13985.961},
                {name : 'Myanmar', value : 51931.231},
                {name : 'Montenegro', value : 620.078},
                {name : 'Mongolia', value : 2712.738},
                {name : 'Mozambique', value : 23967.265},
                {name : 'Mauritania', value : 3609.42},
                {name : 'Malawi', value : 15013.694},
                {name : 'Malaysia', value : 28275.835},
                {name : 'Namibia', value : 2178.967},
                {name : 'New Caledonia', value : 246.379},
                {name : 'Niger', value : 15893.746},
                {name : 'Nigeria', value : 159707.78},
                {name : 'Nicaragua', value : 5822.209},
                {name : 'Netherlands', value : 16615.243},
                {name : 'Norway', value : 4891.251},
                {name : 'Nepal', value : 26846.016},
                {name : 'New Zealand', value : 4368.136},
                {name : 'Oman', value : 2802.768},
                {name : 'Pakistan', value : 173149.306},
                {name : 'Panama', value : 3678.128},
                {name : 'Peru', value : 29262.83},
                {name : 'Philippines', value : 93444.322},
                {name : 'Papua New Guinea', value : 6858.945},
                {name : 'Poland', value : 38198.754},
                {name : 'Puerto Rico', value : 3709.671},
                {name : 'North Korea', value : 1.468},
                {name : 'Portugal', value : 10589.792},
                {name : 'Paraguay', value : 6459.721},
                {name : 'Qatar', value : 1749.713},
                {name : 'Romania', value : 21861.476},
                {name : 'Russia', value : 21861.476},
                {name : 'Rwanda', value : 10836.732},
                {name : 'Western Sahara', value : 514.648},
                {name : 'Saudi Arabia', value : 27258.387},
                {name : 'Sudan', value : 35652.002},
                {name : 'South Sudan', value : 9940.929},
                {name : 'Senegal', value : 12950.564},
                {name : 'Solomon Islands', value : 526.447},
                {name : 'Sierra Leone', value : 5751.976},
                {name : 'El Salvador', value : 6218.195},
                {name : 'Somaliland', value : 9636.173},
                {name : 'Somalia', value : 9636.173},
                {name : 'Republic of Serbia', value : 3573.024},
                {name : 'Suriname', value : 524.96},
                {name : 'Slovakia', value : 5433.437},
                {name : 'Slovenia', value : 2054.232},
                {name : 'Sweden', value : 9382.297},
                {name : 'Swaziland', value : 1193.148},
                {name : 'Syria', value : 7830.534},
                {name : 'Chad', value : 11720.781},
                {name : 'Togo', value : 6306.014},
                {name : 'Thailand', value : 66402.316},
                {name : 'Tajikistan', value : 7627.326},
                {name : 'Turkmenistan', value : 5041.995},
                {name : 'East Timor', value : 10016.797},
                {name : 'Trinidad and Tobago', value : 1328.095},
                {name : 'Tunisia', value : 10631.83},
                {name : 'Turkey', value : 72137.546},
                {name : 'United Republic of Tanzania', value : 44973.33},
                {name : 'Uganda', value : 33987.213},
                {name : 'Ukraine', value : 46050.22},
                {name : 'Uruguay', value : 3371.982},
                {name : 'United States of America', value : 312247.116},
                {name : 'Uzbekistan', value : 27769.27},
                {name : 'Venezuela', value : 236.299},
                {name : 'Vietnam', value : 89047.397},
                {name : 'Vanuatu', value : 236.299},
                {name : 'West Bank', value : 13.565},
                {name : 'Yemen', value : 22763.008},
                {name : 'South Africa', value : 51452.352},
                {name : 'Zambia', value : 13216.985},
                {name : 'Zimbabwe', value : 13076.978}
            ]
        }
    ]
};
;
if (option10 && typeof option10 === "object") {
    myChart10.setOption(option10, true);
    myChart10.on('click', function (params) {
        //alert(params.dataIndex);
        if (params.dataIndex === 30) {
            //alert(option10.series[0].data[31].value);
            // 点击到了 index 为 5 的 series 的 markPoint 上。
            $('#wordMap1').css({
                'opacity' : 0,
                'z-index' : 9
            });
            $('#wordMap').css({
                'opacity' : 1,
                'z-index' : 10
            });
            $('.buttonMap').stop(true).fadeIn(300);
        }else{

        }
    });
}
$('.buttonMap').click(function(){
    $('#wordMap1').css({
        'opacity' : 1,
        'z-index' : 10
    });
    $('#wordMap').css({
        'opacity' : 0,
        'z-index' : 9
    });
    $('.buttonMap').stop(true).fadeOut(300);
});

// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
var myChart11 = echarts.init(document.getElementById('wordMap11'));
var dataBJ = [
    [1,55,9,56,0.46,18,6,"正常"],
    [2,25,11,21,0.65,34,9,"良好"],
    [3,56,7,63,0.3,14,5,"正常"],
    [4,33,7,29,0.33,16,6,"良好"],
    [5,42,24,44,0.76,40,16,"良好"],
    [6,82,58,90,1.77,68,33,"正常"],
    [7,74,49,77,1.46,48,27,"正常"],
    [8,78,55,80,1.29,59,29,"正常"],
    [9,267,216,280,4.8,108,64,"红色预警"],
    [10,185,127,216,2.52,61,27,"橙色预警"],
    [11,39,19,38,0.57,31,15,"良好"],
    [12,41,11,40,0.43,21,7,"良好"],
    [13,64,38,74,1.04,46,22,"正常"],
    [14,108,79,120,1.7,75,41,"黄色预警"],
    [15,108,63,116,1.48,44,26,"黄色预警"],
    [16,33,6,29,0.34,13,5,"良好"],
    [17,94,66,110,1.54,62,31,"正常"],
    [18,186,142,192,3.88,93,79,"橙色预警"],
    [19,57,31,54,0.96,32,14,"正常"],
    [20,22,8,17,0.48,23,10,"良好"],
    [21,39,15,36,0.61,29,13,"良好"],
    [22,94,69,114,2.08,73,39,"正常"],
    [23,99,73,110,2.43,76,48,"正常"],
    [24,31,12,30,0.5,32,16,"良好"],
    [25,42,27,43,1,53,22,"良好"],
    [26,154,117,157,3.05,92,58,"橙色预警"],
    [27,234,185,230,4.09,123,69,"红色预警"],
    [28,160,120,186,2.77,91,50,"橙色预警"],
    [29,134,96,165,2.76,83,41,"黄色预警"],
    [30,52,24,60,1.03,50,21,"正常"],
    [31,46,5,49,0.28,10,6,"良好"]
];

var dataGZ = [
    [1,26,37,27,1.163,27,13,"良好"],
    [2,85,62,71,1.195,60,8,"正常"],
    [3,78,38,74,1.363,37,7,"正常"],
    [4,21,21,36,0.634,40,9,"良好"],
    [5,41,42,46,0.915,81,13,"良好"],
    [6,56,52,69,1.067,92,16,"正常"],
    [7,64,30,28,0.924,51,2,"正常"],
    [8,55,48,74,1.236,75,26,"正常"],
    [9,76,85,113,1.237,114,27,"正常"],
    [10,91,81,104,1.041,56,40,"正常"],
    [11,84,39,60,0.964,25,11,"正常"],
    [12,64,51,101,0.862,58,23,"正常"],
    [13,70,69,120,1.198,65,36,"正常"],
    [14,77,105,178,2.549,64,16,"正常"],
    [15,109,68,87,0.996,74,29,"黄色预警"],
    [16,73,68,97,0.905,51,34,"正常"],
    [17,54,27,47,0.592,53,12,"正常"],
    [18,51,61,97,0.811,65,19,"正常"],
    [19,91,71,121,1.374,43,18,"正常"],
    [20,73,102,182,2.787,44,19,"正常"],
    [21,73,50,76,0.717,31,20,"正常"],
    [22,84,94,140,2.238,68,18,"正常"],
    [23,93,77,104,1.165,53,7,"正常"],
    [24,99,130,227,3.97,55,15,"正常"],
    [25,146,84,139,1.094,40,17,"黄色预警"],
    [26,113,108,137,1.481,48,15,"黄色预警"],
    [27,81,48,62,1.619,26,3,"正常"],
    [28,56,48,68,1.336,37,9,"正常"],
    [29,82,92,174,3.29,0,13,"正常"],
    [30,106,116,188,3.628,101,16,"黄色预警"],
    [31,118,50,0,1.383,76,11,"黄色预警"]
];

var dataSH = [
    [1,91,45,125,0.82,34,23,"正常"],
    [2,65,27,78,0.86,45,29,"正常"],
    [3,83,60,84,1.09,73,27,"正常"],
    [4,109,81,121,1.28,68,51,"黄色预警"],
    [5,106,77,114,1.07,55,51,"黄色预警"],
    [6,109,81,121,1.28,68,51,"黄色预警"],
    [7,106,77,114,1.07,55,51,"黄色预警"],
    [8,89,65,78,0.86,51,26,"正常"],
    [9,53,33,47,0.64,50,17,"正常"],
    [10,80,55,80,1.01,75,24,"正常"],
    [11,117,81,124,1.03,45,24,"黄色预警"],
    [12,99,71,142,1.1,62,42,"正常"],
    [13,95,69,130,1.28,74,50,"正常"],
    [14,116,87,131,1.47,84,40,"黄色预警"],
    [15,108,80,121,1.3,85,37,"黄色预警"],
    [16,134,83,167,1.16,57,43,"黄色预警"],
    [17,79,43,107,1.05,59,37,"正常"],
    [18,71,46,89,0.86,64,25,"正常"],
    [19,97,71,113,1.17,88,31,"正常"],
    [20,84,57,91,0.85,55,31,"正常"],
    [21,87,63,101,0.9,56,41,"正常"],
    [22,104,77,119,1.09,73,48,"黄色预警"],
    [23,87,62,100,1,72,28,"正常"],
    [24,168,128,172,1.49,97,56,"橙色预警"],
    [25,65,45,51,0.74,39,17,"正常"],
    [26,39,24,38,0.61,47,17,"良好"],
    [27,39,24,39,0.59,50,19,"良好"],
    [28,93,68,96,1.05,79,29,"正常"],
    [29,188,143,197,1.66,99,51,"橙色预警"],
    [30,174,131,174,1.55,108,50,"橙色预警"],
    [31,187,143,201,1.39,89,53,"橙色预警"]
];

var schema = [
    {name: 'date', index: 0, text: '2015-8-29'},
    {name: 'AQIindex', index: 1, text: '2015-8-30'},
    {name: 'PM25', index: 2, text: '2015-8-31'},
    {name: 'PM10', index: 3, text: '2015-9-01'},
    {name: 'CO', index: 4, text: ' 2015-9-02'},
    {name: 'NO2', index: 5, text: '2015-9-03'},
    {name: 'SO2', index: 6, text: '2015-9-04'},
    {name: '等级', index: 7, text: '预警等级'}
];

var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

option11 = {
    title:{
    	text: '一周日志接收状况预警图',
    	x:'center',
    	textStyle:{
        	color:'#fff'
        }
    },
    legend: {
        bottom: 30,
        data: ['北京', '上海', '西安'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj[0].value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj[0].seriesName + ' ' + value[0] + '日期：'
                + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>'
                + schema[4].text + '：' + value[4] + '<br>'
                + schema[5].text + '：' + value[5] + '<br>'
                + schema[6].text + '：' + value[6] + '<br>';
        }
    },
    // dataZoom: {
    //     show: true,
    //     orient: 'vertical',
    //     parallelAxisIndex: [0]
    // },
    parallelAxis: [
        {dim: 0, name: schema[0].text, inverse: true, max: 31, nameLocation: 'start'},
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},
        {dim: 3, name: schema[3].text},
        {dim: 4, name: schema[4].text},
        {dim: 5, name: schema[5].text},
        {dim: 6, name: schema[6].text},
        {dim: 7, name: schema[7].text,
        type: 'category', data: ['良好', '正常', '黄色预警', '橙色预警', '红色预警', '不正常(错误)']}
    ],
    visualMap: {
        show: true,
        min: 0,
        max: 150,
        dimension: 2,
        inRange: {
            color: ['#d94e5d','#eac736','#50a3ba'].reverse(),
            // colorAlpha: [0, 1]
        }
    },
    parallel: {
        left: '5%',
        right: '18%',
        bottom: 100,
        parallelAxisDefault: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#777'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        }
    },
    series: [
        {
            name: '北京',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataBJ
        },
        {
            name: '上海',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataSH
        },
        {
            name: '西安',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataGZ
        }
    ]
};
myChart11.setOption(option11);
//中间世界地图结束
//中间中国地图
require.config({
    paths: {
        echarts: 'js/echarts.js'
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
        var myChart3 = ec.init(document.getElementById('wordMap'));
        myChart3.setOption({
			dataRange: {
				min : 0,
				max : 100,
				calculable : true,
				color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
				textStyle:{
					color:'#fff'
				}
			},
            toolbox: {
                show:true,
                feature: {
                    mark : {show: false},
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
								color: '#1b1b1b'
							}
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
						data : [
							{name:'上海',value:95},
							{name:'广州',value:90},
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
					name: '北京 Top10',
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
							shadowBlur: 10
						},
						itemStyle : {
							normal: {
								label:{show:false},
								borderWidth:1,
								lineStyle: {
									type: 'solid',
									shadowBlur: 10
								}
							}
						},
						data : [
							[{name:'上海'}, {name:'北京',value:95}],
							[{name:'广州'}, {name:'北京',value:90}],
							[{name:'大连'}, {name:'北京',value:80}],
							[{name:'南宁'}, {name:'北京',value:70}],
							[{name:'南昌'}, {name:'北京',value:60}],
							[{name:'拉萨'}, {name:'北京',value:50}],
							[{name:'长春'}, {name:'北京',value:40}],
							[{name:'包头'}, {name:'北京',value:30}],
							[{name:'重庆'}, {name:'北京',value:20}],
							[{name:'常州'}, {name:'北京',value:10}]
						]
					},
					markPoint : {
						symbol:'emptyCircle',
						symbolSize : function (v){
							return 0.1
						},
						effect : {
							show: false,
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
							{name:'上海',value:95},
							{name:'广州',value:90},
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
				}
			]
    });
});
//中间中国地图结束
//上网动作雷达图

//上网动作雷达图结束
