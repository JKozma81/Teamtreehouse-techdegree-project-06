const projectsData = require('../models/projectModel');

// Render the index layout for the home page
exports.getHomePageContent = (req, res, next) => {
  res.locals.projects = projectsData.getAllData();
  res.render('index');
};

// Render the core layout
exports.getHomePageLayout = (req, res, next) => {
  res.render('layout');
};