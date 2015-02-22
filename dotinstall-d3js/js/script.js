var dataset = [12, 14, 12, 34, 24];

var w = 500;
var h = 200;

var svg = d3.select('body').append('svg').attr({ width: w, height: h});

svg.selectAll('circle')
	.data(dataset)
	.enter()
	.append('circle')
	.on('mouseover', function(d) {
		d3.select(this).attr('fill', 'orange');
	})
	.on('mouseout', function(d) {
		d3.select(this).attr('fill', 'red');
	})
	.on('click', function(d) {
		var rs = d3.select(this).attr('r');
		alert(rs);
	})
	.attr({
		cx: function (d, i) { return 50 + (i * 100); },
		cy: h / 2,
		r: function(d) { return d; },
		fill: 'red'
	});

var p = d3.select('body').selectAll('p');

// data binding
var update = p.data(dataset);
var enter = update.enter();
var exit = update.exit();

update.text(function(d) {
	return "update:" + d;
});

enter.append('p').text(function(d) {
	return "enter:" + d;
});

exit.style('color', 'red');

