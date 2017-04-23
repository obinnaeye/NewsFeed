require('dotenv').load();
const express = require('express');
const path = require('path');
const  mongoose = require('mongoose'),
  passport = require('passport'),
  session = require('express-session'),
  MongoStore = require("connect-mongo")(session);
const MONGODB_URI=process.env.MONGODB_URI;


const app = express();
// middleware for static files
app.use('', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/fa', express.static(path.join(__dirname, 'fa')));

function home(req, res){
  if(req.isAuthenticated()){
    res.redirect('/news');
  }else{
    return '/';
  }
}


require('./config/passport')(passport);
mongoose.connect(MONGODB_URI);

var sess = {
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        cookie: {},
        store: new MongoStore({ mongooseConnection: mongoose.connections[0] })
    }

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
    sess.cookie.maxAge = 1000 * 60 * 60 * 14; //14 days
}

app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/news');
  } else {
    res.sendFile(path.resolve(__dirname, 'public', 'home.html'));
  }
});

app.get('/news', (req, res) => {
  if (req.isAuthenticated()) {
    res.sendFile(path.resolve(__dirname, 'public', 'newsPage.html'));
  } else {
    res.redirect('/');
  }
});

//Google+ login route

// authenticate user on google
app.route('/auth/google')
  .get(passport.authenticate('google', {scope :['profile', 'email']}));
  
//OAuth response
app.route('/auth/google/callback')
  .get(
    passport.authenticate('google', {
    successRedirect: '/news',
    failureRedirect: '/'
    })
  );
  
app.route('/logout')
  .get(function (req, res) {
    req.logout();
    res.redirect('/');
  });

app.listen(process.env.PORT || 8080);
console.log(`${process.env.PORT || 8080} is the magic port`);
