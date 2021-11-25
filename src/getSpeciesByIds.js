const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return (ids.length === 0 ? [] : species.filter((a) => ids.includes(a.id)));
}// a = animals;
module.exports = getSpeciesByIds;
