const fs = require("fs");

function countStudents(path) {
  const hashMap = new Map();

  try {
    data = fs.readFileSync(path, "utf8");
    arr_data = data.split("\n");
    for (let i = 1; i < arr_data.length; i++) {
      line = arr_data[i].split(",");
      if (line.length === 4) {
        const name = line[0];
        const key = line[3];
        if (hashMap.has(key)) {
          list = hashMap.get(key);
          list.push(name);
          hashMap.set(key, list);
        } else {
          const list = [name];
          hashMap.set(key, list);
        }
      }
    }

    console.log(`Number of students: ${arr_data.length - 1}`);
    for (const [key, value] of hashMap.entries()) {
      console.log(
        `Number of students in ${key}: ${value.length}. List: ${value.join(
          ", "
        )}`
      );
    }
  } catch (error) {
    console.log("Cannot load the database");
  }
}
module.exports = countStudents;
