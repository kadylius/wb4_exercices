'use strict';

// different type of loops
// they all do the same thing
// an array of object has multiple properties

let students = ['Alice', 'Bob', 'Charlie', 'David'];
let students2 = [
    { age: 12, name: 'Alice' },
    { age: 23, name: 'Bob' },
    { age: 33, name: 'Charlie' },
    { age: 34, name: 'David' }
];

//Good for exact amount of times you want to repeat oit
for (let i = 0; i <4; i++) {
    console.log(`Student ${i + 1}: ${students[i]}`);
}

//for each example (Looping over all the students always)
students.forEach(student => {
    console.log(`Student ${student}`);
});

//for of: ( a newer way of writing just like var / let)
for (const student of students) {
    console.log(`Student: ${student}`);
}
//for  loop: is typically used in Array of objects:
for (const index in students2) {
    if (students2.hasOwnProperty(index)) {  // Ensures that we're only accessing direct properties
        console.log(`Student ${students2[index].name}, Age: ${students2[index].age}`);
    }
}