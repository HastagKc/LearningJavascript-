// * array in js
// Array is a data structure in programming languages
// that is used to store and organize a collection of elements

// * Array is js is resizeable

// Array in js
// 1. each element can be different types
// 2. Array element accessed using non-negative number (Index)
// 3. Array index start form 0 and last element is array length -1
// 4. Javascript operation create shallow copies of an array

// ----Shallow Copies-------------------??????????
/*

*Shallow Copy:*
Making a shallow copy of an object is like copying a list of items by referencing them. Changes to one item affect both the original and the copy because they share the same references.

*Deep Copy:*
Creating a deep copy involves making a new set of items with the same names. Changes to one item do not affect the other because they are independent copies.

*/

// * creating an array

let myArr = [1, 2, 3, 4, 5];
console.log("A: ", myArr); // [ 1, 2, 3, 4, 5 ]

let arr2 = new Array("Kshittiz", "Ram", "Hari");
console.log("B: ", arr2); // [ 'Kshittiz', 'Ram', 'Hari' ]

// * insertion in array
// push method insert element on last index of the array
//
myArr.push(20); // [ 1, 2, 3, 4, 5, 20 ]
console.log(myArr);

// insert element in first index (0 index ) of an array
myArr.unshift(100);
console.log(myArr);

// * update
myArr[0] = 102;
console.log(myArr);

// * deletion

// arr2=  [ 'Kshittiz', 'Ram', 'Hari' ]
// arr2.pop();
// console.log(arr2);  //[ 'Kshittiz', 'Ram' ]

// delete element from first index
arr2.shift();
console.log(arr2); // [ 'Ram', 'Hari' ]

// * slice vs splice

// * 1.`slice()` method:

/*  

- The `slice()` method is used to extract a portion of an array and create a 
        new array containing the selected elements.

- It doesn't modify the original array; instead, it returns a shallow copy of 
        the selected elements.

- The syntax is `array.slice(start, end)`, where `start` is the index at which 
    to begin extraction (inclusive) and `end` is the index at which to end 
    extraction (exclusive).


*/

const fruits = ["apple", "banana", "cherry", "date"];

// Extract elements from index 1 to 3 (not including 3)
const selectedFruits = fruits.slice(1, 3);

console.log(selectedFruits); // Output: ['banana', 'cherry']
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

//* 2.`splice()` method:
/*


 - The `splice()` method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.


- It modifies the original array and returns an array containing the deleted elements.

- The syntax is `array.splice(start, deleteCount, item1, item2, ...)`, where `start` is the 
   index at which to start changing the array, `deleteCount` is the number of elements to remove, and `item1, item2, ...` are the elements to add.


   
*/
const fruitsArr = ["apple", "banana", "cherry", "date"];

// Remove 1 element starting from index 1
const deletedFruits = fruits.splice(1, 1);

console.log(deletedFruits); // Output: ['banana']
console.log(fruits); // Output: ['apple', 'cherry', 'date']

/*

In summary, `slice()` is used to create a new array by 
extracting a portion of the original array without modifying 
it, while `splice()` is used to modify the original array by 
adding, removing, or replacing elements in place.

*/
