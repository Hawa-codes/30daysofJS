function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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

const headings = document.querySelectorAll('.color');

headings.forEach(heading => {
  const text = heading.innerText;

  heading.innerHTML = text
    .split('')
    .map(char => (char === ' ' ? ' ' : `<span>${char}</span>`))
    .join('');

  const letters = heading.querySelectorAll('span');

  setInterval(() => {
    letters.forEach(span => {
      span.style.color = randomColor();
    });
  }, 1000);

  setInterval(() => {
    heading.style.fontFamily = randomFont();
  }, 2000);
});

const back = document.querySelector('main');
setInterval(() => {
  back.style.backgroundColor = randomColor();
}, 1000);
