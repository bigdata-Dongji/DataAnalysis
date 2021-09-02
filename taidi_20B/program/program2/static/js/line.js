var myChart=echarts.init(document.getElementById('line'));
var data = [36, 26, 260, 480,40];

option = {
backgroundColor: '#394056',
title:{
		text:'招聘发布状况',
		textStyle:{
			color:'white'
		}
	},tip: {
	trigger: 'axis',
	axisPointer: {
		lineStyle: {
			color: '#57617B'
		}
	}
},
// legend: {
//     icon: 'rect',
//     itemWidth: 14,//图例宽度
//     itemHeight: 5,
//     itemGap: 13,//空隙
//     data: ['差', '稍差', '持平','稍好','好'],
//     right: '4%',
//     textStyle: {
//         fontSize: 12,
//         color: '#F1F1F3'
//     }
// },
grid: {
	left: '3%',
	right: '4%',
	bottom: '3%',
	containLabel: true
},
xAxis: [{
	type: 'category',
	boundaryGap: false,
	axisLine: {
		lineStyle: {
			color: 'white'
		}
	},
	data: ['t_2020-09-08', 't_2020-09-10', 't_2020-09-12', 't_2020-09-14', 't_2020-09-16']
}],
yAxis: [{
	type: 'value',
	name: '比例（%）',
	axisTick: {
		show: false
	},
	axisLine: {
		lineStyle: {
			color: 'white'
		}
	},
	axisLabel: {
		margin: 10,
		textStyle: {
			fontSize: 14
		}
	},
	splitLine: {
		lineStyle: {
			color: '#57617B'
		}
	}
}],
series: [ {
	name: '数量',
	type: 'line',
	smooth: true,
	symbol: 'circle',
	symbolSize: 5,
	showSymbol: false,
	lineStyle: {
		normal: {
			width: 1
		}
	},
	areaStyle: {
		normal: {
			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				offset: 0,
				color: 'rgba(0,235,238, 0.3)'
			}, {
				offset: 0.8,
				color: 'rgba(0,235,238, 0)'
			}], false),
			shadowColor: 'rgba(0, 0, 0, 0.1)',
			shadowBlur: 10
		}
	},
	itemStyle: {
		normal: {

			color: 'rgb(0,235,238)',
			borderColor: 'rgba(0,235,238,0.2)',
			borderWidth: 12
		}
	},
	data: data
}]
};
myChart.setOption(option);