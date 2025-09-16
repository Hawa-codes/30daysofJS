// Exercises: Level 1
// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red

function styleHeading(el, size) {
  el.style.fontSize = size
  el.style.display = 'flex'
  el.style.alignItems = 'center'
  el.style.justifyContent = 'center'
}
const h1 = document.querySelector('h1')
styleHeading(h1, '30px')

const h2 = document.querySelector('h2')
styleHeading(h2, '25px')
h2.style.textDecoration = 'underline'

const h3 = document.querySelector('h3')
styleHeading(h3, '20px')
h3.style.textDecoration = 'underline'

const container = document.getElementById('container')
// Optional: give the container some layout styling
container.style.display = 'grid'
container.style.gridTemplateColumns = 'repeat(6, 80px)'
container.style.gap = '7px'
container.style.alignItems = 'center'
container.style.justifyContent = 'center'

// Helper function for Step 6: check if number is prime
function isPrime(num) {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

// Step 3: Loop through numbers 0–29
for (let i = 0; i < 102; i++) {
  // Step 4: Create element for each number
  const numBox = document.createElement('div')
  // Step 5: Set text
  numBox.textContent = i
  numBox.style.padding = '20px'
  numBox.style.textAlign = 'center'
  numBox.style.fontSize = '20px'
  numBox.style.fontWeight = 'bold'
  numBox.style.color = 'white'
  numBox.style.width = '41px'
  numBox.style.height = '10px'

      if (isPrime(i)) {
        numBox.style.backgroundColor = 'red'
      } else if (i % 2 === 0) {
        numBox.style.backgroundColor = 'green'
      } else {
        numBox.style.backgroundColor = 'yellow'
      }
      container.appendChild(numBox)
    }

