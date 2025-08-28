// .Slice the first ten countries from the countries array
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
];

// Find the middle country(ies) in the countries array
let middleIndex1 = (countries.length / 2) - 1; 
let middleIndex2 = countries.length / 2;

let middleItems = [countries[middleIndex1], countries[middleIndex2]];
console.log(middleItems); // ['Angola', 'Antigua and Barbuda']

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
