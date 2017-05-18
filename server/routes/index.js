var path = require('path');
var passport = require('passport');
var app = require('express').Router();
var db = require('../utils/DataBaseUtils');
var msg = require('./msg').msg;

app.get('/getMsg', function(req, res) {
    if(msg.length > 0) {
        res.send(msg.pop());
    } else {
        res.send(false)
    }
});

app.get('/info', function(req, res) {
    if(req.user) {
        res.send(req.user.email);
    } else {
        res.send(false);
    }
});

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

app.post('/login',
    passport.authenticate('login', {
        successRedirect: '/logOK',
        failureRedirect: '/logERR' })
);

app.get('/logOK', function(req, res) {
    msg.push(req.session.message);
    //res.redirect('/getMsg');
    res.redirect('/');
});
app.get('/logERR', function(req, res) {
    msg.push(req.session.message);
    res.redirect('/#/login');
});

app.post('/signup', passport.authenticate('signup', {
    successRedirect: '/regOK',
    failureRedirect: '/regERR',
    failureFlash : true
}));

app.get('/regOK', function(req, res) {
    msg.push(req.session.message);
    //res.redirect('/getMsg');
    res.redirect('/');
});
app.get('/regERR', function(req, res) {
    msg.push(req.session.message);
    res.redirect('/#/registration');
});
module.exports = app;
