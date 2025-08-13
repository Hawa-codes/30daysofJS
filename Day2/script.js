// Exercise Level 1
let challenge = '30 Days Of JavaScript';
console.log(challenge);  //  30 Days Of JavaScript
console.log(challenge.length);  // 21
console.log(challenge.toUpperCase());  //  30 DAYS OF JAVASCRIPT
console.log(challenge.toLowerCase());  //  30 days of javascript
console.log(challenge.substring(0, 2));  //  30
console.log(challenge.substr(0, 2));  //  30
console.log(challenge.substring(3, 21));  //  Days Of JavaScript
console.log(challenge.includes('Script'));  //  true
console.log(challenge.split());  //  ['30 Days Of JavaScript']
console.log(challenge.split(' '));  //  ['30', 'Days', 'Of', 'JavaScript']

let name = 'Hawa, Aderinsola, Adewumi, Adebola';
console.log(name.split(', '));  // ['Hawa', 'Aderinsola', 'Adewumi', 'Adebola']
console.log(name.split(','));  // ['Hawa', ' Aderinsola', ' Adewumi', ' Adebola']

let app = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(app.split(', '));  // ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(app.split(','));  // ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

console.log(challenge.replace('30 Days Of JavaScript', '30 Days Of Python'));  //30 Days Of Python
console.log(challenge.charAt(15));   // S
console.log(challenge.charCodeAt(11));  // J  74

console.log(challenge.indexOf('a')); // 4
console.log(challenge.lastIndexOf('a'));  // 14

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));  // 31
console.log(sentence.lastIndexOf('because'));  //47
console.log(sentence.search('because'));  //31


let challenges = ' 30 Days Of JavaScript ';
console.log(challenges.trim(' '));   // 30 Days Of JavaScript

console.log(challenge.startsWith('30'));  // true
console.log(challenge.endsWith('JavaScript'));  // true
console.log(challenge.match(/a/g));  // ['a', 'a', 'a']
console.log(challenge.repeat(2));  // 30 Days Of JavaScript30 Days Of JavaScript

let string = '30 Days of';
console.log(string.concat(' JavaScript')); //  30 Days of JavaScript
