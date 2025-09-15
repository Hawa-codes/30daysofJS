// Exercise: Level 3
// DOM: Mini project 1
// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red
// Center everything
document.body.style.textAlign = 'center'
document.body.style.fontFamily = 'Arial, sans-serif'
document.body.style.margin = '30px'

// Heading styles
const h1 = document.querySelector('h1')
h1.style.fontSize = '20px'


const h2 = document.querySelector('h2')
h2.style.textDecoration = 'underline'
h2.style.fontSize = '24px'

// Change the YEAR color every 1 second
const yearSpan = document.getElementById('year')
yearSpan.style.fontSize = '30px'
setInterval(() => {
  yearSpan.style.color = randomColor()
}, 1000)

// Show date/time with changing background color
const dateTime = document.getElementById('date-time')
function updateDateTime() {
  const now = new Date()
  dateTime.textContent = now.toLocaleString()
  dateTime.style.backgroundColor = randomColor()
  dateTime.style.color = 'black'
  dateTime.style.display = 'inline-block'
  dateTime.style.padding = '4px 10px'
  dateTime.style.marginTop = '10px'
  dateTime.style.fontSize = '12px'
}
setInterval(updateDateTime, 1000)
updateDateTime()

// Color the list items depending on status
const lis = document.querySelectorAll('li')
lis.forEach(li => {
  li.style.listStyle = 'none'
  li.style.padding = '8px'
  li.style.margin = '4px'
  li.style.width = '420px'
  li.style.marginLeft = 'auto'
  li.style.marginRight = 'auto'
  li.style.color = 'black'
  li.style.textAlign = 'left'
  li.style.fontSize = '12px'

  if (li.textContent.includes('Done')) {
    li.style.backgroundColor = 'green'
  } else if (li.textContent.includes('Ongoing')) {
    li.style.backgroundColor = 'yellow'
    li.style.color = 'black'
  } else if (li.textContent.includes('Coming')) {
    li.style.backgroundColor = 'red'
  }
})

// Utility function to get a random color
function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}
