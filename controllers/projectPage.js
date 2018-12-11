const projectModel = require('../models/projectModel');

// Render project detail page layout for the choosen project
exports.getProjectPage = (req, res, next) => {
  const projectId = req.params.projectId;
  res.locals.project = projectModel.getProjectData(projectId);
  res.render('project');
};