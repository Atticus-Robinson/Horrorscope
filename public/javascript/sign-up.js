async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const birthday = document.querySelector('#birthday-signup').value.trim();

  if (email && password) {
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

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
