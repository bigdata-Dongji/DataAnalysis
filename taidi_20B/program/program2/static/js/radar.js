var myChart=echarts.init(document.getElementById('radar'));

var color = "#189cbb";
	var scale = 1;
	var attackFlaw = [

		{
			text: 'sql',
			max: 10000
		},
		{
			text: 'java',
			max: 10000
		},
		{
			text: 'spark',
			max: 10000
		},
		{
			text: 'linux',
			max: 20000
		},
		{
			text: 'hadoop',
			max: 10000
		},
	];
	
	var student = [1038, 6844, 4045, 4080, 9143];
	option = {
	    // backgroundColor:"#013954",
		title:{
			text:'企业需求能力指数',
			textStyle:{
				color:'white'
			}
		},
		tooltip:{},
		radar: [{
			indicator: attackFlaw,
			center: ['50%', '60%'],
			radius: '68%',
			
			name: {
				color:'#ecc03e',
				fontSize:18
			},
			splitLine: {
				lineStyle: {
					color: '#5b9ea5',
					opacity: 1,
					width: 1
				},
			},
			splitArea: {
				show: true,
				areaStyle: {
					color: 'rgb(19,98,137)',
					opacity: 0.4
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#189cbb',
					type: "dashed",
				}
			}
		}, ],

		series: [{
			type: 'radar',
			data: [{
				value: student,
				name: '能力需求指数'
			}],
			symbolSize: 3,
			itemStyle: {
				normal: {
					borderColor: 'rgb(221,255,143)',
					opacity: 0.5,
					borderWidth: 2,
				}
			},
			lineStyle: {
				normal: {
					color: "#ffde00",
					width: 1
				}
			},
			areaStyle: {
				normal: {
					color: '#b2ff00',
					opacity: 0.9
				}
			}
		}]
	};
	
myChart.setOption(option);