var dataset = [12, 14, 12, 34, 24];

var w = 500;
var h = 200;
var padding = 20;

var xScale = d3.scale.linear()
				.domain([0, d3.max(dataset)])
				.range([padding, w - padding])
				.nice();

var svg = d3.select('body').append('svg').attr({ width: w, height: h});

var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient('bottom');

svg.append("g")
	.attr({
		class: 'axis',
		transform: "translate(0, 180)"
	})
	.call(xAxis);

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
		x: padding,
		y: function(d, i) { return i * 25 },
		width: function(d) { return xScale(d); },
		height: 20,
		fill: 'red'
	});

