const express = require('express');
// Importing home page controller
const home = require('../controllers/homePage')

const route = express.Router();
// Render the content and the base layout
route.use('/', home.getHomePageContent, home.getHomePageLayout);

module.exports = route;