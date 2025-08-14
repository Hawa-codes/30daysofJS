// Exercise Level 1
// no 1 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

// no 2 Print the string on the browser console using console.log()
console.log(challenge);  //  30 Days Of JavaScript

// no 3 Print the length of the string on the browser console using console.log(
console.log(challenge.length);  // 21

// no 4 Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());  //  30 DAYS OF JAVASCRIPT

// no 5 Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());  //  30 days of javascript

// no 6 Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0, 2));  //  30
console.log(challenge.substr(0, 2));  //  30

// no 7 Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3, 21));  //  Days Of JavaScript

// no 8 Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));  //  true

// no 9 Split the string into an array using split() method
console.log(challenge.split());  //  ['30 Days Of JavaScript']

// no 10 Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));  //  ['30', 'Days', 'Of', 'JavaScript']

let name = 'Hawa, Aderinsola, Adewumi, Adebola';
console.log(name.split(', '));  // ['Hawa', 'Aderinsola', 'Adewumi', 'Adebola']
console.log(name.split(','));  // ['Hawa', ' Aderinsola', ' Adewumi', ' Adebola']

// no 11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let app = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(app.split(', '));  // ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(app.split(','));  // ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

// no 12 Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('30 Days Of JavaScript', '30 Days Of Python'));  //30 Days Of Python

// no 13 What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));   // S

// no 14 What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));  // J  74

// no 15 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a')); // 4

// no 16 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));  // 14

// no 17 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));  // 31

// no 18 Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'));  //47

// no 19 Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'));  //31

// no 20 Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challenges = ' 30 Days Of JavaScript ';
console.log(challenges.trim(' '));   // 30 Days Of JavaScript

// no 21 Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));  // true

// no 22 Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'));  // true

// no 23 Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/a/g));  // ['a', 'a', 'a']

// no 24 Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let string = '30 Days of';
console.log(string.concat(' JavaScript')); //  30 Days of JavaScript

// no 25 Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));  // 30 Days Of JavaScript30 Days Of JavaScript



//  Exercise  Level 2
// no 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."); 
// no 2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
// no 3
let num = '10';
console.log(typeof '10' === typeof 10);  // false
let numTen = Number('10');
console.log(numTen);  // 10
//no 4
let numm = 9.8;
console.log(parseFloat('9.8') === 10);  // false
let nummPf = Math.round(parseFloat('9.8'));
console.log(nummPf);  // 10
// no 5
let check = 'python, jargon';
console.log(check.includes('on')); // true
// no 6
let checkk = 'I hope this course is not full of jargon';
console.log(checkk.includes('jargon')); // true
// no 7
let randomNumber1 = Math.floor(Math.random() * 101); // 0–100
console.log(randomNumber1);  // 84
// no 8
let randomNumber2 = Math.floor(Math.random() * 51) + 50; // 50–100
console.log(randomNumber2);  // 71
//no 9
let randomNumber3 = Math.floor(Math.random() * 256); // 0–255
console.log(randomNumber3);  //139
// no 10
let sstring = 'JavaScript';
let randomNum = Math.floor(Math.random() * sstring.length); 
console.log(sstring[randomNum]);
// no 11
console.log(
    '1\t1\t1\t1\t1\n' +
    '2\t1\t2\t4\t8\n' +
    '3\t1\t3\t9\t27\n' +
    '4\t1\t4\t16\t64\n' +
    '5\t1\t5\t25\t125'
);
// no 12
let sent = 'You cannot end a sentence with because because because is a conjunction';
let startIndex = sent.indexOf('because because because');
let sente = sent.substr(startIndex, 'because because because'.length);
console.log(sente);  // because because because

// Exercise Level 3
// no 1
let word1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveWord = word1.match(/love/gi);
console.log(loveWord.length); // 3
// no 2
let word2 ='You cannot end a sentence with because because because is a conjunction';
let becauseWord = word2.match(/because/gi);
console.log(becauseWord.length); //3
// no 3
/*
const senten = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let cleanText = senten.replace(/[^a-zA-Z0-9\s]/g, '');
*/
// no 4
let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numbers = incomeText.match(/\d+/g).map(Number); // [5000, 10000, 15000]
