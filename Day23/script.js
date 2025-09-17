document.body.style.textAlign = 'center'
document.body.style.fontFamily = 'Arial, sans-serif'
document.body.style.margin = '30px'

// Wrapper for headings + controls
const wrapper = document.createElement('div')
wrapper.className = 'wrapper'
document.body.appendChild(wrapper)

// Headings
const h1 = document.createElement('h1')
h1.innerHTML = 'Number Generator'
h1.style.color = '#5bbc7a'
wrapper.appendChild(h1)

const h2 = document.createElement('h2')
h2.textContent = '30DaysOfJavaScript: DOM Day 3'
h2.style.marginTop = '-15px'
h2.style.fontWeight = '300'
h2.style.fontSize = '20px'
wrapper.appendChild(h2)

const h3 = document.createElement('h3')
h3.innerHTML = 'Author: Asabeneh Yetayeh'
h3.style.marginTop = '-10px'
h3.style.fontWeight = '300'
wrapper.appendChild(h3)

// Grab your existing input and button from HTML
const input = document.querySelector('#limit')
const button = document.querySelector('#generateBtn')

// move them into the wrapper so they appear after headings
wrapper.appendChild(input)
wrapper.appendChild(button)

// style input
input.style.width = '300px'
input.style.height = '20px'
input.style.padding = '10px'
input.style.margin = '10px'
input.style.border = '1px solid #5bbc7a'

// style button
button.style.backgroundColor = '#5bbc7a'
button.style.color = 'white'
button.style.padding = '10px 17px'
button.style.marginLeft = '10px'
button.style.border = 'none'
button.style.cursor = 'pointer'
button.style.fontWeight = 'bold'

// container for numbers (still outside wrapper so it fills width)
const container = document.getElementById('container')
container.style.display = 'grid'
container.style.gridTemplateColumns = 'repeat(6, 80px)'
container.style.gap = '7px'
container.style.alignItems = 'center'
container.style.justifyContent = 'center'

// prime checker
function isPrime(num) {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

// button click
button.addEventListener('click', () => {
  const n = parseInt(input.value, 10)
  container.innerHTML = '' // clear old numbers

  if (isNaN(n) || n < 0) {
    alert('Please enter a valid number (0 or above)')
    return
  }

  for (let i = 0; i <= n; i++) {
    const numBox = document.createElement('div')
    numBox.textContent = i
    numBox.style.padding = '20px'
    numBox.style.textAlign = 'center'
    numBox.style.fontSize = '20px'
    numBox.style.fontWeight = 'bold'
    numBox.style.color = 'white'
    numBox.style.width = '41px'

    if (isPrime(i)) {
      numBox.style.backgroundColor = 'red'
    } else if (i % 2 === 0) {
      numBox.style.backgroundColor = 'green'
    } else {
      numBox.style.backgroundColor = 'yellow'
    }
    container.appendChild(numBox)
  }
})
