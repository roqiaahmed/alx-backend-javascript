const http = require('http');
const { argv } = require('process');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');
    countStudents(argv[2])
      .then((data) => {
        res.write('This is the list of our students\n');
        res.end(data);
      })
      .catch(() => {
        res.end('This is the list of our students\n');
      });
  } else if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = app;
