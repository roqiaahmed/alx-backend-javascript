/* eslint-disable no-plusplus */
const fs = require('fs').promises;

function readDatabase(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const hashMap = new Map();

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
            } else {
              const list = [name];
              hashMap.set(key, list);
            }
          }
        }
        res(hashMap);
      })
      .catch(() => {
        rej(new Error('Cannot load the database'));
      });
  });
}

export default readDatabase;
