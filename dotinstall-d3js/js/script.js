var dataset = [12, 24, 36, 48];
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

