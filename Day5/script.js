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