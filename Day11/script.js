// Exercises: Level 1
// no 1 Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);  // Finland Estonia Sweden Denmark Norway

// Destructure the rectangle object by its properties or keys.
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
let {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);  // 20 10 200 60


// Exercises: Level 2
//Iterate through the users array and get all the keys of the object using destructuring
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

for (const {name, scores, skills, age} of users){
  console.log(name, scores, skills, age)
}
// Find the persons who have less than two skills
const lessThanTwo = users.filter(user => user.skills.length < 2);
console.log(lessThanTwo);   // John


// Exercises: Level 3
// Destructure the countries object print name, capital, population and languages of all countries
const countriess = [
  {
    name: "Nigeria",
    capital: "Abuja",
    population: 200000000,
    languages: ["English", "Hausa", "Yoruba", "Igbo"]
  },
  {
    name: "France",
    capital: "Paris",
    population: 67000000,
    languages: ["French"]
  },
  {
    name: "Japan",
    capital: "Tokyo",
    population: 125000000,
    languages: ["Japanese"]
  }
];
for (const {name, capital, population, languages} of countriess){
  console.log(name, capital, population, languages)
}

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
let [name, skills, jsScore, reactScore] = student;
  console.log(name, skills, jsScore, reactScore);

// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
const convertArrayToObject = stud => {
    let arrayToObject = [];

   for (const [name, skills, score] of students) {
    arrayToObject.push({ name, skills, score });
  }

  return arrayToObject;
};

console.log(convertArrayToObject(students))  

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
const studennt = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }
const newStudent = {
  ...studennt,
  skills: {
    frontEnd: [...studennt.skills.frontEnd, { skill: 'Bootstrap', level: 8 }],
    backEnd: [...studennt.skills.backEnd, { skill: 'Express', level: 9 }],
    dataBase: [...studennt.skills.dataBase, { skill: 'SQL', level: 8 }],
    dataScience: [...studennt.skills.dataScience, 'SQL']
  }
};
console.log(newStudent)
