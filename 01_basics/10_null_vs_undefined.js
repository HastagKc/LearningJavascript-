//! null Vs Undefined
/*

* Use Cases:

1) undefined 
* Use undefined when a variable has been declared but not 
* yet assigned or a function parameter is missing.

2) null
* Use null to explicitly indicate the absence of 
* an object or a deliberate non-assignment.

*/

let loggedIn = null;
console.log(loggedIn); // null
console.log(typeof loggedIn); // object

//  example of undefined
let notAssigned;
console.log(notAssigned); // undefiend
