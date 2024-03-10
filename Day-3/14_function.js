//  declaring a function using function keyborads

function add(a, b) {
  return a + b;
}

// calling function
let result = add(10, 20);
console.log(result);

// function expression
let addition = function (a, b) {
  console.log(a + b);
};
addition(30, 80);

// arrow function
const greet = (personName) => {
  console.log(`Hello from ${personName}`);
};

greet("kshittiz");

// parameters and argument in arrow function
const multiplication = (a, b) => a * b;

let mul = multiplication(122, 2);
console.log(mul);

// nested function
function outer() {
  console.log("Outer Function");
  function inner() {
    console.log("Inside Inner Function");
  }
  // calling inner function
  inner();
}
// calling outer function
outer();

// default values

function msg(name = "programmer") {
  console.log(`Hello form ${name}`);
}

msg();
msg("Kshittiz");
