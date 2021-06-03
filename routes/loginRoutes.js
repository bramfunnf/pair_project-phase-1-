const express = require('express');
const route = express.Router();
const LoginController = require('../controller/LoginController');

route.get('/', LoginController.login);

//login
route.post('/teacher', LoginController.loginTeacher);
route.post('/student', LoginController.loginStudent);
//logout
route.get('/logout', LoginController.logout);

//add account
route.get('/add', LoginController.loginAddView);
route.post('/add', LoginController.loginAdd);

module.exports = route;