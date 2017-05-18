// PACKAGES //
var path = require('path');
var fs = require('fs');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var { msg } = require('./routes/msg.js');

require('dotenv').load();

// IMPORTS //
var indexRoutes = require('./routes/index');
var userRoutes = require('./routes/user');

// CREATE APP //
var app = express();
require('./config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// MIDDLEWARE //
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect(process.env.MONGO_URL);
mongoose.Promise = global.Promise;

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

// ROUTES //

app.use('/', indexRoutes);
app.use('/user', userRoutes);

// ERROR HANDLER //
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

module.exports = app;
