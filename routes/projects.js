const express = require('express');
// Importing projects page controller
const project = require('../controllers/projectPage')

const route = express.Router();
// Rendering project page for the choosen project
route.use('/projects/:projectId', project.getProjectPage);

module.exports = route;