const express = require('express');
const { argv } = require('process');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(argv[2])
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(500).send('Error reading the database file');
    });
});

app.listen(port, () => console.log(`Example app is listening on port ${port}.`));

module.exports = app;
