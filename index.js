const http = require('http');
const fs = require('fs');
const port = process.env.port || 8080;

http
  .createServer((req, res) => {
    fs.readFile(
      `./${req.url === '/' ? 'index' : req.url}.html`,
      'utf-8',
      (error, data) => {
        if (error) {
          fs.readFile('./404.html', (error, data) => {
            res.writeHead(404, { 'Content-type': 'text/html' });
            res.end(data, 'utf-8');
          });
        } else {
          res.writeHead(200, { 'Content-type': 'text/html' });
          res.end(data, 'utf-8');
        }
      }
    );
  })
  .listen(port);
