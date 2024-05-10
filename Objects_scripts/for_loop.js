'use strict';

let age = 15;
while (age  < 18) { // 
  console.log(`You are ${age} years old. That is not old enough`);
  age++; // increment +1 every loop 
 
  console.log(`Happy birthday, You are ${age} years old`);
  if(age == 17) {
    console.log(`Just one more year to go before you are 18`);
  }
}

// Initialize the countdown variable
let countdown = 10;

// Use a while loop to control the countdown
while (countdown > 1) {
    // Print the countdown message
    console.log(`Countdown: ${countdown}`);
    
    // Decrement the countdown variable
    countdown--;
}

// Print the launch message
console.log("Countdown: 1. Ready for launch!");

// Array of movie objects
const movies = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 }
  ];
  
 

  let books = [
    { title: "harry potter", author: "jk rolling", year: 1998 },
    { title: "Clay", author: "dydy", year: 2005 },
    { title: "the road", author: "rolling", year: 2012 },
    { title: "the hawthorne legacy", author: "tina", year: 1985 }
];

// Function to check publication century
function checkPublicationCentury(books) {
    // Initialize index variable for while loop
    let index = 0;

    // While loop to traverse the array
    while (index < books.length) {
        // Check if the book was published in or after the year 2000
        if (books[index].year >= 2000) {
            console.log(`${books[index].title} was published in the 21st century`);
        } else {
            console.log(`${books[index].title} was not published in the 21st century`);
        }
        
        // Increment index for next iteration
        index++;
    }
}

// Call the function with the books array
checkPublicationCentury(books);