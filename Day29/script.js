function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Random font list (you can add more!)
const fonts = [
  'Arial', 
  'Verdana', 
  'Courier New', 
  'Georgia', 
  'Times New Roman', 
  'Poppins', 
  'Trebuchet MS', 
  'Comic Sans MS'
];

function randomFont() {
  return fonts[Math.floor(Math.random() * fonts.length)];
}

// Select all headings with class "color"
const headings = document.querySelectorAll('.color');

// Apply the color-changing and font-changing effects
headings.forEach(heading => {
  const text = heading.innerText;

  // Wrap each letter in <span>
  heading.innerHTML = text
    .split('')
    .map(char => (char === ' ' ? ' ' : `<span>${char}</span>`))
    .join('');

  const letters = heading.querySelectorAll('span');

  // Change each letter's color every second
  setInterval(() => {
    letters.forEach(span => {
      span.style.color = randomColor();
    });
  }, 1000);

  // Change the whole heading's font every 2 seconds
  setInterval(() => {
    heading.style.fontFamily = randomFont();
  }, 2000);
});

// Change the background color of <main> every second
const back = document.querySelector('main');
setInterval(() => {
  back.style.backgroundColor = randomColor();
}, 1000);
