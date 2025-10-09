function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const heading = document.querySelector('.color');

// Wrap each letter in a <span> so we can color them individually
const text = heading.innerHTML;
heading.innerHTML = text
  .split('')
  .map(char => {
    // Keep <br> tags as they are, don’t wrap them in spans
    if (char === '<' || char === '>') return char;
    return `<span>${char}</span>`;
  })
  .join('');
  
const letters = heading.querySelectorAll('span');

// Change each letter’s color every second
setInterval(() => {
  letters.forEach(span => {
    span.style.color = randomColor();
  });
}, 1000);

const back = document.querySelector('main')
setInterval(() => {
    back.style.backgroundcolor = randomColor()
}, 1000)