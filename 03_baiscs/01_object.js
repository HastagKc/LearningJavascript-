// In JavaScript, objects are complex data types that allow you to store collections of key-value pairs.
// They are fundamental to the language and are used extensively in web development.

// creating an object in js

const person = {
  name: "kshittiz",
  age: 22,
  email: "chaudharykshittiz950@gmail.com",
  address: {
    city: "Kalanki",
    country: "Nepal",
  },

  message: (sayHello = () => "Hello from Top Programmer"),
};

// accessing value using key
console.log(person.name);
x = person.message();
console.log(x);

// accessing nested object
console.log(person.address.city);

// iterating over object
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// object Methods

// The line const keys = Object.keys(person); will
// return an array containing all the enumerable property names(keys) of the person object.
//Each element of the
// array will be a string representing one of the
// properties of the person object.
const keysOfArray = Object.keys(person);
// ['name', 'age', 'email', 'address', 'sayHello']
console.log(keysOfArray); // address
// address

const valuesOfArray = Object.values(person);
console.log(valuesOfArray);

// The line const entries = Object.entries(person); will return an array of arrays, where each
// inner array contains a key - value pair from the person object.
const entries = Object.entries(person);
console.log(entries);
