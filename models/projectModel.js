const {projects} = require('../data.json');

// get project data for the passed id
exports.getProjectData = (id) => {
  return projects.find((el) => el.id === id);
}
// Get all project data
exports.getAllData = () => {
  return projects;
}