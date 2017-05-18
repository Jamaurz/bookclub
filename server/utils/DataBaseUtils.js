var mongoose = require('mongoose');
var User = require('../models/user.js');
var Book = require('../models/book.js');
var Trade = require('../models/trade.js');

exports.find = function(user, callback) {
    return User.findOne({email: user}, {username: true, fullname: true, city: true, state: true}, function(err, doc) {
        if(err) throw err;
        callback(doc);
    });
};

exports.saveSettings = function(obj, callback) {
    return User.findById(obj._id, {username: true, fullname: true, city: true, state: true }, function(err, doc) {
        if(err) throw err;

        doc.fullname = obj.fullname;
        doc.username = obj.username;
        doc.city = obj.city;
        doc.state = obj.state;
        doc.save(function(err, updateDoc) {
            callback(updateDoc);
        });
    });
};

exports.addDbBook = function(book, emailO, callback) {
    var email = emailO;
    if(book.emailTrade) {
        email = book.emailTrade;
    }

    var newBook = new Book();
    newBook.emailOwner = email;
    newBook.title = book.title;
    newBook.thumbnail = book.thumbnail;
    newBook.save(function(err, doc) {
       if(err) throw err;
       callback('book added');
    });
};

exports.delDbBook = function(email, book, callback) {
    console.log('delDbBook', book);
    return Book.remove({emailOwner: email, _id: book}, function(err, doc) {
        if(err) throw err;
        Trade.remove({idBook: book}, function(err, doc) {
            if (err) throw err;
            callback(doc);
        });
    });
};

exports.getMyBooks = function (email, callback) {
    return Book.find({emailOwner: email}, function(err, doc) {
        if(err) throw err;
        callback(doc);
    });
};

exports.getAllBooks = function (callback) {
    return Book.find(function(err, doc) {
        if(err) throw err;
        callback(doc);
    });
};

exports.tradeBook = function(emailTrade, book, callback) {
    return Trade.findOne({emailOwner: book.emailOwner, emailTrade: emailTrade, title: book.title, idBook: book._id}, function (err, doc) {
        if(err) throw err;
        if(doc) {
            callback(false);
        } else {
            var newTrade = new Trade();
            newTrade.emailOwner = book.emailOwner;
            newTrade.emailTrade = emailTrade;
            newTrade.title = book.title;
            newTrade.idBook = book._id;
            newTrade.thumbnail = book.thumbnail;
            newTrade.save(function(err, doc) {
                if(err) throw err;
                callback(doc);
            });
        }
    })
}

exports.getRequest = function(email, callback) {
    return Trade.find({emailTrade:email}, function (err, doc) {
        if(err) throw err;
        callback(doc);
    })
}

exports.getTrade = function(email, callback) {
    return Trade.find({emailOwner:email}, function (err, doc) {
        if(err) throw err;
        callback(doc);
    })
}

exports.delDbReq = function(emailTrade, title, emailOwner, callback) {
    return Trade.remove({emailTrade: emailTrade, title: title, emailOwner: emailOwner}, function(err, doc) {
        if(err) throw err;
        callback(doc);
    });
};

exports.delDbTrade = function(id, callback) {
    return Trade.remove({_id: id}, function(err, doc) {
        if(err) throw err;
        callback(doc);
    });
};

