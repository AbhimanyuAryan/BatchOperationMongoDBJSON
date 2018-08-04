var mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/ExpressTest');
mongoose.set('debug', true);

const {Schema} = mongoose.Schema;

var Book = mongoose.model('Book', new mongoose.Schema({
    author: String,
    authorURL: String,
    cover: String,
    info: String,
    level: String,
    tags: [String],
    title: String,
    url: String
}));

module.exports = Book;