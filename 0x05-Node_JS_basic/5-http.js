const http = require('http');
const { argv } = require('process');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    countStudents(argv[2])
      .then((data) => {
        res.end(data);
      })
      .catch(() => {
        process.exit(1);
      });
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = app;
