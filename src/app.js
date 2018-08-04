var fs = require('fs');
var Book = require('./Book');

var books = JSON.parse(fs.readFileSync(__dirname + '/../json/books.json', 'utf-8'));

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