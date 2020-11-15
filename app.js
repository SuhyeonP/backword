const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const hpp=require('hpp')
const helmet=require('helmet')

const{Album,Going}=require('./models')
const adminRouter=require('./routes/admin');
const goingRouter=require('./routes/going');
const goingsRouter=require('./routes/goings');
const memberRouter=require('./routes/member');
const albumRouter=require('./routes/album');


const passportConfig=require('./passport')


dotenv.config();
const app = express();
const db = require('./models');

db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);
passportConfig()

if(process.env.NODE_ENV === 'production'){
    app.use(morgan('combined'));
    app.use(hpp())
    app.use(helmet())
}else{
    app.use(morgan('dev'));
}

app.use(cors({
    origin: ['http://localhost:3000','honeyhyoni.shop'],
    credentials: true,
}));

app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
        domain:process.env.NODE_ENV==='production'&&'.honeyhyoni.com'
    }
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', async(req, res) => {
    res.send('this is back server ')
});

app.use('/admin',adminRouter);
app.use('/going',goingRouter);
app.use('/goings',goingsRouter);
app.use('/members',memberRouter);
app.use('/album',albumRouter);

//3000인데 aws위해서 80으로 바꿔둠
app.listen(80, () => {
    console.log('서버 실행 중!');
});