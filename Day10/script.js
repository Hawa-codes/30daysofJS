// Exercises:Level 2
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
const Fruit = ["apple", "banana", "cherry", "date", "elderberry"];
const Fruits = new Set(Fruit)
console.log(Fruits);   //Set(5) {'apple', 'banana', 'cherry', 'date', 'elderberry'}

// Create a map of countries and number of characters of a country
const countries = [['Finland', 'Sweden'],
['Norway', 'Stockholm']]
const country = new Map(countries)
console.log(country);  // Map(2) {'Finland' => 'Sweden', 'Norway' => 'Stockholm'}
console.log(country.size); // 2

// Exercises:Level 2
// Find a union b
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C);  // Set(6) {4, 5, 8, 9, 3, …}

// Find a intersection b
let d = a.filter((num) => B.has(num))
let D = new Set(d)

console.log(D);  // Set(2) {4, 5}

// Find a with b
let f = a.filter((num) => !B.has(num))
let F = new Set(f)

console.log(F);  // Set(2) {8, 9}


// Exercises:Level 3
//How many languages are there in the countries object file.
const languages = ['English', 'French', 'Arabic', 'Spanish', 'Chinese', 'Russian', 'English', 'Portuguese', 'Dutch', 'Arabic', 'German', 'Chinese', 'Swahili', 'Serbian'];

const langSet = new Set(languages)
const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) 
  counts.push({lang: l, count: filteredLang.length })
}
console.log(counts); 

// *** Use the countries data to find the 10 most spoken languages:
