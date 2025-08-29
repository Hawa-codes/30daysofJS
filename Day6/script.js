// no 1 Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i = 0; i <= 10; i++){
  console.log(i)
}
let i = 0
while (i <= 10) {
  console.log(i)
  i++
}
let j = 0;
do {
  console.log(j)
  j++
} 
while (j <= 10)  // 0 1 2 3 4 5 6 7 8 9 10

// no 2  Iterate 10 to 0 using for loop, do the same using while and do while loop
let a = 0;
for(let a = 10; a >= 0; a--){
  console.log(a)
}

let p = 10;
while (p >= 0) {   
  console.log(p);
  p--;
}

let w = 10;
do {
  console.log(w)
  w--
} 
while (w >= 0)  // 10 9 8 7 6 5 4 3 2 1

// no 3 Iterate 0 to n using for loop
let n = 20;
for(let h = 0; h <= n; h++){
  console.log(h)  // // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
}

// **no 4 Write a loop that makes the following pattern using console.log():
let pattern = "";
for (let i = 1; i <= 7; i++) {
  pattern += "#";   
  console.log(pattern);
}

// no 5 Use loop to print the following pattern:
for(let b = 0; b <= 10; b++){
  console.log(`${b} * ${b} = ${b * b}`)
}
/* 
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

// no 6 Using loop print the following pattern
console.log("i   i^2   i^3");
for (let i = 0; i <= 10; i++) {
  console.log(i + "   " + (i ** 2) + "   " + (i ** 3));
}

// no 7 Use for loop to iterate from 0 to 100 and print only even numbers
for(let c = 0; c <= 100; c++){
  if (c % 2 === 0)
  console.log(c)
}

for(let c = 0; c <= 100; c+= 2){
  console.log(c)  // shorter version
}

// no 8 Use for loop to iterate from 0 to 100 and print only odd numbers 
for(let c = 0; c <= 100; c++){
  if (c % 2 != 0)
  console.log(c)
}

// **no 9 Use for loop to iterate from 0 to 100 and print only prime numbers 
for (let c = 2; c <= 100; c++) {
  let isPrime = true;   

  for (let i = 2; i <= Math.sqrt(c); i++) {
    if (c % i === 0) {
      isPrime = false;  
      break;            
    }
  }

  if (isPrime) {
    console.log(c);     
  }
}

// no 10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
for(let i = 0; i <= 100; i++){
  let t = `${i} + ${i} = ${i + i}`;
  console.log(t)
}
// The sum of all numbers from 0 to 100 is 5050.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;  
}
console.log(sum); // 5050

// no 11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let suum = 0;
for(let c = 0; c <= 100; c += 2){
    suum += c;
}
console.log("The sum of all even numbers from 0 to 100 is " + suum); // The sum of all even numbers from 0 to 100 is 2550

let summ = 0;
for(let c = 0; c <= 100; c++){
  if (c % 2 != 0){
    summ += c;
}
}
console.log("The sum of all odd numbers from 0 to 100 is " + summ);  // The sum of all odd numbers from 0 to 100 is 2500

// no 12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array [2550, 2500]
let sumEven = 0;
let sumOdd = 0;
for (let c = 0; c <= 100; c++) {
  if (c % 2 === 0) {
    sumEven += c;  // add even numbers
  } else {
    sumOdd += c;   // add odd numbers
  }
}

let g = [sumEven, sumOdd];
console.log(g);  // [2550, 2500]

// **no 13 Develop a small script which generate array of 5 random numbers
let numbers = [];

for (let i = 0; i < 5; i++) {
  let rand = Math.floor(Math.random() * 30); 
  numbers.push(rand);
}
console.log(numbers); // [27, 8, 12, 18, 9]

// **no 14 Develop a small script which generate array of 5 random numbers and the numbers must be unique
let num = [];
while (num.length < 5) {
  let rand = Math.floor(Math.random() * 50) * 2; // even numbers from 0–98
  if (!num.includes(rand)) { // ensure uniqueness
    num.push(rand);
  }
}
console.log(num);  // [32, 54, 78, 52, 88] 

// no 15 Develop a small script which generate a six characters random id:
let characters = [];

for (let i = 0; i < 6; i++) {
  let rand = Math.floor(Math.random() * 30); 
  numbers.push(rand);
}
console.log(numbers); 

// Exercises: Level 2
// no 1 


// no 4 Using the above countries array, create the following new array
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
 const newArr = [];
 for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase())
 }
console.log(newArr);  // ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']


// no 5 Using the above countries array, create an array for countries length'.
const countrries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
const newArra = [];
for (let v = 0; v < countrries.length; v++) {
  newArra.push(countrries[v].length);
}
console.log(newArra); // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

// no 6 Use the countries array to create the following array of arrays:
const counttries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const countryArr = [];
for (let i = 0; i < countrries.length; i++) {
  let  name = counttries[i];
  let abbrev = name.slice(0, 3).toUpperCase(); 
  // let length = name.length;
  countryArr.push([name, abbrev, newArra]);
}

console.log(countryArr);

// **no 7 In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let withLand = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().includes('land')) {
    withLand.push(countries[i]);
  }
}

if (withLand.length > 0) {
  console.log(withLand);
} else {
  console.log('All these countries are without land'); // ['Finland', 'Ireland']
}

// no 8 In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let withIa = [];
for (let i = 0; i < countries.length; i++) {
  
  if (countries[i].toLowerCase().endsWith('ia')) {
    withIa.push(countries[i]);
  }
}

if (withIa.length > 0) {
  console.log(withIa);
} else {
  console.log(countries + " These are countries ends without 'ia'");  // ['Albania', 'Bolivia', 'Ethiopia']
}


// no 9 Using the above countries array, find the country containing the biggest number of characters.
let longest = countries[0]; 

for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longest.length) {
    longest = countries[i]; 
  }
}

console.log(longest); // Ethiopia

// shortest
let shortest = countries[0]; 

for (let i = 1; i < countries.length; i++) {
  if (countries[i].length < shortest.length) {
    shortest = countries[i]; 
  }
}

console.log(shortest);  // Japan

// no 10 Using the above countries array, find the country containing only 5 characters.
let five = [];
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length === 5) {
    five.push(countries[i]);
  }
}
console.log(five); // ['Japan', 'Kenya']