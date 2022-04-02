async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const birthday = document.querySelector('#birthday-signup').value.trim();

  if (email && password && birthday) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        email,
        username,
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

console.log(email)

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
