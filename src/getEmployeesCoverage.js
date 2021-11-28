const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const attData = (employed) => {
  const animaList = [];
  const placesList = [];
  const newEmpl = employed[0];

  newEmpl.species.forEach((cSpec) => {
    animaList.push(species.filter((cAnim) => cAnim.id === cSpec).map((a) => a.name)[0]);
  });
  newEmpl.species.forEach((cSpec) => {
    placesList.push(species.filter((cAnim) => cAnim.id === cSpec).map((a) => a.location)[0]);
  });
  newEmpl.species = animaList;
  newEmpl.locations = placesList;

  return newEmpl;
};

const mapFunc = (oF) => oF.map((c) => ({ fullName: `${c.firstName} ${c.lastName}`,
  id: c.id,
  locations: [],
  species: c.responsibleFor }));

const nameemply = (o) => {
  const oF = employees.filter((c) => c.firstName === o.name || c.lastName === o.name);
  let rI = mapFunc(oF);
  rI = attData(rI);
  return rI;
};

const allEmpl = (obj) => {
  const fix = [];
  const nI = fix;
  const rI = mapFunc(employees);
  rI.forEach((a) => {
    nI.push(attData([a]));
  });
  return rI;
};

function getEmployeesCoverage(obj) {
  console.log(obj);
  if (typeof obj === 'undefined') {
    return allEmpl();
  }
  if (obj.name) return nameemply(obj);
  if (obj.id) {
    const oF = employees.filter((cEmployer) => cEmployer.id === obj.id);
    if (oF.length === 0) throw new Error('Informações inválidas');
    let returnedInfos = mapFunc(oF);
    returnedInfos = attData(returnedInfos);
    return returnedInfos;
  }
  return obj;
}

module.exports = getEmployeesCoverage;
