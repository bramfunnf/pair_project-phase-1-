const { Teacher, Student, Schedule } = require('../models');

class TeacherController{
    static teacherMainPage(req,res){
        let name = req.session.name;
        res.render('homeTeacher', {name});
    }
}

module.exports = TeacherController;