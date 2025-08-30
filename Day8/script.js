// Exercises: Level 1
// no 1 Create an empty object called dog
const dog = {};

// no 2 Print the the dog object on the console
console.log(dog);  // Object

// no 3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const doog = {
  name: "Akani",
  legs: 4,
  color: "brown",
  age: 3,
  bark: function () {
    return "woof woof";
  }
};

// no 4 Get name, legs, color, age and bark value from the dog object
doog.name = "Akani";
doog.legs = 4;
doog.color = "brown";
doog.age = 3;
doog.bark = "woof woof"

// Set new properties the dog object: breed, getDogInfo
doog.breed = "German Shepherd";

doog.getDogInfo = function() {
    let statement = `The dog’s name is ${this.name}.\nHe is a ${this.age}year-old ${this.breed} with ${this.legs} strong legs, a ${this.color} coat, and a ${this.bark} bark`
    return statement;
}
console.log(doog.getDogInfo());

// Exercises: Level 2
// no 1 Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let maxSkills = 0;
let mostSkilledUser = null;

for (let user in users) {
  let skillCount = users[user].skills.length;
  if (skillCount > maxSkills) {
    maxSkills = skillCount;
    mostSkilledUser = user; 
  }
}  
console.log(`The person with the most skills is ${mostSkilledUser} with ${maxSkills} skills.`); //

// no 2 Count logged in users, count users having greater than equal to 50 points from the following object.
// no 3 Find people who are MERN stack developer from the users object
let mern = [];
for (let user in users) {
  let skills = users[user].skills;
  if (skills.includes('MongoDB') && skills.includes('Express') 
      && skills.includes('React') && skills.includes('Node')) {
    mern.push(user);
  }
}
console.log(mern);

// no 4 Set your name in the users object without modifying the original users object
const newUsers = {users, Hawa: { email: 'hawa@email.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 21, isLoggedIn: true, points: 45 } };
console.log(newUsers);

// n0 5 Get all keys or properties of users object
console.log(Object.keys(users));

// no 6 Get all the values of users object
console.log(Object.values(users));

// no 7 Use the countries object to print a country name, capital, populations and languages.