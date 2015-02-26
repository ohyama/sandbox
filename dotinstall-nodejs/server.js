var http = require('http'),
	fs = require('fs'),
	ejs = require('ejs');
var settings = require('./settings');
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');
var n = 0;
var server = http.createServer();
server.on('request', function(req, res) {
	n++;
	var data = ejs.render(template, {
		title: 'Hello',
		content: '<strong>world!</strong>',
		n: n
	});
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	res.end();
});
server.listen(settings.port, settings.host);
console.log('Server linstening');
