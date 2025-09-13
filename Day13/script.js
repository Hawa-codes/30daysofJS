// Exercises:Level 1
// Display the countries array as a table
const countriees = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
];
console.table(countriees);

// Display the countries object as a table
const country = [
  { Country: 'Finland', Capital: 'Helsinki' },
  { Country: 'Sweden', Capital: 'Stockholm' },
  { Country: 'Norway', Capital: 'Oslo' }
];
console.table(country);

// Use console.group() to group logs
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

//Exercises:Level 2
// 10 > 2 * 10 use console.assert()
console.assert(10 > 2);

// Write a warning message using console.warn()
console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error');

// Write an error message using console.error()
console.error('This is an error message')
console.error('We all make mistakes');

// Exercises:Level 3
// Check the speed difference among the following loops: while, for, for of, forEach
