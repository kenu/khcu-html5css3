var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
    var path = '.' + req.url;
    if (path == './') {
        path = './webform3.html';
    }
    var type = 'text/html; charset=utf-8';

    if (path.match(".css")) {
        type = 'text/css';
    }
    if (path == './register') {
        var fullBody = '';

        req.on('data', function (chunk) {
            fullBody += chunk.toString();
        });
        req.on('end', function () {
            res.writeHead(200, {
                'Content-Type': type
            });
            res.end('body:' + fullBody);
        });
        return;
    }
    fs.readFile(path, function (error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        } else {
            res.writeHead(200, {
                'Content-Type': type
            });
            res.end(content, 'utf-8');
        }
    });

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');