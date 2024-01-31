// * array of

let stringName = "Kshittiz";
let stringNameArray = Array.of(stringName);
console.log(stringNameArray);

let arr3 = Array.from(stringName);
console.log(arr3);

/* 
    Let's consider a real-world example where Array.of() can be useful. Imagine you have a function that accepts variable arguments and you want to convert those arguments into an array. You could use Array.of() to ensure that the arguments are treated as individual elements of the array.

*/

function createShoppingList() {
  const shoppingList = Array.of(...arguments);
  console.log(shoppingList);
}

createShoppingList("Milk", "Eggs", "Bread", "Butter");
// Output: ['Milk', 'Eggs', 'Bread', 'Butter']

/* 
    In this example, the createShoppingList function takes any number of arguments and uses Array.of(...arguments) to create a new array from the passed arguments. This ensures that each item (argument) becomes an individual element of the array, regardless of the number or types of arguments.

    This approach is useful in situations where you want to work with an array-like structure but need to ensure that the passed values are treated as separate elements 
*/

//* Array from
