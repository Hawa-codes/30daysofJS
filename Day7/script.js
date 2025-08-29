// no 1 Declare a function fullName and it print out your full name.
function fullName(firstName, lastName) {
}

console.log(fullName('Amirah', 'Adediran'));  // Amirah Adediran

// no 2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(fullName('Hawa', 'Adediran'));  // Hawa Adediran

// no 3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
   return sum
}
console.log(addNumbers(2, 19));  // 21

// no 4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    let area = length * width;
    return area
}

console.log(areaOfRectangle(4, 4)); // 16

// no 5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    let perimeter = 2*(length + width);
    return perimeter
}
console.log(perimeterOfRectangle(3, 6)); // 18

// no 6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height;
    return volume
}
console.log(volumeOfRectPrism(3, 3, 3)); // 27

// no 7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
    return  Math.PI * r * r
}
console.log(areaOfCircle(2)); // 12.566370614359172

// no 8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
    return  2 * Math.PI * r
}
console.log(areaOfCircle(3));  // 28.274333882308138

// no 9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
    return  mass / volume
}
console.log(density(8, 2));  // 4

// no 10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function Speed(distance, time) {
    return  distance / time
}
console.log(Speed(80, 2));  // 40 

// no 11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function Weight(mass, gravity = 9.81) {
    return  mass * gravity
}
console.log(Weight(8));  // 78.48

// no 12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC) {
    return  (oC * 9/5) + 32
}
console.log(convertCelsiusToFahrenheit(100));  // 212

// no 13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function bmi(weight, height) {
    const value = weight / (height * height);

    if (value < 18.5) {
    return "Underweight";
  } else if (value >= 18.5 && value <= 24.9) {
    return "Normal weight";
  } else if (value >= 25 && value <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// Underweight: BMI is less than 18.5
console.log(bmi(3, 6)); // Underweight
console.log(bmi(70, 1.75));  // Normal weight
console.log(bmi(90, 1.7));   // Obese
console.log(bmi(90, 1.8));   // Overweight 

// no 14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    month = month.toLowerCase();
    const autumn = ["september", "october", "november"];
    const winter = ["december", "january", "february"];
    const spring = ["march", "april", "may"];
    const summer = ["june", "july", "august"];

    if (autumn.includes(month)) {
    return "Autumn";
  } else if (winter.includes(month)) {
    return "Winter";
  } else if (spring.includes(month)) {
    return "Spring";
  } else if (summer.includes(month)) {
    return "Summer";
  } else {
    return "Invalid month";
  }
}

console.log(checkSeason('March'));  // spring

// no 15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {
    let max = a;   // assume a is the largest

    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }

    return max;
}

console.log(findMax(10, 5, 7));   // Output: 10
console.log(findMax(3, 20, 15));  // Output: 20
console.log(findMax(-5, -2, -10)); // Output: -2


// Exercises: Level 2
// no 1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, x, b, y, c) {
    let equation = (a * x + b * y + c);
    return equation
}

console.log(solveLinEquation(2, 3, 2, 2, 3)); // 13
console.log(solveLinEquation(2, 0, 2, 4, 0)); // 8

// **no 2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, x, b, c) {
    let equation = (a * (x ** 2) + b * x + c);
    return equation
}

console.log(solveQuadEquation(2, 3, 10, 12)); // 60

// no 3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printArray([1, 2, 3, 4, 5]);

// **no 4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    const now = new Date();

    let day = now.getDate();
    let month = now.getMonth() + 1; // Months are 0-indexed
    let year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
}

// no 5 Declare a function name swapValues. This function swaps value of x to y
function swapValues(x, y) {
  let temp = x; 
  x = y;      
  y = temp;     
  console.log(x, y);
}
swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4

// no 6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
    let reversed = [];              
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);        
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5]));  // [5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C'])); // ['C', 'B', 'A']

// no 7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray
function capitalizeArray(array) {
  let capitalizedArray = [];
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedArray.push(capitalizedWord);
  }
  return capitalizedArray;
}

console.log(capitalizeArray(["hawa", "amir", "amirah"]));  // ['Hawa', 'Amir', 'Amirah']

// no 8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
    let arr = []; 
    arr.push(item); 
    return arr; 
}
console.log(addItem("apple"));  // ["apple"]
console.log(addItem(10));  // [10]


// no 9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index) {
let arr = ["apple", "banana", "mango", "orange"];
  arr.splice(index, 1);  
  return arr;
}
console.log(removeItem(0));  // ['banana', 'mango', 'orange']
console.log(removeItem(2));  // ['apple', 'banana', 'orange']

// no 10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumOfNumbers([1, 2, 3, 4, 5]));  // 15

// no 11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {   
      sum += i;
    }
  }

  return sum;
}

console.log(sumOfOdds(10));  // 1+3+5+7+9 = 25
console.log(sumOfOdds(7)); 

// no 12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2=== 0) {   
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfEven(10));   // 30
console.log(sumOfEven(7)); // 12

// no 13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.\
function evensAndOdds(n) {
  let evens = 0;
  let odds = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  console.log(`The number of evens are ${evens}.`);
  console.log(`The number of odds are ${odds}.`);
}

evensAndOdds(100);  
// The number of evens are 51
// The number of odds are 50

