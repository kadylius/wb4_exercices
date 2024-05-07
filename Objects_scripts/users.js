'use strict';
// come up w a nickname
// Create a array of javascript objects with at least two students in it.

let students = [
    {
        name: "Andres Meraz",
        group: "Flexbox Forrest",
        github: "https://github.com/AndresMeraz",
        linkedin: "https://www.linkedin.com/in/andresmeraz/",
        email: "andres@example.com",
        nickname: "The Game",
        imageurl: "img/Avatar_Student_Male.jpg",
        gender: "male"
    },
    {
        name: "Andres Meraz",
        group: "Flexbox Forrest",
        github: "https://github.com/AndresMeraz",
        linkedin: "https://www.linkedin.com/in/andresmeraz/",
        email: "andres@example.com",
        nickname: "The Game",
        imageurl: "img/Avatar_Student_Male.jpg",
        gender: "male"
    },
    {
        name: "Kadiatou barry",
        group: "App dev",
        github: "https://github.com/kadylius",
        linkedin: "https://www.linkedin.com/in/andresmeraz/",
        email: "kbarry@appdev.yearup.org",
        nickname: "The connoisseur",
        imageurl: "https://fineartconnoisseur.com/wp-content/uploads/2023/11/Fine-Art-Connoisseur-magazine-NovDec23-600w.jpg",
        gender: "female"
    }
]

console.log(`The student ${students[1].name} is a ${students[1].gender}. His nickname is ${students[1].nickname} and he is part of the group ${students[1].group}`);
console.log(`The student ${students[2].name} is a ${students[2].gender}. Her nickname is ${students[2].nickname} and she is part of the group ${students[2].group}`);
console.log(`The student ${students[1].name} is a ${students[1].gender}. His nickname is ${students[1].nickname}`);

