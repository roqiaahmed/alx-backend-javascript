/* eslint-disable no-plusplus */
const fs = require('fs');

function countStudents(path) {
  const hashMap = new Map();
  let num = 0;
  try {
    const data = fs.readFileSync(path, 'utf8');
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
    for (const [key, value] of hashMap.entries()) {
      console.log(
        `Number of students in ${key}: ${value.length}. List: ${value.join(
          ', ',
        )}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
