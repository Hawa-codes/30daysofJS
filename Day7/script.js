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
