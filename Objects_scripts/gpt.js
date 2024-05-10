'use strict';

var productInformation = {
    productName: "Smartphone",
    productId: 12345,
    price: 599.99,
    colorsAvailable: ["Black", "Silver", "Gold"],
    isAvailable: true,
    getProductDetails: function() {
        return `Product: ${this.productName}, ID: ${this.productId}, Price: $${this.price}`;
    },
    displayColors: function() {
        console.log("Available colors:");
        this.colorsAvailable.forEach(color => {
            console.log(color);
        });
    }
};

// Accessing object properties
console.log("Product Name:", productInformation.productName);
console.log("Product ID:", productInformation.productId);
console.log("Price:", productInformation.price);
console.log("Is Available:", productInformation.isAvailable);

// Invoking object methods
console.log(productInformation.getProductDetails());
productInformation.displayColors();

// Now, let's create 10 different examples of JavaScript objects:

// User Information:
javascript
var user = {
    username: "john_doe",
    age: 30,
    email: "john@example.com",
    hobbies: ["Reading", "Running", "Cooking"],
    isAdmin: false,
    greetUser: function() {
        return `Hello, ${this.username}!`;
    }
};

console.log(user.username);
console.log(user.age);
console.log(user.hobbies);
console.log(user.greetUser());

// Car Information:
javascript
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    colorsAvailable: ["Red", "Blue", "White"],
    isElectric: false,
    displayDetails: function() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
};

console.log(car.colorsAvailable);
car.displayDetails();

// Book Information:
javascript
var book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    genres: ["Fiction", "Classic"],
    isBestseller: true,
    displayInfo: function() {
        return `${this.title} by ${this.author}`;
    }
};

console.log(book.pages);
console.log(book.genres);
console.log(book.displayInfo());

// Restaurant Information:
javascript
var restaurant = {
    name: "Italiano's",
    cuisine: "Italian",
    rating: 4.5,
    menu: ["Pizza", "Pasta", "Salad"],
    isOpen: true,
    getMenu: function() {
        return `Menu: ${this.menu.join(', ')}`;
    }
};

console.log(restaurant.rating);
console.log(restaurant.isOpen);
console.log(restaurant.getMenu());

// Movie Information:
javascript
var movie = {
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    genres: ["Sci-Fi", "Action"],
    releaseYear: 2010,
    getDirector: function() {
        return `Directed by ${this.director}`;
    }
};

console.log(movie.duration);
console.log(movie.genres);
console.log(movie.getDirector());

// Employee Information:
javascript
var employee = {
    name: "Alice",
    department: "Marketing",
    salary: 60000,
    skills: ["Communication", "Social Media Marketing"],
    isFullTime: true,
    getSalary: function() {
        return `Salary: $${this.salary}`;
    }
};

console.log(employee.department);
console.log(employee.skills);
console.log(employee.getSalary());

// Computer Information:
javascript
var computer = {
    brand: "Apple",
    model: "MacBook Pro",
    screenSize: 13.3,
    ports: ["USB-C", "Thunderbolt"],
    isTouchscreen: false,
    displayModel: function() {
        console.log(`Model: ${this.brand} ${this.model}`);
    }
};

console.log(computer.screenSize);
console.log(computer.ports);
computer.displayModel();

// Animal Information:
javascript
var animal = {
    species: "Lion",
    habitat: "Savannah",
    averageLifespan: 12,
    diet: ["Antelope", "Zebra"],
    isEndangered: false,
    getHabitat: function() {
        return `Habitat: ${this.habitat}`;
    }
};

console.log(animal.averageLifespan);
console.log(animal.diet);
console.log(animal.getHabitat());

// Music Album Information:
javascript
var album = {
    title: "Thriller",
    artist: "Michael Jackson",
    year: 1982,
    tracks: ["Thriller", "Beat It", "Billie Jean"],
    isMultiPlatinum: true,
    getArtist: function() {
        return `Artist: ${this.artist}`;
    }
};

console.log(album.tracks);
console.log(album.isMultiPlatinum);
console.log(album.getArtist());

// Weather Information:
javascript
var weather = {
    city: "New York",
    temperature: 75,
    conditions: "Sunny",
    humidity: 60,
    isRaining: false,
    displayConditions: function() {
        console.log(`Current weather in ${this.city}: ${this.conditions}, ${this.temperature}°F`);
    }
};

console.log(weather.humidity);
console.log(weather.isRaining);
weather.displayConditions();
// And now, let's show 5 examples of an array of objects:

// Array of Users:
javascript
var users = [
    { name: "John", age: 25, isAdmin: true },
    { name: "Emma", age: 30, isAdmin: false },
    { name: "Ryan", age: 28, isAdmin: true }
];

console.log(users[0].age);
console.log(users[1].isAdmin);
// Array of Books:
javascript

var books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" }
];

console.log(books[2].title);
// Array of Cars:
javascript
var cars = [
    { make: "Honda", model: "Civic", year: 2020 },
    { make: "Ford", model: "F-150", year: 2018 },
    { make: "BMW", model: "X5", year: 2021 }
];

console.log(cars[1].make);
// Array of Movies:
javascript
var movies = [
    { title: "The Shawshank Redemption", director: "Frank Darabont" },
    { title: "The Godfather", director: "Francis Ford Coppola" },
    { title: "The Dark Knight", director: "Christopher Nolan" }
];

console.log(movies[2].director);
// Array of Restaurants:
javascript

var restaurants = [
    { name: "McDonald's", cuisine: "Fast Food", rating: 3.5 },
    { name: "Subway", cuisine: "Sandwiches", rating: 4.0 },
    { name: "Starbucks", cuisine: "Coffee", rating: 4.2 }
];

console.log(restaurants[0].rating);

var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Do-While Loop with Array List:
javascript
var fruits = ["Apple", "Banana", "Orange", "Mango"];
var i = 0;

do {
    console.log(fruits[i]);
    i++;
} while (i < fruits.length);
// For-Each Loop with Array List:
javascript
var colors = ["Red", "Green", "Blue", "Yellow"];

colors.forEach(function(color) {
    console.log(color);
});
// For Loop with Array of Objects:
javascript
var students = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 }
];

for (var i = 0; i < students.length; i++) {
    console.log(`${students[i].name} - Age: ${students[i].age}`);
}
// For-Each Loop with Array of Objects:
javascript
var products = [
    { name: "Laptop", price: 999 },
    { name: "Phone", price: 599 },
    { name: "Tablet", price: 399 }
];

products.forEach(function(product) {
    console.log(`${product.name} - Price: $${product.price}`);
});