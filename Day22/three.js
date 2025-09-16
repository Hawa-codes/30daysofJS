document.body.style.textAlign = 'center'
document.body.style.fontFamily = 'Arial, sans-serif'
document.body.style.margin = '30px'

// === Wrapper ===
const wrapper = document.createElement('div')
wrapper.className = 'wrapper'
document.body.appendChild(wrapper)

// === h1 and h2 ===
const h1 = document.createElement('h1')
h1.innerHTML = 'Asabeneh Yetayeh challenges in <span id="year">2020</span>'
wrapper.appendChild(h1)

const h2 = document.createElement('h2')
h2.textContent = '30DaysOfJavaScript Challenge'
wrapper.appendChild(h2)

// === Date/time ===
const dateTime = document.createElement('p')
dateTime.id = 'date-time'
wrapper.appendChild(dateTime)

// === Array of challenge data ===
const challenges = [
  { title: '30DaysOfPython Challenge', status: 'Done', desc: 'Completed successfully!' },
  { title: '30DaysOfJavaScript Challenge', status: 'Ongoing', desc: 'Currently in progress.' },
  { title: '30DaysOfReact Challenge', status: 'Coming', desc: 'Will start soon.' },
  { title: '30DaysOfFullStack Challenge', status: 'Coming', desc: 'Will start soon.' },
  { title: '30DaysOfDataAnalysis Challenge', status: 'Coming', desc: 'Will start soon.' },
  { title: '30DaysOfReactNative Challenge', status: 'Coming', desc: 'Will start soon.' },
  { title: '30DaysOfMachineLearning Challenge', status: 'Coming', desc: 'Will start soon.' }
]

// === Create dropdowns instead of li ===
challenges.forEach(ch => {
  const details = document.createElement('details')
  const summary = document.createElement('summary')
  summary.textContent = `${ch.title} - ${ch.status}`
  details.appendChild(summary)

  const content = document.createElement('p')
  content.textContent = ch.desc
  details.appendChild(content)

  // Common style
  details.style.width = '420px'
  details.style.margin = '4px auto'
  details.style.padding = '8px'
  details.style.color = 'black'
  summary.style.cursor = 'pointer'
  summary.style.fontSize = '12px'
  content.style.fontSize = '12px'
  content.style.marginTop = '4px'

  // Color based on status
  if (ch.status === 'Done') {
    details.style.backgroundColor = 'green'
  } else if (ch.status === 'Ongoing') {
    details.style.backgroundColor = 'yellow'
    details.style.color = 'black'
  } else if (ch.status === 'Coming') {
    details.style.backgroundColor = 'red'
  }

  wrapper.appendChild(details)
})

// === Heading styles ===
h1.style.fontSize = '20px'
h2.style.textDecoration = 'underline'
h2.style.fontSize = '24px'

// === YEAR color change ===
const yearSpan = document.getElementById('year')
yearSpan.style.fontSize = '30px'
setInterval(() => {
  yearSpan.style.color = randomColor()
}, 1000)

// === Date/time update ===
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

// === Utility function ===
function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}
