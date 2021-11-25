const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  const afe = Object.keys(hours);
  return afe;
}

module.exports = getSchedule;
