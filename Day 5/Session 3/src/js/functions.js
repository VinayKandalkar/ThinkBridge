// Problem 1)  add function
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 10));


// Problem 2) multiply function
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(5, 10));


// Problem 3) greet function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Vinay"));


// Problem 4) power function
const power = function(a, b) {
  return Math.pow(a, b);
};
console.log(power(5, 3));

// Problem 5) Arrow function
const divide = (a, b) => {
  if (b === 0) return Infinity
  return a / b;
};
console.log(divide(10, 2));


// Problem 6) Pure vs Impure function
function pureDouble(x) {
  return x * 2;
}
console.log(pureDouble(5)); 
let y = 5;
function impureDouble() {
  return y * 2;
}   
console.log(impureDouble()); 
y = 10;
console.log(impureDouble()); 


// Problem 7) Recursive function
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); 


// Problem 8) Callback function
function mapArray(arr, callback) {
  const result = [];    
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];
const doubled = mapArray(numbers, function(num) {
  return num * 2;
}); 
console.log(doubled);
const squared = mapArray(numbers, function(num) {
  return num * num;
});
console.log(squared);
const incremented = mapArray(numbers, function(num) {
    return num + 1; 
});
console.log(incremented);


