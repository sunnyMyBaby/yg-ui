const http = require('http')
var fs = require('fs'); // 载入fs模块
fs.readFile('./dist/index.html', function(err, data) {
  // console.log(html);
  const html = data.toString();
  http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(html)
  })
  .listen(3001, () => {
    console.log('Server Running At 3001')
  })
});
