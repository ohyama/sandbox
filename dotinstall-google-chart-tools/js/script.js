google.load('visualization', '1.0', {packages : ['corechart']});
google.setOnLoadCallback(drawChart);

function drawChart() {
	var data = new google.visualization.DataTable();
	
	data.addColumn('string', '活動');
	data.addColumn('number', '時間');
	
	data.addRows([
		['睡眠', 8],
		['活動', 12],
		['ネット', 4]
	]);

	var options = {
		title: '1日の内訳',
		width: 500,
		height: 500,
		pieSliceText: 'label', 
		is3D: true
	}

	var chart = new google.visualization.PieChart(document.getElementById('chart'));

	chart.draw(data, options);
}
