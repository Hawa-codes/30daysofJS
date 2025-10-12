document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const password = document.getElementById('password');
  const bio = document.getElementById('bio');
  const message = document.getElementById('message');

  const nameRegex = /^[A-Za-z\s]+$/;                    
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;  
  const phoneRegex = /^0\d{10}$/;                      
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;   

  let valid = true;

  function checkInput(input, regex) {
    if (regex.test(input.value.trim())) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
      valid = false;
    }
  }

  checkInput(firstName, nameRegex);
  checkInput(lastName, nameRegex);
  checkInput(email, emailRegex);
  checkInput(phone, phoneRegex);
  checkInput(password, passwordRegex);

  if (bio.value.trim().length >= 5) {
    bio.classList.add('valid');
    bio.classList.remove('invalid');
  } else {
    bio.classList.add('invalid');
    bio.classList.remove('valid');
    valid = false;
  }

  if (valid) {
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";
  } else {
    message.textContent = "❌ Please fix the highlighted errors.";
    message.style.color = "red";
  }
});
