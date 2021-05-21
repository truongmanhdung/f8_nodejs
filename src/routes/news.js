const express = require('express');
const route = express.Router();
const newsController = require('../app/controllers/NewsController');
// searchController.index

route.get('/', newsController.index);

module.exports = route;