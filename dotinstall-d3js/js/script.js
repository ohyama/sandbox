var dataset = [12, 14, 12, 34, 24];

var w = 500;
var h = 200;

var svg = d3.select('body').append('svg').attr({ width: w, height: h});

svg.selectAll('rect')
	.data(dataset)
	.enter()
	.append('rect')
	.on('mouseover', function(d) {
		d3.select(this).attr('fill', 'orange');
	})
	.on('mouseout', function(d) {
		d3.select(this).attr('fill', 'red');
	})
	.on('click', function(d) {
		var rs = d3.select(this).attr('width');
		alert(rs);
	})
	.attr({
		x: 0,
		y: function(d, i) { return i * 25 },
		width: function(d) { return d; },
		height: 20,
		fill: 'red'
	});

