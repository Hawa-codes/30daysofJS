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
    return  2 *Math.PI * r
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
console.log(bmi(3, 6));