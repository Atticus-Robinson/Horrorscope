var signup = document.querySelector('#signup');

async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const birthday = document.querySelector('#pickOne').value.trim();

  console.log(email);
  console.log(password);
  console.log(birthday);

  if (email && password && birthday) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        email,
        password,
        birthday
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/daily-reading');
    } else {
      alert(response.statusText);
    }
  }
}

function signChoice() {
  selectEl = document.querySelector('#pickOne');
  output = selectEl.value;
  document.querySelector('.output').textContent = output;
  console.log(output);
}

signup.addEventListener('click', signChoice);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);