var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Trade = new Schema({
    emailOwner: String,
    emailTrade: String,
    title: String,
    thumbnail: String,
    idBook: String
});

module.exports = mongoose.model('Trade', Trade);