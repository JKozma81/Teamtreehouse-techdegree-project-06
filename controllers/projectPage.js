exports.getProjectPage = (req, res, next) => {
  console.log(req.params);
  res.render('project');
};