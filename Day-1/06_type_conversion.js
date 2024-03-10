//! 1. Number to String

let numToString = String(42);
console.log(numToString); // Output: "42"

let num=100; 
let numtoString2=String(num);
console.log(typeof numtoString2); // string


//! 2. String to Number
let strToNum = Number("123");
console.log(strToNum); // Output: 123


//* String change into number but Note: it will 
//* convert into NaN(Not a Number)

let str="kshittiz";
let strToNumber=Number(str);
console.log(strToNumber); // NaN (Not a Number)


 //! 3. Boolean to Number
let boolToNum = Number(true);
console.log(boolToNum); // Output: 1

let boolToNum2=Number(false);
console.log(boolToNum2);  // Output: 0
console.log(typeof boolToNum2); // number

//! 4. Number to Boolean
let numToBool = Boolean(0);
console.log(numToBool); // Output: false

let numToBoolean=Boolean(1);
console.log(typeof numToBoolean); // boolean
console.log(numToBoolean);  // true

// String to Boolean
let strToBool = Boolean("true");
console.log(strToBool); // Output: true

let name= "Kshittiz"; // * providing value to string 
let stringToBoolean= Boolean(name);
console.log(typeof stringToBoolean); // boolean
console.log(stringToBoolean); // true

//* if empty string converts into boolean 
let emptyString="";
let stringToBoolean2=Boolean(emptyString);
console.log(stringToBoolean2); // false 
console.log(typeof stringToBoolean2);  // boolean


//! 5. Boolean to String
let boolToStr = String(false);
console.log(boolToStr); // Output: "false"
console.log(typeof boolToStr);

let boolToStr2 = String(true);
console.log(boolToStr2);  // Output: "true"
console.log(typeof boolToStr); 


// Null and Undefined to Number
let nullValue = null;
let undefinedValue;
let numNull = Number(nullValue);
console.log(numNull);  // Output: 0

let numUndefined = Number(undefinedValue);   
console.log(numUndefined);  // Output: NaN
