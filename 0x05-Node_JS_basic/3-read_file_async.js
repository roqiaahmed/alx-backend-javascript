/* eslint-disable no-plusplus */
const fs = require('fs');

function countStudents(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        rej(Error('Cannot load the database'));
      } else {
        const hashMap = new Map();
        let num = 0;
        let msg = '';

        const arrData = data.split('\n');
        for (let i = 1; i < arrData.length; i++) {
          const line = arrData[i].split(',');
          if (line.length === 4) {
            const name = line[0];
            const key = line[3].trim();

            if (hashMap.has(key)) {
              const list = hashMap.get(key);
              list.push(name);
              hashMap.set(key, list);
              num += 1;
            } else {
              num += 1;
              const list = [name];
              hashMap.set(key, list);
            }
          }
        }

        console.log(`Number of students: ${num}`);
        msg += `Number of students: ${num}\n`;
        for (const [key, value] of hashMap.entries()) {
          console.log(
            `Number of students in ${key}: ${value.length}. List: ${value.join(
              ', ',
            )}`,
          );
          msg += `Number of students in ${key}: ${
            value.length
          }. List: ${value.join(', ')}\n`;
        }
        res(msg);
      }
    });
  });
}

module.exports = countStudents;
