//  stack and Heap Memory in js

// stack memory use by all primitive tyeps datatypes

let personName = "Kshittiz";
let personTwo = personName;
personTwo = "Arjun";
console.log(personName); // Kshittiz
console.log(personTwo); // Arjun

// heap is use by Heap Memory
// in refernec types when
// When you assign an variable  to another variable,
// you're actually assigning a reference of that variable.

let myArray = [1, 2, 3, 4, 5];
console.log("Before: ", myArray);

let arrayTwo = myArray; // stroing the reference to myArray (memory)
arrayTwo[0] = 50;
console.log("Changing Value from 2nd array: ", arrayTwo);
console.log("After: ", myArray);
