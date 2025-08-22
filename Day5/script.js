// no 1 Declare an empty array;
let emptyArray = [];
console.log(emptyArray);

// no 2 Declare an array with more than 5 number of elements
let numbers = [10, 15, 20, 25, 30, 35, 40];

// no 3 Find the length of your array
console.log("Length of numbers:", numbers.length);

// no 4 Get the first item, the middle item and the last item of the array
let firstItem = numbers[0];
let middleItem = numbers[Math.floor(numbers.length / 2)];
let lastItem = numbers[numbers.length - 1];
console.log("First:", firstItem);
console.log("Middle:", middleItem);
console.log("Last:", lastItem);

// no 5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [42, "hello", true, null, { name: "Hawa" }, [1, 2, 3]];
console.log("mixedDataTypes:", mixedDataTypes);
console.log("Length:", mixedDataTypes.length);

// no 6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// no 7 Print the array using console.log()
console.log(itCompanies);

// no 8 Print the number of companies in the array
console.log("Number of companies:", itCompanies.length);

// no 9 Print the first company, middle and last company
console.log("First company:", itCompanies[0]); // Facebook
console.log("Middle company:", itCompanies[4]); // Apple
console.log("Last company:", itCompanies[itCompanies.length - 1]);  // Amazon

// no 10 Print out each company
console.log("First company:", itCompanies[0]);
console.log("First company:", itCompanies[1]);
console.log("First company:", itCompanies[2]);
console.log("First company:", itCompanies[3]);
console.log("First company:", itCompanies[4]);
console.log("First company:", itCompanies[5]);
console.log("First company:", itCompanies[6]);

// no 11 Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase()); 
console.log(itCompanies[1].toUpperCase()); 
console.log(itCompanies[2].toUpperCase()); 
console.log(itCompanies[3].toUpperCase()); 
console.log(itCompanies[4].toUpperCase()); 
console.log(itCompanies[5].toUpperCase()); 
console.log(itCompanies[6].toUpperCase());

// no 12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = itCompanies.slice(0, -1).join(", ") + " and " + itCompanies[itCompanies.length - 1] + " are big IT companies.";
console.log(sentence);  // Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.

// no 13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = "Google"; 
if (itCompanies.includes(company)) {
  console.log(company);  
} else {
  console.log("Company is not found");
}
// no 14 Filter out companies which have more than one 'o' without the filter method
// no 15 Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies);

// no 16 Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies);

// no 17 Slice out the first 3 companies from the array
console.log(itCompanies.slice(3,7));

// no 18 Slice out the last 3 companies from the array
console.log(itCompanies.slice(0,4));

// no 19 Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,4)); 

// no 20 Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// no 21 Remove the middle IT company or companies from the array
// no 22 Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// no 22 Remove all IT companies
itCompanies = [];
console.log(itCompanies);

// Exercise: Level 2 
// no 1 Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// no 2 First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// remove all the punctuations
let cText = text.replace(/[.,]/g, '')
console.log(cText);  // I love teaching and empowering people I teach HTML CSS JS React Python

// change the string to array
let words = cText.split(' ')
console.log(words);
/*
(13) ['I', 'love', 'teaching', 'and', 'empowering', 'people', 'I', 'teach', 'HTML', 'CSS', 'JS', 'React', 'Python']
0
: 
"I"
1
: 
"love"
2
: 
"teaching"
3
: 
"and"
4
: 
"empowering"
5
: 
"people"
6
: 
"I"
7
: 
"teach"
8
: 
"HTML"
9
: 
"CSS"
10
: 
"JS"
11
: 
"React"
12
: 
"Python"
length
: 
13
*/

// n0 3 In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat')
console.log(shoppingCart);
/*
0
: 
"Meat"
1
: 
"Milk"
2
: 
"Coffee"
3
: 
"Tea"
4
: 
"Honey"
length
: 
5
*/

// no 3 add Sugar at the end of you shopping cart if it has not been already added
const shoppinggCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppinggCart.includes('Sugar')) {
  shoppinggCart.push('Sugar');
}
console.log(shoppinggCart);  // ['Milk', 'Coffee', 'Tea', 'Honey', 'Sugar']

// no 3 remove 'Honey' if you are allergic to honey
const shoppinngCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppinngCart.pop('Honey') 
console.log(shoppinngCart);  // ['Milk', 'Coffee', 'Tea']

// no 3 modify Tea to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}
console.log(shoppingCart); ['Meat', 'Milk', 'Coffee', 'Green Tea', 'Honey']

// no 4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countriies = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Finland', 'Germany'];
if (countriies.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countriies.push('Ethiopia');
}
console.log(countriies);

// no 5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);  // ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB', 'Sass']
}

// no 6 Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);  // ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB']

// Exercise: Level 3
// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log('Sorted ages:', ages);
console.log('Min age:', maxAge);  // 19
console.log('Max age:', maxAge);  // 26

// Find the median age(one middle item or two middle items divided by two)
// const agees = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// agees.sort((a, b) => a - b);
// let median;
// const mid = Math.floor(agees.length / 2);

// if (agees.length % 2 === 0) {
//   median = (agees[mid - 1] + agees[mid]) / 2;
// } else {
//   median = ages[mid];
// }

// console.log("Sorted ages:", ages);
// console.log("Median age:", median);

// Find the average age(all items divided by number of items)
const agees = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const mid = Math.floor(agees.length / 2);

// Find the range of the ages(max minus min)
range = maxAge - minAge
console.log(range);  // 7

//  .Slice the first ten countries from the countries array
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia']

