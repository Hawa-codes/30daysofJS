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