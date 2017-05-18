var path = require('path');
var app = require('express').Router();
var db = require('../utils/DataBaseUtils');
var request = require('request');
var msg = require('./msg').msg;

app.post('/getinfo', function(req, res) {
    db.find(req.body.user, function(data) {
       res.send(data);
    });
});

app.post('/saveSettings', function(req, res) {
    db.saveSettings(req.body.obj, function(data) {
        msg.push('saved');
        //console.log('save', msg);
        res.send(data);
    });
});

app.post('/addBook', function(req, res) {
    var reqVal = 'https://www.googleapis.com/books/v1/volumes?q=' + req.body.book;
    request(reqVal, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    })
});

app.post('/addDbBook', function(req, res) {
    db.addDbBook(req.body.book, req.user.email, function(data) {
        msg.push('book added');
        res.send(data);
    });
});

app.post('/delDbBook', function(req, res) {
    db.delDbBook(req.user.email, req.body.book, function(data) {
        msg.push('book removed');
        res.send(data);
    });
});

app.get('/getMyBooks', function(req, res) {
   db.getMyBooks(req.user.email, function(data) {
      res.send(data);
   });
});

app.get('/getAllBooks', function(req, res) {
    db.getAllBooks(function(data) {
        res.send(data);
    });
});

app.post('/tradeBook', function(req, res) {
    if(req.user.email != req.body.book.emailOwner) {
        db.tradeBook(req.user.email, req.body.book, function(data) {
            if(data) {
                msg.push('request sent');
            } else {
                msg.push('request has already sent');
            }
            res.send(data);
        });
    } else {
        msg.push('This is your book');
        res.send(false);
    }
});

app.get('/getRequest', function(req, res) {
    db.getRequest(req.user.email, function(data) {
        res.send(data);
    });
});

app.get('/getTrade', function(req, res) {
    db.getTrade(req.user.email, function(data) {
        res.send(data);
    });
});

app.post('/delDbReq', function(req, res) {
    db.delDbReq(req.user.email, req.body.title, req.body.emailOwner, function(data) {
        msg.push('request removed');
        res.send(data);
    });
});

app.post('/delDbTrade', function(req, res) {
    db.delDbTrade(req.body.id, function(data) {
        msg.push('trade request removed');
        res.send(data);
    });
});

module.exports = app;
