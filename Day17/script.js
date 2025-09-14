// Exercises: Level 1
// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Hawa')
localStorage.setItem('lasttName', 'Adediran')
localStorage.setItem('age', 21)
localStorage.setItem('country', 'Nigeria')
localStorage.setItem('city', 'Osogbo')

// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
  firstName: 'Amirah',
  lastName: 'Adediran',
  age: 13,
  skills: ['HTML', 'CSS', 'JS', 'React'],
  country: 'Nigeria', 
  enrolledKeys: 3,
  valueOfKeys: 'valuable'
}

const userStudent = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', userStudent)

// Exercises: Level 3
// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = {
  firstName: "Hawa",
  lastName: "Adediran",
  incomes: [], 
  expenses: []
}