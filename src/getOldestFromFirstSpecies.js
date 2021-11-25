const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

let olderAge = 0;

function getOldestFromFirstSpecies(id) {
  const empregado = employees.filter((code) => code.id === id);
  const animcode = empregado.map((an) => an.responsibleFor);
  const animcodeOne = (animcode[0])[0];
  const anim = species.filter((code) => code.id === animcodeOne);
  const animalPopul = anim.map((a) => a.residents);
  const animalNoArr = animalPopul[0];
  animalNoArr.forEach((e) => {
    if (olderAge < e.age) {
      olderAge = e.age;
    }
  });
  const olderAnimal = animalNoArr.filter((a) => a.age === olderAge);
  const awser = olderAnimal.map((a) => ([a.name, a.sex, a.age]));
  olderAge = 0;
  return awser[0];
}

module.exports = getOldestFromFirstSpecies;
