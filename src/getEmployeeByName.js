const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof (employeeName) === 'undefined') return {};
  const guys = employees.filter((p) => {
    console.log('');
    return (p.firstName === employeeName || p.lastName === employeeName);
  });
  return guys[0];
}

module.exports = getEmployeeByName;
