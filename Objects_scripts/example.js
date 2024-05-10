'use strict';


let favoritemovie = ['The Shawshank Redemption', 'The Green Mile', 'Forrest Gump'];

console.log(`The best 3 movies are ${favoritemovie[2]}, ${favoritemovie[1]}, ${favoritemovie[0]}`);

let favoriteMovies = [
    "Memoirs of a Geisha",
    "Training Day",
    "Princess and the Frog",
    "Spiderman",
    "Deadpool",
    "Avengers",
    "Forrest Gump",
    "The Help",
    "Barefoot",
    "The Conjuring",
    "Cars",
    "Grease",
    "Wreck-It Ralph",
    "Back to the Future",
    "Spirited Away",
    "The Shawshank Redemption",
    "The Green Mile",
    "Forrest Gump", // This duplicate will be removed
    "Rollerball",
    "Planet of the Apes",
    "2001: A Space Odyssey",
    "How To Train Your Dragon",
    "Howl's Moving Castle",
    "Ponyo",
    "Catch Me If You Can",
    "The Little Rascals",
    "Scream",
    "Shrek 2",
    "Megamind",
    "Shrek",
    "The Interview",
    "The Proposal",
    "The Pursuit of Happyness",
    "The Longest Yard",
    "17 Again",
    "Rush Hour",
    "Athena",
    "The Pianist",
    "I feel Joker",
    "The Godfather",
    "The Mask",
    "Pan's Labyrinth",
    "Transformers",
    "Shrek 4"
];

favoriteMovies.forEach(favoriteMovies => {
    console.log(`You should watch the movie ${favoriteMovies}`);
});

let movietitle = ['The Shawshank Redemption', 'The Green Mile', 'Forrest Gump'];

console.log(`I think that ${favoritemovie[2]} is a good movie because it teaches you a lot about life. This is an image of the movie "https://www.hollywoodreporter.com/wp-content/uploads/2016/07/forrest_gump_still.jpg"`);
console.log(`${favoritemovie[1]} is a good movie because the story is very captivating. This is an image of the movie`);
console.log(`${favoritemovie[0]} is a good movie because the actors bring so much emotion on the screen and the storyline is very interesting. This is an image of the movie`);

let movies = [
    {
        title: "The Matrix",
        reasonWhy: "Awesome effects",
        movieImageURL: "https://example.com/matrix.jpg"
    },
    {
        title: "Inception",
        reasonWhy: "Mind-bending plot",
        movieImageURL: "https://example.com/inception.jpg"
    },
    {
        title: "Interstellar",
        reasonWhy: "Stunning visuals and deep emotional impact",
        movieImageURL: "https://example.com/interstellar.jpg"
    }
];

function displayRandomMovie() {
    let randomIndex = Math.floor(Math.random() * movies.length);
    let randomMovie = movies[randomIndex];
    console.log(`You should watch "${randomMovie.title}" because ${randomMovie.reasonWhy}, ${randomMovie.movieImageURL}`);
}

// Call the function to display a random movie
displayRandomMovie();