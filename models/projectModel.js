const data = require('../data/data.json');

// get project data for the passed id
exports.getProjectData = (id) => {
  return data.find((el) => el.id === id);
}
// Get all project data
exports.getAllData = () => {
  return data;
}