// no 14  Write a function which takes any number of arguments and return the sum of the arguments
function sumAll(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(sumAll(1, 2, 3));        // 6
console.log(sumAll(10, 20, 30, 40)); // 100
console.log(sumAll(5));              // 5

// no 15 Writ a function which generates a randomUserIp.
function randomUserIp() {
  let ip = "";
  for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * 256); // 0–255
    ip += num;
    if (i < 3) ip += ".";
  }
  return ip;
}
console.log(randomUserIp()); // 62.217.157.224

// no 16 Write a function which generates a randomMacAddress
function randomMacAddress() {
  let mac = "";
  const hex = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    let pair = hex[Math.floor(Math.random() * 16)] + hex[Math.floor(Math.random() * 16)];
    mac += pair;
    if (i < 5) mac += ":";
  }
  return mac;
}
console.log(randomMacAddress()); // 1D:F5:68:41:16:E2

// no 17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
  let hex = "#";
  const chars = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
}
console.log(randomHexaNumberGenerator()); // #16b784

// no 18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 7; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

console.log(userIdGenerator()); 

// Exercises: Level 3
// no 1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charLength = parseInt(prompt("Enter number of characters per ID:"));
  let numberOfIds = parseInt(prompt("Enter number of IDs to generate:"));

  let ids = "";

  for (let i = 0; i < numberOfIds; i++) {
    let id = "";
    for (let j = 0; j < charLength; j++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }
    ids += id + "\n"; 
  }

  return ids;
}
console.log(userIdGeneratedByUser());

// no 2 Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
  let r = Math.floor(Math.random() * 256); 
  let g = Math.floor(Math.random() * 256); 
  let b = Math.floor(Math.random() * 256); 

  return `rgb(${r},${g},${b})`;
}
console.log(rgbColorGenerator()); // rgb(243,79,205)

// no 3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(num) {
  let colors = [];
  const hexChars = "0123456789abcdef";

  for (let i = 0; i < num; i++) {
    let color = "#";
    for (let j = 0; j < 6; j++) {
      let randomIndex = Math.floor(Math.random() * hexChars.length);
      color += hexChars[randomIndex];
    }
    colors.push(color);
  }

  return colors;
}
console.log(arrayOfHexaColors(5));

// no 4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(num) {
  let colors = [];
  for (let i = 0; i < num; i++) {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    colors.push(`rgb(${r},${g},${b})`);
  }

  return colors;
}
console.log(arrayOfRgbColors(5));

// no 5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex) {
  hex = hex.replace("#", "");

  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r},${g},${b})`;
}
console.log(convertHexaToRgb("#ff5733")); 

// no 6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(r, g, b) {
  let red = r.toString(16).padStart(2, "0");
  let green = g.toString(16).padStart(2, "0");
  let blue = b.toString(16).padStart(2, "0");

  return `#${red}${green}${blue}`;
}

console.log(convertRgbToHexa(255, 87, 51));

// no 7 Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(type, num) {
  let colors = [];

  if (type === 'hexa') {
    const randomHex = () =>
      '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');

    for (let i = 0; i < num; i++) {
      colors.push(randomHex());
    }

  } else if (type === 'rgb') {
    const randomRgb = () => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    };

    for (let i = 0; i < num; i++) {
      colors.push(randomRgb());
    }
  }

  return num === 1 ? colors[0] : colors;
}

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// no 8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffleArray([1, 2, 3, 4, 5]));

// no 9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n) {
  if (n < 0) return 'Factorial not defined for negative numbers';
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

// no  10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(param) {
  return param === undefined || param === null || param.length === 0;
}

console.log(isEmpty([]));
console.log(isEmpty(''));
console.log(isEmpty([1, 2]));

// no  11 Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// no  12 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr) {
  if (!arr.every(item => typeof item === 'number')) {
    return 'All items must be numbers';
  }
  return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sumOfArrayItems([1, 2, 3, 4]));

// no  13 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
// 7. average
function average(arr) {
  if (!arr.every(item => typeof item === 'number')) {
    return 'All items must be numbers';
  }
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}

console.log(average([1, 2, 3, 4]));

// no  14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(arr) {
  if (arr.length < 5) return 'Not Found';
  arr[4] = arr[4].toUpperCase();
  return arr;
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

// no  15 Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

// no  16 Write a functions which checks if all items are unique in the array.
function allUnique(arr) {
  return new Set(arr).size === arr.length;
}

console.log(allUnique([1,2,3,4]));
console.log(allUnique([1,2,2,3]));

// no  17 Write a function which checks if all the items of the array are the same data type.
function sameDataType(arr) {
  return arr.every(item => typeof item === typeof arr[0]);
}
console.log(sameDataType([1, 2, 3]));
console.log(sameDataType([1, 'a', true]));

// **no  18 JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(name) {
  const valid = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return valid.test(name);
}
console.log(isValidVariable('firstName')); // true
console.log(isValidVariable('1name'));  // false
console.log(isValidVariable('_name'));  // true

// no  19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenRandomNumbers() {
  let nums = new Set();
  while (nums.size < 7) {
    nums.add(Math.floor(Math.random() * 10));
  }
  return Array.from(nums);
}

console.log(sevenRandomNumbers()); // [2, 9, 7, 5, 8, 0, 3]
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

// no  20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(countries) {
  return [...countries].reverse();
}

console.log(reverseCountries(['Nigeria', 'Ghana', 'Kenya', 'Egypt'])); // ['Egypt', 'Kenya', 'Ghana', 'Nigeria']

