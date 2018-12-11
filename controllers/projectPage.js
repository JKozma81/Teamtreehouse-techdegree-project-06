const projectModel = require('../models/projectModel');

// Render project detail page layout for the choosen project
exports.getProjectPage = (req, res, next) => {
  const projectId = req.params.projectId;
  const projectsNum = projectModel.getAllData().length;
  res.locals.project = projectModel.getProjectData(projectId);

  console.dir(req.params);
  console.dir(parseInt(projectId));
  if (parseInt(projectId) > projectsNum || parseInt(projectId) < 1 || isNaN(parseInt(projectId)) || parseInt(projectId) === undefined) {
    next();
    return;
  }
  res.render('project');
};