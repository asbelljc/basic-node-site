const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
  res.sendFile('./contact-me.html', { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile('./404.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

// VANILLA NODE VERSION BELOW /////////////////////////////////////////////////

// const http = require('http');
// const fs = require('fs');
// const port = process.env.port || 8080;

// http
//   .createServer((req, res) => {
//     fs.readFile(
//       `./${req.url === '/' ? 'index' : req.url}.html`,
//       'utf-8',
//       (error, data) => {
//         if (error) {
//           fs.readFile('./404.html', (error, data) => {
//             res.writeHead(404, { 'Content-type': 'text/html' });
//             res.end(data, 'utf-8');
//           });
//         } else {
//           res.writeHead(200, { 'Content-type': 'text/html' });
//           res.end(data, 'utf-8');
//         }
//       }
//     );
//   })
//   .listen(port);
