export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      Object.keys(employeesList).length,
  };
  return report;
}
