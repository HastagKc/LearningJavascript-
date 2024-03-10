// ! String in javascript
// a string is a sequence of characters, and
// its is primitive data types

// String store in stack memory
// String original value never change

let favAnimal = "Dog";

let message = `${favAnimal} is my favorite animal`;
console.log(message);

// indexes and lenght in string
// favAnimal->    D    o   g
// Index    ->    0    1   2

console.log(favAnimal[0]); // D
console.log(favAnimal.length);

// toUpperCase() toLowerCase() and trim()
let greeting = " Good Morning  ";
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

// trim() remove white space before and after the text
console.log(greeting.length);
greeting.trim();
console.log(greeting.trim().length);

// indexOf(argument)
let msg = "Uk university is shit";
console.log(msg.indexOf("n"));

// slice(startIndex, endIndex)
console.log(msg.slice(17, 21));

// replace
console.log(msg.replace("shit", "Good"));
