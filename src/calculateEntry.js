const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitAges = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) visitAges.child += 1;
    if (person.age >= 18 && person.age < 50) visitAges.adult += 1;
    if (person.age >= 50) visitAges.senior += 1;
  });
  return visitAges;
}

function calculateEntry(entrants) {
  if (typeof (entrants) === 'undefined' || Object.keys(entrants).length === 0) return 0;
  const visitAges = countEntrants(entrants);
  const valorChild = (prices.child * visitAges.child);
  const valorAdult = (prices.adult * visitAges.adult);
  const valorSenhior = (prices.senior * visitAges.senior);
  const valorTotal = valorChild + valorAdult + valorSenhior;
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
