// const http = require('http')


// http.createServer(function(req, res) {
//   // 设置HTTP状态值为200，内容类型为text/plain
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   // 发送响应数据
//   res.end('hello world');
// }).listen(8888);

// console.log('Server running at http://localhost:8888/');

const osMonitor = require('./osMonitor');

osMonitor();