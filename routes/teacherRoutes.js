const express = require('express');
const route = express.Router();
const TeacherController = require('../controller/TeacherController');

route.get('/', TeacherController.teacherMainPage);


module.exports = route;