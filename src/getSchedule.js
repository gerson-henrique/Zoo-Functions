const { hours, species } = require('../data/zoo_data');

const closeAtMondays = () => ({ Monday: { officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!' } });

const daySchedule = (day, callback) => {
  const retorno = { [day]: callback[day] };
  return retorno;
};

const generateSchedule = () => {
  const returnedObj = { Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
    Sunday: {},
    Monday: {} };
  Object.keys(hours).forEach((day) => {
    returnedObj[day] = { officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.filter((anim) => anim.availability.includes(day)).map((anm) => anm.name),
    };
  });
  returnedObj.Monday.officeHour = 'CLOSED';
  returnedObj.Monday.exhibition = 'The zoo will be closed!';
  return returnedObj;
};

const animalSchedule = (anim) => {
  const indived = species.filter((anm) => anm.name === anim);
  return indived.map((anm) => anm.availability)[0];
};

function getSchedule(scheduleTarget) {
  const returnedObj = generateSchedule();
  if (!scheduleTarget) return returnedObj;
  if (scheduleTarget === 'Monday') return closeAtMondays();
  if (Object.keys(hours).includes(scheduleTarget)) return daySchedule(scheduleTarget, returnedObj);
  const names = species.map((speci) => speci.name);
  if (names.includes(scheduleTarget)) return animalSchedule(scheduleTarget);
  return returnedObj;
}

getSchedule('penguins');

module.exports = getSchedule;
