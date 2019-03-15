const http = require('http');

var port = 3000;
var ip = '127.0.0.1';


const server = http.createServer((req, res) => {
  console.log(`Listening on http://${ip}:${port}`)
})
server.listen(port, ip);