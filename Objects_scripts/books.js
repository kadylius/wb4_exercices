"use strict";
// Array of objects
//books[0].title; // the first title
//books[1].author; // the second author
// the secondbook and second genre;
//console.log books[1].genre[1];

let books = [
    {
        title: 'The Thief Lord',
        pages: 345,
        author: 'Cornelia Funke',
        genre: ['Fantasy', 'Adventure'],
        isbn: '978-0545227704',
        price: 19.95
    },
    {
        title: 'The Go-Giver',
        pages: 123,
        author: 'Bob Burg',
        genre: ['self help','psychology'],  
        isbn: '76557',
        price: 19.95
    },
    {
        title: "Eat That Frog!",
        pages: 117,
        author: 'Brian Tracy',
        genre: ['Self Challenging', 'Lessons'],
        isbn: '7262823',
        price: 19.95
    }

];
// Get the title and author of the first book
console.log("Title of the first book:" + books[0].title);
console.log("Author of the first book: " + books[0].author);

// Get the title and author of the second book
console.log("title of the second book: " + books[1].title);
console.log("Author of the second book: " + books[1].author);


//Temperal literal string `
console.log(`Genre of the first book: ${books[0].title} is ${books[0].genre[1]}`);

// display title, genre and price
// The Thief Lord is an adventure books which cost $19.95.
console.log(`The: ${books[0].title} is an ${books[0].genre[1]} book which cost $${books[0].price}  `);
console.log(`The: ${books[1].title} is an ${books[1].genre[0]} book which cost $${books[1].price}  `);

