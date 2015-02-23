google.load('visualization', '1.0', {packages : ['corechart']});
google.setOnLoadCallback(drawChart);

function drawChart() {
	var data = new google.visualization.DataTable();
	
	data.addColumn('string', '年');
	data.addColumn('number', '売上');
	data.addColumn('number', '利益');
	
	data.addRows([
		['2000', 500, 300],
		['2001', 600, 500],
		['2002', 800, 200],
		['2003', 300, 400],
		['2004', 200, 100],
	]);

	var options = {
		title: '業績',
		width: 500,
		height: 500,
		pieSliceText: 'label', 
		isStacked: true
	}

	var chart = new google.visualization.BarChart(document.getElementById('chart'));

	chart.draw(data, options);
}
