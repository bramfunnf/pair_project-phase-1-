const express = require('express');
const route = express.Router();
const StudentController = require('../controller/StudentController');

//list
route.get('/', StudentController.home);

module.exports = route;