const { Student, Teacher, Subject, Schedule } = require('../models');

class StudentController{
    static home(req,res){
        let name = req.session.name
        res.render('homeStudent', {name});
    }
}

module.exports = StudentController;