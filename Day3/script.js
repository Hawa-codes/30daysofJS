// Exercises: Level 1

// no 1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Hawa";
let lastName = "Adediran";
let country = "Nigeria";
let city = "Lagos"
let age = 20;
let isMarried = false;
let year = 2025;

console.log(typeof "Hawa");  // string
console.log(typeof "Adediran");  // string
console.log(typeof "Nigeria");  // string
console.log(typeof "Lagos");  // string
console.log(typeof 20);  // number
console.log(typeof false);  // boolean
console.log(typeof 2025);  // number

// no 2  Check if type of '10' is equal to 10
console.log('10' == 10);  // true
console.log('10' === 10);  // false

// no 3 Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10);  // false
console.log(parseInt('9.8') === 10);  // false

// no 4 Boolean value is either true or false.
//  Write three JavaScript statement which provide truthy value.
let numOne = 5;
let numTwo = 3;
console.log(numOne > numTwo);  // true

let numThree = 2;
let numFour = 3;
console.log(numThree < numFour);  //  true

let numFive = '3';
let numSix = 3;
console.log(numFive == numSix);  // true

//Write three JavaScript statement which provide falsy value.
let numFivee = '3';
let numSixx = 3;
console.log(numFive === numSix);  // false

let numSeven = 10;
let numEight = 10;
console.log(10 !== 10);  // false

let numOnee = 5;
let numTwoo = 3;
console.log(numOne < numTwo);  // false


// no 5 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 4 > 3  true
console.log(4 > 3);
// 4 >= 3   true
console.log(4 >= 3);
// 4 < 3  false
console.log(4 < 3);
// 4 <= 3 false
console.log(4 <= 3);
// 4 == 4  true
console.log(4 == 4);
// 4 === 4  true
console.log(4 === 4);
// 4 != 4   false
console.log(4 != 4);
// 4 !== 4  false
console.log(4 !== 4);
// 4 != '4'  false
console.log(4 != '4');
// 4 == '4' true
console.log(4 == '4');
// 4 === '4' false
console.log(4 === '4');

//Find the length of python and jargon and make a falsy comparison statement.
 let nnumBer = 'python';
 let numBer = 'jargon';
 console.log(nnumBer.length === numBer.length);  // true

 
// no 6  Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
const check = 4 > 3 && 10 < 12  
console.log(4 > 3 && 10 < 12);  //true
4 > 3 && 10 > 12  
console.log(4 > 3 && 10 > 12);  //false
4 > 3 || 10 < 12  
console.log(4 > 3 || 10 < 12);  //true
4 > 3 || 10 > 12  
console.log(4 > 3 || 10 > 12);  // true
!(4 > 3)  
console.log(!(4 > 3));  //false
!(4 < 3)  
console.log(!(4 < 3));  //true
!(false)  
console.log(!(false));  //true
!(4 > 3 && 10 < 12)  
console.log(!(4 > 3 && 10 < 12));  //false
!(4 > 3 && 10 > 12)  
console.log(!(4 > 3 && 10 > 12));   //true
!(4 === '4')       
console.log(!(4 === '4'));  //true

// There is no 'on' in both dragon and python
 let nuumBer = 'python';
 let nummBer = 'jargon';
console.log(nuumBer.includes('on'));  //true
console.log(nummBer.includes('on'));  //true   
let noOn = !('python') && !('jargon');  //true && true ---- true
console.log(noOn);  //false


// no 7 Use the Date object to do the following activities
// What is the year today?
const now = new Date();
console.log(now.getFullYear());  // 2025

// What is the month today as a number?
const noww = new Date();
console.log(noww.getMonth());  // 7

// What is the date today?
const nooww = new Date();
console.log(nooww.getDate());  // 15

// What is the day today as a number?
const noow = new Date();
console.log(noow.getDay());  // 5

// What is the hours now?
const nooow = new Date();
console.log(nooow.getHours());  // 17

// What is the minutes now?
const nowww = new Date();
console.log(nowww.getMinutes());  // 24

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let timee = new Date();
console.log(timee.getTime());  // 1755286300084

// Exercises: Level 2
// no 1 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt();
let height = prompt();
base = Number(base);
height = Number(height);

let area = (0.5 * base * height);
console.log(area);  // 0

// no 2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let  a = 5;
let  b = 4;
let c = 3;
let  perimeter = (a + b + c);
console.log(perimeter);  // 12

// no 3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = 5;
let width = 4;
let periimeter = 2 * (length + width);
let areea = length * width;
console.log(periimeter);  // 18
console.log(areea);  // 20
// let areaa = length * width   (perimeter = 2 * (length + width));

// no 4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt(5);
const pi = 3.14;
let areaa = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(areaa);  // 
console.log(circumference);  // 

// no 5 Calculate the slope, x-intercept and y-intercept of y = 2x -2
/*
let x = 2;
let y = 2x -2;
*/