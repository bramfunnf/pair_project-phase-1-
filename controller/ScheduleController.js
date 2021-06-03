const {Teacher, Subject, Student, Schedule} = require('../models');

class ScheduleController{

    //listFromTeacher
    static getListFromTeacher(req, res){
        Teacher.findAll({
            include: Subject,
            where: {
                id: req.session.teacherId
            }
        })
        .then( data => res.render('viewScheduleTeacher', {data}))
        .catch( err => res.send(err));
    }

    //listFromStudent
    static getListFromStudent(req, res){
        Student.findAll({
            include: Subject
        })
        .then( data => res.render('studentSchedule', {data}))
        .catch( err => res.send(err));
    }

    //add
    static addView(req,res){
        Subject.findAll()
        .then( data => res.render('addTeacherSchedule', {data}))
        .catch( err => res.send(err));
    }

    static add(req, res){
        let data = {
          SubjectId: req.body.SubjectId,
          TeacherId: req.session.teacherId,
          StudentId: null,
          date: req.body.date,
          link: req.body.link,
          student_limit: req.body.student_limit  
        }

        Schedule.create(data)
        .then( () => res.redirect('/teacher'))
        .catch( err => res.send(err));
    }

    //edit
    static editView(req,res){
        let subjectId = req.params.id;
        let teacherId = req.session.teacherId;

       Schedule.findAll({
            where: {
                SubjectId: subjectId,
                TeacherId: teacherId
            }
        })
        .then( data => {
            console.log(data);
            res.render('editTeacherSchedule', {data});
        })
        .catch( err => res.send(err));
    }

    static edit(req, res){
        let data = {
          date: req.body.date,
          link: req.body.link,
          student_limit: req.body.student_limit  
        }
        let subjectId = req.params.id;
        let teacherId = req.session.teacherId;

        Schedule.update(data, {
            where: {
                SubjectId: subjectId,
                TeacherId: teacherId
            }
        })
        .then( () => res.redirect('/teacher'))
        .catch( err => res.send(err));
    }

    //delete
    static delete(req,res){
        let subjectId = req.params.id;
        let teacherId = req.session.teacherId;

        Schedule.destroy({
            where:{
                SubjectId: subjectId,
                TeacherId: teacherId
            }
        })
        .then( () => res.redirect('/schedule/teacher'))
        .catch( err => res.send(err));
    }
    
    //chooseSubjectFromStudent
    static subjectFromStudent(req, res){
        let data = {
            SubjectId: req.params.id,
            Teachers: ""
        }

        Subject.findAll({
            include: Teacher,
            where: {
                id: data.SubjectId
            }
        })
        .then( result => {
            data.Teachers = result[0].Teachers;
            res.render('chooseTeacher', {data});
        })
        .catch( err => res.send(err));
    }

    //chooseTeacherAndAddStudentId
    static addStudentIdInSchedule(req, res){
        let data = {
            StudentId: req.session.studentId
        }
        let teacherId = req.params.teacherId;
        let subjectId = req.params.subjectId;

        Schedule.update(data, {
            where: {
                TeacherId: teacherId,
                SubjectId: subjectId
            }
        })
        .then( () => res.redirect('/student'))
        .catch( err => res.send(err));
        
    }
}

module.exports = ScheduleController;