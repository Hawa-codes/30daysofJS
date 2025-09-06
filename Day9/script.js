// Exercises: Level 1
// no 1 Explain the difference between forEach, map, filter, and reduce.
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
}) // forEach
const modifiedArray = arr.map(function (element, index, arr) {
  return element
}) // map
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)  // filter
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum);

// no 2 Define a callback function before you use it in forEach, map, filter or reduce.
// no 3 Use forEach to console.log each country in the countries array.
// no 4 Use forEach to console.log each name in the names array.
// no 5 Use forEach to console.log each number in the numbers array.
// no 6 Use map to create a new array by changing each country to uppercase in the countries array.
// no 7 Use map to create an array of countries length from countries array.
// no 8 Use map to create a new array by changing each number to square in the numbers array
// no 9 Use map to change to each name to uppercase in the names array
// no 10 Use map to map the products array to its corresponding prices.
// no 11 Use filter to filter out countries containing land.
// no 12 Use filter to filter out countries having six character.
// no 13 Use filter to filter out countries containing six letters and more in the country array.
// no 14 Use filter to filter out country start with 'E';
// no 15 Use filter to filter out only prices with values.
// no 16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// no 17 Use reduce to sum all the numbers in the numbers array.