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

// no 11