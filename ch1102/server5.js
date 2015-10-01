var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

// 서버
var app = express();

// request 파서
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 정적인 파일 경로 public
app.use(express.static(path.join(__dirname, 'public')));


// 루트 경로 처리
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/webform5.html');
});
app.post('/register', function(req, res) {
    var message = {};
    message.name = req.param('name');
    message.email = req.param('email');
    message.msg = req.param('msg');
    res.send(JSON.stringify(message));
});

// 포트 지정
app.set('port', process.env.PORT || 3000);
// 서버 시작
app.listen(app.get('port'), function() {
    console.log('Server running at http://127.0.0.1:' + app.get('port'));
});
