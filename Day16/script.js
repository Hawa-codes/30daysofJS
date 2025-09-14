// Exercises Level 1
// Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const skill = JSON.stringify(skills, undefined, 4)
console.log(skill);

// Stringify the age variable
let age = 250;
let agee = JSON.stringify(age, undefined, 4)
console.log(agee);

// Stringify the isMarried variable
let isMarried = true 
let isMarreid = JSON.stringify(isMarried, undefined, 3)
console.log(isMarreid);

// Stringify the student object
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const stud = JSON.stringify(student,['firstName', 'lastName', 'age', 'isMarried', 'skills'],4)
console.log(stud);

// Exercises Level 2
// Stringify the students object with only firstName, lastName and skills properties
const studdent = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const stude = JSON.stringify(studdent,['firstName', 'lastName', 'skills'],4)
console.log(stude);

// Exercises Level 3
// Parse the txt JSON to object.
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
const text = JSON.parse(txt, undefined, 4)
console.log(text);

// Find the user who has many skills from the variable stored in txt.
// class UserStatistics {
//   constructor(txt) {
//     this.txt = txt;
//   }
//   getUserWithMostSkills() {
//     let mostSkilledUser = this.txt[0];

//     for (let user of this.txt) {
//       if (user.skills.length > mostSkilledUser.skills.length) {
//         mostSkilledUser = user;
//       }
//     }

//     return mostSkilledUser;
//   }
// }

// const stats = new UserStatistics(txt);
// console.log(stats.getUserWithMostSkills());
