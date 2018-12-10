const express = require('express');
// Importing about page controller
const about = require('../controllers/aboutPage')

const route = express.Router();
// Rendering the about page
route.use('/', about.getAboutPage);

module.exports = route;