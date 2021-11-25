const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const sexSorted = (options) => {
  const windRose = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((membro) => {
    const sexFiltered = membro.residents.filter((res) => res.sex === options.sex);
    windRose[membro.location].push({ [membro.name]: sexFiltered.map((sext) => sext.name).sort() });
  });
  return windRose;
};

const onlySorted = (options) => {
  const windRose = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((a) => {
    windRose[a.location].push({ [a.name]: a.residents.map((all) => all.name).sort() });
  });
  return windRose;
};

const onlySex = (options) => {
  const windRose = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((membro) => {
    const sexFiltered = membro.residents.filter((res) => res.sex === options.sex);
    windRose[membro.location].push({ [membro.name]: sexFiltered.map((sext) => sext.name) });
  });
  return windRose;
};

const namesOnly = (options) => {
  const windRose = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((membro) => {
    windRose[membro.location].push({ [membro.name]: membro.residents.map((all) => all.name) });
  });
  return windRose;
};

function optionChooser(options) {
  if (Object.prototype.hasOwnProperty.call(options, 'sorted')) {
    if (Object.prototype.hasOwnProperty.call(options, 'sex')) {
      return sexSorted(options);
    }
    return onlySorted(options);
  }
  if (Object.prototype.hasOwnProperty.call(options, 'sex')) {
    return onlySex(options);
  }
  return namesOnly(options);
}

function getAnimalMap(options) {
  const windRose = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((family) => {
    windRose[family.location].push(family.name);
  });
  if (typeof (options) === 'undefined') return windRose;
  if (!options.includeNames) return windRose;
  const animalArr = optionChooser(options);
  return animalArr;
}
module.exports = getAnimalMap;
