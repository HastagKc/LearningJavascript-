const num = 9000;
console.log(num);
console.log(typeof num); // number
console.log(isNaN(num)); // false

// converting number into string
let anotherNum = num.toString();
console.log(typeof anotherNum);
console.log(anotherNum.length);

// to fixed method
const num2 = 10.09098;
console.log(num2.toFixed(2));

// convert string value into integer or floating-point number
let stringToNumber = parseInt(anotherNum);
console.log(typeof stringToNumber);

const num3 = 100000000000;
console.log(num3.toLocaleString("en-IN"));

// value from 10 to 20

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
