'use strict';

var book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    genres: ["Fiction", "Classic"],
    isBestseller: true,
    displayInfo: function() {
        return `${this.title} by ${this.author}. ${this.pages} pages. Genres: ${this.genres.join(', ')}.`;
    }
};

// Function to display book details
function displayBookDetails() {
    var bookDetailsElement = document.getElementById('bookDetails');
    bookDetailsElement.textContent = book.displayInfo();
}

// Event listener for button click
var displayButton = document.getElementById('displayButton');
displayButton.addEventListener('click', displayBookDetails);