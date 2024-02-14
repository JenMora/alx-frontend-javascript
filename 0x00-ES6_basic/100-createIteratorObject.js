          export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;

  return {
    [Symbol.iterator]: function* () {
      for (const department in allEmployees) {
        const employees = allEmployees[department];
        for (const employee of employees) {
          yield employee;
        }
      }
    },
  };
}
