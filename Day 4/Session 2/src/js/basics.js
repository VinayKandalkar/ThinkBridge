// Solution 1: Print Sum of Two Numbers 
const x = 10;
const y = 5;
const sum = x + y;
console.log("The sum of x and y is:", sum);

// Solution 2: Prining Reverse of a String
function reverseStr(s) {
  return s.split('').reverse().join('');
}
console.log(reverseStr('hello'));


// Solution 3: From [1,2,3,4,5,6] get even numbers and their squares.
const arr = [1,2,3,4,5,6];
const evens = arr.filter(n => n % 2 === 0);
const squares = arr.map(n => n * n);
console.log(evens, squares);


// Solution 4: Factorial of a Number (5)
function factorial(n) {
  if (n < 0) return undefined;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}
console.log(factorial(5));

// Solution 5: grade from score
function grade(score) {
  if (score >= 90) return 'A';
  if (score >= 75) return 'B';
  if (score >= 50) return 'C';
  return 'F';
}
console.log(grade(82));






