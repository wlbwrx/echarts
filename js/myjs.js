//饼状数据图开始
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echarts_0'));
var option = {
    title : {
        text: '访问策略/地址转换策略日志',
        subtext: 'TRXLOG_AC',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['ID','SRC','DST','SPORT','DPORT','INDEV','OUTDEV']
    },
    series : [
        {
            name: ['日志信息'],
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            color:['#f02a46','#6112f1','#f11290','#17a9f5','#18ce36','#ece526','#ee450a'],
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
myChart.setOption(option);
myChart.on('click', function (params) {
    //alert(params.dataIndex);
    if (params.dataIndex === 3) {
            alert(option.series[0].data[3].value);
            // 点击到了 index 为 5 的 series 的 markPoint 上。
        }
    if (params.componentType === 'markPoint') {
        // 点击到了 markPoint 上
        if (params.dataIndex === 3) {
            alert(option.series[0].data[3].value);
            // 点击到了 index 为 5 的 series 的 markPoint 上。
        }
    }
    else if (params.componentType === 'series') {
        if (params.seriesType === 'graph') {
            if (params.dataType === 'edge') {
                // 点击到了 graph 的 edge（边）上。
            }
            else {
                // 点击到了 graph 的 node（节点）上。
            }
        }
    }

});
//饼状数据图结束
//柱状图开始
var myChart_1 = echarts.init(document.getElementById('echarts_1'));
var option1 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['上网动作','放行','拒绝','被记录','下载','病毒入侵','搜索','日志打印','日志数据','其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    		    //	color:['#f02a46','#6112f1','#f11290','#17a9f5','#18ce36','#ece526','#ee450a','#fff','#ccc'],
    series : [
        {
            name:'上网动作',
            type:'bar',
            color:['#f02a46'],
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'放行',
            type:'bar',
            stack: '广告',
            color:['#6112f1'],
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'拒绝',
            type:'bar',
            stack: '广告',
            color:['#f11290'],
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'被记录',
            type:'bar',
            stack: '广告',
            color:['#17a9f5'],
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'病毒入侵',
            type:'bar',
            olor:['#18ce36'],
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
        {
            name:'搜索引擎',
            type:'bar',
            barWidth : 5,
            color:['#ece526'],
            stack: '搜索引擎',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name:'日志打印',
            type:'bar',
            color:['#ee450a'],
            stack: '搜索引擎',
            data:[120, 132, 101, 134, 290, 230, 220]
        },
        {
            name:'日志数据',
            type:'bar',
            stack: '搜索引擎',
            color:['#0cf9f6'],
            data:[60, 72, 71, 74, 190, 130, 110]
        },
        {
            name:'其他',
            type:'bar',
            color:['#ccc'],
            stack: '搜索引擎',
            data:[62, 82, 91, 84, 109, 110, 120]  
        }
    ]
};
myChart_1.setOption(option1);
//柱状图结束
var myChart_2 = echarts.init(document.getElementById('echarts_2'));
//	color:['#f02a46','#6112f1','#f11290','#17a9f5','#18ce36','#ece526','#ee450a','#fff','#ccc'],
var option2 = {
    title: {
        text: '日志情况统计',
        left: 'left',
        top: 'bottom'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        orient: 'vertical',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['2016年','2015年','2014年','2013年','2012年']
    },
    calculable: true,
    series: [
        {
            name: '打印时间',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '50%',
            color:['#f02a46','#6112f1','#f11290','#17a9f5','#ece526'],
            data:[
                {value: 60, name:'2014年'},
                {value: 30, name:'2013年'},
                {value: 10, name:'2012年'},
                {value: 80, name:'2015年'},
                {value: 100, name:'2016年'}
            ]
        },
        {
            name: '生产时间',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '5%',
            sort: 'ascending',
            data:[
                {value: 60, name:'2014年'},
                {value: 30, name:'2013年'},
                {value: 10, name:'2012年'},
                {value: 80, name:'2015年'},
                {value: 100, name:'2016年'}
            ]
        },
        {
            name: '统计时间',
            type:'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '5%',
            label: {
                normal: {
                    position: 'left'
                }
            },
            data:[
                {value: 60, name:'2014年'},
                {value: 30, name:'2013年'},
                {value: 10, name:'2012年'},
                {value: 80, name:'2015年'},
                {value: 100, name:'2016年'}
            ]
        },
        {
            name: '金字塔',
            type:'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '50%',
            sort: 'ascending',
            label: {
                normal: {
                    position: 'left'
                }
            },
            data:[
                {value: 60, name:'2014年'},
                {value: 30, name:'2013年'},
                {value: 10, name:'2012年'},
                {value: 80, name:'2015年'},
                {value: 100, name:'2016年'}
            ]
        }
    ]
};

myChart_2.setOption(option2);