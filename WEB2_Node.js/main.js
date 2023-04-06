const http = require('http');
const fs = require('fs');

const app = http.createServer((request, response) => {
  const { url } = request;
  if (url == '/') {
    url = '/index.html';
  }
  if (url == '/favicon.ico') {
    return response.writeHead(404);
  }
  response.writeHead(200);
  console.log(__dirname + url);
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);
