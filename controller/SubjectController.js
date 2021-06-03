const { Teacher, Student, Subject } = require('../models');

class SubjectController{
    static getList(req,res){
        let data = {
            Subjects: ""
        }

        Subject.findAll()
        .then( result => {
            data.Subjects = result;
            res.render('subjectTeacher', {data})
        })
        .catch( err => res.send(err));
    }

    //listAvailable
    static getAvailable(req,res){
        let data = {
            Subjects: ""
        }

        Subject.findAll()
        .then( result => {
            data.Subjects = result;
            res.render('subjectStudent', {data})
        })
        .catch( err => res.send(err));
    }


    //listStudentFromSubject
    static listStudentFromSubject(req, res){
        let subjectId = req.params.id;

        Subject.findAll({
            include: Student,
            where: {
                id: subjectId
            }
        })
        .then( data => res.render('seeStudent', {data}))
        .catch( err => res.send(err));
    }

    //add subject
    static addSubjectView(req, res){
        res.render('addSubject');
    }

    static addSubject(req, res){
        let data = {
            subjectName: req.body.subjectName
        }

        Subject.create(data)
        .then( () => res.redirect('/subject'))
        .catch( err => {
            if (err.errors){
                let errData = err.errors.map( el => el.message);
                res.send(errData);
            }else{
                res.send(err);
            }
        })
    }


}

module.exports = SubjectController;