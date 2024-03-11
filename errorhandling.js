fetch('https://jsonplaceholder.typicode.com/posts/123456789')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data from the API:', data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error.message);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Failed to fetch data. Please try again later.';
    document.body.appendChild(errorMessage);
  });