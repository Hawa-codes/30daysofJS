// create an empty set
const num = new Set();
console.log(num);   // Set(0)

// Create a set containing 0 to 10 using loop
let numb = new Set();

for (let num = 0; num <= 10; num++) {
  numb.add(num);
}
console.log(numb);

// Remove an element from a set
console.log(numb.delete(4));   // true
console.log(numb);

// Clear a set
numb.clear()
console.log(numb)

// Create a set of 5 string elements from array

// Create a map of countries and number of characters of a country