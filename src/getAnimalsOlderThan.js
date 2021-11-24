const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalSpecies = species.filter((s) => (s.name) === animal);
  const everyAnimal = animalSpecies.map((member) => member.residents);
  const animalLenght = everyAnimal[0].every((anim) => anim.age > age);
  return animalLenght;
}// s = species

module.exports = getAnimalsOlderThan;
