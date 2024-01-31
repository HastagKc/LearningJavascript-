// // push and concat in js

// let arr = [1, 2, 3, 4, 5];
// let arr2 = ["kshittiz", "Ram", "Amit"];

// // push method push element in original array
// arr.push(arr2); // output [ 1, 2, 3, 4, 5, [ 'kshittiz', 'Ram', 'Amit' ] ]

// console.log(arr);

// // concate method push element in new array

// let marvel_superheros = ["Captain America", "Ironman", "Hulk"];
// let dc_superheros = ["Batman", "Superman", "Aqua Man"];

// let all_superheros = marvel_superheros.concat(dc_superheros);
// console.log(marvel_superheros);
// console.log(all_superheros);

// // spread operator
// let local_heros = ["Shaktiman", "Nagraj"];
// let super_heros = [...marvel_superheros, ...dc_superheros, ...local_heros];

// console.log("Using spread operator", super_heros);

// // flat
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// // Using flat(Infinity) to recursively flatten nested arrays
// const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);
