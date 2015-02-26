var http = require('http'),
	fs   = require('fs');
var settings = require('./settings');

var msg ='';
var server = http.createServer();
server.on('request', function(req, res) {
	
	fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.write('404 not found.');
			res.end();
			return res.end();
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});
server.listen(settings.port, settings.host);
console.log('Server linstening');
