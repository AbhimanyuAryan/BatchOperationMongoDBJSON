const mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/ExpressTest');
var fs = require('fs');

mongoose.set('debug', true);

var books = JSON.parse(fs.readFileSync(__dirname + '/books.json', 'utf-8'));

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

async function loadBooks(){
    console.log(Book);
    try{
        console.log(books);
        console.log(books.books[0]);
        await Book.insertMany(books.books);
        console.log(Book);
        process.exit();
    }catch(e){
        console.log(e);
        process.exit();
    }
}
loadBooks();