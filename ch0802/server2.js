var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
    var path = '.' + req.url;
    console.log(path);
    if (path == './') {
        path = './webform3.html';
    }
    var type = 'text/html';
    if (path.match(".css")) {
        type = 'text/css';
    }
    fs.readFile(path, function (error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': type});
            res.end(content, 'utf-8');
        }
    });

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');