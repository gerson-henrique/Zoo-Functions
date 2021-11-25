const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const allZoo = {};
    species.forEach((mb) => {
      allZoo[mb.name] = mb.residents.length;
    });
    return allZoo;
  }
  if (Object.keys(animal).length === 1) {
    const allSex = species.filter((mb) => mb.name === animal.specie);
    return allSex[0].residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const allSexinfo = species.filter((m) => m.name === animal.specie).map((b) => b.residents);
    const onlySex = allSexinfo[0].filter((a) => a.sex === animal.sex);
    return (typeof (onlySex) === 'undefined') ? 0 : onlySex.length;
  }
}

module.exports = countAnimals;
