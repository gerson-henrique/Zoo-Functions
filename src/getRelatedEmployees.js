const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees.some((person) => person.managers.includes(id));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const colaborator = employees.filter((employer) => employer.managers.includes(managerId));
  const employersList = colaborator.map((personName) => {
    console.log('');
    return `${personName.firstName} ${personName.lastName}`;
  });
  return employersList;
}
module.exports = { isManager, getRelatedEmployees };
