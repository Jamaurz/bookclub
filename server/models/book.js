var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Book = new Schema({
    emailOwner: String,
    title: String,
    thumbnail: String
});

module.exports = mongoose.model('Book', Book);