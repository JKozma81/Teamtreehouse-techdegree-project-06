const data = require('../data/data.json');

exports.getHomePageContent = (req, res, next) => {
  res.locals.projects = data;
  res.render('index');
};

exports.getHomePageLayout = (req, res, next) => {
  res.render('layout');
};