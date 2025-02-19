function foo(a, b) {
  // Input validation: Check if both 'a' and 'b' are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Return 0 if either is not a number
  }
  return a + b; 
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10
console.log(foo('hello', 5)); // Output: 0
console.log(foo(5, 'world')); // Output: 0