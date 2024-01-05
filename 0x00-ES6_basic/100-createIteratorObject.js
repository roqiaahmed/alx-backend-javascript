export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const employees of Object.values(report.allEmployees)) {
    allEmployees.push(...employees);
  }
  return {
    [Symbol.iterator]() {
      let i = -1;
      return {
        next() {
          i += 1;
          if (i < allEmployees.length) {
            return {
              value: allEmployees[i],
              done: i >= allEmployees.length,
            };
          }
          return {
            value: allEmployees[i],
            done: true,
          };
        },
      };
    },
  };
}
