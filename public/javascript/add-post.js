async function newFormHandler(event) {
  event.preventDefault();

  const description = document.querySelector('#horoscopeText').textContent;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/abyss');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#abyssBtn').addEventListener('click', newFormHandler);
