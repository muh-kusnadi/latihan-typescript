"use strict";
let books = [];
function addBook(book) {
    books.push(book);
    return book;
}
function updateBook(id, fieldsToUpdate) {
    const book = books.find(book => book.id === id);
    if (book) {
        Object.assign(book, fieldsToUpdate);
    }
    return book;
}
function deleteBook(id) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        return books.splice(index, 1)[0];
    }
}
function listBooks() {
    return books;
}
addBook({ id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 });
addBook({ id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 });
addBook({ id: 3, title: "1984", author: "George Orwell", publishedYear: 1949 });
updateBook(1, { genre: "Fiction" });
deleteBook(2);
console.log(listBooks());
