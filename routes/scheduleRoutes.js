const express = require('express');
const route = express.Router();
const ScheduleController = require('../controller/ScheduleController');

//getListFromTeacher
route.get('/teacher', ScheduleController.getListFromTeacher);

//getListFromStudent
route.get('/student', ScheduleController.getListFromStudent);

//addSchedule
route.get('/add', ScheduleController.addView);
route.post('/add', ScheduleController.add);

//edit
route.get('/edit/:id', ScheduleController.editView);
route.post('/edit/:id', ScheduleController.edit);

//delete
route.get('/delete/:id', ScheduleController.delete);

//chooseSubjectFromStudent
route.get('/subjectStudent/:id', ScheduleController.subjectFromStudent);

//chooseTeacherAndAddStudentId
route.get('/subjectStudent/:subjectId/:teacherId', ScheduleController.addStudentIdInSchedule);
module.exports = route;