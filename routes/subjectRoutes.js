const express = require('express');
const route = express.Router();
const SubjectContoroller = require('../controller/SubjectController');

//listSubject
route.get('/', SubjectContoroller.getList);

//getListStudentFromSubjectId
route.get('/student/:id', SubjectContoroller.listStudentFromSubject);

//listSubjectAvailable
route.get('/available', SubjectContoroller.getAvailable);

//add Subject
route.get('/add', SubjectContoroller.addSubjectView);
route.post('/add', SubjectContoroller.addSubject);

module.exports = route;