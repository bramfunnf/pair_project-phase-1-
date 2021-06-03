const { Teacher, Student } = require('../models');

class LoginController{

    static login(req, res){
        res.render('login');
    }

    //login teacher
    static loginTeacher(req, res){
        let data = {
            username: req.body.username,
            password: req.body.password
        }
        Teacher.findAll({
            where:{
                username: data.username,
                password: data.password
            }
        })
        .then( result => {
            if (result.length < 1){
                req.session.loginStatus = false;
                res.redirect('/login')
            }else{
                req.session.loginStatus = true;
                req.session.name = result[0].name;
                req.session.teacherId = result[0].id;
                res.redirect(`/teacher`);
            }
        })
        .catch( err => res.send(err));
    }

    //login student
    static loginStudent(req, res){
        let data = {
            username: req.body.username,
            password: req.body.password
        }
        
        Student.findAll({
            where:{
                username: data.username,
                password: data.password
            }
        })
        .then( result => {
            if (result.length < 1){
                req.session.loginStatus = false;
                res.redirect('/login')
            }else{
                req.session.loginStatus = true;
                req.session.name = result[0].name;
                req.session.studentId = result[0].id;
                res.redirect(`/student`);
            }
        })
        .catch( err => res.send(err));
    }

    //logout
    static logout(req,res){
        req.session.destroy();
        res.redirect('/login');
    }

    //login add
    static loginAddView(req, res){
        res.render('addStudent');
    }

    static loginAdd(req, res){
        let data = {
            username: req.body.username,
            password: req.body.password,
            name:req.body.name
        }

        Student.create(data)
        .then( () => res.redirect('/login'))
        .catch( err => {
            if (err.errors){
                let errData = err.errors.map(el => el.message);
                res.send(errData);
            }else{
                res.send(err);
            }
        });
    }
}

module.exports = LoginController;