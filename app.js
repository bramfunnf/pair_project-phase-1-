const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 3000;

//routes
const loginRoutes = require('./routes/loginRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const studentRoutes = require('./routes/studentRoutes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(session({
	resave: false,
    saveUninitialized: true,
    secret: "bebas"
}));

app.use('/login', loginRoutes);

const loginMiddleware = (req, res, next) => {
    if (req.session.loginStatus){
        next();
    }else{
        res.redirect('/login');
    }
}

app.use(loginMiddleware);
app.use('/teacher', teacherRoutes);
app.use('/subject', subjectRoutes);
app.use('/schedule', scheduleRoutes);
app.use('/student', studentRoutes);

app.listen(PORT, ()=>{
    console.log("Running on port:" + PORT );
})