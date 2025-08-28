// Exercises: Level 1
// no 1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt('Enter your age:');  
if (age >= 18) {
  console.log(`${age} You are old enough to drive`)
} else {
  console.log(`${age} You are left with ${18 - age} years to drive.`)   // 21 You are old enough to drive
}

// no 2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = prompt('Enter my age:');
let yourAge = prompt('Enter your age:');
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you`)
} else if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else {
  console.log("We are the same age!");   // You are 5 years older than me
}

// no 3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = Number(prompt('Enter number a:'));
let b = Number(prompt('Enter number b:'));
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is less than ${b}`)
}

// no 4 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = Number(prompt('Enter number:'));
if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}

// Exercises: Level 2
/*
Write a code which can give grades to students according to theirs scores:
80-100, A
70-80, B
60-69, C
50-59, D
0-49, F
*/
let grade = Number(prompt("Enter your grade:"));
switch (true) {
  case grade >= 80 && grade <= 100:
    console.log('A');
    break;
  case grade >= 70 && grade <= 79:
    console.log('B');
    break;
  case grade >= 60 && grade <= 69:
    console.log('C');
    break;
  case grade >= 50 && grade <= 59:
    console.log('D');
    break;
  case grade >=0 && grade <= 49:
    console.log('F');
    break;    
  default:
    console.log('Invalid score');
}

//  Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
/*
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
let season = prompt("Enter a month:");
switch (season) {
  case 'September':
  case 'October':
  case 'November':
    console.log('Autumn')
    break;
  case 'December':
  case 'January':
  case 'February': 
    console.log('Winter')
    break;
  case 'March':
  case 'April':
  case 'May':
    console.log('Spring')
    break;
  case 'June':
  case 'July':
  case 'August':
    console.log('Summer')
    break  
  default:
    console.log('Invalid Season');
}    

// no 3 Check if a day is weekend day or a working day. Your script will take day as an input.
/*
What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/
let day = prompt("Enter a Day:").toLowerCase();
switch (day) {
  case 'monday':
  case 'tuesday':
  case 'wednesday': 
  case 'thursday':  
  case 'friday':  
    console.log('${day.charAt(0).toUpperCase() + day.slice(1)} working day')
    break;
  case 'saturday': 
  case 'sunday':
    console.log('${day.charAt(0).toUpperCase() + day.slice(1)} weekend day')
    break;
  default:
    console.log('It is not a valid day.')
}

// Exercises: Level 3
// no 1 Write a program which tells the number of days in a month.
/*
Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/
let month = prompt('Enter month').toLowerCase();
switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days.`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days.`);
    break;
  case "february":
    console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days.`);
    break;
  default:
    console.log("Invalid month.");
}


// Write a program which tells the number of days in a month, now consider leap year.
let monnth = prompt("Enter a month:").toLowerCase();
let year = Number(prompt("Enter a year:"));

// For leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0);
}

switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days.`);
    break;

  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days.`);
    break;

  case "february":
    if (isLeapYear(year)) {
      console.log(`February ${year} has 29 days (Leap Year).`);
    } else {
      console.log(`February ${year} has 28 days.`);
    }
    break;

  default:
    console.log("Invalid month.");
}
