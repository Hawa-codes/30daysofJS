document.body.style.textAlign = 'center'
document.body.style.fontFamily = 'Arial, sans-serif'
document.body.style.margin = '30px'


// Wrapper
const wrapper = document.createElement('div')
wrapper.className = 'wrapper'
document.body.appendChild(wrapper)

// Heading
const h1 = document.createElement('h1')
h1.innerHTML = 'Asabeneh Yetayeh challenges in <span id="year">2020</span>'
wrapper.appendChild(h1)

const h2 = document.createElement('h2')
h2.textContent = '30DaysOfJavaScript Challenge'
wrapper.appendChild(h2)

// Date/time
const dateTime = document.createElement('p')
dateTime.id = 'date-time'
wrapper.appendChild(dateTime)

// Challenges array with language
const challenges = [
  { title: '30 Days Of Python', language: 'Python', status: 'Done' },
  { title: '30 Days Of JavaScript', language: 'JavaScript', status: 'Ongoing' },
  { title: '30 Days Of HTML & CSS', language: 'HTML & CSS', status: 'Coming' },
  { title: '30 Days Of React', language: 'React', status: 'Coming' },
  { title: '30 Days Of ReactNative', language: 'ReactNative', status: 'Coming' },
  { title: '30 Days Of FullStack', language: 'FullStack', status: 'Coming' },
  { title: '30 Days Of DataAnalysis', language: 'DataAnalysis', status: 'Coming' },
  { title: '30 Days Of Machine Learning', language: 'Machine Learning', status: 'Coming' }
]

// Build rows
challenges.forEach(ch => {
  const row = document.createElement('div')
  row.style.display = 'grid'
  row.style.gridTemplateColumns = '2fr 1fr 1fr'
  row.style.alignItems = 'flexStart'
  row.style.justifyContent = 'spaceBetween'
  row.style.width = '500px'
  row.style.margin = '4px auto'
  row.style.padding = '17px'
  row.style.fontSize = '13px'
  row.style.color = 'black'

  // color based on status
  if (ch.status === 'Done') row.style.backgroundColor = 'green'
  if (ch.status === 'Ongoing') row.style.backgroundColor = 'yellow'
  if (ch.status === 'Coming') row.style.backgroundColor = 'red'

  // Challenge name
  const name = document.createElement('span')
  name.textContent = ch.title
  row.appendChild(name)

  // Dropdown details
  const details = document.createElement('details')
  const summary = document.createElement('summary')
  summary.textContent = ch.language
  details.appendChild(summary)

  // Put some content inside dropdown (optional)
  const p = document.createElement('p')
  p.textContent = `More info about ${ch.language} challenge...`
  details.appendChild(p)

  row.appendChild(details)

  // Status text
  const status = document.createElement('span')
  status.textContent = ch.status
  row.appendChild(status)

  wrapper.appendChild(row)
})

// Year color animation
const yearSpan = document.getElementById('year')
yearSpan.style.fontSize = '40px'
setInterval(() => {
  yearSpan.style.color = randomColor()
}, 1000)

// Date/time update
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

function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}
