var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username: String,
    password: String,
    email: String,
    fullname: String,
    city: String,
    state: String
});

module.exports = mongoose.model('User', User);