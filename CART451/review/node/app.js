// console.log('Hello World');

// function greeting(greet) {
//     console.log(greet);
// }
// greeting('Hello World');

// const http = require('http');

/* W3 example */
// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(3000);

/* Node.js example */
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

/* https://www.youtube.com/watch?v=U8XF6AFGqlc example */
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if(err){
    throw err;
  }
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // change from read plain to html if loading html file!!
    res.write(html);
    res.end();
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
})

