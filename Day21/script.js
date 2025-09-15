// Exercise: Level 1
// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// let firstTitle = document.querySelector('p')

// Get each of the the paragraph using document.querySelector('#id') and by their id
let firstTitle = document.querySelector('#first-title')
let secondTitle = document.querySelector('#second-title')
let thirdTitle = document.querySelector('#third-title')

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allTitles = document.querySelectorAll('p') 

console.log(allTitles.length)
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}

allTitles.forEach(title => console.log(title))

// Loop through the nodeList and get the text content of each paragraph
const allParagraphs = document.querySelector('p')
for (let i = 0; i < allParagraphs.length; i++) {
  console.log(allParagraphs[i].textContent)
}

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const titles = document.querySelectorAll('p')
titles[3].textContent = 'Fourth Title'

// Set id and class attribute for all the paragraphs using different attribute setting methods
titles[3].className = 'title'
titles[3].id = 'fourth-title'

// Exercise: Level 2
// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const title = document.querySelectorAll('p')
title.forEach((title, i) => {
  title.style.fontSize = '24px' 
  if ((i + 1)  % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})

const titl = document.querySelectorAll('p')
titl.forEach((title, i) => {
  title.style.fontSize = '24px' 
  if ((i + 1)  % 2 === 0) {
    title.style.backgroundColor = 'red'
  } else {
    title.style.backgroundColor = 'green'
  }
})
// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
const tile = document.querySelectorAll('p')
tile.forEach((title, i) => {
  title.style.fontSize = '24px' 
  if ((i + 1)  % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})

// Set text content, id and class to each paragraph
const titless = document.querySelectorAll('p')

titless.forEach((p, i) => {
  p.textContent = `Paragraph ${i + 1}`

  p.id = `paragraph-${i + 1}`

  p.className = 'title'

  // OR, if you want to add another class in addition to existing:
  // p.classList.add('title')
})


