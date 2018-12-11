// Importing extress
const express = require('express');

// Creating the server
const app = express();

// Setting the view engine to pug templating
app.set('view engine', 'pug');

// Setting up the public folder for static files and linking it to the static route
app.use('/static', express.static('public'));

// Importing the middlewares for the appropriate routes
const about = require('./routes/about');
const projets = require('./routes/projects');
const home = require('./routes/home');

// Importing Error page controller
const error = require('./controllers/errorPage')

// Setting up the routes
app.get('/projects/:projectId', projets);
app.get('/about', about);
app.get('/', home);

// Helper middleware to create error
app.use(error.createError);

// Error handling middleware
app.use(error.getError);

// Starting the server
app.listen(3000, () => {
  console.log('Server is started at port 3000 and listening...');
});