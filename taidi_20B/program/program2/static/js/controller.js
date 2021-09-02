

function gettime() {
			$.ajax({
				url: "/time",
				timeout: 10000, //超时时间设置为10秒；
				success: function(data) {
					$("#time").html(data)
				},
				error: function(xhr, type, errorThrown) {
		
				}
			});
		}



// function get_pie_data(){
// 	$.ajax({
// 		url: "/pie",
// 		success: function(data) {
// 			pieSeriesOption[0].data=data.data
// 			pie_chart.setOption(optionPie)
// 		},
// 		error: function(xhr, type, errorThrown) {
			
// 		}
// 	});
// }


gettime()
// get_pie_data() 

setInterval(gettime,1000)